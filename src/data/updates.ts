import type { UpdateLog } from '../types';

export const updateLogs: UpdateLog[] = [
  {
    date: '2026-11-16',
    title: 'Combat Scaling & Stat Overhaul Patch',
    summary: 'Major tuning for stat caps and Time Stop durations, barrage clash chip reduction, leaderboards Heaven\'s Door Prime rewards, and 100KLIKESHUGE milestone code.',
    changes: [
      'Max Health scaling increased: Now grants up to 3.0x HP at 166 Health (was 2.5x), raising full Health builds to 300 HP (was 250 HP).',
      'Max Strength scaling adjusted: Now grants up to 2.3x damage at 166 Strength (was 2.5x). Hybrid scaling moves rebalanced accordingly.',
      'Barrage clashes heavily nerfed in chip damage: Clashes now inflict only 25% of each hit as chip damage (slashed down from 65%).',
      'Time Stop duration rebalanced: Full Time Stop now lasts 5.0s at base Ability up to 10.0s at max Ability (was 6s to 14s). Quick Time Stop lasts 2.5s base up to 6.0s max (was 3s to 7s).',
      'Road Roller rework: Flies higher, descends slower (~2.0s landing delay), and now costs 1 EX Bar (landing delay was 1.3s previously).',
      'Heaven\'s Door Prime Stand Chip added to Bounty Hunters and Raid Champions leaderboards (also awarded to Top 3 weekly finishers in each raid and top Builder sellers).',
      'Party friendly fire is now permanently active in multiplayer parties.',
      'Combat-logged swimmers in the ocean are now hunted by an aggressive offshore shark.',
      'Added verified 100K Likes code: 100KLIKESHUGE. Expired codes: 50KLIKES and THANKYOUHUGERELEASETHANKS.'
    ],
    bugFixes: [
      'Tense Up counter now properly parries oncoming vehicles.',
      'Fixed sub-ability skills continuing to cast while wall-climbing via The Hustle.',
      'Fixed player getting locked out of the 77 Rings graveyard when the gate shuts.',
      'Fixed wine glass hold breaking after Mandom rewind.',
      'Zeppeli and Caesar Hamon now infuse Hamon into Stands without needing to manually breathe.',
      'Vampire Cloak now remains equipped until 25% HP is lost, with a 20-second grace window after re-equipping.'
    ]
  },
  {
    date: '2026-11-15',
    title: 'Major Combat Overhaul & Balance Adjustments',
    summary: 'Comprehensive overhaul of M1/M2 attack recovery frames, parry window extension, boss evasive cooldowns, and character balance passes for King Crimson, The Hustle, Big Mouth Strikes Again, and Vampire.',
    changes: [
      'M1 string recovery accelerated: Endlag after last M1 reduced to 0.85s on miss/block and 0.70s on hit (was 1.0s). All M1 links stun targets for 0.16s past the next hit.',
      'Dash cooldown normalized to 1.20s across all characters, counted immediately from initiation (was ~1.7s).',
      'Parry window extended to 0.12s (was 0.10s). Successful parries now inflict 0.20s endlag on attackers and restore 20% max block HP.',
      'Stand M1 hitboxes expanded 5% wider and now hit slightly behind the user to prevent whiffing at close range.',
      'M2 recovery de-linked: M2 heavy attacks can now be performed immediately after completing an M1 combo string without cooldown lock.',
      'King Crimson balance: Decree damage increased by 20% with -2s cooldown; Chop base damage +3 with 95 Strength / 20 Ability scaling (+15% scaling); Blood Blind now scales with Strength.',
      'The Hustle balance: Brutal Beatdown now costs 2 EX Bars with 20% lower damage and reduced Strength scaling.',
      'Big Mouth Strikes Again balance: Barrage damage -20% and +2s cooldown; Go for the Throat -6 base damage; EX Shank knockback +50% with increased endlag; M1/M2 animation speed nerfed 10%.',
      'Vampire overhaul: Fixed passive health regeneration without blood; Blood capacity now scales with Ability up to 250; Space Ripper Stingy Eyes laser range increased by 10%; re-added wall walking for pure Vampires.',
      'Raid Quality of Life: Defeating a raid boss now provides an instant full HP heal. Losing a raid no longer places the raid on cooldown.',
      'Boss Evasive Cooldown: Increased evasive skill cooldown by 6.0 seconds across all world and raid bosses.'
    ],
    bugFixes: [
      'Fixed Dio boss becoming immortal inside Road Roller after a Mandom rewind.',
      'Fixed vehicles falling out of bounds during seat swaps in Highway Star raid.',
      'Fixed written commands and page rip failing following book transmutations.',
      'Mobile blocking converted to an optional toggle setting with easier camera swiping while attacking.',
      'Fixed Beach Boy wall clipping bug.'
    ]
  },
  {
    date: '2026-11-10',
    title: 'Kiss (Kizz) Stand Release & Zeppeli Hamon Path',
    summary: 'Released Ermes Costello\'s Stand Kiss to the Rare arrow pool, introduced the Zeppeli Hamon path with Life Giving Overdrive, and added craftable movement gear.',
    changes: [
      'Added Kiss (Kizz) Stand to the Arrow pool as a Rare tier Stand with limb duplication, Sticker Rip physics, and Body Double EX.',
      'Added William Anthonio Zeppeli Hamon training path with Life Giving Overdrive healing and revive mechanics.',
      'Added Lenny\'s Mechanic Shop for vehicle scrap purchasing and engine repairs.',
      'Added Photography Room and Gallery App to in-game Smartphone.',
      'Introduced 77 Rings Bizarre Adventure dungeon trial with multi-stage undead knight gauntlet.'
    ],
    bugFixes: [
      'Fixed dialogue soft locks with Rohan Kishibe and Charming Man.',
      'Fixed vehicle water explosion glitch.',
      'Adjusted D\'Arby stand storage seating and reduced AI cheat odds by 75%.'
    ]
  },
  {
    date: '2026-11-03',
    title: 'Part 9 Roster Release: November Rain & 4 New Stands',
    summary: 'Massive content drop adding 5 Part 9: The JOJOLands Stands into the arrow summon pool: November Rain, Big Mouth Strikes Again, The Hustle, Lyin\' Eyes, and The MATTEKUDASAI.',
    changes: [
      'Released November Rain, The MATTEKUDASAI, Big Mouth Strikes Again, The Hustle, and Lyin\' Eyes to the live game.',
      'Added Highway Star Bizarre Adventure raid dungeon.',
      'Added Food Safety Agency (FSA) gang base inspection events and Rokakaka defense raids.',
      'Added 32 new status condition indicators and gang war trophy leaderboards.'
    ],
    bugFixes: [
      'Resolved texture seam issues on The Hustle climb animations.',
      'Corrected projectile trajectory for November Rain heavy rainfall droplets.'
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
  }
];
