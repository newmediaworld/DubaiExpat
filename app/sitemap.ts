/**
 * Dynamic sitemap.xml — auto-generated at build time from the actual route tree.
 *
 * REPLACES public/sitemap.xml (which was hand-maintained and drifted from reality —
 * see SHARED/proposals/2026-04-26_seo_postmortem.md and lessons.md 2026-04-26).
 *
 * How it works:
 * - Walks app/ for every page.tsx file → emits one URL per route.
 * - Walks content/articles/*.mdx → emits one URL per MDX article (the dynamic [slug] route).
 * - Skips API routes, layout/loading/error files, and the legacy public/sitemap.xml itself.
 *
 * If you add a new page.tsx or .mdx article anywhere, it is automatically in the sitemap on next deploy.
 * If you ever need to exclude a page, add its path to the EXCLUDE_PATHS array below.
 */

import type { MetadataRoute } from "next";
import { readdirSync, readFileSync, statSync } from "fs";
import { join } from "path";

// Revalidate the sitemap response every hour. Without an explicit revalidate
// Next.js may treat the route as fully dynamic (no cache) or fully static
// (never regenerated until next deploy). Hourly is a balanced default.
export const revalidate = 3600;

const BASE = "https://www.dubaiexpat.co.uk";
const APP_DIR = join(process.cwd(), "app");
const ARTICLES_DIR = join(process.cwd(), "content", "articles");

// Per-route real lastmod tracking. Without this every URL got `new Date()` on
// every build, which gave Google identical timestamps for all 50 URLs and
// (combined with the missing Last-Modified HTTP header) tanked the sitemap
// re-fetch cadence — Googlebot last read DX sitemap on 10 May, 37 days stale
// as of 21 Jun 2026 (confirmed in GSC). EAA's sitemap reads weekly because
// it exposes per-URL mtimes via the prerender pipeline.

// Pages that must NOT appear in the sitemap (private, redirect-only, etc.)
const EXCLUDE_PATHS = new Set<string>([
  // Add any paths you want to keep out of Google here, e.g. "/admin"
]);

// Per-path priority + changefreq overrides. Defaults applied for anything not listed.
const PRIORITY_OVERRIDES: Record<string, number> = {
  "/": 1.0,
  "/visa-checker": 0.9,
  "/cost-of-living": 0.8,
  "/guides/visa-residency": 0.9,
};

const CHANGEFREQ_OVERRIDES: Record<string, MetadataRoute.Sitemap[number]["changeFrequency"]> = {
  "/": "weekly",
  "/articles/is-dubai-safe-2026": "weekly",
  "/articles/dubai-situation-update": "weekly",
};

// Default priority/changefreq based on path depth
function defaultPriority(path: string): number {
  if (path === "/") return 1.0;
  const depth = path.split("/").filter(Boolean).length;
  if (depth === 1) return 0.8;
  if (depth === 2) return 0.7;
  return 0.6;
}

function defaultChangefreq(
  path: string
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (path === "/") return "weekly";
  if (path.startsWith("/articles/") || path.startsWith("/case-studies/")) return "monthly";
  if (path === "/privacy" || path === "/terms" || path === "/cookies" || path === "/affiliate-disclosure") return "yearly";
  return "monthly";
}

/**
 * Recursively walks the app/ directory and returns every route that has a page.tsx,
 * along with the page.tsx file's mtime as the publish date.
 * Skips dynamic [slug] routes (handled separately via the MDX article walker).
 * Skips api/, layout/error/loading files.
 */
function walkAppDir(
  dir: string,
  currentPath = ""
): Array<{ path: string; lastmod: Date }> {
  const routes: Array<{ path: string; lastmod: Date }> = [];
  let entries: string[];
  try {
    entries = readdirSync(dir);
  } catch {
    return routes;
  }

  // If this directory has a page.tsx and isn't a dynamic segment, emit the route
  if (entries.includes("page.tsx") && !currentPath.includes("[")) {
    let lastmod: Date;
    try {
      lastmod = statSync(join(dir, "page.tsx")).mtime;
    } catch {
      lastmod = new Date();
    }
    routes.push({ path: currentPath || "/", lastmod });
  }

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    let isDir = false;
    try {
      isDir = statSync(fullPath).isDirectory();
    } catch {
      continue;
    }

    if (!isDir) continue;
    // Skip Next.js convention folders that don't represent routes
    if (entry === "api" || entry.startsWith("_") || entry.startsWith(".")) continue;
    // Skip dynamic-segment folders (e.g. [slug]) — articles are handled separately
    if (entry.startsWith("[")) continue;

    routes.push(...walkAppDir(fullPath, `${currentPath}/${entry}`));
  }

  return routes;
}

/**
 * Returns one entry per .mdx file in content/articles/, using the frontmatter
 * `date:` field if present (most accurate publish/update signal), falling back
 * to the file's mtime.
 */
function walkArticles(): Array<{ path: string; lastmod: Date }> {
  try {
    const files = readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".mdx"));
    return files.map((f) => {
      const fullPath = join(ARTICLES_DIR, f);
      let lastmod: Date;
      try {
        const content = readFileSync(fullPath, "utf-8");
        const m = content.match(/^date:\s*["']?(\d{4}-\d{2}-\d{2})["']?/m);
        if (m) {
          lastmod = new Date(`${m[1]}T00:00:00Z`);
        } else {
          lastmod = statSync(fullPath).mtime;
        }
      } catch {
        lastmod = new Date();
      }
      return { path: `/articles/${f.replace(/\.mdx$/, "")}`, lastmod };
    });
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Build a single map: path → most-recent lastmod (in case two walkers
  // emit the same path, take the newer one).
  const byPath = new Map<string, Date>();

  for (const r of walkAppDir(APP_DIR)) {
    byPath.set(r.path, r.lastmod);
  }
  for (const r of walkArticles()) {
    const existing = byPath.get(r.path);
    if (!existing || r.lastmod > existing) {
      byPath.set(r.path, r.lastmod);
    }
  }

  // Remove excluded paths
  for (const excluded of EXCLUDE_PATHS) {
    byPath.delete(excluded);
  }

  // Convert to sitemap entries, sorted by path for stable diffs.
  return Array.from(byPath.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, lastmod]) => ({
      url: `${BASE}${path === "/" ? "" : path}`,
      lastModified: lastmod,
      changeFrequency: CHANGEFREQ_OVERRIDES[path] ?? defaultChangefreq(path),
      priority: PRIORITY_OVERRIDES[path] ?? defaultPriority(path),
    }));
}
