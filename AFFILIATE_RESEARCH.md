# Affiliate Research — DubaiExpat

Live affiliate placements on dubaiexpat.co.uk, plus programmes applied to,
plus target list. Companion doc to the TTP research file; mirror the
structure so cross-site comparisons stay easy.

> **Editorial rule.** Affiliate placements must not compromise the "Not
> veterinary advice / Not financial advice / Editorially independent" line.
> Every article that carries an affiliate link renders `<AffiliateDisclosure />`
> at least once, and the site-wide `/affiliate-disclosure` page states the
> relationship explicitly. See the DX components for the pattern.

## Currently live programmes on DX (as of 3 Aug 2026)

Twelve live placements across four programmes.

| Programme | Network | Commission | Live placements | URL pattern |
|-----------|---------|------------|-----------------|-------------|
| Incogni | Direct (deal.incogni.io) | Revenue share | 3 | `https://deal.incogni.io/aff_c?offer_id=2&aff_id=2544&source=dx&aff_sub={article}` |
| NordVPN | Direct (go.nordvpn.net) | 40% first purchase / 30% renewal | 3 | `https://go.nordvpn.net/aff_c?offer_id=15&aff_id=145336&source=dx&aff_sub={article}` |
| Amazon UK Associates | Direct | ~1–3% depending on category | 2 | `https://www.amazon.co.uk/?tag=newmediawor06-21&ascsubtag={article}` |
| GetYourGuide | Awin (advertiser 77814) | 8% experiences booking | 4 | `https://www.awin1.com/cread.php?awinmid=77814&awinaffid=2849051&ued={target}&clickref={article}` |

### Placement inventory (article → programme)

- **/blog/bank-account-dubai** — Incogni (data-removal), NordVPN (banking-VPN)
- **/blog/dubai-internet-streaming** — Incogni (data-removal), NordVPN (streaming-VPN)
- **/blog/emirates-id-data-hygiene** — Incogni (data-removal)
- **/blog/moving-money-uk-to-dubai** — NordVPN (Wise-Revolut section)
- **/blog/cost-of-raising-children** — Amazon UK (kids' supplies), GetYourGuide (family days out)
- **/blog/summer-survival** — Amazon UK (summer kit), GetYourGuide (indoor venues)
- **/blog/abu-dhabi-experiences** — GetYourGuide (experiences)
- **/blog/hidden-costs** — GetYourGuide (holiday budget line)

## Portfolio account state relevant to DX

From the `affiliate-programme-onboarding` skill, NewMediaWorld Pte. Ltd.
already has network accounts on:

| Network        | Status                                | DX-specific notes |
|----------------|---------------------------------------|-------------------|
| Awin           | Active (Publisher 2849051)            | GetYourGuide (77814) live. Add: MoneyCorp UK, Wise, WorldRemit if approved for DX. |
| CJ Affiliate   | Onboarding (8/9 steps), W-8BEN-E in   | Once final step done — apply for Booking.com, Marriott (Dubai travel angle). |
| Partnerize     | Registered, 10 apps pending           | Marriott/Hilton — Dubai-heavy properties. |
| Optimise Media | Active (DX + EAA live)                | Any UK-financial-services offers (SIPP transfer, life insurance). |
| ShareASale     | Pending approval                      | Skip until approved. |
| Impact.com     | Declined for DX/EAA (low traffic)     | Re-apply Q4 2026 once traffic scales. |

## Target list (highest ROI applications not yet made)

1. **Wise (UK)** — UK expats moving money to AED is a top-3 DX search intent.
   Direct programme or via Awin. Estimated 4-6 placements available.
2. **Revolut** — same intent as Wise. Direct programme.
3. **SafetyWing / expat health insurance** — new UAE arrivals need cover in
   the gap before their employer scheme kicks in. Applies to /moving-to-dubai
   and /work-visa articles.
4. **HSBC Expat** — existing HSBC-UAE piece could carry the referral link.
   Direct programme via HSBC's referral portal.
5. **Booking.com / Agoda (Involve Asia)** — Dubai tourism angle. Involve Asia
   application would double as the TTP application for SE Asia.
6. **CurrencyFair / OFX** — competitors to Wise, easier to be approved for.

## Application checklist (mirror TTP's process)

Before submitting to any network:

- [ ] Confirm the site's "monthly uniques" data is ≥ threshold on GA4.
- [ ] Screenshot the /affiliate-disclosure page for the application form.
- [ ] Draft a 2-sentence editorial line for "why this fits our audience".
- [ ] Log the application to `~/openclaw-projects/business/affiliates/NWM_Affiliate_Status.md`.

## Cadence

- Live programmes are checked weekly by `weekly-affiliate-health-check` (URL
  health) and `weekly-revenue-digest` (click + revenue tracking).
- New applications are queued in the target list above. Pick one per week to
  submit via the `affiliate-programme-onboarding` skill.
- If a programme sits dormant (>14 days no clicks per revenue digest), it's
  flagged for placement audit — either the article ranks poorly or the CTA
  is buried.
