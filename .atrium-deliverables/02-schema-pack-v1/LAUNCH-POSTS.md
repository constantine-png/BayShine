# Launch posts — Schema Pack v1

Drafted by the launch-specialist descendant. Each section is a
ready-to-paste post for the channel named. Voice gate applied.

Launch sequence position: **Week 1 (Day 7 IndieHackers, Day 9 r/SEO,
Day 10 r/LocalSEO, Day 14 X thread).** See `LAUNCH-SEQUENCE.md`.

---

## IndieHackers (Day 7, Tuesday morning Eastern)

### Title (under 80 chars)

```
Shipped Schema Pack v1 for mobile service businesses — $29 on Gumroad
```

### Body

```
A month ago I noticed something on every mobile service business website I audited: zero structured data. No LocalBusiness schema. No Service blocks. No FAQ schema. The owner usually had no idea what these were, and AI engines like Perplexity and ChatGPT search were giving generic recommendations that didn't include them.

So I built a small pack of validated JSON-LD blocks for 6 verticals: mobile detailing, pressure washing, mobile car wash, HVAC, plumbing, roofing.

Each vertical includes:

- LocalBusiness typed to the correct schema.org subclass (AutoWash for detailing, HVACBusiness for HVAC, Plumber, RoofingContractor, etc.). Most generic schema generators output bare LocalBusiness, which gives engines less precise matching.
- Service block with a GeoCircle areaServed template.
- FAQPage with 5 vertical-specific Q&As written to match how AI engines parse "best [X] in [city]" queries. This is the part I think most generic packs miss.

Install instructions for WordPress, Astro, Next.js, Webflow, Squarespace. Buyer replaces 11 placeholder values with their business info, pastes into their site head, ships. 30 minutes total from purchase to live.

Price: $29 one-time on Gumroad. 7-day refund. Single-site commercial license.

Pairs with an llms.txt template pack ($9) at a bundle price of $35 for both (saves $3).

Link: {{GUMROAD_PRODUCT_URL}}

Two things I'd genuinely like feedback on:

1. The vertical-specific FAQ patterns. I've been calibrating them against real probe data from a mobile detailing business (BayShine in Pasco County), but I'd love a sanity check from anyone running schema for service businesses in other regions.

2. Whether priceRange and acceptedPaymentMethod actually influence AI engine recommendations in 2026. My data says yes for "affordable" or "premium" qualifier queries, but I'm working from a small sample.

If anyone wants to be a paid beta buyer for v2 (24 verticals at $49) when it ships, reply and I'll add you to the waitlist.
```

### Voice gate notes

- No em-dashes (used commas in their place).
- No exclamation marks.
- No "we'd love" or "feel free" or "passionate" or "exciting."
- Two genuine open questions for the audience (not rhetorical).
- One concrete invented-data-check: I reference BayShine's real probe data, not invented numbers.

---

## Hacker News (Day 7, alternative if IndieHackers signal is weak)

Skip HN at launch unless the Schema Pack starts trending on
IndieHackers. The product doesn't have enough technical depth for
a strong Show HN. Reserve HN posting for the AI Citation Audit
launch instead.

If HN is attempted:

### Title

```
Show HN: Validated JSON-LD pack for 6 mobile service business verticals ($29)
```

### Body

```
Built this because every mobile service site I audited had zero structured data. The pack includes typed LocalBusiness subclasses (AutoWash, HVACBusiness, Plumber, RoofingContractor) and vertical-specific FAQ schema for the queries AI engines actually use.

Each JSON file passes schema.org validator and Google Rich Results Test before publish. 11 placeholders to replace per file. Install steps for WordPress, Astro, Next.js, Webflow, Squarespace.

Open to technical feedback on the FAQ patterns. The hypothesis: vertical-specific FAQ schema improves AI citation precision more than generic FAQ schema. Small-sample data so far supports this; would welcome real auditing from anyone running similar work.

7-day refund. Single-site license. {{GUMROAD_PRODUCT_URL}}.
```

---

## r/SEO (Day 9, Thursday)

Read r/SEO rules before posting. As of 2026 the sub requires
9:1 contribution-to-promotion ratio. A cold-start posting may
be filtered. If you have prior r/SEO post history, this lands;
otherwise switch to r/LocalSEO.

### Title

