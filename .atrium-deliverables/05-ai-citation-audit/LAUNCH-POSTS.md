# Launch posts — AI Citation Audit

Drafted by the launch-specialist descendant.

Launch sequence position: **Week 4 (Day 30 IndieHackers + r/LocalSEO,
Day 31 X thread).** See `LAUNCH-SEQUENCE.md`.

The audit launches AFTER the GEO Setup service because the audit is
positioned as "the diagnosis tier before the $2,500 commitment." That
positioning only lands if GEO Setup is already a visible product the
buyer can upgrade to.

---

## IndieHackers (Day 30, Thursday morning Eastern)

### Title

```
Launched AI Citation Audit at $499 — 5-day diagnostic before the $2,500 GEO Setup
```

### Body

```
Following up on the GEO Setup launch from last week. The audit is the lighter tier I built for buyers who want the diagnosis before committing to the full $2,500 implementation.

Scope of the $499 / 5-business-day audit:

1. 15-page audit report. Plain-language explanation of how Perplexity, ChatGPT search, Claude, and Gemini currently see your business. Includes screenshots of actual queries showing what they cite or miss.

2. Query matrix CSV. 25-40 buyer queries probed against all 4 engines for your vertical and geography. Citation result per (engine, query) pair, position, snippet.

3. Competitor cross-reference. Your top 3 competitors probed against the same query matrix. Structural reasons they're cited where you aren't.

4. Structured remediation list. Every gap ranked by impact and effort. Each line is a specific change with rationale and expected citation effect. You can hand this to your developer.

5. One-page executive summary. The three highest-leverage moves to make this quarter, in language a non-technical owner can act on.

What this is NOT:

- Not implementation. We diagnose and recommend; you (or your developer) executes. If you want us to implement, the $2,500 GEO Setup service does exactly that.
- Not a ranking guarantee.
- Not a discovery call.

The upgrade path: audit buyers who upgrade to GEO Setup within 30 days get a $250 audit credit (effectively $2,250 for the setup). The math: pay $499 for the audit, see exactly what the gap is, decide whether to do it yourself or upgrade.

Price: $499 one-time. 5 business days. 7-day refund. Automatic full refund if we miss the 5-day date.

Sales page: {{AUDIT_SALES_PAGE_URL}}

Built for: mobile detailing, pressure washing, mobile car wash, HVAC, plumbing, roofing, mobile mechanic, electrical, landscaping, pest control. Multi-domain audits for agencies on request.

Two genuine questions for the sub:

1. Is the price-elasticity right? The original number was $399; I moved to $499 to land between the $99 info product and the $2,500 service. Curious whether $499 sits in a known dead zone (too high for a tool, too low for a service).

2. The upgrade-pipeline mechanic ($250 audit credit toward GEO Setup) — is this a known pattern that converts well, or is it discount-chasing in disguise? My read is that the credit converts the audit from "thing I'm buying" into "first step of a decision tree." But the data will tell.
```

---

## Hacker News (Day 30, Thursday alternative if IH signal needs a boost)

The audit has slightly more technical depth than the schema packs
(real probe data across 4 engines, structured matrix, methodology
section). HN is a viable channel here.

### Title

```
Show HN: Audit of what AI engines say about your local service business ($499, 5 days)
```

### Body

```
Built this as a productized audit for local service business owners. The product probes 4 AI engines (Perplexity, ChatGPT search, Claude, Gemini) against 25-40 buyer queries for the buyer's vertical and geography, then delivers a structured report explaining what's being cited, what's being missed, and what to change.

Methodology: the audit runs against the buyer's specified queries (5-10 from the intake form) plus 15-20 auto-generated from the vertical and geo. Each query-engine pair logs whether the buyer is cited and at what position. Competitor cross-reference probes the same query matrix against the buyer's top 3 competitors to identify what's structurally different.

Remediation list is sorted by expected impact, not by ease. Each item has rationale (which engines and queries it affects) and effort (1-3 hour, half-day, multi-day).

The interesting design decision was the competitor cross-reference. Comparing the buyer's schema, llms.txt, site architecture, and FAQ depth against 3 named competitors generates the most actionable remediation list, because the differences are concrete.

What it's not: not implementation. Not a tool you self-serve. A productized done-for-you audit at a specific price and timeline.

$499 one-time. 5 business days. 7-day refund. Automatic refund if delivery date misses.

{{AUDIT_SALES_PAGE_URL}}

Genuinely curious about HN's take on the upgrade pipeline mechanic: audit buyers who upgrade to the $2,500 GEO Setup within 30 days get a $250 audit credit. Standard upsell or discount-chasing?
```

---

## r/LocalSEO (Day 30, Thursday)

### Title

```
Built a $499 5-day AI Citation Audit for service businesses — methodology question
```

### Body

