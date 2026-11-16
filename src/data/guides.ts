import type { Guide } from '../types';

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    title: 'Stand Out Beginner Guide: Getting Started & First Stand',
    category: 'Starter',
    description: 'The definitive handbook for new players. Learn combat fundamentals, tutorial quests, getting your first Stand, and avoiding beginner traps.',
    readingTime: '8 min read',
    updatedDate: '2026-11-16',
    tableOfContents: [
      { id: 'first-hour', title: 'The First 15 Minutes' },
      { id: 'first-stand', title: 'Awakening Your First Stand' },
      { id: 'combat-basics', title: 'Core Combat & Keybinds' },
      { id: 'phone-utility', title: 'Unlocking the Phone & Huber' },
      { id: 'leveling-path', title: 'Optimal Starter Leveling Route' }
    ]
  },
  {
    slug: 'controls',
    title: 'Stand Out Controls Guide: PC, Mobile & Console Keybinds',
    category: 'Combat & Moves',
    description: 'Complete keybind directory for Stand Out. Master PC keyboard controls, mobile touch UI, camera shiftlock, piloting, and controller layouts.',
    readingTime: '5 min read',
    updatedDate: '2026-11-16',
    tableOfContents: [
      { id: 'pc-keybinds', title: 'PC Keyboard & Mouse Keybinds' },
      { id: 'mobile-layout', title: 'Mobile Touch Controls & Aim-Lock' },
      { id: 'advanced-tech', title: 'Advanced Mechanics: Pilot & Perfect Block' },
      { id: 'troubleshooting', title: 'Common Input Glitches & Fixes' }
    ]
  },
  {
    slug: 'level-up-fast',
    title: 'How to Level Up Fast in Stand Out: 1 to 75 EXP Route',
    category: 'Progression',
    description: 'Fastest verified leveling methods in Stand Out. Optimize storyline progression, mob farming loops, daily bounties, and EXP booster usage.',
    readingTime: '7 min read',
    updatedDate: '2026-11-16',
    tableOfContents: [
      { id: 'level-cap', title: 'Level Cap & Stat Point Breakdown' },
      { id: 'early-levels', title: 'Levels 1 - 25: Storyline Rush' },
      { id: 'mid-levels', title: 'Levels 26 - 50: Bounty Stacking' },
      { id: 'endgame-grind', title: 'Levels 51 - 75: Raid Grinding' },
      { id: 'exp-multipliers', title: 'Maximizing EXP Boosters' }
    ]
  },
  {
    slug: 'farm-dalas',
    title: 'How to Farm Dalas in Stand Out: Money & Delivery Routes',
    category: 'Economy',
    description: 'The master economic guide. Maximize hourly cash through high-value gardening crops, delivery routes, lettuce trading, and bounty loops.',
    readingTime: '6 min read',
    updatedDate: '2026-11-16',
    tableOfContents: [
      { id: 'cash-methods', title: 'Top 4 Dalas Earning Methods' },
      { id: 'gardening-economy', title: 'Gardening & Crop Delivery Profits' },
      { id: 'bounty-hunting', title: 'NPC Bounty Hunting Circuits' },
      { id: 'gear-multipliers', title: 'D\'Arby & Shigechi Gear Sets' }
    ]
  },
  {
    slug: 'lucky-arrows',
    title: 'How to Get Lucky Arrows in Stand Out: Crafting & Rates',
    category: 'Progression',
    description: 'Everything about Lucky Arrows. How to craft them at the Crafting Station, Train Shop purchase costs, drop rate tables, and optimal pull strategies.',
    readingTime: '6 min read',
    updatedDate: '2026-11-16',
    tableOfContents: [
      { id: 'what-are-lucky-arrows', title: 'Why Lucky Arrows Matter' },
      { id: 'crafting-recipe', title: 'Crafting Station Requirements' },
      { id: 'train-shop', title: 'Buying From the Train Shop' },
      { id: 'drop-rates', title: 'Verified Rate Table Breakdown' },
      { id: 'when-to-use', title: 'When to Save vs When to Pop' }
    ]
  },
  {
    slug: 'bizarre-arrows',
    title: 'How to Get Bizarre Arrows: 9x Merge & Pinnacle Hunting',
    category: 'Progression',
    description: 'The premier gacha tool in Stand Out. Eliminates Rare and Epic tiers, boosting Pinnacle chance to 4.4%. How to acquire and use them wisely.',
    readingTime: '5 min read',
    updatedDate: '2026-11-16',
    tableOfContents: [
      { id: 'overview', title: 'Bizarre Arrow Odds & Exclusion Tiers' },
      { id: 'acquisition', title: 'Crafting (9x Merge) & Train Tokens' },
      { id: 'math-comparison', title: 'Math Comparison: Regular vs Lucky vs Bizarre' },
      { id: 'recommendations', title: 'Endgame Investment Advice' }
    ]
  },
  {
    slug: 'star-platinum',
    title: 'How to Get Star Platinum in Stand Out: Part 3 Arrows & Build',
    category: 'Combat & Moves',
    description: 'Complete guide to obtaining and mastering Star Platinum. Part 3 focus arrows, drop odds, moveset guide, time-stop combos, and evolution to SPTW.',
    readingTime: '8 min read',
    updatedDate: '2026-11-16',
    tableOfContents: [
      { id: 'drop-chances', title: 'Drop Rates & Part 3 Focus Arrow' },
      { id: 'moveset-breakdown', title: 'Moveset: Ora Barrage, Star Finger, Time Stop' },
      { id: 'stat-allocation', title: 'Optimal Stat Build (Health/Damage/Ability)' },
      { id: 'pvp-combos', title: 'True Combo Sequences & Punishes' },
      { id: 'evolution-path', title: 'Preparing for SPTW Evolution' }
    ]
  },
  {
    slug: 'the-world',
    title: 'How to Get The World in Stand Out: Overwrite Time Stop & Combos',
    category: 'Combat & Moves',
    description: 'Master DIO\'s Stand. How to roll The World, knife volley mechanics, optimal Ability stat scaling, and overwriting enemy Time Stops.',
    readingTime: '7 min read',
    updatedDate: '2026-11-16',
    tableOfContents: [
      { id: 'how-to-obtain', title: 'Obtainment: Part 3 Focus Arrow (5%)' },
      { id: 'time-stop-overwrite', title: 'Mechanic: Overwriting Enemy Time Stops' },
      { id: 'knife-mechanics', title: 'Knife Volley & Pilot Mode Attacks' },
      { id: 'dios-gear-set', title: 'DIO\'s Jacket & Pants Synergy' }
    ]
  },
  {
    slug: 'king-crimson',
    title: 'How to Get King Crimson in Stand Out: Train Raid & Time Erase',
    category: 'Combat & Moves',
    description: 'Unleash Diavolo\'s Stand. Obtainment via Part 5 Arrows or the 1% Train Raid chip drop, Epitaph forecasting, and Time Erase invulnerability.',
    readingTime: '7 min read',
    updatedDate: '2026-11-16',
    tableOfContents: [
      { id: 'obtainment', title: 'Part 5 Focus Arrows & Train Raid Chip' },
      { id: 'forms', title: 'Doppio Moveset vs Full King Crimson' },
      { id: 'time-erase', title: 'Time Erase Tactics & Positioning' },
      { id: 'donut-execution', title: 'Guardbreak Combos & Donut Finisher' }
    ]
  },
  {
    slug: 'evolve-stands',
    title: 'How to Evolve Stands in Stand Out: SPTW & Evolution Paths',
    category: 'Progression',
    description: 'Step-by-step walkthrough on evolving base Stands into superior forms, including Star Platinum to Star Platinum: The World.',
    readingTime: '6 min read',
    updatedDate: '2026-11-16',
    tableOfContents: [
      { id: 'evolution-overview', title: 'The Evolution System' },
      { id: 'sptw-requirements', title: 'SPTW Questline & Level Prerequisites' },
      { id: 'boss-challenges', title: 'Defeating Evolution Trial Bosses' },
      { id: 'moveset-changes', title: 'Moveset Differences Post-Evolution' }
    ]
  },
  {
    slug: 'hamon',
    title: 'How to Get Hamon in Stand Out: Lisa Lisa & 3 Paths Guide',
    category: 'Starter',
    description: 'Complete Hamon guide. Find Lisa Lisa, pass the 300-breath mask challenge, and compare the Jonathan, Caesar, and Zeppeli discipline paths.',
    readingTime: '7 min read',
    updatedDate: '2026-11-16',
    tableOfContents: [
      { id: 'prerequisites', title: 'Requirements & Empty Sub-Ability Slot' },
      { id: 'breathing-test', title: 'The Ripple Mask 300 Breaths Quest' },
      { id: 'path-comparison', title: 'Jonathan vs Caesar vs Zeppeli Paths' },
      { id: 'hamon-synergies', title: 'Best Stand Synergies for Hamon' },
      { id: 'removal-rules', title: 'How to Reset Hamon (Apple / Sapphire Roka)' }
    ]
  },
  {
    slug: 'vampire',
    title: 'How to Become a Vampire in Stand Out: Mask & Sunlight Rules',
    category: 'Starter',
    description: 'Awaken the undead. Find the Stone Mask, master blood regeneration, conquer sunlight vulnerability with the Shadow Cloak, and execute freeze combos.',
    readingTime: '6 min read',
    updatedDate: '2026-11-16',
    tableOfContents: [
      { id: 'stone-mask', title: 'Obtaining the Stone Mask' },
      { id: 'vampire-mechanics', title: 'Blood Gauge, Healing & Freeze Moveset' },
      { id: 'sunlight-weakness', title: 'Surviving Daytime: The Shadow Cloak' },
      { id: 'pvp-viability', title: 'Vampire PvP Tier Rankings' }
    ]
  },
  {
    slug: 'raids',
    title: 'Stand Out Raids Guide: Train Raid, Highway Star & 77 Rings',
    category: 'Endgame & Raids',
    description: 'In-depth dungeon walkthroughs. Learn boss strategies, recommended party compositions, raid shops, and farming King Crimson chips.',
    readingTime: '9 min read',
    updatedDate: '2026-11-16',
    tableOfContents: [
      { id: 'train-raid', title: 'The Passione Train Raid (Pesci & Prosciutto)' },
      { id: 'highway-star-raid', title: 'Highway Star High-Speed Tunnel Chase' },
      { id: '77-rings-raid', title: '77 Rings: 77-Wave Knight Trial' },
      { id: 'raid-token-economy', title: 'Raid Token Shops & Item Priority' }
    ]
  },
  {
    slug: 'bosses',
    title: 'Stand Out Bosses Guide: Spawns, Health & Guaranteed Drops',
    category: 'Endgame & Raids',
    description: 'Directory of all world bosses in Stand Out. Stats, locations, attack patterns, and guaranteed drops for Rohan, Ningbo, Charming Man, and Hubert.',
    readingTime: '7 min read',
    updatedDate: '2026-11-16',
    tableOfContents: [
      { id: 'world-boss-roster', title: 'World Boss Roster & Spawn Timers' },
      { id: 'rohan-boss', title: 'Rohan Kishibe (350 HP, Heaven\'s Door)' },
      { id: 'ningbo-boss', title: 'Ningbo (280 HP, 200 Balloons)' },
      { id: 'charming-man-boss', title: 'Charming Man (225 HP, Big Mouth)' },
      { id: 'boss-loot-tables', title: 'Loot Tables & Exclusive Accessories' }
    ]
  },
  {
    slug: 'storyline',
    title: 'Stand Out Storyline Walkthrough: Quests 1 to 10 Guide',
    category: 'Progression',
    description: 'Complete step-by-step walkthrough of the main story quests, unlocking the full arrow pool, obtaining the smartphone, and reaching Level 50+.',
    readingTime: '8 min read',
    updatedDate: '2026-11-16',
    tableOfContents: [
      { id: 'story-overview', title: 'Storyline Milestones & Arrow Pool Unlocks' },
      { id: 'quests-1-5', title: 'Quests 1 - 5: Tutorial to Diamond Heist' },
      { id: 'quests-6-10', title: 'Quests 6 - 10: Police Chase to Climax' },
      { id: 'post-game', title: 'Post-Storyline Unlocks & Character Slots' }
    ]
  },
  {
    slug: 'crafting',
    title: 'Stand Out Crafting Guide: Station Recipes, Steel & Scrap',
    category: 'Economy',
    description: 'Full catalog of all Crafting Station recipes. How to produce Lucky Arrows, Bizarre Arrows, Focus Arrows, and tool upgrades.',
    readingTime: '6 min read',
    updatedDate: '2026-11-16',
    tableOfContents: [
      { id: 'crafting-stations', title: 'Crafting Station Locations' },
      { id: 'arrow-recipes', title: 'Arrow Crafting Recipes' },
      { id: 'focus-arrows', title: 'Focus Arrow (Part 3 & 5) Recipes' },
      { id: 'materials-guide', title: 'Gathering Steel, Scrap & Arrow Parts' }
    ]
  },
  {
    slug: 'gardening',
    title: 'Stand Out Gardening Guide: Crops, Roka Farm & Mutations',
    category: 'Economy',
    description: 'Master the soil and seeds. Cultivate fruit, unlock 35 Rokakaka mutations, speed up growing in the Gang Base greenhouse, and maximize delivery payouts.',
    readingTime: '8 min read',
    updatedDate: '2026-11-16',
    tableOfContents: [
      { id: 'gardening-basics', title: 'Pots, Soil & Watering Mechanics' },
      { id: 'seed-catalog', title: 'Seed Types & Growth Durations' },
      { id: 'roka-mutations', title: 'Triggering 3% Rokakaka Mutations' },
      { id: 'gang-greenhouse', title: 'Gang Base 3x Speed Greenhouse Room' }
    ]
  },
  {
    slug: 'first-stand',
    title: 'How to Get Your First Stand: Tutorial, Rerolls & Tier Goals',
    category: 'Starter',
    description: 'A beginner\'s roadmap to your first Stand awakening. How to evaluate your initial roll, when to keep a Rare, and when to spend arrows.',
    readingTime: '5 min read',
    updatedDate: '2026-11-16',
    tableOfContents: [
      { id: 'tutorial-arrow', title: 'The Guaranteed Starter Arrow' },
      { id: 'keep-or-reroll', title: 'Tier Evaluation: Should You Keep It?' },
      { id: 'reroll-process', title: 'How Rerolling Works' },
      { id: 'early-pvp-picks', title: 'Best Starter Stands for Early Game' }
    ]
  }
];

export const guidesBySlug = Object.fromEntries(guides.map(g => [g.slug, g]));
