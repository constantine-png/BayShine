# Bay Shine Auto & Marine Detailing — Build Brief for Claude Code
Save this file as BUILD_BRIEF.md at the root of the project. Reference it from the first Claude Code prompt. Keep it updated as the source of truth.

## 1. Project context
Solo mobile operation serving Pasco County and North Hillsborough County, FL. Two distinct customer types:

Private owners — recurring residential clients in affluent zips. Sold on outcome, trust, and the operator's obvious obsession with the work.
Fleet/B2B — lot managers, fleet coordinators, property managers. Sold on throughput, reliability, unit economics.

Both share the site but never share copy. Every CTA, headline, and section must clearly serve one or the other.
Voice: confident, direct, professional. Not friendly. Not corporate. Not "we're passionate about cars." Constantine has a writing background. The site reads like a person who knows the work, not a marketing department.

## 2. Stack & infrastructure

- Framework: Astro
- Domain: bayshine.net
- Hosting: Vercel (preferred) or Netlify
- Forms: server endpoints sending to email + SMS (use Resend or Postmark for email, Twilio for SMS)
- Page speed target: Lighthouse 95+ on mobile, non-negotiable for local SEO
- Image strategy: Astro `<Image>` component with AVIF/WebP, lazy load below fold
- No CMS for v1. Blog posts are MDX files in /src/content/blog/. Add Sanity or Decap later only if posting volume demands it.


## 3. Brand system — locked
### Color palette
| Token | Hex | Use |
|---|---|---|
| --bay-navy | #0F1B2D | Primary base, hero backgrounds, footer |
| --bay-deep | #0A1220 | Deep shadow, contrast accents |
| --bay-gold | #C9A961 | Primary accent, CTAs, highlights, ridge gloss |
| --bay-bone | #F5F2EC | Light section backgrounds, body on dark |
| --bay-slate | #7A8294 | Secondary text, borders, dividers |
| --bay-white | #FFFFFF | Pure white only for active CTAs and key contrasts |

Navy is the base. Gold is the only accent — used sparingly, like trim. Bone is the warm neutral. Do not introduce a sixth color.

### Typography

- Headline: GT America (paid license) — fallback to Inter Tight if license is not yet purchased
- Body: Inter
- Weights to load: Inter 400, 500, 600 / GT America (or Inter Tight) 500, 600, 700
- No serifs anywhere. Confident grotesque/geometric only.


## 4. Visual direction — "wrapped in ridges, glossed and dressed"
Translate to specific implementation behaviors:

- Section containers have a subtle beveled edge: 1px inset top/left highlight at rgba(255,255,255,0.04), 1px outer bottom/right shadow at rgba(0,0,0,0.5). Mimics light catching a polished panel seam.
- Card and CTA gloss: linear-gradient overlay on top 20px, rgba(255,255,255,0.08) fading to transparent. Looks like clear coat under sun.
- Hover sweep: primary CTAs only. A thin diagonal highlight (8% white, 1px wide, 45deg) travels across the button on hover, 600ms. Use sparingly. Implement with a pseudo-element + transform animation.
- Dividers are not flat lines. Stack a 1px highlight (rgba(255,255,255,0.06)) over a 1px shadow (rgba(0,0,0,0.4)). The seam is felt, not stated.
- Micro-detail nooks:
  - Logo gets a single 1px highlight pixel at the top-left of any "S" curve
  - Trust bar icons have a faint specular dot
  - Footer fades from navy to --bay-deep on a vertical gradient — like a polished hood under shop lighting

- Motion: 400–600ms ease-out curves on scroll reveals. Use Framer Motion or vanilla CSS + IntersectionObserver. No bounce, no spring overshoot. Premium products do not bounce.
- Background texture: very subtle vertical brushed-metal noise on dark sections, ~3% opacity. SVG noise filter, not a raster image.


## 5. Pricing rules — critical
No pricing appears anywhere on the public website. Not on service cards, not in copy, not in the FAQ. Pricing only appears in two places:

1. Google Business Profile — "Starting at $185" and nowhere else
2. Quote Estimator output — only after the user has selected vehicle type, service, and condition

The internal rate card below is for the quote estimator's backend logic and for Constantine's reference. Hardcode it in /src/data/pricing.ts so it can be updated in one place.

