# Gumroad listing — Schema Pack v1

Copy these fields into the Gumroad product creation form.

## Product name

Schema Pack v1: Mobile Service Businesses

## Tagline (subtitle)

Validated JSON-LD for 6 mobile service verticals. Drop in, fill in, ship.

## Price

$29 USD one-time. No subscription.

## Cover image

Use a clean text-only image with the product name on a dark background
in `--bay-gold` (the brand color from BayShine's CLAUDE.md). 1200x630.

Until a real cover image is produced, leave a placeholder with
`data-photo-needed="schema-pack-v1-cover"`.

## Description (markdown)

Most mobile service businesses have websites with zero structured data. They lose visibility in Google's local pack and they don't appear when someone asks Perplexity or ChatGPT search for recommendations in their area.

This pack fixes that for six mobile service verticals: mobile detailing, pressure washing, mobile car wash, HVAC, plumbing, roofing.

**What you get**

- One JSON-LD file per vertical, each containing three coordinated schema blocks: `LocalBusiness` (typed to the right schema.org subclass like `AutoWash`, `HVACBusiness`, `Plumber`, `RoofingContractor`), a `Service` block with a `GeoCircle` service area template, and a `FAQPage` with 5 vertical-specific Q&As.
- The FAQs are written to match how AI search engines parse "best [X] in [city]" queries. This is the part most generic schema generators get wrong.
- Step-by-step install for WordPress, Astro, Next.js, Webflow, and Squarespace.
- Pre-validated against schema.org spec and Google Rich Results Test.

**What you do not get**

- Custom schema for a vertical not in the list above. v2 adds 18 more verticals at $49.
- Site implementation. You paste the JSON into your `<head>` yourself.
- Ranking guarantees. Schema markup affects how engines parse your site; it does not guarantee a position.

**License**

Single-site commercial use. One website you own or operate. Multi-site agency license available on request.

**Refund policy**

7 days from purchase, no questions asked.

## Tags

local-seo, schema-org, json-ld, mobile-detailing, pressure-washing, hvac, plumbing, roofing, ai-search, geo

## Affiliate program

Enabled at 30% commission.

## Welcome email subject

Schema Pack v1 download and install steps

## File attachment

Upload the zipped `02-schema-pack-v1/` directory contents (not the
parent folder) as the buyer download. Include README.md, INSTALL.md,
and the schemas/ subfolder with all 6 JSON files.

Zip command (run from `BayShine/.atrium-deliverables/`):

```bash
cd 02-schema-pack-v1 && zip -r schema-pack-v1.zip README.md INSTALL.md schemas/
```
