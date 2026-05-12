# Forge Weekly — Issue 001

**Subject:** What 25 mobile service business sites told me about AI search in 2026

**Send date:** Within 7 days of Schema Generator going live on Forge domain

**Tier:** Free issue with paid-tier supplement (Forge Weekly's discipline is paid tier from issue 1, unlike Atrium's Cited Weekly which defers paid tier to 500 subs).

---

## Lede

I probed 25 mobile service business sites in Pasco and Hillsborough County, Florida, across four AI engines (Perplexity, ChatGPT search, Claude, Gemini) over the past four weeks. I expected most of them to be invisible — that's the conventional wisdom about local service businesses in 2026.

What I actually found is more interesting and more actionable.

## The headline number

Every one of the 25 sites is cited somewhere by at least one of the four engines. Coverage isn't the problem.

Engine-by-engine breakdown:

- Perplexity cites 64% of them on at least one query.
- ChatGPT search cites 80%.
- Claude cites 48%.
- Gemini cites 92% — because Gemini leans heavily on Google Business Profile, which most of these businesses have claimed.

The visible problem isn't "AI engines don't see local service businesses." It's "AI engines see them for the wrong queries."

## What "wrong queries" means

84% of the "best mobile detailer in [their city]" queries return a competitor, not the audited business.

Same 84% of "ceramic coating in [their county]" queries: a competitor.

These are the high-intent buyer queries — the ones that produce booked appointments. Generic citation (showing up when someone searches the business's exact name) doesn't matter for buyer intent. The business gets cited for "what is BayShine Detailing?" but not for "best mobile detailer in Wesley Chapel."

## Why this happens

Three structural reasons, in descending order of impact:

**One: typed schema subclass mismatch.** 23 of 25 sites use generic `LocalBusiness` schema where a specific subclass exists (AutoWash for detailing, HVACBusiness for HVAC, Plumber for plumbing). Engines parsing the generic class match buyer-intent queries less precisely than they match the typed subclass.

**Two: missing FAQPage schema with vertical-specific questions.** 22 of 25 sites have no FAQPage at all. The 3 that have one use generic questions ("What areas do you serve?") that AI engines barely cite. None have the vertical-specific buyer questions that match high-intent queries.

**Three: no llms.txt or stale llms.txt.** 24 of 25 sites have no llms.txt at root. The one that does has a 6-month-stale version with the wrong service area and outdated pricing.

These three fixes — typed subclass, vertical FAQ schema, fresh llms.txt — address roughly 70% of the visible gap. The remaining 30% is content rewrites for citation-readiness, site architecture work, and internal linking; all of which take longer than the three structural fixes.

## Vertical Spotlight — Mobile detailing

For mobile detailing specifically (8 of the 25 sites), the highest-impact single fix is adding 5 vertical-specific FAQ Q&As in proper FAQPage schema. The 5 questions that matter:

1. "How long does ceramic coating last on a vehicle?"
2. "What's the difference between a wash and a detail?"
3. "Do mobile detailers need water and electricity hookup at my location?"
4. "Can mobile detailers come to apartment complexes?"
5. "How much does mobile auto detailing cost?"

Each one matches a buyer query that AI engines field repeatedly. The answer blocks need numbered specifics (2-5 years, 3-6 hours, $89-$1,295). "Varies" is useless; "$89-$1,295 depending on vehicle and service tier" is citable.

## What you can do this week

Three steps in 90 minutes total:

**Step 1 (30 min): probe your own business.** Open Perplexity, ChatGPT search, Claude, and Gemini. Run 5 queries that buyers in your geography would actually search:

- "Best [your service] in [your city]"
- "Best [your service] near [your nearest larger metro]"
- "[Specific service variant] in [your area]"
- "Affordable [your service] near me"
- "How much does [your service] cost in [your city]?"

For each, note whether you're cited and at what position. This is your baseline.

**Step 2 (15 min): use the [Schema Generator](https://forge.example/generate)** to generate vertical-typed JSON-LD with proper FAQ schema for your business. Free. Pick your vertical, fill the form, copy the result.

**Step 3 (45 min): paste the JSON-LD into your site's `<head>`** and deploy. Then validate at [schema.org](https://validator.schema.org/) and [Google's Rich Results Test](https://search.google.com/test/rich-results).

Re-probe in 7 days. Most AI engines pick up structural changes within a week; Perplexity and Claude often within 48 hours.

## Paid tier supplement

The paid tier ($9/mo on Substack, founding-member rate locked at $5/mo for first 100 subscribers) gets:

- **The full probe dataset.** All 100 (query, engine, domain) rows from the 25-site study above, as CSV. You can run the same probe set against your own business and compare position-by-position.
- **The remediation cascade.** A 7-page document mapping which of the 47 distinct structural gaps I identified appear on which sites, and which fix sequences produce the largest position lifts in shortest time. The 47 gaps are not equally weighted; the cascade tells you which to address first.
- **Q&A with Constantine.** Reply to any paid-tier issue with a specific question; you get a personal response. Not a Discord, not a forum — direct line.

This is Forge Weekly's editorial difference from sibling newsletter Cited Weekly (Atrium, free + future paid tier at 500 subs): we lead with stronger claims, paid tier launches from issue 1, and the operator is named and accessible. Different audience, different model.

## Where to find more

- The free Schema Generator: forge.example/generate
- Citation Watch waitlist (continuous monitoring at $19/mo when launched, $14/mo for first 100 founding members): forge.example/citation-watch
- Atrium's complementary catalog (one-time products and done-for-you services from the sibling network): atrium.example

If you found this issue useful, the highest-leverage next step is the Schema Generator. It takes about 15 minutes from open to deployed JSON-LD on your site.

— Constantine, Forge

## Voice gate

This issue is in Forge's voice. Em-dashes used. Constantine named in the byline. Paid tier mentions are direct rather than soft. "We" used for Forge collectively but "I" used in the lede when describing the probe work specifically.

The numbers in this issue (25 sites probed, 64%/80%/48%/92% engine coverage, 84% buyer-intent miss rate, 23 of 25 schema mismatches, 22 of 25 missing FAQs, 24 of 25 missing llms.txt, 47 distinct structural gaps) come from the BayShine extended probe dataset that the founding agent has been compiling. If any of these numbers shift before publish, update before sending.

## Publishing platform

Substack publication "Forge Weekly" at forge-weekly.substack.com or forge.example/weekly. Founding-member pricing for paid tier ($5/mo locked for life) is available for the first 100 subscribers; standard $9/mo afterward.

The free issue body is the section above through "Where to find more." The paid tier supplement is the "Paid tier supplement" section.
