/**
 * Article category → lead-magnet mapping.
 *
 * WHY THIS EXISTS
 * ---------------
 * Until 17 Aug 2026 DubaiExpat had an `EmailCapture` component, four working
 * magnets, and a correct `/api/subscribe` route — and captured almost nothing,
 * because the component was mounted on exactly three hub pages
 * (/cost-of-living, /guides/tax-and-hmrc, /guides/uk-pension-dubai) and on none
 * of the 22 articles. Every article impression in Search Console landed on a page
 * with no form on it at all. The DX_GENERAL Brevo list was empty as a direct
 * result.
 *
 * Mounting the capture in `ArticleLayout` fixes it for all articles at once. This
 * file decides *which* magnet each article offers, so a reader on the pension
 * article is offered the pension guide rather than a generic relocation checklist.
 * Relevance is the whole difference between a 1% and a 5% capture rate.
 *
 * Adding a new magnet: add it to `app/api/subscribe/magnets.ts` first (that is the
 * delivery config), then map categories to it here. A category with no entry falls
 * back to the relocation checklist, which suits any newly-arrived reader.
 */

export type ArticleMagnet = {
  /** Magnet slug — MUST exist as a key in app/api/subscribe/magnets.ts */
  firstMagnet: string;
  /** Brevo GUIDE_TOPIC attribute, used for segmentation in campaigns */
  guideTopic: string;
  headline: string;
  subheading: string;
  cta: string;
};

const RELOCATION: ArticleMagnet = {
  firstMagnet: "dx-relocation-checklist",
  guideTopic: "relocation",
  headline: "Get the UK to Dubai Relocation Checklist — free",
  subheading:
    "Every step before you leave and in your first 90 days: visas, HMRC, banking, removals, schools. The admin most people find out about too late.",
  cta: "Send me the checklist →",
};

const TAX: ArticleMagnet = {
  firstMagnet: "dx-tax-exit-checklist",
  guideTopic: "tax",
  headline: "Get the UK Tax Exit Checklist — free",
  subheading:
    "What HMRC actually needs when you leave: P85, split-year treatment, the Statutory Residence Test day-counts, and the deadlines that catch people out.",
  cta: "Send me the tax checklist →",
};

const PENSION: ArticleMagnet = {
  firstMagnet: "dx-pension-guide",
  guideTopic: "pension",
  headline: "Get the UK Pension Guide for Dubai Expats — free",
  subheading:
    "QROPS, SIPPs and leaving a pension where it is — what each actually means for a non-resident, and the questions to ask before anyone advises you to move it.",
  cta: "Send me the pension guide →",
};

const BUDGET: ArticleMagnet = {
  firstMagnet: "dx-budget-planner",
  guideTopic: "cost-of-living",
  headline: "Get the Dubai Budget Planner — free",
  subheading:
    "Real 2026 numbers for rent, schools, insurance, utilities and the one-off setup costs, so you can work out what salary you actually need.",
  cta: "Send me the budget planner →",
};

/**
 * Category strings as they appear in article frontmatter. Keep in sync with
 * `grep '^category:' content/articles/*.mdx`.
 */
const BY_CATEGORY: Record<string, ArticleMagnet> = {
  // Money the reader is about to move or lose
  Finance: PENSION,
  "Tax & Finance": TAX,
  "Career & Finance": BUDGET,
  "Cost of Living": BUDGET,
  Property: BUDGET,
  Family: BUDGET,
  Banking: RELOCATION,

  // Arrival and admin
  "Visa & Residency": RELOCATION,
  Relocation: RELOCATION,
  Utilities: RELOCATION,
  Healthcare: RELOCATION,
  "Driving & Transport": RELOCATION,
  Playbook: RELOCATION,

  // Softer intent — still relocation, it's the broadest fit
  Travel: RELOCATION,
  Technology: RELOCATION,
  Lifestyle: RELOCATION,
};

/**
 * Pick the magnet for an article. Falls back to the relocation checklist, which
 * is the safest default: it suits anyone who has just arrived or is about to.
 */
export function getArticleMagnet(category?: string): ArticleMagnet {
  if (!category) return RELOCATION;
  return BY_CATEGORY[category] ?? RELOCATION;
}
