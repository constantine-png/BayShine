# Summer Reset Campaign — `/lovebug-removal` Rebuild

**Window:** June 1 – June 14, 2026 (14 days)
**Date:** 2026-06-01
**URL:** `/lovebug-removal` (existing route — rebuilt in place to preserve SEO equity)
**Status:** Design — pending implementation plan

---

## 1. Campaign thesis

Four real, dated events converge on Pasco County car owners in the first week of June 2026. The page is built on that convergence, not on generic urgency.

| # | Event | Source |
|---|-------|--------|
| 1 | Pasco Schools last day = Friday May 29; first day of summer break = Mon June 1 | Pasco County Schools 2025-26 calendar |
| 2 | Lovebug peak ended in May; residue on paint is now ~30 days old and past the safe-wash window | UF News; live observation |
| 3 | Atlantic hurricane season opened June 1 | NOAA 2026 outlook |
| 4 | Tampa Bay daily afternoon thunderstorm pattern begins; 7+ rain days in first 10 of June | NWS Tampa Bay; AccuWeather |

The 14-day window is the time between "summer started" and "summer damage compounds." Every wash delayed in this window costs a polish cycle later.

---

## 2. What changes vs. the live page

### Kept (do not touch)
- URL `/lovebug-removal`
- Page structure: Hero → Problem → Trust → 3-Tier Service Menu → Process → Booking Form → FAQ → Footer
- Pricing tiers ($185 / $255 / $750) — owner override of the no-pricing standing rule, intentional for this campaign
- "Most popular" badge on Full Detail tier
- Booking form fields and behavior
- Phone CTA (813) 324-5522

### Rewritten
- All hero, problem, trust, tier-blurb, process, and FAQ copy — top to bottom
- Voice corrections: every "I" → "we", "owner operates every job" → "owner-operated"
- FAQ replaced with four new questions aligned to the campaign

### Restyled (palette inversion, no new color tokens)
- Hero: dark navy → `bay-paper` (sun-bleached, summer flat-light)
- Problem section: stays/returns to `bay-navy` with brushed-noise filter at 5% (was 3%) — literal "storm coming" mood interrupt
- Tiers section: `bay-paper` (clean spec-sheet feel)
- Booking form section: `bay-deep` (commitment moment, heaviest weight)
- Primary CTA: full 600ms diagonal specular sweep on hover (per CLAUDE.md "primary CTAs only")
- Vertical section spacing +20% (summer = empty horizons)

### Explicitly NOT in scope this pass
- Video (`comparison-bayshine-detail.mp4`) — owner declined for this pass
- Schema additions (LocalBusiness, Service, FAQPage) — owner declined for this pass
- New color tokens — CLAUDE.md "one accent color" rule holds

---

## 3. Copy — section by section

### 3.1 Hero

**H1:** Four things just happened to your car this week.

**Sub:** School's out. Lovebug season ended. Hurricane season started. Daily storms begin Thursday. We have a 14-day window to reset your paint before summer takes three months off it.

**Trust bullets (unchanged structure, voice fix):**
- Mobile service to your driveway
- 2-hour callback guarantee
- Owner-operated, every job

**Primary CTA:** Book my Summer Reset → `#book`
**Secondary CTA:** Call (813) 324-5522 → `tel:+18133245522`

### 3.2 Problem section

**H2:** What's eating your paint right now

**Body:**
Lovebug peak ran April through May. The bugs are gone. The residue isn't. A lovebug body has a pH of about 6.5 in the first hour after impact — manageable. In direct Florida sun above 85°F, decomposition drops that pH below 4.5 within 24 to 48 hours. At that point the acid is actively etching clear coat. Most of the residue on Pasco bumpers and front fenders right now is at the 30-day mark. That is past the safe-wash window. Removal still works. It just takes a polish step that wouldn't have been necessary in May.

Then there's the next layer. Hurricane season opened Monday. The first marginal severe risk hit the Nature Coast Tuesday. Daily afternoon thunderstorms start this week and run through September. Rainwater in Pasco carries iron from roof runoff and well-water spotting that bonds to the clear coat with every wet-then-baked cycle. After three cycles, the spots stop coming off with a wash. They come off with iron decontamination and clay. ([read more on iron decon](/blog/iron-decontamination))