### Internal rate card
```
EXTERIOR DETAIL (decon, synthetic clay, sealant)
  Sedan / Coupe:        $185
  Mid-size SUV / Truck: $225
  3-row / Lifted / Van: $275

FULL DETAIL (interior + exterior, standard condition)
  Sedan / Coupe:        $255
  Mid-size SUV / Truck: $295
  3-row / Lifted / Van: $345

FULL DETAIL — HEAVY CONDITION
  Sedan / Coupe:        $325–$395
  Mid-size SUV / Truck: $375–$475
  3-row / Lifted / Van: $450–$575

THE BAY SHINE STANDING DETAIL (6-week recurring)
  Sedan / Coupe:        $199 / visit (after $255 baseline)
  Mid-size SUV / Truck: $239 / visit (after $295 baseline)
  3-row / Lifted / Van: $279 / visit (after $345 baseline)
  Cancel anytime. Priority slot. First visit always at standard rate.

CERAMIC COATING:        $750–$799 (sedan), +$100 (SUV), +$150 (3-row)
HARD WATER / ACID BATH: $100–$250
MARINE GELCOAT:         $200–$500

FLEET / B2B
  Lot maintenance wash:    $1.00–$1.25/vehicle (volume floor: 30 units)
  Sales-prep detail:       $75–$100/vehicle
  Recon / heavy detail:    $150–$250/vehicle
  Fleet van wash:          $9–$15/vehicle
  Apartment resident:      $30/month subscription per resident
```

Floors that may not be undercut: $1.00/lot wash, $185 exterior sedan, $255 full sedan. Quote estimator never returns a number below floor.

## 6. Ideal customer profile (use for copy decisions)
Best zips for the recurring program: 33556, 33548, 33558, 33647, 33544, 33543, 34638. Median household income $115k–$150k, 25–36% of households earn $200k+. Multi-vehicle households, lawn-pool-pest already outsourced, $55k+ daily driver.

Lower-income zips in the service area (34654, 34669, 33574) get one-time and fleet work, not the standing-detail program. Don't write recurring-program copy aimed at them.

## 7. Site map
```
/                       Home
/full-detail            Full detail (private)
/exterior-detail        Exterior detail (private)
/ceramic-coating        Ceramic coating
/recon                  Heavy detail / recon
/boat-detailing         Marine
/fleet                  Fleet/B2B landing
/lot-maintenance        Lot wash program
/apartments             Apartment resident program
/quote                  Quote estimator
/contact                Contact + Book Now
/blog                   Blog index
/blog/[slug]            Blog post
/field-guide            Detailer's Field Guide (placeholder + email capture)
/tools                  Brush/sponge shop (placeholder + email capture)
/about                  Voice-only about page (no photos, no face)
/service-area           Coverage map + zip list (SEO page)
```
/tools and /field-guide exist now as "Coming soon" pages with email capture. Do not omit them.

## 8. Page-by-page specs

### / Home

- Hero: full-viewport navy. Headline: "Mobile auto and marine detailing. Pasco County and North Hillsborough." Subhead: one line about the standing-detail program. Two CTAs side-by-side: "Book Now" (primary, gold) and "Get a Quote" (secondary, outlined). Below CTAs: animated before/after slider — drag-reveal, not a GIF. Use a real shot.
- Trust bar directly under hero: Fully Insured · Serving 19 Zips Across Pasco & N. Hillsborough · Years Active · Google Rating. Real numbers only — leave out anything not yet true.
- Split section: left half private owner copy + CTA to /full-detail, right half fleet copy + CTA to /fleet. Different headlines, different language. Private side talks outcome. Fleet side talks per-unit cost and turnaround.
- Services grid: six cards (Full Detail, Exterior, Ceramic, Recon, Boat, Fleet). Icon, one-line outcome description, "See details →" link. No prices.
- Standing Detail section: dedicated band selling the 6-week recurring program. This is the headline product. Copy explains: baseline first visit, then maintenance rhythm, priority booking, locked rate.
- Before/after gallery: filterable by category (cars / boats / fleet / recon). Real shots only. Minimum 12 to launch.
- Reviews: embedded Google reviews carousel with real stars and names. Use Featurable or similar API, not screenshots.
- FAQ accordion: answers real objections, doubles as SEO content. Schema-marked.
- Sticky header: phone (813) 324-5522 and Book Now button visible at all times. Mobile = sticky bottom bar with same two actions.
- Footer: service area zip list (text, crawlable), nav links, insurance badge, social if/when ready.

### /fleet