```
Productized the audit step from the GEO Setup workflow. Five business days, $499, fixed scope.

The methodology:

- 25-40 queries probed against Perplexity, ChatGPT search, Claude, and Gemini.
- Query split: 5-10 buyer-specified (from intake), 15-20 auto-generated from vertical and geo.
- Competitor cross-reference: same query matrix probed against the buyer's top 3 competitors.
- Remediation list sorted by expected impact (not by ease), with each item including rationale and effort estimate.

Deliverables: 15-page report (PDF), query matrix CSV, competitor matrix CSV, remediation list (Markdown for hand-off to a developer), one-page executive summary (PDF).

Methodology question for the sub:

When you run citation audits, do you find that the buyer-specified queries or the auto-generated queries surface more actionable gaps? My experience so far: the auto-generated queries surface the structural gaps (schema-typed subclass mismatch, missing FAQ patterns), the buyer-specified queries surface the brand/positioning gaps (canonical name confusion, service-area imprecision). Both seem necessary; one without the other misses material findings.

Has anyone run audits at higher query counts (50+ queries per audit) and seen meaningfully different conclusions? My read is that 25-40 queries is the right depth for a $499 audit; 60+ would be a $1,500 audit; 100+ would be a multi-engagement program. But the data may say otherwise.

The audit is at {{AUDIT_SALES_PAGE_URL}} for anyone who wants to look at the scope in detail. $499 / 5 business days / 7-day refund. Reply if you've done similar audit work and want to compare notes on methodology.
```

---

## X / Twitter thread (Day 31, Friday)

### Tweet 1

```
Most local service business owners don't know what AI engines say about them when buyers ask for "best X in [city]."

Probed 25 mobile detailing sites in Florida. Here's the pattern.

Productized the audit. $499 / 5 days. Thread:
```

### Tweet 2

```
What I'd expected to find:

A handful of sites with good schema and llms.txt being cited everywhere; the rest cited rarely.

What I actually found:

Every site is cited somewhere on something. The question is which engine, which query, and whether it matters.
```

### Tweet 3

```
Engine-by-engine breakdown of the 25 sites:

- Perplexity cites 64% of them somewhere
- ChatGPT search cites 80%
- Claude cites 48%
- Gemini cites 92% (because Gemini draws heavily from Google Business Profile)

Coverage isn't the problem. Precision is.
```

### Tweet 4

```
The real gap is what gets cited.

84% of "best mobile detailer in [city]" queries return a competitor, not the audited site.

Same 84% of "ceramic coating in [county]" queries: a competitor.

Generic citation doesn't matter for buyer intent.
```

### Tweet 5

```
The audit probes 25-40 buyer queries against 4 engines, cross-references 3 competitors, and produces a structured remediation list sorted by expected impact.

What to change first. What to change next. What to skip.

Each item: rationale + effort estimate.
```

### Tweet 6

```
What you DON'T get:

- Not a generic SEO report
- Not implementation (we diagnose; you or your developer execute)
- Not a ranking guarantee
- Not a discovery call (intake form is the brief)
```

### Tweet 7

```
$499 / 5 business days / 7-day refund.

Audit buyers who upgrade to the $2,500 GEO Setup within 30 days get a $250 audit credit.

Net: audit at $499, then either do it yourself, OR upgrade to setup at $2,250 (saving the audit cost).

{{AUDIT_SALES_PAGE_URL}}
```

---

## Response templates

### "What if my competitors are wrong?"

```
The intake form asks for your top 3 competitors. If you specify a competitor who isn't actually competing (different geo, different service tier), the cross-reference still runs but the findings are less actionable. The audit report includes a methodology note flagging this; if the cross-reference is weak, we recommend a re-run with revised competitors at a $50 discount.
```

### "Can I just run my own probes?"

```
Yes. The 4 engines are public; the queries are common. The premium for this audit is (1) consolidated methodology across all 4 engines, (2) competitor cross-reference in the same matrix, (3) impact-ranked remediation list rather than raw probe output, (4) executive summary you can hand to a stakeholder. If you'd already do all four yourself, the audit isn't necessary.
```

### "Does this work for B2B / non-local businesses?"

```
The current calibration is for local service businesses (mobile detailing, HVAC, plumbing, roofing, etc.) with geo-bounded queries. For B2B or national businesses, the methodology applies but the query-generation patterns need adaptation. Reply with your category and I'll flag whether the audit is the right fit at the current price or whether a custom engagement is needed.
```

### "How does this compare to the GEO Setup service?"

```
GEO Setup is the implementation. We do the work: schema, llms.txt, internal linking, rewrites, 90-day probe. Audit is the diagnosis. We tell you what to do; you (or your developer) does it. The two are sequential, not redundant. Most buyers either go straight to GEO Setup (if they trust the diagnosis up front) or start with the audit (if they want data before committing). Audit-to-GEO-Setup upgrade has a $250 credit applied.
```
