# FAQ master — Atrium catalog

Maintained by the customer-support-specialist descendant. This file
is the single source of truth for buyer-facing answers across every
shipped product.

Update whenever:

- A product's scope, price, or timeline changes.
- A new product is added to the catalog.
- The same question appears 3+ times from different buyers (add it
  here so the next instance is faster to answer).

## General

### Q: Who is Atrium?

A: Atrium is a small operation building tools, audits, and services for local service businesses that need to be found by AI search engines. The catalog covers schema packs, llms.txt templates, audits, and a productized GEO (generative engine optimization) setup service. The accountable human signing engagements is Constantine.

### Q: How do you pronounce / spell the brand?

A: The brand is Atrium. The dogfood case study is BayShine Detailing (capital B, capital S, no space, no hyphen) — a real mobile detailing business in Pasco County, Florida, that the founding operator runs and uses as the test bench for every product.

### Q: Where are you located?

A: Pasco County, Florida. Services and products are delivered remotely; geographic location of the buyer doesn't affect pricing or scope.

### Q: Do you work with international buyers?

A: Yes. All catalog items are priced in USD. The audit and setup services are calibrated for US-pattern service businesses; non-US buyers should reply with their geography before purchase so we can flag any region-specific differences (currency display, service-area conventions, schema-validator quirks).

### Q: How do I contact you?

A: Reply to any email from `hello@<atrium-domain>` or to the purchase confirmation email. Typical response time 24 business hours.

---

## Schema Pack v1 ($29)

### Q: Which CMS platforms are supported?

A: WordPress, Astro, Next.js, Webflow, Squarespace — install instructions for each in the included INSTALL.md. The schema JSON works on any platform that supports a `<script type="application/ld+json">` tag in `<head>`.

### Q: Why $29 instead of free?

A: Free generic schema generators exist. The Schema Pack v1 premium is the vertical-typed schema.org subclasses (AutoWash, HVACBusiness, Plumber, RoofingContractor) and the vertical-specific FAQ patterns calibrated against real AI-engine probe data. If you'd build that yourself, $29 isn't necessary.

### Q: Can I use this on multiple sites?

A: Single-site commercial license. For multi-site or agency use, reply for an agency license quote.

### Q: My vertical isn't included. When will you add it?

A: v2 adds 18 more verticals at $49 (total 24 verticals) when there's a waitlist of 50. Reply with your vertical to be added to that vertical's waitlist. Current waitlist demand: dental, legal, electrical, pest control, landscaping, locksmith, garage door.

### Q: The schema is failing Google Rich Results Test. What do I do?

A: The 3 most common causes are: (1) phone number format wrong (use `+1 555 123 4567` with country code and spaces, no parentheses), (2) `dayOfWeek` enum strings wrong (must be `Monday` not `monday`, full word not abbreviation), (3) latitude/longitude as strings instead of numbers. The INSTALL.md troubleshooting table covers each. If still failing, reply with the validation error message and your live URL and we'll diagnose.

### Q: Can I get a refund?

A: 7-day no-questions refund from purchase. Reply with the request and the refund processes within 1 business day.

---

## llms.txt Pack v1 ($9)

### Q: What's the difference between llms.txt and schema?

A: Schema markup answers "what's on each page in structured data" (LocalBusiness type, service offerings, opening hours). llms.txt answers "who is this business at the entity level" (canonical name, geographic scope, priority pages, citation preferences). The two complement each other. A site with both is parsed more reliably than a site with either alone.

### Q: Does Google AI Overviews use llms.txt?

A: As of 2026, Google has not publicly committed to llms.txt parsing. Perplexity, Claude, and ChatGPT search demonstrably use it (verified by direct probing). The pack is most reliably useful for those three engines.

### Q: My platform (Webflow/Squarespace) doesn't support custom files at root. Workaround?

A: Both platforms require a subdomain workaround. Either: (1) host the llms.txt on a Cloudflare Pages or Vercel project at a subdomain (e.g., `cdn.yoursite.com/llms.txt`), or (2) export and migrate to a platform that supports custom static files. The INSTALL.md covers option 1 in detail.

### Q: Will updating my llms.txt cause downtime?

A: No. It's a plain text file. Updating means uploading a new version to the same path. Most static hosts pick up changes instantly.

### Q: Can I get a refund?

A: 7-day no-questions refund from purchase.

---

## Bundle (Schema Pack + llms.txt Pack at $35)

### Q: Can I buy the bundle if I already bought one of the products?

A: Yes. Reply with the original Gumroad purchase email; we'll generate a manual checkout link for just the missing product at the marginal price ($35 - $29 paid = $6 for the llms.txt Pack if you have Schema Pack v1; or $35 - $9 = $26 for Schema Pack v1 if you have llms.txt Pack).

### Q: Why bundle?

A: Schema markup and llms.txt are complementary, not redundant. Buyers who install both see meaningfully better citation precision than buyers who install one. The bundle price saves $3.

---

## GEO Setup ($2,500 / 10 business days)

### Q: What's included that the schema pack doesn't have?

A: The schema pack is templates you install yourself. The GEO Setup service is implementation: we do the schema, the llms.txt, the internal linking pass, the citation-readiness rewrites on top 5 pages, and a 90-day probe report. You receive deployable artifacts plus a signed executive summary.

