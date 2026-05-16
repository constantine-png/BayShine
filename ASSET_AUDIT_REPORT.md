# BayShine Asset Audit Report
Generated: 2026-05-01
Total slots identified: 48
Currently filled: 14
Awaiting asset: 34

---

## Section 1 — By Page

### Route: /
**Hero**
| Slot | Type | Filename Expected | Status | Dimensions | Format | Notes |
|---|---|---|---|---|---|---|
| Hero ambient background | Video | ambient-beads-on-hood.mp4 | FILLED | Full-viewport | .mp4 | Referenced in AMBIENT_MAP, file confirmed on disk |
| Hero OG image | Image | og-default.png | MISSING | 1200×630 | .png/.jpg | SEO.astro defaults to /og-default.png; file does not exist |

**Trust Bar**
| Slot | Type | Filename Expected | Status | Dimensions | Format | Notes |
|---|---|---|---|---|---|---|
| Google Rating | Content | N/A (text) | PLACEHOLDER | N/A | N/A | Commented out in TrustBar.astro — `<!-- FOLLOWUP: Uncomment when reviews are live -->` |

**Service Reveal Sequence (ServiceRevealSequence.astro)**
| Slot | Type | Filename Expected | Status | Dimensions | Format | Notes |
|---|---|---|---|---|---|---|
| Exterior Detail card video | Video | showcase-exterior.mp4 | FILLED | 16:9 | .mp4 | ASSET_REGISTRY.showcaseExterior = true; file on disk |
| Full Detail card video | Video | showcase-interior.mp4 | FILLED | 16:9 | .mp4 | ASSET_REGISTRY.showcaseInterior = true; file on disk |
| Decontamination card video | Video | showcase-decontamination.mp4 | FILLED | 16:9 | .mp4 | ASSET_REGISTRY.showcaseDecon = true; file on disk |
| Paint Correction card video | Video | showcase-polish.mp4 | FILLED | 16:9 | .mp4 | ASSET_REGISTRY.showcasePolish = true; file on disk |
| Ceramic Coating card video | Video | comparison-bayshine-detail.mp4 | FILLED | 16:9 | .mp4 | ASSET_REGISTRY.comparisonBayshine = true; file on disk |
| Fleet Programs card video | Video | ambient-fleet.mp4 | FILLED | 16:9 | .mp4 | ASSET_REGISTRY.ambientFleet = true; file on disk |

**Gallery (GalleryFilter.tsx — referenced but page not yet using the component)**
| Slot | Type | Filename Expected | Status | Dimensions | Format | Notes |
|---|---|---|---|---|---|---|
| Sedan exterior before/after | Image | gallery-sedan-ext-1-before.jpg + after | PLACEHOLDER | min 800×600 | .jpg/.avif | data-photo-needed in GalleryFilter island; 12 slots total |
| SUV full detail before/after | Image | gallery-suv-full-2-before.jpg + after | PLACEHOLDER | min 800×600 | .jpg/.avif | id:2 |
| Truck exterior before/after | Image | gallery-truck-ext-3-before.jpg + after | PLACEHOLDER | min 800×600 | .jpg/.avif | id:3 |
| Coupe interior before/after | Image | gallery-coupe-int-4-before.jpg + after | PLACEHOLDER | min 800×600 | .jpg/.avif | id:4 |
| SUV wheels before/after | Image | gallery-suv-wheels-5-before.jpg + after | PLACEHOLDER | min 800×600 | .jpg/.avif | id:5 |
| Neglected sedan recon before/after | Image | gallery-recon-sedan-6-before.jpg + after | PLACEHOLDER | min 800×600 | .jpg/.avif | id:6 |
| Trade-in SUV recon before/after | Image | gallery-recon-suv-7-before.jpg + after | PLACEHOLDER | min 800×600 | .jpg/.avif | id:7 |
| Heavily soiled truck interior before/after | Image | gallery-recon-truck-8-before.jpg + after | PLACEHOLDER | min 800×600 | .jpg/.avif | id:8 |
| Dealer lot before/after | Image | gallery-fleet-lot-11-before.jpg + after | PLACEHOLDER | 16:9 min 1200×675 | .jpg/.avif | id:11 |
| Fleet vans before/after | Image | gallery-fleet-vans-12-before.jpg + after | PLACEHOLDER | min 800×600 | .jpg/.avif | id:12 |

**Note:** The GalleryFilter island exists (src/components/islands/GalleryFilter.tsx) but is not currently imported on any page. The brief specifies a before/after gallery on the homepage (minimum 12 pairs). The gallery island is built but unplaced.

---

### Route: /full-detail
| Slot | Type | Filename Expected | Status | Dimensions | Format | Notes |
|---|---|---|---|---|---|---|
| Hero media (video conditional) | Video | showcase-polish.mp4 | FILLED | 4:3 | .mp4 | ASSET_REGISTRY.showcasePolish = true; falls back to PhotoPlaceholder if false |
| Hero photo fallback | Image | — | PLACEHOLDER | 4:3 min 800×600 | .jpg/.avif | PhotoPlaceholder active if ASSET_REGISTRY.showcasePolish = false |
| OG image | Image | og-full-detail.jpg | MISSING | 1200×630 | .jpg | No page-specific ogImage prop passed; falls back to og-default.png |

