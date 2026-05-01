// Single source of truth for all pricing. Update here only.
// Public pages never display these numbers — only /quote output uses them.

export type VehicleType = 'sedan' | 'midsuv' | 'largesuv';
export type ServiceType = 'exterior' | 'full' | 'ceramic' | 'recon';
export type Condition = 'light' | 'moderate' | 'heavy';

export interface PriceRange {
  min: number;
  max: number;
}

export interface PriceResult extends PriceRange {
  display: string;      // "Starting at $255"
  startingAt: number;   // floor price for display
}

// Price floors that may never be undercut.
export const PRICE_FLOORS = {
  exteriorSedan: 185,
  fullSedan: 255,
  lotWash: 1.0,
} as const;

// Internal rate card.
const RATES = {
  exterior: {
    sedan:    { min: 185, max: 185 },
    midsuv:   { min: 225, max: 225 },
    largesuv: { min: 275, max: 275 },
  },
  full: {
    light: {
      sedan:    { min: 255, max: 255 },
      midsuv:   { min: 295, max: 295 },
      largesuv: { min: 345, max: 345 },
    },
    moderate: {
      sedan:    { min: 255, max: 295 },
      midsuv:   { min: 295, max: 345 },
      largesuv: { min: 345, max: 395 },
    },
    heavy: {
      sedan:    { min: 325, max: 395 },
      midsuv:   { min: 375, max: 475 },
      largesuv: { min: 450, max: 575 },
    },
  },
  ceramic: {
    sedan:    { min: 750, max: 799 },
    midsuv:   { min: 850, max: 899 },
    largesuv: { min: 900, max: 949 },
  },
  recon: {
    sedan:    { min: 325, max: 395 },
    midsuv:   { min: 375, max: 475 },
    largesuv: { min: 450, max: 575 },
  },
} as const;

// Fleet pricing — internal reference only. Not displayed on public pages.
export const FLEET_RATES = {
  lotWash:     { min: 1.00, max: 1.25, unit: '/vehicle', note: '30-unit minimum' },
  salesPrep:   { min: 75,   max: 100,  unit: '/vehicle' },
  reconDetail: { min: 150,  max: 250,  unit: '/vehicle' },
  vanWash:     { min: 9,    max: 15,   unit: '/vehicle' },
} as const;

// Standing Detail recurring program.
export const STANDING_DETAIL = {
  sedan:    { recurring: 199, baseline: 255 },
  midsuv:   { recurring: 239, baseline: 295 },
  largesuv: { recurring: 279, baseline: 345 },
} as const;

export function getQuotePrice(
  vehicle: VehicleType,
  service: ServiceType,
  condition: Condition,
): PriceResult | null {
  let range: PriceRange | null = null;

  if (service === 'exterior') {
    range = RATES.exterior[vehicle];
  } else if (service === 'full') {
    const tier = condition === 'heavy' ? 'heavy' : condition === 'moderate' ? 'moderate' : 'light';
    range = RATES.full[tier][vehicle];
  } else if (service === 'ceramic') {
    range = RATES.ceramic[vehicle];
  } else if (service === 'recon') {
    range = RATES.recon[vehicle];
  }

  if (!range) return null;

  const min = Math.max(
    range.min,
    service === 'exterior' && vehicle === 'sedan' ? PRICE_FLOORS.exteriorSedan : 0,
    service === 'full'     && vehicle === 'sedan' ? PRICE_FLOORS.fullSedan     : 0,
  );

  return {
    min,
    max: range.max,
    startingAt: min,
    display: `Starting at $${min}`,
  };
}
