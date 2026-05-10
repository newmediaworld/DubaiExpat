/**
 * related-articles.ts — build a per-article list of related URLs based on
 * shared category, category-affinity mapping, and a cluster-anchor fallback.
 *
 * Why this exists:
 *   Internal-link cluster strength was identified in the 10 May SEO audit as the
 *   single binding constraint on DX indexing recovery. Zero of 18 DX articles
 *   were using <RelatedGuides>; 8/18 had fewer than 4 internal outbound links.
 *
 *   This module reads every article frontmatter at build/SSR time, groups by
 *   category, and produces a 5-item related-articles list per article.
 *   ArticleLayout consumes the list and renders <RelatedGuides items={...} /> at
 *   the end of every article — no per-article maintenance required.
 *
 * Algorithm:
 *   1. Same-category siblings (newest-first) — strongest topical signal
 *   2. Category-affinity siblings (e.g. Healthcare → Family / Visa)
 *   3. Cluster-anchor pages (top guide + cornerstone articles)
 *   4. Deduplicate; cap at requested count
 */

import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

const ARTICLES_DIR = join(process.cwd(), "content", "articles");

export interface RelatedArticle {
  title: string;
  href: string;
}

interface ArticleEntry {
  slug: string;
  title: string;
  meta_title: string;
  category: string;
  date: string;
}

// Category-affinity map. When a category has thin same-category siblings, we
// pull from these adjacent categories to keep relatedness high.
// Each entry = ordered list of preferred adjacent categories.
const CATEGORY_AFFINITY: Record<string, string[]> = {
  "Banking": ["Tax & Finance", "Finance", "Playbook", "Cost of Living"],
  "Career & Finance": ["Tax & Finance", "Finance", "Banking", "Cost of Living"],
  "Cost of Living": ["Banking", "Tax & Finance", "Family", "Lifestyle"],
  "Family": ["Lifestyle", "Healthcare", "Cost of Living", "Visa & Residency"],
  "Finance": ["Tax & Finance", "Banking", "Career & Finance", "Playbook"],
  "Healthcare": ["Family", "Visa & Residency", "Cost of Living", "Lifestyle"],
  "Lifestyle": ["Family", "Cost of Living", "Travel", "Utilities"],
  "Playbook": ["Banking", "Tax & Finance", "Visa & Residency", "Cost of Living"],
  "Property": ["Cost of Living", "Family", "Banking", "Visa & Residency"],
  "Relocation": ["Family", "Visa & Residency", "Cost of Living", "Lifestyle"],
  "Tax & Finance": ["Banking", "Finance", "Career & Finance", "Playbook"],
  "Technology": ["Lifestyle", "Utilities", "Cost of Living"],
  "Travel": ["Lifestyle", "Family", "Cost of Living"],
  "Utilities": ["Cost of Living", "Technology", "Lifestyle"],
  "Visa & Residency": ["Tax & Finance", "Family", "Healthcare", "Relocation"],
};

// Cluster-anchor pages. These are the cornerstone guides + most authoritative
// articles. Used as final fallback. Curated to span the major decision surfaces
// a UK expat in Dubai cares about: visa, money, housing, schools, healthcare.
const CLUSTER_ANCHORS: RelatedArticle[] = [
  { title: "UK Tax Residency Rules for Dubai Expats", href: "/articles/uk-tax-residency-rules-dubai-expats" },
  { title: "Dubai Visa & Residency Routes", href: "/guides/visa-residency" },
  { title: "Open a Dubai Bank Account as a UK Expat", href: "/articles/bank-account-dubai-uk-expats" },
  { title: "Cost of Living in Dubai for UK Expats", href: "/cost-of-living" },
  { title: "Hidden Costs of Dubai Life", href: "/articles/hidden-costs-dubai-life-uk-expats" },
  { title: "Best British Schools in Dubai", href: "/articles/best-british-schools-dubai-uk-expats-2026" },
  { title: "Dubai Health Insurance for UK Expats", href: "/articles/expat-health-insurance-dubai-cigna-bupa-allianz" },
];

let cache: ArticleEntry[] | null = null;

function loadAllArticles(): ArticleEntry[] {
  if (cache) return cache;
  const out: ArticleEntry[] = [];
  let files: string[];
  try {
    files = readdirSync(ARTICLES_DIR);
  } catch {
    return [];
  }
  for (const file of files) {
    if (!file.endsWith(".mdx")) continue;
    const raw = readFileSync(join(ARTICLES_DIR, file), "utf-8");
    const { data } = matter(raw);
    if (data.status === "draft") continue;
    out.push({
      slug: file.replace(/\.mdx$/, ""),
      title: (data.meta_title || data.title || file).toString(),
      meta_title: (data.meta_title || data.title || file).toString(),
      category: (data.category || "").toString(),
      date: (data.date || "").toString(),
    });
  }
  cache = out;
  return out;
}

function entriesByCategory(all: ArticleEntry[], category: string, excludeSlug: string): RelatedArticle[] {
  return all
    .filter((a) => a.slug !== excludeSlug && a.category === category)
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
    .map((a) => ({ title: a.meta_title, href: `/articles/${a.slug}` }));
}

/**
 * Compute up to `count` related articles for a given slug, prioritising:
 *   1. Same-category siblings (newest-first)
 *   2. Adjacent-category siblings via CATEGORY_AFFINITY map (newest-first)
 *   3. Cluster-anchor pages
 *
 * The article's own slug is excluded from all paths.
 */
export function getRelatedArticles(slug: string, count = 5): RelatedArticle[] {
  const all = loadAllArticles();
  const me = all.find((a) => a.slug === slug);

  const seen = new Set<string>([`/articles/${slug}`]);
  const result: RelatedArticle[] = [];

  function push(items: RelatedArticle[]) {
    for (const item of items) {
      if (result.length >= count) return;
      if (seen.has(item.href)) continue;
      seen.add(item.href);
      result.push(item);
    }
  }

  if (me) {
    // 1. Same category
    push(entriesByCategory(all, me.category, slug));

    // 2. Affinity categories
    const affinity = CATEGORY_AFFINITY[me.category] || [];
    for (const adjCategory of affinity) {
      if (result.length >= count) break;
      push(entriesByCategory(all, adjCategory, slug));
    }
  }

  // 3. Cluster anchors
  push(CLUSTER_ANCHORS);

  return result;
}