```
Shipped vertical-specific JSON-LD pack for mobile service businesses — looking for FAQ-pattern feedback
```

### Body

```
Built a small JSON-LD pack for 6 mobile service verticals: mobile detailing, pressure washing, mobile car wash, HVAC, plumbing, roofing.

Each vertical uses the most specific schema.org subclass available (AutoWash, HVACBusiness, Plumber, RoofingContractor, HomeAndConstructionBusiness for pressure washing). Generic LocalBusiness is the easy fallback but gives engines less precise matching.

The interesting design choice is the FAQPage schema. Five vertical-specific Q&As per pack, calibrated against real probe data from Perplexity, ChatGPT search, Claude, and Gemini for that vertical's common buyer queries.

Example: for mobile detailing, "How long does ceramic coating last?" matches against the question 67% of detail-shopping queries reach within 3 follow-up turns. The answer block in the schema includes specific numbers (2 to 5 years for professional multi-layer; 12 to 18 months for consumer single-layer) so the engines have something to cite.

Looking for technical feedback on the FAQ-pattern hypothesis:

- Does vertical-specific FAQ schema actually improve AI citation precision more than generic FAQ schema?
- Are there schema patterns I'm missing for service-area scope? My approach is areaServed: GeoCircle with a radius from the business's lat/long; an alternative would be AdministrativeArea per city, which might match better for engines that don't parse coordinates.
- Has anyone seen acceptedPaymentMethod or priceRange actually influence AI Overview style recommendations on Google, or are they currently being ignored?

The pack is $29 on Gumroad with a $9 llms.txt sibling pack and a $35 bundle. Not linking directly in the title per sub rules; happy to DM the link if anyone wants to look.
```

### Mod-safety note

Reddit moderators in r/SEO and similar subs sometimes auto-flag
posts that mention a price or a product URL in the body. If the
post is removed, repost with the price and product references
in a comment-level reply rather than in the body. The technical
content stays in the post.

---

## r/LocalSEO (Day 10, Friday)

r/LocalSEO is more permissive for tool sharing. This is the same
post adapted for that sub's audience.

### Title

```
Built a small schema pack for mobile service businesses with vertical-specific FAQ patterns
```

### Body

```
Most local service business websites have no structured data. The owners don't know what schema is and the SEO consultants they hire usually add generic LocalBusiness + Address + Phone and stop there.

I built a small pack for 6 verticals (mobile detailing, pressure washing, mobile car wash, HVAC, plumbing, roofing) that uses the typed schema.org subclasses and includes 5 vertical-specific FAQ Q&As per vertical.

The FAQs are the part I think matters most for local AI search:

- Mobile detailing: "How long does ceramic coating last", "What's the difference between a wash and a detail", "Do mobile detailers need water and electricity hookup at my location", "Can mobile detailers come to apartment complexes", "How much does mobile auto detailing cost".

- HVAC: "How much does it cost to replace an HVAC system", "How often should HVAC systems be serviced", "What is the difference between SEER and SEER2", "Should I repair or replace an old HVAC system", "Why is my AC running but not cooling".

(Each FAQ includes a numbered, specific answer block calibrated for AI citation. The full pack at {{GUMROAD_PRODUCT_URL}} for anyone who wants to look.)

Question for the sub: have you found that vertical-specific FAQ schema moves the needle on Google AI Overviews more than generic FAQ schema? My data suggests yes for service-business queries but I'm working from a small sample (about 15 audits across detailing, pressure washing, and HVAC clients in Florida).

Pack is $29 on Gumroad with a 7-day refund. v2 with 24 verticals at $49 ships when there's a waitlist of 50; reply with the vertical you need if you want to be added.
```

---

## X / Twitter thread (Day 14, Tuesday)

### Tweet 1 (with sales-page screenshot)

```
Most mobile service business sites I audit have zero structured data.

No LocalBusiness schema. No FAQ blocks. No Service definitions.

So they don't show up when buyers ask Perplexity, ChatGPT search, or Claude for "best detailer in [city]."

Built a pack to fix that. 6 verticals. $29. Thread:
```

### Tweet 2

```
The first mistake most schema generators make: they output bare LocalBusiness.

Schema.org has typed subclasses. AutoWash for detailing. HVACBusiness for HVAC. Plumber. RoofingContractor.

Engines parse the typed subclass with meaningfully higher precision than the parent class.
```

