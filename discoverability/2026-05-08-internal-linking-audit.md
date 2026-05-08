# BayShine Internal Linking Audit
**Date:** 2026-05-08
**Scope:** All linkable pages and blog content

---

## 1. Link Graph Visualization

Pages are listed with their in-content inbound links (nav and footer links are noted separately and do not count as in-content authority).

```
/ (Homepage)
  IN:  [logo, footer wordmark]
  OUT: /contact, /quote, /full-detail (CustomerTypeStack), /fleet (CustomerTypeStack),
       /apartments (CustomerTypeStack), /exterior-detail, /full-detail, /ceramic-coating,
       /recon, /fleet, /apartments (ServiceRevealSequence), /standing-detail [NEW]

/standing-detail
  IN (nav): Header, mobile nav, footer Programs column
  IN (content): /full-detail [NEW], /exterior-detail [NEW], / [NEW]
  OUT: /contact, /quote

/full-detail
  IN (nav): Header, mobile nav, footer Services column
  IN (content): CustomerTypeStack (via "Full Detail" CTA), ServiceRevealSequence
  OUT: /contact, /standing-detail [NEW]

/exterior-detail
  IN (nav): Header, mobile nav, footer Services column
  IN (content): ServiceRevealSequence (twice: Exterior Detail and Decontamination cards)
  OUT: /contact, /quote [NEW], /standing-detail [NEW]

/ceramic-coating
  IN (nav): Header, mobile nav, footer Services column
  IN (content): ServiceRevealSequence, /recon [NEW], blog/car-wash-planned-obsolescence
  OUT: /contact, /recon [NEW]

/recon
  IN (nav): Header, mobile nav, footer Services column
  IN (content): ServiceRevealSequence (Paint Correction card)
  OUT: /contact, /quote, /ceramic-coating [NEW]

/fleet
  IN (nav): Header, mobile nav, footer Programs column
  IN (content): CustomerTypeStack, ServiceRevealSequence
  OUT: /fleet (anchor #inquiry)

/apartments
  IN (nav): mobile nav, footer Programs column
  IN (content): CustomerTypeStack, ServiceRevealSequence
  OUT: /apartments (anchor #inquiry)

/about
  IN (nav): Header, mobile nav, footer Company column
  IN (content): [none from service pages or blog]
  OUT: /contact

/contact
  IN (nav): Header "Book Now" CTA, mobile nav
  IN (content): Every service page CTA, / hero, /standing-detail, /about, multiple blog posts
  OUT: [none -- correct, it is a terminal conversion page]

/quote
  IN (nav): mobile nav, footer Help column
  IN (content): / hero, /standing-detail, /recon, /exterior-detail [NEW]
  OUT: [none -- correct]

/field-guide
  IN (nav): footer Company column only
  IN (content): [none]
  OUT: [none]

/blog (index)
  IN (nav): Header, mobile nav, footer Company column
  IN (content): /about mentions "the blog"
  OUT: individual post links

/blog/* (individual posts)
  IN (nav): blog index listing
  IN (content): see Blog Post Graph below

Blog Post Graph (content-to-content links only):

  car-wash-planned-obsolescence
    IN:  /blog/paint-correction-before-ceramic, /blog/fleet-per-unit-pricing-explained,
         /blog/resident-detailing-amenity-no-cost, /blog/ceramic-coating-florida-humidity,
         /blog/exterior-detail-spring-prep-pasco-county
    OUT: /contact, /ceramic-coating

  iron-decontamination
    IN:  /blog/paint-correction-before-ceramic, /blog/exterior-detail-spring-prep-pasco-county
    OUT: /blog/lovebug-season [NEW]

  paint-correction-before-ceramic
    IN:  /blog/ceramic-coating-florida-humidity
    OUT: /blog/car-wash-planned-obsolescence, /blog/iron-decontamination, /contact

  six-week-rhythm
    IN:  /blog/full-detail-overview [NEW], /blog/what-full-detail-covers [NEW]
    OUT: [none -- support content, no outbound needed]

  full-detail-overview
    IN:  [none from blog]
    OUT: /blog/six-week-rhythm [NEW]

  what-full-detail-covers
    IN:  /blog/full-detail-interior-odor-elimination
    OUT: /blog/six-week-rhythm [NEW], /blog/how-to-prep-your-car-for-detailing [NEW]

  full-detail-interior-odor-elimination (draft)
    IN:  [none from blog -- draft, low priority]
    OUT: /blog/what-full-detail-covers, /blog/how-to-prep-your-car-for-detailing, /contact

  how-to-prep-your-car-for-detailing
    IN:  /blog/full-detail-interior-odor-elimination, /blog/what-full-detail-covers [NEW]
    OUT: [none]

  lovebug-season
    IN:  /blog/iron-decontamination [NEW], /blog/exterior-protection-florida [NEW]
    OUT: [none]

  exterior-detail-spring-prep-pasco-county
    IN:  /blog/fleet-per-unit-pricing-explained
    OUT: /blog/car-wash-planned-obsolescence, /blog/iron-decontamination, /contact

  exterior-protection-florida
    IN:  [none from blog]
    OUT: /blog/lovebug-season [NEW]

  hard-water-spots-tampa
    IN:  /blog/ceramic-coating-florida [NEW], /blog/water-spots-florida-well-water [NEW]
    OUT: [none]

  water-spots-florida-well-water
    IN:  [none from blog]
    OUT: /blog/ceramic-coating-florida-sun, /blog/ceramic-coating-florida-humidity,
         /exterior-detail (via text link), /blog/hard-water-spots-tampa [NEW]

  ceramic-coating-florida
    IN:  [none from blog]
    OUT: /blog/hard-water-spots-tampa [NEW]

  ceramic-coating-florida-sun (draft)
    IN:  /blog/ceramic-coating-florida-humidity, /blog/water-spots-florida-well-water
    OUT: [none]

  ceramic-coating-florida-humidity (draft)
    IN:  [none from non-draft posts]
    OUT: /blog/ceramic-coating-florida-sun, /blog/paint-correction-before-ceramic,
         /blog/car-wash-planned-obsolescence, /contact

  fleet-maintenance-overview
    IN:  [none from blog]
    OUT: /blog/lot-managers-wash-quotes [NEW], /blog/recon-value-overview [NEW]

  fleet-per-unit-pricing-explained
    IN:  [none from blog]
    OUT: /blog/car-wash-planned-obsolescence, /blog/exterior-detail-spring-prep-pasco-county,
         /blog/lot-managers-wash-quotes [NEW], /contact

  lot-managers-wash-quotes
    IN:  /blog/fleet-maintenance-overview [NEW], /blog/fleet-per-unit-pricing-explained [NEW]
    OUT: [none]

  recon-math
    IN:  [none from blog]
    OUT: /blog/recon-value-overview [NEW]

  recon-value-overview
    IN:  /blog/recon-math [NEW], /blog/fleet-maintenance-overview [NEW]
    OUT: [none]

  resident-detailing-amenity-no-cost
    IN:  [none from blog]
    OUT: /blog/car-wash-planned-obsolescence, /blog/ceramic-coating-florida-sun,
         /blog/resident-detailing-program [NEW], /contact

  resident-detailing-program
    IN:  /blog/resident-detailing-amenity-no-cost [NEW]
    OUT: [none]
```

