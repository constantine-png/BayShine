# Forge Weekly — Issue 003

**Subject:** Schema Doctor Pro — schema as code for operators who treat schema as code

**Send date:** Thursday of week 4 (Day 30)

**Tier:** Free + paid tier supplement ($5/mo founding-member, $9/mo standard).

---

## Lede

Most local service business sites I audit have one of three states of schema:

1. **None at all.** ~70% of the audited sample.
2. **Generic `LocalBusiness` schema, often added by a WordPress plugin.** ~20% of the sample.
3. **Specific schema, often added once by a developer and never updated.** ~10% of the sample.

The third category is the most interesting — and the most fragile. Once schema is in place, it drifts. CMS updates break it. Developers refactor templates without realizing they touched the schema markup. Plugin conflicts overwrite it. By the time the operator notices a citation drop, the schema has been broken for weeks.

This is why Schema Doctor Pro exists.

## What Schema Doctor Pro is

Schema Doctor Pro is the second of two Forge subscription products. $99/mo standard, $79/mo founding-member rate locked for life for first 50 subscribers.

Where Citation Watch is observation (probe AI engines, alert on citation drops), Schema Doctor Pro is intervention. The core capabilities:

**One. Auto-generate schema on new pages.** Webhook from your CMS (WordPress, Astro, Next.js) triggers JSON-LD generation based on page type. New service page → Service schema. New blog post → Article schema. New FAQ → FAQPage. The generated JSON-LD is validated against schema.org spec before insertion.

**Two. Pre-deploy schema validation.** Integrate into your build pipeline (GitHub Actions, Vercel build hook, Netlify build hook). Builds that break schema validation fail BEFORE reaching production. The customer adds one line to their CI config and accidentally-broken schema never ships.

**Three. Continuous drift detection.** Daily snapshot of every page's schema markup. Diff against prior day. Alert on changes. Schema regressions caught at the diff layer, not at the citation-position layer 14 days later.

**Four. Multi-domain support.** Up to 10 domains per subscription. Agencies and multi-site operators see all client domains in one dashboard. Per-domain alerts route to per-domain email recipients.

## Why this is a $99 product and not a $19 product

Citation Watch at $19/mo is observational. The customer connects a domain; we run weekly probes; the customer reads the dashboard. The per-customer infrastructure cost is moderate (AI engine probe budget around $10/customer/month at 25 queries/week × 4 engines).

Schema Doctor Pro at $99/mo is interventional. CMS integrations require ongoing maintenance (WordPress plugin updates, npm package versions for Astro and Next.js, REST webhook authentication and error handling). Multi-domain support means dashboards, alerts, and audit logs at higher complexity than single-domain Citation Watch. Build-pipeline integration means CI failures and edge-case handling.

The $99/mo price reflects the actual delivery cost differential. Margin at $99/mo: roughly $80/customer/month. Same scale as Citation Watch's margin in absolute dollars, but at one-fifth the customer count.

The buyer profile is different too. Schema Doctor Pro is for developers and agencies, not casual operators. The buyer treats schema as code; the tool treats schema as code. Alignment matters more than price.

## What this is NOT

Schema Doctor Pro is not:

- A replacement for Citation Watch. Different jobs. Citation Watch monitors what AI engines say; Schema Doctor Pro keeps the schema correct so the engines have something to say.
- A content writer. Schema Doctor Pro generates schema for content you've written; it doesn't write the content. For citation-readiness content rewrites, Atrium's GEO Playbook v0.5 ($79) or GEO Setup ($2,500) is the right tool.
- A CMS. Schema Doctor Pro integrates with your existing CMS — it does not replace it.
- A ranking guarantee. Correct, citable schema is what we ship; position is a function of your market.

## The bundle mechanic

When Schema Doctor Pro launches, the bundle SKU activates: Citation Watch + Schema Doctor Pro at $99/mo combined (vs $118 unbundled). Founding-member subscribers get the bundle at $79/mo (Schema Doctor Pro at founding rate + Citation Watch included).

For Citation Watch founding-100 subscribers, the bundle upgrade math:

- Their current rate: $14/mo Citation Watch alone, locked for life.
- Bundle upgrade rate: $79/mo for Schema Doctor Pro + Citation Watch.
- Net upgrade cost: $65/mo per converted founding member.

