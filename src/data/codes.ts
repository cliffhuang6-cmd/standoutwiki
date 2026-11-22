import type { Code } from '../types';

export const codes: Code[] = [
  {
    code: '100KLIKESHUGE',
    reward: '3x Mysterious Arrows, 1x Lucky Arrow & 333 Dalas',
    status: 'Active',
    isNewServerOnly: true,
    addedDate: '2026-11-16',
    lastCheckedDate: '2026-11-22',
    evidenceSource: 'Official Developer Trello & Milestone Celebration',
    notes: 'The sole confirmed active code. Verified active on newly generated servers following the 100K Likes milestone. Grants free Lucky Arrow and currency.'
  },
  {
    code: 'STANDOUTAGAIN',
    reward: '1x Lucky Arrow',
    status: 'Expired',
    isNewServerOnly: false,
    addedDate: '2026-11-17',
    expiryDate: '2026-11-18',
    lastCheckedDate: '2026-11-22',
    evidenceSource: 'Official Developer Trello (Moved to Expired Nov 18, 2026)',
    notes: 'Granted 1 free Lucky Arrow. Officially deactivated and moved to Expired on developer board.'
  },
  {
    code: 'SORRY4SHUTDOWN',
    reward: '2x Mysterious Arrows & 500 Dalas',
    status: 'Expired',
    isNewServerOnly: false,
    addedDate: '2026-11-15',
    expiryDate: '2026-11-17',
    lastCheckedDate: '2026-11-22',
    evidenceSource: 'Official Developer Trello (Expired Codes)',
    notes: 'Emergency restart compensation following the Nov 15 combat overhaul. Officially expired.'
  },
  {
    code: '50KLIKES',
    reward: '3x Lucky Arrows & 2,500 Dalas',
    status: 'Expired',
    isNewServerOnly: true,
    addedDate: '2026-11-14',
    expiryDate: '2026-11-16',
    lastCheckedDate: '2026-11-22',
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
    lastCheckedDate: '2026-11-22',
    evidenceSource: 'Official Patch Notes 16/11/2026',
    notes: 'Launch celebration reward. Officially retired in the Nov 16 update.'
  },
  {
    code: 'HUGE100K',
    reward: '1x Bizarre Arrow',
    status: 'Expired',
    isNewServerOnly: true,
    addedDate: '2026-11-15',
    expiryDate: '2026-11-16',
    lastCheckedDate: '2026-11-22',
    evidenceSource: 'Official Developer Trello (Expired Codes)',
    notes: 'Limited test code variant for the 100K celebration. Superseded by 100KLIKESHUGE and now expired.'
  },
  {
    code: 'RELEASE',
    reward: '3x Mysterious Arrows',
    status: 'Expired',
    isNewServerOnly: false,
    addedDate: '2026-11-10',
    expiryDate: '2026-11-14',
    lastCheckedDate: '2026-11-22',
    evidenceSource: 'Official Developer Trello (Expired Codes)',
    notes: 'Public launch release gift. Concluded and marked Expired.'
  },
  {
    code: 'PLAYTEST',
    reward: '10x Mysterious Arrows',
    status: 'Expired',
    isNewServerOnly: false,
    addedDate: '2026-10-15',
    expiryDate: '2026-11-10',
    lastCheckedDate: '2026-11-22',
    evidenceSource: 'Closed beta playtest reward',
    notes: 'Pre-release closed beta tester reward. Expired upon public release.'
  }
];

export const activeCodes = codes.filter((c) => c.status === 'Active');
export const recentCodes = codes.filter((c) => c.status === 'Active' || c.status === 'May Be Expired');
export const expiredCodes = codes.filter((c) => c.status === 'Expired');
