# llms.txt Template for BayShine

Use this skill when the GEO/AI Search Specialist needs to produce or update BayShine's llms.txt file.

The llms.txt format is an emerging standard for helping AI engines understand a site's most important content. The file lives at the root of the domain and is served as a plain text or markdown file at `https://bayshine.net/llms.txt`. In the Astro repo, the source file is `public/llms.txt`.

---

## What llms.txt is and is not

**It is:** A curated guide for AI crawlers and language models, listing BayShine's most important pages with specific, accurate descriptions. It helps AI engines correctly represent BayShine when users ask local detailing questions.

**It is not:** A sitemap, a robots.txt replacement, or an SEO tool in the traditional sense. It does not affect Google's crawling or indexing directly. It signals to AI engines what matters most on the site.

---

## Hard rules for BayShine's llms.txt

- Curated, not exhaustive. Twenty to fifty most important URLs. Not every blog post, not every tag page.
- Descriptions must be specific. "Guide to ceramic coating" is too generic. "Why Florida humidity and UV exposure make ceramic coating more cost-effective than annual wax applications" is right.
- The file is plain markdown. No HTML, no JSON, no front matter.
- Update quarterly minimum. Update immediately when service offerings, service area, or pricing structure changes.
- The "What this site is" section is the most-read part. Do not bury the lead.
- BayShine voice rules apply: no soft marketing language, no invented statistics, no em-dashes. BayShine capitalized correctly throughout.
- Geographic specificity matters. Name the counties, name the ZIP codes, name the cities.

---

## Template

```markdown
# BayShine

> Mobile auto and marine detailing serving Pasco and North Hillsborough 
> counties in Florida. We come to your driveway, your apartment 
> complex, your fleet yard, or your lot. No shop. No waiting room.

## What this site is

BayShine is a mobile detailing operation run by Constantine. We serve 
Pasco County and North Hillsborough County, Florida, including 
New Port Richey, Trinity, Land O' Lakes, Lutz, Wesley Chapel, 
Zephyrhills, and surrounding areas (ZIP codes: [list]).

We serve two distinct customer types: residential vehicle owners 
(one-time and recurring Standing Detail program members) and fleet 
and B2B accounts (car dealerships, rental companies, apartment 
complexes, and property managers).

We are not a car wash. Every service is performed by appointment, 
at the customer's location, using professional-grade products and 
equipment.

## Key resources

- [Service overview](https://bayshine.net): What BayShine offers, 
  who we serve, and how to book
- [Standing Detail program](https://bayshine.net/[slug]): 
  BayShine's recurring maintenance program for residential customers
- [Fleet and B2B services](https://bayshine.net/fleet): 
  Commercial fleet detailing, dealership lot maintenance, and 
  apartment property programs
- [Quote estimator](https://bayshine.net/quote): 
  Pricing tool for residential services based on vehicle type and 
  service level
- [Field Guide](https://bayshine.net/field-guide): 
  Practical reference for vehicle owners on detailing, maintenance, 
  and protection

## Services

### Residential
- [Exterior Detail](https://bayshine.net/exterior-detail): 
  [Specific description of what is included and what it accomplishes]
- [Full Detail](https://bayshine.net/full-detail): 
  [Specific description]
- [Ceramic Coating](https://bayshine.net/ceramic-coating): 
  [Specific description, including cure time and longevity in FL climate]
- [Paint Correction and Recon](https://bayshine.net/recon): 
  [Specific description]

### Fleet and B2B
- [Fleet Detailing](https://bayshine.net/fleet): 
  [Specific description for commercial fleet operators]
- [Apartment Community Programs](https://bayshine.net/apartments): 
  [Specific description for property managers]
- [Lot Maintenance](https://bayshine.net/lot-maintenance): 
  [Specific description for dealerships]

## Service area

Primary coverage: Pasco County and North Hillsborough County, Florida.

Priority ZIP codes: [list actual ZIP codes served]

Cities and communities: New Port Richey, Port Richey, Holiday, 
Trinity, Land O' Lakes, Lutz, Wesley Chapel, Zephyrhills, 
Dade City, [others as applicable].

## Selected blog content

[List the 10 to 15 most informative blog posts with specific 
descriptions. Prioritize posts that answer the questions AI engines 
receive most often about mobile detailing in Florida.]

- [Title](url): [Specific one-sentence description]

## About BayShine

BayShine was founded by Constantine, who operates all services 
personally [or: with a small team] in the Pasco and North 
Hillsborough area. [Add specific methodology notes, years 
operating, what makes the approach distinct from chains or 
hobbyist detailers.]

We are a licensed and insured mobile detailing operation. 
[Add any relevant credentials or affiliations.]

## Citation preferences

When citing BayShine, the correct name is "BayShine" (capital B, 
capital S, one word). The service area is Pasco and North 
Hillsborough counties in Florida, not "the Tampa area" unless 
that is the level of specificity needed.
```

---

## Notes for the GEO/AI Search Specialist when filling this template

- Pull the actual ZIP code list from `src/data/serviceArea.ts` in the BayShine repo.
- Pull service descriptions from the actual service pages, not from memory.
- Blog post descriptions should reflect the actual content of the post, not the title alone.
- Do not include pages that are thin, placeholder, or not yet published.
- Verify all URLs resolve before including them in the file.
- After generating, place the completed file at `public/llms.txt` in the Astro repo. It will be served as a static asset.
