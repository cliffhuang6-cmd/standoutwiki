import type { Quest } from '../types';

export const quests: Quest[] = [
  {
    "slug": "storyline-intro",
    "title": "Introduction: Fateful Awakening",
    "chapter": "Prologue",
    "npc": "Hey Ya!",
    "category": "Storyline",
    "location": "Honolulu Roadside",
    "requiredLevel": 1,
    "objectives": [
      "Awaken on the roadside and witness Hey Ya! appearing before you."
    ],
    "rewards": {
      "dalas": 100,
      "exp": 250
    },
    "nextQuest": "Hey Ya's Tutorial #1"
  },
  {
    "slug": "storyline-tutorial-1",
    "title": "Hey Ya's Tutorial #1: Movement & Evasion",
    "chapter": "Chapter 1",
    "npc": "Hey Ya!",
    "category": "Storyline",
    "location": "Honolulu Roadside",
    "requiredLevel": 1,
    "objectives": [
      "Practice sprinting and dashing (Q), then follow the marker toward the roadside encounter."
    ],
    "rewards": {
      "dalas": 250,
      "exp": 300
    },
    "nextQuest": "Hey Ya's Tutorial #2"
  },
  {
    "slug": "storyline-tutorial-2",
    "title": "Hey Ya's Tutorial #2: Basic Combat",
    "chapter": "Chapter 2",
    "npc": "Corrupt Police Officer",
    "category": "Storyline",
    "location": "Honolulu Highway Outskirts",
    "requiredLevel": 1,
    "objectives": [
      "Defeat the corrupt police officer using Light combo (LMB), Heavy guardbreak (R), and Blocking (F)."
    ],
    "rewards": {
      "dalas": 500,
      "exp": 500,
      "items": [
        "1x Mysterious Arrow"
      ]
    },
    "nextQuest": "Talk to the Stranger"
  },
  {
    "slug": "storyline-talk-to-stranger",
    "title": "Talk to the Stranger: Jodio Joestar",
    "chapter": "Chapter 3",
    "npc": "Jodio Joestar",
    "category": "Storyline",
    "location": "Honolulu Suburban Alleyway",
    "requiredLevel": 2,
    "objectives": [
      "Speak with Jodio Joestar and agree to follow him to the Passione-affiliated boutique IKO IKO."
    ],
    "rewards": {
      "dalas": 200,
      "exp": 400
    },
    "nextQuest": "Meet Meryl Mei Qi"
  },
  {
    "slug": "storyline-meet-meryl",
    "title": "Meet Meryl Mei Qi: The Heist Briefing",
    "chapter": "Chapter 4",
    "npc": "Meryl Mei Qi",
    "category": "Storyline",
    "location": "IKO IKO Boutique (Downtown)",
    "requiredLevel": 3,
    "objectives": [
      "Receive the villa heist briefing from Meryl Mei Qi and obtain your personal Smartphone."
    ],
    "rewards": {
      "dalas": 100,
      "exp": 300,
      "items": [
        "Smartphone (Permanent Unlock)"
      ]
    },
    "nextQuest": "Go to Rohan's Villa"
  },
  {
    "slug": "storyline-rohan-villa",
    "title": "Go to Rohan's Villa",
    "chapter": "Chapter 5",
    "npc": "Jodio Joestar",
    "category": "Storyline",
    "location": "Kailua Hilltop Villa",
    "requiredLevel": 5,
    "objectives": [
      "Infiltrate Rohan Kishibe's luxury estate. Crouch to bypass security cameras and inspect fixtures."
    ],
    "rewards": {
      "dalas": 200,
      "exp": 450
    },
    "nextQuest": "Locate the Hidden Vault"
  },
  {
    "slug": "storyline-locate-vault",
    "title": "Locate the Hidden Vault",
    "chapter": "Chapter 6",
    "npc": "Estate Security Mechanism",
    "category": "Storyline",
    "location": "Rohan's Villa Study",
    "requiredLevel": 7,
    "objectives": [
      "Solve the book spine alignment puzzle to trigger the secret underground vault mechanism."
    ],
    "rewards": {
      "dalas": 200,
      "exp": 500
    },
    "nextQuest": "Escape With the Diamond"
  },
  {
    "slug": "storyline-escape-diamond",
    "title": "Escape With the Diamond",
    "chapter": "Chapter 7",
    "npc": "Jodio & Crew",
    "category": "Storyline",
    "location": "Rohan's Villa Underground Vault",
    "requiredLevel": 8,
    "objectives": [
      "Secure the 24-carat Blue Diamond and the mysterious volcanic Lava Rock, then initiate escape."
    ],
    "rewards": {
      "dalas": 350,
      "exp": 700,
      "items": [
        "Blue Diamond",
        "Lava Rock"
      ]
    },
    "nextQuest": "Get Clear of the Villa"
  },
  {
    "slug": "storyline-clear-villa",
    "title": "Get Clear of the Villa",
    "chapter": "Chapter 8",
    "npc": "Dragona Joestar",
    "category": "Storyline",
    "location": "Villa Estate Perimeter",
    "requiredLevel": 9,
    "objectives": [
      "Evade estate alarms and break past the outer grounds perimeter."
    ],
    "rewards": {
      "dalas": 75,
      "exp": 400
    },
    "nextQuest": "Wild Cat Size"
  },
  {
    "slug": "storyline-cat-size",
    "title": "Wild Cat Size Ambush",
    "chapter": "Chapter 9",
    "npc": "Paco Laburante",
    "category": "Storyline",
    "location": "Jungle Bamboo Path",
    "requiredLevel": 10,
    "objectives": [
      "Defeat the three Cat Size wild feline Stand users ambush in the bamboo thicket."
    ],
    "rewards": {
      "dalas": 200,
      "exp": 700,
      "items": [
        "1x Mysterious Arrow"
      ]
    },
    "nextQuest": "Test the Lava Rock at Diamotch"
  },
  {
    "slug": "storyline-test-lava-rock",
    "title": "Test the Lava Rock at Diamotch",
    "chapter": "Chapter 10",
    "npc": "Jodio Joestar",
    "category": "Storyline",
    "location": "Shopping Galleria Promenade",
    "requiredLevel": 12,
    "objectives": [
      "Discuss with Jodio the magnetic attraction properties of the volcanic Lava Rock toward valuable items."
    ],
    "rewards": {
      "dalas": 300,
      "exp": 450
    },
    "nextQuest": "Enter Diamotch"
  },
  {
    "slug": "storyline-enter-diamotch",
    "title": "Enter Diamotch Luxury Boutique",
    "chapter": "Chapter 11",
    "npc": "Diamotch Sales Representative",
    "category": "Storyline",
    "location": "Diamotch Jewelers",
    "requiredLevel": 13,
    "objectives": [
      "Pose as high-net-worth clientele and request a private viewing of Swiss luxury timepieces."
    ],
    "rewards": {
      "dalas": 250,
      "exp": 450
    },
    "nextQuest": "Private Watch Showing"
  },
  {
    "slug": "storyline-private-watch-showing",
    "title": "Private Watch Showing",
    "chapter": "Chapter 12",
    "npc": "Diamotch Store Manager",
    "category": "Storyline",
    "location": "Diamotch VIP Lounge",
    "requiredLevel": 14,
    "objectives": [
      "Sit down for the presentation and discreetly place the Lava Rock near the display case."
    ],
    "rewards": {
      "dalas": 300,
      "exp": 450
    },
    "nextQuest": "Accused on Camera"
  },
  {
    "slug": "storyline-accused-camera",
    "title": "Accused on Camera",
    "chapter": "Chapter 13",
    "npc": "Diamotch Head Security",
    "category": "Storyline",
    "location": "Diamotch Showroom",
    "requiredLevel": 15,
    "objectives": [
      "Stand ground when the head security officer corners you regarding anomalous CCTV footage."
    ],
    "rewards": {
      "dalas": 350,
      "exp": 500
    },
    "nextQuest": "Defeat Diamotch Security"
  },
  {
    "slug": "storyline-defeat-security",
    "title": "Defeat Diamotch Security",
    "chapter": "Chapter 14",
    "npc": "Security Enforcers",
    "category": "Storyline",
    "location": "Diamotch Storefront",
    "requiredLevel": 16,
    "objectives": [
      "Subdue both heavily armed Diamotch private security operatives."
    ],
    "rewards": {
      "dalas": 500,
      "exp": 650
    },
    "nextQuest": "Find the Returned Watch"
  },
  {
    "slug": "storyline-returned-watch",
    "title": "Find the Returned Watch",
    "chapter": "Chapter 15",
    "npc": "Jodio Joestar",
    "category": "Storyline",
    "location": "Galleria Rear Service Alley",
    "requiredLevel": 17,
    "objectives": [
      "Locate the luxury Swiss watch that magically rolled back to the Lava Rock on its own."
    ],
    "rewards": {
      "dalas": 400,
      "exp": 450,
      "items": [
        "Silver Watch"
      ]
    },
    "nextQuest": "Proven Innocent"
  },
  {
    "slug": "storyline-proven-innocent",
    "title": "Proven Innocent",
    "chapter": "Chapter 16",
    "npc": "Store Employee",
    "category": "Storyline",
    "location": "Diamotch Entrance",
    "requiredLevel": 18,
    "objectives": [
      "Receive the formal apology from the boutique staff after showing clear pockets."
    ],
    "rewards": {
      "dalas": 300,
      "exp": 450
    },
    "nextQuest": "Tell Jodio It Returned"
  },
  {
    "slug": "storyline-tell-jodio-returned",
    "title": "Tell Jodio It Returned",
    "chapter": "Chapter 17",
    "npc": "Jodio Joestar",
    "category": "Storyline",
    "location": "Subway Station Mezzanine",
    "requiredLevel": 19,
    "objectives": [
      "Report the phenomenon to Jodio: valuable objects physically gravitate toward the volcanic stone."
    ],
    "rewards": {
      "dalas": 350,
      "exp": 450
    },
    "nextQuest": "Open the Food Bag"
  },
  {
    "slug": "storyline-open-food-bag",
    "title": "Open the Food Bag",
    "chapter": "Chapter 18",
    "npc": "Jodio Joestar",
    "category": "Storyline",
    "location": "Harbor Pier Bench",
    "requiredLevel": 20,
    "objectives": [
      "Examine the contents of the takeout bag Jodio handed you for lunch."
    ],
    "rewards": {
      "dalas": 200,
      "exp": 450
    },
    "nextQuest": "Charming Man Ambush"
  },
  {
    "slug": "storyline-charming-man-ambush",
    "title": "Charming Man Ambush",
    "chapter": "Chapter 19",
    "npc": "Charming Man",
    "category": "Storyline",
    "location": "Harbor Pier Warehouse",
    "requiredLevel": 22,
    "objectives": [
      "Survive and defeat Charming Man (Beyond the Sea) attempting to steal back the Lava Rock."
    ],
    "rewards": {
      "dalas": 750,
      "exp": 800,
      "items": [
        "Charming Man's ID Document"
      ]
    },
    "nextQuest": "Return to IKO IKO"
  },
  {
    "slug": "storyline-return-iko-iko",
    "title": "Return to IKO IKO",
    "chapter": "Chapter 20",
    "npc": "Dragona Joestar",
    "category": "Storyline",
    "location": "Downtown District",
    "requiredLevel": 23,
    "objectives": [
      "Regroup with Dragona and Paco and return to IKO IKO headquarters."
    ],
    "rewards": {
      "dalas": 250,
      "exp": 450
    },
    "nextQuest": "Report to Meryl Mei"
  },
  {
    "slug": "storyline-report-meryl",
    "title": "Report to Meryl Mei",
    "chapter": "Chapter 21",
    "npc": "Meryl Mei Qi",
    "category": "Storyline",
    "location": "IKO IKO Back Office",
    "requiredLevel": 24,
    "objectives": [
      "Deliver the diamond, luxury watch, and the Lava Rock findings to Meryl Mei Qi."
    ],
    "rewards": {
      "dalas": 600,
      "exp": 500
    },
    "nextQuest": "The Good Stuff: Grow"
  },
  {
    "slug": "storyline-the-good-stuff-grow",
    "title": "The Good Stuff: Botanical Cultivation",
    "chapter": "Chapter 22",
    "npc": "Big Chop",
    "category": "Storyline",
    "location": "Greenhouse Botanical Garden",
    "requiredLevel": 25,
    "objectives": [
      "Learn gardening mechanics from Big Chop: plant, water, and harvest your first crop."
    ],
    "rewards": {
      "dalas": 500,
      "exp": 600,
      "items": [
        "1x Garden Pot",
        "1x Rokaka Seed"
      ]
    },
    "nextQuest": "Go to the Land Registry"
  },
  {
    "slug": "storyline-go-land-registry",
    "title": "Go to the Land Registry",
    "chapter": "Chapter 23",
    "npc": "Jodio Joestar",
    "category": "Storyline",
    "location": "Hawaii State Land Registry Office",
    "requiredLevel": 26,
    "objectives": [
      "Infiltrate the government archives at the Hawaii State Land Registry building."
    ],
    "rewards": {
      "dalas": 300,
      "exp": 500
    },
    "nextQuest": "Request HOWLER Deeds"
  },
  {
    "slug": "storyline-request-howler-deeds",
    "title": "Request HOWLER Deeds",
    "chapter": "Chapter 24",
    "npc": "Registry Archives Clerk",
    "category": "Storyline",
    "location": "Public Records Counter",
    "requiredLevel": 27,
    "objectives": [
      "Request official public inspection files regarding the HOWLER infrastructure company land deeds."
    ],
    "rewards": {
      "dalas": 300,
      "exp": 500
    },
    "nextQuest": "Touch the HOWLER Deeds"
  },
  {
    "slug": "storyline-touch-howler-deeds",
    "title": "Touch the HOWLER Deeds",
    "chapter": "Chapter 25",
    "npc": "Public Records Terminal",
    "category": "Storyline",
    "location": "Archive Inspection Room",
    "requiredLevel": 28,
    "objectives": [
      "Bring the Lava Rock into physical contact with the original 50,000-acre HOWLER estate deeds."
    ],
    "rewards": {
      "dalas": 500,
      "exp": 600
    },
    "nextQuest": "Exit the Registry"
  },
  {
    "slug": "storyline-exit-registry",
    "title": "Exit the Registry",
    "chapter": "Chapter 26",
    "npc": "Security Guards",
    "category": "Storyline",
    "location": "Government Plaza",
    "requiredLevel": 29,
    "objectives": [
      "Evade the alerted security guards and slip out into the city plaza."
    ],
    "rewards": {
      "dalas": 300,
      "exp": 450
    },
    "nextQuest": "Report to Jodio"
  },
  {
    "slug": "storyline-report-jodio-deeds",
    "title": "Report to Jodio",
    "chapter": "Chapter 27",
    "npc": "Jodio Joestar",
    "category": "Storyline",
    "location": "Courthouse Steps",
    "requiredLevel": 30,
    "objectives": [
      "Confirm that the deeds have registered contact with the Lava Rock's magnetic force."
    ],
    "rewards": {
      "dalas": 500,
      "exp": 750,
      "items": [
        "1x Lucky Arrow"
      ]
    },
    "nextQuest": "Bags' Groove Symptoms"
  },
  {
    "slug": "storyline-bags-groove-symptoms",
    "title": "Bags' Groove Symptoms",
    "chapter": "Chapter 28",
    "npc": "Usagi Alohaoe",
    "category": "Storyline",
    "location": "Downtown Bus Stop",
    "requiredLevel": 31,
    "objectives": [
      "Witness Usagi collapsing from microscopic internal lesions caused by an enemy stand."
    ],
    "rewards": {
      "dalas": 350,
      "exp": 550
    },
    "nextQuest": "Carry Usagi to Safety"
  },
  {
    "slug": "storyline-carry-usagi",
    "title": "Carry Usagi to Safety",
    "chapter": "Chapter 29",
    "npc": "Paco Laburante",
    "category": "Storyline",
    "location": "Transit Crossroad",
    "requiredLevel": 32,
    "objectives": [
      "Carry Usagi along the marked route while fending off tracking agents."
    ],
    "rewards": {
      "dalas": 400,
      "exp": 550
    },
    "nextQuest": "Go to the Hospital"
  },
  {
    "slug": "storyline-go-hospital",
    "title": "Go to the Hospital",
    "chapter": "Chapter 30",
    "npc": "Hospital Reception",
    "category": "Storyline",
    "location": "Queen's Medical Center Entrance",
    "requiredLevel": 33,
    "objectives": [
      "Enter the medical center emergency wing without attracting federal attention."
    ],
    "rewards": {
      "dalas": 300,
      "exp": 550
    },
    "nextQuest": "Congressman White's Tablet"
  },
  {
    "slug": "storyline-congressman-tablet",
    "title": "Congressman White's Tablet",
    "chapter": "Chapter 31",
    "npc": "Congressman White's Office",
    "category": "Storyline",
    "location": "Hospital VIP Wing 3F",
    "requiredLevel": 34,
    "objectives": [
      "Infiltrate the VIP suite and commandeer Congressman White's secure government tablet."
    ],
    "rewards": {
      "dalas": 400,
      "exp": 600
    },
    "nextQuest": "Find the MRI Room"
  },
  {
    "slug": "storyline-find-mri-room",
    "title": "Find the MRI Room",
    "chapter": "Chapter 32",
    "npc": "Diagnostic Technician",
    "category": "Storyline",
    "location": "Radiology Department B1",
    "requiredLevel": 35,
    "objectives": [
      "Navigate through basement security to reach the high-field MRI diagnostic suite."
    ],
    "rewards": {
      "dalas": 350,
      "exp": 550
    },
    "nextQuest": "Scan Usagi"
  },
  {
    "slug": "storyline-scan-usagi",
    "title": "Scan Usagi",
    "chapter": "Chapter 33",
    "npc": "MRI Scanner Console",
    "category": "Storyline",
    "location": "MRI Chamber",
    "requiredLevel": 36,
    "objectives": [
      "Operate the MRI console to pinpoint the microscopic Bags' Groove organisms inside Usagi."
    ],
    "rewards": {
      "dalas": 400,
      "exp": 600
    },
    "nextQuest": "Extract Bags' Groove"
  },
  {
    "slug": "storyline-extract-bags-groove",
    "title": "Extract Bags' Groove",
    "chapter": "Chapter 34",
    "npc": "THE MATTEKUDASAI Straw Device",
    "category": "Storyline",
    "location": "Operating Room 2",
    "requiredLevel": 37,
    "objectives": [
      "Extract 5 Bags' Groove microscopic parasites using THE MATTEKUDASAI duplicate camera pipe."
    ],
    "rewards": {
      "dalas": 500,
      "exp": 650
    },
    "nextQuest": "Defeat Bobby Jean"
  },
  {
    "slug": "storyline-defeat-bobby-jean",
    "title": "Boss Fight: Bobby Jean (Glory Days)",
    "chapter": "Chapter 35",
    "npc": "Bobby Jean",
    "category": "Storyline",
    "location": "Hospital Rooftop Heliport",
    "requiredLevel": 39,
    "objectives": [
      "Defeat federal agent Bobby Jean and dodge his time-dilated Glory Days sniper trajectories."
    ],
    "rewards": {
      "dalas": 550,
      "exp": 900,
      "items": [
        "Bobby Jean's Hat"
      ]
    },
    "nextQuest": "Secure Yokohama's Documents"
  },
  {
    "slug": "storyline-secure-yokohama-docs",
    "title": "Secure Yokohama's Documents",
    "chapter": "Chapter 36",
    "npc": "Agent Yokohama's Briefcase",
    "category": "Storyline",
    "location": "Helipad Lounge",
    "requiredLevel": 40,
    "objectives": [
      "Recover the classified federal transfer files detailing HOWLER corporate liabilities."
    ],
    "rewards": {
      "dalas": 600,
      "exp": 750,
      "items": [
        "Classified Documents"
      ]
    },
    "nextQuest": "Report to Meryl at IKO IKO"
  },
  {
    "slug": "storyline-report-meryl-docs",
    "title": "Report to Meryl at IKO IKO",
    "chapter": "Chapter 37",
    "npc": "Meryl Mei Qi",
    "category": "Storyline",
    "location": "IKO IKO Boutique",
    "requiredLevel": 41,
    "objectives": [
      "Present Yokohama's confiscated liabilities portfolio to Meryl Mei Qi."
    ],
    "rewards": {
      "dalas": 1000,
      "exp": 1500,
      "items": [
        "1x Bizarre Arrow"
      ]
    },
    "nextQuest": "D'Arby's Wager"
  },
  {
    "slug": "storyline-darbys-wager",
    "title": "D'Arby's Wager: Casino Cellar",
    "chapter": "Chapter 38",
    "npc": "Daniel J. D'Arby",
    "category": "Storyline",
    "location": "Royal Palm Casino Cellar",
    "requiredLevel": 42,
    "objectives": [
      "Win D'Arby's wager to unlock the permanent Stand Storage facility and obtain storage chips."
    ],
    "rewards": {
      "dalas": 800,
      "exp": 1000,
      "items": [
        "D'Arby Stand Storage Chip"
      ]
    },
    "nextQuest": "Complete 5 Side Activities"
  },
  {
    "slug": "storyline-side-activities",
    "title": "Reputation Building: 5 Side Activities",
    "chapter": "Chapter 39",
    "npc": "Petyr & Phone Bounties",
    "category": "Storyline",
    "location": "Honolulu Citywide",
    "requiredLevel": 44,
    "objectives": [
      "Complete 5 city activities: accepted bounties, side quests, or Train Raid clears (0/5)."
    ],
    "rewards": {
      "dalas": 1200,
      "exp": 1200
    },
    "nextQuest": "Complete 1 Elimination"
  },
  {
    "slug": "storyline-elimination",
    "title": "Combat Readiness: 1 Elimination",
    "chapter": "Chapter 40",
    "npc": "Combat Handler",
    "category": "Storyline",
    "location": "PvP Arena or Street Bounties",
    "requiredLevel": 45,
    "objectives": [
      "Execute 1 registered combat elimination against an enemy player or high-tier rogue."
    ],
    "rewards": {
      "dalas": 800,
      "exp": 1000
    },
    "nextQuest": "The Debt Collection"
  },
  {
    "slug": "storyline-debt-collection",
    "title": "The Debt Collection",
    "chapter": "Chapter 41",
    "npc": "Meryl Mei Qi",
    "category": "Storyline",
    "location": "IKO IKO Private Room",
    "requiredLevel": 46,
    "objectives": [
      "Finalize the operational briefing for boarding the 300-foot luxury HOWLER Megayacht offshore."
    ],
    "rewards": {
      "dalas": 500,
      "exp": 800
    },
    "nextQuest": "Board The Megayacht"
  },
  {
    "slug": "storyline-board-megayacht",
    "title": "Board The Megayacht",
    "chapter": "Chapter 42",
    "npc": "Marina Gangway Guard",
    "category": "Storyline",
    "location": "Honolulu Deepwater Marina",
    "requiredLevel": 48,
    "objectives": [
      "Present 3 forged crew identification badges to board the megayacht without raising general alarms."
    ],
    "rewards": {
      "dalas": 600,
      "exp": 900
    },
    "nextQuest": "Under Question"
  },
  {
    "slug": "storyline-under-question",
    "title": "Under Question",
    "chapter": "Chapter 43",
    "npc": "Megayacht Purser",
    "category": "Storyline",
    "location": "Megayacht Grand Atrium",
    "requiredLevel": 50,
    "objectives": [
      "Successfully answer verification protocols and present credentials twice without failing composure."
    ],
    "rewards": {
      "dalas": 600,
      "exp": 850
    },
    "nextQuest": "A Message in the Textbook"
  },
  {
    "slug": "storyline-message-textbook",
    "title": "A Message in the Textbook",
    "chapter": "Chapter 44",
    "npc": "Private Study Stash",
    "category": "Storyline",
    "location": "Upper Deck Study Room",
    "requiredLevel": 52,
    "objectives": [
      "Decipher the 3 Queen rock band lyrics annotated inside the geology reference textbook."
    ],
    "rewards": {
      "dalas": 700,
      "exp": 950
    },
    "nextQuest": "Too Late at the Office"
  },
  {
    "slug": "storyline-too-late-office",
    "title": "Too Late at the Office",
    "chapter": "Chapter 45",
    "npc": "Crime Scene Marker",
    "category": "Storyline",
    "location": "Owner's State Cabin",
    "requiredLevel": 54,
    "objectives": [
      "Investigate the bloodstained desk and discover the syndicate's betrayal, then retreat to IKO IKO."
    ],
    "rewards": {
      "dalas": 750,
      "exp": 1000
    },
    "nextQuest": "Return to IKO IKO"
  },
  {
    "slug": "storyline-return-iko-iko-2",
    "title": "Rendezvous at IKO IKO",
    "chapter": "Chapter 46",
    "npc": "Jodio Joestar",
    "category": "Storyline",
    "location": "IKO IKO Emergency Basement",
    "requiredLevel": 56,
    "objectives": [
      "Rendezvous with the team and prepare for counter-assault from syndicate enforcers."
    ],
    "rewards": {
      "dalas": 800,
      "exp": 1100
    },
    "nextQuest": "200 Balloons"
  },
  {
    "slug": "storyline-200-balloons-fight",
    "title": "Boss Encounter: Ningbo & Laem Chabang",
    "chapter": "Chapter 47",
    "npc": "Syndicate Hitmen",
    "category": "Storyline",
    "location": "IKO IKO Street Alley",
    "requiredLevel": 58,
    "objectives": [
      "Defeat Ningbo (200 Balloons) and Laem Chabang (Lyin' Eyes) simultaneously."
    ],
    "rewards": {
      "dalas": 1500,
      "exp": 2200,
      "items": [
        "Ningbo's Hat",
        "Laem Chabang's Holster"
      ]
    },
    "nextQuest": "Return to the Yacht"
  },
  {
    "slug": "storyline-return-to-yacht",
    "title": "Return to the Yacht",
    "chapter": "Chapter 48",
    "npc": "Acca Howler",
    "category": "Storyline",
    "location": "Megayacht Anchor Pier",
    "requiredLevel": 62,
    "objectives": [
      "Speedboat back to the megayacht to confront Acca Howler directly."
    ],
    "rewards": {
      "dalas": 900,
      "exp": 1300
    },
    "nextQuest": "The Deal Is Still Live"
  },
  {
    "slug": "storyline-deal-still-live",
    "title": "The Deal Is Still Live",
    "chapter": "Chapter 49",
    "npc": "Acca Howler",
    "category": "Storyline",
    "location": "Megayacht Helipad Deck",
    "requiredLevel": 65,
    "objectives": [
      "Pass Howler's 3-phase financial proof test and maintain the asset transfer contract."
    ],
    "rewards": {
      "dalas": 1200,
      "exp": 1600
    },
    "nextQuest": "Track Key West"
  },
  {
    "slug": "storyline-track-key-west",
    "title": "Track Key West",
    "chapter": "Chapter 50",
    "npc": "Gap Tracing Clue",
    "category": "Storyline",
    "location": "Lower Engine Gangway",
    "requiredLevel": 68,
    "objectives": [
      "Trace the spatial gap distortion left by syndicate assassin Key West."
    ],
    "rewards": {
      "dalas": 1000,
      "exp": 1500
    },
    "nextQuest": "Defeat Key West"
  },
  {
    "slug": "storyline-defeat-key-west",
    "title": "Climax: Defeat Key West (West End Girl)",
    "chapter": "Chapter 51",
    "npc": "Key West",
    "category": "Storyline",
    "location": "Engine Core Compartment",
    "requiredLevel": 70,
    "objectives": [
      "Overcome Key West's spatial voids and neutralize his gap teleportation ambush."
    ],
    "rewards": {
      "dalas": 2000,
      "exp": 3000,
      "items": [
        "Key West's Jacket",
        "1x Bizarre Arrow"
      ]
    },
    "nextQuest": "Howler on the Upper Deck"
  },
  {
    "slug": "storyline-howler-upper-deck",
    "title": "Howler on the Upper Deck",
    "chapter": "Chapter 52",
    "npc": "Acca Howler & Crew",
    "category": "Storyline",
    "location": "Megayacht Upper Observation Deck",
    "requiredLevel": 72,
    "objectives": [
      "Regroup with Jodio, Dragona, and Paco on the upper deck to execute final deed transfers."
    ],
    "rewards": {
      "dalas": 1500,
      "exp": 2500
    },
    "nextQuest": "The Last of the Lava Rock"
  },
  {
    "slug": "storyline-last-of-lava-rock",
    "title": "Grand Finale: The Last of the Lava Rock",
    "chapter": "Chapter 53",
    "npc": "Jodio Joestar",
    "category": "Storyline",
    "location": "Megayacht Escape Raft",
    "requiredLevel": 75,
    "objectives": [
      "Witness the federal arrest of the syndicate leadership.",
      "Recover the executed HOWLER land deeds.",
      "Board the high-speed escape raft and successfully evade harbor pursuit."
    ],
    "rewards": {
      "dalas": 5000,
      "exp": 10000,
      "items": [
        "Signed Passione Contract",
        "STAND OUT Badge",
        "3x Lucky Arrows"
      ]
    }
  },
  {
    "slug": "side-catch-the-rainbow",
    "title": "Catch The Rainbow",
    "npc": "Blackmore",
    "category": "Side Quest",
    "location": "McKinley High School Courtyard (Rain Only)",
    "prerequisites": "Sunny -> Rain Weather Event",
    "objectives": [
      "Meet Blackmore behind the high school building while rain is falling.",
      "Track down the leprechaun manifestation at the end of the rainbow.",
      "Capture the cauldron and deliver the rainbow essence before rainfall ends."
    ],
    "rewards": {
      "dalas": 1500,
      "exp": 3500,
      "items": [
        "1x Mysterious Arrow",
        "Blackmore's Jacket",
        "Blackmore's Pants"
      ]
    }
  },
  {
    "slug": "side-statue-of-sorrow",
    "title": "The Statue of Sorrow",
    "npc": "Old Lady & Angelo Rock",
    "category": "Side Quest",
    "location": "Behind IKO IKO Boutique (Fog Weather Only)",
    "prerequisites": "Fog Weather Event",
    "objectives": [
      "Speak to the mysterious Old Lady behind IKO IKO during dense fog.",
      "Interrogate the Angelo Rock landmark and follow the cracked ground fissures.",
      "Defeat the CEO of Fighting and guide Rolling Stones into the containment net."
    ],
    "rewards": {
      "dalas": 2000,
      "exp": 4500,
      "items": [
        "Hand Of Fate (or Slave Of Fate)",
        "2x Mysterious Arrows"
      ]
    }
  },
  {
    "slug": "side-museum-errands",
    "title": "Museum Errands: Historical Record",
    "npc": "Museum Receptionist",
    "category": "Side Quest",
    "location": "Honolulu Museum of History",
    "prerequisites": "Level 20+",
    "objectives": [
      "Speak with the Museum Receptionist and examine 4 historical exhibits.",
      "Retrieve public records from the Hawaii Land Registry Office.",
      "Obtain an authorized signature from Meryl Mei Qi, Big Chop, Lettuce Trader, or Jodio.",
      "Defeat the rogue Stand User ambushing the archives and return to the receptionist."
    ],
    "rewards": {
      "dalas": 1800,
      "exp": 4000,
      "items": [
        "Record Keeper's Monocle"
      ]
    }
  },
  {
    "slug": "side-bandit-problem",
    "title": "Bandit Problem",
    "npc": "Usagi Alohaoe",
    "category": "Side Quest",
    "location": "McKinley High School Cafeteria",
    "prerequisites": "Level 15+",
    "objectives": [
      "Meet Usagi Alohaoe behind the high school bleachers.",
      "Defeat 5 harassing street bandits lurking near the perimeter fence (0/5)."
    ],
    "rewards": {
      "dalas": 800,
      "exp": 2000,
      "items": [
        "1x Mysterious Arrow"
      ]
    }
  },
  {
    "slug": "side-bubble-practice",
    "title": "Bubble Practice",
    "npc": "Bobby",
    "category": "Side Quest",
    "location": "Waikiki Public Beach",
    "prerequisites": "Level 10+",
    "objectives": [
      "Acquire the Blow Bubble tool from Bobby.",
      "Generate 50 Hamon-infused soap bubbles (0/50).",
      "Complete 1 active bounty contract.",
      "Knock Bobby into the seawater and defeat Training Humu in combat."
    ],
    "rewards": {
      "dalas": 1200,
      "exp": 2800,
      "items": [
        "Hawaii Warrior's Jacket"
      ]
    }
  },
  {
    "slug": "side-space-oddity",
    "title": "Space Oddity: Jojosapiens Awakening",
    "npc": "Major Tom",
    "category": "Side Quest",
    "location": "Museum Rear Staircase",
    "prerequisites": "Must have awakened 45+ unique Stands in your index",
    "objectives": [
      "Discover Major Tom hidden beneath the grand staircase in the Honolulu Museum.",
      "Collect 16 academic field surveys scattered across Oahu island.",
      "Deliver the survey papers to Daniel J. D'Arby in the casino cellar.",
      "Craft 1 Bizarre Arrow at a master workbench and deliver it to Major Tom."
    ],
    "rewards": {
      "dalas": 5000,
      "exp": 15000,
      "items": [
        "Jojosapiens Stand Chip (Permanent Stand Unlock)"
      ]
    }
  },
  {
    "slug": "side-hermit-purple",
    "title": "Obtain Hermit Purple!",
    "npc": "Billy & Lisa Lisa",
    "category": "Side Quest",
    "location": "Queen's Medical Center Grounds",
    "prerequisites": "Mastered Jonathan Hamon & empty Stand slot",
    "objectives": [
      "Consult Billy on the hospital lawn while equipped with Jonathan Hamon.",
      "Channel Life-Giving Overdrive into botanical vegetation 15 times (0/15).",
      "Defeat the spectral manifestation of DIO."
    ],
    "rewards": {
      "dalas": 2500,
      "exp": 6000,
      "items": [
        "Hermit Purple Awakening"
      ]
    }
  },
  {
    "slug": "side-yoyo-what-the-hell-ma",
    "title": "Yo-Yo, What the hell, Ma?!",
    "npc": "Lettuce Trader",
    "category": "Side Quest",
    "location": "Market District (Sunny Weather Only)",
    "prerequisites": "Level 25+ & Sunny Weather",
    "objectives": [
      "Locate the Lettuce Trader and inspect 3 damaged sections of his stall.",
      "Crouch and follow the acidic saliva drool trail.",
      "Defend the trader from syndicate marauders.",
      "Search the hidden bush at the red X marker, defeat Yo-Yo Ma, and collect the Golden Key."
    ],
    "rewards": {
      "dalas": 1500,
      "exp": 3500,
      "items": [
        "Trader's Sticky Hat (First Clear)",
        "Coat of a Dedicated Bodyguard (Fifth Clear)",
        "Treasure of the Lettuce Dealer (Tenth Clear)"
      ]
    }
  },
  {
    "slug": "side-catalytic-converter",
    "title": "Catalytic Converter",
    "npc": "Lenny the Mechanic",
    "category": "Side Quest",
    "location": "Downtown Auto Repair Yard",
    "prerequisites": "Level 10+",
    "objectives": [
      "Speak to Lenny at the vehicle lift.",
      "Infiltrate the police impound lot and commandeer an impounded cruiser.",
      "Drive the vehicle back to Lenny's shop and park it securely on hydraulic lift #2."
    ],
    "rewards": {
      "dalas": 900,
      "exp": 2200,
      "items": [
        "10x Scrap Metal"
      ]
    }
  },
  {
    "slug": "side-clean-business",
    "title": "Clean Business",
    "npc": "Sketchy Man",
    "category": "Side Quest",
    "location": "Harbor Cargo Docks",
    "prerequisites": "Level 20+",
    "objectives": [
      "Meet the Sketchy Man near the harbor shipping containers.",
      "Deliver the heat-treated cargo package without triggering police scanners."
    ],
    "rewards": {
      "dalas": 1400,
      "exp": 3000,
      "items": [
        "This Coat is on Fire"
      ]
    }
  },
  {
    "slug": "side-big-business",
    "title": "Big Business",
    "npc": "Passione Underboss",
    "category": "Side Quest",
    "location": "Commercial Financial Tower",
    "prerequisites": "Level 35+",
    "objectives": [
      "Collect franchise protection dues from 3 commercial storefronts (0/3).",
      "Eliminate rival syndicate disruptors in the plaza."
    ],
    "rewards": {
      "dalas": 2500,
      "exp": 4500
    }
  },
  {
    "slug": "side-big-chops-garden",
    "title": "Big Chop's Daily Garden Harvest",
    "npc": "Big Chop",
    "category": "Daily Quest",
    "location": "Botanical Greenhouse",
    "prerequisites": "Gardening Unlocked",
    "objectives": [
      "Harvest 5 mature botanical crops in your personal or gang greenhouse (0/5).",
      "Apply high-grade fertilizer to 2 growing soil beds."
    ],
    "rewards": {
      "dalas": 1200,
      "exp": 2500,
      "items": [
        "1x Rokaka Seed",
        "1x Fresh Apple"
      ]
    }
  },
  {
    "slug": "sub-jonathan-hamon",
    "title": "Hamon Training: The Jonathan Path",
    "npc": "Lisa Lisa",
    "category": "Sub-Ability",
    "location": "Venice Training Grounds (Canal Side)",
    "prerequisites": "Level 20+ & Ripple Training Mask",
    "objectives": [
      "Purchase the Ripple Training Mask from Lisa Lisa for $5,000 Dalas.",
      "Practice rhythmic breathing through the mask 300 times (0/300).",
      "Perform 50 Sunlight Yellow Overdrive punches on training logs.",
      "Defeat Tarkus's Phantom in the ancient colosseum arena."
    ],
    "rewards": {
      "dalas": 2000,
      "exp": 8000,
      "items": [
        "Jonathan Hamon Fighting Style"
      ]
    }
  },
  {
    "slug": "sub-caesar-hamon",
    "title": "Hamon Mastery: The Caesar Path",
    "npc": "Caesar Anthonio Zeppeli",
    "category": "Sub-Ability",
    "location": "Roman Pillar Ruins",
    "prerequisites": "Level 30+ & Jonathan Hamon Mastered",
    "objectives": [
      "Launch 100 Bubble Cutter projectiles against mobile targets (0/100).",
      "Successfully trap 20 enemies inside Bubble Barriers (0/20).",
      "Meditate submerged in the Roman bathhouse without breaking posture for 60s."
    ],
    "rewards": {
      "dalas": 3000,
      "exp": 10000,
      "items": [
        "Caesar Hamon Fighting Style"
      ]
    }
  },
  {
    "slug": "sub-vampire-awakening",
    "title": "Vampirism: The Ancient Stone Mask",
    "npc": "Ancient Altar / DIO's Emissary",
    "category": "Sub-Ability",
    "location": "Graveyard Crypt B2",
    "prerequisites": "Ancient Stone Mask & Level 25+",
    "objectives": [
      "Acquire an Ancient Stone Mask (Train Shop 40 Tokens or 77 Rings 20% Hard drop).",
      "Collect 5 vials of human blood from elite thugs (0/5).",
      "Activate the Stone Mask at midnight at the ancient graveyard crypt altar."
    ],
    "rewards": {
      "dalas": 1500,
      "exp": 10000,
      "items": [
        "Vampire Fighting Style (Requires Cloak for daylight safety)"
      ]
    }
  },
  {
    "slug": "bounty-dispose-vampires",
    "title": "Bounty: Dispose of the Vampires",
    "npc": "Petyr / Phone App",
    "category": "Bounty",
    "location": "Cemetery District",
    "prerequisites": "Level 15+ (12-minute timer)",
    "objectives": [
      "Eliminate 8 rogue vampire minions within the 12-minute contract timer (0/8)."
    ],
    "rewards": {
      "dalas": 1500,
      "exp": 3000,
      "items": [
        "1x Mysterious Arrow",
        "Stone Mask (Rare Drop)"
      ]
    }
  },
  {
    "slug": "bounty-cheap-jewelry",
    "title": "Bounty: Cheap Jewelry, Expensive Problem",
    "npc": "Dragona Joestar",
    "category": "Bounty",
    "location": "Shopping Arcade",
    "prerequisites": "Level 20+ (4-death limit)",
    "objectives": [
      "Assist Dragona in using Smooth Operators to extract stolen necklace jewels from security safe boxes."
    ],
    "rewards": {
      "dalas": 1800,
      "exp": 3500,
      "items": [
        "Dragona's Jacket",
        "Dragona's Pants"
      ]
    }
  },
  {
    "slug": "bounty-save-chubby-baby",
    "title": "Bounty: Save Chubby Baby",
    "npc": "Petyr / Phone App",
    "category": "Bounty",
    "location": "Coral Reef Beach",
    "prerequisites": "Level 25+ (8-death limit)",
    "objectives": [
      "Rescue Chubby Baby from a swarm of hostile deep-sea sting jellyfish."
    ],
    "rewards": {
      "dalas": 2000,
      "exp": 4000,
      "items": [
        "1x Mysterious Arrow"
      ]
    }
  },
  {
    "slug": "bounty-trust-me-on-this-one",
    "title": "Bounty: Trust me on This One",
    "npc": "Hey Ya!",
    "category": "Bounty",
    "location": "Warehouse Rooftops",
    "prerequisites": "Open Contract (9:36 timer)",
    "objectives": [
      "Follow Hey Ya!'s intuitive gut prompts across rooftop vents to recover the missing currency briefcase."
    ],
    "rewards": {
      "dalas": 2200,
      "exp": 4200,
      "items": [
        "Usagi's Backpack",
        "Usagi's Pants"
      ]
    }
  },
  {
    "slug": "bounty-helper-friend",
    "title": "Bounty: Your Personal Helper Friend",
    "npc": "Hubert",
    "category": "Bounty",
    "location": "Skyscraper Construction Site",
    "prerequisites": "Level 20+ (8-death limit)",
    "objectives": [
      "Recover Hubert's shipping parcel and track Berity to the 15th-floor girder construction scaffolding."
    ],
    "rewards": {
      "dalas": 2400,
      "exp": 4500,
      "items": [
        "Jodio's Jacket",
        "Jodio's Pants"
      ]
    }
  },
  {
    "slug": "bounty-three-wishes",
    "title": "Bounty: Three Wishes",
    "npc": "Petyr / Phone App",
    "category": "Bounty",
    "location": "Bazaar Courtyard",
    "prerequisites": "Level 25+ (12-minute timer)",
    "objectives": [
      "Corner and defeat the rogue genie Stand user before all 3 wish charges dissipate."
    ],
    "rewards": {
      "dalas": 2500,
      "exp": 5000,
      "items": [
        "Rohan's Jacket",
        "Rohan's Pants",
        "1x Mysterious Arrow"
      ]
    }
  },
  {
    "slug": "bounty-small-change-big-problem",
    "title": "Bounty: Small Change, Big Problem",
    "npc": "Petyr / Phone App",
    "category": "Bounty",
    "location": "Central Botanical Park",
    "prerequisites": "Level 15+",
    "objectives": [
      "Chase 3 runaway Harvest units through the rose gardens and recover the stolen Dalas cash box."
    ],
    "rewards": {
      "dalas": 2000,
      "exp": 3800,
      "items": [
        "Shigechi's Jacket",
        "Shigechi's Pants"
      ]
    }
  },
  {
    "slug": "bounty-missing-frog",
    "title": "Bounty: Missing Frog",
    "npc": "Petyr / Phone App",
    "category": "Bounty",
    "location": "Rainforest Waterfall Basin",
    "prerequisites": "Level 25+ (9-minute timer, 4-death limit)",
    "objectives": [
      "Locate and safely capture the rare poisonous tree frog without sustaining paralyzing contact."
    ],
    "rewards": {
      "dalas": 2200,
      "exp": 4400,
      "items": [
        "1x Rokaka Seed"
      ]
    }
  },
  {
    "slug": "bounty-pacos-challenge",
    "title": "Bounty: Paco's Challenge",
    "npc": "Paco Laburante",
    "category": "Bounty",
    "location": "Muscle Beach Gym",
    "prerequisites": "Level 20+ (9-minute timer)",
    "objectives": [
      "Beat Paco in arm wrestling, then assist him in fending off 6 syndicate bouncers."
    ],
    "rewards": {
      "dalas": 2400,
      "exp": 4600,
      "items": [
        "Paco's Jacket",
        "Paco's Pants"
      ]
    }
  },
  {
    "slug": "bounty-rohans-drawing-contest",
    "title": "Bounty: Rohan's Drawing Contest",
    "npc": "Rohan Kishibe",
    "category": "Bounty",
    "location": "Rohan's Villa Front Courtyard",
    "prerequisites": "Level 25+ (9-minute timer)",
    "objectives": [
      "Meet Rohan outside his front doors and sketch an authentic Heaven's Door manuscript faster than him."
    ],
    "rewards": {
      "dalas": 3000,
      "exp": 6000,
      "items": [
        "Rohan's G-Pen",
        "Rohan's Earrings"
      ]
    }
  },
  {
    "slug": "bounty-usagis-karaoke-night",
    "title": "Bounty: Usagi's Karaoke Night",
    "npc": "Usagi Alohaoe",
    "category": "Bounty",
    "location": "Neon District Karaoke Bar",
    "prerequisites": "Open Contract (10-minute timer)",
    "objectives": [
      "Accompany Usagi to the private karaoke booth and hit the rhythm prompts to complete his song."
    ],
    "rewards": {
      "dalas": 2200,
      "exp": 4200,
      "items": [
        "Usagi's Backpack"
      ]
    }
  },
  {
    "slug": "bounty-four-iced-teas",
    "title": "Bounty: Four Iced Teas",
    "npc": "Petyr / Phone App",
    "category": "Bounty",
    "location": "Harbor Drink Stand",
    "prerequisites": "Open Contract (10-minute timer)",
    "objectives": [
      "Mix and drink 4 artisanal iced teas at the seaside kiosk within 10 minutes without passing out."
    ],
    "rewards": {
      "dalas": 1800,
      "exp": 3200,
      "items": [
        "1x Lucky Arrow"
      ]
    }
  },
  {
    "slug": "bounty-darbys-rematch",
    "title": "Bounty: D'Arby's Rematch",
    "npc": "Daniel J. D'Arby",
    "category": "Bounty",
    "location": "Casino VIP Poker Table",
    "prerequisites": "Level 30+ (10-minute timer)",
    "objectives": [
      "Outbluff and defeat Daniel J. D'Arby in a high-stakes Go Fish card duel."
    ],
    "rewards": {
      "dalas": 3500,
      "exp": 7500,
      "items": [
        "D'Arby's Jacket",
        "D'Arby's Pants",
        "Stand Storage Chip"
      ]
    }
  }
];

export const storylineQuests = quests.filter((q) => q.category === 'Storyline');
export const sideQuests = quests.filter((q) => q.category === 'Side Quest' || q.category === 'Daily Quest');
export const subAbilityQuests = quests.filter((q) => q.category === 'Sub-Ability');
export const bountyQuests = quests.filter((q) => q.category === 'Bounty');

export const questsBySlug = new Map(quests.map((q) => [q.slug, q]));
