# Demand probe — IndieHackers post

Post this to <https://www.indiehackers.com/> in the "Ideas and Validation"
section. Title and body below. No edits needed — the voice is already
calibrated.

---

## Title

Building a $29 schema pack for mobile service businesses — does this exist already?

## Body

Working on a small product for a niche I'd appreciate a sanity check on.

The pain: most mobile service businesses (detailing, pressure washing, HVAC, plumbing, roofing) have websites with zero structured data. No LocalBusiness schema, no Service schema, no FAQPage. They lose visibility in Google's local pack and they don't appear when someone asks Perplexity or ChatGPT search for recommendations in their area.

The product I'm working on: a $29 schema pack with validated JSON-LD for 6 mobile service verticals. Each vertical gets a `LocalBusiness` (typed to the right schema.org subclass, like `AutoWash`, `HVACBusiness`, `Plumber`), a `Service` block with a price range placeholder, and a `FAQPage` with 5 vertical-specific Q&As that match how AI engines parse "best [X] in [city]" queries.

Buyer copies the JSON, replaces the placeholder values (business name, address, phone, service area), pastes into their site's `<head>`. Done.

A few questions:

1. Is there an existing product that does this? I've found generic schema generators but none specifically built for mobile service businesses with the vertical-specific FAQ patterns.
2. Is $29 too high or too low? My alternative price point is $49 with 24 verticals included.
3. Would you buy this for a single client site, or does it only make sense for agencies who'd buy at the higher tier?

If anyone wants to be a beta buyer at half price ($14) in exchange for a 2-paragraph case study, reply or DM. First 10 spots.

The 6 verticals in v1: mobile detailing, pressure washing, mobile car wash, HVAC, plumbing, roofing. v2 adds 18 more verticals at $49.

Thanks for any feedback.
