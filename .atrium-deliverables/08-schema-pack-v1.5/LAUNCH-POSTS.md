# Launch posts — Schema Pack v1.5

Drafted by the launch-specialist descendant. Each section is a
ready-to-paste post for the channel named. Voice gate applied.

Launch sequence position: **Week 2-3 (Day 16-18 primary; Day 21 Cited Weekly
Issue 002 covers first-week results).** The launch-specialist should slot v1.5
between the llms.txt Pack launch (Day 16) and Cited Weekly Issue 002 (Day 21).
One option: Day 16 launches both llms.txt and v1.5 together (bundle framing),
moving the llms.txt-only secondary post to Day 17. See `LAUNCH-SEQUENCE.md`.

---

## IndieHackers (primary, Day 16-18)

### Title (under 80 chars)

```
Expanded Schema Pack to 9 verticals — $39, v1 buyers get free upgrade
```

### Body

```
Schema Pack v1 shipped at 6 verticals two weeks ago. The free Schema Generator
I shipped for Forge covers 9 (including electrical, pest control, and
landscaping). The pack was a revision behind. Fixed that.

Schema Pack v1.5 now matches the generator's coverage:

- Mobile detailing
- Pressure washing
- Mobile car wash
- HVAC
- Plumbing
- Roofing
- Electrical (new — Electrician subclass, service area, FAQ calibrated for
  permit-job and panel-upgrade queries)
- Pest control (new — PestControl subclass, quarterly service contract FAQ,
  treatment-guarantee Q&As)
- Landscaping (new — LandscapeService subclass, seasonal maintenance FAQ,
  commercial vs residential scope Q&As)

Same format as v1: one JSON file per vertical, 11 named placeholders, 30 minutes
from purchase to live. Pre-validated against schema.org spec and Google Rich
Results Test. Install instructions for WordPress, Astro, Next.js, Webflow,
Squarespace.

Price: $39 one-time on Gumroad. v1 buyers at $29 get free upgrade — reply to
your purchase confirmation email with subject "v1.5 upgrade" and I'll send the
new download.

Bundle with the llms.txt Pack v1 ($9) at $45 (saves $3).

Link: {{GUMROAD_PRODUCT_URL_V15}}

Two genuine questions for anyone who has run schema for electrical or pest
control businesses:

1. For electrical contractors, I defaulted to Electrician as the subclass. A few
   sites I audited use HomeAndConstructionBusiness or even the generic
   LocalBusiness. Is Electrician the right call in your experience, or does the
   more general class match better against AI-engine results for permit-job
   queries?

2. Pest control has a quarterly-treatment revenue model that most other service
   verticals don't. I included a FAQ block around "how long does treatment last"
   and "do I need to be home" but did not include schema for the recurring
   subscription model. Is there a schema.org pattern that handles service
   subscriptions cleanly, or does the default Service block handle it
   adequately?
```

### Voice gate notes

- No em-dashes (commas and line breaks used in their place).
- No exclamation marks.
- No "we'd love" or "feel free" or "passionate."
- Upgrade path for v1 buyers mentioned directly — no artificial scarcity.
- Two technical questions for the audience are genuine (I do not yet have
  data on the Electrician subclass vs. broader subclass performance in these
  two new verticals).
- Cross-references Forge Schema Generator by name as context for the
  expansion — not a sales pitch for Forge.

---

## Hacker News (conditional — only if v1 received strong HN engagement)

Skip HN for v1.5 unless the v1 post generated meaningful HN engagement. A
minor version expansion is harder to frame as a Show HN.

If attempted:

### Title

```
Show HN: Schema Pack v1.5 — 9 service verticals, validated JSON-LD, free
upgrade for v1 buyers
```

### Body

```
Three new verticals since v1 (electrical, pest control, landscaping). Each uses
the most specific schema.org subclass available (Electrician, PestControl,
LandscapeService) and includes 5 FAQ Q&As calibrated against AI-engine probe
data for that vertical's common buyer queries.

The expansion was prompted by coverage parity: the free Schema Generator at
Forge covered 9 verticals; the pack was behind at 6. Now they match.

Technical question I'd welcome input on: for electrical contractors, I used the
Electrician subclass. Electrical businesses also do panel upgrades, generator
installation, commercial wiring — work that falls under different mental models
than "call an electrician." Is Electrician the most AI-accurate subclass for
commercial electrical queries, or does a broader type like
HomeAndConstructionBusiness serve those queries better?

$39 one-time. v1 buyers get free upgrade. {{GUMROAD_PRODUCT_URL_V15}}.
```

