import type { Quest } from '../types';

export const quests: Quest[] = [
  {
    "slug": "storyline-1-awakening",
    "title": "Storyline 1: The Standless Awakening",
    "npc": "Tutorial Instructor",
    "category": "Storyline",
    "location": "Central Morioh Plaza",
    "prerequisites": "New Character / Level 1",
    "objectives": [
      "Speak to the Tutorial Instructor in the central town square.",
      "Perform a 4-hit light combo using LMB against the training dummy (0/4).",
      "Execute a guardbreak Heavy attack (R) to stagger a blocking target (0/1).",
      "Perform an evasive dash (Q) and Perfect Block (F) on incoming hits (0/2)."
    ],
    "rewards": {
      "dalas": 500,
      "exp": 1500,
      "items": [
        "1x Mysterious Arrow",
        "Civilian ID Card"
      ]
    }
  },
  {
    "slug": "storyline-2-delivery",
    "title": "Storyline 2: High-Speed Cargo Delivery",
    "npc": "Meryl Mei Qi",
    "category": "Storyline",
    "location": "Downtown Fashion Boutique",
    "prerequisites": "Level 5+ & Storyline 1 Complete",
    "objectives": [
      "Locate Meryl Mei Qi near the Downtown parking lot.",
      "Enter the delivery hatchback and drive cargo to the Harbor warehouse without vehicle destruction.",
      "Deliver the manifest to the Harbor Merchant and return to Meryl Mei Qi."
    ],
    "rewards": {
      "dalas": 1200,
      "exp": 4500,
      "items": [
        "Smartphone (Permanent Huber & Gifts Unlock)"
      ]
    }
  },
  {
    "slug": "storyline-3-informant",
    "title": "Storyline 3: The Alleyway Informant",
    "npc": "Billy",
    "category": "Storyline",
    "location": "Downtown Back Alley",
    "prerequisites": "Level 10+ & Storyline 2 Complete",
    "objectives": [
      "Track down Billy behind the Casino in the entertainment district.",
      "Interrogate 3 delinquent thugs harassing the neighborhood (0/3).",
      "Recover Billy's stolen ledger and return to the alleyway."
    ],
    "rewards": {
      "dalas": 1800,
      "exp": 8000,
      "items": [
        "Signed Passione Contract (Safehouse Storage Access)"
      ]
    }
  },
  {
    "slug": "storyline-4-stolen-shards",
    "title": "Storyline 4: Stolen Meteorite Shards",
    "npc": "Guido Mista",
    "category": "Storyline",
    "location": "Diner Rooftop",
    "prerequisites": "Level 18+ & Storyline 3 Complete",
    "objectives": [
      "Climb to the Diner Rooftop using Stand Jump or ladder and speak with Mista.",
      "Defeat 5 rogue Passione Grunts patrolling the Industrial district (0/5).",
      "Recover 3 Stolen Arrow Parts dropped by squad leaders."
    ],
    "rewards": {
      "dalas": 2500,
      "exp": 14000,
      "items": [
        "Tier 1 Stand Storage Chip",
        "1x Mysterious Arrow"
      ]
    }
  },
  {
    "slug": "storyline-5-heist",
    "title": "Storyline 5: Escape with the Diamond",
    "npc": "Bruno Bucciarati",
    "category": "Storyline",
    "location": "Train Station Entrance",
    "prerequisites": "Level 25+ & Storyline 4 Complete",
    "objectives": [
      "Meet Bruno Bucciarati near Platform 1 of the Central Station.",
      "Defeat Bruno in a 1v1 Stand duel to prove your resolve.",
      "Secure the Blue Diamond transport case from the armored convoy."
    ],
    "rewards": {
      "dalas": 4000,
      "exp": 22000,
      "items": [
        "Sticky Fingers Subway Pass",
        "Blue Diamond"
      ]
    }
  },
  {
    "slug": "storyline-6-sewer-valves",
    "title": "Storyline 6: The Subterranean Pressure Gates",
    "npc": "Jodio Joestar",
    "category": "Storyline",
    "location": "Morioh Sewer System",
    "prerequisites": "Level 32+ & Storyline 5 Complete",
    "objectives": [
      "Enter the sewer grate beneath the Central Fountain.",
      "Locate and turn all 3 water pressure valves within 3 minutes (0/3).",
      "Neutralize the mutated sludge monsters guarding the lower sluice gate."
    ],
    "rewards": {
      "dalas": 5500,
      "exp": 30000,
      "items": [
        "Jodio's ID Document",
        "3x High-Grade Scrap"
      ]
    }
  },
  {
    "slug": "storyline-7-pier-standoff",
    "title": "Storyline 7: Showdown at the Harbor Pier",
    "npc": "Bobby Jean",
    "category": "Storyline",
    "location": "Harbor Shipping Pier 4",
    "prerequisites": "Level 40+ & Storyline 6 Complete",
    "objectives": [
      "Confront Bobby Jean and his hired gunmen at the container yard.",
      "Dodge Bobby Jean's decelerated bullet traps using Q-dash iframes.",
      "Defeat Bobby Jean and seize the magnetic volcanic artifact."
    ],
    "rewards": {
      "dalas": 7500,
      "exp": 42000,
      "items": [
        "Lava Rock (Part 9 Catalyst)",
        "1x Lucky Arrow"
      ]
    }
  },
  {
    "slug": "storyline-8-subway-unlock",
    "title": "Storyline 8: Restoring the Rapid Transit",
    "npc": "Station Master",
    "category": "Storyline",
    "location": "Subway Central Junction",
    "prerequisites": "Level 48+ & Storyline 7 Complete",
    "objectives": [
      "Investigate the power outage in the subway electrical chamber.",
      "Defeat 8 SWAT riot officers barricading the tracks (0/8).",
      "Re-align the electrical track switches to reopen citywide rapid transit."
    ],
    "rewards": {
      "dalas": 9000,
      "exp": 55000,
      "items": [
        "Permanent Subway Pass",
        "Tier 2 Stand Storage Chip"
      ]
    }
  },
  {
    "slug": "storyline-9-train-ambush",
    "title": "Storyline 9: The Passione Express Ambush",
    "npc": "Prosciutto & Pesci",
    "category": "Storyline",
    "location": "High-Speed Express Train",
    "prerequisites": "Level 55+ & Storyline 8 Complete",
    "objectives": [
      "Board the express train to Venice.",
      "Survive the Withering Mist aging aura by drinking Ice Water (0/3).",
      "Defeat Pesci before Beach Boy hooks your heart out."
    ],
    "rewards": {
      "dalas": 12000,
      "exp": 70000,
      "items": [
        "Passione Train Raid Keycard",
        "1x Lucky Arrow"
      ]
    }
  },
  {
    "slug": "storyline-10-boss-confrontation",
    "title": "Storyline 10: The Court of Crimson Fate",
    "npc": "Diavolo / Boss Avatar",
    "category": "Storyline",
    "location": "Colosseum Ruins",
    "prerequisites": "Level 50 Cap & Storyline 9 Complete",
    "objectives": [
      "Enter the ancient Colosseum arena under the blood moon.",
      "Survive Diavolo's Time Erase and counter his Epitaph forecast.",
      "Defeat King Crimson Alter Ego to finish the main campaign."
    ],
    "rewards": {
      "dalas": 25000,
      "exp": 100000,
      "items": [
        "1x Bizarre Arrow",
        "Tier 3 Master Stand Chip"
      ]
    }
  },
  {
    "slug": "hamon-training",
    "title": "Way of the Sun: Hamon Breathing Mastery",
    "npc": "Lisa Lisa",
    "category": "Sub-Ability",
    "location": "Mountain Monastery",
    "prerequisites": "Level 15+ & Empty Sub-Ability Slot",
    "objectives": [
      "Travel to the Mountain Monastery outside town and speak with Master Lisa Lisa.",
      "Maintain steady breathing rhythm during the waterfall endurance trial (0/300s).",
      "Defeat the 3 Ripple Acolytes using physical martial strikes without Stand summons.",
      "Choose your Hamon specialization: Jonathan, Caesar, or Zeppeli Path."
    ],
    "rewards": {
      "dalas": 2500,
      "exp": 15000,
      "items": [
        "Hamon Breathing Technique (Sub-Ability)"
      ]
    }
  },
  {
    "slug": "vampire-initiation",
    "title": "Embrace the Night: The Stone Mask Ritual",
    "npc": "Catacombs Crypt / Stone Mask",
    "category": "Sub-Ability",
    "location": "Ancient Catacombs",
    "prerequisites": "Level 20+ & Stone Mask in Inventory",
    "objectives": [
      "Acquire an Ancient Stone Mask from the Catacombs crypt or Black Market.",
      "Equip and activate the Stone Mask between 20:00 and 06:00 (Night Time).",
      "Siphon blood from 5 hostile human NPCs using M2 Blood Drain (0/5)."
    ],
    "rewards": {
      "dalas": 3000,
      "exp": 20000,
      "items": [
        "Vampire Physiology (Sub-Ability)",
        "Shadow Fragment"
      ]
    }
  },
  {
    "slug": "obtain-hermit-purple",
    "title": "Bill's Botanical Request (Hermit Purple)",
    "npc": "Billy",
    "category": "Sub-Ability",
    "location": "Town Greenhouses",
    "prerequisites": "Hamon Mastery Unlocked & Currently Standless",
    "objectives": [
      "Speak to Billy in the greenhouses while possessing Hamon and no active Stand.",
      "Infuse 15 mature garden crops with Life-Giving Overdrive breath (0/15).",
      "Defeat the Desert Citadel guardian using only Ripple strikes (0/1)."
    ],
    "rewards": {
      "dalas": 5000,
      "exp": 35000,
      "stand": "Hermit Purple"
    }
  },
  {
    "slug": "jojosapiens-research",
    "title": "Space Oddity: The JoJosapiens Exhibition",
    "npc": "Major Tom",
    "category": "Sub-Ability",
    "location": "Morioh Astronomical Observatory",
    "prerequisites": "Level 50 Cap & 7,500 Catalog Sales",
    "objectives": [
      "Visit Major Tom at the top of the Astronomical Observatory.",
      "Answer 20 historical JoJo trivia questions with 100% accuracy (0/20).",
      "Collect 50 survey response ballots scattered across Morioh districts."
    ],
    "rewards": {
      "dalas": 15000,
      "exp": 50000,
      "stand": "Jojosapiens"
    }
  },
  {
    "slug": "bounty-swat-captain",
    "title": "High-Value Target: SWAT Captain",
    "npc": "Bounty Board App",
    "category": "Bounty",
    "location": "Downtown Bank Plaza",
    "prerequisites": "Level 35+ & Smartphone Equipped",
    "objectives": [
      "Accept the SWAT Captain bounty from the Smartphone Bounties App.",
      "Locate the SWAT Captain during his 30-minute world patrol.",
      "Break his Riot Shield with heavy guardbreaks and claim the elimination."
    ],
    "rewards": {
      "dalas": 10000,
      "exp": 25000,
      "items": [
        "Tactical Armor Plate",
        "1x Mysterious Arrow"
      ]
    }
  },
  {
    "slug": "bounty-bobby-jean",
    "title": "Wanted Dead: Bobby Jean",
    "npc": "Bounty Board App",
    "category": "Bounty",
    "location": "Harbor Shipping Pier",
    "prerequisites": "Level 45+ & Smartphone Equipped",
    "objectives": [
      "Accept the contract from the Bounties App.",
      "Engage Bobby Jean at Pier 4 and evade his delayed bullet traps.",
      "Deliver the final blow before he retreats into the warehouse."
    ],
    "rewards": {
      "dalas": 12500,
      "exp": 35000,
      "items": [
        "Glory Holster (+15% Gun DMG)"
      ]
    }
  },
  {
    "slug": "bounty-prosciutto-pesci",
    "title": "Syndicate Hit: Prosciutto & Pesci",
    "npc": "Bounty Board App",
    "category": "Bounty",
    "location": "Train Station Platform 3",
    "prerequisites": "Level 50 Cap & Smartphone Equipped",
    "objectives": [
      "Accept the elite bounty contract.",
      "Defeat both Prosciutto (The Grateful Dead) and Pesci (Beach Boy) within 10 minutes.",
      "Prevent any team member from succumbing to full aging petrification."
    ],
    "rewards": {
      "dalas": 20000,
      "exp": 60000,
      "items": [
        "Passione Overcoat (+12% Damage)",
        "1x Lucky Arrow"
      ]
    }
  }
];

export const questsBySlug = new Map(quests.map((q) => [q.slug, q]));

export const questsByCategory = quests.reduce((acc, quest) => {
  if (!acc[quest.category]) {
    acc[quest.category] = [];
  }
  acc[quest.category].push(quest);
  return acc;
}, {} as Record<string, Quest[]>);