---

### Route: /exterior-detail
| Slot | Type | Filename Expected | Status | Dimensions | Format | Notes |
|---|---|---|---|---|---|---|
| Hero media (video conditional) | Video | showcase-decontamination.mp4 | FILLED | 4:3 | .mp4 | ASSET_REGISTRY.showcaseDecon = true; file confirmed on disk |
| Hero photo fallback | Image | — | PLACEHOLDER | 4:3 min 800×600 | .jpg/.avif | PhotoPlaceholder active if showcaseDecon = false |
| OG image | Image | og-exterior-detail.jpg | MISSING | 1200×630 | .jpg | Falls back to og-default.png |

---

### Route: /ceramic-coating
| Slot | Type | Filename Expected | Status | Dimensions | Format | Notes |
|---|---|---|---|---|---|---|
| Hero media (video conditional) | Video | comparison-bayshine-detail.mp4 | FILLED | 4:3 | .mp4 | ASSET_REGISTRY.comparisonBayshine = true; file on disk |
| OG image | Image | og-ceramic-coating.jpg | MISSING | 1200×630 | .jpg | Falls back to og-default.png |

---

### Route: /recon
| Slot | Type | Filename Expected | Status | Dimensions | Format | Notes |
|---|---|---|---|---|---|---|
| Hero media | None | — | N/A | — | — | No image or video in the hero; text-only hero |
| Ambient background | Video | showcase-polish.mp4 (tier 2) | FILLED | Full-viewport | .mp4 | ambientVideo.ts SHOWCASE_MAP falls back to showcasePolish for /recon |
| OG image | Image | og-recon.jpg | MISSING | 1200×630 | .jpg | Falls back to og-default.png |

---

### Route: /fleet
| Slot | Type | Filename Expected | Status | Dimensions | Format | Notes |
|---|---|---|---|---|---|---|
| Ambient background | Video | ambient-fleet.mp4 | FILLED | Full-viewport | .mp4 | AMBIENT_MAP tier 1; file on disk |
| COI download | Document | coi-bayshine.pdf | MISSING | — | .pdf | Brief calls for "Certificate of insurance download link (placeholder until issued)"; not yet implemented in page |
| OG image | Image | og-fleet.jpg | MISSING | 1200×630 | .jpg | Falls back to og-default.png |

---

### Route: /apartments
| Slot | Type | Filename Expected | Status | Dimensions | Format | Notes |
|---|---|---|---|---|---|---|
| Ambient background | Video | ambient-apartments.mp4 | MISSING | Full-viewport | .mp4 | ASSET_REGISTRY.ambientApts = false; comment "not yet filmed"; falls back to tier 3 homepage ambient |
| OG image | Image | og-apartments.jpg | MISSING | 1200×630 | .jpg | Falls back to og-default.png |

---

### Route: /lot-maintenance
| Slot | Type | Filename Expected | Status | Dimensions | Format | Notes |
|---|---|---|---|---|---|---|
| Ambient background | Video | ambient-beads-on-hood.mp4 (tier 3) | FILLED | Full-viewport | .mp4 | No page-specific ambient; falls back to homepage ambient |
| OG image | Image | og-lot-maintenance.jpg | MISSING | 1200×630 | .jpg | Falls back to og-default.png |

---

### Route: /quote
| Slot | Type | Filename Expected | Status | Dimensions | Format | Notes |
|---|---|---|---|---|---|---|
| Ambient background | Video | ambient-beads-on-hood.mp4 (tier 3) | FILLED | Full-viewport | .mp4 | Falls back to homepage ambient |
| OG image | Image | og-quote.jpg | MISSING | 1200×630 | .jpg | Falls back to og-default.png |

---

### Route: /contact
| Slot | Type | Filename Expected | Status | Dimensions | Format | Notes |
|---|---|---|---|---|---|---|
| Ambient background | Video | ambient-beads-on-hood.mp4 (tier 3) | FILLED | Full-viewport | .mp4 | Falls back to homepage ambient |
| OG image | Image | og-contact.jpg | MISSING | 1200×630 | .jpg | Falls back to og-default.png |

---

### Route: /about
| Slot | Type | Filename Expected | Status | Dimensions | Format | Notes |
|---|---|---|---|---|---|---|
| No photos per brief | — | — | N/A | — | — | Brief explicitly: "No photo of Constantine. Voice-only page." |
| Ambient background | Video | ambient-beads-on-hood.mp4 (tier 3) | FILLED | Full-viewport | .mp4 | Falls back to homepage ambient |

---

### Route: /tools
| Slot | Type | Filename Expected | Status | Dimensions | Format | Notes |
|---|---|---|---|---|---|---|
| Ambient background | Video | ambient-beads-on-hood.mp4 (tier 3) | FILLED | Full-viewport | .mp4 | Falls back to homepage ambient |
| OG image | Image | og-tools.jpg | MISSING | 1200×630 | .jpg | Falls back to og-default.png |

---

