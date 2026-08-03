# Brevo Runbook — DubaiExpat

DubaiExpat's subscribe + magnet-delivery flow. Mirror doc of TTP's
`BREVO_RUNBOOK.md` — the two sites are wired identically, so a change here
should be considered for TTP and vice versa.

## Current state (3 Aug 2026)

- Domain authenticated in Brevo (DKIM + DMARC live).
- Contact list configured (list ID stored in Vercel env `BREVO_LIST_ID`).
- API key rotates via Vercel env `BREVO_API_KEY`.
- Sender: `hello@dubaiexpat.co.uk`, routed via Cloudflare Email Routing to
  the NWM Gmail inbox.
- Subscribe endpoint: `app/api/subscribe/route.ts` (contact + magnet).
- Contact-form endpoint: `app/api/contact/route.ts`.

## Env vars

Copy `.env.example` to `.env.local`:

```
BREVO_API_KEY=...            # Brevo transactional key
BREVO_FROM_EMAIL=hello@dubaiexpat.co.uk
BREVO_FROM_NAME=DubaiExpat
BREVO_LIST_ID=...            # numeric ID of the "DX Subscribers" list
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-Q93X7TD1X2
```

Without `BREVO_API_KEY`, the subscribe endpoint runs as a dev no-op and
returns `{ ok: true, dev: true }` — same behaviour as TTP.

## When to consult this file

- Rotating the Brevo API key. Follow the [`vercel-env-var-management`](../../)
  skill.
- Adding a new magnet to the delivery flow. See
  [`brevo-magnet-delivery-inline`](../../).
- Debugging a subscriber that doesn't receive their magnet.
- Extending the contact form with a new field. See
  [`brevo-contact-attribute-gotchas`](../../) — Brevo silently drops
  attributes that aren't pre-declared on the contact schema.
- Sending a segmented campaign. See
  [`brevo-segmentation-campaigns`](../../).

## Standard test address

E2E tests use `ciaranlondra@gmail.com` — never a `+alias` or
`test@example.com`. Rule captured after a bulk-delete of 52 test contacts
on 3 Aug 2026. If the same address needs to re-test, delete the contact in
Brevo first, then re-submit.

## Troubleshooting checklist

1. Subscribe returns `{ ok: true, dev: true }` → env var not set on the
   Vercel deployment. Check Production + Preview both have `BREVO_API_KEY`.
2. Contact created in Brevo but magnet not delivered → transactional email
   failed. Check Brevo transactional log for the ISO timestamp of the request.
3. Magnet delivered but attributes blank (SITE, GUIDE_TOPIC) → attributes
   not pre-declared. See `brevo-contact-attribute-gotchas`.
4. Domain-auth warning in Brevo → DKIM or DMARC drift. Re-run the
   [`cloudflare-email-routing-debugger`](../../) skill.

## Related sites

- TTP (`sites/the-expat-pet/`) — same pattern, different domain.
- EAA (`sites/expatautoadviser/`) — same pattern, different domain.
