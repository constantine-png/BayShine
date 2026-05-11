# GEO Setup productized service — listing notes

## Stripe Checkout configuration

- **Product name:** GEO Setup for Local Service Businesses
- **Description:** Schema, llms.txt, site architecture audit, internal linking, citation-readiness rewrite on top 5 pages, and 90-day AI-citation probe report. 10-day turnaround. 7-day refund.
- **Price:** $2,500 USD, one-time.
- **Currency:** USD only at launch. Add EUR and GBP after 5 sales in those currencies.
- **Stripe Tax:** Enabled. Constantine's entity collects.
- **Success URL:** A simple thank-you page that triggers the intake-form email automation. Suggested: `/{{ATRIUM_DOMAIN}}/geo-setup/thanks`.
- **Cancel URL:** The sales page itself.
- **Allow promotion codes:** Off at launch. Promotion codes encourage discount-chasing. Enable later only with a documented campaign reason.

## Webhook

Stripe `checkout.session.completed` event triggers:

1. Confirmation email to the buyer with intake form link (template: `INTAKE-EMAIL.md`).
2. Internal notification to Constantine via Resend or direct webhook.
3. Engagement record created at `Atrium/library/artifacts/services/geo-setup/engagements/<engagement-id>/intake.pending.yml`.
4. Engagement ID format: `geo-setup-{{YYYYMMDD}}-{{BUYER_DOMAIN_SLUG}}`.

## Deployment

The sales page is a single static HTML file at `sales-page.html`.

Deploy to either:

- **Vercel:** drop `sales-page.html` as `index.html` in a new Vercel project pointed at a subdomain like `geo-setup.{{ATRIUM_DOMAIN}}`. DNS to the Vercel project. Pages deploy in under 1 minute.
- **Cloudflare Pages:** same setup, Cloudflare instead of Vercel.
- **Webflow / Squarespace / etc:** copy the HTML into a custom-code embed if the subdomain belongs to an existing site.

Replace these placeholders before going live:

- `{{STRIPE_CHECKOUT_LINK}}` — the Stripe-hosted payment link URL.
- `{{ATRIUM_DOMAIN}}` — the production domain (twice in the footer).

## Pricing audit before launch

The $2,500 number is the target per Journal 005's evidence audit. Before going live, verify it against three comparable productized services in the market today:

- DataForSEO setup: $1,500-3,500 range.
- WP Engine GEO consulting: $5,000+ entry.
- Solo SEO consultants offering similar packages: $1,500-4,000 range.

$2,500 is positioned at the affordable-professional tier, which matches our cold-start positioning (no track record, low friction to first sale). Re-evaluate at 5 sales and 10 sales.

## Sales targets

- **Month 2 of operation:** 4 sales = $10,000. This crosses the $10k/mo unlock threshold per Journal 001's revenue ramp.
- **Month 3:** 6 sales = $15,000.
- **Month 6:** 10 sales/month sustained = $25,000/month. At this point, propose the recurring retainer tier ($499-999/month maintenance).

## Distribution channels

Per `Atrium/library/playbooks/productized-services.md`:

1. IndieHackers launch post within 72 hours of sales page going live.
2. X thread with sales page screenshot.
3. r/SmallBusiness and r/SEO posts.
4. Direct outreach to BayShine-adjacent service businesses (only after first paid engagement produces a case study; never before).
5. Cited Weekly Newsletter cross-mention within 2 weeks of launch.

## Pre-launch checklist

- [ ] Atrium domain registered.
- [ ] Stripe account configured for Atrium entity (Constantine's existing entity is acceptable).
- [ ] Stripe Tax enabled.
- [ ] Stripe Checkout link generated and tested with a $0.50 test transaction that gets refunded.
- [ ] Sales page deployed to staging URL.
- [ ] Sales page validated: phone number, email link, no broken images, no placeholder text remaining.
- [ ] Intake form (Typeform or Notion) live with the schema in `INTAKE-FORM.md`.
- [ ] Engagement record template in `Atrium/library/artifacts/services/geo-setup/templates/` created.
- [ ] Pre-flight dry run completed against BayShine itself as the first case study.
- [ ] Constantine has reviewed and approved the executive-summary template.
- [ ] Refund policy linked from the sales page footer.
- [ ] Production domain DNS pointed.
- [ ] Sales page reachable at the production URL.
- [ ] Test Stripe transaction at the live URL with a real card; refund immediately; confirm refund webhook fires correctly.
