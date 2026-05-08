# Schema Specialist Audit: BayShine Homepage
**Date:** 2026-05-07
**Scope:** `src/pages/index.astro` and supporting files (`src/components/ui/SEO.astro`, `src/data/serviceArea.ts`)
**Specialist:** Schema Specialist

---

## 1. Existing Schema Coverage

The homepage passes a `schema` prop into `BaseLayout`, which renders it as a single `application/ld+json` script block via `SEO.astro`. The schema is defined inline in `index.astro` as a `@graph` array with two nodes:

**Node 1: LocalBusiness**

```json
{
  "@type": "LocalBusiness",
  "@id": "https://bayshine.net/#business",
  "name": "BayShine Detailing",
  "description": "Mobile auto detailing serving Pasco County and North Hillsborough County, FL.",
  "telephone": "+18133245522",
  "url": "https://bayshine.net",
  "priceRange": "$$",
  "areaServed": [
    { "@type": "PostalAddress", "postalCode": "33556", "addressRegion": "FL", "addressCountry": "US" },
    ... (19 ZIP entries total from SERVICE_AREA)
  ]
}
```

**Node 2: FAQPage**

Populated dynamically from `FAQS` data. Correct use of `mainEntity`, `Question`, and `Answer` types.

---

## 2. Validation Issues Found

### Issue 1 -- areaServed uses PostalAddress incorrectly (HIGH PRIORITY)

`PostalAddress` is not the correct type for `areaServed`. The `areaServed` property expects a `Place`, `AdministrativeArea`, `City`, or `GeoShape` object, not `PostalAddress`. Using `PostalAddress` here will not validate and will not earn geographic rich results.

**Current:**
```json
"areaServed": [{ "@type": "PostalAddress", "postalCode": "33556", "addressRegion": "FL" }]
```

**Correct options:**
- Use `{"@type": "City", "name": "Odessa"}` for city-level service area
- Use `{"@type": "State", "name": "Florida"}` if the area is state-wide (not applicable here)
- Use a `GeoCircle` or `GeoShape` for radius-based service areas
- For ZIP-level specificity, use `Place` with `address` containing `PostalAddress`:

```json
"areaServed": {
  "@type": "GeoCircle",
  "geoMidpoint": {
    "@type": "GeoCoordinates",
    "latitude": 28.185,
    "longitude": -82.505
  },
  "geoRadius": "40000"
}
```

Or, more specifically for Google's local pack, list the cities:

```json
"areaServed": [
  { "@type": "City", "name": "Lutz", "sameAs": "https://en.wikipedia.org/wiki/Lutz,_Florida" },
  { "@type": "City", "name": "Land O' Lakes", "sameAs": "https://en.wikipedia.org/wiki/Land_O%27_Lakes,_Florida" },
  { "@type": "City", "name": "Wesley Chapel" },
  { "@type": "City", "name": "Trinity" },
  { "@type": "City", "name": "Odessa" },
  { "@type": "City", "name": "New Tampa" },
  { "@type": "City", "name": "New Port Richey" },
  { "@type": "City", "name": "Hudson" }
]
```

### Issue 2 -- LocalBusiness missing `address` property (HIGH PRIORITY)