### Route: /field-guide
| Slot | Type | Filename Expected | Status | Dimensions | Format | Notes |
|---|---|---|---|---|---|---|
| Ambient background | Video | ambient-beads-on-hood.mp4 (tier 3) | FILLED | Full-viewport | .mp4 | Falls back to homepage ambient |
| OG image | Image | og-field-guide.jpg | MISSING | 1200×630 | .jpg | Falls back to og-default.png |
| Chapter 07 (Marine gel coat) | Content | — | MISSING | — | — | FieldGuideBook.tsx shows chapters 01–06 and 08; chapter 07 is absent from the CHAPTERS array. Brief says 8 chapters. |

---

### Route: /blog
| Slot | Type | Filename Expected | Status | Dimensions | Format | Notes |
|---|---|---|---|---|---|---|
| Ambient background | Video | ambient-beads-on-hood.mp4 (tier 3) | FILLED | Full-viewport | .mp4 | Falls back to homepage ambient |
| OG image | Image | og-blog.jpg | MISSING | 1200×630 | .jpg | Falls back to og-default.png |

---

### Route: /blog/[slug]
**MDX asset references — all posts scanned:**

| Post Slug | Asset Type | Filename | Status | Notes |
|---|---|---|---|---|
| car-wash-planned-obsolescence | Video | /assets/video/AtTheCarWash.mp4 | FILLED | Raw VideoLoop component call in MDX body; file confirmed on disk |
| all other posts | — | none | N/A | No image or video references in remaining MDX files |

**Note on raw `<img>` violations:** No raw `<img>` tags found in MDX files. The VideoLoop component is correctly used in car-wash-planned-obsolescence.mdx.

**Note on `how-to-prep-your-car-for-detailing.mdx`:** Missing `draft`, `serviceTopic`, `postType`, and `featured` frontmatter fields. The config.ts schema provides defaults (draft: false, serviceTopic: 'general', etc.) so this will not cause a build error, but the post will not appear in any RelatedBlogBox since serviceTopic defaults to 'general'.

---

### Route: /service-area (index)
| Slot | Type | Filename Expected | Status | Dimensions | Format | Notes |
|---|---|---|---|---|---|---|
| Interactive map | Component | — | PLACEHOLDER | 300px height | — | data-map-needed attribute present; `<!-- FOLLOWUP -->` comment in page source for Google Maps or Leaflet embed |
| Ambient background | Video | ambient-beads-on-hood.mp4 (tier 3) | FILLED | Full-viewport | .mp4 | Falls back to homepage ambient |

---

### Route: /service-area/[zip] (7 static pages: 33556, 33548, 33558, 33647, 33544, 33543, 34638)
| Slot | Type | Filename Expected | Status | Dimensions | Format | Notes |
|---|---|---|---|---|---|---|
| Ambient background | Video | ambient-beads-on-hood.mp4 (tier 3) | FILLED | Full-viewport | .mp4 | Falls back to homepage ambient for all 7 zip pages |
| Blog internal links | Content | — | PLACEHOLDER | — | — | data-blog-link-needed on two `<a href="#">` elements; `FOLLOWUP` comment in [zip].astro |

---

### Route: /404
| Slot | Type | Filename Expected | Status | Dimensions | Format | Notes |
|---|---|---|---|---|---|---|
| Logo (raw img) | Image | /assets/logo/bayshine_logo_vector.png | FILLED | 160×53 display | .png | Raw `<img>` tag — violates no-raw-img rule from CLAUDE.md |

---

## Section 2 — By Asset Type

### Videos
| Filename | Used On | Status | Priority |
|---|---|---|---|
| ambient-beads-on-hood.mp4 | /, all pages fallback via tier 3 | FILLED | — |
| ambient-fleet.mp4 | /fleet, ServiceRevealSequence card 6 | FILLED | — |
| ambient-apartments.mp4 | /apartments (tier 1 ambient) | MISSING | HIGH |
| showcase-exterior.mp4 | ServiceRevealSequence card 1, /exterior-detail page ambient (tier 2) | FILLED | — |
| showcase-interior.mp4 | ServiceRevealSequence card 2, /full-detail page ambient (tier 2) | FILLED | — |
| showcase-decontamination.mp4 | ServiceRevealSequence card 3 | FILLED | — |
| showcase-polish.mp4 | ServiceRevealSequence card 4, /full-detail hero, /recon ambient (tier 2) | FILLED | — |
| showcase-coating.mp4 | Listed in SHOWCASE_MAP for /ceramic-coating but ASSET_REGISTRY key is `showcaseCoating` = true | MISSING | HIGH |
| comparison-bayshine-detail.mp4 | /ceramic-coating hero, ServiceRevealSequence card 5 | FILLED | — |
| comparison-standard.mp4 | Not yet used in any page — ASSET_REGISTRY.comparisonStandard = false | MISSING | LOW |
| AtTheCarWash.mp4 | src/content/blog/car-wash-planned-obsolescence.mdx | FILLED | — |

