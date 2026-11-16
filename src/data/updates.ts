import type { UpdateLog } from '../types';

export const updateLogs: UpdateLog[] = [
  {
    date: '2026-11-14',
    title: 'Balance Refresh & Lyin\' Eyes Pool Adjustment',
    summary: 'Adjusted story progression pools, fixed mobile lock-on bugs, and issued the SORRY4SHUTDOWN compensation code.',
    changes: [
      'Lyin\' Eyes is now excluded from the arrow pool prior to story completion to prevent quest progression hurdles.',
      'Reduced awakening meter drain on high-mobility Stands.',
      'Added Gifts Application shortcut directly inside the in-game Phone menu.',
      'Optimized server tick rates during 77 Rings multi-wave Knight trials.'
    ],
    bugFixes: [
      'Fixed mobile light attack button becoming unresponsive during Mandom gun aim.',
      'Resolved shiftlock camera collision glitch inside the Train Raid third passenger car.',
      'Fixed an issue where carried items vanished after swimming across canals.'
    ]
  },
  {
    date: '2026-10-28',
    title: 'Part 3 Focus Arrow & Mobile Target Lock',
    summary: 'Introduced craftable Part 3 Focus Arrows and implemented mobile/console aim-lock assistance.',
    changes: [
      'Added Mysterious Arrow [Part 3] to Crafting Station recipes (5x Steel Ingot + 1x Mysterious Arrow).',
      'The World and Star Platinum locked at a 5.0% flat drop chance each on Part 3 arrows.',
      'Kraft Work projectiles now share kinetic velocity with the player upon release.',
      'Buffed raid boss defense scaling when engaged by parties of 3 or more players.'
    ],
    bugFixes: [
      'Fixed mobile shiftlock being blocked by the menu overlay.',
      'Resolved animation lock bug when posing immediately after heavy block.'
    ]
  },
  {
    date: '2026-10-27',
    title: 'Kraft Work Release, Vampire Refresh & Part 5 Arrow',
    summary: 'Major content patch introducing Kraft Work moveset, Part 5 Beetle Arrow, and deep rework of Vampire fighting style.',
    changes: [
      'Added Kraft Work to the Epic arrow pool with full kinetic suspension moveset.',
      'Added Mysterious Arrow [Part 5] with King Crimson 5.0% focus rate.',
      'Revamped Vampire moveset: Added blood gauge consumption scaling and Space Ripper Stingy Eyes laser.',
      'Daylight burn for Vampires can now be completely nullified by equipping the Shadow Cloak accessory.'
    ],
    bugFixes: [
      'Fixed Super Fly pose animation falling outside collision boundary.',
      'Corrected damage calculation on Rolling Stones touch of mercy.'
    ]
  },
  {
    date: '2026-10-23',
    title: 'Story Pool Optimization & Anti-Teaming Update',
    summary: 'Quality of life patch excluding low-DPS Stands from starter progression and fine-tuning anti-teaming invulnerability frames.',
    changes: [
      'Super Fly, Rolling Stones, and Cinderella excluded from the beginner arrow pool before completing Storyline Quest 10.',
      'Anti-teaming i-frames now grant approximately 1 full second of invulnerability when damaged by 2+ players within 0.8s.',
      'Increased Dalas payout on daily bounty hunting missions by 25%.'
    ],
    bugFixes: [
      'Fixed D\'Arby stand chips failing to register in private server lobbies.'
    ]
  }
];
