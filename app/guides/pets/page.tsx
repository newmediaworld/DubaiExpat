import Link from "next/link";
import Header from "@/components/Header";
import type { Metadata } from "next";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import RelatedGuides from "@/components/RelatedGuides";
import { pageMetadata } from "@/lib/metadata";
export const metadata: Metadata = pageMetadata({
  title: "Cost to Fly a Dog to Dubai from the UK 2026: £800-£2,500",
  description: "What it costs to fly a dog or cat from the UK to Dubai in 2026: £800-£2,500 all-in, the MOCCAE import permit, the vaccinations required and the real timeline.",
  path: "/guides/pets",
});
// Bumped whenever this page is materially corrected, so the correction carries a
// freshness signal rather than advertising the original publish date.
const UPDATED_AT = "2026-09-17";
const SCHEMA_URL = "https://www.dubaiexpat.co.uk/guides/pets";
const BREADCRUMBS = [
  { name: "Home", url: "https://www.dubaiexpat.co.uk/" },
  { name: "Guides", url: "https://www.dubaiexpat.co.uk/#categories" },
  { name: "Pets", url: SCHEMA_URL },
];

const RELATED = [
  { title: "Renting in Dubai as a UK Expat", href: "/guides/housing", description: "Pet-friendly buildings and neighbourhoods" },
  { title: "UK to Dubai Removals & Shipping", href: "/guides/removals", description: "Coordinating pet move with household shipment" },
  { title: "Dubai Expat Community", href: "/guides/community", description: "Vet recommendations and pet groups" },
  { title: "Dubai Visa & Residency", href: "/guides/visa-residency", description: "Pet import permits tied to residency status" },
];

const PARTNERS = [
  {
    name: "PetAir UK",
    url: "https://www.petairuk.com",
    description:
      "One of the UK's most experienced pet relocation specialists, handling door-to-door moves to Dubai and the UAE including all documentation, CITES permits and approved airline booking.",
    badge: "Most Popular",
  },
  {
    name: "Happy Tails Travel",
    url: "https://www.happytailstravel.co.uk",
    description:
      "Specialist in Middle East pet relocation. Offers a fully managed service covering the vaccination schedule, import permit, health certificate and cargo travel arrangements.",
    badge: "Recommended",
  },
  {
    name: "Global Paws",
    url: "https://www.globalpaws.co.uk",
    description:
      "Award-winning pet travel company with extensive UAE experience. Particularly strong on exotic breeds and larger dogs. Offers a free initial consultation.",
    badge: null,
  },
  {
    name: "Pet Relocators",
    url: "https://www.petrelocators.co.uk",
    description:
      "Specialist pet freight and relocation company covering the UAE. Handles all MOCCAE import permits and offers a transparent, itemised quote.",
    badge: null,
  },
];