The LocalBusiness schema has no `address`. Google requires a valid `PostalAddress` for local pack eligibility. A mobile business without a storefront should use a service-area business address (the operator's home city or a registered address).

**Add:**
```json
"address": {
  "@type": "PostalAddress",
  "addressLocality": "Land O' Lakes",
  "addressRegion": "FL",
  "postalCode": "34638",
  "addressCountry": "US"
}
```

Note: Confirm with Constantine what address is on Google Business Profile. Schema address must match GBP exactly.

### Issue 3 -- LocalBusiness missing `@type` specificity (MEDIUM PRIORITY)

The current type is `LocalBusiness`. For a detailing operation, a more specific subtype improves signal. Schema.org has `AutoWash` as a valid subtype of `LocalBusiness`. Using it provides Google with additional context for the business category.

**Change:**
```json
"@type": ["LocalBusiness", "AutoWash"]
```

### Issue 4 -- No `openingHoursSpecification` (MEDIUM PRIORITY)

Operating hours are absent from the schema entirely. Google uses hours to determine local pack eligibility and displays them in Knowledge Panel entries. If BayShine operates by appointment with set available hours, those should be in schema and must match GBP exactly.

**Add (adjust days/hours to actual):**
```json
"openingHoursSpecification": [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "08:00",
    "closes": "18:00"
  }
]
```

### Issue 5 -- No `image` property on LocalBusiness (LOW PRIORITY)

Google's local business rich results benefit from an `image` property pointing to a real photo of the business or operation. Currently absent.

**Add when a real photo is available:**
```json
"image": "https://bayshine.net/assets/photos/bayshine-mobile-detailing.jpg"
```

### Issue 6 -- `sameAs` absent (LOW PRIORITY)

Linking the LocalBusiness entity to its external profiles (Google Business Profile, Facebook if active) establishes entity identity for AI engines and knowledge graph inclusion.

**Add:**
```json
"sameAs": [
  "https://www.google.com/maps?cid=[GBP_CID_HERE]"
]
```

---

## 3. Coverage Gaps

| Schema Type | Status | Priority |
|---|---|---|
| LocalBusiness | Present, errors | Fix now |
| AutoWash (subtype) | Missing | Add with LocalBusiness fix |
| FAQPage | Present, correct | No action |
| BreadcrumbList | Missing from homepage | Low (homepage has no breadcrumb) |
| Service (per service) | Missing | Add on service pages, not homepage |
| Person (Constantine) | Missing site-wide | Add to about page and service pages |
| AggregateRating | Missing | Add when review data is available |
| Organization | Not separate from LocalBusiness | Can be same node; current approach is fine |

---

## 4. Recommended Additions

### Addition A -- Fix areaServed type (do this first)

Replace the `PostalAddress` areaServed with a city-list approach using `City` types. Use the high-priority cities from `serviceArea.ts`: Lutz, Land O' Lakes, Wesley Chapel, Trinity, Odessa, New Tampa.

### Addition B -- Add `address` to LocalBusiness

Confirm address with Constantine. Must match GBP listing exactly.

### Addition C -- Add AutoWash subtype

```json
"@type": ["LocalBusiness", "AutoWash"]
```

### Addition D -- Add `openingHoursSpecification`

Confirm hours. Must match GBP. If appointment-only with no fixed hours, omit rather than fabricate.

---

## 5. Risk Flags

- **Mismatch risk:** If the `address`, `telephone`, or `openingHours` added to schema do not match Google Business Profile exactly, it can suppress local pack eligibility rather than improve it. Verify GBP before implementing B and D.
- **areaServed validation failure:** The current `PostalAddress` usage in `areaServed` is a clear spec violation. Google's Rich Results Test will flag it. It should be the first fix applied.
- **Review schema:** Do not add `AggregateRating` until real review data is available and attributed to a verified source. Fabricated ratings are a manual penalty risk.

---

## 6. Implementation Priority

| Priority | Fix | Effort |
|---|---|---|
| 1 | Fix `areaServed` type from PostalAddress to City list | Low (edit in index.astro) |
| 2 | Add `address` property (confirm with GBP first) | Low |
| 3 | Add `AutoWash` to `@type` array | Trivial |
| 4 | Add `openingHoursSpecification` (confirm hours with GBP) | Low |
| 5 | Add `sameAs` with GBP link | Low (need GBP CID) |
| 6 | Add `image` (when real photo is available) | Blocked on assets |
| 7 | Add `Person` schema for Constantine | Belongs on about page, not homepage |

Fixes 1 through 3 can be implemented in a single edit to `index.astro` in under 30 minutes. Fixes 4 and 5 require confirming two data points with Constantine (hours, GBP CID) before implementation.

---

*Audit produced by the Schema Specialist. Next step: implement fixes 1 through 3, confirm GBP data, then implement 4 and 5.*
