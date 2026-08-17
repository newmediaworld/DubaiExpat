import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import RelatedGuides from "@/components/RelatedGuides";
import EmailCapture from "@/components/EmailCapture";
import { getRelatedArticles } from "@/lib/related-articles";
import { getArticleMagnet } from "@/lib/article-magnet";

interface ArticleFrontmatter {
  title: string;
  meta_title?: string;
  meta_description?: string;
  slug?: string;
  hero_image?: string;
  category?: string;
  subtitle?: string;
  author?: string;
  date?: string;
}

interface ArticleLayoutProps {
  frontmatter: ArticleFrontmatter;
  children: React.ReactNode;
}

export default function ArticleLayout({ frontmatter, children }: ArticleLayoutProps) {
  const { title, hero_image, category, subtitle, meta_description, slug, date } = frontmatter;

  const canonicalUrl = slug
    ? `https://www.dubaiexpat.co.uk/articles/${slug}`
    : "https://www.dubaiexpat.co.uk/";
  const breadcrumbs = [
    { name: "Home", url: "https://www.dubaiexpat.co.uk/" },
    { name: "Articles", url: "https://www.dubaiexpat.co.uk/#articles" },
    { name: title, url: canonicalUrl },
  ];

  return (
    <>
      <SchemaJsonLd
        type="Article"
        title={title}
        description={meta_description || subtitle || title}
        url={canonicalUrl}
        datePublished={date}
        dateModified={date}
        breadcrumbs={breadcrumbs}
      />
      <div className="bg-white px-4 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <Header />
          <div className="flex items-center gap-2 py-3 text-sm text-slate-500">
            <Link href="/" className="flex items-center gap-1 hover:text-[#0A1628]">
              <span>&larr;</span>
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="font-medium text-[#0A1628]">Articles</span>
            <span>/</span>
            <span className="font-medium text-[#0A1628] truncate max-w-[200px]">{title}</span>
          </div>
        </div>
      </div>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-2xl mx-4 md:mx-8 mt-6 md:mt-8 mb-12">
          {hero_image && (
            <Image
              src={hero_image}
              alt={title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
          <div className="relative z-10 px-4 sm:px-8 py-14 sm:py-20">
            <div className="max-w-4xl mx-auto">
              {category && (
                <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/20 px-3 py-1 text-xs font-semibold text-[#C9A84C] mb-4 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                  {category}
                </div>
              )}
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-4 max-w-2xl text-slate-200 leading-relaxed text-base sm:text-lg">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Article content */}
        <div className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto space-y-4">
            {children}
          </div>
        </div>

        {/* Email capture.
            Placed after the article body and BEFORE related articles: the reader
            has just finished the piece, which is peak intent, and the related
            cluster is the main exit route off the page.

            Added 17 Aug 2026. Until then DX had this component, four working
            magnets and a correct /api/subscribe route — and no capture on any
            article, only on three hub pages that get almost no search traffic.
            Every article impression landed on a page with no form on it, and the
            DX_GENERAL list was empty as a direct result. Mounting it here covers
            all 22 articles at once, and every article added later.

            The magnet is chosen by category (lib/article-magnet.ts) so a reader
            on the pension piece is offered the pension guide, not a generic
            checklist — relevance is the difference between a 1% and a 5% rate. */}
        <section className="px-4 pb-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            {(() => {
              const magnet = getArticleMagnet(category);
              return (
                <EmailCapture
                  headline={magnet.headline}
                  subheading={magnet.subheading}
                  cta={magnet.cta}
                  firstMagnet={magnet.firstMagnet}
                  guideTopic={magnet.guideTopic}
                  sourceType="inline-cta"
                  sourcePage={slug ? `/articles/${slug}` : undefined}
                />
              );
            })()}
          </div>
        </section>

        {/* Auto-injected related-articles cluster — boosts internal-link density.
            Reads same-category siblings + cluster anchors via lib/related-articles. */}
        {slug && (() => {
          const related = getRelatedArticles(slug, 5);
          return related.length > 0 ? <RelatedGuides items={related} /> : null;
        })()}

        {/* Disclaimer footer */}
        <section className="px-4 py-8 md:px-8 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-gray-500 leading-relaxed">
              This article is provided for informational purposes only and does not constitute financial or legal advice.
              Always check the latest{" "}
              <a
                href="https://www.gov.uk/foreign-travel-advice/united-arab-emirates"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#C9A84C]"
              >
                FCDO travel guidance
              </a>{" "}
              before making decisions. See our{" "}
              <Link href="/terms" className="underline hover:text-[#C9A84C]">
                terms and conditions
              </Link>{" "}
              for full details.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
