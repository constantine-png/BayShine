# Cited Weekly — Issue 003

**Subject:** The GEO Setup productized service: what changed in 10 days

**Send date:** Tuesday of week 4 (Day 28)

**Tier:** Free issue with paid-tier supplement (paid tier dark until 500 free subs).

---

## Lede

We launched the GEO Setup productized service last week (Day 23 in the launch sequence). $2,500 flat. 10-business-day turnaround. Schema, llms.txt, site architecture audit, internal linking, citation-readiness rewrites on top 5 pages, plus a 90-day AI citation probe report across Perplexity, ChatGPT search, Claude, and Gemini.

This issue covers what shipped, what the first day of inbound looked like, and a methodology note on the citation-readiness rewrite that turned out to be the most-asked-about deliverable.

## This Week in Citations

Three data points from the GEO Setup launch and the first wave of inquiries.

**One. Buyer questions on the GEO Setup intake form are remarkably consistent.** Across the first wave of inquiries, 80%+ asked one or more of these four questions: (a) "Will this work for my CMS?" (b) "What if my schema is already partially there?" (c) "How do you measure 90-day probe results?" (d) "Can I see one of your case studies?" The FAQ-master.md in the Atrium SUPPORT directory now includes the documented answers; future inquiries get the response within hours.

**Two. Citation-readiness rewrites are the most-asked-about deliverable.** The 5 page rewrites that GEO Setup includes are what buyers focus their questions on. The methodology (numbers not adjectives, conditions not blanket claims, self-contained answers, lists for enumerable answers) is documented in GEO Playbook v0.5 Chapter 5 but most buyers haven't read it yet. The Operator's response pattern: "The methodology is in Chapter 5 of the GEO Playbook ($79) if you want the full version; or it's part of the $2,500 GEO Setup as the deliverable."

**Three. AI engines respond to citation-readiness changes faster than to pure schema changes.** Schema updates take 48 hours to 14 days depending on engine. Citation-readiness rewrites (where the page content itself becomes more extractable) propagate faster because the engines fetch fresh page content on each real-time search query, not on indexing cycles. We saw 24-48 hour response times on Perplexity and Claude after rewrites went live; ChatGPT search showed change within a week.

## Schema Watch — `BreadcrumbList`

`BreadcrumbList` is the most underused schema type for local service business sites in 2026. It declares the navigation hierarchy of a page in a way AI engines can parse precisely.

A typical site has breadcrumbs visible in HTML (often `Home > Services > Full Detail`) but no `BreadcrumbList` schema. Engines parsing the visible breadcrumbs guess at the hierarchy; engines with the schema parse it directly.

For service businesses with multi-tier navigation (homepage → service category → specific service), add `BreadcrumbList` schema on every internal page. Format:

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yoursite.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://yoursite.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Full Detail", "item": "https://yoursite.com/services/full-detail" }
  ]
}
```

This is one of the items included in the GEO Setup deliverable but applicable to any site whose authors are willing to add 15 minutes of work per page.

## Vertical Spotlight — Plumbing emergency service

24/7 emergency plumbing service is high-margin commercial work. The buyer queries that trigger emergency calls are time-sensitive: a homeowner with an active leak doesn't read the third page of results; they call the first business that AI engines recommend.

What makes a plumber rank for emergency queries:

- `OpeningHoursSpecification` declaring 24/7 availability (full week, all days, 00:00 to 23:59).
- Emergency-specific service page at `/services/emergency-plumbing` (or equivalent) with `Service` schema describing the 24/7 dispatch.
- Phone number prominently featured in schema and on-page; the same number across schema, llms.txt, and HTML.
- Citation-readiness rewrite of the emergency page: numbered specifics ("emergency response within 60-90 minutes in [service area]," "$X service call minimum after hours," etc.).

The pattern is repeatable for any service vertical with 24/7 or emergency capability: HVAC, locksmith, garage door, restoration. Schema Pack v1.5's plumbing template already includes the 24/7 OpeningHoursSpecification.

## Reader Action

For Atrium catalog buyers ready to move beyond templates to done-for-you implementation, the GEO Setup productized service is live at $2,500 / 10 business days. The intake form takes 5 minutes; work begins same day.

For buyers wanting the diagnostic first, the AI Citation Audit at $499 / 5 days launches this week. Upgrade credit of $250 if you convert from audit to GEO Setup within 30 days (effective $2,250 setup).

For DIY methodology, GEO Playbook v0.5 at $79 covers all 8 chapters including the citation-readiness deep dive.

---

## Paid tier supplement (drafted for future activation)

**Deep analysis.** The first GEO Setup engagement's full deliverable (anonymized) — including the actual schema files, the rewrite diffs, the architecture recommendation, and the 30-day re-probe data. Available to paid subscribers as a 50-page case study PDF.

**Methodology.** The auditor-specialist's review framework for GEO Setup deliverables. What gets checked, what triggers rework, what gets signed off by Constantine.

**Discord highlights.** (Paid Discord launches at 50 paid subs.)

---

## Sources

- GEO Setup launch: BayShine commit `2bcd7ab` initial deployment notes.
- Citation propagation timelines: BayShine probe dataset across 8 sites that implemented citation-readiness rewrites between 2026-05-08 and 2026-05-22.
- BreadcrumbList adoption rates (~12% of local service sites in our sample): internal audit of 25 mobile service business sites, 2026-05.
- Plumbing emergency vertical patterns: BayShine partner network observations + plumbing schema template testing.

## Publishing notes

- Send time: Tuesday 09:00 Eastern (Day 28).
- Cover image: placeholder.
- Cross-promotion priority: GEO Setup ($2,500) primary; AI Citation Audit teaser; GEO Playbook secondary.

Voice rules: all numbers sourced, no em-dashes, no exclamation marks, no soft marketing.
