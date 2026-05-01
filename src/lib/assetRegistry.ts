// Build-time asset detection. Runs server-side only — never in the browser.
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const VIDEO_DIR = resolve(process.cwd(), 'public/assets/video');

function has(file: string): boolean {
  try { return existsSync(resolve(VIDEO_DIR, file)); }
  catch { return false; }
}

export const ASSET_REGISTRY = {
  ambientHome:        has('ambient-beads-on-hood.mp4'),
  ambientFleet:       has('ambient-fleet.mp4'),
  ambientApts:        has('ambient-apartments.mp4'),
  showcaseExterior:   has('showcase-exterior.mp4'),
  showcaseDecon:      has('showcase-decontamination.mp4'),
  showcasePolish:     has('showcase-polish.mp4'),
  showcaseInterior:   has('showcase-interior.mp4'),
  showcaseCoating:    has('showcase-coating.mp4'),
  comparisonBayshine: has('comparison-bayshine-detail.mp4'),
  comparisonStandard: has('comparison-standard-wash.mp4'),
} as const;

export type AssetRegistry = typeof ASSET_REGISTRY;
