# Demand probe — r/LocalSEO post

Post this to <https://www.reddit.com/r/LocalSEO/>. Voice is calibrated for
that subreddit — direct, technical, no marketing tone. Reddit downvotes
anything that smells like a pitch; this is positioned as a "I built this
because I needed it, sharing" post.

Read the rules of r/LocalSEO before posting to make sure self-promotion
guidelines are met. As of 2026 the subreddit allows tool / resource
sharing when it's clearly useful and not link-bait.

If r/LocalSEO is too restrictive, second-choice subreddit is r/SEO or
r/smallbusiness.

---

## Title

Built a small JSON-LD pack for mobile service verticals — looking for feedback on the vertical-specific FAQ patterns

## Body

Most of the local service sites I audit have either no schema at all or generic `LocalBusiness` with no specificity. The biggest gap is on the FAQ schema. Generic FAQs ("what areas do you serve?") don't help AI engines like Perplexity or ChatGPT search match a user's specific question against a business.

I've been working on a small pack of JSON-LD templates for 6 mobile service verticals — mobile detailing, pressure washing, mobile car wash, HVAC, plumbing, roofing. Each vertical includes:

- `LocalBusiness` typed to the most specific schema.org subclass (e.g., `AutoWash` for detailing, `HVACBusiness` for HVAC, `Plumber` for plumbing, `RoofingContractor` for roofing).
- `Service` block with `areaServed` set to a `GeoCircle` template and a price-range placeholder.
- `FAQPage` with 5 vertical-specific Q&As. These are the part I think matters most for AI search.

For example, the mobile detailing FAQs are: "How long does ceramic coating last?", "What's the difference between a wash and a detail?", "Do mobile detailers need water and electricity hookup at my location?", "Can mobile detailers come to my apartment complex?", "How much does ceramic coating cost?"

Question for the sub: are there FAQ patterns you've seen consistently move the needle on AI citation that I should add? Specifically I'm wondering about:

- Whether `acceptedPaymentMethod` and `priceRange` actually influence AI-engine recommendations in 2026 or whether they're ignored.
- Whether the `areaServed` GeoCircle radius matters or whether the engines only look at the city/state in `address`.
- Whether you've seen FAQ schema get used in AI-Overview style responses on Google AI Overviews specifically.

If the pack is useful when I'm done I'll probably list it for $29 on Gumroad. Happy to share the WIP if anyone wants to look — DM me.

(Mod note: not linking the product anywhere because it's not live. Just looking for technical feedback on the schemas before I commit to the listing.)
