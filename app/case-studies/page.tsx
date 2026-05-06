import Header from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { pageMetadata } from "@/lib/metadata";

const TITLE = "Dubai Expat Case Studies: UK Professionals Who Made the Move";
const DESCRIPTION =
  "Real stories from UK expats who relocated to Dubai — entrepreneurs, professionals, families and couples. Visa choices, salary negotiations, schools and the practical lessons they learned.";
const URL_PATH = "/case-studies";
const ABSOLUTE_URL = `https://www.dubaiexpat.co.uk${URL_PATH}`;

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: URL_PATH,
  type: "website",
});

interface Study {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  badge: string;
  image: string;
}

const STUDIES: Study[] = [
  {
    slug: "james-and-emma",
    name: "James & Emma",
    tagline: "Surrey Family Sponsored to Dubai",
    blurb:
      "How a Surrey family of four moved to Dubai when James was headhunted for finance — employer-sponsored visa, schools, and lessons for UK families with kids.",
    badge: "Family",
    image: "/james-and-emma.jpg",
  },
  {
    slug: "marcus",
    name: "Marcus",
    tagline: "Building a Fintech in Dubai (Green Visa)",
    blurb:
      "How a London entrepreneur built a fintech business in Dubai using the UAE Green Visa — practical lessons on company setup, tax, and team-building for UK expats.",
    badge: "Entrepreneur",
    image: "/marcus.jpg",
  },
  {
    slug: "priya",
    name: "Priya",
    tagline: "NHS Manager to Dubai Healthcare",
    blurb:
      "How an NHS healthcare manager found career growth and work-life balance in Dubai — visa, salary, and lessons for UK expats considering the move.",
    badge: "Healthcare professional",
    image: "/priya.jpg",
  },
  {
    slug: "sarah",
    name: "Sarah",
    tagline: "London Family Relocates to Dubai",
    blurb:
      "How a London family of four made the move to Dubai — schools, housing, lifestyle, and the practicalities of relocating with kids.",
    badge: "Family",
    image: "/sarah.jpg",
  },
];

export default function CaseStudiesIndex() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.dubaiexpat.co.uk/" },
    { name: "Case Studies", url: ABSOLUTE_URL },
  ];

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
            <span className="text-[#0A1628] font-medium">Case Studies</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0A1628] to-[#0F1F35] text-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/15 px-3 py-1 text-xs font-semibold text-[#C9A84C] ring-1 ring-[#C9A84C]/30">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
            Real stories from UK expats
          </div>
          <h1 className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            How UK Professionals Actually Move to Dubai
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200">
            The official guides tell you which visa to apply for. These case
            studies show you what UK expats really decided — from the visa they
            chose to the salary they negotiated, the school they picked and the
            mistakes they would warn you about.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-zinc-50 py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {STUDIES.map((s) => (
              <Link
                key={s.slug}
                href={`/case-studies/${s.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={s.image}
                    alt={`${s.name} — ${s.tagline}`}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0A1628]/55 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#C9A84C]/15 px-2.5 py-0.5 text-xs font-semibold text-[#0A1628] ring-1 ring-[#C9A84C]/30">
                    {s.badge}
                  </span>
                  <h2 className="mt-3 text-xl font-semibold text-[#0A1628]">
                    {s.name}: {s.tagline}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {s.blurb}
                  </p>
                  <p className="mt-4 text-sm font-medium text-[#C9A84C]">
                    Read {s.name}&apos;s story →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-2xl bg-gradient-to-r from-[#0A1628] to-[#0F1F35] p-8 text-center text-white shadow-sm">
            <h2 className="text-2xl font-semibold">Planning your own move?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-200">
              Start with the relocation guides — visas, housing, schools, banking
              and the practical steps in the order UK expats actually do them.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#0A1628] transition hover:bg-[#d5b760]"
              >
                Browse all guides
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