### Q: Why isn't there a discovery call?

A: The intake form is the brief. The service is fixed-scope at $2,500. If you need a custom scope, that's a different engagement type; reply with the specifics and we'll discuss whether a separate engagement makes sense.

### Q: What if my site is on a custom CMS?

A: Deliverables are platform-agnostic (JSON-LD blocks, plain text llms.txt, Markdown rewrites, CSV of internal-linking additions). Any developer with admin access can implement. For exotic platforms, reply with the specifics before purchase so we can flag any limitations.

### Q: Do you guarantee rankings?

A: No. We make the site readable, citable, and structurally correct for AI engines. Position is a function of market context (competition, query volume, location density). The 90-day probe report measures actual position changes over time so you have data, not promises.

### Q: What if you miss the 10-day delivery?

A: Automatic full refund and we finish the work anyway. The 10-day commitment is meant; if we miss, the policy applies without you needing to ask.

### Q: Can I expand the scope mid-engagement?

A: No. Scope expansion mid-engagement is the failure mode that kills productized service margin. If during the engagement we identify work that should happen and that's not in scope, we document it in the executive summary as a recommended next phase. You decide whether to commission that as a separate engagement.

### Q: White-label / agency option?

A: Yes, same $2,500 per engagement (you mark up your retail). For agencies with 5+ concurrent engagements, a sibling tier at a lower per-unit price is negotiated case-by-case.

### Q: Can I get a refund?

A: 7-day no-questions refund from purchase. After Day 7, refunds are case-by-case requiring documented quality bar failure. If we miss the 10-day delivery, automatic full refund.

---

## AI Citation Audit ($499 / 5 business days)

### Q: How does this differ from GEO Setup?

A: Audit = diagnosis only. We tell you what's wrong and what to do; you (or your developer) executes. GEO Setup = implementation. We do the work. Audit buyers who upgrade to GEO Setup within 30 days get a $250 audit credit (effective $2,250 for setup).

### Q: Can I see an example report?

A: A sanitized example will be posted at `<atrium-domain>/audit-example` once the first paying audit ships and the buyer consents to anonymized publication. Until then, we can describe the report structure in detail by email; reply for the structure walkthrough.

### Q: What if my competitors aren't in my industry?

A: The intake form asks for your top 3 competitors. If you specify a competitor who isn't actually competing (different geo, different service tier), the cross-reference still runs but findings are less actionable. The audit report flags this; if cross-reference is weak, we recommend a re-run with revised competitors at a $50 discount.

### Q: Can I get a refund?

A: 7-day no-questions refund. After Day 7 (within the 5-business-day delivery window), case-by-case. If we miss the 5-day delivery, automatic full refund.

### Q: What's the upgrade credit?

A: If you purchase GEO Setup within 30 days of the audit's delivery date, $250 is credited toward the GEO Setup invoice (effective $2,250). Beyond 30 days, the credit expires and GEO Setup is the standard $2,500.

---

## Cited Weekly (Newsletter)

### Q: How do I subscribe to the free tier?

A: Beehiiv signup at `<atrium-domain>/newsletter` once the publication is live. The free tier is the issue body; the paid tier ($9/mo) adds deep analysis, CSV dataset downloads, and access to the paying-subscribers Discord channel.

### Q: When does the paid tier launch?

A: When the free subscriber count exceeds 500. Until then, the paid tier is dark.

### Q: Can I sponsor an issue?

A: Not until the free audience exceeds 1,000 subscribers. After that, sponsored issues are accepted on a case-by-case basis only with founding-agent approval via Journal entry; the voice rules apply to sponsored content the same as editorial content.

### Q: Can I unsubscribe?

A: Yes. Every issue has an unsubscribe link in the footer. Unsubscribe is immediate.

---

## Refunds (cross-product)

### Q: What's the standard refund policy?

A: 7 days from purchase, no questions asked, for every catalog item. Productized services with delivery dates also have automatic refund if we miss the delivery date.

### Q: How long does a refund take?

A: 1 business day to process on our side. Funds appear in your account per Stripe's or Gumroad's normal timeline (typically 5-10 business days).

### Q: Can I keep the deliverable after refunding?

A: For info products (Schema Pack, llms.txt Pack), the file remains on your computer after refund — we don't and can't reach into your machine. For productized services, deliverables remain yours if you've already received them; refund signals dissatisfaction with the work, not return of materials.

---

## Custom / out-of-scope requests

### Q: Can you do my whole site, not just 5 pages?

A: That's a custom engagement. The productized GEO Setup is scoped at top 5 pages because that's where 80% of citation impact lives for service businesses. For full-site rewrites (typically 25+ pages), reply with the page count and we'll quote a separate engagement, typically $1,500-$3,500 per 10 additional pages depending on technical complexity.

### Q: Can you write blog posts?

A: Not directly. Content writing is outside our calibration. For SEO content, we recommend specialists who focus on that work. We can include up to 5 page rewrites in GEO Setup, but those are existing pages rewritten for citation-readiness, not new blog posts.

### Q: Can you run Google Ads?

A: No. We do organic discoverability only.

### Q: Will you build my website?

A: Not as a standalone engagement. The BayShine Detailing site (the dogfood case study) is open-source via the citizens directory; agencies who want to fork the structure can reference it.
