import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { pageMetadata } from "@/lib/metadata";
import EmailCapture from "@/components/EmailCapture";

const TITLE = "Is Dubai Safe for Expats in 2026? UK Citizen Guide";
const DESCRIPTION =
  "Honest look at safety in Dubai for British expats in 2026 — Iran-UAE conflict, FCDO advice, daily life, and what to consider before relocating.";
const URL_PATH = "/articles/is-dubai-safe-2026";
const ABSOLUTE_URL = `https://www.dubaiexpat.co.uk${URL_PATH}`;
const HERO_IMAGE = "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1200&h=500&fit=crop&auto=format";
const PUBLISHED_AT = "2026-04-13";
// Conflict coverage is live content. Bump this whenever a factual claim changes,
// so dateModified reflects reality rather than the original publish date.
const UPDATED_AT = "2026-08-26";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: URL_PATH,
  type: "article",
  ogImage: HERO_IMAGE,
  publishedTime: PUBLISHED_AT,
});

export default function IsDubaiSafe2026() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.dubaiexpat.co.uk/" },
    { name: "Articles", url: "https://www.dubaiexpat.co.uk/#articles" },
    { name: "Is Dubai Safe in 2026?", url: ABSOLUTE_URL },
  ];

  return (
    <>
      <SchemaJsonLd
        type="Article"
        title={TITLE}
        description={DESCRIPTION}
        url={ABSOLUTE_URL}
        datePublished={PUBLISHED_AT}
        dateModified={UPDATED_AT}
        breadcrumbs={breadcrumbs}
      />
      <div className="bg-white px-4 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <Header />
          <div className="flex items-center gap-2 py-3 text-sm text-slate-500">
            <Link href="/" className="flex items-center gap-1 hover:text-[#0A1628]">
              <span>&larr;</span><span>Home</span>
            </Link>
            <span>/</span>
            <span className="font-medium text-[#0A1628]">Articles</span>
            <span>/</span>
            <span className="font-medium text-[#0A1628]">Is Dubai Safe in 2026?</span>
          </div>
        </div>
      </div>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-2xl mx-4 md:mx-8 mt-6 md:mt-8 mb-12">
          <img
            src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1200&h=500&fit=crop&auto=format"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
          <div className="relative z-10 px-4 sm:px-8 py-14 sm:py-20">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/20 px-3 py-1 text-xs font-semibold text-[#C9A84C] mb-4 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                Safety Guide
              </div>
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
                Is Dubai Safe for Expats in 2026? What UK Citizens Need to Know
              </h1>
              <p className="mt-4 max-w-2xl text-slate-200 leading-relaxed text-base sm:text-lg">
                Six months on from the strikes, the UAE has largely restored normal life: airspace reopened in May, the FCDO advisory was lifted in June, and expat families are returning. Here&rsquo;s an up-to-date assessment of conditions on the ground and what the FCDO currently tells British nationals.
              </p>
            </div>
          </div>
        </section>

        {/* The Current Situation */}
        <section className="px-4 py-12 md:px-8 border-t" style={{ borderColor: "#E5E7EB" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              The Current Situation
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Between late February and the spring of 2026 there were ballistic missile and drone strikes on targets in the UAE and other Gulf states as part of the wider regional conflict. That period is now behind the country. Following the US&ndash;Iran interim agreement, Dubai&rsquo;s airspace reopened on 2 May 2026 and the FCDO lifted its advisory on 18 June. Emirates has since restored 96% of its global network &mdash; 138 destinations across 73 countries and more than 1,300 flights a week &mdash; and schools, offices, retail and construction are operating normally.
              </p>
              <p>
                The response from the authorities has been substantial and fast. The UAE invested heavily in expanded air-defence capability, which intercepted the overwhelming majority of what was fired. Dubai&rsquo;s Executive Council then approved a Dh1 billion package of short-term economic measures running from April to September 2026, including a three-month full postponement of the Tourism Dirham and hotel sales fees to help businesses through the quiet period. Emirates introduced a travel cover product in June that includes conflict-related protection and disruption support, and Etihad and Abu Dhabi&rsquo;s Department of Culture and Tourism added complimentary medical travel insurance for eligible international visitors. Dubai is now working towards a target of 19.6 million annual visitors.
              </p>
              <p>
                The single heaviest night was 28 February 2026, when the UAE said 137 missiles and 209 drones were fired at its territory. Most were intercepted. The damage that reached the ground in Dubai came largely from debris rather than direct hits: falling wreckage started a fire near the Fairmont The Palm, where four people were treated and no deaths were reported, and a minor fire at the base of the Burj Al Arab. Dubai International and the Jebel Ali seaport also sustained damage. The UAE government has maintained that civilian safety remains its top priority and has invested heavily in expanded defence capabilities.
              </p>
              <p>
                For British nationals specifically, the situation carries additional complexities. Before the conflict there were roughly 240,000 Britons in the UAE including tourists, the largest European community in the country. Many have built lives, businesses, and families there over years or decades.
              </p>
            </div>
          </div>
        </section>

        {/* FCDO Advice */}
        <section className="px-4 py-12 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              What the FCDO Is Saying
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Foreign, Commonwealth &amp; Development Office (FCDO) advised against all but essential travel to the United Arab Emirates from 28 February 2026, and lifted that advisory on 18 June 2026 following the memorandum of understanding signed the previous day. As of 26 August 2026 the FCDO does not advise against travel to the UAE. It does still warn of regional tensions, possible flight cancellations and periodic airspace closures, and notes that attacks could resume at short notice &mdash; so check gov.uk for the current position before you travel.
              </p>
              <p>
                The British Embassy in Abu Dhabi and the Consulate-General in Dubai continue to operate normally. The FCDO no longer runs a registration scheme for British nationals abroad &mdash; the way to receive direct updates is to subscribe to travel advice email alerts for the UAE on gov.uk.
              </p>
              <div
                className="rounded-xl p-6 my-6"
                style={{ backgroundColor: "#FDF8ED", borderLeft: "4px solid #C9A84C" }}
              >
                <p className="text-sm font-semibold mb-2" style={{ color: "#0A1628" }}>
                  What the FCDO currently asks British nationals in the region to do:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
                  <li>Be prepared for possible flight cancellations, periodic airspace closures and travel disruption</li>
                  <li>Follow the advice of local authorities, and monitor local and international media &mdash; airports and airspace can close at short notice</li>
                  <li>Stay away from areas around security or military facilities</li>
                  <li>Keep your departure plans under review and your travel documents up to date</li>
                  <li>Sign up to FCDO travel advice email alerts for the UAE</li>
                  <li>If advised to take shelter, stay indoors &mdash; an interior stairwell or a room with few external walls offers the most protection. Do not approach or touch debris or unusual objects</li>
                </ul>
              </div>
              <p>
                It&rsquo;s worth noting that FCDO advice levels can change rapidly. Always check the latest guidance at{" "}
                <a
                  href="https://www.gov.uk/foreign-travel-advice/united-arab-emirates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "#0A1628" }}
                >
                  gov.uk/foreign-travel-advice
                </a>{" "}
                before making any travel or relocation decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Arrests and Legal Risks */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Legal Risks: Filming and Social Media
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                UAE law places clear restrictions on photographing and publishing material relating to military activity, and those provisions have been actively applied during the conflict. In March 2026, 21 people were charged in connection with filming and sharing footage of the missile and drone attacks, among them a British tourist.
              </p>
              <p>
                The restriction is broader than many arrivals expect. It covers images or video of military activity witnessed in passing &mdash; including from a balcony &mdash; and extends to resharing or commenting on someone else&rsquo;s post. The penalty starts at two years&rsquo; imprisonment and a fine of AED 200,000 (roughly &pound;40,000).
              </p>
              <p>
                The practical rule is straightforward: do not photograph, film or post images of military activity, interceptions or their aftermath, and do not reshare posts that do. Where you are unsure whether something falls within the restriction, the safe assumption is that it does, and local legal advice is readily available.
              </p>
            </div>
          </div>
        </section>

        {/* Day-to-day Life */}
        <section className="px-4 py-12 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Day-to-Day Life in Dubai Right Now
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The picture on the ground is more nuanced than headlines might suggest. Many expats who have remained in Dubai describe the situation as &ldquo;functioning but tense.&rdquo; Shops, restaurants, schools, and offices continue to operate. The economy hasn&rsquo;t collapsed. Daily routines, for many, carry on.
              </p>
              <p>
                That said, the atmosphere has undeniably shifted. There is a heightened awareness that wasn&rsquo;t there before &mdash; the sound of interceptions at night, periodic disruption to flights, and a general sense that geopolitics is no longer something that happens somewhere else. Some expats describe feeling less carefree, particularly those with young children.
              </p>
              <p>
                The tech and business community has been particularly vocal about continuity. Many remote workers and entrepreneurs report that their professional lives have been largely unaffected. Dubai&rsquo;s internet infrastructure, coworking spaces, and business districts remain operational.
              </p>
              <p>
                However, significant numbers of Western nationals have left or are considering leaving. Around 30,000 British residents are estimated to have left the UAE since the strikes began &mdash; roughly one in eight, or 10 to 15 per cent of the long-term British population. A larger figure of about 100,000 has been reported for British nationals flown back from the Middle East as a whole, but that covers the entire region and includes tourists and transit passengers, not UAE residents. Immigration lawyers describe many of these departures as temporary rather than permanent, with families moving for a school term or until the situation settles and intending to return. Many others have chosen to stay, citing strong community ties, financial commitments, and confidence in the UAE&rsquo;s defence systems.
              </p>
            </div>
          </div>
        </section>

        {/* Everyday Safety */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Everyday Safety: Beyond the Conflict
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Separate from the current geopolitical situation, Dubai&rsquo;s everyday safety record for expats remains strong. Street crime rates are exceptionally low compared to most major cities. Violent crime is rare, and petty theft is uncommon. Women report feeling safe walking alone at night in most residential areas &mdash; something that distinguishes Dubai from many Western cities.
              </p>
              <p>
                Road safety is one area where Dubai lags behind the UK. Traffic accidents remain a leading cause of injury, and driving standards can be erratic, particularly on major highways like Sheikh Zayed Road. If you&rsquo;re relocating, it&rsquo;s worth familiarising yourself with local driving habits and considering areas with good walkability or metro access.
              </p>
              <p>
                Heat-related illness is another consideration, particularly between May and September when temperatures regularly exceed 45&deg;C. This is a genuine health risk for people unaccustomed to extreme heat, especially those working outdoors or with young children.
              </p>
            </div>
          </div>
        </section>

        {/* What Should You Do? */}
        <section className="px-4 py-12 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              So Is Dubai Safe? Our Honest Take
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                On the evidence available in August 2026, yes &mdash; with the ordinary caveat that no destination carries a guarantee. The strikes were met with an air-defence response that intercepted the overwhelming majority of what was fired, the damage that did occur was limited and caused mostly by falling debris, and the authorities moved quickly to restore normal operations. Airspace reopened on 2 May, the FCDO lifted its advisory on 18 June, and other governments have eased their advisories since.
              </p>
              <p>
                If you&rsquo;re already in Dubai with an established life, strong community, and employer support, many expats are choosing to stay and report feeling relatively safe day to day. The UAE&rsquo;s air-defence systems have proven effective, and the government has made civilian protection a visible priority.
              </p>
              <p>
                If you&rsquo;re considering relocating to Dubai from the UK right now, the calculation has changed. The FCDO advisory against all but essential travel was lifted on 18 June 2026, so the insurance-validity and employer duty-of-care problems it created no longer apply automatically &mdash; but confirm your own policy wording, because insurers set conflict-zone exclusions independently of FCDO advice. The region does remain volatile: on 19 August 2026 two Iranian ballistic missiles were detected near the UAE, the second falling inside UAE territorial waters. Both were assessed as targeting maritime navigation, both fell into the sea, there was no land impact and no casualties, and the authorities confirmed the all-clear the same day. The honest summary is disrupted, not dangerous &mdash; flights between the UK and the Gulf are still being cancelled and rerouted, and that is the practical thing to plan around rather than a government warning that no longer exists.
              </p>
              <p>
                For those in the planning stages &mdash; researching visas, looking at schools, considering housing &mdash; there&rsquo;s no harm in continuing your research. The conflict will eventually de-escalate, and those who are well-prepared will be in the strongest position to move when conditions improve.
              </p>
            </div>
          </div>
        </section>

        {/* Practical Steps */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Practical Steps for UK Expats
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: "#FDF8ED", borderLeft: "4px solid #C9A84C" }}
              >
                <p className="text-sm font-semibold mb-3" style={{ color: "#0A1628" }}>
                  Whether you&rsquo;re in Dubai or planning a move, here are the steps we&rsquo;d recommend:
                </p>
                <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm">
                  <li>
                    <strong>Check FCDO advice regularly</strong> &mdash; the situation is evolving, and advisory levels can change with little warning.
                  </li>
                  <li>
                    <strong>Register with the FCDO</strong> if you&rsquo;re in the UAE, so you receive direct updates and consular support information.
                  </li>
                  <li>
                    <strong>Review your insurance</strong> &mdash; many travel and health insurance policies contain exclusions for conflict zones or areas under government travel advisories.
                  </li>
                  <li>
                    <strong>Keep your passport accessible</strong> and have a plan for departure if the situation deteriorates.
                  </li>
                  <li>
                    <strong>Be extremely careful on social media</strong> &mdash; do not film, photograph, or share images of any military activity, drone interceptions, or related incidents.
                  </li>
                  <li>
                    <strong>Maintain financial flexibility</strong> &mdash; keep sufficient funds accessible in the UK and consider maintaining a UK bank account alongside your UAE banking.
                  </li>
                  <li>
                    <strong>Talk to your employer</strong> about their contingency plans, including evacuation support and duty-of-care policies.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Email capture — decision-stage reader, relocation magnet */}
        <section className="px-4 pb-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <EmailCapture
              headline="Get the UK to Dubai Relocation Checklist — free"
              subheading="Every step before you leave and in your first 90 days: visas, HMRC, banking, removals, schools. The admin most people find out about too late."
              cta="Send me the checklist →"
              successMessage="✓ Check your inbox — your checklist is on its way."
              firstMagnet="dx-relocation-checklist"
              guideTopic="relocation"
            />
          </div>
        </section>

        {/* Related Content */}
        <section className="px-4 py-12 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Related Reading
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/articles/dubai-situation-update"
                className="rounded-xl border border-gray-200 p-6 transition hover:border-[#C9A84C]"
              >
                <h3 className="text-lg font-semibold text-[#0A1628] mb-2">Dubai Situation Update</h3>
                <p className="text-sm text-gray-500">What British expats on the ground are saying about life in Dubai right now.</p>
              </Link>
              <Link
                href="/articles/should-i-still-move-to-dubai"
                className="rounded-xl border border-gray-200 p-6 transition hover:border-[#C9A84C]"
              >
                <h3 className="text-lg font-semibold text-[#0A1628] mb-2">Should I Still Move to Dubai?</h3>
                <p className="text-sm text-gray-500">An honest assessment of whether 2026 is the right time to relocate.</p>
              </Link>
              <Link
                href="/guides/visa-residency"
                className="rounded-xl border border-gray-200 p-6 transition hover:border-[#C9A84C]"
              >
                <h3 className="text-lg font-semibold text-[#0A1628] mb-2">Visa &amp; Residency Guide</h3>
                <p className="text-sm text-gray-500">Everything you need to know about UAE visa options for UK expats.</p>
              </Link>
              <Link
                href="/guides/housing"
                className="rounded-xl border border-gray-200 p-6 transition hover:border-[#C9A84C]"
              >
                <h3 className="text-lg font-semibold text-[#0A1628] mb-2">Housing Guide</h3>
                <p className="text-sm text-gray-500">Finding a home in Dubai &mdash; neighbourhoods, costs, and the rental system.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="px-4 py-8 md:px-8 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-gray-500 leading-relaxed">
              This article reflects the situation as of 26 August 2026 and is provided for informational purposes only. It does not constitute travel advice. The security situation in the UAE is evolving rapidly &mdash; always check the latest{" "}
              <a
                href="https://www.gov.uk/foreign-travel-advice/united-arab-emirates"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-500"
              >
                FCDO travel advice
              </a>{" "}
              before making any decisions. See our{" "}
              <Link href="/terms" className="underline hover:text-gray-500">Terms of Use</Link> for full disclaimers.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
