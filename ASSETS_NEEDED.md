# Assets Needed

Priority tiers: **Today** (blocks launch), **This Week** (blocks feature), **Ongoing** (progressive enhancement)

---

## TODAY — Blocks Launch

### Before/After Slider (Hero)
- **Component:** `src/components/islands/BeforeAfterSlider.tsx`
- **Files needed:** 2 images (before + after) per vehicle type
- **Format:** AVIF + JPEG fallback
- **Dimensions:** 1200×675px (16:9), max 200KB each
- **Minimum:** 1 pair to launch slider; 4 pairs ideal
- **Placeholder:** Slider shows "Real photos required" message until images are set

### OG / Social Image
- **Path:** `public/og-default.jpg`
- **Dimensions:** 1200×630px
- **Format:** JPEG, max 150KB
- **Content:** Bay Shine logo + tagline on dark navy background

---

## THIS WEEK — Blocks Features

### Gallery Filter (Results section)
- **Component:** `src/components/islands/GalleryFilter.tsx`
- **Count:** Minimum 12 before/after pairs
- **Format:** AVIF + JPEG fallback
- **Dimensions:** 800×600px per image
- **Categories:** Cars, Trucks/SUVs, Boats, Interiors
- **Naming convention:** `public/gallery/[category]-[n]-before.avif` / `...-after.avif`

### ServiceShowcase Panels (Video loops)
5 panels, each needing a short video loop:

| Panel | `data-video-needed` | Content |
|---|---|---|
| Exterior Detail | `exterior-wash-loop` | Two-bucket wash, panel work |
| Full Detail | `interior-extraction-loop` | Extractor on seats/carpet |
| Ceramic Coating | `ceramic-application-loop` | Coating application wipe |
| Boat & Marine | `marine-hull-loop` | Topsides or hull polish |
| Fleet | `fleet-lot-loop` | Multi-vehicle lot sequence |

- **Format:** MP4 (H.264) + WebM, autoplay/loop/muted
- **Dimensions:** 16:9, 1280×720 min, max 2MB per video
- **Duration:** 5–15 seconds, seamless loop

---

## ONGOING — Progressive Enhancement

### Hero Before/After Expansion
- **Goal:** 6 before/after pairs representing vehicle types: sedan, SUV/truck, boat, interior
- **Same spec as above**

### Blog Post Photography
- **Per post:** 1 header image (1200×675px) + inline photos as needed
- **Style:** Natural light, realistic conditions — no staged studio shots
- **Naming:** `public/blog/[post-slug]-header.jpg`

### Field Guide Cover Illustration
- **Component:** `FieldGuideBook.tsx` (book cover state)
- **Current:** Decorative SVG ornament (functional)
- **Ideal:** Inked illustration — detailing gear, vehicle silhouette, or technical motif
- **Size:** SVG preferred, or PNG @2x (400×400px max)

### Noise Texture
- **Path:** `public/noise.svg`
- **Status:** Referenced in CSS — must exist at this path
- **Generate:** Any SVG noise generator at 256×256px, feTurbulence filter, 3% opacity in use
- **If missing:** Silent CSS failure (no visible error, just no grain)

### Category Illustrations (Blog Index)
- **4 icons:** Car Care, Boat & Marine, Fleet Tips, Local
- **Style:** Monoline, single-color — renders in bay-gold
- **Format:** Inline SVG (add to blog index nav or card headers)
- **Current state:** Text-only labels (functional, no regression)

---

## Notes

- All real photography must be of actual Bay Shine work — no stock photos per CLAUDE.md
- Before/after pairs: shoot before touching the vehicle, after at same angle/light
- Video loops: avoid logos or identifiable plates in frame unless approved by customer
- File naming: lowercase, hyphenated, no spaces
