import Header from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { pageMetadata } from "@/lib/metadata";

const TITLE = "Dubai Relocation Guides for UK Expats | DubaiExpat";
const DESCRIPTION =
  "Every UK-expat relocation guide on DubaiExpat in one place — visas, housing, schools, banking, tax, removals, pets, food, nightlife and more. Practical, up-to-date 2026 guidance.";
const URL_PATH = "/guides";
const ABSOLUTE_URL = `https://www.dubaiexpat.co.uk${URL_PATH}`;

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: URL_PATH,
  type: "website",
});

interface Guide {
  slug: string;
  cluster: string;
  title: string;
  blurb: string;
}

// Ordered roughly the way a UK expat encounters each topic during relocation.
const CLUSTERS: { name: string; guides: Guide[] }[] = [
  {
    name: "Before you move",
    guides: [
      {
        slug: "visa-residency",
        cluster: "Visas",
        title: "Dubai Visa & Residency",
        blurb:
          "Golden, Green, Employment, Freelancer and Retirement visas — costs, eligibility, timelines and the step-by-step process for UK residents.",
      },
      {
        slug: "tax-and-hmrc",
        cluster: "UK tax",
        title: "UK Tax & HMRC When Moving to Dubai",
        blurb:
          "Statutory Residence Test, P85, UK property income, National Insurance and the UK-UAE Double Tax Treaty — explained for UK leavers.",
      },
      {
        slug: "uk-pension-dubai",
        cluster: "Pensions",
        title: "UK Pensions in Dubai",
        blurb:
          "Workplace pensions, QROPS, SIPPs and the UK State Pension. Pension scam warnings, regulated adviser checks and 2026 transfer rules.",
      },
      {
        slug: "removals",
        cluster: "Shipping",
        title: "UK to Dubai Removals & Shipping",
        blurb:
          "Sea freight vs air freight costs (£3–8k typical), UAE customs rules, prohibited items and what is cheaper to buy locally.",
      },
      {
        slug: "pets",
        cluster: "Pets",
        title: "Pet Relocation UK to Dubai",
        blurb:
          "UAE import permit, rabies titre test, approved vets, £2–4k costs and the 4-month timeline for moving a dog or cat to the UAE.",
      },
    ],
  },
  {
    name: "Setting up life in Dubai",
    guides: [
      {
        slug: "housing",
        cluster: "Housing",
        title: "Renting in Dubai as a UK Expat",
        blurb:
          "Best neighbourhoods (JLT, Marina, Downtown), 2026 rent prices, the cheque payment system, EJARI registration and agent fees.",
      },
      {
        slug: "schools",
        cluster: "Schools",
        title: "Best British Schools in Dubai",
        blurb:
          "British curriculum schools — 2026 fees, KHDA ratings, GEMS vs Repton vs Dubai College, how to apply, waiting lists and term dates.",
      },
      {
        slug: "banking",
        cluster: "Banking",
        title: "Open a Dubai Bank Account",
        blurb:
          "Emirates NBD, ADCB, HSBC and Mashreq compared. Documents, opening times, salary transfer and sending money home.",
      },
      {
        slug: "furniture",
        cluster: "Furnishing",
        title: "Buying Furniture in Dubai",
        blurb:
          "IKEA, Home Centre, West Elm, designer showrooms, bespoke carpenters in Al Quoz, and the best second-hand marketplaces.",
      },
      {
        slug: "internet-and-vpn",
        cluster: "Internet & VPN",
        title: "Internet, VPNs & UAE App Restrictions",
        blurb:
          "Are VPNs legal in Dubai? What apps are blocked? UAE internet rules, WhatsApp / FaceTime restrictions and which VPNs work for UK expats.",
      },
      {
        slug: "domestic-help",
        cluster: "Help at home",
        title: "Hire Domestic Help in Dubai",
        blurb:
          "Live-in housekeepers, part-time cleaners and private drivers — visa sponsorship, AED 1,500–2,500/mo costs, contracts and what to expect.",
      },
    ],
  },
  {
    name: "Settling in",
    guides: [
      {
        slug: "community",
        cluster: "Community",
        title: "Dubai Expat Community & Facebook Groups",
        blurb:
          "Where UK expats actually meet — Facebook groups (Dubai Buy & Sell, expat networks), social clubs, healthcare and finding your people fast.",
      },
      {
        slug: "food-drink",
        cluster: "Food & drink",
        title: "Food & Drink in Dubai",
        blurb:
          "Groceries, restaurants, Friday brunch culture, alcohol licence rules, wine merchants and organic food delivery for UK expats.",
      },
      {
        slug: "nightlife",
        cluster: "Nightlife",
        title: "Dubai Nightlife for UK Expats",
        blurb:
          "Best bars, rooftop lounges, Friday brunch culture, alcohol licence rules and how the Dubai social scene actually works.",
      },
      {
        slug: "concierge",
        cluster: "Concierge",
        title: "Dubai Concierge: Tailors, Vets & Tutors",
        blurb:
          "Trusted picks for UK expats — tailors, jewellers, vets, music and academic tutors, clubs and kids&apos; activities.",
      },
    ],
  },
];

export default function GuidesIndex() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.dubaiexpat.co.uk/" },
    { name: "Guides", url: ABSOLUTE_URL },
  ];

  const totalGuides = CLUSTERS.reduce((acc, c) => acc + c.guides.length, 0);

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
            <span className="text-[#0A1628] font-medium">Guides</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0A1628] to-[#0F1F35] text-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/15 px-3 py-1 text-xs font-semibold text-[#C9A84C] ring-1 ring-[#C9A84C]/30">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
            {totalGuides} relocation guides for UK expats
          </div>
          <h1 className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Every Dubai Relocation Guide in One Place
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200">
            Each guide is written for UK expats and updated for 2026 — visas,
            housing, schools, banking, tax, removals, pets, internet, food and
            community. Pick a cluster below or browse the full list.
          </p>
        </div>
      </section>

      {/* Clustered cards */}
      <section className="bg-zinc-50 py-14">
        <div className="max-w-5xl mx-auto space-y-12 px-6">
          {CLUSTERS.map((cluster) => (
            <div key={cluster.name}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A84C]">
                {cluster.name}
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {cluster.guides.length} guides
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cluster.guides.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/guides/${g.slug}`}
                    className="group flex h-full flex-col rounded-2xl bg-white p-5 ring-1 ring-slate-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0A1628]/5 px-2.5 py-0.5 text-xs font-semibold text-[#0A1628]">
                      {g.cluster}
                    </span>
                    <h3 className="mt-3 text-base font-semibold text-[#0A1628] group-hover:text-[#0A1628]">
                      {g.title}
                    </h3>
                    <p
                      className="mt-2 flex-1 text-sm leading-relaxed text-slate-600"
                      dangerouslySetInnerHTML={{ __html: g.blurb }}
                    />
                    <p className="mt-4 text-xs font-medium text-[#C9A84C]">
                      Read the guide →
                    </p>
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
            <h2 className="text-2xl font-semibold">Not sure where to start?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-200">
              Try the visa checker first — it takes a minute and tells you which
              UAE visa fits your situation, then maps you to the relocation steps
              that actually apply.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/visa-checker"
                className="inline-flex items-center justify-center rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#0A1628] transition hover:bg-[#d5b760]"
              >
                Try the visa checker
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#C9A84C] transition hover:bg-[#C9A84C] hover:text-[#0A1628]"
              >
                Read case studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
