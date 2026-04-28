// All 19 service area zip codes.
// "premium" tier zips receive longer, recurring-program-focused copy.
// "standard" tier zips receive shorter, one-time-service-focused copy.

export type ZipTier = 'premium' | 'standard';

export interface ZipInfo {
  code: string;
  city: string;
  county: 'Pasco' | 'Hillsborough';
  tier: ZipTier;
  copyNote: string; // used for /service-area page copy
}

export const SERVICE_AREA: ZipInfo[] = [
  // Pasco County
  {
    code: '34637', city: 'Land O Lakes', county: 'Pasco', tier: 'standard',
    copyNote: 'One-time and recurring service available.',
  },
  {
    code: '34638', city: 'Land O Lakes', county: 'Pasco', tier: 'premium',
    copyNote: 'Standing Detail program available. Multi-vehicle households prioritized.',
  },
  {
    code: '34639', city: 'Land O Lakes', county: 'Pasco', tier: 'standard',
    copyNote: 'One-time and recurring service available.',
  },
  {
    code: '33544', city: 'Wesley Chapel', county: 'Pasco', tier: 'premium',
    copyNote: 'Standing Detail program available. Priority slots open.',
  },
  {
    code: '34610', city: 'Spring Hill', county: 'Pasco', tier: 'standard',
    copyNote: 'One-time service available.',
  },
  {
    code: '33576', city: 'San Antonio', county: 'Pasco', tier: 'standard',
    copyNote: 'One-time service available.',
  },
  {
    code: '33543', city: 'Wesley Chapel', county: 'Pasco', tier: 'premium',
    copyNote: 'Standing Detail program available. Multi-vehicle households prioritized.',
  },
  {
    code: '33545', city: 'Wesley Chapel', county: 'Pasco', tier: 'standard',
    copyNote: 'One-time and recurring service available.',
  },
  {
    code: '34654', city: 'New Port Richey', county: 'Pasco', tier: 'standard',
    copyNote: 'One-time service available.',
  },
  {
    code: '34669', city: 'Hudson', county: 'Pasco', tier: 'standard',
    copyNote: 'One-time service available.',
  },
  {
    code: '33574', city: 'Saint Leo', county: 'Pasco', tier: 'standard',
    copyNote: 'One-time service available.',
  },
  // North Hillsborough County
  {
    code: '33558', city: 'Lutz', county: 'Hillsborough', tier: 'premium',
    copyNote: 'Standing Detail program available. Priority slots open.',
  },
  {
    code: '33559', city: 'Lutz', county: 'Hillsborough', tier: 'standard',
    copyNote: 'One-time and recurring service available.',
  },
  {
    code: '33548', city: 'Lutz', county: 'Hillsborough', tier: 'premium',
    copyNote: 'Standing Detail program available. Multi-vehicle households prioritized.',
  },
  {
    code: '33549', city: 'Lutz', county: 'Hillsborough', tier: 'standard',
    copyNote: 'One-time and recurring service available.',
  },
  {
    code: '33556', city: 'Odessa', county: 'Hillsborough', tier: 'premium',
    copyNote: 'Standing Detail program available. Priority slots open.',
  },
  {
    code: '33647', city: 'Tampa (New Tampa)', county: 'Hillsborough', tier: 'premium',
    copyNote: 'Standing Detail program available. Multi-vehicle households prioritized.',
  },
  {
    code: '34655', city: 'Trinity', county: 'Hillsborough', tier: 'standard',
    copyNote: 'One-time and recurring service available.',
  },
  {
    code: '33613', city: 'Tampa (Carrollwood)', county: 'Hillsborough', tier: 'standard',
    copyNote: 'One-time and recurring service available.',
  },
];

export const PREMIUM_ZIPS = SERVICE_AREA
  .filter(z => z.tier === 'premium')
  .map(z => z.code);

export const ALL_ZIPS = SERVICE_AREA.map(z => z.code);
