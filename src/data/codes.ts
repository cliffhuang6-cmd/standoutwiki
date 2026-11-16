import type { Code } from '../types';

export const codes: Code[] = [
  {
    code: 'SORRY4SHUTDOWN',
    reward: 'Compensation Bundle (Dalas & Mysterious Arrows)',
    status: 'Active',
    isNewServerOnly: false,
    addedDate: '2026-11-14',
    notes: 'Developer apology code issued following server restart and balance patch. Works on all servers.'
  },
  {
    code: '50KLIKES',
    reward: '3x Lucky Arrows, 2,500 Dalas',
    status: 'Active',
    isNewServerOnly: true,
    addedDate: '2026-11-13',
    notes: 'Community milestone celebration. REQUIRES NEW SERVER: If redemption fails, leave and join a recently booted server.'
  },
  {
    code: 'HUGE100K',
    reward: '1x Bizarre Arrow',
    status: 'Unconfirmed',
    isNewServerOnly: true,
    addedDate: '2026-11-15',
    notes: 'Developer sneak-peek code circulating in community testing channels. May require updated build server.'
  },
  {
    code: 'RELEASE',
    reward: '3x Mysterious Arrows',
    status: 'Unconfirmed',
    isNewServerOnly: false,
    addedDate: '2026-10-20',
    notes: 'Launch window code. Some server clusters accept this while others report expired. Costs nothing to test.'
  },
  {
    code: 'THANKYOUHUGERELEASETHANKS',
    reward: '2x Mysterious Arrows, 1x Lucky Arrow',
    status: 'Expired',
    isNewServerOnly: true,
    addedDate: '2026-11-14',
    notes: 'Official 24-hour flash redemption event. Expired on November 15, 2026.'
  },
  {
    code: 'PLAYTEST',
    reward: '10x Mysterious Arrows',
    status: 'Expired',
    isNewServerOnly: false,
    addedDate: '2026-09-20',
    notes: 'Closed pre-release testing reward code. Expired upon general public launch.'
  }
];

export const activeCodesCount = codes.filter(c => c.status === 'Active').length;
