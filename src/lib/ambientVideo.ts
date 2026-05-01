// Ambient video selection with 4-tier fallback:
// Tier 1: page-specific ambient
// Tier 2: page-relevant showcase video
// Tier 3: homepage ambient
// Tier 4: static dark gradient (null)
import type { ASSET_REGISTRY } from '@/lib/assetRegistry';

type Registry = typeof ASSET_REGISTRY;

const AMBIENT_MAP: Partial<Record<string, { key: keyof Registry; file: string }>> = {
  '/':           { key: 'ambientHome',  file: 'ambient-beads-on-hood.mp4' },
  '/fleet':      { key: 'ambientFleet', file: 'ambient-fleet.mp4' },
  '/apartments': { key: 'ambientApts',  file: 'ambient-apartments.mp4' },
};

const SHOWCASE_MAP: Partial<Record<string, { key: keyof Registry; file: string }>> = {
  '/exterior-detail':  { key: 'showcaseExterior', file: 'showcase-exterior.mp4' },
  '/full-detail':      { key: 'showcaseInterior',  file: 'showcase-interior.mp4' },
  '/ceramic-coating':  { key: 'showcaseCoating',   file: 'showcase-coating.mp4' },
  '/recon':            { key: 'showcasePolish',     file: 'showcase-polish.mp4' },
};

export function getBestAmbientVideo(pathname: string, registry: Registry): string | null {
  const tier1 = AMBIENT_MAP[pathname];
  if (tier1 && registry[tier1.key]) return tier1.file;

  const tier2 = SHOWCASE_MAP[pathname];
  if (tier2 && registry[tier2.key]) return tier2.file;

  if (pathname !== '/' && registry.ambientHome) return 'ambient-beads-on-hood.mp4';

  return null;
}