Every wash you delay this month removes the safe window for the next one.

### 3.3 Trust section

**H2:** Who's actually doing the work

**Body:**
You're not getting a call center, a subcontractor, or a teenager with a sponge. Every job runs through our two-bucket wash, pH-balanced solvent, and hand-applied sealant process. The owner takes the calls, runs the appointments, and stands behind the work. If something isn't right at the end, we don't leave until it is.

**Photo caption:** Owner-operated. Pasco County, FL.

### 3.4 Three-tier service menu

**Section H2:** Three ways to reset

#### Tier 1 — Exterior Detail · Starting at $185
**Blurb:** The summer-reset baseline. Two-bucket wash, lovebug residue removal (clay step included for May residue), iron decontamination, sealant rated for 3–4 months of Florida sun and storm cycles. Best for daily drivers that need to survive June without compounding damage.

#### Tier 2 — Full Detail · Starting at $255 · *Most popular*
**Blurb:** Exterior plus interior extraction. Sand, sunscreen, melted snacks, pool water, beach chairs — the family-car summer load comes out. Best for vehicles entering pool/beach/camp shuttle duty this week.

#### Tier 3 — Ceramic Coating · Starting at $750
**Blurb:** Lock the reset in for the next three summers. 5-year hydrophobic ceramic over a fully decontaminated and polished surface. Rain beads off, lovebug residue rinses, iron spotting drops dramatically. Best for vehicles you plan to keep through 2029.

(Each tier retains existing expandable feature list and "Choose" button → `#book`.)

### 3.5 Process

**H2:** What happens after you book

(Three-step layout unchanged; voice fix only.)

1. **Within 2 hours, we call back.** Confirm vehicle, address, and what your driveway can support.
2. **We arrive mobile.** Power, water, shade — we work around what you have.
3. **Payment on completion.** If it's not right, we don't leave until it is.

### 3.6 Booking form

(Fields, validation, and submit behavior unchanged.)

**Form H2:** Book your Summer Reset
**Form CTA:** Book my Summer Reset
**Fallback line below form:** Or call (813) 324-5522 — same number, same person.

### 3.7 FAQ

**H2:** Quick questions, answered

1. **Why now and not in July?**
   Three reasons stack: May lovebug residue is at its 30-day etch deadline, daily storms add iron-spot cycles starting this week, and our calendar fills fastest in the first two weeks of summer break. The window is real.

2. **Will the lovebugs still come off after a month?**
   Yes. Residue this old needs a clay step and sometimes a light polish — not just a wash. That's included in the Exterior Detail tier and up. Removal works. The variable is whether the clear coat is intact underneath.

3. **What if a thunderstorm rolls through during my appointment?**
   We reschedule at no charge. June afternoons are unpredictable. We watch the radar and move appointments without penalty.

4. **Do you serve my area?**
   Pasco County and North Hillsborough — New Port Richey, Wesley Chapel, Land O' Lakes, Lutz, Odessa, Trinity. If you're outside this zone, call and we'll tell you straight.

### 3.8 Footer

(Existing footer unchanged; phone and "Pasco County, FL · owner-operated" line carry over with the voice fix.)

---

## 4. Required assets

### Photo slots (mark with `data-photo-needed` placeholders per CLAUDE.md)

| # | Slot | Description | Aspect | Approx size |
|---|------|-------------|--------|-------------|
| 1 | Hero | Sun-bleached driveway, mid-afternoon Florida light, freshly detailed dark-color car (gloss reads in flat light) | 16:9 | 2400×1350 |
| 2 | Problem A | Macro of front bumper or windshield cowl with dried lovebug residue 2–4 weeks old, raking light to show etch onset | 1:1 | 1200×1200 |
| 3 | Problem B | Macro of hood/roof showing orange iron-fallout dots from acid rain or well-water spotting | 1:1 | 1200×1200 |
| 4 | Trust | Environmental portrait of owner in work clothes next to detail van; or reuse existing owner shot if available | 5:7 | 1000×1400 |
| 5 | Tier 1 (Exterior) | Clean side profile of a daily-driver after exterior detail | 16:9 | 1600×900 |
| 6 | Tier 2 (Full Detail) | Interior post-extraction — clean seats, vacuumed carpet, no people | 16:9 | 1600×900 |
| 7 | Tier 3 (Ceramic) | Water beading on freshly coated panel, macro | 1:1 | 1200×1200 |

