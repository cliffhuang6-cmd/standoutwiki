import type { Code } from '../types';

export const codes: Code[] = [
  {
    code: 'REAL200KLIKES',
    reward: '2x Bizarre Arrows & 4,000 Dalas',
    status: 'Active',
    isNew: true,
    isNewServerOnly: false,
    addedDate: '2026-11-26',
    lastCheckedDate: '2026-11-27',
    evidenceSource: 'Official Developer Trello (Active Codes List)',
    notes: 'True 200,000 Likes Milestone Code released on Nov 26, 2026 after STAND OUT officially crossed 200K upvotes (replacing the misnamed 150K code 200KLIKESMASSIVE).'
  },
  {
    code: 'THANKFULFORSTANDOUT',
    reward: '3x Mysterious Arrows, 500 Dalas & 1 Hour of 2x EXP',
    status: 'Active',
    isNew: true,
    isNewServerOnly: false,
    addedDate: '2026-11-26',
    lastCheckedDate: '2026-11-27',
    evidenceSource: 'Official Developer Trello (Active Codes List)',
    notes: 'Thanksgiving Update celebration code (Turkey Tendency event, released Nov 26, 2026). Grants 3 Mysterious Arrows, 500 Dalas, and a 1-hour 2x EXP boost.'
  },
  {
    code: '200KLIKESMASSIVE',
    reward: '1x Mysterious Arrow, 1x Lucky Arrow, 1x Bizarre Arrow & 1x Arrow Part',
    status: 'Expired',
    isNewServerOnly: false,
    addedDate: '2026-11-22',
    expiryDate: '2026-11-26',
    lastCheckedDate: '2026-11-27',
    evidenceSource: 'Official Developer Trello (Moved to Expired Codes list on Nov 26)',
    notes: 'Update 1 celebration code that actually represented the 150,000 Likes milestone (misnamed 200K by the developer). Moved to the official Expired Codes list on Nov 26 when REAL200KLIKES launched.'
  },
  {
    code: 'CRAZYDIAMOND',
    reward: '1x D-grade Opal Roka, 20x Steel & $2,000 Dalas',
    status: 'Expired',
    isNewServerOnly: false,
    addedDate: '2026-11-22',
    expiryDate: '2026-11-26',
    lastCheckedDate: '2026-11-27',
    evidenceSource: 'Official Developer Trello (Moved to Expired Codes list on Nov 26)',
    notes: 'Released alongside Update 1 and Crazy Diamond on Nov 22. Moved to the official Expired Codes list on Nov 26 alongside the Thanksgiving update.'
  },
  {
    code: '100KLIKESHUGE',
    reward: '3x Mysterious Arrows, 1x Lucky Arrow & 333 Dalas',
    status: 'Expired',
    isNewServerOnly: true,
    addedDate: '2026-11-16',
    expiryDate: '2026-11-22',
    lastCheckedDate: '2026-11-27',
    evidenceSource: 'Official Developer Trello (Moved to Expired Codes list on Nov 22)',
    notes: '100K Likes celebration reward. Moved to the Expired Codes list on the official Trello upon Update 1 launch.'
  },
  {
    code: 'STANDOUTAGAIN',
    reward: '1x Lucky Arrow',
    status: 'Expired',
    isNewServerOnly: false,
    addedDate: '2026-11-16',
    expiryDate: '2026-11-16',
    lastCheckedDate: '2026-11-27',
    evidenceSource: 'Official Developer Trello (Expired Codes)',
    notes: '12-hour limited code (expired Nov 16 at 20:11 UTC). Officially listed under Expired Codes on the developer board.'
  },
  {
    code: 'SORRY4SHUTDOWN',
    reward: '2x Mysterious Arrows & 500 Dalas (Unpublished on Trello)',
    status: 'Expired',
    isNewServerOnly: false,
    addedDate: '2026-11-15',
    expiryDate: '2026-11-16',
    lastCheckedDate: '2026-11-27',
    evidenceSource: 'Official Developer Trello (Expired Codes)',
    notes: 'Emergency restart compensation following the Nov 15 combat overhaul. Officially moved to Expired Codes on Trello.'
  },
  {
    code: '50KLIKES',
    reward: '3x Lucky Arrows & 2,500 Dalas',
    status: 'Expired',
    isNewServerOnly: true,
    addedDate: '2026-11-15',
    expiryDate: '2026-11-16',
    lastCheckedDate: '2026-11-27',
    evidenceSource: 'Official Patch Notes 16/11/2026',
    notes: 'Officially retired per developer patch notes on Nov 16: "50KLIKES and THANKYOUHUGERELEASETHANKS codes expired".'
  },
  {
    code: 'THANKYOUHUGERELEASETHANKS',
    reward: '2x Mysterious Arrows & 1x Lucky Arrow',
    status: 'Expired',
    isNewServerOnly: true,
    addedDate: '2026-11-14',
    expiryDate: '2026-11-16',
    lastCheckedDate: '2026-11-27',
    evidenceSource: 'Official Patch Notes 16/11/2026',
    notes: 'Launch celebration reward. Officially retired in the Nov 16 update.'
  },
  {
    code: 'HUGE100K',
    reward: '1x Bizarre Arrow',
    status: 'Expired',
    isNewServerOnly: true,
    addedDate: '2026-11-14',
    expiryDate: '2026-11-16',
    lastCheckedDate: '2026-11-27',
    evidenceSource: 'Official Developer Trello (Expired Codes)',
    notes: 'Launch-night code variant. Listed under Expired Codes on the official Trello.'
  },
  {
    code: 'RELEASE',
    reward: '3x Mysterious Arrows',
    status: 'Expired',
    isNewServerOnly: false,
    addedDate: '2026-11-13',
    expiryDate: '2026-11-16',
    lastCheckedDate: '2026-11-27',
    evidenceSource: 'Official Developer Trello (Expired Codes)',
    notes: 'Public launch release gift. Listed under Expired Codes on the official Trello.'
  },
  {
    code: 'PLAYTEST',
    reward: '10x Mysterious Arrows',
    status: 'Expired',
    isNewServerOnly: false,
    addedDate: '2026-10-15',
    expiryDate: '2026-11-10',
    lastCheckedDate: '2026-11-27',
    evidenceSource: 'Official Developer Trello (Expired Codes)',
    notes: 'Pre-release closed beta tester reward. Listed under Expired Codes on the official Trello.'
  }
];

export const activeCodes = codes.filter((c) => c.status === 'Active');
export const unverifiedCodes = codes.filter((c) => c.status === 'Unverified');
export const recentCodes = codes.filter((c) => c.status === 'Active' || c.status === 'Unverified' || c.status === 'May Be Expired');
export const expiredCodes = codes.filter((c) => c.status === 'Expired');
