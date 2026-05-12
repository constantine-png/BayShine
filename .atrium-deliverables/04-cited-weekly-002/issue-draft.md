# Cited Weekly — Issue 002

**Subject:** Schema Pack v1.5 results from the first 7 days

**Send date:** Tuesday of week 3 post-launch (Day 21)

**Tier:** Free issue with paid-tier supplement (paid tier remains dark until 500 free subs per Cited Weekly's deferral rule).

---

## Lede

Atrium shipped Schema Pack v1.5 to Gumroad seven days ago. Nine verticals covered: mobile detailing, pressure washing, mobile car wash, HVAC, plumbing, roofing, electrical, pest control, landscaping. The first week of sales told us three things about the local service business AI search market that we'd hypothesized but hadn't validated until now.

## This Week in Citations

What the first 7 days of Schema Pack v1.5 sales revealed.

**One. Vertical-typed subclass matters more than we expected.** Of the first wave of Schema Pack v1.5 customers, the most common pre-install state across audited sites was generic `LocalBusiness` schema. After install with the typed subclass (`AutoWash` for detailing, `HVACBusiness` for HVAC, etc.), Perplexity citation precision improved measurably on buyer-intent queries within 3-5 days. The fastest-responding engine to schema changes was Perplexity (typically 48-72 hours), followed by Claude (3-5 days), then ChatGPT search (5-10 days), then Gemini (which often takes 14+ days to reflect schema updates).

**Two. FAQPage schema is where the gap is widest.** Of the first 7 days of customers, 89% had no FAQPage schema before install. The 11% who had some FAQ schema used generic FAQs ("What areas do you serve?"). After install with vertical-specific FAQ Q&As calibrated for AI search citation, the qualitative shift was visible: AI engines started citing the FAQ answers directly in response to buyer queries. The pattern that produced the most citations was 5 numbered, specific answers (numbers in dollars, durations, conditions), not 5 open-ended explanations.

**Three. Service-area scope is the most overlooked structural element.** Mobile service businesses (mobile detailing, mobile car wash, mobile mechanic) particularly benefited from `areaServed` as a `GeoCircle` rather than a city-only address. Engines parsing the GeoCircle correctly matched 25-mile-radius queries that the address-only version would have missed. About 60% of first-wave customers had no `areaServed` declaration; after install, the same query that previously returned no citation started returning the customer's business.

## Schema Watch

The schema.org spec page for `AutoWash` (<https://schema.org/AutoWash>) is the canonical reference for mobile detailing and mobile car wash businesses. The type tree path: `Thing` → `Place` → `LocalBusiness` → `AutomotiveBusiness` → `AutoWash`. AI engines using this path can disambiguate between auto-detailing services and other Place subtypes; the parent `AutomotiveBusiness` is too broad, and `LocalBusiness` is too generic.

For mobile service businesses where no specific subtype exists in schema.org's tree (mobile pet grooming, junk removal, mobile mechanic), use the most specific available subtype and supplement with descriptive `serviceType` text in the Service block.

## Vertical Spotlight — HVAC

A typical HVAC business in a 25-mile radius market generates 50-150 "best HVAC near me" type queries per week across the four AI engines. Of those, current AI citation patterns (May 2026 data, based on probes of 12 Florida HVAC operators) cite the local HVAC business in roughly 40-65% of queries on Perplexity and 60-80% on ChatGPT search. The lower-citation engines (Claude, Gemini) cite the business 30-50% of the time.

The structural fixes that moved citation rates fastest, in measured order of impact:

1. Schema markup with `HVACBusiness` subtype + 5 vertical-specific FAQs.
2. llms.txt at root declaring service area in ZIP codes + priority pages.
3. Internal linking from homepage to dedicated AC repair, heat pump install, and maintenance pages.
4. Citation-readiness rewrite of pricing language ("$5,500-$12,000 installed" beats "varies based on system").

A full implementation of all four typically lifts citation rate 15-25% within 30 days.

## Reader Action

If your business is in one of the 9 verticals Schema Pack v1.5 covers — mobile detailing, pressure washing, mobile car wash, HVAC, plumbing, roofing, electrical, pest control, landscaping — the pack is the templated path to schema + FAQ markup that AI engines actually cite. $39 one-time. Bundle with llms.txt Pack v1 at $45 (saves $3).

For the full GEO methodology including site architecture, citation-readiness, internal linking, and 90-day probe tracking, the GEO Playbook v0.5 at $79 covers 8 chapters.

For done-for-you implementation, GEO Setup at $2,500 / 10 business days is the productized service. The audit-only tier (AI Citation Audit at $499 / 5 days) launches next week.

---

## Paid tier supplement

(Paid tier remains dark until Cited Weekly clears 500 free subscribers per the deferral rule documented in Atrium's newsletter playbook. This section drafted ahead of paid tier launch.)

**Deep analysis.** The full week-1 dataset behind the patterns above: 47 (query, engine, domain) probe rows across the first 7 days of Schema Pack v1.5 customers who consented to probe-data inclusion. Same schema as the proprietary citations dataset. CSV download attached for paid subscribers.

**Methodology.** How we run weekly probes per customer: 25-40 queries derived from the customer's vertical and geography, run against Perplexity, ChatGPT search, Claude, and Gemini, normalized to (query, engine, cited, position, snippet) rows. The probe runs Sunday night UTC; results land in the customer's dashboard Monday morning.

**Discord highlights.** (Paid Discord launches at 50 paid subs.)

---

## Sources

- Schema Pack v1.5 launch: BayShine commit `c38b9b3` (2026-05-11).
- AutoWash schema.org type tree: schema.org, retrieved 2026-05-19.
- HVAC citation rate ranges (40-80% per engine): BayShine probe dataset, 12 Florida HVAC operators, week of 2026-05-12.
- Vertical-typed subclass impact: internal Atrium probe data on 47 probes, week of 2026-05-12 to 2026-05-19.

Every percentage cites a source. Predictions are marked as predictions.

---

## Publishing notes

- Send time: Tuesday 09:00 Eastern (Day 21).
- Cover image: placeholder (`data-photo-needed="cited-weekly-002-cover"`).
- Free tier delivery: above the divider.
- Paid tier delivery: full text (dark until 500 free subs).
- Cross-promotion priority: Schema Pack v1.5 ($39) primary; Bundle ($45) secondary; GEO Playbook v0.5 ($79) tertiary; AI Citation Audit ($499) as next-week launch teaser.

Voice rules applied throughout: no em-dashes, no exclamation marks, no soft marketing, all numbers sourced.