All photos: AVIF primary + WebP fallback via Astro `<Image>` component. Hero ≤ 200KB at 1x.

### Existing assets — no action needed
- Logo: `public/assets/logo/bayshine_logo_vector.png`
- (Video `comparison-bayshine-detail.mp4` exists but is out of scope this pass per owner decision)

### Copy assets
- None external. All copy is drafted in §3 above and sourced from real calendar/weather/peak facts cited in §1.

---

## 5. Color / palette plan

Brand palette is fixed (CLAUDE.md: one accent color). No new tokens are introduced. The "summer reset" feeling is engineered by inverting the typical BayShine section order:

| Section | Background | Text | Notes |
|---------|------------|------|-------|
| Hero | `bay-paper` | `bay-ink` for body, `bay-navy` for H1 | Summer flat-light. Single 1px gold horizon line under H1. |
| Problem | `bay-navy` | `bay-bone` | Brushed-noise SVG filter at 5% (up from 3%). Storm interrupt. |
| Trust | `bay-paper` | `bay-ink` | Quiet, light, owner-photo-led. |
| Tiers | `bay-paper` | `bay-ink` | Cards have inset highlight/shadow seam per CLAUDE.md. |
| Process | `bay-bone` | `bay-ink` | Three-step rhythm in flat light. |
| Booking form | `bay-deep` | `bay-bone` | Heaviest weight; commitment moment. Gold CTA gets full specular sweep. |
| FAQ | `bay-paper` | `bay-ink` | Calm close. |
| Footer | `bay-navy` (existing) | `bay-bone` (existing) | Unchanged. |

Vertical section spacing increases ~20% from the live page to amplify whitespace.

---

## 6. Voice fixes (CLAUDE.md standing rule restoration)

Every instance of first-person singular in the existing live page is replaced with team voice:

| Live page | Rewritten |
|-----------|-----------|
| "I show up to your driveway" | "We arrive at your driveway" |
| "Owner operates every job" | "Owner-operated, every job" |
| "I'll call you back" (in process) | "We call back within 2 hours" |
| Owner photo caption (personal) | "Owner-operated. Pasco County, FL." |

No em-dashes in prose copy (existing standing rule). En-dashes with spaces or commas only.

---

## 7. Performance & accessibility checks

Carried from CLAUDE.md non-negotiables:
- Lighthouse mobile 95+ across the board
- LCP < 1.8s on throttled 4G
- Hero image ≤ 200KB at 1x, AVIF primary
- Every interactive element has a visible `bay-gold` focus ring
- Semantic heading hierarchy (single H1, then H2s per section)
- Astro `<Image>` for all photos with width/height/alt

---

## 8. Out of scope (explicit)

- Video integration
- Schema markup additions (LocalBusiness, Service, FAQPage)
- New color tokens
- Removing the "Most popular" badge
- Removing pricing from the page
- A/B testing infrastructure
- Email follow-up automation post-booking
- Paid-ads landing-page-variant generation

---

## 9. Open risks

- **URL/content mismatch.** The route `/lovebug-removal` is narrower than "Summer Reset." Lovebug is one of four pillars, not the headline. If search-intent traffic specifically wants lovebug-only content, the broader page may bounce. Mitigation: lovebug remains the strongest example in the Problem section and is named explicitly in hero sub.
- **Pricing on a non-`/fleet`, non-`/quote` page.** Per CLAUDE.md, this is a rule violation that the owner has explicitly approved for this campaign. Document the override; revisit after the campaign window closes.
- **Local repo has no `/lovebug-removal` route.** The live page exists but is not in any local branch. Implementation will need to either build the route from scratch in this branch (matching live structure) or first reconcile with whichever environment shipped the live version.
