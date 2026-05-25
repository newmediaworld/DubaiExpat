import type { Metadata } from "next";

/**
 * Single source of truth for per-page metadata. Every page-level
 * `export const metadata` should call this so canonical, og:*, and
 * twitter:card tags are guaranteed present and consistent.
 *
 * Defaults from app/layout.tsx (siteName, locale, default image) merge
 * in automatically — only override what's page-specific.
 */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  ogImage?: string;
  publishedTime?: string;
}): Metadata {
  const { title, description, path, type = "article", ogImage, publishedTime } = opts;
  const image = ogImage ?? "/og-default.png";
  // Absolute canonical to www-canonical host — defeats the apex/www
  // split GSC bug surfaced 25 May where /guides/pets showed 247 imp on
  // apex + 63 imp on www as if they were separate URLs.
  const BASE = "https://www.dubaiexpat.co.uk";
  const absoluteUrl = `${BASE}${path}`;
  return {
    title,
    description,
    alternates: { canonical: absoluteUrl },
    openGraph: {
      type,
      title,
      description,
      url: absoluteUrl,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
