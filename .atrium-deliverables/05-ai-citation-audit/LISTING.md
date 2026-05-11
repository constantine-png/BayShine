# AI Citation Audit — listing notes

## Stripe Checkout configuration

- **Product name:** AI Citation Audit for Service Businesses
- **Description:** A 5-day audit of what Perplexity, ChatGPT search, Claude, and Gemini say about your business. 15-page report, 25-40 query matrix, competitor cross-reference, structured remediation list, executive summary.
- **Price:** $499 USD, one-time.
- **Currency:** USD only at launch.
- **Stripe Tax:** Enabled. Constantine's entity collects.
- **Success URL:** Thank-you page that triggers the intake-form email automation.
- **Cancel URL:** The sales page itself.
- **Allow promotion codes:** Off at launch.

## Webhook

`checkout.session.completed` event triggers:

1. Confirmation email to buyer with intake form link (template: `WELCOME-EMAIL.md`).
2. Internal notification to Constantine via Resend or direct webhook.
3. Engagement record created at `Atrium/library/artifacts/services/ai-citation-audit/engagements/<engagement-id>/intake.pending.yml`.
4. Engagement ID format: `audit-{{YYYYMMDD}}-{{BUYER_DOMAIN_SLUG}}`.

## Deployment

Same pattern as the GEO Setup service. Deploy `sales-page.html` to Vercel or Cloudflare Pages at `audit.{{ATRIUM_DOMAIN}}` or as the second page under a `/services/` umbrella.

Replace before launch:

- `{{STRIPE_CHECKOUT_LINK}}`
- `{{ATRIUM_DOMAIN}}` (twice in footer)
- `/geo-setup` link to the actual GEO Setup sales page URL.

## Pricing rationale

$499 sits between two natural anchor points:

- Below it: $99 GEO Playbook (information product, self-serve).
- Above it: $2,500 GEO Setup (full service, done-for-you).

The audit is the "diagnose, then decide" middle tier. It serves three buyer types:

1. **Self-serve operators with technical capacity.** They want the diagnosis but will execute themselves. The audit IS the product they buy from us.
2. **Skeptics who need data before $2,500.** They buy the audit at $499, see the gap quantified, then upgrade to GEO Setup. Predicted ~25% upgrade rate after first 10 audits ship.
3. **Agencies and consultants.** They buy the audit on behalf of a client, white-label or pass through, and execute the remediation themselves.

## Sales targets

- **Month 1:** 5 audits = $2,495. Validates the audit pipeline against real buyer demand.
- **Month 2:** 12 audits = $5,988.
- **Month 3:** 20 audits = $9,980. Approximately equal to GEO Setup at 4 sales/mo.
- **Month 6:** 30 audits/mo sustained = $14,970. At this point the upgrade pipeline (audit → GEO Setup) becomes the highest-margin path in the catalog.

## Upgrade pipeline

A built-in cross-sell is documented in the delivery email (template in `WELCOME-EMAIL.md`):

- Day 5 delivery email mentions GEO Setup as the natural next step at a $250 audit credit (effectively GEO Setup at $2,250 if purchased within 30 days).
- The credit creates urgency without discount-chasing tone.
- Track audit-to-GEO-Setup upgrade rate as a North Star metric in the Operator's monthly rollup.

## Distribution channels

Same pattern as GEO Setup, weighted toward audiences that want diagnostic data before committing to full service:

1. r/LocalSEO with a "free framework" post that mentions the audit as the productized version.
2. IndieHackers post once the GEO Setup has produced one case study.
3. Cited Weekly newsletter cross-mention.
4. The Schema Pack v1 welcome email lists the audit as one of three "if you want more depth" follow-ups.
5. Direct outreach gated on real case study (first paid audit produces one).

## Pre-launch checklist

- [ ] Atrium domain registered (shared with GEO Setup launch).
- [ ] Stripe Checkout link generated.
- [ ] Sales page deployed.
- [ ] Sales page placeholders replaced.
- [ ] Intake form live.
- [ ] Engagement record template at `Atrium/library/artifacts/services/ai-citation-audit/templates/` created.
- [ ] Pre-flight dry run completed against BayShine itself.
- [ ] Constantine reviewed the executive-summary template.
- [ ] Refund policy linked from footer.
- [ ] Production URL reachable.
- [ ] Test transaction completed and refunded.
- [ ] Webhook fires correctly on real transaction.
- [ ] GEO Setup sales page linked correctly from the comparison section.