---

## r/SEO (Day 17-18)

Read r/SEO rules before posting. Contribution-to-promotion ratio applies.

### Title

```
Schema Pack v1.5 — 9 verticals with typed subclasses, looking for feedback on
Electrician subclass vs broader types
```

### Body

```
Expanded Schema Pack from 6 to 9 service verticals last week. New verticals:
electrical, pest control, landscaping.

Each vertical uses the most specific schema.org subclass available:

- Mobile detailing: AutoWash
- Pressure washing: HomeAndConstructionBusiness
- Mobile car wash: AutoWash
- HVAC: HVACBusiness
- Plumbing: Plumber
- Roofing: RoofingContractor
- Electrical: Electrician (new)
- Pest control: PestControl (new)
- Landscaping: LandscapeService (new)

The three new subclasses are less studied in the AI-search context. For
established verticals I have probe data from BayShine (mobile detailing, Pasco
County) and from a small set of HVAC and plumbing clients in Florida. For the
three new verticals, the subclass assignments are based on schema.org
documentation and Google Rich Results Test validation, not yet from live
citation data.

Two specific questions for the sub:

1. Electrician vs. HomeAndConstructionBusiness for commercial electrical work:
   does the typed subclass actually improve citation precision for
   "licensed commercial electrician [city]" queries, or does the broader class
   perform comparably for commercial-specific searches?

2. LandscapeService for residential vs. commercial landscaping: is there a
   practical difference in how AI engines cite LandscapeService-typed schema
   for residential lawn maintenance vs. commercial grounds keeping queries?

Pack is $39 on Gumroad, 7-day refund, single-site commercial license. Bundle
with llms.txt Pack v1 ($9) at $45. Not posting URL per sub rules; DM if you
want the link.
```

---

## r/LocalSEO (Day 17-18)

### Title

```
Schema Pack updated to 9 verticals — added electrical, pest control, landscaping
with vertical-specific FAQ patterns
```

### Body

```
Two weeks ago I shipped Schema Pack v1 for 6 mobile service verticals. The
Forge Schema Generator I launched simultaneously covered 9 verticals. The pack
was behind; now they're aligned.

v1.5 additions:

**Electrical (Electrician subclass)**
- FAQ calibrated for permit-job queries: "Do I need a permit for electrical
  panel replacement", "How long does an electrical inspection take", "What is
  the difference between 100-amp and 200-amp service", "How often do GFCI
  outlets need to be tested", "What size generator do I need for my house."
- The commercial electrical FAQ uses "licensed commercial electrician" framing
  rather than "residential electrician" to capture both segments.

**Pest control (PestControl subclass)**
- FAQ calibrated for quarterly service and treatment guarantee queries: "How
  long does pest treatment last", "Do I need to leave my home during
  treatment", "Is pest treatment safe for pets and children", "What pests are
  covered under a quarterly service plan", "Does pest control work in the
  winter."
- Includes a recurring-service framing note (most pest control revenue is
  quarterly contracts, not one-off treatments; the FAQ schema accounts for
  both entry points).

**Landscaping (LandscapeService subclass)**
- FAQ calibrated for residential lawn and commercial grounds queries:
  "What is included in a basic lawn maintenance plan", "Do landscapers
  handle tree trimming", "How far in advance do I need to book spring
  cleanup", "Does landscaping affect property value", "What is the
  difference between landscaping and lawn care."

All nine verticals in v1.5 use the GeoCircle areaServed pattern. The FAQ
blocks include numbered specifics so AI engines have something to cite (not
"depends" or "varies").

Pack is $39 on Gumroad, 7-day refund. v1 buyers at $29 get free upgrade.
Bundle with llms.txt Pack at $45.

Genuinely curious: have any of you run pest control or landscaping schema and
noticed which FAQ patterns pull the most AI citation impressions? My data on
those two verticals is thin compared to detailing and HVAC.

{{GUMROAD_PRODUCT_URL_V15}}
```

---

## X / Twitter thread (Day 18, or Day 21 to coincide with Cited Weekly Issue 002)

### Tweet 1

```
Schema Pack v1.5 is out. 9 verticals now.

Added electrical, pest control, landscaping — the three verticals the Forge
Schema Generator already covered but the pack didn't.

Thread on what changed and one open technical question:
```

### Tweet 2

