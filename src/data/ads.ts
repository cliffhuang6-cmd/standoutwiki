// src/data/ads.ts
// Centralized Adsterra monetization configuration, master/per-unit kill switches,
// and exact verbatim official snippets provided from the Adsterra publisher dashboard.

export type AdUnitKey =
  | 'native'
  | 'banner_468x60'
  | 'banner_320x50'
  | 'banner_160x300'
  | 'banner_300x250'
  | 'banner_160x600'
  | 'banner_728x90';

export type AdDeviceScope = 'all' | 'desktop' | 'mobile';

export interface AdUnitConfig {
  placementId: string;
  name: string;
  device: AdDeviceScope;
  width?: number;
  height?: number;
  enabled: boolean;
  maxPerPage: number;
  rawHtml: string;
}

/**
 * Global Adsterra kill switch.
 * Set to `false` to cleanly turn off ALL Adsterra ad scripts site-wide without touching page templates.
 */
export const ADSTERRA_ENABLED = true;

/**
 * Popunder remains Pending on Adsterra dashboard and must stay disabled.
 */
export const ADSTERRA_POPUNDER_ENABLED = false;

/**
 * Per-unit configuration and exact unmodified official Adsterra HTML snippets.
 * NEVER modify keys, script paths, data-cfasync, fetchpriority, atOptions, or container IDs.
 */
export const ADSTERRA_UNITS: Record<AdUnitKey, AdUnitConfig> = {
  native: {
    placementId: '32385829',
    name: 'Native Banner',
    device: 'all',
    enabled: true,
    maxPerPage: 1,
    rawHtml: `<script async fetchpriority="high" data-cfasync="false" src="https://bauval.org/21/5acaf1a7c60cb8bca924bc58e632bc21"></script>\n<div id="container-5acaf1a7c60cb8bca924bc58e632bc21"></div>`,
  },
  banner_468x60: {
    placementId: '32386382',
    name: 'Banner 468x60',
    device: 'desktop',
    width: 468,
    height: 60,
    enabled: true,
    maxPerPage: 1,
    rawHtml: `<script>\n  atOptions = {\n    'key' : '61151bb6310811643867c8c0acc4d593',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script data-cfasync="false" src="https://bauval.org/22/61151bb6310811643867c8c0acc4d593"></script>`,
  },
  banner_320x50: {
    placementId: '32386383',
    name: 'Banner 320x50',
    device: 'mobile',
    width: 320,
    height: 50,
    enabled: true,
    maxPerPage: 1,
    rawHtml: `<script>\n  atOptions = {\n    'key' : 'd815193dc48ce20f8fb5e56c6642e7ea',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script data-cfasync="false" src="https://bauval.org/22/d815193dc48ce20f8fb5e56c6642e7ea"></script>`,
  },
  banner_160x300: {
    placementId: '32386384',
    name: 'Banner 160x300',
    device: 'desktop',
    width: 160,
    height: 300,
    enabled: true,
    maxPerPage: 1,
    rawHtml: `<script>\n  atOptions = {\n    'key' : '5f253e597089b933f8f0ba8eae926a5e',\n    'format' : 'iframe',\n    'height' : 300,\n    'width' : 160,\n    'params' : {}\n  };\n</script>\n<script data-cfasync="false" src="https://bauval.org/22/5f253e597089b933f8f0ba8eae926a5e"></script>`,
  },
  banner_300x250: {
    placementId: '32386385',
    name: 'Banner 300x250',
    device: 'all',
    width: 300,
    height: 250,
    enabled: true,
    maxPerPage: 1,
    rawHtml: `<script>\n  atOptions = {\n    'key' : '1cd15e0c9cd4615eb2f2bb7e822a10bc',\n    'format' : 'iframe',\n    'height' : 250,\n    'width' : 300,\n    'params' : {}\n  };\n</script>\n<script data-cfasync="false" src="https://bauval.org/22/1cd15e0c9cd4615eb2f2bb7e822a10bc"></script>`,
  },
  banner_160x600: {
    placementId: '32386386',
    name: 'Banner 160x600',
    device: 'desktop',
    width: 160,
    height: 600,
    enabled: true,
    maxPerPage: 1,
    rawHtml: `<script>\n  atOptions = {\n    'key' : 'a4af4e56b4977b5c9a00833b061a803a',\n    'format' : 'iframe',\n    'height' : 600,\n    'width' : 160,\n    'params' : {}\n  };\n</script>\n<script data-cfasync="false" src="https://bauval.org/22/a4af4e56b4977b5c9a00833b061a803a"></script>`,
  },
  banner_728x90: {
    placementId: '32386387',
    name: 'Banner 728x90',
    device: 'desktop',
    width: 728,
    height: 90,
    enabled: true,
    maxPerPage: 1,
    rawHtml: `<script>\n  atOptions = {\n    'key' : '946300eccbdefccddb6696a256bc33df',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script data-cfasync="false" src="https://bauval.org/22/946300eccbdefccddb6696a256bc33df"></script>`,
  },
};

export interface PageAdLayoutRule {
  enabled: boolean;
  desktop: AdUnitKey[];
  mobile: AdUnitKey[];
}

/**
 * Page-type layout presets separating ad placement policy from templates.
 * Flip any page-type `enabled` to `false` to suspend ads on that section globally.
 */
export const AD_PAGE_LAYOUTS: Record<string, PageAdLayoutRule> = {
  home: { enabled: true, desktop: ['banner_300x250', 'banner_728x90', 'native'], mobile: ['banner_300x250', 'banner_320x50', 'native'] },
  codes: { enabled: true, desktop: ['banner_728x90', 'banner_300x250', 'native'], mobile: ['banner_320x50', 'banner_300x250', 'native'] },
  standDetail: { enabled: true, desktop: ['banner_728x90', 'banner_160x600', 'native'], mobile: ['banner_320x50', 'banner_300x250', 'native'] },
  guideDetail: { enabled: true, desktop: ['banner_468x60', 'banner_300x250', 'banner_160x600', 'native'], mobile: ['banner_320x50', 'banner_300x250', 'native'] },
  longSystemGuide: { enabled: true, desktop: ['banner_728x90', 'banner_160x600', 'native'], mobile: ['banner_320x50', 'banner_300x250', 'native'] },
  shortSystemGuide: { enabled: true, desktop: ['banner_728x90', 'banner_160x300', 'native'], mobile: ['banner_320x50', 'native'] },
  narrowGuide: { enabled: true, desktop: ['banner_468x60', 'banner_160x300', 'native'], mobile: ['banner_320x50', 'banner_300x250', 'native'] },
  itemDetail: { enabled: true, desktop: ['banner_728x90', 'banner_300x250', 'native'], mobile: ['banner_320x50', 'banner_300x250', 'native'] },
  hub: { enabled: true, desktop: ['banner_728x90', 'native'], mobile: ['banner_320x50', 'native'] },
  tools: { enabled: true, desktop: ['banner_728x90', 'banner_160x300', 'native'], mobile: ['banner_320x50', 'native'] },
  info: { enabled: true, desktop: ['banner_468x60'], mobile: ['banner_320x50'] },
};

export function isAdUnitActive(unit: AdUnitKey, pageType?: keyof typeof AD_PAGE_LAYOUTS): boolean {
  if (!ADSTERRA_ENABLED) return false;
  const cfg = ADSTERRA_UNITS[unit];
  if (!cfg || !cfg.enabled) return false;
  if (pageType && AD_PAGE_LAYOUTS[pageType] && !AD_PAGE_LAYOUTS[pageType].enabled) {
    return false;
  }
  return true;
}