---

## 2. Orphan Pages

Pages with zero in-content inbound internal links (nav and footer excluded):

| Page | Status | Action Taken |
|---|---|---|
| /standing-detail | Was orphan | Fixed: links added from /, /full-detail, /exterior-detail |
| /field-guide | Still orphan | Not fixed this pass -- no natural service page context found without forced placement. FOLLOWUP: add to About page "The blog and Field Guide" section |
| /tools | Still orphan | Footer only. Low SEO priority page, no service connection |
| /about | Weakly linked | Still only nav/footer inbound. No fix added this pass |
| /404 | N/A | Error page, expected orphan |

---

## 3. Weakly-Linked Pages

Pages with only nav or footer inbound links, needing content-level reinforcement:

| Page | Inbound Count (content) | Assessment |
|---|---|---|
| /standing-detail | 3 [NEW] | Now adequate |
| /apartments | 2 (CustomerTypeStack, ServiceRevealSequence) | Both are component links, not in-prose |
| /fleet | 2 (CustomerTypeStack, ServiceRevealSequence) | Same |
| /field-guide | 0 | Weakest page on site |
| /about | 0 | Low commercial priority, acceptable |
| /quote | 4 (/, /standing-detail, /recon, /exterior-detail [NEW]) | Now adequate |

---