```
Three new subclasses:

- Electrician (for electrical contractors)
- PestControl (for pest control services)
- LandscapeService (for landscaping / lawn care)

Each is more specific than the parent LocalBusiness. Engines parse typed
subclasses with higher precision.
```

### Tweet 3

```
The FAQ schema for electrical covers both residential and commercial queries:
permit jobs, panel upgrades, GFCI testing, generator sizing.

The pest control FAQs are the most unusual: most pest control revenue is
quarterly contracts. The FAQ pattern covers both one-time treatment and
recurring plan entry points.
```

### Tweet 4

```
The landscaping FAQs split residential and commercial without two separate
schema files — the FAQ block includes framing that covers "lawn maintenance
plan" and "commercial grounds keeping" from the same service entity.

This is a design choice I'm not certain is optimal. Separate files per segment
might produce cleaner results.
```

### Tweet 5

```
Open question: for electrical contractors, is Electrician the right subclass
for commercial electrical work?

Commercial electrical queries (licensed commercial electrician, industrial
panel installation) are more specific than "electrician near me." I don't yet
have probe data confirming Electrician outperforms HomeAndConstructionBusiness
for commercial queries.
```

### Tweet 6

```
v1.5 is $39. v1 buyers at $29 get free upgrade — reply to your purchase email.

Bundle with llms.txt Pack v1 ($9) at $45. Both packs cover the same 9
verticals and install side-by-side.

Single-site license. 7-day refund.

{{GUMROAD_PRODUCT_URL_V15}}
```

### Voice gate notes

- 6 tweets. Each under 280 chars.
- No em-dashes.
- No exclamation marks.
- Tweet 4 includes a genuine design uncertainty (single file vs. split files
  for commercial/residential landscaping) — not a rhetorical question.
- Tweet 5 is the open technical question that solicits replies and builds
  the thread's engagement.

---

## Response templates

Pre-drafted replies for common comment patterns on v1.5 launch posts.

### "What changed from v1?"

```
Three new verticals: electrical (Electrician subclass), pest control
(PestControl subclass), landscaping (LandscapeService subclass). Same format as
v1 — one JSON file per vertical, 11 named placeholders, 30 minutes to live.
Price moved from $29 to $39. v1 buyers at $29 get free upgrade on request.
```

### "Is v1 still available?"

```
Yes. v1 ($29, 6 verticals) stays on Gumroad as the lower entry point. v1.5
($39, 9 verticals) is a separate SKU. If you need only detailing, pressure
washing, car wash, HVAC, plumbing, or roofing, v1 covers those at a lower
price.
```

### "Why didn't you just update v1 instead of charging more?"

```
v1 buyers get the upgrade free. New buyers pay $39 for 9 verticals; the old
$29 price buys 6. The three new verticals have distinct FAQ patterns that took
research time; the price difference reflects that.
```

### "Which version should I buy?"

```
If your business is in electrical, pest control, or landscaping: v1.5.
If your vertical is one of the original six (detailing, pressure washing, car
wash, HVAC, plumbing, roofing) and you want only that vertical: v1 at $29 is
fine.
If you might add more service lines later, v1.5 at $39 saves re-buying.
```

### "How does this compare to the free Forge Schema Generator?"

```
The Forge Schema Generator (free) generates schema in your browser from form
inputs. The Schema Pack gives you one validated JSON file per vertical with
pre-written FAQ Q&As calibrated against AI-engine probe data and install
instructions for 5 platforms.

The generator is the right tool if you want one file quickly. The pack is the
right tool if you want pre-validated FAQ patterns, installation docs, and the
ability to reuse the same file across clients or verticals without re-running
the generator each time.

They cover the same 9 verticals intentionally. Buy neither, the generator, or
the pack — whichever matches your use case.
```

### "Does this work for [vertical not in the pack]?"

```
Not yet. v2 adds 15 more verticals at $49 (dental, legal, mobile mechanic,
mobile pet grooming, locksmith, garage door, residential cleaning, commercial
cleaning, junk removal, moving, painting, handyman, window cleaning, gutter
cleaning, pool service) when v1.5 has 50 sales or a waitlist of 100.

Reply with your vertical and I'll add you to the v2 waitlist.
```

### "Is there schema for multi-location businesses?"

```
Not in this pack — each file is single-location. Multi-location schema requires
a separate LocalBusiness entity per location under the same Organization parent.
That's structural work beyond what a template pack covers efficiently.

For multi-location or franchise implementations, the GEO Setup productized
service (Atrium) handles that scope, or the Forge Enterprise GEO Sprint for
chains with 5+ locations.
```
