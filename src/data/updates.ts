import type { UpdateLog } from '../types';

export const updateLogs: UpdateLog[] = [
  {
    date: '2026-11-25',
    title: 'LEGENDARY Leaderboard Badge & Live Milestone Tracking',
    summary: 'Studio Umbra deployed the new LEGENDARY Roblox badge (REACHED TOP 10) and pushed live game builds ahead of the 200,000 Likes milestone.',
    changes: [
      'Added the official LEGENDARY badge on Roblox ("REACHED TOP 10"), awarded exclusively to top-10 ranked players (13 earners as of Nov 26).',
      'Game votes reached ~199.2K likes on Roblox with the official description still teasing "NEXT CODE AT 200K LIKES!" (clarifying that 200KLIKESMASSIVE was the 150K milestone code).'
    ],
    bugFixes: [
      'Server stability hotfixes applied across live Update 1 instances.'
    ]
  },
  {
    date: '2026-11-24',
    title: 'Bad Company Rework, Diamond Wall Stun Immunity, 3rd Gang Plot & Combat Hotfixes',
    summary: 'Complete Bad Company army rework with tripled pilot range, Flanking, Landmine, and Airstrike, alongside Crazy Diamond wall immunity, 3rd Gang Plot, Universal Evasive damage removal, 25,000 Dalas baseless gang raids, and console D-pad rebinds.',
    changes: [
      'Bad Company Rework: Pilot range tripled (3x); Maneuver reach increased from 60 to 180 studs and absorbed ATTENTIONNN as its hold recall action.',
      'Bad Company New Moves: Added Flanking (3s CD) and Landmine (2s CD, 3 charges) to base kit; added Airstrike (2 EX Bars, 32s CD); converted Paratroopers to 1 EX Bar (21s CD) capable of dropping ANY unit type up to 180 studs.',
      'Bad Company Unit Tuning: Unit HP reduced to Infantry 10 (was 30), Green Berets 5 (was 24), Tanks 45 (was 60), Helicopters 15 (was 36); per-type replacement cooldowns set to 10s / 16s / 25s / 30s.',
      'Bad Company Combat & Mobility: Piloted Infantry and Green Berets move +50% faster; piloted Helicopters move +100% faster (2x) and fly slightly lower; Tank shells (perfect blockable, guardbreak) and Helicopter missiles (blockable) flash a warning before firing; enemies can dash twice to shake off Green Berets.',
      'Bad Company Skins & HUD: Completely redid all unit alternate color skins into Urban, Special Forces, and Desert; unit menu can be repositioned in the HUD layout editor.',
      'Crazy Diamond: Diamond Wall creation is no longer cancelled by stun; added alternate color schemes for Crazy Diamond and Kiss (Kizz).',
      'Universal Evasive Hotfix: Removed the 10 burst damage from Universal Evasive (cooldown remains 30s, cost 1 EX Bar, default key X); repositioned the mobile Evasive button.',
      'Gang System & Raids: Added a 3rd Gang Plot; added a 25,000 Dalas upfront option to raid a target gang that has no base (deposit goes into the target player\'s bank if the raid fails).',
      'Console Controls: Added D-pad binds (hold RT + D-pad Left for cards, D-pad Right to use/cycle toolbar items, D-pad Left for Universal Evasive).',
      'Trello Testing Watchlist: Added an early placeholder card for Rock Human (Part 8) under "Unfinished / In Testing / Reworking" (no published moveset or release date yet).'
    ],
    bugFixes: [
      'Fixed the mobile stat panel display bug.',
      'Fixed the Accessory Builder slot issue.'
    ]
  },
  {
    date: '2026-11-23',
    title: 'Update 1 Rolling Balance & Raid/Arrow Fixes',
    summary: 'Follow-up rolling balance patch adjusting Crazy Diamond damage, doubling Jojosapiens Data gain, fixing Highway Star Raid Part 4 Arrow drops, and enabling regular arrow re-rolls for unlocked Heaven\'s Door Prime and Jojosapiens.',
    changes: [
      'Crazy Diamond: Increased damage on Crazy Uppercut, Shining Kick, and Tandem Uppercut.',
      'Jojosapiens: Doubled Data gain to 4 Data per right Questionnaire answer (was 2) and 2 Data per full combo (was 1).',
      'Exclusive & Quest Arrow Re-Rolls: Players who have already unlocked Heaven\'s Door Prime or Jojosapiens can now re-obtain them from regular arrows.',
      'Highway Star Raid Drop Fix: Fixed the Highway Star Raid dropping Mysterious Arrow [Part 5] instead of the intended Mysterious Arrow [Part 4].',
      'Catch The Rainbow: Rain Walk is now capped in Ranked Mode.'
    ],
    bugFixes: [
      'Fixed Heaven\'s Door Prime Book Rush sometimes causing instant kills when snapping a neck.',
      'Fixed Crazy Diamond Beatdown (Fresh Pair Of Underwear) healing.',
      'Fixed Bad Company units getting stuck inside roofs or water.',
      'Fixed Highway Star driver swap issue and Death 13 + Evasive / Yellow Temperance jump bugs.',
      'Fixed seeds becoming account-bound when redeemed via promo codes.'
    ]
  },
  {
    date: '2026-11-22',
    title: 'Update 1: Six New Stands, Ranked Mode Beta, Universal Evasive, Pluck & Gang Factions',
    summary: 'Major Update 1 release introducing 6 Stands (Crazy Diamond, The Hand, Bad Company, The Lock, Cheap Trick, Dolly Dagger), Ranked Mode Beta (3x points, 5s respawn, health packs removed), Universal Evasive (30s CD evening hotfix), Pluck movesets, and Gang Base Factions.',
    changes: [
      'Added 6 new playable Stands: Crazy Diamond (Pinnacle), The Hand (Mythical), Bad Company (Mythical), The Lock (Legendary), Cheap Trick (Epic), and Dolly Dagger (Exclusive 1850 ELO Ranked Reward).',
      'Universal Evasive: Press X (1 EX Bar) to break hitstun/ragdoll; evening patch reduced cooldown from 45s to 30s and raised max combo damage reduction from 30% to 40%.',
      'Ranked Mode [Beta] (Level 60+): 1v1 matchmaking with 5-second respawns, health packs removed, tripled (3x) ranked point gain, restored spawn invulnerability, and persistent combat tags between stocks.',
      'Pluck Weapon Movesets: Enabled specialized Pluck sword moves for Jonathan Hamon and Vampire.',
      'The Lock Evening Hotfix: Doubled trigger damage needed to apply a lock from 8 to 16, reduced guilt damage reflection tiers, and changed Crushing Guilt to a 1.3s stun + lock break.',
      'Bad Company Update 1 Tuning: Focus Fire cooldown increased from 10s to 15s (1.75x Ability cap, cancels on subspec move); units fire at half rate during player M1 swings; Atomic Strike impact set to 42.',
      'Star Platinum: The World & The Hand: SPTW overall damage adjusted +15% in evening pass; The Hand base Erasure gained hyperarmor from windup through swipe, and Bring to Me slow increased to 30%.',
      'Catch The Rainbow: Added Generic Unbranded Ocarina (5 EX Bars, 90s CD, 30s rain, usable with mask off), buffed Weapons Of Rain and Frozen Knife M1/M2 damage, made Rain Catch steerable, and removed Rain Walk fall damage.',
      'Gang Base Factions & Garage: Added Fruit Company and Vampire factions; added Security System and Self Destruct garage upgrades; enabled cross-slot gangs.',
      'Stand Slots, Builder & Gardening: Added another free Stand Slot and a free Builder unlock path; Builder autosaves every minute; private server crop speed raised to 0.5x; packaging adds +20% value; Rokas sellable to Big Chop at night.',
      'Codes: Added 200KLIKESMASSIVE (150K milestone code) and CRAZYDIAMOND; moved 100KLIKESHUGE to Expired.'
    ],
    bugFixes: [
      'Fixed Time Stop failing to freeze opponents, King Crimson frog spawns, Hamon Pluck moves, and Cheap Trick killing NPCs in Ranked.',
      'Fixed Vampire Vaporatization Freezing Technique sometimes failing to proc freeze.',
      'Fixed greenhouse placement on gang base second floors and Vampire hypnosis breaking Time Stop.',
      'Restored alternate colors for SPTW, Bad Company, and The Hand; revamped Alt Colors phone app.'
    ]
  },
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
      'Added Kiss (Kizz) Stand to the Arrow pool as a Legendary tier Stand with limb duplication, Sticker Rip physics, and Body Double EX.',
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
