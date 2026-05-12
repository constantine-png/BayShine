# Install — Schema Pack v1.5

Same install pattern as Schema Pack v1. The 9 verticals all follow the same JSON-LD structure with the same placeholder pattern.

## Quick start

1. Open your vertical's JSON file in `schemas/`.
2. Replace every `{{PLACEHOLDER}}` value with your business information. Placeholders are listed at the top of each file.
3. Save the file as `schema.json` (or any name your CMS prefers).
4. Paste the JSON into your site's `<head>` wrapped in:

```html
<script type="application/ld+json">
PASTE_JSON_HERE
</script>
```

5. Validate with Google's Rich Results Test: <https://search.google.com/test/rich-results>

## Platform-specific instructions

Same as Schema Pack v1. Refer to `02-schema-pack-v1/INSTALL.md` in this directory tree for the full WordPress, Astro, Next.js, Webflow, and Squarespace install steps.

## New verticals in v1.5

The three new verticals (electrical, pest-control, landscaping) use these schema.org subtypes:

- **Electrical:** `Electrician` (a real schema.org subtype of `LocalBusiness`).
- **Pest control:** `PestControl` (a real schema.org subtype).
- **Landscaping:** `LandscapeService` (a real schema.org subtype).

These are specific subclasses — not the generic `LocalBusiness` — which produces more precise matching for buyer-intent queries.

## License-specific fields

Three verticals (electrical, pest control, plumbing where applicable) include a `{{LICENSE_NUMBER}}` placeholder in the Service block description. Replace with your state contractor license number; if you don't have a license (some states don't require one for certain services), remove the license sentence from the Service description.

## Common questions

**Q: My state requires a different license category. How do I cite it?**

A: Replace the literal text "State license {{LICENSE_NUMBER}}" with your state's exact license category and number. Example: "Florida CFC license CFC1234567" or "California C-10 license #1234567."

**Q: I provide multiple services (e.g., electrical AND HVAC). Do I install both schema files?**

A: Yes. Each service has its own `Service` block, both pointing to the same `LocalBusiness` entity via `@id`. You'd manually merge the two `@graph` arrays into one. The Atrium GEO Setup productized service ($2,500) handles multi-service businesses if the merge is non-trivial.

**Q: I'm both residential AND commercial. Does the schema reflect that?**

A: The included templates default to "Residential and commercial" language in the Service description. The `priceRange` placeholder can span both segments (e.g., "$89-$15000" if you do everything from $89 service calls to $15,000 commercial projects).

## Validation

Same as v1: validate at <https://validator.schema.org/> and <https://search.google.com/test/rich-results> before deploying. Most validation failures are phone format, dayOfWeek capitalization, or geo coordinates-as-strings. The README's troubleshooting table covers each.
