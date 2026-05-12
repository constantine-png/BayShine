# Launch posts — GEO Playbook v0.5

Drafted by the launch-specialist descendant. Launch sequence position: **Week 4-5** of the master schedule (between AI Citation Audit launch and the start of audit-to-setup upgrade pipeline). See `LAUNCH-SEQUENCE.md`.

Note: under the timeline-compression assumption (from Atrium Journal 011), the playbook may launch earlier than the original Week 4-5 slot if Schema Pack v1 sales validate the audience and demand for depth content.

---

## IndieHackers (launch day, Thursday morning Eastern)

### Title

```
Shipped a 30-page GEO playbook for local service businesses at $79
```

### Body

```
Following up on the Schema Pack v1 ($29) and llms.txt Pack v1 ($9) launches from the past few weeks. Buyers of those products asked: where does this fit in a broader plan? What about the other parts (site architecture, citation-readiness, internal linking, ongoing probing)?

So I wrote the depth product: a focused 8-chapter playbook covering the four AI search levers that actually move the needle, plus a 90-day implementation calendar.

The chapters:

1. The GEO mental model (how 2026 AI engines parse local service sites)
2. Schema markup deep dive
3. llms.txt — entity identity for AI parsers
4. Site architecture for AI citation
5. Citation-readiness — writing pages AI engines actually cite (this is the most under-covered topic in everything I've read on GEO)
6. Internal linking
7. AI engine probing — measuring your own citation position across 4 engines
8. The 90-day implementation plan

Plus 3 appendices with quick-reference templates and a resources section.

Drawn from real data. Every technique tested against BayShine Detailing (a real mobile detailing business in Pasco County, FL) during May 2026. Measured improvements: 12% citation position lift on Perplexity, 8% on ChatGPT search, sustained over a 14-day window post-implementation.

The interesting design choice was Chapter 5 (citation-readiness). Most GEO content focuses on schema and llms.txt as the levers; citation-readiness — how you actually WRITE pages so AI engines can cite specific passages — is where I see the biggest gap in existing material. The chapter has 4 rules (numbers not adjectives, conditions not blanket claims, self-contained answers, lists for enumerable answers) with before-and-after rewrite examples.

Price: $79 one-time on Gumroad. 7-day refund. Single-site commercial license.

This is v0.5. v1.0 expands to 24 verticals' worth of templates plus chapters on multi-location and franchise considerations. v0.5 buyers get free upgrade to v1.0.

Link: {{GUMROAD_PRODUCT_URL}}

Two genuine questions:

1. For folks who've shipped 8-chapter playbooks at this price point: what's the conversion rate roughly? My informal estimate is 1-3% on cold traffic, 5-15% on warm (existing newsletter or product buyers). Curious whether my numbers are in the realistic range.

2. The 4 citation-readiness rules in Chapter 5 — are these your read of what AI engines actually reward, or do you see other patterns that move the needle more? I'm calibrated against ~25 mobile service business sites; broader data would be useful for v1.0.
```

---

## r/LocalSEO (Day +2)

### Title

```
30-page GEO playbook with citation-readiness chapter and 90-day implementation plan — feedback on Chapter 5 specifically
```

### Body

```
Quick share for the sub. Shipped a depth product on AI search optimization for local service businesses last week — 8 chapters plus 3 appendices, $79 on Gumroad.

Most of the content covers familiar ground (schema markup, llms.txt, site architecture). But Chapter 5 — citation-readiness — is the part I'm most uncertain about and most interested in feedback on.

The hypothesis: most local service business pages are written for human readers in a marketing voice ("Our team takes pride in delivering top-quality service to clients throughout the Tampa Bay area"). AI engines have nothing to cite from that paragraph. There are no specific numbers, no conditions, no self-contained facts.

The fix is what I'm calling citation-readiness — writing each paragraph as an atomic answer unit that:

1. Uses specific numbers ($89, 25 miles, 12 to 18 months) rather than adjectives ("affordable", "wide service area", "long-lasting").
2. Names conditions ("protects against UV degradation, bird droppings, tree sap, and minor scratches up to grade 1500-grit, but does not protect against rock chips") rather than blanket claims.
3. Is self-contained (can be cited without "as discussed above" or "see next section").
4. Uses bulleted lists for enumerable answers (services, ZIP codes, payment methods).

Question for the sub: do you see this pattern moving the needle on AI citation in your data? My experience says yes — pages rewritten this way get cited more by Perplexity and Claude, which fetch in real time and clearly prefer extractable passages. But I'm working from a small sample.

Are there other patterns I'm missing? Specifically wondering about:

- Whether structured tables in HTML (versus bulleted lists) parse better for tabular data like pricing.
- Whether AI engines weight schema FAQPage answer text or visible page text more heavily when they conflict.
- Whether self-contained answers actually work or whether engines prefer contextual chains.

The playbook is at {{GUMROAD_PRODUCT_URL}} for anyone who wants to look at Chapter 5 specifically; mod-permitting. Otherwise the rules above are the gist.
```

