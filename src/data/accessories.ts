import type { Accessory } from '../types';

export const accessories: Accessory[] = [
  {
    slug: 'dios-jacket',
    name: "DIO's Jacket",
    bonuses: {
      health: 5,
      damage: 10,
      ability: 15
    },
    setBonus: {
      setName: "DIO's World Set",
      requiredPieces: ["DIO's Jacket", "DIO's Pants"],
      effect: '+20 Additional Ability points (Massively increases Time-Stop duration to max 10s).'
    },
    dropsFrom: "DIO Boss Fight / High-Tier Bounty Crate"
  },
  {
    slug: 'dios-pants',
    name: "DIO's Pants",
    bonuses: {
      health: 5,
      damage: 5,
      ability: 15
    },
    setBonus: {
      setName: "DIO's World Set",
      requiredPieces: ["DIO's Jacket", "DIO's Pants"],
      effect: '+20 Additional Ability points (Massively increases Time-Stop duration to max 10s).'
    },
    dropsFrom: "DIO Boss Fight / High-Tier Bounty Crate"
  },
  {
    slug: 'jotaros-jacket',
    name: "Jotaro's Jacket",
    bonuses: {
      health: 5,
      damage: 15,
      ability: 5
    },
    setBonus: {
      setName: "Stardust Crusader Set",
      requiredPieces: ["Jotaro's Jacket", "Jotaro's Pants"],
      effect: '+15 Ability points and +10% flat Physical & Stand Damage.'
    },
    dropsFrom: "Jotaro Boss Fight / Legendary Bounty Crate"
  },
  {
    slug: 'jotaros-pants',
    name: "Jotaro's Pants",
    bonuses: {
      health: 5,
      damage: 15,
      ability: 5
    },
    setBonus: {
      setName: "Stardust Crusader Set",
      requiredPieces: ["Jotaro's Jacket", "Jotaro's Pants"],
      effect: '+15 Ability points and +10% flat Physical & Stand Damage.'
    },
    dropsFrom: "Jotaro Boss Fight / Legendary Bounty Crate"
  },
  {
    slug: 'enricos-jacket',
    name: "Enrico's Jacket",
    bonuses: {
      health: 7,
      damage: 10,
      ability: 6
    },
    setBonus: {
      setName: "Gravity & Speed Set",
      requiredPieces: ["Enrico's Jacket", "Enrico's Pants"],
      effect: '+15% permanent base Walkspeed boost.'
    },
    dropsFrom: "Green Dolphin Street Prison Quests"
  },
  {
    slug: 'enricos-pants',
    name: "Enrico's Pants",
    bonuses: {
      health: 6,
      damage: 10,
      ability: 6
    },
    setBonus: {
      setName: "Gravity & Speed Set",
      requiredPieces: ["Enrico's Jacket", "Enrico's Pants"],
      effect: '+15% permanent base Walkspeed boost.'
    },
    dropsFrom: "Green Dolphin Street Prison Quests"
  },
  {
    slug: 'swat-jacket',
    name: 'SWAT Heavy Vest',
    bonuses: {
      health: 5,
      damage: 2
    },
    setBonus: {
      setName: 'Tactical Armor Set',
      requiredPieces: ['SWAT Heavy Vest', 'SWAT Combat Pants'],
      effect: '+5% total Damage Resistance against all enemy strikes.'
    },
    dropsFrom: 'SWAT Unit NPC Bounties'
  },
  {
    slug: 'swat-pants',
    name: 'SWAT Combat Pants',
    bonuses: {
      health: 5,
      damage: 2
    },
    setBonus: {
      setName: 'Tactical Armor Set',
      requiredPieces: ['SWAT Heavy Vest', 'SWAT Combat Pants'],
      effect: '+5% total Damage Resistance against all enemy strikes.'
    },
    dropsFrom: 'SWAT Unit NPC Bounties'
  },
  {
    slug: 'darbys-jacket',
    name: "D'Arby's Gambler Jacket",
    bonuses: {
      health: 3,
      damage: 2,
      ability: 3
    },
    setBonus: {
      setName: 'Casino High-Roller Set',
      requiredPieces: ["D'Arby's Gambler Jacket", "D'Arby's Pants"],
      effect: '+10% bonus Dalas/Money earned on all quests, bounties, and deliveries.'
    },
    dropsFrom: "D'Arby Mini-Game / Storyline Milestone"
  },
  {
    slug: 'darbys-pants',
    name: "D'Arby's Pants",
    bonuses: {
      health: 3,
      damage: 1,
      ability: 2
    },
    setBonus: {
      setName: 'Casino High-Roller Set',
      requiredPieces: ["D'Arby's Gambler Jacket", "D'Arby's Pants"],
      effect: '+10% bonus Dalas/Money earned on all quests, bounties, and deliveries.'
    },
    dropsFrom: "D'Arby Mini-Game / Storyline Milestone"
  },
  {
    slug: 'vampire-cloak',
    name: 'Shadow Cloak',
    bonuses: {
      health: 0,
      damage: 0,
      special: 'When equipped by a Vampire, completely negates all daylight sun damage.'
    },
    dropsFrom: 'Old Mansion Graveyard Chest'
  },
  {
    slug: 'tarkus-helmet',
    name: "Tarkus's Iron Great-Helmet",
    bonuses: {
      health: 3,
      damage: 1,
      special: '-10% Walk Speed, +20% flat Damage Resistance across all damage types.'
    },
    dropsFrom: '77 Rings Knight Raid (Stage 77 Boss Drop)'
  },
  {
    slug: 'traders-sticky-hat',
    name: "Trader's Sticky Hat",
    bonuses: {
      ability: 6,
      damage: 3,
      special: 'Crouch Speed +10%, Harvest Search Party Luck +20%.'
    },
    dropsFrom: 'Lettuce Trader Side Quest'
  }
];
