# Schema Pack v1 — Mobile Service Businesses

Six validated JSON-LD blocks for the six most common mobile service
verticals. Drop into your site's `<head>`, replace the placeholder
values with your business information, ship.

Each vertical includes three coordinated schema blocks in a single
file under `@graph`:

1. **`LocalBusiness`** typed to the most specific schema.org subclass
   for the vertical (`AutoWash`, `HVACBusiness`, `Plumber`, etc.).
2. **`Service`** describing the primary service the business offers,
   with `areaServed` set to a `GeoCircle` template you customize to
   your service radius.
3. **`FAQPage`** with 5 vertical-specific Q&As written to match how AI
   search engines (Perplexity, ChatGPT search, Google AI Overviews)
   parse "best [X] in [city]" queries.

## Verticals included

- `schemas/mobile-detailing.json` — typed as `AutoWash`
- `schemas/pressure-washing.json` — typed as `HomeAndConstructionBusiness`
- `schemas/mobile-car-wash.json` — typed as `AutoWash`
- `schemas/hvac.json` — typed as `HVACBusiness`
- `schemas/plumbing.json` — typed as `Plumber`
- `schemas/roofing.json` — typed as `RoofingContractor`

## What's in the box

| File | Purpose |
|---|---|
| `README.md` | This file. |
| `INSTALL.md` | Step-by-step install for WordPress, Astro, Next.js, Webflow, Squarespace. |
| `schemas/<vertical>.json` | One JSON-LD file per vertical. |

## How to use

1. Open `INSTALL.md` and find the section for your platform.
2. Open `schemas/<your-vertical>.json`.
3. Replace every `{{PLACEHOLDER}}` value with your business
   information. The placeholders are listed at the top of each file.
4. Paste the JSON into your site's `<head>` wrapped in
   `<script type="application/ld+json">...</script>`.
5. Validate with Google's Rich Results Test
   (<https://search.google.com/test/rich-results>) before deploying.
6. Deploy.

## Verification

All six schema files pass:

- Schema.org validator (<https://validator.schema.org/>)
- Google Rich Results Test
- JSON-LD JSON syntax validation

Re-validation is your responsibility after you fill in your specific
values, because malformed phone numbers or addresses can fail the
Rich Results Test even if the schema structure is correct.

## License

Single-site commercial use. You may use this pack on one website you
own or operate. If you are an agency or freelancer needing multi-site
use, contact the seller for an agency license.

You may not resell or redistribute these files or derivative works.

## Support

Reply directly to the purchase confirmation email for support. Typical
response time is 24 business hours.

## Roadmap

v2 expands to 24 verticals (adds dental, legal, electrical, pest
control, landscaping, tree service, locksmith, garage door, cleaning
residential, cleaning commercial, junk removal, moving, painting,
handyman, window cleaning, gutter cleaning, solar installation, pool
service) at $49 one-time. v1 buyers get a discounted upgrade to v2 at
$20.

## Changelog

- v1.0 (2026-05-11): initial release. 6 mobile service verticals.
