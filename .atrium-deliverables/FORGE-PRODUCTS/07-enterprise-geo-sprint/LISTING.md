# Enterprise GEO Sprint — listing notes

## Deployment

Single static HTML at `forge.{{tld}}/enterprise` or as a route inside the existing Forge Vercel project. Replace placeholders:

- `{{FORGE_DOMAIN}}` — Forge's domain (appears in mailto links, footer email).

## Pricing rationale

$5,000 sits between Atrium's $2,500 (faceless / 10-day) and Forge's $25,000 Program (multi-location). For single-location mid-market buyers and small-chain operators (2-5 locations), Sprint is the right tier.

The 2x price premium over Atrium's Setup is real: Constantine is on the call, the timeline is half (5 days vs 10), the engagement priority is elevated in calendar coordination per the inheritance.md "engagements $1,500+ get priority" rule and Forge's aggressive cadence discipline.

## Sales motion

Per Forge's CHARGE.md and the Forge outbound kit, Sprint inquiries come from:

- Direct email from the sales page mailto link.
- LinkedIn outreach (per LinkedIn-Outreach.md L1 variant).
- Cold email outbound (per COLD-EMAIL-TEMPLATES.md Variant A for multi-location operators).
- Cited Weekly + Forge Weekly cross-promotion mentions.
- Atrium AI Citation Audit upgrade path (audit buyers who want the higher-velocity tier route here rather than to Atrium's GEO Setup).

## Inquiry-to-engagement flow

1. Email lands in Constantine's inbox.
2. Customer Support Specialist drafts a 24-hour acknowledgment with a Calendly link for the 20-minute discovery call.
3. Constantine on the discovery call. Confirms scope and timeline fit.
4. Constantine sends Stripe Checkout link via email (no automated portal at Rung 0; manual link generation).
5. Customer pays via Stripe.
6. Engagement begins same day; uses the same delivery pipeline as Atrium's GEO Setup but compressed to 5 days.

At Forge Rung 2, this flow automates: Calendly auto-books, Stripe Checkout link auto-generates, intake form auto-sends post-payment.

## Founding-engagement window

The "first 10 Sprint engagements lock $5,000 pricing for life on repeat" is a real founding-window mechanic. After the first 10 close (likely Q3-Q4 2026 under timeline compression), Standard pricing reviews:

- Sprint at $7,500 if demand exceeds supply (Constantine's calendar throughput).
- Sprint stays at $5,000 if competition or market response indicates the price is at ceiling.

Decision made at Forge Rung 3 with the 10-engagement data set.

## Operational notes

- Engagement cap per Constantine's calendar: 4 Sprints simultaneously (each takes 5 business days with ~50% of his attention; 4 × 50% > 100%, so this is the realistic upper bound until subcontracting in at Rung 4).
- If 4 active Sprints, new inquiries route to a 1-2 week scheduling delay or to Atrium's GEO Setup at the lower price point.
- The discoverability specialists (shared with Atrium) work the Sprint at `voice: forge` calibration. Same workflow as the Atrium Setup pipeline; bolder communication style.

## Cross-network coordination

A buyer comparing Sprint ($5,000 / 5 days) vs Atrium's Setup ($2,500 / 10 days) self-selects. Per the coordination doc, Atrium's Setup and Forge's Sprint don't compete for the same buyer because the buyer profiles differ:

- Sprint buyer values speed and named operator presence.
- Setup buyer values lower price and faceless service.

Inquiries that fit Setup better get routed to Atrium (with a constitutional reminder: Atrium's discipline says we don't cold-pitch end buyers, but inbound buyers who're better served by Atrium get the honest recommendation).

## Pre-launch checklist

- [ ] Forge domain registered.
- [ ] Sales page deployed.
- [ ] Discovery-call Calendly link configured.
- [ ] Stripe Checkout link generated.
- [ ] Engagement charter template ready (single document; Stripe Invoice + scope confirmation in plain language).
- [ ] Engagement directory template at `Forge/library/artifacts/services/enterprise-sprint/engagements/<id>/` created.
- [ ] First case study pre-prepared as a publish-on-completion artifact.

## Why this sales page now

Forge's Enterprise tier has been positioned in CHARGE.md since founding but until this commit existed only as a card on the Forge content site. Cold outreach (when Rung 2 unlocks) needs to land prospects at a credible dedicated sales page; "see the card on our content site" is meaningfully weaker positioning than "see the dedicated sales page at forge.{{tld}}/enterprise."

This sales page completes Forge's enterprise catalog visualization. The next page (Enterprise GEO Program at $25k / 30 days) is the flagship for multi-location operators.