- Headline framed around throughput: "80 vehicles, 4 hours, $1.10 per unit."
- Tiered pricing table — this is the one place full pricing appears, because B2B buyers expect it.
- "How it works" — 3 steps, no fluff: walk lot → standing schedule → invoice monthly.
- Certificate of insurance download link (placeholder until issued).
- Inquiry form: Company name, fleet size, service needed, frequency, decision-maker name, decision-maker phone. Not a generic contact form.

### /quote

- Standalone page + embeddable widget (build as an Astro island, exportable for embed later).
- Step 1: Vehicle type — Sedan / Mid-size SUV / 3-row SUV / Truck / Van / Boat.
- Step 2: Service — Exterior, Full Detail, Ceramic, Recon, Boat. Multi-select disabled — one service at a time.
- Step 3: Condition — Light / Moderate / Heavy. Each has a one-line description.
- Output: price range pulled from pricing.ts. No form submission required to see the number.
- Below the number: "Lock this in — text Constantine" CTA. Tap → opens SMS to the business number, prefilled with the quote summary.

### /blog

- Visually distinct from the rest of the site. Same nav and footer, but the body uses a looser grid, hand-drawn or risograph-style accents on category headers, and a slight zine aesthetic. Like walking from the showroom into the workshop. Slight tonal shift in palette: more bone background, gold accents more present.
- Category filters: Car Care / Boat & Marine / Fleet Tips / Local (Tampa Bay).
- Estimated read time on each post.
- Related posts at the bottom.
- Schema markup on every post for Google rich results.
- Author byline: "Bay Shine Detailing" — no face, no photo.
- Post template: MDX, supports inline images, code blocks for product specs, callout boxes for "Field Note" asides.
- Email capture: inline at end of post, not a popup. "Get the next one." Single field.

### /about
Voice-only. No photo of Constantine. One scrolling page that establishes:

- Who runs the business and why
- The methodology (panel-by-panel sun-safe technique, synthetic clay standard, mobile)
- The standing-detail philosophy
- Why other detailers will find resources here too

This page exists primarily to establish trust with the educational audience (other detailers researching technique). It's a credibility play.

### /service-area
SEO page. Interactive map showing radius. Zip list as crawlable text below. Each zip becomes a small section: "Mobile detailing in Lutz (33558)" with a paragraph of locally relevant copy. Yes, it's SEO bait. Do it well, do it once.

### /tools and /field-guide
Placeholder pages. Each has a hero, a paragraph explaining what's coming, and an email capture. /tools mentions the brush and sponge line in development. /field-guide offers a sample chapter download in exchange for email.

## 9. Forms and notifications
### Book Now form — minimal fields:

- Name
- Phone
- Vehicle (year, make, model)
- Address (zip required, full address optional)
- Preferred day/time window
- Anything else (free text)

### On submit:

- SMS to (813) 324-5522 with all fields formatted
- Email to Constantine's inbox with same content
- User sees confirmation page: "You're on the list. Constantine will text you within 2 hours."

Fleet inquiry form — separate handler, separate email subject line so it routes to a different folder.
Quote estimator — does not require submission to see the number. Optional "send me this quote" SMS link below the result.

## 10. Service area (full zip list)
```
Pasco County:        34637, 34638, 34639, 33544, 34610, 33576,
                     33543, 33545, 34654, 34669, 33574
North Hillsborough:  33558, 33559, 33548, 33549, 33556, 33647,
                     34655, 33613
```
19 zips total. Generate per-zip sections on /service-area. The high-affluence zips (33556, 33548, 33558, 33647, 33544, 33543, 34638) get longer, more recurring-program-focused copy. The lower-income zips get shorter copy focused on one-time service.

## 11. Photography requirements before launch
Site cannot ship with stock car photos. Required minimum:

- 8 real before/after pairs (mix of sedan, SUV, truck)
- 3 wide hero candidates (one in dappled sun, one twilight, one dawn)
- 1 boat detail in progress
- 1 fleet/lot shot showing scale
- 5 detail shots: clay bar in hand, foam on panel, brush on wheel, microfiber close-up, drying shot
- Vertical and horizontal versions of each

Shoot before development hits the gallery section.

## 12. Anti-patterns — do not build

- Newsletter popup that interrupts reading
- Instagram embed grids
- Generic chatbot ("leave your email")
- Team page with photos
- "Passionate about cars" anywhere in copy
- Stock photography
- Star ratings invented out of nothing
- Pricing on service cards
- "Get a Free Quote!" exclamation-mark CTAs
- Soft language: "we'd love to," "our friendly team," "feel free to"
- Carousel hero with three rotating slides — pick one image, commit