**Note on showcase-coating.mp4:** ASSET_REGISTRY has `showcaseCoating: true` and ambientVideo.ts SHOWCASE_MAP maps `/ceramic-coating` to `{ key: 'showcaseCoating', file: 'showcase-coating.mp4' }`. However `showcase-coating.mp4` is NOT present in public/assets/video/ — only `comparison-bayshine-detail.mp4` is present. The /ceramic-coating hero uses `comparisonBayshine` (not `showcaseCoating`), so the hero works. But if AmbientBackground tries to serve /ceramic-coating via SHOWCASE_MAP tier 2 and the file doesn't exist it will silently fail to tier 3 (homepage ambient). The registry marks it true, which is incorrect. This is a registry/disk mismatch.

---

### Images
| Filename | Used On | Status | Priority |
|---|---|---|---|
| /assets/logo/bayshine_logo_vector.png | Header, Footer, 404 page | FILLED | — |
| og-default.png | All pages (SEO fallback) | MISSING | HIGH |
| og-full-detail.jpg | /full-detail | MISSING | MEDIUM |
| og-exterior-detail.jpg | /exterior-detail | MISSING | MEDIUM |
| og-ceramic-coating.jpg | /ceramic-coating | MISSING | MEDIUM |
| og-recon.jpg | /recon | MISSING | LOW |
| og-fleet.jpg | /fleet | MISSING | MEDIUM |
| og-apartments.jpg | /apartments | MISSING | LOW |
| og-lot-maintenance.jpg | /lot-maintenance | MISSING | LOW |
| og-quote.jpg | /quote | MISSING | LOW |
| og-contact.jpg | /contact | MISSING | LOW |
| og-tools.jpg | /tools | MISSING | LOW |
| og-field-guide.jpg | /field-guide | MISSING | LOW |
| og-blog.jpg | /blog | MISSING | LOW |
| gallery-sedan-ext-1 (before+after) | GalleryFilter island (currently unplaced on index) | PLACEHOLDER | HIGH |
| gallery-suv-full-2 (before+after) | GalleryFilter island | PLACEHOLDER | HIGH |
| gallery-truck-ext-3 (before+after) | GalleryFilter island | PLACEHOLDER | HIGH |
| gallery-coupe-int-4 (before+after) | GalleryFilter island | PLACEHOLDER | HIGH |
| gallery-suv-wheels-5 (before+after) | GalleryFilter island | PLACEHOLDER | HIGH |
| gallery-recon-sedan-6 (before+after) | GalleryFilter island | PLACEHOLDER | HIGH |
| gallery-recon-suv-7 (before+after) | GalleryFilter island | PLACEHOLDER | MEDIUM |
| gallery-recon-truck-8 (before+after) | GalleryFilter island | PLACEHOLDER | MEDIUM |
| gallery-fleet-lot-11 (before+after) | GalleryFilter island | PLACEHOLDER | MEDIUM |
| gallery-fleet-vans-12 (before+after) | GalleryFilter island | PLACEHOLDER | LOW |
| favicon.svg | All pages (BaseLayout link) | FILLED | — |

---

### SVG / Ornaments / Illustrations
| Filename | Used On | Status | Notes |
|---|---|---|---|
| /noise.svg | global.css (body::after background) | FILLED | Brushed noise texture; file on disk |
| Inline SVGs (icons in Header, TrustBar, etc.) | Multiple components | FILLED | All inline — no external SVG files needed |

---

### Logo Files
| Filename | Used On | Status | Notes |
|---|---|---|---|
| /assets/logo/bayshine_logo_vector.png | Header (`<img>`), Footer (`<img>`), 404 (`<img>`) | FILLED | PNG format — brief/CLAUDE.md calls for SVG; raw `<img>` tags violate the no-raw-img rule; three violations (Header.astro, Footer.astro, 404.astro) |
| logo-primary.svg | Not yet created | MISSING | Should exist as an SVG and be served via Astro `<Image>` component; current PNG works as a stopgap |

---

## Section 3 — Missing Assets, Prioritized

### Tier 1 — HIGH (blocking visible degradation or site function)

| Filename | Page/Context | Expected Dimensions | Suggested Content |
|---|---|---|---|
| og-default.png | All pages (OG share fallback) | 1200×630 | BayShine wordmark on --bay-navy background, gold accent line, tagline "Mobile auto detailing. Pasco County." |
| ambient-apartments.mp4 | /apartments ambient background (tier 1) | Full-viewport loop | On-property service visit footage: technician working a vehicle in a residential parking lot |
| showcase-coating.mp4 | Listed in ASSET_REGISTRY as true but missing from disk; used in SHOWCASE_MAP for /ceramic-coating ambient | Full-viewport loop | Ceramic application sequence: IPA wipe, coating product spread, leveling pass on a panel |
| gallery-sedan-ext-1-before.jpg + after.jpg | GalleryFilter island (min 12 before/after pairs required per brief) | min 800×600 | Sedan paint before decon clay, and after clay+sealant — the difference should be dramatic under lighting |
| gallery-suv-full-2-before.jpg + after.jpg | GalleryFilter island | min 800×600 | Mid-size SUV full detail before/after showing interior and exterior |
| gallery-truck-ext-3-before.jpg + after.jpg | GalleryFilter island | min 800×600 | Truck exterior decon before/after |
| gallery-coupe-int-4-before.jpg + after.jpg | GalleryFilter island | min 800×600 | Coupe interior before/after extraction |
| gallery-suv-wheels-5-before.jpg + after.jpg | GalleryFilter island | min 800×600 | Wheel close-up before iron fallout removal and after |
| gallery-recon-sedan-6-before.jpg + after.jpg | GalleryFilter island | min 800×600 | Heavily neglected sedan before/after recon |

