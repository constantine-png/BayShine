# Gumroad bundle listing — Schema Pack + llms.txt Pack

Gumroad supports bundle products as a separate SKU. Create the bundle after both individual products are live.

## Bundle product name

Schema Pack + llms.txt Pack — Mobile Service Foundation Bundle

## Bundle price

$35 USD one-time. Saves $3 versus $38 unbundled.

## Description (markdown)

The complete on-page AI search foundation for 6 mobile service verticals. Schema Pack v1 ($29 value) plus llms.txt Template Pack v1 ($9 value), bundled at $35.

**What's in the bundle**

- **Schema Pack v1:** 6 vertical JSON-LD files (LocalBusiness, Service, FAQPage) for mobile detailing, pressure washing, mobile car wash, HVAC, plumbing, roofing. Each typed to the most specific schema.org subclass. FAQ blocks calibrated for AI search.

- **llms.txt Pack v1:** 6 vertical llms.txt templates declaring entity identity, service area, services offered, priority pages, and citation preferences. Drop in at the root of your site at `/llms.txt`.

**Why bundle**

Schema markup and llms.txt do different jobs:

- **Schema markup** structures the data on each page so AI engines parse precise facts (business type, service area, opening hours, FAQ pairs).
- **llms.txt** declares the entity-level identity at the root of the site (canonical name, geographic scope, priority pages, citation preferences).

Together they form the foundation. Schema without llms.txt produces precise per-page data but no overall identity declaration. llms.txt without schema produces a clear identity but vague per-page data. Both together is significantly more effective than either alone.

**License**

Single-site commercial use. Both packs covered.

**Refund policy**

7 days from purchase, no questions asked.

**Suggested order of install**

1. llms.txt first (5 minutes; drops in at root, sets entity identity).
2. Schema Pack second (15 to 30 minutes; one JSON-LD block per page in scope).
3. Validate both at <https://search.google.com/test/rich-results> and by visiting `/llms.txt`.

## Tags

bundle, ai-search, schema-org, llms-txt, local-seo, mobile-service-businesses

## Affiliate program

Enabled at 30% commission on the bundle SKU.

## Welcome email subject

Mobile Service Foundation Bundle — both packs ready

## Bundle welcome email body

Hi {{BUYER_FIRST_NAME}},

Thanks for the bundle purchase. You receive both packs as a single download.

Suggested install order:

1. **llms.txt first.** Open the llms.txt Pack INSTALL.md, find your platform section, drop the file in at the root of your site (`/llms.txt`). 5 minutes.
2. **Schema Pack second.** Open the Schema Pack INSTALL.md, find your platform, paste the JSON-LD blocks into your site's `<head>`. 15-30 minutes depending on how many pages you cover.

Validate the result:

- Visit `https://yoursite.com/llms.txt` to confirm the llms.txt loads as plain text.
- Test the schema at <https://search.google.com/test/rich-results>.

If anything is unclear, reply directly to this email.

Download:
{{GUMROAD_DOWNLOAD_LINK}}

— Atrium

## File attachment

Combined zip of both packs:

```bash
cd 06-llms-txt-pack-v1/.. && zip -r mobile-service-foundation-bundle.zip \
  02-schema-pack-v1/README.md 02-schema-pack-v1/INSTALL.md 02-schema-pack-v1/schemas/ \
  06-llms-txt-pack-v1/README.md 06-llms-txt-pack-v1/INSTALL.md 06-llms-txt-pack-v1/templates/
```
