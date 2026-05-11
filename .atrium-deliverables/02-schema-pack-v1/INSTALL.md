# Install — Schema Pack v1

Platform-specific install steps. Pick yours.

Before any install: open your vertical's JSON file in `schemas/` and
replace every `{{PLACEHOLDER}}` value with your business information.
The placeholders are listed in a comment at the top of each file.

After install, validate with Google's Rich Results Test:
<https://search.google.com/test/rich-results>

## WordPress

### Option A — Header Footer Code Manager plugin (easiest)

1. Install "Header Footer Code Manager" by 99 Robots from the WordPress plugin directory.
2. Activate.
3. Settings → HFCM → Add New.
4. Snippet Type: HTML. Site Display: Site Wide. Location: Header.
5. Paste the contents of your vertical's JSON file wrapped in:

```html
<script type="application/ld+json">
PASTE_JSON_HERE
</script>
```

6. Save and update.

### Option B — Theme functions.php

1. Open your child theme's `functions.php` (do not edit the parent theme).
2. Add at the end:

```php
function atrium_schema_pack_v1() {
  $schema = <<<'JSON'
PASTE_JSON_HERE
JSON;
  echo '<script type="application/ld+json">' . $schema . '</script>';
}
add_action('wp_head', 'atrium_schema_pack_v1');
```

3. Save.

## Astro

1. Open `src/layouts/Layout.astro` (or whatever your global layout is).
2. Inside the `<head>` block, add:

```astro
<script type="application/ld+json" set:html={JSON.stringify({
  PASTE_THE_JSON_OBJECT_HERE
})} />
```

Use `set:html` so Astro does not HTML-escape the JSON.

Alternatively, save the JSON as a static asset and load it:

```astro
---
import schemaJson from '../schema/your-vertical.json';
---
<script type="application/ld+json" set:html={JSON.stringify(schemaJson)} />
```

## Next.js (App Router)

1. Open `app/layout.tsx`.
2. Import the JSON:

```typescript
import schema from './schema-vertical.json';
```

3. Inside the root `<head>`, add:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>
```

## Next.js (Pages Router)

Use `<Head>` from `next/head` in `pages/_app.tsx` or a per-page basis,
same pattern as App Router with `dangerouslySetInnerHTML`.

## Webflow

1. Project Settings → Custom Code → Head Code.
2. Paste:

```html
<script type="application/ld+json">
PASTE_JSON_HERE
</script>
```

3. Save Changes. Publish the site.

## Squarespace

1. Settings → Advanced → Code Injection → Header.
2. Paste:

```html
<script type="application/ld+json">
PASTE_JSON_HERE
</script>
```

3. Save.

## Validation

After install:

1. Visit <https://search.google.com/test/rich-results>.
2. Enter your site URL.
3. Confirm that LocalBusiness, Service, and FAQPage all appear without errors.

If validation fails on phone number: use the international format
`+1 555 123 4567` (with country code, with spaces, no parens).

If validation fails on opening hours: ensure your `OpeningHoursSpecification` `dayOfWeek` values are exact schema.org enum strings (`Monday` not `monday`, full word not abbreviation).

If validation fails on `geo` coordinates: latitude and longitude must
be numbers, not strings. Use a coordinate lookup tool to get exact
decimal values for your address.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Schema not picked up | Wrong location (footer instead of head) | Move into `<head>` |
| Multiple schema warnings | Duplicate scripts from another plugin | Remove duplicates |
| Phone number error | Wrong format | Use `+1 555 123 4567` |
| `@type` warning | Subclass mismatch | Verify the vertical's subclass matches your business |
| Rich Results not showing | Indexing not yet refreshed | Wait 7-14 days after deploy |

For anything not in this table, reply to the purchase confirmation
email with the validation error message and the live URL.
