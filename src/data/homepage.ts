// Homepage conversion content: pricing cards, community discount, plain-language FAQ.
//
// NOTE: The public site historically shows NO pricing (see pricing.ts + CLAUDE.md).
// This override is deliberate: the owner wants the homepage to sell directly with
// real "starting at" prices, a community discount, and a plain, 5th-grade-reading-level
// voice. All dollar figures are pulled from pricing.ts so numbers stay single-source.

import { PRICE_FLOORS, STANDING_DETAIL, getQuotePrice } from './pricing';
import type { FAQ } from './faq';

export type HomepageIcon = 'spray' | 'car' | 'repeat' | 'sparkle' | 'shield' | 'truck';

export interface HomepagePackage {
  id: string;
  name: string;
  /** One short, plain line (~5th-grade reading level). */
  blurb: string;
  /** Lowest real sedan price. `null` = custom/quote-based (fleet). */
  startingAt: number | null;
  /** Recurring price shown as "then $X/visit". */
  perVisit?: number;
  unit?: string;
  includes: string[];
  badge?: string;
  featured?: boolean;
  href: string;
  iconName: HomepageIcon;
}

// Prices trace to pricing.ts. `!` is safe: these argument combos always resolve.
const ceramicStart = getQuotePrice('sedan', 'ceramic', 'light')!.startingAt; // 750
const reconStart = getQuotePrice('sedan', 'recon', 'heavy')!.startingAt;      // 325

export const HOMEPAGE_PACKAGES: HomepagePackage[] = [
  {
    id: 'exterior',
    name: 'Outside Wash & Shine',
    blurb: 'We make the outside clean, smooth, and shiny. Great for a quick refresh.',
    startingAt: PRICE_FLOORS.exteriorSedan, // 185
    includes: ['Full hand wash', 'Clay + sealant for a slick finish', 'Wheels, tires, and glass cleaned'],
    href: '/exterior-detail',
    iconName: 'spray',
  },
  {
    id: 'full',
    name: 'Full Detail – Inside & Out',
    blurb: 'The whole car, top to bottom. Looks and feels brand new when we leave.',
    startingAt: PRICE_FLOORS.fullSedan, // 255
    badge: 'MOST POPULAR',
    includes: ['Everything in Outside Wash & Shine', 'Seats, carpets, and mats deep cleaned', 'Dash, doors, and vents wiped down'],
    href: '/full-detail',
    iconName: 'car',
  },
  {
    id: 'standing',
    name: 'The Standing Detail',
    blurb: 'We come back every 6 weeks and keep your car looking new. Cancel anytime.',
    startingAt: STANDING_DETAIL.sedan.baseline, // 255 first visit
    perVisit: STANDING_DETAIL.sedan.recurring, // 199 after
    unit: 'visit',
    badge: 'BEST VALUE',
    featured: true,
    includes: ['First visit is a full detail', 'Then a locked lower price every visit', 'Priority booking, first slots are yours'],
    href: '/standing-detail',
    iconName: 'repeat',
  },
  {
    id: 'recon',
    name: 'Heavy Clean-Up',
    blurb: 'Rough shape? Kids, pets, spills, or years of use? We bring it all the way back.',
    startingAt: reconStart, // 325
    includes: ['Deep stain and odor removal', 'Heavy dirt, pet hair, and grime', 'Like a reset button for your car'],
    href: '/recon',
    iconName: 'sparkle',
  },
  {
    id: 'ceramic',
    name: 'Ceramic Coating',
    blurb: 'A tough, glassy shield. Water rolls right off and the shine lasts for years.',
    startingAt: ceramicStart, // 750
    includes: ['Paint corrected first', 'Long-lasting UV + water protection', 'Deep, wet-looking gloss'],
    href: '/ceramic-coating',
    iconName: 'shield',
  },
  {
    id: 'fleet',
    name: 'Fleet & Lots',
    blurb: 'Cars for sale or a whole lot to keep clean? We do volume, on a schedule.',
    startingAt: null, // per-vehicle, quoted
    includes: ['Per-vehicle pricing', 'Standing weekly or monthly schedule', 'One simple monthly invoice'],
    href: '/fleet',
    iconName: 'truck',
  },
];

// Community / "hometown hero" discount.
export const HERO_DISCOUNT = {
  percent: 10,
  groups: ['First responders', 'Nurses', 'Military', 'Teachers', 'Ages 55+'],
  line: 'You keep us safe, teach our kids, care for the sick, or you have earned it. You save 10% on every visit.',
  proof: 'Just show a valid ID when we arrive.',
};

// Plain-language homepage FAQ (simpler voice than the brand /data/faq.ts set).
export const HOMEPAGE_FAQS: FAQ[] = [
  {
    question: 'Do I have to bring my car somewhere?',
    answer: 'No. We come to you. We bring our own water and power, so all we need is a spot to park your car at your home or work.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Full prices are right here on this page. Our most popular full detail starts at $255. Want an exact number for your car? Tap Get a Quote and you will see a price in seconds.',
  },
  {
    question: 'How long does it take?',
    answer: 'Most jobs take a few hours. We will give you a time when you book so you can plan your day.',
  },
  {
    question: 'What if I am not happy?',
    answer: 'We make it right. You are a neighbor, not a number, and we want to earn your car for life.',
  },
  {
    question: 'What areas do you cover?',
    answer: 'We serve Pasco County and North Hillsborough, FL. Not sure if you are in range? Just call or text (813) 324-5522.',
  },
];