---

### Tier 2 — MEDIUM (section degrades gracefully, but visually incomplete)

| Filename | Page/Context | Expected Dimensions | Suggested Content |
|---|---|---|---|
| og-full-detail.jpg | /full-detail OG share | 1200×630 | Interior extraction or paint sealant application in progress, --bay-navy letterbox treatment |
| og-fleet.jpg | /fleet OG share | 1200×630 | Wide lot shot showing scale, multiple vehicles |
| og-exterior-detail.jpg | /exterior-detail OG share | 1200×630 | Clay bar on panel close-up, or beading water on freshly sealed paint |
| og-ceramic-coating.jpg | /ceramic-coating OG share | 1200×630 | Water beading on coated panel in sunlight |
| gallery-recon-suv-7-before.jpg + after.jpg | GalleryFilter island | min 800×600 | Trade-in SUV recon before/after |
| gallery-recon-truck-8-before.jpg + after.jpg | GalleryFilter island | min 800×600 | Heavily soiled truck interior before/after recon |
| gallery-fleet-lot-11-before.jpg + after.jpg | GalleryFilter island | 16:9 min 1200×675 | Wide dealer lot before/after lot wash |
| logo-primary.svg | Header, Footer, 404 — replace PNG | Scalable vector | BayShine wordmark in SVG; current PNG at 120×40 and 200×67 display sizes |
| coi-bayshine.pdf | /fleet (Certificate of Insurance download) | PDF | Certificate of general liability insurance — brief specifies a download link |

---

### Tier 3 — LOW (nice-to-have, future iteration)

| Filename | Page/Context | Expected Dimensions | Suggested Content |
|---|---|---|---|
| og-recon.jpg | /recon OG share | 1200×630 | Before/after recon treatment panel |
| og-apartments.jpg | /apartments OG share | 1200×630 | On-property service scene, residential parking |
| og-lot-maintenance.jpg | /lot-maintenance OG share | 1200×630 | Dealer lot rows of vehicles |
| og-quote.jpg | /quote OG share | 1200×630 | Quote estimator UI screenshot or abstract graphic |
| og-contact.jpg | /contact OG share | 1200×630 | Booking confirmation aesthetic — minimal, navy/gold |
| og-tools.jpg | /tools OG share | 1200×630 | Detail brush or applicator product rendering |
| og-field-guide.jpg | /field-guide OG share | 1200×630 | Field guide book cover visual |
| og-blog.jpg | /blog OG share | 1200×630 | Field Notes masthead treatment |
| comparison-standard.mp4 | Future comparison section (ASSET_REGISTRY.comparisonStandard = false) | Full-viewport loop | Standard wash result for contrast with comparison-bayshine-detail |
| gallery-fleet-vans-12-before.jpg + after.jpg | GalleryFilter island | min 800×600 | Fleet van wash before/after |

---

## Section 4 — Naming Convention Reference

| Category | Pattern | Example |
|---|---|---|
| Ambient video (page-specific) | ambient-{descriptor}.mp4 | ambient-beads-on-hood.mp4, ambient-fleet.mp4 |
| Showcase video (service/process) | showcase-{process-name}.mp4 | showcase-exterior.mp4, showcase-polish.mp4 |
| Comparison video | comparison-{descriptor}.mp4 | comparison-bayshine-detail.mp4 |
| Gallery photo (before) | gallery-{category}-{descriptor}-{id}-before.jpg | gallery-sedan-ext-1-before.jpg |
| Gallery photo (after) | gallery-{category}-{descriptor}-{id}-after.jpg | gallery-sedan-ext-1-after.jpg |
| OG image (page-specific) | og-{page-slug}.jpg | og-fleet.jpg, og-full-detail.jpg |
| OG image (default fallback) | og-default.png | og-default.png |
| Logo (variant) | logo-{variant}.svg | logo-primary.svg, logo-mark.svg |
| Blog hero (future) | blog-hero-{post-slug}.jpg | blog-hero-iron-decontamination.jpg |
| Document | {type}-bayshine.pdf | coi-bayshine.pdf |

**Root public asset directories:**
- `/public/assets/video/` — all video files
- `/public/assets/logo/` — logo files
- `/public/assets/photos/` — does not yet exist; create for gallery and OG images
- `/public/` — favicon.svg, noise.svg, robots.txt

---

## Section 5 — Asset Registry Schema