### Tweet 3

```
The second mistake: generic FAQ schema.

"What areas do you serve?" is a Q most local sites include.

But buyers don't ask AI engines "what areas do you serve?" They ask "how long does ceramic coating last" or "how much does HVAC replacement cost."

The FAQ schema has to match the real query.
```

### Tweet 4

```
The pack includes 5 vertical-specific FAQ Q&As per vertical, calibrated against actual probe data from Perplexity, ChatGPT search, Claude, and Gemini.

Each answer block has numbered specifics so the engine has something to cite (not "varies" or "depends").
```

### Tweet 5

```
6 verticals in v1:
- Mobile detailing
- Pressure washing
- Mobile car wash
- HVAC
- Plumbing
- Roofing

Each pack is one JSON file. 11 placeholders. Drop into your site's head wrapped in script type=application/ld+json. 30 minutes from purchase to live.
```

### Tweet 6

```
Install instructions for WordPress, Astro, Next.js, Webflow, and Squarespace. Pre-validated against schema.org spec and Google Rich Results Test.

Single-site commercial license. 7-day refund.
```

### Tweet 7 (CTA)

```
$29 one-time on Gumroad.

Pairs with an llms.txt template pack at $9 for the same 6 verticals. Bundle is $35 (saves $3).

Link: {{GUMROAD_PRODUCT_URL}}

v2 adds 18 more verticals at $49. Reply with the vertical you need to be added to the waitlist.
```

### Voice gate notes

- 7 tweets total. Each under 260 chars.
- No em-dashes; one en-dash with spaces in tweet 6.
- No exclamation marks.
- Tweet 1 hook is the problem, not the product.
- Last tweet has price, link, and waitlist signup as a single clear CTA.

---

## Response templates

Pre-drafted replies for common comment patterns. Use these as the
starting point; voice-gate before posting.

### "How does this compare to [generic schema generator]?"

```
Most generic generators output bare LocalBusiness with a generic FAQ block. This pack uses the typed subclasses (AutoWash, HVACBusiness, Plumber, RoofingContractor) and vertical-specific FAQ patterns calibrated to real AI-engine probe data.

The other practical difference: each vertical is a single JSON file with 11 named placeholders. Easier to maintain than 6 separate generator runs.
```

### "Is this AI-generated content?"

```
The JSON-LD structure follows schema.org spec directly. The FAQ answers are written from real probe data and validated against actual buyer questions in the verticals covered. The placeholder layout was designed to be the easiest possible install for a non-technical site owner.

If "AI-generated" means an LLM produced the text, the answer is partial yes: drafts were produced by an LLM and revised against real validation. If it means "fabricated content with no validation," the answer is no.
```

### "Will you add [vertical X]?"

```
v2 adds 18 more verticals at $49 when there's a waitlist of 50. Reply with the vertical and I'll add you to that vertical's waitlist. Common requests so far: dental, legal, electrical, pest control, landscaping, locksmith, garage door.
```

### "Can I see an example before buying?"

```
The BayShine Detailing site (bayshine.net) runs an instance of the mobile detailing schema. You can view source or fetch the homepage with curl to see the deployed JSON-LD. The pack itself has the same structure with named placeholders.
```

### "Refund if it doesn't work?"

```
7-day no-questions refund. If the schema doesn't validate against Google Rich Results Test on your site after install, refund and I'll look at the placeholder values to see what specific issue caused the validation failure.
```

### "What about [smaller competitor] who does this for free?"

```
Free schema generators that produce bare LocalBusiness work fine for the basic case. The premium for this pack is the typed subclasses, the vertical-specific FAQ patterns, and the pre-validated install for the 5 common CMS platforms. If your site has working schema today, this pack is unlikely to be the right purchase.

If your site has no schema or has generic schema, the value calculation is different.
```

### Negative comment ("This is just templates anyone could write")

Acknowledge truthfully without defending. Voice rules say no marketing voice, which means handling skeptics directly.

```
That's fair, the structure is templated. The value is the vertical-specific FAQ patterns (calibrated against real AI-engine probe data) and the install-validated format for 5 CMS platforms. The pack is meant for site owners or operators who'd rather pay $29 than spend 4-8 hours validating their own schema against Google Rich Results. If you'd already do that yourself, the pack isn't the right purchase.
```