## 4. Anchor Text Issues

Issues found and resolved:

- **Generic "Book Now" anchors**: All CTAs correctly use descriptive text for screen readers via aria-label on Button components. No issue.
- **"How the program works" (/)**: Used once to /standing-detail. Specific and accurate.
- **"how the Standing Detail program works" (/full-detail)**: Varied anchor text for same destination -- good.
- **"Standing Detail program" (/exterior-detail)**: Third variant for same destination -- correct variation.
- **No two pages use identical anchor text to /standing-detail**: Compliant.
- **"ceramic coating" (/recon)**: Accurate, no over-repetition issue at this stage.
- **"full reconditioning" (/ceramic-coating to /recon)**: Accurate, descriptive.

Remaining risk: `car-wash-planned-obsolescence` receives inbound links from 5 different posts. Anchor text varies across those links (good). No action needed.

---

## 5. Authority Flow to Conversion Pages

**Pre-fix state:**
- /contact: strong authority flow -- every service page CTA, multiple blog posts
- /quote: weak -- only / and /standing-detail
- /standing-detail: zero content-level inbound (nav only)

**Post-fix state:**
- /contact: unchanged, strong
- /quote: now receives content-level inbound from /exterior-detail in addition to / and /standing-detail
- /standing-detail: now receives content-level inbound from /, /full-detail, and /exterior-detail

**Remaining gap:**
- /standing-detail still lacks inbound from blog content. The `six-week-rhythm` post is the most natural vehicle for this. That post currently has no outbound link to /standing-detail and no in-content link from the service page itself.
- FOLLOWUP: add "Start the Standing Detail program" link from `six-week-rhythm.mdx` to `/standing-detail`

---

## 6. Specific Link Recommendations

### Implemented This Pass

| Source | Destination | Anchor Text | Context |
|---|---|---|---|
| /index.astro | /standing-detail | "How the program works" | After 6-week program description |
| /full-detail.astro | /standing-detail | "how the Standing Detail program works" | Standing Detail upsell section |
| /exterior-detail.astro | /standing-detail | "Standing Detail program" | Decon callout block |
| /exterior-detail.astro | /quote | "Get an estimate" | Bottom CTA section |
| /recon.astro | /ceramic-coating | "ceramic coating" | Pricing note callout |
| /ceramic-coating.astro | /recon | "full reconditioning" | Coat or don't coat callout |
| full-detail-overview.mdx | /blog/six-week-rhythm | "Why the six-week interval works" | "What maintained means" section |
| what-full-detail-covers.mdx | /blog/six-week-rhythm | "How a six-week schedule changes the economics" | Final paragraph |
| what-full-detail-covers.mdx | /blog/how-to-prep-your-car-for-detailing | "What to do before your detailer arrives" | First paragraph |
| iron-decontamination.mdx | /blog/lovebug-season | "Lovebug season and clear coat timing" | Final paragraph |
| exterior-protection-florida.mdx | /blog/lovebug-season | "Lovebug season and the removal window" | Timing section |
| ceramic-coating-florida.mdx | /blog/hard-water-spots-tampa | "How Tampa Bay hard water spots become etch marks" | Hard water section |
| water-spots-florida-well-water.mdx | /blog/hard-water-spots-tampa | "Hard water spots and Tampa Bay tap water" | Opening paragraph |
| fleet-maintenance-overview.mdx | /blog/lot-managers-wash-quotes | "what lot managers miss when evaluating per-vehicle quotes" | Who this works for section |
| fleet-maintenance-overview.mdx | /blog/recon-value-overview | "how vehicle condition translates to sale price" | What's included section |
| fleet-per-unit-pricing-explained.mdx | /blog/lot-managers-wash-quotes | "What lot managers miss when comparing vendor quotes" | Throughput section |
| recon-math.mdx | /blog/recon-value-overview | "How vehicle condition translates directly to sale price" | Front-lot section |
| resident-detailing-amenity-no-cost.mdx | /blog/resident-detailing-program | "How the resident enrollment model works in practice" | Adding the program section |