```typescript
// Current src/lib/assetRegistry.ts
export const ASSET_REGISTRY = {
  ambientHome:        true,
  ambientFleet:       true,
  ambientApts:        false, // not yet filmed
  showcaseExterior:   true,
  showcaseDecon:      true,
  showcasePolish:     true,
  showcaseInterior:   true,
  showcaseCoating:    true,  // WARNING: marked true but showcase-coating.mp4 is NOT on disk
  comparisonBayshine: true,
  comparisonStandard: false, // not yet filmed
} as const;

export type AssetRegistry = typeof ASSET_REGISTRY;

// Recommended extension for new asset categories
// Add to ASSET_REGISTRY as each file is confirmed on disk:
export const ASSET_REGISTRY_EXTENDED = {
  // ...existing keys...

  // OG images
  ogDefault:        false, // public/og-default.png
  ogFullDetail:     false,
  ogExteriorDetail: false,
  ogCeramic:        false,
  ogFleet:          false,

  // Gallery photos (presence flag per ID, not per before/after)
  galleryPhoto1:    false,
  galleryPhoto2:    false,
  galleryPhoto3:    false,
  galleryPhoto4:    false,
  galleryPhoto5:    false,
  galleryPhoto6:    false,
  galleryPhoto7:    false,
  galleryPhoto8:    false,
  galleryPhoto11:   false,
  galleryPhoto12:   false,

  // Logo
  logoSvg:          false, // public/assets/logo/logo-primary.svg

  // Documents
  coiPdf:           false, // public/assets/docs/coi-bayshine.pdf
} as const;

// The automation pipeline should read ASSET_REGISTRY and ASSET_REGISTRY_EXTENDED
// to determine which VideoLoop and Image components render real content vs. placeholders.
// Shape for pipeline consumption:
interface AssetManifestEntry {
  key: string;
  type: 'video' | 'image' | 'document' | 'svg';
  filename: string;
  publicPath: string;
  present: boolean;
  usedOn: string[];
}
```

---

## Section 6 — Content Slots Beyond Assets

### Blog Post Frontmatter Schema
```typescript
// src/content/config.ts — Zod schema
z.object({
  title:       z.string(),
  description: z.string(),
  pubDate:     z.date(),
  category:    z.enum(['Car Care', 'Boat & Marine', 'Fleet Tips', 'Local']),
  readTime:    z.number().int().positive(),
  featured:    z.boolean().default(false),
  draft:       z.boolean().default(false),
  serviceTopic: z.enum([
    'full-detail', 'exterior-detail', 'ceramic-coating',
    'recon', 'fleet', 'apartments', 'general',
  ]).optional().default('general'),
  postType: z.enum([
    'selling-reason', 'detail-element', 'field-note', 'local',
  ]).optional().default('selling-reason'),
  elements:        z.array(z.string()).optional(),
  elementCategory: z.string().optional(),
})
```

**Notes:**
- `how-to-prep-your-car-for-detailing.mdx` omits `draft`, `serviceTopic`, `postType`, and `featured` — all have defaults so no build error, but the post won't surface in RelatedBlogBox on any service page (serviceTopic defaults to 'general').
- `Boat & Marine` category is defined in the schema but no post uses it. The `'Local'` category is also defined but unused. Brief specifies both as valid categories.
- No post uses the `'local'` postType or has an `elements` / `elementCategory` value set — these fields are wired but dormant.

---

### Service Pages
| Page | Has RelatedBlogBox | serviceTopic | Has FAQ section | Has Pricing |
|---|---|---|---|---|
| /full-detail | YES | 'full-detail' | No | No |
| /exterior-detail | YES | 'exterior-detail' | No | No |
| /ceramic-coating | YES | 'ceramic-coating' | No | No |
| /recon | YES | 'recon' | No | No (quote estimator link) |
| /fleet | YES | 'fleet' | No | Yes (rates section — only fleet page) |
| /apartments | YES | 'apartments' | No | No |
| /lot-maintenance | No | N/A | No | No |
| /about | No | N/A | No | No |

**Posts per serviceTopic (live, non-draft):**
- full-detail: 3 (full-detail-overview, what-full-detail-covers, six-week-rhythm)
- exterior-detail: 3 (exterior-protection-florida, iron-decontamination, lovebug-season)
- ceramic-coating: 3 (ceramic-coating-florida, ceramic-coating-florida-sun, hard-water-spots-tampa)
- recon: 2 (recon-value-overview, recon-math)
- fleet: 2 (fleet-maintenance-overview, lot-managers-wash-quotes)
- apartments: 1 (resident-detailing-program)
- general: 2 (how-to-prep-your-car-for-detailing, car-wash-planned-obsolescence)

---

### FAQ Entries
Count: 7
Source: src/data/faq.ts

1. Do you come to me, or do I bring the vehicle somewhere?
2. What do I need to do before you arrive?
3. How long does a full detail take?
4. What is your service area?
5. What is the Standing Detail program?
6. What if the result is not what I expected?
7. Do you work on fleet vehicles and commercial accounts?

Additionally, each of the 7 high-priority zip pages (`/service-area/[zip]`) has 3 zip-specific FAQs hardcoded inline (21 total additional FAQ entries). These are schema-marked per page.

---

### Testimonials / Reviews
The Featurable widget is conditionally embedded in the homepage only:
```astro
const featurableId = import.meta.env.FEATURABLE_WIDGET_ID;
{featurableId && (
  <section ...>
    <div class="featurable-widget" data-widget-id={featurableId}></div>
    <script src="https://cdn.featurable.com/assets/widget/v1/featurable-widget.min.js" async is:inline></script>
  </section>
)}
```
The entire reviews section is hidden when `FEATURABLE_WIDGET_ID` is not set. The Google Rating trust bar item is also commented out in TrustBar.astro pending real data.

