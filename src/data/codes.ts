import type { Code } from '../types';

export const codes: Code[] = [
  {
    code: 'SORRY4SHUTDOWN',
    reward: '2x Mysterious Arrows & 500 Dalas',
    status: 'Active',
    isNewServerOnly: false,
    addedDate: '2026-11-15',
    lastCheckedDate: '2026-11-16',
    evidenceSource: 'Official developer shutdown patch announcement in Studio Umbra changelog.',
    notes: 'Released following emergency server restart. Does not require a brand-new server, but requires being on a restarted build.'
  },
  {
    code: '50KLIKES',
    reward: '3x Lucky Arrows & 2,500 Dalas',
    status: 'Active',
    isNewServerOnly: true,
    addedDate: '2026-11-14',
    lastCheckedDate: '2026-11-16',
    evidenceSource: 'Celebration milestone posted upon reaching 50,000 community likes on Roblox.',
    notes: 'Requires joining a newly generated server instance created after the milestone patch. If redemption fails, server hop to a fresh server.'
  },
  {
    code: 'HUGE100K',
    reward: '1x Bizarre Arrow',
    status: 'Unverified',
    isNewServerOnly: true,
    addedDate: '2026-11-15',
    lastCheckedDate: '2026-11-16',
    evidenceSource: 'Teased in community channels for the upcoming 100K likes milestone; server activation unconfirmed.',
    notes: 'Community status uncertain. Some players report successful redemption on newly launched servers while others receive invalid code prompts.'
  },
  {
    code: 'RELEASE',
    reward: '3x Mysterious Arrows',
    status: 'Unverified',
    isNewServerOnly: false,
    addedDate: '2026-11-10',
    lastCheckedDate: '2026-11-16',
    evidenceSource: 'Launch day release code from Studio Umbra public game launch.',
    notes: 'Functional during the initial 48-hour launch window. Status currently uncertain as older servers have disabled redemption.'
  },
  {
    code: 'THANKYOUHUGERELEASETHANKS',
    reward: '2x Mysterious Arrows & 1x Lucky Arrow',
    status: 'Expired',
    isNewServerOnly: true,
    addedDate: '2026-11-14',
    lastCheckedDate: '2026-11-16',
    expiryDate: '2026-11-15',
    evidenceSource: 'Published with official developer note stating "this code expires tomorrow".',
    notes: '24-hour launch celebration reward code. Officially closed and non-redeemable across all server instances.'
  },
  {
    code: 'PLAYTEST',
    reward: '10x Mysterious Arrows (Playtest Badge Reward)',
    status: 'Expired',
    isNewServerOnly: false,
    addedDate: '2026-10-15',
    lastCheckedDate: '2026-11-16',
    expiryDate: '2026-11-10',
    evidenceSource: 'Exclusive pre-release closed playtesting reward.',
    notes: 'Granted to early closed beta testers. Expired permanently upon the game\'s transition to public release.'
  }
];

export const activeCodes = codes.filter((c) => c.status === 'Active');
export const unverifiedCodes = codes.filter((c) => c.status === 'Unverified');
export const expiredCodes = codes.filter((c) => c.status === 'Expired');
