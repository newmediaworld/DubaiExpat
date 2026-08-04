import Header from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { pageMetadata } from "@/lib/metadata";
import { getAllArticles, type ArticleEntry } from "@/lib/related-articles";

const TITLE = "All Dubai Expat Articles | DubaiExpat";
const DESCRIPTION =
  "Every DubaiExpat article in one place — banking, tax, property, schools, healthcare, visas, cost of living and daily life in Dubai, written for UK expats and updated for 2026.";
const URL_PATH = "/articles";
const ABSOLUTE_URL = `https://www.dubaiexpat.co.uk${URL_PATH}`;

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: URL_PATH,
  type: "website",
});

/**
 * Hand-built article pages that live at app/articles/<slug>/page.tsx rather
 * than content/articles/*.mdx. They have no frontmatter, so their card data is
 * mirrored here. Keep in sync if a new non-MDX article page is added.
 */
const STATIC_ARTICLES: ArticleEntry[] = [
  {
    slug: "is-dubai-safe-2026",
    title: "Is Dubai Safe for Expats in 2026? UK Citizen Guide",
    meta_title: "Is Dubai Safe for Expats in 2026? UK Citizen Guide",
    meta_description:
      "Honest look at safety in Dubai for British expats in 2026 — Iran-UAE conflict, FCDO advice, daily life, and what to consider before relocating.",
    category: "Dubai Right Now",
    date: "2026-04-13",
    readMinutes: 8,
  },
  {
    slug: "dubai-situation-update",
    title: "Dubai Situation Update: What British Expats Are Saying (April 2026)",
    meta_title: "Dubai Situation Update: What British Expats Are Saying",
    meta_description:
      "Hear from the British expat community in Dubai — who's staying, who's leaving, and what daily life actually looks like during the Iran-UAE conflict.",
    category: "Dubai Right Now",
    date: "2026-04-13",
    readMinutes: 7,
  },
  {
    slug: "should-i-still-move-to-dubai",
    title: "Should I Still Move to Dubai? Honest 2026 Assessment",
    meta_title: "Should I Still Move to Dubai? Honest 2026 Assessment",
    meta_description:
      "Pros and cons of relocating to Dubai in 2026 — security, finances, lifestyle, visa options, and whether now is the right time to make the move.",
    category: "Dubai Right Now",
    date: "2026-04-13",
    readMinutes: 9,
  },
];

/** Categories with the most depth surface first; ties broken alphabetically. */
function groupByCategory(articles: ArticleEntry[]) {
  const byCategory = new Map<string, ArticleEntry[]>();
  for (const article of articles) {
    const key = article.category || "Uncategorised";
    const bucket = byCategory.get(key);
    if (bucket) bucket.push(article);
    else byCategory.set(key, [article]);
  }

  return Array.from(byCategory.entries())
    .map(([name, items]) => ({
      name,
      // Newest-first within each category.
      items: items.sort((a, b) => (b.date || "").localeCompare(a.date || "")),
    }))
    .sort((a, b) => b.items.length - a.items.length || a.name.localeCompare(b.name));
}

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function ArticlesIndex() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.dubaiexpat.co.uk/" },
    { name: "Articles", url: ABSOLUTE_URL },
  ];

  const all = [...getAllArticles(), ...STATIC_ARTICLES];
  const categories = groupByCategory(all);

  return (
    <main className="min-h-screen bg-white">
      <SchemaJsonLd
        type="WebPage"
        title={TITLE}
        description={DESCRIPTION}
        url={ABSOLUTE_URL}
        breadcrumbs={breadcrumbs}
      />
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-[#0A1628] transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#0A1628] font-medium">Articles</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0A1628] to-[#0F1F35] text-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/15 px-3 py-1 text-xs font-semibold text-[#C9A84C] ring-1 ring-[#C9A84C]/30">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
            {all.length} articles across {categories.length} topics
          </div>
          <h1 className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Every DubaiExpat Article in One Place
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200">
            Deep-dive articles written for UK expats and updated for 2026 —
            banking, UK tax, property, schools, healthcare, visas, utilities and
            the day-to-day realities of living in Dubai. Browse by topic below.
          </p>
          <div className="mt-6">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#C9A84C] hover:text-[#d5b760]"
            >
              Looking for the step-by-step relocation guides instead? →
            </Link>
          </div>
        </div>
      </section>

      {/* Category sections */}
      <section className="bg-zinc-50 py-14">
        <div className="max-w-5xl mx-auto space-y-12 px-6">
          {categories.map((category) => (
            <div key={category.name}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A84C]">
                {category.name}
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {category.items.length}{" "}
                {category.items.length === 1 ? "article" : "articles"}
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/articles/${a.slug}`}
                    className="group flex h-full flex-col rounded-2xl bg-white p-5 ring-1 ring-slate-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0A1628]/5 px-2.5 py-0.5 text-xs font-semibold text-[#0A1628]">
                      {a.category}
                    </span>
                    <h3 className="mt-3 text-base font-semibold text-[#0A1628]">
                      {a.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {a.meta_description}
                    </p>
                    <div className="mt-4 flex items-center justify-between gap-3 text-xs">
                      <span className="font-medium text-[#C9A84C]">
                        Read the article →
                      </span>
                      <span className="text-slate-400">
                        {a.readMinutes} min read
                        {formatDate(a.date) ? ` · ${formatDate(a.date)}` : ""}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-2xl bg-gradient-to-r from-[#0A1628] to-[#0F1F35] p-8 text-center text-white shadow-sm">
            <h2 className="text-2xl font-semibold">Planning the move itself?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-200">
              The relocation guides walk the process end to end — visas, housing,
              schools, banking and shipping. Start with the visa checker if you
              are not sure which route applies to you.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#0A1628] transition hover:bg-[#d5b760]"
              >
                Browse the guides
              </Link>
              <Link
                href="/visa-checker"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#C9A84C] transition hover:bg-[#C9A84C] hover:text-[#0A1628]"
              >
                Try the visa checker
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