export default function PetsGuidePage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-slate-900">
      <SchemaJsonLd
        type="Article"
        title="Cost to Fly a Dog to Dubai from the UK 2026: £800-£2,500"
        description="What it costs to fly a dog or cat from the UK to Dubai in 2026: £800-£2,500 all-in, the MOCCAE import permit, the vaccinations required and the real timeline."
        url={SCHEMA_URL}
        dateModified={UPDATED_AT}
        breadcrumbs={BREADCRUMBS}
      />
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-8">
        <Header />

        {/* Breadcrumb */}
        <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="flex items-center gap-1 hover:text-[#0A1628]">
            <span>←</span>
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/#categories" className="hover:text-[#0A1628]">Guides</Link>
          <span>/</span>
          <span className="font-medium text-[#0A1628]">Pets</span>
        </div>

        <main className="mt-8 space-y-12">

          {/* Hero */}
          <section className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=500&fit=crop&auto=format"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
            <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-20">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/20 px-3 py-1 text-xs font-semibold text-[#C9A84C] mb-4 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                Pets &amp; Animal Relocation
              </div>
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
                Bringing Your Pet to Dubai from the UK
              </h1>
              <p className="mt-4 max-w-2xl text-slate-200 leading-relaxed text-base sm:text-lg">
                The UAE has strict pet import rules, but for a pet travelling from the UK the paperwork is more manageable than most people fear — the binding constraint is usually the airline booking and the vaccination schedule, not a long mandatory waiting period. Allow around six to eight weeks if your pet&apos;s vaccinations are already in order, and longer if they are not. This guide covers what is actually required.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                {[
                  { label: "Typical Timeline", value: "6–8 weeks" },
                  { label: "Approx. Total Cost", value: "£800–£2,500" },
                  { label: "Process Steps", value: "6 key steps" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-white/10 p-3">
                    <p className="text-xl font-bold text-[#C9A84C]">{stat.value}</p>
                    <p className="mt-1 text-xs text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Warning box */}
          <section className="rounded-2xl border-l-4 border-[#C9A84C] bg-amber-50 p-6">
            <h2 className="font-semibold text-[#0A1628]">Check the vaccination record first</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              The UAE does not impose a multi-month waiting period on pets travelling from the UK, and there is no mandatory post-vaccination quarantine. What catches UK families out is the vaccination record itself: the UAE requires more than a rabies jab, the microchip must pre-date the rabies vaccination, and an out-of-date booster resets your timeline. Pull your pet&apos;s vaccination card out and check it against the list below before you book anything.
            </p>
          </section>

          {/* Step by step */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0A1628]">
              The 6-Step Process: UK to Dubai
            </h2>
            <p className="text-slate-600 leading-relaxed">
              The UAE Ministry of Climate Change and Environment (MOCCAE) governs all pet imports. The requirements below apply to dogs and cats travelling from the UK. Other animals have different — often stricter — requirements.
            </p>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-[#0A1628]">
                No rabies blood test is required from the UK
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                MOCCAE requires a rabies antibody titre test only for pets coming from countries outside its low-risk list. The United Kingdom is on that list, along with Ireland, most of the EU, Australia, New Zealand, Japan, Singapore and Hong Kong. If your pet is travelling from the UK you do not need the blood test, and there is no associated waiting period. If you are moving to Dubai from somewhere else — or your pet will spend time in a non-listed country en route — check the current list before you plan, because the test must be taken at least 21 days after the rabies vaccination and is valid for 12 months.
              </p>
            </div>

            {[
              {
                step: "01",
                title: "Microchip",
                timing: "Do this first, before any vaccinations",
                content:
                  "Your pet must have an ISO 15-digit microchip. If your pet is already chipped, confirm it is the correct standard — older 9 or 10-digit chips are not accepted. The microchip must be implanted before the rabies vaccination, or the vaccination will not be valid for UAE entry purposes.",
              },
              {
                step: "02",
                title: "Rabies Vaccination",
                timing: "After microchipping, from 12 weeks of age",
                content:
                  "Your pet must receive a rabies vaccination from a registered UK vet after the microchip is confirmed, and no earlier than 12 weeks of age. Keep the vaccination certificate — the batch number, date, manufacturer and vet details must appear on the health certificate. If your pet already has a current rabies vaccine, check it was administered after the microchip was in place; if it was not, the vaccination must be repeated. Allow at least 21 days between the vaccination and departure.",
              },
              {
                step: "03",
                title: "The Other Required Vaccinations",
                timing: "Alongside the rabies vaccination",
                content:
                  "This is the step UK owners most often miss. Rabies alone is not enough. Dogs must also be vaccinated against canine distemper, infectious canine hepatitis, leptospirosis (Icterohaemorrhagiae and Canicola) and canine parvovirus — usually given as a combined DHLP shot. Cats must be vaccinated against feline panleukopenia, feline rhinotracheitis and feline calicivirus, again normally a single combined vaccination. All of these must appear on the official health certificate.",
              },
              {
                step: "04",
                title: "Parasite Treatment",
                timing: "Within 14 days of travel",
                content:
                  "Your pet must receive treatment for internal and external parasites within the 14 days before export, administered and documented by a registered vet. This is a certified requirement on the UAE health certificate, not a recommendation — an undocumented treatment will hold up the paperwork.",
              },
              {
                step: "05",
                title: "UAE Import Permit (MOCCAE)",
                timing: "Before travel",
                content:
                  "You must obtain an import permit from the Ministry of Climate Change and Environment (MOCCAE) before your pet arrives in Dubai. This is applied for online through the MOCCAE portal. You will need your pet's microchip number, vaccination records and your UAE visa details. The permit costs approximately AED 200 (around £43). Apply close to your travel date rather than months ahead — the permit is issued with a short validity window and must still be valid on the day your pet lands. If you are arranging the move yourself rather than through an agent, you are limited to two pets per person. Some breeds of dog cannot be imported at all — see breed restrictions below.",
              },
              {
                step: "06",
                title: "Official Health Certificate",
                timing: "Immediately before travel",
                content:
                  "Your pet needs an official government health certificate issued by a vet and endorsed by the Animal and Plant Health Agency (APHA), confirming the vaccinations above, the parasite treatment, and that the animal was examined and showed no sign of disease in the 24 hours before shipping. Every document presented on arrival must be an original — photocopies are not accepted. Your vet and APHA will confirm the exact issuing window, which is short.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex-shrink-0 text-3xl font-bold text-[#C9A84C] leading-none">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0A1628]">{item.title}</h3>
                  <p className="mt-0.5 text-xs font-medium text-[#C9A84C] uppercase tracking-wide">
                    {item.timing}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.content}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Costs */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-[#0A1628]">What Does It Cost?</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Costs vary depending on the size of your pet, whether you use a specialist relocation company, and which airline carries the animal. Below are typical UK-to-Dubai figures.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0A1628] text-[#0A1628]">
                    <th className="rounded-tl-lg px-4 py-3 text-left font-semibold">Item</th>
                    <th className="rounded-tr-lg px-4 py-3 text-left font-semibold">Approx. Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Microchip (if not already done)", "£20–£40"],
                    ["Rabies vaccination", "£40–£80"],
                    ["DHLP / feline combined vaccination", "Ask your vet"],
                    ["Parasite treatment (internal & external)", "Ask your vet"],
                    ["APHA certificate endorsement", "£30"],
                    ["MOCCAE import permit", "~£43 (AED 200)"],
                    ["Health certificate (vet fee)", "£60–£120"],
                    ["Relocation specialist service fee", "£300–£800"],
                    ["Airline cargo / freight charge", "£200–£900 (size dependent)"],
                    ["Total (estimated)", "£800–£2,500+"],
                  ].map(([item, cost], i) => (
                    <tr
                      key={item}
                      className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-slate-50" : "bg-white"} ${item === "Total (estimated)" ? "font-semibold text-[#0A1628]" : "text-slate-700"}`}
                    >
                      <td className="px-4 py-3">{item}</td>
                      <td className="px-4 py-3 text-[#C9A84C] font-medium">{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Breed restrictions */}
          <section className="rounded-2xl border-l-4 border-red-400 bg-red-50 p-6 space-y-3">
            <h2 className="text-xl font-bold text-[#0A1628]">Breed Restrictions: Dogs</h2>
            <p className="text-sm leading-relaxed text-slate-700">
              The UAE prohibits the import of certain dog breeds. The following are banned and will be refused entry regardless of documentation, as will any crossbreed or hybrid of them:
            </p>
            <ul className="text-sm text-slate-700 space-y-1">
              {["All Pit Bull Terriers", "Staffordshire Bull Terriers (English and American)", "American Bullies", "All Mastiff breeds", "Japanese Tosa Inu", "Wolf / dog hybrids"].map((breed) => (
                <li key={breed} className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  {breed}
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-600">
              A crossbreed counts. If your dog is a mixed breed that could be read as one of the above, get written confirmation from your relocation agent before you book anything — the determination is made at the border, not in advance. Separately from the import ban, some emirates apply muzzle and leash requirements to other large breeds in public places; those are local rules that vary between Dubai and Abu Dhabi, and your agent or vet can confirm what applies where you are moving.
            </p>
          </section>

          {/* Flying with pets */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0A1628]">Flying Your Pet to Dubai</h2>
            <p className="text-slate-600 leading-relaxed">
              Emirates Airlines does not carry live animals in the passenger cabin. Dogs and cats travelling from the UK to Dubai go as manifest cargo, handled by Emirates SkyCargo or a specialist pet freight company. British Airways also handles pet cargo on their London–Dubai route.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Small cats and very small dogs (under 8kg including carrier) may be able to travel in-cabin on other airlines via a connecting route, though this is complex to arrange. Most UK expats use a direct cargo service — it is the most reliable option.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Avoid travelling in the hottest months (June–September) if possible. Dubai airport can reach 45°C on the tarmac, and many airlines suspend live animal cargo during the summer heat period. Aim for October to April.
            </p>
          </section>

          {/* Once in Dubai */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0A1628]">Once You Arrive in Dubai</h2>
            <p className="text-slate-600 leading-relaxed">
              On arrival at Dubai International Airport, your pet will be inspected by Dubai Municipality veterinary officers. Have your original documents ready — originals, not copies: the MOCCAE import permit, health certificate, vaccination record and microchip documentation. Inspections are usually straightforward if paperwork is in order.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Once you are settled, register your pet with Dubai Municipality. Dubai requires cats and dogs to be microchipped, vaccinated and licensed, and the licence is renewed annually. Fines apply for unlicensed dogs found in public areas. Registration fees are set by Dubai Municipality and are reviewed periodically, so check the current figure at dm.gov.ae or through a licensed vet clinic rather than budgeting from a third-party guide — the amounts quoted around the internet vary widely and most are out of date.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Dubai has good veterinary care. Recommended practices include Dubai Kennels and Cattery (DKC), Veterinary Hospital at Dubai Hills, and the British Veterinary Clinic in Jumeirah. Pet-friendly apartments are available but confirm with your landlord before signing — some buildings prohibit animals.
            </p>
          </section>

          {/* Sister-site cross-link — hot-climate pet health */}
          <section className="rounded-2xl border-l-4 border-[#C9A84C] bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
              Beyond the import process
            </p>
            <h2 className="mt-2 text-xl font-bold text-[#0A1628]">
              Keeping a temperate-climate pet healthy in the heat
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              This guide stops where the paperwork does. The harder part usually starts after arrival: a dog or cat that spent its life in the UK now has to cope with 45&deg;C summers, year-round parasites and a very different set of skin and respiratory pressures. That is not really a Dubai relocation question — it is a hot-climate pet health question.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Our sister site <strong>The Tropical Pet</strong> covers exactly that ground for expat owners in Singapore, Bangkok, Kuala Lumpur and Hong Kong. The climates are not identical to the Gulf, but the physiology is — heat load, humidity, acclimatisation timelines and heat-stress warning signs read the same whether you are in Jumeirah or Sentosa.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a
                href="https://thetropicalpet.com/guides/heat-stress-pets"
                target="_blank"
                rel="noopener"
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-[#C9A84C]/60 hover:shadow-md"
              >
                <p className="font-semibold text-[#0A1628] group-hover:text-[#C9A84C] transition">
                  Heat stress in dogs &amp; cats
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Early warning signs, what counts as an emergency, and how long acclimatisation actually takes.
                </p>
              </a>
              <a
                href="https://thetropicalpet.com/guides/tropical-pet-health"
                target="_blank"
                rel="noopener"
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-[#C9A84C]/60 hover:shadow-md"
              >
                <p className="font-semibold text-[#0A1628] group-hover:text-[#C9A84C] transition">
                  Pet health in a hot climate
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  What changes for a temperate-climate pet — parasites, skin, ears and the first-year adjustment.
                </p>
              </a>
            </div>
          </section>

          {/* ── AFFILIATE PARTNER SECTION ──────────────────────────────── */}
          <section className="space-y-6">
            <div className="rounded-2xl bg-[#0A1628] px-6 py-8 text-[#0A1628]">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/20 px-3 py-1 text-xs font-semibold text-[#C9A84C] mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                Trusted Partners
              </div>
              <h2 className="text-2xl font-bold">
                Pet Relocation Specialists We Recommend
              </h2>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                Getting the paperwork right is critical — one error can delay or prevent your pet entering the UAE. These specialist companies manage the entire process for you, from the vaccination schedule and APHA endorsement to airport collection in Dubai.
              </p>
              <p className="mt-3 text-xs text-slate-400">
                Disclosure: these are plain editorial links. We have no commercial relationship with any of the companies below and earn nothing if you use them — they are listed because we consider them genuinely reputable.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {PARTNERS.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#C9A84C]/80 hover:shadow-md"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold text-[#0A1628] group-hover:text-[#C9A84C] transition">
                        {partner.name}
                      </h3>
                      {partner.badge && (
                        <span className="flex-shrink-0 rounded-full bg-[#C9A84C]/15 px-2 py-0.5 text-xs font-semibold text-[#0A1628]">
                          {partner.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {partner.description}
                    </p>
                  </div>
                  <p className="mt-4 text-sm font-semibold text-[#C9A84C]">
                    Get a free quote →
                  </p>
                </a>
              ))}
            </div>

            <p className="text-xs text-slate-400 text-center">
              Are you a pet relocation specialist working with UK expats moving to Dubai?{" "}
              <a href="mailto:hello@dubaiexpat.co.uk" className="underline hover:text-[#0A1628]">
                Get in touch about a partnership.
              </a>
            </p>
          </section>

          {/* Patrick's tip */}
          <section className="rounded-2xl border-l-4 border-[#C9A84C] bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
              Patrick&apos;s Note
            </p>
            <p className="mt-2 leading-relaxed text-slate-700">
              &ldquo;I moved with a Labrador. The process felt overwhelming at first but once you break it into steps it is very manageable. The one thing I wish I&apos;d known earlier: use a specialist company. The MOCCAE portal and APHA process has enough moving parts that a professional who does this daily is worth every penny. My dog was at my new apartment in DIFC the same day I arrived.&rdquo;
            </p>
            <p className="mt-3 text-sm font-semibold text-[#0A1628]">— Patrick, Founding Editor</p>
          </section>

          {/* Related guides */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#0A1628]">Related Guides</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { href: "/guides/housing", label: "Finding a Home", sub: "Pet-friendly areas & apartments" },
                { href: "/guides/community", label: "Community & Life", sub: "Vets, parks & expat life" },
                { href: "/guides/removals", label: "Removals & Shipping", sub: "Moving all your belongings" },
              ].map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-[#C9A84C]/60 hover:shadow-md"
                >
                  <p className="font-semibold text-[#0A1628]">{g.label}</p>
                  <p className="mt-1 text-xs text-slate-500">{g.sub}</p>
                </Link>
              ))}
            </div>
          </section>

        </main>

        <RelatedGuides items={RELATED} />

        <footer className="mt-12 border-t border-slate-200 pt-4">
          <div className="flex flex-col items-center justify-between gap-2 text-xs text-slate-500 sm:flex-row">
            <p>© 2026 Dubai Expat. All rights reserved.</p>
            <Link href="/" className="flex items-center gap-1 font-medium text-[#0A1628] hover:underline">
              ← Back to home
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
