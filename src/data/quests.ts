import type { Quest } from '../types';

export const quests: Quest[] = [
  {
    slug: 'hamon-training',
    title: 'Hamon Breathing Mastery',
    npc: 'Lisa Lisa',
    category: 'Sub-Ability',
    location: 'Venice Training Grounds',
    prerequisites: 'Level 15+ & Empty Sub-Ability Slot',
    objectives: [
      'Equip the Ripple Training Mask purchased from Lisa Lisa.',
      'Successfully breathe through the mask 300 times (0/300).',
      'Speak to Lisa Lisa to select your Hamon discipline path (Jonathan, Caesar, or Zeppeli).'
    ],
    rewards: {
      dalas: 2500,
      exp: 15000,
      items: ['Hamon Breathing Technique (Sub-Ability)']
    }
  },
  {
    slug: 'obtain-hermit-purple',
    title: 'Billy\'s Horticultural Request',
    npc: 'Billy',
    category: 'Storyline',
    location: 'Town Greenhouses',
    prerequisites: 'Hamon unlocked',
    objectives: [
      'Defeat DIO in the Desert Citadel (0/1).',
      'Infuse living crops with Life-Giving Overdrive (0/15).'
    ],
    rewards: {
      dalas: 5000,
      exp: 25000,
      stand: 'Hermit Purple'
    }
  },
  {
    slug: 'catch-the-rainbow-quest',
    title: 'The Leprechaun at the Rainbow\'s End',
    npc: 'Blackmore',
    category: 'Side Quest',
    location: 'Stormy Plains / Highway',
    prerequisites: 'Rain weather event active',
    objectives: [
      'Locate the rainbow origin point during active rainfall.',
      'Defeat the Rainbow Leprechaun (0/1).',
      'Retrieve the Rainbow Droplet and return to Blackmore.'
    ],
    rewards: {
      dalas: 3500,
      exp: 18000,
      items: ['Lucky Arrow', 'Blackmore\'s Mask']
    }
  },
  {
    slug: 'space-oddity',
    title: 'Major Tom\'s Grand Survey',
    npc: 'Major Tom',
    category: 'Side Quest',
    location: 'Observatory Hill',
    prerequisites: 'Unlock 45 unique Stands in Stand Storage / Catalog',
    objectives: [
      'Survey all key town NPC residents.',
      'Obtain signatures from Jodio, Dragona, Usagi, and Charming Man (0/4).',
      'Return to Major Tom at the Observatory.'
    ],
    rewards: {
      dalas: 10000,
      exp: 50000,
      stand: 'Jojosapiens'
    }
  },
  {
    slug: 'crash-course',
    title: 'Crash Course & Havoc',
    npc: 'Meryl Mei Qi',
    category: 'Storyline',
    location: 'Boutique Office',
    prerequisites: 'Storyline Quest 1 completed',
    objectives: [
      'Enter Meryl\'s executive car (0/1).',
      'Drive across town causing street property destruction (0/50).',
      'Collect your rewarded utility smartphone from Meryl.'
    ],
    rewards: {
      dalas: 1500,
      exp: 8000,
      items: ['Smartphone (Enables Huber, Maps, and Gifts Code App)']
    }
  },
  {
    slug: 'train-raid-investigation',
    title: 'Infiltration of the Passione Express',
    npc: 'Donatello',
    category: 'Daily Quest',
    location: 'Central Railway Station',
    prerequisites: 'Level 35+',
    objectives: [
      'Clear Train Cars 1 through 4.',
      'Defeat Pesci and Prosciutto in the Locomotive Cabin (0/1).',
      'Extract with Passione Raid Tokens.'
    ],
    rewards: {
      dalas: 8000,
      exp: 30000,
      items: ['Train Raid Tokens (x15)', 'Chance for King Crimson Chip (1%)']
    }
  }
];