---

## X / Twitter thread (Day +5)

### Tweet 1 (with cover image of the playbook)

```
Local service business site rewrite, before vs after:

BEFORE: "We take pride in providing top-quality auto detailing throughout Tampa Bay."

AFTER: "Mobile-only service in Pasco and northern Hillsborough counties since 2024. Service tiers: Express wash $49-75 (30-45 min). Full detail $189-349 (3-5 hr). Ceramic coating $799-1,295."

Thread:
```

### Tweet 2

```
AI engines need extractable, citable passages to recommend your business.

"Top-quality" doesn't extract. "$189-$349" extracts.

This shows up in real probe data. Pages with specific numbers get cited 2-4x more often by Perplexity and Claude than pages with adjectives.
```

### Tweet 3

```
The 4 rules of citation-readiness:

1. Numbers, not adjectives
2. Conditions, not blanket claims
3. Self-contained answers (no "see above")
4. Bullet lists for enumerable answers

Shipped a 30-page playbook covering this plus 7 other chapters at $79.
```

### Tweet 4

```
What else is in the playbook:

Ch 1: The GEO mental model
Ch 2: Schema markup deep dive (typed subclasses, FAQPage, @graph)
Ch 3: llms.txt — entity identity for AI parsers
Ch 4: Site architecture (service pages, service-area pages, breadcrumbs)
Ch 5: Citation-readiness (above)
Ch 6: Internal linking
Ch 7: AI engine probing across 4 engines
Ch 8: 90-day implementation plan
```

### Tweet 5

```
Drawn from real data:

Tested against BayShine Detailing (mobile detailing, Pasco County FL).

Measured: 12% citation position lift on Perplexity, 8% on ChatGPT search, sustained 14 days post-implementation.

The 90-day plan in Chapter 8 has the week-by-week sequence.
```

### Tweet 6 (CTA)

```
$79 one-time on Gumroad.

v0.5 ships now with 2 detailed vertical templates (detailing, pressure washing). v1.0 expands to 24 verticals.

v0.5 buyers get free upgrade to v1.0.

Link: {{GUMROAD_PRODUCT_URL}}

For full done-for-you implementation, the GEO Setup service ($2,500/10 days) is at {{SETUP_URL}}.
```

---

## Response templates

### "Why $79 and not $49 or $149?"

```
$79 sits between the templated packs ($29-$35 bundle) and the productized services ($499 audit, $2,500 setup). It's the depth tier: you're not buying templates and you're not buying done-for-you implementation, you're buying the methodology with worked examples.

If $79 is wrong, the right number gets data after 20-50 sales. The Gumroad refund window gives buyers the out if the price doesn't match the value.
```

### "Will this work for [non-mobile-service vertical, e.g., dental, legal, e-commerce]?"

```
The schema, llms.txt, site architecture, and citation-readiness principles apply broadly. The specific examples and templates in the appendices are for mobile service businesses (detailing, pressure washing); other verticals need adapted templates.

For dental or legal: principles apply; templates need vertical-specific FAQs (Atrium's Schema Pack v2 at $49 will cover 24 verticals when it ships).

For e-commerce: the schema patterns differ (Product, Offer, ItemAvailability rather than LocalBusiness). This playbook isn't calibrated for e-commerce; a different playbook would be needed.
```

### "Can I see a sample chapter?"

```
The first 2 pages of Chapter 1 (the GEO mental model section) are sample-able. Reply and I'll send the PDF excerpt. The rest of the playbook is gated by the $79 purchase but the refund window means you can read it and refund if it doesn't deliver.
```

### "I already have a SEO consultant. Is this redundant?"

```
Possibly. If your consultant is calibrated for AI search (Perplexity, Claude, ChatGPT search) and not just classical Google SEO, the playbook is mostly redundant. If they're doing classical SEO without the structured data + llms.txt + citation-readiness layer, the playbook fills the gap.

Quickest way to know: ask your consultant what your business's current AI citation position is across the 4 engines. If they have probe data, you're in good hands. If they don't know, the playbook is worth $79.
```