If 20% of Citation Watch founding-100 bundle-upgrade: 20 × $65/mo = $1,300 additional MRR. If 40% bundle-upgrade: $2,600 additional MRR.

The bundle is the upsell mechanic that compounds the founding cohort. Same customers, more revenue per customer over time. This is subscription economics at its core — and it's why Forge's bet is on subscription compounding rather than on volume.

## Schema Watch — webhook patterns

For Schema Doctor Pro to auto-generate schema on new pages, the CMS must fire a webhook on page-create or page-update events. Each major CMS handles this differently:

**WordPress.** Use the `save_post` action hook. The hook fires on every post and page save. Filter by post type to scope to relevant page types (e.g., only Service pages, not blog posts, depending on your strategy).

**Astro.** Content collections fire build-time events but no runtime events by default. The Astro-specific approach: a build-pipeline hook in `astro.config.mjs` that POSTs schema-relevant content to Schema Doctor Pro's webhook endpoint during the build.

**Next.js.** Server-side rendering means the page is generated on-request, not on-create. The Schema Doctor Pro integration for Next.js is a generator function called at render time, similar to how `generateMetadata()` works for Open Graph tags.

**Webflow and Squarespace.** Webhooks are limited; the typical integration is post-save Zapier or Make.com automation that triggers the Schema Doctor Pro endpoint.

The complexity varies by CMS. Schema Doctor Pro's npm packages handle Astro and Next.js natively; the WordPress plugin handles WordPress; the REST webhook endpoint handles custom CMSes. Webflow and Squarespace require Zapier-style intermediation.

## Reader Action

Schema Doctor Pro waitlist: forge.example/schema-doctor-pro. $79/mo founding-50 rate locked for life. Cap fills in 6-10 weeks at current waitlist velocity.

If you're a single-domain operator who doesn't have a build pipeline or multiple sites, Citation Watch at $19/mo (forge.example/citation-watch) is the right product. $14/mo founding-100 rate.

For the bundle once both ship: $99/mo combined ($79/mo founding-member rate). Watch the issue announcing the bundle activation when Schema Doctor Pro launches.

For the rest of the AI search stack — schema templates, llms.txt templates, GEO methodology, productized services — Atrium covers the one-time and done-for-you tiers at atrium.example.

---

## Paid tier supplement

**Deep dive: building the WordPress plugin for Schema Doctor Pro.** A walkthrough of how the WordPress plugin will be built when Forge Rung 2 unlocks the development budget. Architecture, webhook handling, license-key validation, schema generation hooks. Useful for developers who want to understand or contribute.

**Bundle decision worksheet.** A downloadable spreadsheet for prospective subscribers: input your current state (number of domains, build pipeline yes/no, citation monitoring needs), get a recommendation on Citation Watch vs Schema Doctor Pro vs Bundle.

**Q&A with Constantine.** Reply to this issue with specific questions about the Schema Doctor Pro roadmap, CMS integrations, or pricing.

---

## Sources

- Schema state distribution (70/20/10): BayShine audit dataset across 25 mobile service business sites, May 2026.
- Schema Doctor Pro spec: forge.example/schema-doctor-pro LISTING.md product spec section.
- Bundle math: forge.example/schema-doctor-pro LISTING.md "Both?" comparison block.

## Voice gate

Forge's voice throughout. Em-dashes used. Constantine bylined. Paid tier mentions are direct. The lede uses concrete percentages with a source. The "what this is not" section directly addresses Atrium products as the appropriate alternatives — cross-network transparency without competition framing.

## Publishing notes

- Send time: Thursday 09:00 Eastern (Day 30).
- Cover image: placeholder.
- Free tier delivery: above the divider.
- Paid tier delivery: full text.
- Cross-promotion priority: Schema Doctor Pro waitlist primary; Citation Watch waitlist secondary; bundle mechanic context throughout; Atrium products as sibling reference.

This is Issue 003. Issue 004 ships at Day 37 (Thursday of week 5) and will cover the first month of subscription-product metrics — by then, the waitlists should have moved meaningfully and the data will be worth publishing.
