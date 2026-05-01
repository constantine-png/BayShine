// Videos committed to the repo. All present — no filesystem check needed.
export const ASSET_REGISTRY = {
  ambientHome:        true,
  ambientFleet:       true,
  ambientApts:        false, // not yet filmed
  showcaseExterior:   true,
  showcaseDecon:      true,
  showcasePolish:     true,
  showcaseInterior:   true,
  showcaseCoating:    true,
  comparisonBayshine: true,
  comparisonStandard: false, // not yet filmed
} as const;

export type AssetRegistry = typeof ASSET_REGISTRY;