**Status:** Both reviews mechanisms are gated. Neither will render until the env var is set and reviews exist.

---

### Service Area Data
Count: 19 zip codes
Source: src/data/serviceArea.ts

Sample (first 5):
```
{ code: '33556', city: 'Odessa',         priority: 'high',     neighborhoods: ['Keystone', 'Eagles', 'Starkey Ranch'] }
{ code: '33548', city: 'Lutz',           priority: 'high',     neighborhoods: ['Cheval', 'Lake Fern'] }
{ code: '33558', city: 'Lutz',           priority: 'high',     neighborhoods: ['Steinbrenner', 'Van Dyke Farms'] }
{ code: '33647', city: 'New Tampa',      priority: 'high',     neighborhoods: ['Tampa Palms', 'Cory Lake Isles', 'Live Oak Preserve', 'Hunters Green'] }
{ code: '33544', city: 'Wesley Chapel',  priority: 'high',     neighborhoods: ['Seven Oaks', 'Wiregrass Ranch'] }
```

Priority breakdown: 7 high, 9 standard, 3 edge.
High-priority zips generate dedicated `/service-area/[zip]` pages with unique copy. Standard and edge zips appear only in the index listing.

---

### Pricing Data
Source: src/data/pricing.ts

Structure:
- `PRICE_FLOORS` — hard minimums ($185 exterior sedan, $255 full sedan, $1.00 lot wash)
- `RATES` — internal rate card for exterior (3 vehicle sizes), full detail (3 conditions × 3 sizes), ceramic (3 sizes), recon (3 sizes)
- `FLEET_RATES` — lot wash, sales prep, recon detail, van wash (internal reference only)
- `STANDING_DETAIL` — recurring rates per vehicle size (3 sizes)
- `getQuotePrice()` — exported function used by QuoteEstimator island

Pricing is gated to /fleet (fleet rates, displayed) and /quote (output of QuoteEstimator, displayed after user selections). No pricing appears on any other public page. This is correctly implemented.

---

## Section 7 — Recommendations for the Automation Pipeline

1. **ASSET_REGISTRY disk-truth sync script**: The current ASSET_REGISTRY is manually maintained and has at least one known mismatch (`showcaseCoating: true` but `showcase-coating.mp4` is absent from disk). An automation script that runs `find public/assets/video -name "*.mp4"` and cross-references against ASSET_REGISTRY keys would catch drift before deployment. Run as a pre-build check. Output: a diff of "registered as present but missing" and "on disk but not registered."

2. **OG image generation pipeline**: 13 OG images are missing (og-default.png plus 12 page-specific). All share the same brand template — navy background, gold accent, wordmark, page title. A Node script using `@vercel/og` or `satori` can generate all 13 from a single template at build time, keyed to page metadata already defined in each page's `<BaseLayout>` title prop. One script, 13 outputs, no design tool required.

3. **Gallery photo intake workflow**: The GalleryFilter island has 10 placeholder slots (20 individual images when counting before+after pairs). A defined naming convention (`gallery-{category}-{descriptor}-{id}-{before|after}.jpg`) combined with a manifest in ASSET_REGISTRY means the island can switch from placeholder to real image by flipping a boolean and dropping the file. Build a `scripts/check-gallery.ts` script that reads the convention pattern, scans `public/assets/photos/`, and outputs a checklist of which slots are filled — run before every shoot so Constantine knows exactly what to capture.

4. **Blog `serviceTopic` routing audit**: `how-to-prep-your-car-for-detailing.mdx` has no `serviceTopic` and will never surface in any RelatedBlogBox. The same gap will occur with future posts if the field is forgotten. A pre-commit hook or build-time warning that lists all posts with `serviceTopic: 'general'` (the default) keeps this from silently accumulating.

5. **Draft preview URL generator**: The `/api/preview` endpoint requires `PREVIEW_TOKEN` to be set and a `?token=` param to be passed. When writing new posts Constantine needs to construct this URL manually. A small script (`scripts/preview-url.ts`) that reads `PREVIEW_TOKEN` from `.env.local` and accepts a post slug as an argument, then prints the full preview URL, eliminates the manual step and reduces the chance of publishing an unreviewed post.

---

## Section 8 — Handoff Checklist

### Environment Variables
| Variable | Purpose | Required For | Status |
|---|---|---|---|
| RESEND_API_KEY | Transactional email via Resend | /api/book, /api/contact, /api/fleet, /api/apartments, /api/email-capture, /api/quote-followup | Must be set in Vercel — all API routes check for it and degrade gracefully (log only) when absent |
| FEATURABLE_WIDGET_ID | Featurable review widget embed | Homepage reviews section | Optional — entire section is hidden when absent |
| PREVIEW_TOKEN | Blog draft preview authentication | /api/preview GET endpoint | Optional for production; required to use draft preview workflow |

