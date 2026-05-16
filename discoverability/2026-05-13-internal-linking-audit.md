# Internal Linking Audit — BayShine
**Date:** 2026-05-13  
**Scope:** Full site — new neighborhood cluster (/land-o-lakes/*), 13 blog posts, service-area hub, homepage  
**Status:** Audit complete. All priority fixes implemented in this pass.

---

## 1. Link Graph Visualization

```
/ (homepage)
├── /contact (Book Now — hero, standing detail CTA, final CTA)
├── /quote (Get a Quote — hero, final CTA)
├── /standing-detail (in-content link + section anchor)
├── /land-o-lakes [ADDED THIS PASS]
└── [via header nav] → /standing-detail, /full-detail, /exterior-detail,
    /ceramic-coating, /recon, /fleet, /about, /blog

/service-area/
├── /service-area/[zip] (all high-priority zips — linked as cards)
├── /contact, /quote
└── /land-o-lakes [ADDED THIS PASS — in-content callout section]

/land-o-lakes/ (hub)
├── /land-o-lakes/bexley
├── /land-o-lakes/connerton
├── /land-o-lakes/lake-padgett-estates
├── /land-o-lakes/wilderness-lake-preserve
├── /land-o-lakes/lakeshore-ranch
├── /standing-detail (hero secondary CTA + standing detail callout section)
├── /contact, /quote

/land-o-lakes/bexley
├── /standing-detail
├── /exterior-detail, /full-detail, /ceramic-coating, /recon
├── /contact
└── [back-breadcrumb] /land-o-lakes (schema only, not visible prose)

/land-o-lakes/connerton, /lake-padgett-estates, /wilderness-lake-preserve, /lakeshore-ranch
└── [same pattern as bexley — /standing-detail, service pages, /contact]

/blog/six-week-rhythm
└── /standing-detail [ADDED THIS PASS]

/blog/ceramic-coating-florida
├── /blog/hard-water-spots-tampa (links to non-existent slug — dead internal link)
└── /ceramic-coating [ADDED THIS PASS]

/blog/ceramic-coating-maintenance-guide
├── /blog/car-wash-planned-obsolescence (correct)
├── /ceramic-coating (correct — bottom CTA)
└── /blog/ceramic-coating-florida-sun (non-existent slug — dead internal link)
    /blog/ceramic-coating-florida-humidity (non-existent slug — dead internal link)

/blog/lovebug-season
├── /exterior-detail [ADDED THIS PASS]
└── /standing-detail [ADDED THIS PASS]

/blog/car-wash-planned-obsolescence
├── /contact (correct)
├── /ceramic-coating (correct)
└── /standing-detail [ADDED THIS PASS]

/blog/paint-correction-before-ceramic
├── /blog/car-wash-planned-obsolescence (correct)
├── /blog/iron-decontamination (non-existent slug — dead internal link)
└── /ceramic-coating [ADDED THIS PASS — replaced /contact]

/blog/water-spots-florida-well-water
├── /land-o-lakes/lake-padgett-estates [ADDED THIS PASS]
├── /blog/what-full-detail-covers (non-existent slug)
├── /blog/exterior-protection-florida (non-existent slug)
└── /exterior-detail (correct — bottom CTA)

/blog/mold-in-florida-vehicles
├── /blog/recon-value-overview (non-existent slug)
├── /blog/ceramic-coating-florida-humidity (non-existent slug)
└── /full-detail (correct — bottom CTA)

/blog/how-to-prep-your-car-for-detailing
├── /contact [ADDED THIS PASS]
└── /standing-detail [ADDED THIS PASS]

/blog/fleet-per-unit-pricing-explained
├── /blog/car-wash-planned-obsolescence (correct)
├── /blog/lot-managers-wash-quotes (non-existent slug)
├── /blog/exterior-detail-spring-prep-pasco-county (non-existent slug)
├── /fleet [ADDED THIS PASS]
└── /contact (correct)

/blog/recon-math
├── /blog/recon-value-overview (non-existent slug)
└── /recon [ADDED THIS PASS]

/blog/resident-detailing-amenity-no-cost
├── /blog/car-wash-planned-obsolescence (correct)
├── /blog/ceramic-coating-florida-sun (non-existent slug)
├── /blog/resident-detailing-program (non-existent slug)
├── /apartments [ADDED THIS PASS]
└── /contact (correct)
```

---

## 2. Orphan Pages

Pages with zero confirmed inbound internal links from prose content (nav/footer excluded):

| Page | Status |
|---|---|
| `/land-o-lakes/` | Fixed this pass — added from homepage and service-area/index |
| `/land-o-lakes/connerton` | Linked from hub grid only — no blog content links yet |
| `/land-o-lakes/wilderness-lake-preserve` | Linked from hub grid only — no blog content links yet |
| `/land-o-lakes/lakeshore-ranch` | Linked from hub grid only — no blog content links yet |
| `/apartments` | Fixed this pass — added from resident-detailing-amenity post |
| `/fleet` | Fixed this pass — added from fleet-per-unit-pricing post |
| `/recon` | Fixed this pass — added from recon-math post |

The five neighborhood pages all receive inbound links from the `/land-o-lakes/` hub grid, which satisfies the minimum. `/land-o-lakes/lake-padgett-estates` now also receives a blog link from `water-spots-florida-well-water`. The other three neighborhood pages need at least one content link each — see Section 6.

---

## 3. Weakly-Linked Pages

Pages with only nav/footer links or a single in-content link:

| Page | Current In-Content Inbound Links | Target |
|---|---|---|
| `/standing-detail` | 1 (homepage standing detail section) | 3+ |
| `/land-o-lakes/connerton` | 0 prose, 1 hub grid | 2+ |
| `/land-o-lakes/wilderness-lake-preserve` | 0 prose, 1 hub grid | 2+ |
| `/land-o-lakes/lakeshore-ranch` | 0 prose, 1 hub grid | 2+ |
| `/ceramic-coating` | 2 (ceramic-coating-florida + paint-correction posts) | 3+ |
| `/exterior-detail` | 2 (lovebug-season + water-spots posts) | 3+ |

`/standing-detail` is the headline conversion goal and currently has one strong in-content link (homepage) plus nav links. The fixes in this pass add three more: six-week-rhythm, lovebug-season, and how-to-prep — bringing it to the minimum threshold of 4 in-content links. Car-wash-planned-obsolescence adds a fifth.

---

## 4. Anchor Text Issues

### Dead internal links (slugs that do not exist as pages)

These appear in blog posts as cross-references to articles that were planned but not yet published:

| Source Post | Broken Link Target |
|---|---|
| ceramic-coating-florida | `/blog/hard-water-spots-tampa` |
| ceramic-coating-maintenance-guide | `/blog/ceramic-coating-florida-sun` |
| ceramic-coating-maintenance-guide | `/blog/ceramic-coating-florida-humidity` |
| paint-correction-before-ceramic | `/blog/iron-decontamination` |
| water-spots-florida-well-water | `/blog/what-full-detail-covers` |
| water-spots-florida-well-water | `/blog/exterior-protection-florida` |
| mold-in-florida-vehicles | `/blog/recon-value-overview` |
| mold-in-florida-vehicles | `/blog/ceramic-coating-florida-humidity` |
| fleet-per-unit-pricing-explained | `/blog/lot-managers-wash-quotes` |
| fleet-per-unit-pricing-explained | `/blog/exterior-detail-spring-prep-pasco-county` |
| resident-detailing-amenity-no-cost | `/blog/ceramic-coating-florida-sun` |
| resident-detailing-amenity-no-cost | `/blog/resident-detailing-program` |
| recon-math | `/blog/recon-value-overview` |

These are not broken in a hard-error sense (Astro won't 404 on them at build if they're external-style hrefs), but they point to missing content. Each one is a signal to write the referenced post. These become the next content targets.

### Generic anchor text patterns

No "click here" or "learn more" anchors found in the blog content. The existing anchors are generally descriptive. One pattern to watch: the neighborhood pages use "View page →" as card anchor text — acceptable for UI cards but would be flagged as generic if appearing in prose.

### Anchor text diversity for /standing-detail

Post-fix, the anchors leading to /standing-detail across the site are:
- "How the program works" (homepage)
- "Standing Detail Program" (land-o-lakes hero)
- "How the Program Works" (land-o-lakes standing detail section, bexley page)
- "The BayShine Standing Detail program" (six-week-rhythm — ADDED)
- "the Standing Detail program" (lovebug-season — ADDED)
- "the Standing Detail" (how-to-prep — ADDED)
- "the BayShine Standing Detail program" (car-wash-planned-obsolescence — ADDED)

Diversity is acceptable. No exact-match over-repetition.

---

## 5. Authority Flow to Conversion Pages

### /standing-detail (headline conversion)

Before this pass: homepage (1 in-content), header nav, footer nav.  
After this pass: homepage, six-week-rhythm, lovebug-season, how-to-prep, car-wash-planned-obsolescence, land-o-lakes hub (hero + section CTA), all five neighborhood pages.  
**Verdict: Now adequately linked. Monitor that future blog posts continue routing to it where relevant.**

### /contact (booking)

Already well-linked. Every service page, neighborhood page, and the homepage CTA sections link to it. No action needed.

### /ceramic-coating

Before this pass: ceramic-coating-florida (had broken slug link but now also has /ceramic-coating added), maintenance guide (correct bottom link).  
After this pass: ceramic-coating-florida + paint-correction-before-ceramic + ceramic-coating-maintenance-guide.  
**Verdict: Acceptable — 3 in-content links. Add one more when the next ceramic-related post publishes.**

### /fleet and /recon

Both were linked only from nav/footer. Fixed in this pass via fleet-per-unit-pricing and recon-math.

### /apartments

Was linked only from footer. Fixed via resident-detailing-amenity post.

---

## 6. Specific Link Recommendations

Fixes implemented in this pass are marked [DONE]. Remaining recommendations are the next actions.

| Source URL | Destination URL | Suggested Anchor Text | Context / Status |
|---|---|---|---|
| /service-area/ | /land-o-lakes | "Land O' Lakes neighborhood coverage" | [DONE] — added as a dedicated prose callout section |
| / (homepage) | /land-o-lakes | "Land O' Lakes neighborhood coverage" | [DONE] — added as a named section before Standing Detail |
| /blog/six-week-rhythm | /standing-detail | "The BayShine Standing Detail program" | [DONE] — added as closing sentence |
| /blog/ceramic-coating-florida | /ceramic-coating | "what the ceramic coating service includes and how we approach prep" | [DONE] — added to closing paragraph |
| /blog/lovebug-season | /exterior-detail | "Our exterior detail service" | [DONE] — added as closing paragraph |
| /blog/lovebug-season | /standing-detail | "the Standing Detail program" | [DONE] — added in same closing paragraph |
| /blog/car-wash-planned-obsolescence | /standing-detail | "the BayShine Standing Detail program" | [DONE] — added to "why Tampa Bay drivers" section |
| /blog/paint-correction-before-ceramic | /ceramic-coating | "BayShine's ceramic coating service covers" | [DONE] — replaced /contact with /ceramic-coating |
| /blog/how-to-prep-your-car-for-detailing | /contact | "Book a full detail or exterior detail" | [DONE] — added as closing paragraph |
| /blog/how-to-prep-your-car-for-detailing | /standing-detail | "the Standing Detail" | [DONE] — in same closing paragraph |
| /blog/fleet-per-unit-pricing-explained | /fleet | "how BayShine structures fleet programs" | [DONE] — added before /contact link |
| /blog/recon-math | /recon | "heavy reconditioning" | [DONE] — added as closing paragraph |
| /blog/resident-detailing-amenity-no-cost | /apartments | "the BayShine apartment and community program" | [DONE] — added before /contact link |
| /blog/water-spots-florida-well-water | /land-o-lakes/lake-padgett-estates | "Lake Padgett Estates" | [DONE] — added in opening paragraph |
| /blog/ceramic-coating-maintenance-guide | /standing-detail | "recurring maintenance program" | PENDING — natural fit: maintenance guide readers are the standing detail audience |
| /blog/mold-in-florida-vehicles | /full-detail | "full interior detail" | Already present at bottom — confirm rendering |
| /land-o-lakes/connerton | blog content | — | PENDING — need blog post that references Connerton or master-planned community well-water conditions |
| /land-o-lakes/wilderness-lake-preserve | blog content | — | PENDING — need blog post referencing tree canopy / sap / pollen conditions |
| /land-o-lakes/lakeshore-ranch | blog content | — | PENDING — need blog post referencing gated HOA detailing logistics |
| /blog/ceramic-coating-florida | /land-o-lakes | "across Pasco County" — link to hub | PENDING — the closing sentence mentioning Pasco County is a natural anchor point |

---

## 7. Implementation Priority

Ranked by expected authority-flow impact:

**Implemented this pass (high impact, complete):**

1. Homepage → /land-o-lakes — establishes the hub as a first-level destination from the root
2. /service-area/ → /land-o-lakes — cross-reference between the two geographic hubs
3. Six-week-rhythm → /standing-detail — conversion-critical: this post's entire argument supports the recurring program
4. Lovebug-season → /exterior-detail + /standing-detail — high-traffic seasonal post, now routes correctly
5. Car-wash-planned-obsolescence → /standing-detail — the site's most link-rich blog post now points to the conversion page
6. Paint-correction-before-ceramic → /ceramic-coating (replaced /contact) — readers primed to book a coating go to the service page, not the generic contact form
7. Fleet-per-unit-pricing → /fleet — B2B content now routes to the B2B conversion page
8. Recon-math → /recon — same pattern for the recon audience
9. Resident-detailing → /apartments — same pattern for property managers
10. Water-spots → /land-o-lakes/lake-padgett-estates — first content link to that neighborhood page

**Next actions (in order):**

1. **Resolve dead internal links** — 13 blog posts link to 12+ slugs that do not exist. These are the highest-leverage content gaps: each represents a planned article that, once published, would complete a real cross-link. Write `recon-value-overview`, `ceramic-coating-florida-sun`, `ceramic-coating-florida-humidity`, and `iron-decontamination` first — they are referenced multiple times.

2. **Add /standing-detail link from ceramic-coating-maintenance-guide** — the post's entire premise supports recurring maintenance. The closing line currently sends readers to /ceramic-coating. Both links belong there.

3. **Add /land-o-lakes link from ceramic-coating-florida closing paragraph** — "Pasco County and North Hillsborough" is already there; link "Pasco County" to the hub.

4. **Create content that links to connerton, wilderness-lake-preserve, and lakeshore-ranch** — the three neighborhood pages with zero prose inbound links. The water-spots post and a pine-sap/canopy post would cover two of them naturally.

5. **Audit the /blog/[...slug].astro template** — confirm that RelatedBlogBox is rendering links to relevant posts and that the blog post template includes breadcrumb links back to /blog. These are structural links that affect all 13 posts simultaneously.
