# Affiliate onboarding kit

What a new affiliate receives when they accept Atrium's program. Sent via email within 24 hours of their reply.

## Welcome email

### Subject

Atrium affiliate program — your signup link and assets

### Body

```
Hi {{AFFILIATE_FIRST_NAME}},

Welcome to Atrium's affiliate program. Below is everything you need to start.

Affiliate signup link (Gumroad):
{{GUMROAD_AFFILIATE_SIGNUP_URL}}

Once you complete signup, Gumroad provides a unique affiliate link per product. Use that link in your content. Sales attributed via the link generate 30% commission paid monthly via Gumroad's standard affiliate flow.

Catalog with commission breakdowns:

| Product | Price | Your commission per sale |
|---|---|---|
| Schema Pack v1 | $29 | $8.70 |
| Schema Pack v1.5 | $39 | $11.70 |
| llms.txt Pack v1 | $9 | $2.70 |
| Bundle (Schema + llms.txt) | $45 | $13.50 |
| GEO Playbook v0.5 | $79 | $23.70 |

Productized services (currently affiliate-eligible at standard 30% rate, subject to review at Atrium Rung 3 when service catalog matures):

| Service | Price | Your commission |
|---|---|---|
| AI Citation Audit | $499 | $149.70 |
| GEO Setup | $2,500 | $750.00 |

Suggested-copy snippets calibrated to Atrium's voice are attached. Adapt to your voice as needed but keep the constitutional rules: no invented metrics, no soft marketing, no exclamation marks in product mentions.

Voice rules for affiliate-authored Atrium content:

- No em-dashes (commas or en-dashes with spaces).
- No exclamation marks.
- No "we'd love," "feel free," "passionate about," "exciting."
- No invented sales counts, testimonials, or social proof.
- Numbers come with sources or are omitted.
- If you describe specific products, use the documented descriptions (in each product's LISTING.md, available on Gumroad's product page).

If you write in your own voice (em-dashes, exclamation marks, etc.) about Atrium products, that's fine in YOUR voice as the publisher — but quote Atrium's product descriptions verbatim or paraphrase them with the same restraint. Don't write "Atrium's amazing new schema pack!" — write "Atrium's Schema Pack v1.5."

Tracking and payouts:

- Gumroad's per-affiliate UTM tracking handles all attribution automatically.
- Payouts monthly on the 1st of each month for the prior month's sales.
- 60-day reversion window for refunded sales (refunded sale commissions are clawed back).
- Tax forms (W-9 for US affiliates, W-8 for international) handled in Gumroad's affiliate dashboard.

If you have questions, reply directly. Typical response time 24 business hours.

Atrium
```

---

## Suggested copy snippets

These are conservative drafts in Atrium's voice. Affiliates adapt to their own voice while keeping the voice rules above for Atrium product mentions specifically.

### Snippet 1 — Schema Pack v1.5 in a newsletter

```
For service business owners managing their own websites: Atrium just shipped Schema Pack v1.5 at $39. Nine verticals covered (mobile detailing, pressure washing, mobile car wash, HVAC, plumbing, roofing, electrical, pest control, landscaping) with validated JSON-LD plus vertical-specific FAQ schema. Drop in, fill in placeholders, ship.

Affiliate link: [your-affiliate-link]
```

### Snippet 2 — GEO Playbook v0.5 in a blog post

```
If you want the full methodology behind schema, llms.txt, citation-readiness, and 90-day AI engine probing for local service business sites, Atrium's GEO Playbook v0.5 at $79 covers 8 chapters plus 3 appendices. Includes the 90-day implementation calendar.

Affiliate link: [your-affiliate-link]
```

### Snippet 3 — Bundle in a product roundup

```
Atrium's Schema Pack v1.5 ($39) and llms.txt Pack v1 ($9) bundle at $45 saves $3. Together they cover the two highest-impact structural fixes for local service business AI search visibility: schema markup on each page and llms.txt at the root.

Affiliate link: [your-affiliate-link]
```

### Snippet 4 — AI Citation Audit in a productized-service-comparison piece

```
Atrium's AI Citation Audit at $499 / 5 business days is a productized diagnostic. They probe all 4 major engines (Perplexity, ChatGPT search, Claude, Gemini) against your buyer queries, cross-reference your top 3 competitors, and deliver a 15-page remediation list sorted by impact.

For the buyer who wants data before committing to full implementation, the audit is the right starting point.

Affiliate link: [your-affiliate-link]
```

### Snippet 5 — GEO Setup in an agency-targeted piece

```
For agencies adding AI search to client offerings, Atrium's GEO Setup at $2,500 / 10 days is the done-for-you productized service. Schema, llms.txt, internal linking, citation-readiness rewrites on top 5 pages, 90-day probe report. White-label option available.

Affiliate link: [your-affiliate-link]
```

---

## Tiering for high-performance affiliates

After 6 months of activity:

- **Bronze (1-10 sales total):** Standard 30% commission. Welcome email + onboarding kit.
- **Silver (11-50 sales total in a 6-month rolling window):** Standard 30% commission + featured-affiliate slot in Cited Weekly newsletter once per quarter (subject to editorial fit; no obligation if the affiliate's audience doesn't match a given issue's topic).
- **Gold (51+ sales total in a 6-month rolling window):** 35% commission rate (5pp bonus) + featured-affiliate slot in Cited Weekly issues OR Atrium content site once per month + direct line to Constantine for product feedback and roadmap input.

Tier promotions happen automatically at the threshold; no application needed. Tier demotions if 6-month volume drops below threshold for 3 consecutive months.

At Atrium Rung 3+, additional perks at Gold tier: co-authored case study placement, named promotion in Atrium's content site, early access to new products at affiliate pricing.

## What Atrium provides on top of the standard kit

- **Monthly performance digest:** sales attributed to each affiliate, refund-clawback amounts, commission paid. Sent on the 5th of each month.
- **Updated copy snippets:** when new products launch (Schema Pack v2, future products), affiliates receive the new snippets within 24 hours of public launch.
- **Quarterly affiliate roundtable** (at Rung 3+): once per quarter, all active affiliates invited to an async or sync session for feedback on the catalog, product roadmap, and program mechanics.

## Affiliate tracking dashboard

Available within the Gumroad affiliate portal. Affiliates see:

- Sales attributed.
- Commission earned (paid + pending).
- Refund clawbacks.
- Click-through rates per affiliate link.

Atrium's internal tracking (via `library/decisions.jsonl` under `affiliate-recruiter-specialist` lineage):

- Per-affiliate sales, refund rate, customer LTV (sales × average product price × repeat rate).
- Per-variant conversion rate at the funnel level.
- Affiliate quality score (refund rate, customer satisfaction, repeat purchase rate of referred buyers).

## Compliance reminders for affiliates

- FTC disclosure: required for US affiliates promoting Atrium products. Standard disclosure language: "This post contains affiliate links. If you purchase through these links, I receive a commission at no additional cost to you."
- GDPR / privacy: affiliate links use Gumroad's tracking; no separate Atrium tracking imposed on affiliates' audiences.
- Voice rule compliance: when in doubt, link the product without elaborate description. The product's Gumroad page does the selling.
