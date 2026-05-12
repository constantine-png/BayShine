# Schema Doctor Pro — listing notes

## Deployment

Same pattern as Citation Watch. Single static `sales-page.html`. Deploy to `forge.{{tld}}/schema-doctor-pro` (or `schema-doctor-pro.forge.{{tld}}`).

### Placeholders to replace

- `https://forge.example/generate` — Schema Generator URL.
- `https://forge.example/citation-watch` — Citation Watch URL.
- `https://atrium.example` — Atrium domain.

## Product spec (for the eventual build at Forge Rung 2)

Schema Doctor Pro is Forge's second subscription product, intentionally larger scope than Citation Watch:

- Citation Watch is observation: probe AI engines, alert on changes.
- Schema Doctor Pro is intervention: generate, validate, enforce schema across multiple domains and the build pipeline.

The two products have complementary value propositions but serve different buyer segments. Citation Watch's buyer is a single-domain owner who wants to know what's happening. Schema Doctor Pro's buyer is a developer or agency operator who wants to engineer against schema regressions.

### Core capabilities (Rung 2 build)

1. **CMS webhook listener.** Receives "page created" / "page updated" webhooks from WordPress, Astro, Next.js. Auto-generates appropriate JSON-LD based on page type detection.
2. **Build-pipeline integration.** GitHub Action / Vercel build hook / Netlify build hook that fails builds with invalid schema. Customer adds one line to their CI config.
3. **Drift detection.** Daily crawler snapshots each domain's schema. Diff against previous day. Alert on changes.
4. **Multi-domain dashboard.** Single dashboard showing up to 10 domains per subscription. Agency-friendly.
5. **Validation log.** Every validation event logged with timestamps and remediation suggestions for failures.

### Tech stack (when built)

- Frontend: Next.js, shared infrastructure with Citation Watch.
- Backend: Vercel serverless + Neon Postgres (separate schema from Citation Watch but same database tier).
- CMS integrations:
  - WordPress: plugin published to wordpress.org plugin repo.
  - Astro: npm package `@forge/schema-doctor-astro`.
  - Next.js: npm package `@forge/schema-doctor-next`.
  - REST webhook: documented endpoint for custom CMS integrations.
- Schema validation: shared `archetypes/shared/schema.ts` interface (from Atrium's shared module library, re-used).
- Subscription billing: Stripe Subscriptions. $99/mo standard. $79/mo founding-50 locked for life.
- Authentication: magic link + per-domain API tokens for CMS webhook authentication.

### Cost basis at scale

- Per-domain crawler probe: ~$0.50/month (cheap; no AI engine cost, just HTTP fetches).
- Database + email + Vercel infrastructure: ~$3/month per customer.
- Margin at $99/mo: ~$80/customer/month. Better margin than Citation Watch because no AI engine probe cost.
- Margin at $79/mo founding rate: ~$60/customer/month. Still strong.

### Customer success metrics

- Monthly churn target: <6% (lower than Citation Watch because customers integrate Schema Doctor Pro into their build pipeline; churning means uninstalling, which is friction).
- Net revenue retention target: 110%+ (multi-domain customers add domains over time).
- NPS target: 60+ at 3 months.

## Waitlist signup tracking

Substack API integration at Rung 2 captures the waitlist into a Schema Doctor Pro segment of Forge Weekly's general list. The waitlist signup endpoint:

```
POST https://forge.example/api/schema-doctor-pro-waitlist
Body: { email: string, source: string }
Returns: { count: number, slot: number | null }
```

Where:
- `count` is current waitlist count.
- `slot` is the assigned slot 1-50 if founding-member rate available, or `null` if cap is closed.

The sales page updates the confirmation message based on response: "Founding slot #N reserved" or "Waitlist position N. Standard pricing at $99/mo when shipped."

## Launch sequence

Per Forge's CHARGE.md, Schema Doctor Pro launches after Citation Watch has 25+ paying subscribers. The launch:

1. **Week -2 before launch:** Email Schema Doctor Pro waitlist + Citation Watch subscribers (cross-sell opportunity for Citation Watch subscribers to add Schema Doctor Pro). Founding-50 slots offered first to waitlist.
2. **Week -1:** Forge Weekly issue covering the Schema Doctor Pro thesis (schema-as-code, build-pipeline integration, multi-domain operators). Cross-promote.
3. **Launch day:** Public sales page replaces waitlist (same URL, different content). IndieHackers launch ("Show HN: Schema-as-code for local service businesses"). r/SEO + r/webdev posts.
4. **Week +1:** First customer support cycle. Bug reports, integration issues, feature requests logged to `library/decisions.jsonl` under operator-schema-doctor-pro (spawned at this point).

## Cross-sell with Citation Watch

The sales page's "Both?" section in the comparison block sets up the future bundle. When Schema Doctor Pro launches, the bundle SKU on Stripe:

- Citation Watch + Schema Doctor Pro: $99/mo (vs $118 unbundled). Save $19/mo.
- Founding-member subscribers: $79/mo bundle (Schema Doctor Pro at founding rate, Citation Watch free included).

The bundle is the upsell mechanic for Citation Watch's founding-100. Some will convert to Schema Doctor Pro bundle subscribers, paying $79/mo vs the $14/mo they had on Citation Watch alone — net $65/mo upgrade per converted founding member.

## Tracking targets (waitlist phase)

- Citation Watch waitlist → Schema Doctor Pro waitlist click-through: 15-25% (the comparison section on the Citation Watch sales page should drive this).
- Schema Generator → Schema Doctor Pro waitlist (direct path): 5-15% (some Schema Generator users are developers who care more about Schema Doctor Pro than Citation Watch).
- Net waitlist growth: 30-60 signups/month at the Schema Generator's projected 1,000 visitors/month with these conversion ranges.
- Founding-50 cap fills: targeting 60-90 days from sales page going live.

## Voice notes

The sales page voice matches Forge's discipline:

- Em-dashes used in the lede and feature descriptions.
- "Schema as code" is a real claim — the build-pipeline integration is the proof.
- "First 50 signups get $79/mo for life" is a real, capped scarcity mechanic — not invented urgency.
- Constantine is named in the "Who's building this" section.
- The compare block with Citation Watch is direct: "Choose Schema Doctor Pro if..." rather than soft "this might be right for you" language.
- Atrium reference at the end is honest cross-network linking, not promotional.

## What's not yet on this page

- Demo video. Add when Schema Doctor Pro has a working demo build.
- Customer testimonials. Will populate after first 5 paying subscribers consent to anonymized quotes.
- Pricing table for multi-domain over-cap. Currently "10 domains included." Beyond 10 will be priced per-domain when that demand materializes.
- Open-source / freemium tier. Not planned. Forge's strategy is paid-first.
