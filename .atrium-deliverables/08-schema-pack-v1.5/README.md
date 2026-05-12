# Schema Pack v1.5 — Service Businesses (9 Verticals)

Nine validated JSON-LD blocks for the nine most common service
verticals. Drop into your site's `<head>`, replace the placeholder
values with your business information, ship.

Each vertical includes three coordinated schema blocks in a single
file under `@graph`:

1. **`LocalBusiness`** typed to the most specific schema.org subclass
   for the vertical (`AutoWash`, `HVACBusiness`, `Plumber`,
   `RoofingContractor`, `Electrician`, `PestControl`,
   `LandscapeService`, `HomeAndConstructionBusiness`).
2. **`Service`** describing the primary service the business offers,
   with `areaServed` set to a `GeoCircle` template you customize.
3. **`FAQPage`** with 5 vertical-specific Q&As calibrated for AI
   search citation across Perplexity, ChatGPT search, Claude, Gemini,
   and Google AI Overviews.

## Verticals included

- `schemas/mobile-detailing.json` — typed as `AutoWash`
- `schemas/pressure-washing.json` — typed as `HomeAndConstructionBusiness`
- `schemas/mobile-car-wash.json` — typed as `AutoWash`
- `schemas/hvac.json` — typed as `HVACBusiness`
- `schemas/plumbing.json` — typed as `Plumber`
- `schemas/roofing.json` — typed as `RoofingContractor`
- **`schemas/electrical.json` — typed as `Electrician` (new in v1.5)**
- **`schemas/pest-control.json` — typed as `PestControl` (new in v1.5)**
- **`schemas/landscaping.json` — typed as `LandscapeService` (new in v1.5)**

## What's new in v1.5

Three additional verticals to match the Schema Generator's coverage. Buyers of Schema Pack v1 at $29 get a free upgrade to v1.5 (reply with your Gumroad purchase email; we'll send the v1.5 download link).

The 6 verticals from v1 are unchanged. Buyers don't need to re-deploy anything; the v1 files remain valid.

## What's in the box

| File | Purpose |
|---|---|
| `README.md` | This file. |
| `INSTALL.md` | Step-by-step install for WordPress, Astro, Next.js, Webflow, Squarespace. |
| `schemas/<vertical>.json` | One JSON-LD file per vertical. |

## How to use

1. Open `INSTALL.md` and find the section for your platform.
2. Open `schemas/<your-vertical>.json`.
3. Replace every `{{PLACEHOLDER}}` value with your business information. Placeholders are listed at the top of each file.
4. Paste the JSON into your site's `<head>` wrapped in `<script type="application/ld+json">...</script>`.
5. Validate with Google's Rich Results Test (<https://search.google.com/test/rich-results>) before deploying.
6. Deploy.

## Verification

All 9 schema files pass:

- Schema.org validator (<https://validator.schema.org/>)
- Google Rich Results Test
- JSON-LD JSON syntax validation

## License

Single-site commercial use. You may use this pack on one website you own or operate. Agency or multi-site license available on request.

## Support

Reply directly to the purchase confirmation email. Typical response time is 24 business hours.

## Roadmap

v2 expands to 24 verticals at $49 one-time (adds dental, legal, mobile mechanic, mobile pet grooming, locksmith, garage door service, residential cleaning, commercial cleaning, junk removal, moving, painting, handyman, window cleaning, gutter cleaning, solar installation, pool service). v1.5 buyers get a discounted upgrade to v2 at $30.

## Changelog

- v1.5 (2026-05-11): Added electrical, pest-control, landscaping. 9 verticals total at $39 (vs v1's 6 verticals at $29). Schema Generator coverage parity.
- v1.0 (2026-05-11): Initial release with 6 verticals at $29.
