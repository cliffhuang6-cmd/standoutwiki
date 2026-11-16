import type { Item } from '../types';

export const items: Item[] = [
  {
    slug: 'mysterious-arrow',
    name: 'Mysterious Arrow',
    category: 'Arrow',
    description: 'The fundamental golden artifact of Stand Out. Pierces the user to awaken an initial Stand or reroll an existing one.',
    obtainMethod: 'Tutorial completion, Quests, Bounties, Train Raid drop, Train Shop (7 Tokens), Crafting Station (3x Arrow Parts).',
    image: '/images/arrows/mysterious-arrow.webp',
    uses: [
      'Awakens a Stand from the full obtainable rarity pool (Rare through Pinnacle).',
      'Rerolls your current active Stand (overwrites previous ability).',
      'Required material for crafting Lucky Arrows (3x) and Bizarre Arrows (9x).'
    ]
  },
  {
    slug: 'lucky-arrow',
    name: 'Lucky Arrow',
    category: 'Arrow',
    description: 'An enriched Stand Arrow that completely filters out low-tier rolls. Guaranteed to roll Epic rarity or higher.',
    obtainMethod: 'Crafted at Crafting Station (3x Mysterious Arrows), purchased at Train Shop (25 Tokens), or milestone codes.',
    image: '/images/arrows/lucky-arrow.webp',
    uses: [
      'Rolls only Epic (42.5%), Legendary (34.0%), Mythical (22.1%), or Pinnacle (1.5%).',
      'Pinnacle chance matches getting at least one Pinnacle from 3 regular arrows.',
      'Optimal tool for hunting top-tier Stands without Rare pool dilution.'
    ]
  },
  {
    slug: 'bizarre-arrow',
    name: 'Bizarre Arrow',
    category: 'Arrow',
    description: 'A masterwork arrow imbued with concentrated meteorite energy. Completely eliminates both Rare and Epic tiers.',
    obtainMethod: 'Crafted at Crafting Station (9x Mysterious Arrows) or purchased at Train Shop (75 Tokens).',
    image: '/images/arrows/bizarre-arrow.webp',
    uses: [
      'Rolls only Legendary (57.9%), Mythical (37.7%), or Pinnacle (4.4%).',
      'Pinnacle chance matches getting at least one Pinnacle from 9 regular arrows.',
      'Highest value single gacha item in Stand Out for endgame players.'
    ]
  },
  {
    slug: 'mysterious-arrow-part-3',
    name: 'Mysterious Arrow [Part 3]',
    category: 'Arrow',
    description: 'A specialized focus arrow resonating with the 1980s Stardust Crusaders era.',
    obtainMethod: 'Crafting Station (5x Steel Ingot + 1x Mysterious Arrow).',
    image: '/images/arrows/mysterious-arrow-part-3.webp',
    uses: [
      'Awakens ONLY Part 3 Stands at equal probability across the pool.',
      'Star Platinum and The World have a dedicated 5.0% flat drop rate each.',
      'Ideal for targeted farming of time-stopping pinnacle Stands.'
    ]
  },
  {
    slug: 'mysterious-arrow-part-5',
    name: 'Mysterious Arrow [Part 5]',
    category: 'Arrow',
    description: 'A golden arrow with a beetle crest embedded in the head, vibrating with Passione gang energy.',
    obtainMethod: 'Train Raid completion, Train Shop (40 Tokens), Crafting Station (5x Steel Ingot + 1x Mysterious Arrow).',
    image: '/images/arrows/mysterious-arrow-part-5.webp',
    uses: [
      'Awakens ONLY Part 5 Golden Wind Stands at equal odds.',
      'King Crimson is locked at an explicit 5.0% drop chance.',
      'Eliminates all Part 3, 4, 6, 7, 8, and 9 pool noise.'
    ]
  },
  {
    slug: 'mysterious-rock',
    name: 'Mysterious Rock',
    category: 'Arrow',
    description: 'A heavy volcanic rock, warm to the touch. Crushed in hand to awaken a modern Part 9 Stand.',
    obtainMethod: 'Crafting Station (Lava Rock + Blue Diamond), Storyline completion reward.',
    image: '/images/items/mysterious-rock.webp',
    uses: [
      'Awakens ONLY Part 9 The JOJOLands Stands (Smooth Operators, November Rain, The Hustle, The MATTEKUDASAI, Jojosapiens).',
      'All Part 9 entries roll with equal baseline odds.'
    ]
  },
  {
    slug: 'apple',
    name: 'Apple',
    category: 'Consumable',
    description: 'A fresh, crisp orchard fruit grown through gardening. Cleanses spiritual alignment.',
    obtainMethod: 'Grown in garden from Apple Seed (purchased from Big Chop).',
    image: '/images/items/apple.webp',
    uses: [
      'Safely removes your Sub-Ability (Hamon or Vampire) without penalty.',
      'Allows switching between fighting style branches.'
    ]
  },
  {
    slug: 'phone',
    name: 'Smartphone',
    category: 'Story',
    description: 'A modern smartphone loaded with essential town utility applications.',
    obtainMethod: 'Given by Meryl Mei Qi during Storyline Quest 2.',
    image: '/images/items/phone.webp',
    uses: [
      'Access Huber taxi fast travel.',
      'Open Maps GPS navigation.',
      'Redeem promo codes via the Gifts application.',
      'View active player bounties.'
    ]
  },
  {
    slug: 'stand-chip-king-crimson',
    name: 'Stand Chip (King Crimson Full)',
    category: 'Stand Chip',
    description: 'A microchip containing the recorded soul data of King Crimson.',
    obtainMethod: '1% rare drop from Train Raid (Hard Mode) or purchased for 200 Tokens in the Train Shop.',
    image: '/images/items/stand-chip.webp',
    uses: [
      'Use at D\'Arby\'s Stand Storage counter to directly claim King Crimson Full.',
      'Can be slotted into your D\'Arby storage inventory without risk of loss.'
    ]
  },
  {
    slug: 'steel-ingot',
    name: 'Steel Ingot',
    category: 'Material',
    description: 'A smelted bar of refined industrial steel used in advanced crafting.',
    obtainMethod: 'Purchased from Big Chop or Train Shop, found via metal detecting.',
    image: '/images/items/steel-ingot.webp',
    uses: [
      'Essential material for Part 3 and Part 5 Focus Arrows (5x required).',
      'Required for crafting garden pots and advanced tool upgrades.'
    ]
  },
  {
    slug: 'arrow-part',
    name: 'Arrow Part',
    category: 'Material',
    description: 'A fragment of ancient meteorite alloy discovered in crater impacts.',
    obtainMethod: 'Meteor world events, metal detecting in sand dunes, Train Shop (4x for 7 Tokens).',
    image: '/images/items/arrow-part.webp',
    uses: [
      'Combine 3x Arrow Parts with 1x Steel Ingot to craft a Mysterious Arrow.',
      'Crucial resource for free-to-play arrow farming loops.'
    ]
  }
];