**Email delivery note:** All API routes send from `hello@bayshine.net` or `constantine@bayshine.net` to `constantine@bayshine.net` / `constantpass@gmail.com`. The from-address domain `bayshine.net` must have Resend DNS records (SPF, DKIM) configured. Without them, Resend will reject the send even if the API key is valid.

---

### API Integrations
| Service | Purpose | Integration Point | Config |
|---|---|---|---|
| Resend | Transactional email for all form submissions | src/pages/api/book.ts, contact.ts, fleet.ts, apartments.ts, email-capture.ts, quote-followup.ts | RESEND_API_KEY env var; `resend` npm package |
| Featurable | Google review widget embed | src/pages/index.astro (conditional block) | FEATURABLE_WIDGET_ID env var; script loaded from cdn.featurable.com |
| Vercel | Hosting and serverless functions | @astrojs/vercel adapter in astro.config.mjs | Auto-configured via adapter |
| @astrojs/sitemap | XML sitemap generation | astro.config.mjs integrations | site: 'https://bayshine.net' set; auto-generates /sitemap.xml at build |

---

### Key File Paths for Automation
| File | Purpose |
|---|---|
| src/lib/assetRegistry.ts | Source of truth for which video assets are present — used by AmbientBackground.astro and all service page video conditionals |
| src/lib/ambientVideo.ts | Page-to-ambient-video mapping with 4-tier fallback logic |
| src/content/config.ts | Blog post Zod schema — defines all required and optional frontmatter fields |
| src/content/blog/ | Blog post directory; organized by serviceTopic subdirectory for some posts, root level for others |
| src/data/faq.ts | FAQ entries rendered on homepage and in schema markup |
| src/data/serviceArea.ts | 19-zip service area data; priority flags drive /service-area/[zip] static page generation |
| src/data/services.ts | Service card definitions used by ServiceCard component and service-area zip pages |
| src/data/pricing.ts | Internal rate card; exported getQuotePrice() drives QuoteEstimator output |
| public/assets/video/ | All video files — ambient, showcase, comparison |
| public/assets/logo/ | Logo files (currently bayshine_logo_vector.png) |
| public/ | favicon.svg, noise.svg, robots.txt at root |

---

### Build / Deploy Commands
| Command | Purpose |
|---|---|
| pnpm dev | Local dev server (astro dev) |
| pnpm build | Production build (astro build) |
| pnpm astro check | TypeScript type check |
| pnpm preview | Preview production build locally |
| git push origin main | Triggers Vercel auto-deploy (assuming Vercel connected to main branch) |

**Node version requirement:** package.json specifies `"node": "22.x"` — Vercel project settings must match.
**Package manager:** pnpm 10.33.2. Vercel must have `ENABLE_EXPERIMENTAL_COREPACK=1` or equivalent set for pnpm to be used correctly.

---

### Blog Publishing Workflow
**Draft system:** Posts are gated by the `draft: boolean` frontmatter field (default: false). Draft posts are filtered out from the blog index and redirect to /blog from their slug URL unless the `bayshine-preview` cookie (value `1`) is set.

**Preview activation:** `GET /api/preview?token=<PREVIEW_TOKEN>&slug=<post-slug>` sets the preview cookie (1-hour expiry, HttpOnly, SameSite=Lax). Clears via `GET /api/preview?clear=1`.

**Publishing a new post:**
1. Create MDX file in `src/content/blog/` (or a serviceTopic subdirectory).
2. Set all required frontmatter: title, description, pubDate, category, readTime.
3. Set `draft: false` when ready to publish (or omit — defaults to false).
4. Set `serviceTopic` to route the post to the correct service page's RelatedBlogBox.
5. Commit and push. Vercel builds and deploys automatically.
6. The sitemap regenerates at each build — no manual sitemap update needed.

**Note:** Both `/blog` and `/blog/[slug]` have `export const prerender = false` — they are server-rendered on every request, not statically generated. This means draft status is evaluated at request time, not build time.

---

### Sitemap and SEO
`@astrojs/sitemap` is configured in astro.config.mjs with `site: 'https://bayshine.net'`. The sitemap generates automatically at build. Since blog routes use `prerender: false`, those routes may not be included in the auto-generated sitemap — verify post-build with `pnpm preview` and check `/sitemap.xml`.

Every page uses the `<SEO>` component (src/components/ui/SEO.astro) which outputs title, description, canonical, OG tags, Twitter Card tags, and JSON-LD schema. The homepage has LocalBusiness + FAQPage schema. Each `/service-area/[zip]` page has LocalBusiness + FAQPage schema. Blog posts have BlogPosting schema.

**Raw `<img>` violations (3 instances):**
- `src/components/layout/Header.astro` line 18: `<img src="/assets/logo/bayshine_logo_vector.png" ...>`
- `src/components/layout/Footer.astro` line 21: `<img src="/assets/logo/bayshine_logo_vector.png" ...>`
- `src/pages/404.astro` line 12: `<img src="/assets/logo/bayshine_logo_vector.png" ...>`

All three should be converted to Astro `<Image>` component calls once the logo is available as a local asset with known dimensions. Current PNG is in public/ so Astro Image optimization applies. The violations are functional but non-compliant with CLAUDE.md rules.
