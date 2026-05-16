export type ZipPriority = 'high' | 'standard' | 'edge';

export interface ZipEntry {
  code: string;
  city: string;
  neighborhoods: string[];
  priority: ZipPriority;
}

export const SERVICE_AREA: ZipEntry[] = [
  { code: '33556', city: 'Odessa', neighborhoods: ['Keystone', 'Eagles', 'Starkey Ranch'], priority: 'high' },
  { code: '33548', city: 'Lutz', neighborhoods: ['Cheval', 'Lake Fern'], priority: 'high' },
  { code: '33558', city: 'Lutz', neighborhoods: ['Steinbrenner', 'Van Dyke Farms'], priority: 'high' },
  { code: '33647', city: 'New Tampa', neighborhoods: ['Tampa Palms', 'Cory Lake Isles', 'Live Oak Preserve', 'Hunters Green'], priority: 'high' },
  { code: '33544', city: 'Wesley Chapel', neighborhoods: ['Seven Oaks', 'Wiregrass Ranch'], priority: 'high' },
  { code: '33543', city: 'Wesley Chapel', neighborhoods: ['Meadow Pointe', 'Saddlebrook'], priority: 'high' },
  { code: '34638', city: "Land O' Lakes", neighborhoods: ['Bexley', 'Lakeshore Ranch', 'Suncoast Crossings'], priority: 'high' },
  { code: '34639', city: "Land O' Lakes", neighborhoods: ['Lake Padgett Estates', 'Plantation Palms'], priority: 'high' },
  { code: '34637', city: "Land O' Lakes", neighborhoods: ['Connerton', 'Wilderness Lake Preserve', 'Lakeshore Ranch'], priority: 'high' },
  { code: '33549', city: 'Lutz', neighborhoods: [], priority: 'standard' },
  { code: '33559', city: 'Lutz / Wesley Chapel', neighborhoods: [], priority: 'standard' },
  { code: '34655', city: 'Trinity', neighborhoods: ['Starkey Ranch', 'Thousand Oaks', 'Fox Wood', 'Heritage Springs', 'Longleaf'], priority: 'high' },
  { code: '33545', city: 'Wesley Chapel', neighborhoods: ['Epperson Ranch', 'Mirada', 'Watergrass North'], priority: 'high' },
  { code: '33540', city: 'Zephyrhills', neighborhoods: ['Silverado', 'Silver Oaks'], priority: 'high' },
  { code: '33541', city: 'Zephyrhills', neighborhoods: ['Chapel Creek', 'Whispering Oaks'], priority: 'high' },
  { code: '33542', city: 'Zephyrhills', neighborhoods: ['Downtown Zephyrhills'], priority: 'standard' },
  { code: '33576', city: 'San Antonio', neighborhoods: [], priority: 'standard' },
  { code: '34610', city: 'Spring Hill / Shady Hills', neighborhoods: [], priority: 'standard' },
  { code: '33613', city: 'Tampa', neighborhoods: ['University area', 'Lake Magdalene'], priority: 'standard' },
  { code: '33612', city: 'Tampa', neighborhoods: ['Busch Gardens area', 'North Tampa'], priority: 'standard' },
  { code: '33618', city: 'Tampa', neighborhoods: ['Carrollwood', 'Northdale'], priority: 'standard' },
  { code: '33625', city: 'Tampa', neighborhoods: ['Citrus Park', 'Linebaugh'], priority: 'standard' },
  { code: '33606', city: 'Tampa', neighborhoods: ['Hyde Park', 'Davis Islands'], priority: 'standard' },
  { code: '33607', city: 'Tampa', neighborhoods: ['Westshore', 'Palma Ceia West'], priority: 'standard' },
  { code: '34654', city: 'New Port Richey', neighborhoods: [], priority: 'edge' },
  { code: '34669', city: 'Hudson', neighborhoods: [], priority: 'edge' },
  { code: '33574', city: 'Crystal Springs', neighborhoods: [], priority: 'edge' },
];

// Hillsborough zips for county classification
const HILLSBOROUGH_ZIPS = new Set(['33556', '33548', '33558', '33559', '33549', '33647', '33613', '33612', '33618', '33625', '33606', '33607']);

export function getCounty(code: string): 'Pasco' | 'Hillsborough' {
  return HILLSBOROUGH_ZIPS.has(code) ? 'Hillsborough' : 'Pasco';
}

export const HIGH_PRIORITY_ZIPS = SERVICE_AREA.filter(z => z.priority === 'high');
export const ALL_ZIPS = SERVICE_AREA.map(z => z.code);
