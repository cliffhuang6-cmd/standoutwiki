import type { Code } from '../types';

export const codes: Code[] = [
  {
    code: '200KLIKESMASSIVE',
    reward: '1x Mysterious Arrow, 1x Lucky Arrow, 1x Bizarre Arrow & 1x Arrow Part',
    status: 'Active',
    isNewServerOnly: false,
    addedDate: '2026-11-22',
    lastCheckedDate: '2026-11-26',
    evidenceSource: 'Official Developer Trello (Update 1 Active Codes List)',
    notes: 'Released with Update 1. Note: Despite "200KLIKES" in its name, this was actually the 150,000 Likes milestone code (the developer misnamed the milestone). Roblox STAND OUT sits at ~199.2K Likes as of Nov 26, and the true 200K Likes code has not been released yet.'
  },
  {
    code: 'CRAZYDIAMOND',
    reward: '1x D-grade Opal Roka, 20x Steel & $2,000 Dalas',
    status: 'Active',
    isNewServerOnly: false,
    addedDate: '2026-11-22',
    lastCheckedDate: '2026-11-26',
    evidenceSource: 'Official Developer Trello (Update 1 Active Codes List)',
    notes: 'Released alongside Update 1 and Crazy Diamond. Grants a D-grade Opal Rokakaka, 20x Steel Ingots for crafting/car tuning, and $2,000 Dalas.'
  },
  {
    code: '100KLIKESHUGE',
    reward: '3x Mysterious Arrows, 1x Lucky Arrow & 333 Dalas',
    status: 'Expired',
    isNewServerOnly: true,
    addedDate: '2026-11-16',
    expiryDate: '2026-11-22',
    lastCheckedDate: '2026-11-26',
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
    lastCheckedDate: '2026-11-26',
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
    lastCheckedDate: '2026-11-26',
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
    lastCheckedDate: '2026-11-26',
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
    lastCheckedDate: '2026-11-26',
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
    lastCheckedDate: '2026-11-26',
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
    lastCheckedDate: '2026-11-26',
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
    lastCheckedDate: '2026-11-26',
    evidenceSource: 'Closed beta playtest reward',
    notes: 'Pre-release closed beta tester reward. Expired upon public release.'
  }
];

export const activeCodes = codes.filter((c) => c.status === 'Active');
export const unverifiedCodes = codes.filter((c) => c.status === 'Unverified');
export const recentCodes = codes.filter((c) => c.status === 'Active' || c.status === 'Unverified' || c.status === 'May Be Expired');
export const expiredCodes = codes.filter((c) => c.status === 'Expired');
