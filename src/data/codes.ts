import type { Code } from '../types';

export const codes: Code[] = [
  {
    code: 'SORRY4SHUTDOWN',
    reward: '2x Mysterious Arrows & 500 Dalas',
    status: 'Active',
    isNewServerOnly: false,
    addedDate: '2026-11-15',
    lastCheckedDate: '2026-11-16',
    evidenceSource: 'Official emergency shutdown patch announcement',
    notes: 'Released following server restart maintenance. Redeemable across all updated servers.'
  },
  {
    code: '50KLIKES',
    reward: '3x Lucky Arrows & 2,500 Dalas',
    status: 'Active',
    isNewServerOnly: true,
    addedDate: '2026-11-14',
    lastCheckedDate: '2026-11-16',
    evidenceSource: '50,000 community likes milestone celebration',
    notes: 'Requires joining a newly generated server instance created after the milestone patch.'
  },
  {
    code: 'HUGE100K',
    reward: '1x Bizarre Arrow',
    status: 'May Be Expired',
    isNewServerOnly: true,
    addedDate: '2026-11-15',
    lastCheckedDate: '2026-11-16',
    evidenceSource: '100K likes milestone announcement',
    notes: 'May be restricted to specific regional servers or temporarily inactive.'
  },
  {
    code: 'RELEASE',
    reward: '3x Mysterious Arrows',
    status: 'May Be Expired',
    isNewServerOnly: false,
    addedDate: '2026-11-10',
    lastCheckedDate: '2026-11-16',
    evidenceSource: 'Official public launch celebration reward',
    notes: 'Launch window gift. May have concluded in older server clusters.'
  },
  {
    code: 'THANKYOUHUGERELEASETHANKS',
    reward: '2x Mysterious Arrows & 1x Lucky Arrow',
    status: 'Expired',
    isNewServerOnly: true,
    addedDate: '2026-11-14',
    expiryDate: '2026-11-15',
    lastCheckedDate: '2026-11-16',
    evidenceSource: '24-hour launch celebration event',
    notes: 'Official 24-hour celebration code has expired.'
  },
  {
    code: 'PLAYTEST',
    reward: '10x Mysterious Arrows',
    status: 'Expired',
    isNewServerOnly: false,
    addedDate: '2026-10-15',
    expiryDate: '2026-11-10',
    lastCheckedDate: '2026-11-16',
    evidenceSource: 'Closed playtest reward badge',
    notes: 'Pre-release closed beta tester reward. Expired upon public release.'
  }
];

export const activeCodes = codes.filter((c) => c.status === 'Active');
export const recentCodes = codes.filter((c) => c.status === 'Active' || c.status === 'May Be Expired');
export const expiredCodes = codes.filter((c) => c.status === 'Expired');