### Remaining -- Not Implemented This Pass

| Source | Destination | Reason Not Done |
|---|---|---|
| /about.astro | /field-guide | "The Field Guide" section exists but adding a third in-content link would hit the 3-link ceiling for the page. FOLLOWUP: The about page currently has one CTA link. A second in-prose link to /field-guide is the clear next addition. |
| /blog/six-week-rhythm.mdx | /standing-detail | Did not want to add outbound from this post before establishing inbound. Now that it has 2 inbound links, this outbound makes sense. FOLLOWUP: add "The BayShine Standing Detail program" link to the final paragraph of six-week-rhythm.mdx |
| /blog/ceramic-coating-florida-humidity.mdx (draft) | /ceramic-coating | Draft post -- wait for publish |
| /blog/ceramic-coating-florida-sun.mdx (draft) | /ceramic-coating | Draft post -- wait for publish |
| /blog/full-detail-interior-odor-elimination.mdx (draft) | /full-detail | Draft post -- wait for publish |
| /blog/exterior-detail-spring-prep-pasco-county.mdx | /standing-detail | Already at 3 outbound links in this post. Add on next pass |
| /blog/recon-math.mdx | /recon (service page) | Post has no outbound to service page. FOLLOWUP: add "book a recon walkthrough" link at end |
| /blog/lot-managers-wash-quotes.mdx | /fleet | No outbound to service page. FOLLOWUP: add link in final paragraph |
| /blog/resident-detailing-program.mdx | /apartments | No outbound to service page. FOLLOWUP: add at end of post |
| /blog/water-spots-florida-well-water.mdx | /exterior-detail | Link exists as "/exterior-detail" in final sentence but uses non-standard format. FOLLOWUP: verify it renders correctly (it goes through a text string, not markdown link syntax) |

---

## 7. Implementation Priority

Ranked by expected authority-flow and crawl impact:

1. **DONE** -- /standing-detail inbound links from /, /full-detail, /exterior-detail. Highest priority. The headline conversion page now has content-level inbound.
2. **DONE** -- /recon and /ceramic-coating cross-links. Natural relationship, now explicit.
3. **DONE** -- /quote inbound from /exterior-detail. Conversion page needed content-level path.
4. **DONE** -- six-week-rhythm.mdx inbound links (was total orphan in blog graph).
5. **DONE** -- lovebug-season.mdx, hard-water-spots-tampa.mdx, lot-managers-wash-quotes.mdx inbound links.
6. **DONE** -- recon-value-overview.mdx, resident-detailing-program.mdx inbound links.
7. **NEXT** -- six-week-rhythm.mdx outbound to /standing-detail (routing blog authority to conversion).
8. **NEXT** -- /field-guide inbound from /about.
9. **NEXT** -- Draft posts (ceramic-coating-florida-humidity, ceramic-coating-florida-sun, full-detail-interior-odor-elimination) need service page outbound links added before publish.
10. **NEXT** -- Orphan service posts (recon-math, lot-managers-wash-quotes, resident-detailing-program) need outbound links to their respective service pages.
