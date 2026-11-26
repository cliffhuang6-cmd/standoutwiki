import type { Guide } from '../types';

export const guides: Guide[] = [
  {
    "slug": "beginner-guide",
    "title": "Stand Out Beginner Guide: Getting Started & First Stand",
    "category": "Starter",
    "description": "The definitive handbook for new players. Learn combat fundamentals, tutorial quests, getting your first Stand, and avoiding beginner traps.",
    "readingTime": "8 min read",
    "updatedDate": "2026-11-16",
    "tableOfContents": [
      {
        "id": "first-hour",
        "title": "The First 15 Minutes"
      },
      {
        "id": "first-stand",
        "title": "Awakening Your First Stand"
      },
      {
        "id": "combat-basics",
        "title": "Core Combat & Keybinds"
      },
      {
        "id": "phone-utility",
        "title": "Unlocking the Phone & Huber"
      },
      {
        "id": "leveling-path",
        "title": "Optimal Starter Leveling Route"
      }
    ],
    "sections": [
      {
        "id": "first-hour",
        "title": "The First 15 Minutes",
        "content": "When you first spawn into Roblox STAND OUT, you start as a Standless civilian in the Central Honolulu Plaza. Follow the glowing waypoint to speak with the Tutorial Instructor. Complete the fundamental combat training drills: perform light combos with LMB, guard with F, and dash with Q. Finishing this initial sequence awards you your first Mysterious Arrow and 500 Dalas to fund your early journey.",
        "steps": [
          "Talk to the Tutorial Instructor in the Central Plaza.",
          "Complete the 3 combat drills (LMB 4-hit combo, F guard, Q dash).",
          "Collect your completion reward: 1 Mysterious Arrow and 500 Dalas.",
          "Open your inventory with Backquote (`) to verify your items."
        ],
        "tips": [
          "Do not spend your starting 500 Dalas on food or cosmetics; save it for Huber taxi fares and subway passes.",
          "If you play on low-end hardware, disable shadows in Roblox settings to ensure stable 60 FPS parry timing."
        ]
      },
      {
        "id": "first-stand",
        "title": "Awakening Your First Stand",
        "content": "Equip the Mysterious Arrow to your hotbar and click to initiate the Stand awakening ritual. In STAND OUT, every arrow roll pulls from the standard drop pool: Common/Rare (82%), Epic (13.5%), Legendary (4%), Mythical (~0.50%), and Pinnacle (~0.50% tier chance). If you roll an early Rare like Yellow Temperance or Beach Boy, keep it! These Stands have exceptional early-game survivability and clear speed.",
        "tips": [
          "Never reset a Stand immediately if it has high farming utility (like Yellow Temperance or Harvest).",
          "Visit D'Arby's casino parlor downtown to purchase Stand Storage Chips before rolling arrows with high pity."
        ],
        "warning": "Consuming a standard Rokakaka fruit completely resets your Stand, skill points, and combat masteries. Never eat one while holding valuable chips."
      },
      {
        "id": "combat-basics",
        "title": "Core Combat & Keybinds",
        "content": "Combat in STAND OUT is high-tempo and precision-oriented. Light attacks chain into a 4-hit sequence that stuns opponents. The fourth hit or a dedicated Heavy Attack (R) breaks opponent guards if they are holding block. Perfect Blocking (tapping F precisely when an incoming hitbox connects) completely negates damage and opens an unblockable counterattack window.",
        "table": {
          "headers": [
            "Action",
            "PC Keybind",
            "Combat Utility",
            "Frame Property"
          ],
          "rows": [
            [
              "Light Combo",
              "LMB (x4)",
              "Primary hit-confirm & combo starter",
              "Stuns on 1st-3rd hits"
            ],
            [
              "Heavy Finisher",
              "R",
              "Shatters blocking opponents",
              "Guardbreak on block"
            ],
            [
              "Perfect Block",
              "F (Tap on hit)",
              "Negates damage & reflects stagger",
              "Parry frames (0.2s)"
            ],
            [
              "Pilot Mode",
              "Left Ctrl",
              "Remotely steers Stand away from user",
              "Leaves player vulnerable"
            ],
            [
              "Awakening Posing",
              "P",
              "Recharges EX/Awakening meter",
              "1% per second regeneration"
            ]
          ]
        }
      },
      {
        "id": "phone-utility",
        "title": "Unlocking the Phone & Huber",
        "content": "Do not traverse the expansive city on foot. Immediately take Storyline Quest 1 and proceed to Storyline Quest 2 given by NPC Meryl Mei Qi. Completing her short driving errand rewards you with the permanent Smartphone. The phone unlocks Huber taxi fast travel to instantly teleport to discovered districts, real-time GPS navigation, and the Gifts app used to redeem active promo codes.",
        "steps": [
          "Navigate to Downtown and locate Meryl Mei Qi near the parking lot.",
          "Accept Quest 2: Deliver the packaged goods across the district.",
          "Return to Meryl Mei Qi to claim your permanent Smartphone item.",
          "Press Tab or open your inventory to equip the phone and access Huber apps."
        ]
      },
      {
        "id": "leveling-path",
        "title": "Optimal Starter Leveling Route",
        "content": "For rapid progression from Level 1 to 20, strictly chain Storyline Quests 1 through 5. Avoid open-world PvP skirmishes until Level 30. Whenever you defeat story NPCs, pick up the loose Dalas and crafting scrap they drop. If you reach a level lock on the next storyline chapter, accept repeatable NPC bounties from Billy in the alleyway to bridge the experience gap.",
        "tips": [
          "Always group 3 to 4 thugs together before unleashing AOE barrages to maximize EXP per minute.",
          "Check active promo codes on our Codes page to redeem free Dalas and EXP boost tokens."
        ]
      }
    ]
  },
  {
    "slug": "controls",
    "title": "Stand Out Controls Guide: PC, Mobile & Console Keybinds",
    "category": "Combat & Moves",
    "description": "Complete keybind directory for Stand Out. Master PC keyboard controls (including X Universal Evasive), mobile touch UI, camera shiftlock, piloting, and Nov 24 console D-pad layouts.",
    "readingTime": "5 min read",
    "updatedDate": "2026-11-26",
    "tableOfContents": [
      {
        "id": "pc-keybinds",
        "title": "PC Keyboard & Mouse Keybinds"
      },
      {
        "id": "mobile-layout",
        "title": "Mobile Touch Controls & Aim-Lock"
      },
      {
        "id": "gamepad-layout",
        "title": "Gamepad & Console Controls (Xbox / PS)"
      },
      {
        "id": "advanced-tech",
        "title": "Advanced Mechanics: Pilot & Perfect Block"
      },
      {
        "id": "troubleshooting",
        "title": "Common Input Glitches & Fixes"
      }
    ],
    "sections": [
      {
        "id": "pc-keybinds",
        "title": "PC Keyboard & Mouse Keybinds",
        "content": "Roblox STAND OUT utilizes an extended keyboard layout allowing full access to basic combat, active Stand skills, awakening meters, and utility items. Enable Camera Shiftlock via Left Shift for responsive crosshair aim during ranged projectiles and barrage clashes.",
        "table": {
          "headers": [
            "Keybind",
            "Function",
            "Context / Notes"
          ],
          "rows": [
            [
              "LMB",
              "Light Attack / Combo",
              "Chains into 4-hit combo"
            ],
            [
              "RMB / R",
              "Heavy Attack / Special",
              "Guardbreak or signature heavy strike"
            ],
            [
              "E, T, Y, F, G, H",
              "Stand Ability Hotkeys",
              "Fires assigned Stand moveset skills"
            ],
            [
              "Q",
              "Dash / Evasive Roll",
              "Invulnerability frames on startup"
            ],
            [
              "X",
              "Universal Evasive",
              "Breaks hitstun/ragdoll for 1 EX Bar (30s CD, 0 DMG)"
            ],
            [
              "F",
              "Block / Guard",
              "Tap on connection for Perfect Block parry"
            ],
            [
              "Left Ctrl",
              "Pilot Mode Toggle",
              "Steer Stand remotely; drains stamina"
            ],
            [
              "P",
              "Awakening Pose",
              "Regenerates EX gauge in safe zones"
            ],
            [
              "Left Shift",
              "Shiftlock Camera",
              "Locks crosshair for precision aim"
            ],
            [
              "Tab / `",
              "Inventory / Phone",
              "Opens item satchel and smartphone apps"
            ],
            [
              "Space (x2)",
              "Double Jump / Stand Jump",
              "Requires Stand jump mastery"
            ]
          ]
        }
      },
      {
        "id": "mobile-layout",
        "title": "Mobile Touch Controls & Aim-Lock",
        "content": "The mobile interface features a circular virtual joystick on the left screen and a dynamic radial action pad on the right. Tapping the target icon enables Target Aim-Lock. Following the Nov 15 update, mobile players can enable 'Block Input: Toggle' in settings (allowing one tap to block and another to unblock) and smoothly swipe the camera while pressing light or heavy attacks.",
        "tips": [
          "Increase touch button transparency in the in-game settings to maximize peripheral combat visibility.",
          "Use the dedicated Lock-On button to prevent camera drift during high-speed mobile PvP battles."
        ]
      },
      {
        "id": "gamepad-layout",
        "title": "Gamepad & Console Controls (Xbox / PS)",
        "content": "STAND OUT natively supports game controllers across Xbox, PlayStation, and PC. The November 24, 2026 patch standardized console D-pad quick bindings alongside triggers and face buttons (and console players can edit keyboard/mouse binds in settings).",
        "table": {
          "headers": [
            "Button (Xbox / PS)",
            "Combat Action",
            "Details"
          ],
          "rows": [
            [
              "RT / R2",
              "Light Attack",
              "Primary basic combo sequence"
            ],
            [
              "RB / R1",
              "Heavy Finisher",
              "Guardbreak strike against holding blocks"
            ],
            [
              "LT / L2",
              "Block / Guard",
              "Tap on incoming hitbox for Perfect Block parry"
            ],
            [
              "LB / L1",
              "Dash",
              "1.2s standardized dash cooldown"
            ],
            [
              "D-Pad Left",
              "Universal Evasive",
              "Breaks hitstun/ragdoll (1 EX Bar, 30s CD); Hold RT + D-Pad Left toggles cards"
            ],
            [
              "D-Pad Right",
              "Toolbar Item",
              "Tap to use selected toolbar item; hold & release to cycle next slot"
            ],
            [
              "Y, B, X / △, ○, □",
              "Stand Skills",
              "Assigned special moves and EX skills"
            ],
            [
              "R3 (Right Stick)",
              "Lock-On Toggle",
              "Focus camera target on nearest opponent"
            ]
          ]
        }
      },
      {
        "id": "advanced-tech",
        "title": "Advanced Mechanics: Pilot & Perfect Block",
        "content": "Piloted Stands (such as The World, Under World, and Highway Star) allow players to control the Stand entity up to 150 studs away from their physical avatar. While piloting, your physical avatar is completely immobile and undefended. Use pilot mode from behind high rooftops or alley corners to scout and execute ambush attacks.",
        "warning": "Taking damage while piloting immediately snaps your camera back to your character and puts pilot mode on a 15-second penalty cooldown."
      },
      {
        "id": "troubleshooting",
        "title": "Common Input Glitches & Fixes",
        "content": "If your character becomes stuck in a permanent blocking animation or skill hotkeys fail to register after cutscenes, press the Esc key twice to reset camera focus, or unequip and re-equip your Stand with the Z key. If Shiftlock becomes desynchronized, toggle Roblox standard Shiftlock in settings off and on.",
        "tips": [
          "Binding dash to a side mouse button significantly improves defensive reaction times against surprise Time Stops."
        ]
      }
    ]
  },
  {
    "slug": "level-up-fast",
    "title": "How to Level Up Fast in Stand Out: 1 to 75 EXP Route",
    "category": "Progression",
    "description": "Fastest verified leveling methods in Stand Out. Optimize storyline progression, mob farming loops, daily bounties, and EXP booster usage.",
    "readingTime": "7 min read",
    "updatedDate": "2026-11-16",
    "tableOfContents": [
      {
        "id": "level-cap",
        "title": "Level Cap & Stat Point Breakdown"
      },
      {
        "id": "early-levels",
        "title": "Levels 1 - 15: Storyline Rush"
      },
      {
        "id": "mid-levels",
        "title": "Levels 16 - 35: Mob Loops & Bounties"
      },
      {
        "id": "endgame-grind",
        "title": "Levels 36 - 50: SWAT Captain & Train Raids"
      },
      {
        "id": "boosters",
        "title": "EXP Boosters & Server Multipliers"
      }
    ],
    "sections": [
      {
        "id": "level-cap",
        "title": "Level Cap & Stat Point Breakdown",
        "content": "Per the updated official Trello Stats card, the current live maximum level in STAND OUT is Level 75 (awarding 3 Stat Points per level for 225 total Stat Points, with a 166 single-stat cap verified in the Nov 16 combat update; legacy cards previously listed Level 50 / 150 points). Health scales maximum HP pool (up to 300 HP at 166 Health) and natural regeneration; Damage increases baseline M1 light combos and physical heavy strikes (up to 2.3x at 166 Strength); Ability boosts cooldown recovery speed, signature skill scaling, and Time Stop duration (doubled at 100 Ability).",
        "table": {
          "headers": [
            "Level Range",
            "Primary Activity",
            "Average EXP / Hour",
            "Milestone Unlocks"
          ],
          "rows": [
            [
              "Levels 1 - 15",
              "Tutorial & Story Quests 1 - 4",
              "12,000 EXP/hr",
              "Smartphone, Huber Taxi, First Stand"
            ],
            [
              "Levels 16 - 30",
              "Story Quests 5 - 8 & Billy Bounties",
              "28,000 EXP/hr",
              "Sub-Ability Trial (Hamon / Vampire)"
            ],
            [
              "Levels 31 - 40",
              "Downtown Thug Mob Loops",
              "52,000 EXP/hr",
              "Tier 2 Accessories & Crafting Bench"
            ],
            [
              "Levels 41 - 55",
              "Passione Train Raid & Highway Star",
              "95,000 EXP/hr",
              "Stand Evolution & Tier 3 Gear"
            ],
            [
              "Levels 56 - 75",
              "77 Rings Raid & DIO Shrine Boss",
              "145,000 EXP/hr",
              "Level 75 Cap & 166 Stat Cap Builds"
            ]
          ]
        }
      },
      {
        "id": "early-levels",
        "title": "Levels 1 - 15: Storyline Rush",
        "content": "Do not grind random street thugs in early levels. The storyline quests provide 5x more EXP per objective than manual mob kills. Follow the yellow marker from Meryl Mei Qi to Billy and Guido Mista. Complete every dialog objective immediately to jump 2 to 3 levels per quest completion.",
        "tips": [
          "Equip gear pieces with bonus EXP attributes as soon as they drop from story bosses."
        ]
      },
      {
        "id": "mid-levels",
        "title": "Levels 16 - 35: Mob Loops & Bounties",
        "content": "Once you hit Level 16, head to the Industrial District. Gather the 5 Passione Grunts into a tight cluster around the shipping containers. Use wide-radius AOE attacks (like Magician's Red Crossfire Hurricane or Yellow Temperance Ravenous Flurry) to clear all 5 simultaneously. Combine this rotation with Billy's repeatable bounty quests for double rewards.",
        "steps": [
          "Accept the Passione Grunt bounty from Billy via your Smartphone.",
          "Lure all 5 grunts using a ranged projectile or light attack.",
          "Execute your AOE barrage and heavy finisher to clear the pack.",
          "Turn in the bounty remotely from your phone and repeat."
        ]
      },
      {
        "id": "endgame-grind",
        "title": "Levels 36 - 50: SWAT Captain & Train Raids",
        "content": "The fastest endgame route is farming the SWAT Captain world boss in Downtown (spawns every 30 minutes) and joining Passione Train Raid parties. Defeating the SWAT Captain rewards 18,500 EXP and high-tier drops, while a successful 3-phase train raid grants over 45,000 EXP per run.",
        "warning": "Entering the Passione Train Raid below Level 35 will result in severe incoming damage penalties. Ensure you have at least 45 Health points allocated."
      },
      {
        "id": "boosters",
        "title": "EXP Boosters & Server Multipliers",
        "content": "EXP Boosters stack multiplicatively with weekend server events. A 2x EXP token combined with a 1.5x community weekend event yields 3x total experience gain. Save your promo code boosters specifically for the Level 35 to 50 final stretch to minimize grinding time.",
        "tips": [
          "Joining a recognized Gang provides an additional standing 10% guild EXP buff on all mob eliminations."
        ]
      }
    ]
  },
  {
    "slug": "farm-dalas",
    "title": "Stand Out Dalas Farming Guide: Fast Money & Produce Routes",
    "category": "Economy",
    "description": "Master the Dalas economy in Stand Out. Compare hourly farming rates across gardening crates, Shigechi Harvest bonuses, casino chips, and delivery routes.",
    "readingTime": "6 min read",
    "updatedDate": "2026-11-16",
    "tableOfContents": [
      {
        "id": "lettuce-trading",
        "title": "Lettuce Box Farming & Produce Stalls"
      },
      {
        "id": "gardening-yields",
        "title": "Greenhouse Crop Yields & Delivery Routes"
      },
      {
        "id": "shigechi-bonus",
        "title": "Shigechi Harvest Synergy & Dalas Scaling"
      },
      {
        "id": "darby-chips",
        "title": "D'Arby Casino Chips & Secondary Income"
      },
      {
        "id": "hourly-comparison",
        "title": "Hourly Earning Rates Breakdown"
      }
    ],
    "sections": [
      {
        "id": "lettuce-trading",
        "title": "Lettuce Box Farming & Produce Stalls",
        "content": "Agricultural trading is the most consistent and reliable money-maker in STAND OUT. Players can purchase Lettuce Seeds from the Market Florist for 50 Dalas each. Lettuce has the fastest growth cycle in the game (only 8 minutes). Harvesting mature lettuce heads and packaging them into Produce Delivery Crates yields between $350 and $420 Dalas per box when sold at the Beachside Harbor export stalls.",
        "steps": [
          "Purchase 10 Lettuce Seeds and 1 Dirt Bag from the Market Florist.",
          "Plant seeds in your personal plot or Gang Base Greenhouse.",
          "Water crops every 3 minutes using Ice Water buckets.",
          "Package harvested crops into wooden crates at the packaging station.",
          "Deliver crates to the Harbor Merchant for instant cash payout."
        ]
      },
      {
        "id": "gardening-yields",
        "title": "Greenhouse Crop Yields & Delivery Routes",
        "content": "Upgrading from solo plot farming to a Gang Greenhouse provides a massive 3x growth acceleration modifier. High-tier crops like Apples (18m base) and Tomatoes (12m base) yield higher raw Dalas, but Lettuce remains optimal for active farming due to near-zero downtime. Utilizing a vehicle like the Hatchback allows transporting up to 6 delivery crates simultaneously.",
        "tips": [
          "Never transport crates on foot across district borders; drive a car or call Huber cargo dispatch to protect goods from highway robbers.",
          "Applying Mysterious Fertilizer reduces crop growth cycles by an additional 25%."
        ]
      },
      {
        "id": "shigechi-bonus",
        "title": "Shigechi Harvest Synergy & Dalas Scaling",
        "content": "The Stand Harvest (wielded canonically by Shigekiyo Yangu) possesses unique passive economy abilities. Harvest's passive \"Scrap Collection\" automatically gathers loose coins, dropped soda cans, and cash envelopes across a 150-stud radius. Furthermore, selling items while Harvest is active awards a permanent 20% trade premium.",
        "table": {
          "headers": [
            "Stand Equipped",
            "Passive Bonus",
            "Crate Payout",
            "Effective Hourly Income"
          ],
          "rows": [
            [
              "Standard Stand",
              "None",
              "$380 / crate",
              "$18,500 / hr"
            ],
            [
              "Harvest Active",
              "+20% Merchant Bonus",
              "$456 / crate",
              "$27,800 / hr"
            ],
            [
              "Harvest + Gang Greenhouse",
              "+20% & 3x Growth Speed",
              "$456 / crate",
              "$42,500 / hr"
            ]
          ]
        }
      },
      {
        "id": "darby-chips",
        "title": "D'Arby Casino Chips & Secondary Income",
        "content": "Daniel J. D'Arby runs the underground parlor in the Downtown entertainment district. Players can wager Dalas in mini-games like Poker and Coin Flip, or exchange high-value casino chips earned from bounty targets. While gambling carries inherent variance, trading Soul Chips provides guaranteed cashouts of $2,500 per chip.",
        "warning": "Do not wager more than 20% of your liquid Dalas balance on casino games. Loss streaks can leave you unable to pay taxi fares or purchase necessary arrows."
      },
      {
        "id": "hourly-comparison",
        "title": "Hourly Earning Rates Breakdown",
        "content": "Comparing the four primary money-making methods in STAND OUT: Greenhouse Lettuce Farming ($42k/hr) ranks as the overall king of active economy, followed by SWAT Captain Boss loops ($31k/hr in loot and cash), repeatable Thug Bounties ($19k/hr), and solo questing ($12k/hr). Combine greenhouse cycles during boss cooldown windows for maximum profit.",
        "tips": [
          "Deposit excess Dalas into the Central Bank ATM to protect liquid cash from death penalty losses during open-world PvP."
        ]
      }
    ]
  },
  {
    "slug": "lucky-arrows",
    "title": "Stand Out Lucky Arrows Guide: Obtainment, Rates & Pity Math",
    "category": "Starter",
    "description": "Everything you need to know about Lucky Arrows in Stand Out. Discover crafting table recipes, 1.5% Pinnacle drop rates, world spawns, and pity mechanics.",
    "readingTime": "6 min read",
    "updatedDate": "2026-11-16",
    "tableOfContents": [
      {
        "id": "lucky-rates",
        "title": "Drop Probabilities & 1.5% Pinnacle Math"
      },
      {
        "id": "crafting-recipe",
        "title": "Crafting Bench Materials & Recipes"
      },
      {
        "id": "map-spawns",
        "title": "Fixed World Spawn Coordinates & Timers"
      },
      {
        "id": "pity-system",
        "title": "Arrow Pity Counter & Guaranteed Rarity"
      },
      {
        "id": "when-to-use",
        "title": "When to Consume Your First Lucky Arrow"
      }
    ],
    "sections": [
      {
        "id": "lucky-rates",
        "title": "Drop Probabilities & 1.5% Pinnacle Math",
        "content": "The Lucky Arrow represents the primary bridge between standard arrow grinding and high-rarity Stand acquisition. Unlike standard Mysterious Arrows which feature a baseline ~0.50% Pinnacle tier probability, Lucky Arrows elevate Pinnacle Stand chances to an impressive 1.5%—a 3x statistical improvement. Furthermore, Common and low Rare tier outcomes are drastically suppressed.",
        "table": {
          "headers": [
            "Stand Rarity",
            "Mysterious Arrow Chance",
            "Lucky Arrow Chance",
            "Statistical Difference"
          ],
          "rows": [
            [
              "Pinnacle (SP, TW, KC)",
              "~0.50%",
              "1.50%",
              "+200% Increase (3x)"
            ],
            [
              "Mythical (November Rain, etc.)",
              "0.43%",
              "4.50%",
              "+946% Increase (10.5x)"
            ],
            [
              "Legendary (MR, SC, etc.)",
              "4.00%",
              "22.00%",
              "+450% Increase (5.5x)"
            ],
            [
              "Epic (Kraft Work, etc.)",
              "13.50%",
              "42.00%",
              "+211% Increase (3.1x)"
            ],
            [
              "Rare / Common Pool",
              "82.00%",
              "30.00%",
              "-63.4% Reduction"
            ]
          ]
        }
      },
      {
        "id": "crafting-recipe",
        "title": "Crafting Bench Materials & Recipes",
        "content": "Players do not need to rely solely on world RNG to obtain Lucky Arrows. Any Advanced Crafting Bench (located in Downtown and the Beach Warehouse) can assemble a Lucky Arrow using: 1 Mysterious Arrow, 10 High-Grade Scrap Metal, and 3 Gold Ingots. Scrap drops from robotic mobs and vehicle wreckage, while Gold Ingots are mined or awarded from raid chests.",
        "steps": [
          "Collect 1 standard Mysterious Arrow from story quests or map drops.",
          "Farm 10 Scrap Metal by destroying scrap cars in the Industrial Yard.",
          "Acquire 3 Gold Ingots from Passione Train Raid chests or mineral nodes.",
          "Approach the Advanced Crafting Bench and craft the Lucky Arrow (takes 30s)."
        ]
      },
      {
        "id": "map-spawns",
        "title": "Fixed World Spawn Coordinates & Timers",
        "content": "Lucky Arrows have a natural map spawn cycle of once every 90 minutes across four dedicated world locations: the Colosseum upper arches, the Park fountain hidden recess, the Sewer maintenance walkway, and the Rooftop air duct behind the Police Station. Spawns announce a subtle golden ambient chime across the server.",
        "tips": [
          "Use a high-mobility Stand like Walking Heart or Hermit Purple to reach rooftop spawn points before other players arrive."
        ]
      },
      {
        "id": "pity-system",
        "title": "Arrow Pity Counter & Guaranteed Rarity",
        "content": "Every non-Pinnacle arrow consumed increases your internal server Pity Counter by +0.02% for standard arrows and +0.15% for Lucky Arrows. Once your pity reaches 100%, the next arrow consumed guarantees a Pinnacle tier Stand (Star Platinum, The World, or King Crimson). Pity resets to zero upon rolling any Pinnacle Stand.",
        "warning": "Pity counters are bound to your player account, but eating an unmutated Rokakaka fruit does NOT wipe your arrow pity counter. You can safely reset low-tier Stands without losing built pity."
      },
      {
        "id": "when-to-use",
        "title": "When to Consume Your First Lucky Arrow",
        "content": "Never consume a Lucky Arrow when you do not possess an empty Stand Storage Slot. If you roll an exceptional Legendary like Magician's Red or Silver Chariot while aiming for a Pinnacle, you will want the option to store it at D'Arby's rather than being forced to discard it.",
        "tips": [
          "Stack a Part-specific Focus Item (like Part 3 Arrow Tip) with your Lucky Arrow to guarantee that any high-rarity pull matches your target JoJo part."
        ]
      }
    ]
  },
  {
    "slug": "bizarre-arrows",
    "title": "Stand Out Bizarre Arrows: 4.4% Pinnacle Chance & Raid Drops",
    "category": "Endgame & Raids",
    "description": "Complete guide to Bizarre Arrows in Stand Out. Learn how to achieve a 4.4% Pinnacle rate, farm Passione Train Raids, and execute optimal focus rolling.",
    "readingTime": "5 min read",
    "updatedDate": "2026-11-16",
    "tableOfContents": [
      {
        "id": "bizarre-rates",
        "title": "4.4% Pinnacle Rate & Rare Pool Elimination"
      },
      {
        "id": "raid-obtainment",
        "title": "Passione Train Raid Drop Conditions"
      },
      {
        "id": "crafting-formula",
        "title": "High-Tier Crafting Bench Blueprint"
      },
      {
        "id": "focus-rolling",
        "title": "Stacking Focus Items with Bizarre Arrows"
      },
      {
        "id": "cost-efficiency",
        "title": "Cost vs Probability Comparison"
      }
    ],
    "sections": [
      {
        "id": "bizarre-rates",
        "title": "4.4% Pinnacle Rate & Rare Pool Elimination",
        "content": "The Bizarre Arrow is the premier summon artifact in STAND OUT. Offering an unprecedented 4.4% base Pinnacle rate (over 62 times higher than a standard Mysterious Arrow), its true power lies in its total elimination of the Common and Rare tiers. Every single roll is guaranteed to result in an Epic, Legendary, Mythical, or Pinnacle tier Stand.",
        "table": {
          "headers": [
            "Rarity Tier",
            "Bizarre Arrow Rate",
            "Guaranteed Quality",
            "Pool Comparison"
          ],
          "rows": [
            [
              "Pinnacle",
              "4.40%",
              "Star Platinum, The World, King Crimson",
              "Highest in the game"
            ],
            [
              "Mythical",
              "12.60%",
              "November Rain, Highway Star, Mandom",
              "3x Lucky Arrow rate"
            ],
            [
              "Legendary",
              "45.00%",
              "Silver Chariot, Magician's Red, etc.",
              "Near 1 in 2 probability"
            ],
            [
              "Epic",
              "38.00%",
              "Kraft Work, Notorious B.I.G, etc.",
              "Baseline floor result"
            ],
            [
              "Common / Rare",
              "0.00%",
              "Completely Excluded",
              "Zero trash roll risk"
            ]
          ]
        }
      },
      {
        "id": "raid-obtainment",
        "title": "Passione Train Raid Drop Conditions",
        "content": "Bizarre Arrows cannot be purchased from standard NPC stores. Their primary acquisition source is completing the Passione Train Raid on Hard or Nightmare difficulty. The final reward chest awards a guaranteed Bizarre Arrow to the party MVP (highest damage contribution) and has a 25% drop rate for all surviving squad members.",
        "steps": [
          "Form a coordinated 4-player party (1 Tank, 2 DPS, 1 Support).",
          "Queue for Passione Train Raid: Nightmare difficulty at the Train Station.",
          "Successfully clear all 3 train car defense phases and defeat the Boss.",
          "Open the Golden Vault Chest in the conductor cabin."
        ]
      },
      {
        "id": "crafting-formula",
        "title": "High-Tier Crafting Bench Blueprint",
        "content": "Players who master the crafting profession can forge a Bizarre Arrow at the Master Forge in the Industrial District. The blueprint requires: 3 Lucky Arrows, 1 Refined Meteorite Shard, and 50,000 Dalas. Meteorite Shards drop exclusively from world meteor impact events.",
        "warning": "Forging at the Master Forge has a 10% critical failure chance without the Blacksmith Apprentice gang perk. Ensure your guild active buffs are running."
      },
      {
        "id": "focus-rolling",
        "title": "Stacking Focus Items with Bizarre Arrows",
        "content": "Combining a Bizarre Arrow with a Part 3 or Part 5 Focus Artifact guarantees that the 4.4% Pinnacle pull can ONLY produce the specific Pinnacle Stand of that era. For example, using a Part 3 Focus Artifact with a Bizarre Arrow isolates the Pinnacle outcome to Star Platinum or The World, preventing King Crimson from diluting your target.",
        "tips": [
          "Always use Bizarre Arrows inside private server safe zones to prevent open-world gankers from interrupting the 6-second summon animation."
        ]
      },
      {
        "id": "cost-efficiency",
        "title": "Cost vs Probability Comparison",
        "content": "From an economic standpoint, rolling 1 Bizarre Arrow ($50k + 3 Lucky Arrows) yields an expected Pinnacle rate equivalent to burning over 62 standard Mysterious Arrows. Factoring in the total exclusion of trash rolls, Bizarre Arrows represent the most time-efficient method for serious competitive PvP players.",
        "tips": [
          "Save your Bizarre Arrows for newly released Stand update patches when new Mythical and Pinnacle Stands are introduced to the banner."
        ]
      }
    ]
  },
  {
    "slug": "star-platinum",
    "title": "Star Platinum Stand Guide: Combos, Timestop & Rage Tech",
    "category": "Combat & Moves",
    "description": "Master Jotaro's Star Platinum in Stand Out. In-depth combo breakdown, Star Finger hit-confirms, Rage meter mechanics, and Time Stop damage caps.",
    "readingTime": "7 min read",
    "updatedDate": "2026-11-16",
    "tableOfContents": [
      {
        "id": "sp-overview",
        "title": "Star Platinum Role & Strengths"
      },
      {
        "id": "combo-routes",
        "title": "Optimal M1, Star Finger & Heavy Chains"
      },
      {
        "id": "rage-mechanic",
        "title": "Building & Expending the Rage Gauge"
      },
      {
        "id": "timestop-rules",
        "title": "Time Stop Activation, Damage Cap & Cooldown"
      },
      {
        "id": "sp-builds",
        "title": "Stat Allocation (Damage vs Ability Points)"
      }
    ],
    "sections": [
      {
        "id": "sp-overview",
        "title": "Star Platinum Role & Strengths",
        "content": "Star Platinum represents the gold standard of offensive close-range Stands in STAND OUT. Possessing superior baseline M1 light attack speed, heavy guardbreak power, mid-range projectile disruption via Star Finger, and game-deciding Time Stop capabilities, Jotaro's Stand dominates both 1v1 Ranked Duels and pass-through Raid burst rotations.",
        "tips": [
          "Star Platinum has the shortest startup recovery frames on standard light attacks, allowing you to win M1 trades against 90% of the roster."
        ]
      },
      {
        "id": "combo-routes",
        "title": "Optimal M1, Star Finger & Heavy Chains",
        "content": "Star Platinum's bread-and-butter combo relies on utilizing Star Finger (35s cooldown) as an unblockable combo extender. Chain 3 light attacks, cancel into Star Finger to stagger the enemy, dash forward, execute your full Ora Barrage (23s cooldown), and finish with an RMB Heavy strike to send opponents into wall-splat ragdoll.",
        "table": {
          "headers": [
            "Combo Sequence",
            "Input Keys",
            "Stun Window",
            "Damage Output"
          ],
          "rows": [
            [
              "Starter Hit-Confirm",
              "LMB -> LMB -> LMB",
              "0.8s Stun",
              "36 Base DMG"
            ],
            [
              "Mid-Combo Extender",
              "T (Star Finger)",
              "1.4s Stagger",
              "28 Base DMG + Extends"
            ],
            [
              "Sustained Barrage",
              "E (Ora Barrage)",
              "2.2s Lockout",
              "65 Multi-hit DMG"
            ],
            [
              "Guardbreak Finisher",
              "R (Heavy Slam)",
              "Wall Splat",
              "34 Guardbreak DMG"
            ]
          ]
        }
      },
      {
        "id": "rage-mechanic",
        "title": "Building & Expending the Rage Gauge",
        "content": "Taking sustained damage and landing heavy strikes fills Star Platinum's red Rage Meter. At 100% capacity, holding your Heavy Finisher unlocks the devastating Rage Finish, dealing 45 true damage that ignores physical armor and temporarily blinds the opponent's screen.",
        "warning": "The Rage Meter slowly decays after 8 seconds out of combat. Maintain aggression against blocking targets to preserve your full gauge."
      },
      {
        "id": "timestop-rules",
        "title": "Time Stop Activation, Damage Cap & Cooldown",
        "content": "Star Platinum awakens Time Stop (45s cooldown) upon reaching Level 50. Activating Time Stop freezes all entities, projectiles, and environmental timers within a 120-stud sphere for 4.5 seconds. STAND OUT implements a strict 50% max HP damage cap during frozen time to prevent one-shot kills, requiring players to set up positional traps rather than spamming raw attacks.",
        "steps": [
          "Position within 20 studs of your target.",
          "Press the Time Stop hotkey (H) to initiate the temporal freeze.",
          "Execute your combo up to the damage cap indicator.",
          "Position directly behind the target and queue a heavy finisher for the exact millisecond time resumes."
        ]
      },
      {
        "id": "sp-builds",
        "title": "Stat Allocation (Damage vs Ability Points)",
        "content": "For competitive PvP, allocate 80 points into Health, 85 points into Damage, and 60 points into Ability. The 60 Ability threshold reduces Star Finger and Barrage cooldowns significantly while maximizing Time Stop duration. Pair with Hamon (Jonathan Path) for enhanced physical strike multipliers.",
        "tips": [
          "Equip Jotaro's Trench Coat to gain an additional +10% Barrage damage and +5% sprint speed."
        ]
      }
    ]
  },
  {
    "slug": "the-world",
    "title": "The World Stand Guide: DIO Combos, Knife Volleys & Road Roller",
    "category": "Combat & Moves",
    "description": "Dominate with DIO's The World in Stand Out. Master knife throw trajectories, Road Roller guardbreaks, Muda barrage pressure, and vampire synergies.",
    "readingTime": "7 min read",
    "updatedDate": "2026-11-16",
    "tableOfContents": [
      {
        "id": "tw-overview",
        "title": "The World Combative Profile & Range"
      },
      {
        "id": "knife-volleys",
        "title": "Knife Throw Positioning & Trajectory"
      },
      {
        "id": "road-roller",
        "title": "Road Roller Landing Frames & Guardbreak"
      },
      {
        "id": "muda-barrage",
        "title": "Muda Barrage Pressure & Counter-Parry"
      },
      {
        "id": "dio-gear",
        "title": "Synergizing with DIO's Jacket & Boots"
      }
    ],
    "sections": [
      {
        "id": "tw-overview",
        "title": "The World Combative Profile & Range",
        "content": "The World is DIO's signature Close-to-Mid-Range offensive juggernaut. Mirroring Star Platinum in raw physical power, The World trades Star Finger's precision stun for devastating ranged Knife Volleys, aerial Stand Jump mobility, and the iconic Road Roller area-of-effect finisher.",
        "tips": [
          "The World possesses higher base sprint velocity and jump height than Star Platinum, excelling at aggressive dive-bomb engagements."
        ]
      },
      {
        "id": "knife-volleys",
        "title": "Knife Throw Positioning & Trajectory",
        "content": "Pressing Knife Throw (9s cooldown) fires a fan of 5 throwing daggers towards the player's crosshair. When activated during Time Stop, knives suspend themselves in midair around the target, homing inward simultaneously the instant time resumes to deal massive burst damage.",
        "table": {
          "headers": [
            "Skill Variant",
            "Cooldown",
            "Damage Output",
            "Special Properties"
          ],
          "rows": [
            [
              "Normal Knife Throw",
              "9s",
              "5x 6 DMG (30 total)",
              "Fast ranged poke & combo interrupt"
            ],
            [
              "Timestop Knife Volley",
              "Inside TS",
              "5x 10 DMG (50 total)",
              "Suspends in time, hits on resume"
            ],
            [
              "Muda Barrage",
              "23s",
              "68 Multi-hit DMG",
              "Heavy shield drain & clash superiority"
            ],
            [
              "Road Roller (3 Bars)",
              "40s",
              "85 Burst AOE DMG",
              "Guaranteed guardbreak on direct hit"
            ]
          ]
        }
      },
      {
        "id": "road-roller",
        "title": "Road Roller Landing Frames & Guardbreak",
        "content": "Road Roller is The World's 3-Bar EX ultimate. DIO leaps into the sky, summons a heavy industrial road roller, and slams it onto the ground with repeated punches. This move completely bypasses normal blocking shields, forcing opponents to use their Q-dash iframes at the precise moment of impact.",
        "warning": "Whiffing a Road Roller leaves DIO in 1.2 seconds of ground recovery frames, during which enemies can punish with unblockable heavy attacks."
      },
      {
        "id": "muda-barrage",
        "title": "Muda Barrage Pressure & Counter-Parry",
        "content": "The Muda Barrage deals rapid multi-hit damage that depletes enemy guard stamina within 1.5 seconds. If an opponent attempts to counter-barrage, The World's superior priority wins the clash if activated second, locking the enemy into hitstun.",
        "tips": [
          "Cancel your light attack combo immediately into Muda Barrage if the enemy blocks the first hit to force an instant guardbreak."
        ]
      },
      {
        "id": "dio-gear",
        "title": "Synergizing with DIO's Jacket & Boots",
        "content": "Equipping the complete DIO Gear Set (DIO's Jacket and DIO's Yellow Boots) grants a +15% damage bonus to all Knife Volleys and increases Time Stop duration by +1.0 second. Pair The World with the Vampire Sub-Ability to unlock blood healing and hyper-regeneration during combat.",
        "tips": [
          "Vampire users taking daylight damage can equip the Shadow Cloak to maintain full regeneration without environmental burning."
        ]
      }
    ]
  },
  {
    "slug": "king-crimson",
    "title": "King Crimson Stand Guide: Doppio Mode, Time Erase & Epitaph",
    "category": "Combat & Moves",
    "description": "Unleash Diavolo's King Crimson in Stand Out. Master Doppio phone stages, Time Erase invulnerability, Epitaph frame traps, and Donut heavy finishers.",
    "readingTime": "8 min read",
    "updatedDate": "2026-11-16",
    "tableOfContents": [
      {
        "id": "doppio-transition",
        "title": "Frog Phone Stages (1, 2, 3) to Boss Form"
      },
      {
        "id": "time-erase",
        "title": "Time Erase Iframes & Teleport Positioning"
      },
      {
        "id": "epitaph-counters",
        "title": "Epitaph Reading & Frame Trap Execution"
      },
      {
        "id": "donut-finisher",
        "title": "Donut Heavy Finisher Damage Scaling"
      },
      {
        "id": "raid-utility",
        "title": "Dodging World Boss Wipes with Time Erase"
      }
    ],
    "sections": [
      {
        "id": "doppio-transition",
        "title": "Frog Phone Stages (1, 2, 3) to Boss Form",
        "content": "King Crimson features a unique two-stage progression system. Players begin in Doppio Mode with a compact, hit-and-run moveset. By answering incoming Frog Phone calls during battle, Doppio progresses through Stage 1 (single Stand arm, pocket projectiles), Stage 2 (dual arms, desperate barrage), and Stage 3. Completing three calls awakens the Boss Form (Diavolo / King Crimson Alter Ego), unlocking the full power of Time Erase.",
        "table": {
          "headers": [
            "Form / Stage",
            "Prerequisites",
            "Key Abilities Unlocked",
            "Combat Stat Buff"
          ],
          "rows": [
            [
              "Doppio Stage 1",
              "Base spawn",
              "Pocket Projectiles, Epitaph Peek",
              "Standard baseline stats"
            ],
            [
              "Doppio Stage 2",
              "1 Phone Call",
              "Desperate Barrage, Double Arm Heavy",
              "+10% Melee Speed"
            ],
            [
              "Doppio Stage 3",
              "2 Phone Calls",
              "Tantrum Knockback, Extended Stun",
              "+15% Damage Scaling"
            ],
            [
              "Boss King Crimson",
              "3 Calls Complete",
              "Time Erase, Donut Strike, Court Awakening",
              "+25% All Stats & Full Moveset"
            ]
          ]
        }
      },
      {
        "id": "time-erase",
        "title": "Time Erase Iframes & Teleport Positioning",
        "content": "Time Erase (25s cooldown) is King Crimson's signature ability. Upon activation, the screen fractures into red temporal space for 4 seconds. During this window, Diavolo becomes completely untargetable, intangible, and immune to all incoming attacks (including Time Stop and raid wipes). Reposition directly behind your opponent and prepare an unblockable strike.",
        "steps": [
          "Activate Time Erase as the opponent commits to a heavy move or barrage.",
          "Sprint through the intangible space to position behind the enemy.",
          "Begin holding your LMB or Donut Finisher input before Time Erase expires.",
          "Land the back-attack the exact millisecond normal time resumes."
        ]
      },
      {
        "id": "epitaph-counters",
        "title": "Epitaph Reading & Frame Trap Execution",
        "content": "Epitaph (18s cooldown) activates a 2-second precognitive counter stance. If struck during this stance, Diavolo dodges behind the attacker with zero damage taken, leaving the opponent stuck in whiff recovery frames. This is the premier defensive counter in competitive STAND OUT.",
        "warning": "Epitaph cannot counter multi-directional environmental hazards or certain grab-type ultimate abilities. Time your stance carefully."
      },
      {
        "id": "donut-finisher",
        "title": "Donut Heavy Finisher Damage Scaling",
        "content": "The iconic Donut Finisher (R Heavy) thrusts King Crimson's arm completely through the opponent's torso. This attack deals 42 base physical damage, causes severe bleeding over 6 seconds, and shatters opponent guard shields on contact.",
        "tips": [
          "Pair the Donut Finisher with high Damage stat investment (85+ points) to execute low-health opponents below 25% HP instantly."
        ]
      },
      {
        "id": "raid-utility",
        "title": "Dodging World Boss Wipes with Time Erase",
        "content": "In endgame raid content like the Passione Train Raid, bosses execute full-screen instant-death mechanics. While other players must scramble for bunker cover, King Crimson users can simply pop Time Erase to ignore the wipe mechanic entirely, maintaining maximum boss DPS uptime.",
        "tips": [
          "Keep your Frog Phone calls topped off before initiating raid boss encounters to ensure immediate Boss Form availability."
        ]
      }
    ]
  },
  {
    "slug": "evolve-stands",
    "title": "Stand Evolution Guide: How to Get SPTW & TWAU in Stand Out",
    "category": "Progression",
    "description": "Complete guide on how to get SPTW (Star Platinum: The World) and TWAU in Roblox STAND OUT. View Level 50 requirements, Opal Rokakaka farming, moveset changes, and failure safeguards.",
    "readingTime": "6 min read",
    "updatedDate": "2026-11-19",
    "tableOfContents": [
      {
        "id": "evolution-overview",
        "title": "Evolution Requirements & Level 50 Cap"
      },
      {
        "id": "sp-to-sptw",
        "title": "How to Get SPTW: Star Platinum Awakening Ritual"
      },
      {
        "id": "tw-to-twau",
        "title": "How to Get TWAU: Diego Brando Transition"
      },
      {
        "id": "opal-roka",
        "title": "Finding and Consuming Opal Rokakaka (Opal Roka)"
      },
      {
        "id": "stat-preservation",
        "title": "Retaining Skill Mastery & Sub-Abilities"
      }
    ],
    "sections": [
      {
        "id": "evolution-overview",
        "title": "Evolution Requirements & Level 50 Cap",
        "content": "Evolving a base Stand into its pinnacle Evolution or Alternative Universe variant is the ultimate progression milestone in STAND OUT. To evolve your Stand, you must fulfill three non-negotiable requirements: 1. Reach the maximum character Level 50 cap; 2. Possess the base Stand (Star Platinum or The World); 3. Acquire 1x Opal Rokakaka mutation fruit. Consuming an Opal Rokakaka triggers an equivalent exchange awakening cutscene, permanently upgrading your moveset.",
        "table": {
          "headers": [
            "Base Stand",
            "Target Evolution",
            "Required Catalyst",
            "Level Prerequisite"
          ],
          "rows": [
            [
              "Star Platinum",
              "Star Platinum: The World (SPTW)",
              "1x Opal Rokakaka",
              "Level 50 Cap"
            ],
            [
              "The World",
              "The World: Alternative Universe (TWAU)",
              "1x Opal Rokakaka",
              "Level 50 Cap"
            ],
            [
              "Standless Human",
              "Jojosapiens",
              "Major Tom Research Quest",
              "Level 40 + 7,500 Catalog Sales"
            ]
          ]
        }
      },
      {
        "id": "sp-to-sptw",
        "title": "How to Get SPTW: Star Platinum Awakening Ritual",
        "content": "To get SPTW (Star Platinum: The World) in STAND OUT: 1. Reach character Level 50; 2. Summon Star Platinum (press Q); 3. Hold an Opal Rokakaka in your active hotbar slot; 4. Click to eat the Opal Rokakaka. You will enter a 10-second awakening cutscene during which your Stand permanently transforms into SPTW. SPTW gains Bane of Rats (catching/redirecting frozen projectiles), Platinum Parry (countering physical rushes), and an extended 5-second Time Stop dimension with devastating Beatdown strings.",
        "steps": [
          "Ensure your character has reached the Level 50 maximum cap before starting.",
          "Press Q to summon your base Star Platinum Stand.",
          "Select the Opal Rokakaka (Opal Roka) from your hotbar inventory.",
          "Click LMB to consume the fruit; your character will freeze in a 10-second stone petrification cutscene.",
          "Verify your new SPTW moveset in the ability menu and allocate your 150 skill points."
        ]
      },
      {
        "id": "tw-to-twau",
        "title": "How to Get TWAU: Diego Brando Transition",
        "content": "To get TWAU (The World: Alternative Universe): 1. Reach Level 50; 2. Summon The World; 3. Consume an Opal Rokakaka. Consuming an Opal Roka with base The World transforms the Stand into Diego Brando's Alternative Universe variant (TWAU). TWAU trades base The World's pure physical brawl for superior mid-range agility, revolving firearm shots, razor wire explosive traps, and a fast 3.5s Time Stop with rapid cooldown rotation.",
        "tips": [
          "TWAU excels at mid-range zoning and kiting, making it significantly stronger than base The World in open-world Gang Wars and territorial skirmishes."
        ]
      },
      {
        "id": "opal-roka",
        "title": "Finding and Consuming Opal Rokakaka (Opal Roka)",
        "content": "Opal Rokakaka (Opal Roka) is a mythical agricultural mutation fruit. It has a base 3.5% mutation chance when harvesting standard Rokakaka seeds planted in a greenhouse pot with High-Grade Mineral Fertilizer. It can also drop from Endgame Raid MVP chests (Passione Train or 77 Rings) on Nightmare difficulty, or purchased from the underground midnight dealer for $50,000 Dalas.",
        "warning": "Do not eat an Opal Roka below Level 50 or while holding an ineligible Stand (like Beach Boy or Cinderella); eating it on an ineligible Stand will reset your Stand without evolving!"
      },
      {
        "id": "stat-preservation",
        "title": "Retaining Skill Mastery & Sub-Abilities",
        "content": "Unlike standard Rokakakas which reset your Sub-Ability and player level, Stand Evolution preserves your Hamon or Vampire mastery completely intact. Your 150 allocated stat points remain assigned, allowing immediate competitive deployment in PvP Colosseum or high-tier raids.",
        "tips": [
          "Visit the cosmetic boutique in downtown Honolulu to refine your facial enhancements after evolution to optimize your secondary passive stats."
        ]
      }
    ]
  },
  {
    "slug": "hamon",
    "title": "Hamon Mastery Guide: Lisa Lisa Quest, Breathing & Path Branches",
    "category": "Progression",
    "description": "Master the ancient Ripple martial art in Stand Out. Lisa Lisa training locations, breathing rhythm bar mechanics, and Jonathan vs Caesar vs Zeppeli paths.",
    "readingTime": "6 min read",
    "updatedDate": "2026-11-16",
    "tableOfContents": [
      {
        "id": "hamon-obtainment",
        "title": "Lisa Lisa Mountain Trial & Questline"
      },
      {
        "id": "breathing-rhythm",
        "title": "Ripple Bar Management & Overdrive Breath"
      },
      {
        "id": "path-branches",
        "title": "Jonathan vs Caesar vs Zeppeli Specializations"
      },
      {
        "id": "vampire-killer",
        "title": "1.35x Damage Multiplier vs Vampire Users"
      },
      {
        "id": "hamon-combos",
        "title": "Chaining Zoom Punch into Stand Movesets"
      }
    ],
    "sections": [
      {
        "id": "hamon-obtainment",
        "title": "Lisa Lisa Mountain Trial & Questline",
        "content": "Hamon is the premier physical Sub-Ability in STAND OUT. To learn Hamon, your character must reach Level 25 and travel to the Highland Training Retreat on the O'ahu ridgeline. Speak with Master Lisa Lisa to begin the Hamon Trial: complete the breathing endurance trial and defeat the 3 Ripple Acolytes without using Stand abilities.",
        "steps": [
          "Reach Level 25 and bring 5,000 Dalas to the Mountain Monastery.",
          "Talk to Lisa Lisa to accept the \"Way of the Sun\" initiation quest.",
          "Maintain your breathing meter during the waterfall meditation minigame.",
          "Defeat the 3 Acolytes using basic martial arts strikes.",
          "Drink the Hamon Breathing Oil to permanently unlock the Ripple Bar."
        ]
      },
      {
        "id": "breathing-rhythm",
        "title": "Ripple Bar Management & Overdrive Breath",
        "content": "Hamon introduces a dedicated yellow Ripple Bar beneath your health. Holding the Breath key (B) charges your Ripple bar at 15% per second. All Hamon combat moves consume Ripple energy; maintaining above 75% Ripple grants a passive +10% melee damage boost and reduces incoming physical damage.",
        "table": {
          "headers": [
            "Path Specialization",
            "Signature Move",
            "Combat Focus",
            "Best Stand Synergy"
          ],
          "rows": [
            [
              "Jonathan Path",
              "Sunlight Yellow Overdrive",
              "Raw physical burst & guardbreak",
              "Star Platinum, Kraft Work"
            ],
            [
              "Caesar Path",
              "Bubble Launcher & Cutter",
              "Ranged zoning & trap setup",
              "The World, November Rain"
            ],
            [
              "Zeppeli Path",
              "Zoom Punch & Sendo Wave",
              "Mid-range stun & combo extension",
              "Silver Chariot, Hermit Purple"
            ]
          ]
        }
      },
      {
        "id": "path-branches",
        "title": "Jonathan vs Caesar vs Zeppeli Specializations",
        "content": "At Hamon Mastery Level 3, Lisa Lisa allows you to choose one of three specialization paths. Jonathan Path provides maximum raw physical scaling and guardbreak pressure; Caesar Path offers exceptional ranged bubbles for zoning; Zeppeli Path provides the iconic Zoom Punch stun extender. Crucially, as of the Nov 16 update, Zeppeli and Caesar Hamon automatically infuse Hamon into your Stand strikes passively without requiring manual breathing, and the Hamon training mask can now be re-obtained if lost.",
        "tips": [
          "Jonathan Path is recommended for aggressive melee brawlers, while Caesar Path is ideal for tactical zoning playstyles."
        ]
      },
      {
        "id": "vampire-killer",
        "title": "1.35x Damage Multiplier vs Vampire Users",
        "content": "Hamon channels the energy of the sun, making it the hard counter to Vampire players and undead raid bosses. All Hamon strikes inflict a massive 1.35x damage multiplier against Vampires, inflict burning sunlight DoT, and disable Vampire health siphon for 4 seconds.",
        "warning": "Missing your Hamon strikes leaves you drained of Ripple energy, leaving you vulnerable to Vampire ice freeze counters."
      },
      {
        "id": "hamon-combos",
        "title": "Chaining Zoom Punch into Stand Movesets",
        "content": "Zoom Punch (Zeppeli Path) extends your arm by 15 studs to deliver an instant stun. Use Zoom Punch as a surprise opener from outside enemy melee range, then immediately summon your Stand and chain into an Ora Barrage before the enemy recovers from hitstun.",
        "tips": [
          "Practice charging your Ripple bar during knockback recovery frames to keep your passive damage bonus active at all times."
        ]
      }
    ]
  },
  {
    "slug": "vampire",
    "title": "Vampire Sub-Ability Guide: Stone Mask, Blood Bar & Sunlight Gear",
    "category": "Progression",
    "description": "Master the Vampire Sub-Ability in Stand Out. Covers Stone Mask obtainment, 250 max Blood scaling, Vaporatization Freezing Technique (freeze trigger fixed Nov 22), downed Blood Drain execution, and Shadow Cloak protection.",
    "readingTime": "6 min read",
    "updatedDate": "2026-11-26",
    "tableOfContents": [
      {
        "id": "stone-mask",
        "title": "Obtaining & Activating the Ancient Stone Mask"
      },
      {
        "id": "blood-meter",
        "title": "Blood Bar Drain Rate & M2 Siphon Mechanics"
      },
      {
        "id": "vampire-skills",
        "title": "Space Ripper Stingy Eyes & Vaporizing Freeze"
      },
      {
        "id": "sunlight-penalty",
        "title": "Surviving Daylight with the Shadow Cloak"
      },
      {
        "id": "vampire-synergies",
        "title": "Best Stand Pairings (The World, Death 13)"
      }
    ],
    "sections": [
      {
        "id": "stone-mask",
        "title": "Obtaining & Activating the Ancient Stone Mask",
        "content": "The Vampire Sub-Ability grants superhuman physical durability, passive health regeneration, and lethal blood-based techniques. To become a Vampire, obtain an Ancient Stone Mask from the Catacombs raid or purchase one from the Black Market Dealer for 15,000 Dalas. Equip the mask at night and click to trigger the bloody transformation cutscene.",
        "steps": [
          "Acquire an Ancient Stone Mask (Catacombs drop or Black Market purchase).",
          "Wait until in-game night time (between 20:00 and 06:00).",
          "Ensure your character has at least 50% health and no active Sub-Ability.",
          "Equip and activate the Stone Mask to transform into a Vampire."
        ]
      },
      {
        "id": "blood-meter",
        "title": "Blood Bar Drain Rate & M2 Siphon Mechanics",
        "content": "Vampires use a Blood Reserve scaling up to 250 Blood at max Ability. You regenerate 20% faster with Blood and 20% slower without it (PvP healing requires blood). In Update 1, Blood Drain can also execute downed enemies to prevent Mandom or Crazy Diamond revives, and the Nov 22 patch fixed Vaporatization Freezing Technique sometimes failing to trigger freeze.",
        "table": {
          "headers": [
            "Vampire Ability",
            "Resource / Mechanic",
            "Cooldown",
            "Combat Effect"
          ],
          "rows": [
            [
              "Blood Drain",
              "Refills Blood + Heals",
              "18s",
              "Grabs enemy, heals, throws left; executes downed targets"
            ],
            [
              "Space Ripper Stingy Eyes",
              "2 HP Cost (+10% Range)",
              "12s",
              "Uninterruptible eye lasers; extra headshot damage"
            ],
            [
              "Vaporatization Freezing Technique",
              "3s Solid Freeze",
              "18s",
              "Freeze trigger fixed Nov 22; heavy blow shatters for +25 DMG"
            ],
            [
              "Hypnosis",
              "Hold to Choose Command",
              "16s",
              "Dance, follow, flee, stay, or drop held item"
            ],
            [
              "Vampiric Retaliation (2 EX)",
              "Evasive Spin Lasers",
              "60s",
              "Usable while stunned/ragdolled; breaks guard (parriable)"
            ],
            [
              "Zombie Transformation (1 EX)",
              "Up to 3 Zombies",
              "—",
              "Raises corpses within 8 studs at 30% HP/DMG"
            ]
          ]
        }
      },
      {
        "id": "vampire-skills",
        "title": "Space Ripper Stingy Eyes & Vaporizing Freeze",
        "content": "Space Ripper Stingy Eyes fires twin pressurized fluid beams from your eyes with near-instant projectile travel time, capable of sniping fleeing opponents across the district. Vaporizing Freeze acts as a counter-parry: when struck by physical attacks, your body instantly freezes the attacker's limbs, nullifying their combo.",
        "tips": [
          "Use Space Ripper Stingy Eyes to finish off low-health players who attempt to flee on rooftops or in cars."
        ]
      },
      {
        "id": "sunlight-penalty",
        "title": "Surviving Daylight with the Shadow Cloak",
        "content": "Direct sunlight is fatal to Vampires, dealing 5% max HP damage every second during daytime. To survive daylight, players must equip the protective Vampire Cloak (or Shadow Cloak). Following the Nov 16 update, your protective cloak stays securely equipped until you lose 25% of your HP in combat, followed by a 20-second grace window upon re-equipping during which the cloak cannot be knocked off by enemy hits. Wall-walking has also been officially restored for pure Vampires.",
        "warning": "Taking off your Shadow Cloak during broad daylight will cause your character to burst into flames within 2 seconds. Never unequip it outside."
      },
      {
        "id": "vampire-synergies",
        "title": "Best Stand Pairings (The World, Death 13)",
        "content": "The Vampire Sub-Ability synergizes exceptionally with DIO's The World (canonically mirroring DIO's vampiric biology) and Death 13. The combination of The World's Time Stop with Vampire Blood Drain allows guaranteed, risk-free health replenishment during frozen time.",
        "tips": [
          "Vampire health regeneration continues even while blocking, allowing you to turtle against barrages and out-sustain opponents."
        ]
      }
    ]
  },
  {
    "slug": "raids",
    "title": "Stand Out Raids Guide: Passione Train & 77 Rings Walkthrough",
    "category": "Endgame & Raids",
    "description": "Conquer endgame raids in Stand Out. Master Passione Train and 77 Rings Raid strategies, boss telegraphs, team comps, and exclusive loot drops.",
    "readingTime": "8 min read",
    "updatedDate": "2026-11-16",
    "tableOfContents": [
      {
        "id": "raid-entry",
        "title": "Passione Train & 77 Rings Requirements"
      },
      {
        "id": "party-composition",
        "title": "Ideal Team Roles (Tank, DPS, Support)"
      },
      {
        "id": "boss-phases",
        "title": "Encounter Mechanics & Telegraph Dodgers"
      },
      {
        "id": "exclusive-drops",
        "title": "Bizarre Arrows, DIO's Diary & Stand Chips"
      },
      {
        "id": "wipe-prevention",
        "title": "Revive Stations & Squad Positioning"
      }
    ],
    "sections": [
      {
        "id": "raid-entry",
        "title": "Passione Train & 77 Rings Requirements",
        "content": "Raids represent the pinnacle collaborative content in STAND OUT. Passione Train Raid unlocks at Level 45 and pits 4 players against moving train car waves before fighting Boss Prosciutto & Pesci. The 77 Rings Raid is started through Donatello in Honolulu, featuring a 5-stage trial: Graveyard undead waves, broken bridge parkour, Training Hall, Tarkus boss fight, frozen mountain scaling with hypothermia campfires, and the Shrine of DIO boss battle. Following the Nov 16 update, defeating any raid boss grants an instant 100% full health heal, losing a raid no longer incurs a cooldown penalty, and Top 3 weekly raid leaderboard finishers receive the exclusive Heaven's Door Prime Stand Chip.",
        "table": {
          "headers": [
            "Raid Name",
            "Level Req.",
            "Party Size",
            "Primary Boss",
            "Key Rewards"
          ],
          "rows": [
            [
              "Passione Train Raid",
              "Level 45+",
              "2 - 4 Players",
              "Prosciutto & Pesci",
              "Bizarre Arrow, High Scrap, Train Passes"
            ],
            [
              "77 Rings Raid",
              "Level 50 (Max)",
              "3 - 5 Players",
              "SWAT Commander & Rings",
              "DIO's Diary, Opal Roka, Master Chips"
            ]
          ]
        }
      },
      {
        "id": "party-composition",
        "title": "Ideal Team Roles (Tank, DPS, Support)",
        "content": "Attempting raids with 4 pure DPS characters frequently leads to wipes. The optimal team composition consists of: 1 Tank (Yellow Temperance with Living Armor or Notorious B.I.G), 2 Burst DPS (Star Platinum / The World for barrage pressure), and 1 Support (Cinderella for face healing and stat buffs, or Harvest for item retrieval).",
        "tips": [
          "Yellow Temperance tanks can absorb up to 65% of incoming boss damage while holding aggro in the center of the car."
        ]
      },
      {
        "id": "boss-phases",
        "title": "Encounter Mechanics & Telegraph Dodgers",
        "content": "Boss encounters feature 3 distinct phases. When Prosciutto casts Withering Mist, red visual rings appear on the floor. Players must immediately climb to the upper luggage racks or consume Ice Water buckets to lower their body temperature. In Phase 3, Pesci casts Beach Boy Hook from across the train, requiring players to hide behind metal bulkheads.",
        "steps": [
          "Phase 1 (100% - 70% HP): Focus Prosciutto while tank pulls Pesci away.",
          "Phase 2 (70% - 30% HP): Douse teammates with Ice Water to cleanse Withering Mist aging.",
          "Phase 3 (30% - 0% HP): Execute combined Time Stop and Barrage burst rotations to melt Pesci before he executes hooked allies."
        ]
      },
      {
        "id": "exclusive-drops",
        "title": "Bizarre Arrows, DIO's Diary & Stand Chips",
        "content": "Clearing raids on Nightmare difficulty provides guaranteed high-tier rewards. The conductor's vault drops Bizarre Arrows (4.4% Pinnacle summon item), DIO's Diary (required for Heaven ascension storylines), and Tier 4 Stand Storage Chips.",
        "warning": "Players who die and run out of team lives before the boss dies will receive only 20% of the final raid chest rewards. Stay alive and prioritize dodging over DPS."
      },
      {
        "id": "wipe-prevention",
        "title": "Revive Stations & Squad Positioning",
        "content": "Each raid instance provides a shared pool of 3 Squad Revives. If a teammate is downed, approach their avatar and hold E for 5 seconds to revive them without consuming a team life. Designate the Support player as the primary combat medic.",
        "tips": [
          "Never stack all 4 players in one corner of the train car; wide AOE sweeps can wipe the entire team in a single blow."
        ]
      }
    ]
  },
  {
    "slug": "bosses",
    "title": "Stand Out Bosses Guide: World Spawn Timers, Movesets & Drops",
    "category": "Progression",
    "description": "Defeat every world boss in Stand Out. Spawn timers, attack telegraphs, guardbreak counters, and loot tables for Bobby Jean, SWAT Captain, and Prosciutto.",
    "readingTime": "7 min read",
    "updatedDate": "2026-11-16",
    "tableOfContents": [
      {
        "id": "world-boss-timers",
        "title": "World Boss Spawn Timers & Locations"
      },
      {
        "id": "telegraph-counters",
        "title": "Recognizing Red AOE Indicators & Parries"
      },
      {
        "id": "solo-vs-squad",
        "title": "Solo Kite Tactics vs Group Burst Strategies"
      },
      {
        "id": "boss-loot-tables",
        "title": "Rare Accessory & Material Drop Rates"
      },
      {
        "id": "bounty-stacking",
        "title": "Stacking Daily Phone Bounties with Bosses"
      }
    ],
    "sections": [
      {
        "id": "world-boss-timers",
        "title": "World Boss Spawn Timers & Locations",
        "content": "World bosses roam designated public zones across O'ahu and drop unique legendary accessories and large cash bounties. When a boss spawns, a global server notification appears in chat. Bosses despawn after 15 minutes if not engaged.",
        "table": {
          "headers": [
            "World Boss",
            "Spawn Interval",
            "Location",
            "Recommended Level",
            "Signature Drop"
          ],
          "rows": [
            [
              "SWAT Captain",
              "Every 30 mins",
              "Downtown Bank Plaza",
              "Level 35+",
              "Tactical Vest (+20 HP)"
            ],
            [
              "Bobby Jean",
              "Every 45 mins",
              "Harbor Shipping Pier",
              "Level 45+",
              "Glory Holster (+15% Gun DMG)"
            ],
            [
              "Prosciutto & Pesci",
              "Every 60 mins",
              "Train Station Platform 3",
              "Level 45+",
              "Passione Overcoat (+12% DMG)"
            ],
            [
              "Vampire Lord",
              "Midnight Only",
              "Catacombs Crypt",
              "Level 50 (Max)",
              "Ancient Stone Mask"
            ]
          ]
        }
      },
      {
        "id": "telegraph-counters",
        "title": "Recognizing Red AOE Indicators & Parries",
        "content": "All world boss heavy attacks display bright red telegraph markers on the ground 1.5 seconds before impact. Never attempt to standard block red telegraph attacks; they are guaranteed guardbreaks that stagger your character for 3 seconds. Following the Nov 15 combat balance update, the evasive skill cooldown on EVERY boss in the game was increased by 6.0 seconds, opening up much larger punish windows after dodging. Slaying any world boss also immediately restores 100% of your maximum health.",
        "tips": [
          "The SWAT Captain's Riot Shield slam can be Perfect Blocked by tapping F the millisecond his shield flashes yellow."
        ]
      },
      {
        "id": "solo-vs-squad",
        "title": "Solo Kite Tactics vs Group Burst Strategies",
        "content": "Soloing world bosses requires long-range projectile kiting with Stands like Emperor, The Sun, or Beyond the Sea. Maintain a 40-stud gap, fire your ranged volleys, and jump over ground shockwaves. For groups, have a tank pull the boss against a wall while DPS players unleash continuous heavy combos into the boss's back.",
        "steps": [
          "Tank initiates aggro with a heavy strike and backs into a corner.",
          "DPS players position behind the boss to trigger back-attack damage bonuses (+20%).",
          "When red telegraph appears, all players dash backward simultaneously.",
          "Re-engage as soon as the boss's attack animation completes."
        ]
      },
      {
        "id": "boss-loot-tables",
        "title": "Rare Accessory & Material Drop Rates",
        "content": "Boss loot drops directly into the inventory of every player who contributes at least 5% total damage. Drop rates for signature accessories average 15%, while Meteorite Scrap and Mysterious Arrows have a 100% drop rate.",
        "warning": "Dealing less than 5% damage will disqualify you from receiving boss drops, even if you are in the same party."
      },
      {
        "id": "bounty-stacking",
        "title": "Stacking Daily Phone Bounties with Bosses",
        "content": "Before engaging any world boss, check the Bounties App on your Smartphone. If the SWAT Captain or Bobby Jean appears on the daily target list, accepting the bounty prior to the kill awards an additional $10,000 Dalas and 15,000 EXP upon boss defeat.",
        "tips": [
          "Coordinate server hops with your Gang to kill multiple world bosses back-to-back across different instances."
        ]
      }
    ]
  },
  {
    "slug": "storyline",
    "title": "Stand Out Storyline Walkthrough: Full 54-Chapter Campaign Guide",
    "category": "Progression",
    "description": "Complete walkthrough for all 54 Storyline chapters in Roblox STAND OUT. Rohan Villa Heist, Diamotch watch theft, hospital MRI infiltration, megayacht raid, and Lava Rock mystery.",
    "readingTime": "14 min read",
    "updatedDate": "2026-11-24",
    "tableOfContents": [
      {
        "id": "campaign-overview",
        "title": "Main Campaign Overview & Act Structure"
      },
      {
        "id": "act-1-rohan-villa",
        "title": "Act I: Honolulu Streets & Rohan Villa Heist (Ch. 1-14)"
      },
      {
        "id": "act-2-diamotch-howler",
        "title": "Act II: Diamotch Watch & HOWLER Land Deeds (Ch. 15-28)"
      },
      {
        "id": "act-3-hospital-mri",
        "title": "Act III: Hospital Infiltration & Bobby Jean (Ch. 29-41)"
      },
      {
        "id": "act-4-megayacht-climax",
        "title": "Act IV: Megayacht Raid & Key West Finale (Ch. 42-54)"
      },
      {
        "id": "storyline-bosses",
        "title": "Storyline Boss Tactics & Evasion Strategies"
      },
      {
        "id": "campaign-rewards",
        "title": "Campaign Completion Rewards & Endgame Transition"
      }
    ],
    "sections": [
      {
        "id": "campaign-overview",
        "title": "Main Campaign Overview & Act Structure",
        "content": "Roblox STAND OUT's primary narrative campaign spans 54 core storyline chapters structured across four dramatic Acts set in modern Hawaii (Part 9 inspired). Progressing through the main storyline is the fastest method to level up from Level 1 to Level 50+, unlocking essential quality-of-life systems including the Huber Taxi Travel app on your smartphone, Stand Storage Chips, Sub-Ability slots, and access to endgame Raids (Highway Star, Train, and 77 Rings). You can inspect every individual quest requirement, objective, and reward in our comprehensive Quests Database at /quests/.",
        "tips": [
          "Always activate the local Payphone or Fast Travel station near each quest hub to cut down cross-city running time.",
          "If you ever get separated from your quest objective, open your Phone (P) or Quest Log (L) to track the active gold waypoint beacon."
        ]
      },
      {
        "id": "act-1-rohan-villa",
        "title": "Act I: Honolulu Streets & Rohan Villa Heist (Ch. 1-14)",
        "content": "Act I introduces Jodio Joestar, Dragona, Paco, and team coordinator Meryl Mei Qi at the high school. After proving your street combat abilities against local corrupt police officers and gang thugs in Chapters 1-6, Meryl briefs the squad on the primary objective: infiltrating the secluded luxury villa belonging to the renowned Japanese mangaka Rohan Kishibe. Chapters 7-14 guide players through scaling the villa cliffs, disabling exterior security cameras, evading robotic patrol hounds, and securing the 24-carat natural raw diamond from the villa's reinforced display safe.",
        "steps": [
          "Chapter 1-3: Complete the Hey Ya! tutorial and defeat the corrupt precinct cops in Downtown Honolulu.",
          "Chapter 4-6: Meet Meryl Mei Qi at the high school guidance office to accept the crew initiation assignment.",
          "Chapter 7-10: Drive to the Diamond Head cliffside estate and bypass the estate's motion-sensor floodlights.",
          "Chapter 11-14: Infiltrate the master studio, defeat the Heavens Door automated defense manifestations, and extract the raw diamond."
        ],
        "tips": [
          "During the villa stealth segment, use crouch (C) behind display counters to avoid triggering the laser alarm grid.",
          "Completing Chapter 14 awards 3,500 Dalas, 1 Lucky Arrow, and the Pink Dark Boy Sketchbook accessory."
        ]
      },
      {
        "id": "act-2-diamotch-howler",
        "title": "Act II: Diamotch Watch & HOWLER Land Deeds (Ch. 15-28)",
        "content": "Following the villa extraction, Act II shifts focus to tracing the origins of the mysterious Lava Rock acquired alongside the diamond. The crew must appraise the high-end Diamotch luxury watch at the Waikiki jewelry boutique (Chapters 15-18). However, Charming Man ambushes the boutique, utilizing sand-camouflage mimicry that tests your parry and aerial evasion skills. After neutralizing Charming Man and bringing him into the alliance, Chapters 19-28 lead into investigating HOWLER Company's fraudulent infrastructure land deeds across Oahu.",
        "steps": [
          "Chapter 15-18: Deliver the Diamotch watch to the appraisal boutique in Waikiki Shopping Plaza.",
          "Chapter 19-21: Defeat Charming Man in the rooftop alley shootout by timing parries against his dagger burst flurry.",
          "Chapter 22-25: Infiltrate the HOWLER Land Registry office in Honolulu Civic Center to retrieve cadastral survey maps.",
          "Chapter 26-28: Ambush HOWLER enforcers in the mountain industrial quarry to intercept land development documents."
        ],
        "warning": "Charming Man's sand dash leaves invisible slivers that blind your screen for 2.5 seconds if hit without blocking."
      },
      {
        "id": "act-3-hospital-mri",
        "title": "Act III: Hospital Infiltration & Bobby Jean (Ch. 29-41)",
        "content": "In Act III, Usagi Arakaki falls severely ill after exposure to microscopic enemy Stand vectors, forcing the team to infiltrate Honolulu Memorial Hospital. Chapters 29-34 involve stealthily navigating patient wings, retrieving sterile diagnostic medical equipment, and securing the MRI scanning room. Chapters 35-41 escalate into one of the campaign's most demanding boss encounters against Bobby Jean and his Stand 'Glory Days', who manipulates bullet velocities inside the enclosed magnetic MRI chamber.",
        "steps": [
          "Chapter 29-32: Escort Usagi into Honolulu Memorial Hospital triage and obtain pharmacy clearance codes.",
          "Chapter 33-36: Secure the diagnostic radiological suite while fending off automated medical drones.",
          "Chapter 37-41: Defeat Bobby Jean inside the MRI chamber by utilizing magnetic line-of-sight columns and exploiting reload windows."
        ],
        "tips": [
          "Bobby Jean's slowed bullets can be guardbroken or dodged with Stand Jump (T); never stand still when he fires his magnum.",
          "Defeating Bobby Jean drops the Glory Days Holster accessory and 18,000 EXP."
        ]
      },
      {
        "id": "act-4-megayacht-climax",
        "title": "Act IV: Megayacht Raid & Key West Finale (Ch. 42-54)",
        "content": "The climactic fourth Act moves the battle offshore. The crew commandeers high-speed offshore powerboats to intercept HOWLER's fortified megayacht cruising through territorial waters (Chapters 42-47). Players must clear multi-deck security squads, disable the ship's dual engine turbines, and survive Bags Groove's internal organ attacks. Chapters 48-54 culminate in the dramatic confrontation at the offshore Key West lighthouse sanctuary, unlocking the true resonance mechanism of the Lava Rock.",
        "steps": [
          "Chapter 42-45: Board the megayacht lower hull, disable engine room coolant pumps, and secure the lower bilge.",
          "Chapter 46-49: Ascend the upper staterooms, neutralize heavy bodyguards, and destroy Bags Groove injection nodes.",
          "Chapter 50-54: Final boss confrontation at the Key West cliffside lighthouse; unlock the Lava Rock resonance."
        ],
        "tips": [
          "Equip high AoE stands like Star Platinum, Magician's Red, or King Crimson to clear the crowded yacht corridors quickly.",
          "Finishing Chapter 54 rewards the permanent Lava Rock item, 1 Stand Storage Chip, and unlocks the 77 Rings Raid."
        ]
      },
      {
        "id": "storyline-bosses",
        "title": "Storyline Boss Tactics & Evasion Strategies",
        "content": "Storyline bosses possess hyper-armor phases and specialized guardbreak mechanics that punish standard combo spam. For Rohan (Ch. 14), avoid his direct line-of-sight to prevent Heaven's Door page immobilizations. For Charming Man (Ch. 21), hold guard against his triple slash and punish the 1.2s recovery delay with heavy knockbacks. For Bobby Jean (Ch. 41), memorize his bullet velocity changes: when purple distortion halos appear, bullets travel at 30% speed and detonate upon proximity—use Q-dash invulnerability frames to cross hazard zones safely.",
        "steps": [
          "Recognize boss telegraph animations (red ground circles and blue eye flashes).",
          "Do not waste your Universal Evasive (Space during hitstun) on light combo openers; save it for boss ultimate strings.",
          "Use high-scaling ranged projectiles or parry-counters to interrupt long channel animations."
        ]
      },
      {
        "id": "campaign-rewards",
        "title": "Campaign Completion Rewards & Endgame Transition",
        "content": "Clearing all 54 storyline chapters provides over 120,000 total EXP (taking a fresh character from Level 1 straight to the Level 50+ threshold), approximately 35,000 Dalas, 3 Mysterious Arrows, 1 Lucky Arrow, 2 Stand Storage Expansion Chips, and the essential Lava Rock quest item. Once completed, your character is fully equipped with 150+ Stat Points, unlocking immediate entry into Highway Star Raid (Level 35+), 77 Rings Raid (Level 50+), and Ranked 1v1 PvP Arena matchmaking at /best-stands/.",
        "tips": [
          "Allocate your newly earned 150+ stat points into your Stand's primary scaling attribute (Damage or Ability) using our Stats Guide at /stats/.",
          "Visit Daniel J. D'Arby in the Royal Palm Casino cellar with your new Dalas to unlock additional Stand storage slots."
        ]
      }
    ]
  },
  {
    "slug": "crafting",
    "title": "Stand Out Crafting Guide: Workbenches, Recipes & Materials",
    "category": "Economy",
    "description": "Master the crafting system in Stand Out. Verified Workbench recipes for Lucky Arrows (3x Mysterious), Bizarre Arrows (9x Mysterious), Part 3/5 Focus Arrows, Pluck Sword, and 2x EXP/Coin Boosters.",
    "readingTime": "6 min read",
    "updatedDate": "2026-11-26",
    "tableOfContents": [
      {
        "id": "crafting-benches",
        "title": "Workbench Locations Across the City"
      },
      {
        "id": "resource-nodes",
        "title": "Gathering Steel Ingot, Scrap & Refined Glass"
      },
      {
        "id": "arrow-recipes",
        "title": "Crafting Lucky Arrows & Bizarre Arrows"
      },
      {
        "id": "accessory-crafting",
        "title": "Shadow Cloak, Heavy Boots & Garden Pots"
      },
      {
        "id": "crafting-economy",
        "title": "Profit Margins on Crafting vs Selling Raw Mats"
      }
    ],
    "sections": [
      {
        "id": "crafting-benches",
        "title": "Workbench Locations Across the City",
        "content": "Crafting in STAND OUT takes place at Workbenches (including Big Chop's Garden Workbench and Blacksmith). Crafting consumes bound materials first, and Nov 18 fixed benches failing during another player's Time Stop.",
        "table": {
          "headers": [
            "Crafted Item",
            "Bench / NPC",
            "Verified Materials Needed",
            "Notes"
          ],
          "rows": [
            [
              "Mysterious Arrow",
              "Basic Workbench",
              "3x Arrow Parts + 1x Steel Ingot",
              "Core Stand awakening catalyst"
            ],
            [
              "Lucky Arrow",
              "Blacksmith / Bench",
              "3x Mysterious Arrows + 10,000 Dalas",
              "Excludes Rare tier (1.5% Pinnacle)"
            ],
            [
              "Bizarre Arrow",
              "Master Forge / Bench",
              "9x Mysterious Arrows + 25,000 Dalas",
              "Excludes Rare & Epic (4.4% Pinnacle)"
            ],
            [
              "Mysterious Arrow [Part 3 / 5]",
              "Workbench",
              "1x Mysterious Arrow + 5x Steel Ingots",
              "5% focus rate for SP/TW or KC"
            ],
            [
              "Pluck Sword",
              "Workbench",
              "Pluck Blade + Pluck Guard + Pluck Handle",
              "Parts drop in 77 Rings Raid (100 Tokens each)"
            ],
            [
              "2x EXP / Coins Boosters",
              "Workbench",
              "Rokakaka strains",
              "Higher grade Roka = longer boost duration"
            ]
          ]
        }
      },
      {
        "id": "resource-nodes",
        "title": "Gathering Steel Ingot, Scrap & Refined Glass",
        "content": "Materials spawn naturally throughout the city and drop from defeated hostile mobs. Scrap Metal is harvested by striking abandoned vehicles in the Industrial District with heavy attacks. Steel Ingots and Gold Ingots drop from mineral nodes in the Mountain Caves. Silk Cloth and Refined Glass are sold by the Harbor Merchant.",
        "steps": [
          "Equip a pickaxe or heavy Stand (like Kraft Work or Star Platinum).",
          "Travel to the Industrial Scrap Yard to harvest 10 Scrap Metal.",
          "Mine the gold-veined ore rocks inside the Mountain Caves for 3 Gold Ingots.",
          "Bring materials to the Advanced Workbench to begin crafting."
        ]
      },
      {
        "id": "arrow-recipes",
        "title": "Crafting Lucky Arrows & Bizarre Arrows",
        "content": "Crafting your own Lucky Arrows is the single most cost-effective path to obtaining high-tier Stands. Buying a Lucky Arrow from the Black Market Dealer costs over $45,000 Dalas, whereas farming raw Scrap Metal and Gold Ingots allows you to craft one for less than $8,000 Dalas in consumable supplies.",
        "tips": [
          "Form a crafting partnership with a guildmate who has the Blacksmith specialization to boost item output yields by +20%."
        ]
      },
      {
        "id": "accessory-crafting",
        "title": "Shadow Cloak, Heavy Boots & Garden Pots",
        "content": "Craftable accessories provide essential gameplay utility. The Shadow Cloak is mandatory for Vampire players to avoid sunlight burning, while Heavy Boots provide +15% knockback resistance against barrage clashing. High-Yield Garden Pots increase crop mutation rates by +1.5%.",
        "warning": "Failing to maintain durability on crafted accessories causes them to break during combat. Repair gear regularly using Steel Ingots."
      },
      {
        "id": "crafting-economy",
        "title": "Profit Margins on Crafting vs Selling Raw Mats",
        "content": "Selling raw Scrap Metal to merchants yields only $50 Dalas per piece. However, crafting that scrap into Lucky Arrows and selling them to other players via the Player Trade Hub nets upwards of $35,000 Dalas per arrow—a 700% value markup.",
        "tips": [
          "Always craft raw materials into finished goods before trading on the player market."
        ]
      }
    ]
  },
  {
    "slug": "gardening",
    "title": "Stand Out Gardening Guide: Crops, Greenhouses & Roka Mutations",
    "category": "Economy",
    "description": "The definitive agricultural guide for Stand Out. Covers crop timers, 3x Gang Greenhouse buffs, 20% rain growth bonus, +20% packaged produce value, Big Chop night Rokakaka sales, and 33 Rokakaka mutations.",
    "readingTime": "7 min read",
    "updatedDate": "2026-11-26",
    "tableOfContents": [
      {
        "id": "gardening-setup",
        "title": "Garden Pots, Dirt Bags & Ice Water Basics"
      },
      {
        "id": "crop-directory",
        "title": "Growth Timers & Yields (Lettuce, Tomato, Apple, Roka)"
      },
      {
        "id": "greenhouse-buff",
        "title": "3x Gang Greenhouse Speed Multipliers"
      },
      {
        "id": "roka-mutations",
        "title": "Cultivating 33 Rokakaka Strains with 3% Base Odds"
      },
      {
        "id": "produce-packaging",
        "title": "Packaging Crops into Jars for 2.5x Retail Value"
      }
    ],
    "sections": [
      {
        "id": "gardening-setup",
        "title": "Garden Pots, Dirt Bags & Ice Water Basics",
        "content": "Gardening is both the financial backbone of STAND OUT and the sole method for acquiring the 33 verified Rokakaka fruit mutation strains. To begin gardening, purchase a Garden Pot and a Dirt Bag from the Market Florist. Place the pot in your personal plot, fill it with rich soil, plant your chosen seed, and keep it hydrated with Ice Water.",
        "steps": [
          "Purchase 1 Garden Pot (200 Dalas) and 1 Dirt Bag (100 Dalas).",
          "Deploy the pot on your assigned garden plot.",
          "Equip your seed and click the pot to plant.",
          "Water the crop every 3 minutes using Ice Water buckets until harvest."
        ]
      },
      {
        "id": "crop-directory",
        "title": "Growth Timers & Yields (Lettuce, Tomato, Apple, Roka)",
        "content": "Different crops feature varying growth cycles and economic yields. Lettuce matures in 8 minutes and yields fast trading cash; Tomatoes mature in 12 minutes; Apples take 18 minutes; standard Rokakaka seeds take 25 minutes to produce harvestable fruit.",
        "table": {
          "headers": [
            "Crop Name",
            "Growth Time (Solo)",
            "Greenhouse Time (3x)",
            "Base Sale Value",
            "Primary Utility"
          ],
          "rows": [
            [
              "Lettuce",
              "8 mins",
              "2.6 mins",
              "$120 / head",
              "Rapid crate trading"
            ],
            [
              "Tomato",
              "12 mins",
              "4.0 mins",
              "$210 / basket",
              "Cooking & stamina food"
            ],
            [
              "Apple",
              "18 mins",
              "6.0 mins",
              "$350 / bushel",
              "Health restoration cider"
            ],
            [
              "Rokakaka",
              "25 mins",
              "8.3 mins",
              "$1,200 / fruit",
              "Stand reset & mutation catalyst"
            ]
          ]
        }
      },
      {
        "id": "greenhouse-buff",
        "title": "3x Gang Greenhouse Speed Multipliers",
        "content": "Joining a Gang with an upgraded Base Greenhouse accelerates all crop growth timers by 300% (3x speed). A standard Rokakaka crop that normally requires 25 minutes to grow matures in just 8 minutes and 20 seconds inside a greenhouse, allowing mass mutation farming.",
        "tips": [
          "Coordinate greenhouse watering rotations with guild members to ensure crops never suffer moisture decay penalties."
        ]
      },
      {
        "id": "roka-mutations",
        "title": "Cultivating 33 Rokakaka Strains with 3% Base Odds",
        "content": "Every harvested Rokakaka has a base 3% probability of mutating into one of 33 specialized strains (such as Emerald Roka, Sapphire Roka, Amethyst Roka, or Opal Roka). Each mutated strain possesses unique equivalent exchange mechanics, removing specific sub-abilities or triggering Stand evolution without resetting player level.",
        "table": {
          "headers": [
            "Mutated Strain",
            "Base Odds",
            "Exchange Effect",
            "Stone Limb Penalty"
          ],
          "rows": [
            [
              "Opal Roka",
              "3% (Rare Roll)",
              "Triggers Stand Evolution (SPTW / TWAU)",
              "Petrifies left arm for 60s"
            ],
            [
              "Emerald Roka",
              "3% (Standard Roll)",
              "Removes Sub-Ability, keeps Stand",
              "None"
            ],
            [
              "Amethyst Roka",
              "3% (Standard Roll)",
              "Refills EX Awakening meter to 100%",
              "Petrifies right leg for 30s"
            ],
            [
              "Sapphire Roka",
              "3% (Standard Roll)",
              "Re-rolls Stand stat point distribution",
              "Temporary -15% movement speed"
            ]
          ]
        }
      },
      {
        "id": "produce-packaging",
        "title": "Packaging (+20% Value), Rain Bonus & Night Rokakaka Sales",
        "content": "Update 1 and November patches introduced major agricultural quality-of-life changes: packaging a plant adds +20% to its sale value, plants at Big Chop's Garden grow 20% faster during natural rain or November Rain, private server growth speed was doubled from 0.25x to 0.5x, and you can now sell excess Rokakakas directly to Big Chop at night (though the Food Safety Agency may ambush the transaction!).",
        "tips": [
          "Purchase empty glass jars in bulk from the Harbor Merchant to minimize packaging overhead costs."
        ]
      }
    ]
  },
  {
    "slug": "first-stand",
    "title": "Stand Out First Stand Tier List & Starter Selection Guide",
    "category": "Starter",
    "description": "Which first Stand should you keep in Stand Out? Comprehensive beginner tiering, why Rare beats Mythical early, and when to spend your first Lucky Arrow.",
    "readingTime": "6 min read",
    "updatedDate": "2026-11-16",
    "tableOfContents": [
      {
        "id": "starter-tier-list",
        "title": "Best Early Game Stands (Yellow Temperance, Beach Boy)"
      },
      {
        "id": "why-rarity-tricks",
        "title": "Why Rare Stands Often Beat Mythicals for Leveling"
      },
      {
        "id": "when-to-reset",
        "title": "Rules for When to Eat a Standard Rokakaka"
      },
      {
        "id": "storage-first",
        "title": "Storing Valuable Rolls with D'Arby Before Resets"
      },
      {
        "id": "starter-progression",
        "title": "Upgrading Your First Stand to Mid-Game Viability"
      }
    ],
    "sections": [
      {
        "id": "starter-tier-list",
        "title": "Best Early Game Stands (Yellow Temperance, Beach Boy)",
        "content": "When new players awaken their first Stand, they often chase flashy Pinnacle or Mythical rolls. However, in STAND OUT, several Rare tier Stands are vastly superior for early-game leveling and survival. Yellow Temperance provides passive 65% damage reduction via Living Armor and self-healing slime; Beach Boy offers unblockable long-range hook pulls that trivialize story bosses; Kraft Work allows complete immunity to projectile attacks.",
        "table": {
          "headers": [
            "Stand Name",
            "Rarity",
            "Starter Tier",
            "Primary Early Strength",
            "Recommendation"
          ],
          "rows": [
            [
              "Yellow Temperance",
              "Rare",
              "S Tier",
              "65% Damage Reduction & Slime DoT",
              "Must-Keep for starter leveling"
            ],
            [
              "Beach Boy",
              "Rare",
              "S Tier",
              "Safe long-range hook pulls through walls",
              "Must-Keep for boss cheesing"
            ],
            [
              "Kraft Work",
              "Epic",
              "A+ Tier",
              "Freezes incoming bullets & rocks",
              "Exceptional against SWAT mobs"
            ],
            [
              "Harvest",
              "Epic",
              "A Tier",
              "20% bonus Dalas & auto coin pickup",
              "Ideal for economic rush"
            ],
            [
              "The Sun",
              "Rare",
              "B Tier",
              "AOE heat aura and long-range snipes",
              "Good open-world mob clearing"
            ]
          ]
        }
      },
      {
        "id": "why-rarity-tricks",
        "title": "Why Rare Stands Often Beat Mythicals for Leveling",
        "content": "High-rarity Mythicals (like Mandom or Highway Star) require heavy Ability stat investment (60+ points) and precise combo execution to become effective. In contrast, Rare Stands have high base damage scaling that functions immediately with zero specialized gear, allowing new players to clear early storyline chapters twice as fast.",
        "tips": [
          "Do not feel pressured to reroll a Rare Stand until you reach Level 45+ and have acquired multiple Lucky Arrows."
        ]
      },
      {
        "id": "when-to-reset",
        "title": "Rules for When to Eat a Standard Rokakaka",
        "content": "Only reset your Stand if you roll a low-tier Stand that actively hinders your progression (such as Hey Ya! or Super Fly, which lack reliable offensive mob clearing). Even then, ensure you have at least 2 replacement Mysterious Arrows in your inventory before eating the fruit.",
        "warning": "Eating a Rokakaka resets your Stand immediately. If you have no arrows left, you will be stuck Standless until you can purchase another arrow."
      },
      {
        "id": "storage-first",
        "title": "Storing Valuable Rolls with D'Arby Before Resets",
        "content": "If you roll a high-tier Stand that you do not currently want to level (e.g. rolling The World when you prefer ranged zoning), never eat a Rokakaka to discard it! Visit Daniel J. D'Arby in the Casino and store the Stand in a Stand Storage Slot for 2,500 Dalas.",
        "steps": [
          "Travel to D'Arby's Casino parlor in Downtown.",
          "Speak to D'Arby and select \"Stand Storage\".",
          "Pay 2,500 Dalas to deposit your current Stand into an open slot.",
          "Awaken your new arrow while retaining safe access to your stored Stand."
        ]
      },
      {
        "id": "starter-progression",
        "title": "Upgrading Your First Stand to Mid-Game Viability",
        "content": "By pairing your starter Stand with the Hamon Sub-Ability and acquiring early accessories like the Student Uniform or Leather Gloves, a Rare Stand like Yellow Temperance can comfortably carry you all the way to Level 50 endgame raid content.",
        "tips": [
          "Focus stat points evenly into Health (50) and Damage (50) during your first 35 levels for maximum survivability."
        ]
      }
    ]
  },
  {
    "slug": "combat-mechanics",
    "title": "Stand Out Combat Mechanics Guide: Perfect Block, Posture & Combos",
    "category": "Combat & Moves",
    "description": "Master the complete combat system in Roblox STAND OUT. Covers the 0.12s Perfect Block parry window, 35-50 Block Posture HP, 25% Barrage Clash chip, 40% Combo Scaling cap, and 30s Universal Evasive (1 EX Bar, X key).",
    "readingTime": "9 min read",
    "updatedDate": "2026-11-26",
    "tableOfContents": [
      {
        "id": "perfect-block",
        "title": "Perfect Block & Parry Timing (0.12s Window)"
      },
      {
        "id": "block-posture",
        "title": "Block Posture HP & Guard Break Mechanics"
      },
      {
        "id": "barrage-clashes",
        "title": "Barrage Clash Chip Damage (25% Rate)"
      },
      {
        "id": "combo-scaling",
        "title": "Combo Damage Scaling & Anti-Teaming i-Frames"
      },
      {
        "id": "hp-movement-scaling",
        "title": "Movement Speed Scaling by Current HP"
      },
      {
        "id": "dash-m1-links",
        "title": "Dash Cooldown (1.2s) & M1 Combo Chains"
      },
      {
        "id": "time-stop-mechanics",
        "title": "Time Stop Durations & Overwriting Tech"
      },
      {
        "id": "universal-evasive",
        "title": "Universal Evasive (Burst Break Mechanic)"
      }
    ],
    "sections": [
      {
        "id": "perfect-block",
        "title": "Perfect Block & Parry Timing (0.12s Window)",
        "content": "Perfect Blocking is the core defensive skill separating intermediate players from elite duelists. By pressing Block (F) just as an incoming guardbreak attack connects within a precise 0.12-second window (buffed from 0.10s in the Nov 15 update), you completely negate the attack, inflict 0.20 seconds of severe endlag on the attacker, and instantly restore 20% of your maximum Block Posture HP up to full.",
        "tips": [
          "Watch opponent startup animations rather than projectile trails to time your 0.12s parry window.",
          "A successful parry leaves the attacker vulnerable to an unblockable M1 combo or heavy M2 counter.",
          "Multi-hit guardbreaks can be parried on their initial contact frame to stop the entire attack sequence."
        ],
        "table": {
          "headers": [
            "Combat Metric",
            "Current Value",
            "Pre-Patch Value",
            "Tactical Impact"
          ],
          "rows": [
            [
              "Parry Window",
              "0.12 seconds",
              "0.10 seconds",
              "+20% easier timing window to punish predictable guardbreaks"
            ],
            [
              "Attacker Endlag",
              "0.20 seconds",
              "0.00 seconds",
              "Guarantees free counter-attack before opponent can dodge"
            ],
            [
              "Block HP Restored",
              "20% Max Posture",
              "0%",
              "Allows defensive resets even under sustained pressure"
            ]
          ]
        }
      },
      {
        "id": "block-posture",
        "title": "Block Posture HP & Guard Break Mechanics",
        "content": "Blocking in Stand Out relies on an internal Posture gauge. Guard capacity starts at 35 Block HP at Level 1 and scales up to 50 Block HP at max level. Block HP regeneration begins 2.5 seconds after your last blocked hit and regenerates at 1.25 to 2.5 HP per second based on level. At 166 effective Health, both guard capacity and regeneration rate are boosted by 30%.",
        "steps": [
          "Blocked hits drain Posture based on the incoming raw damage of the attack.",
          "An M1 combo finisher inflicts twice its normal damage against enemy guard posture.",
          "The opening hit of a blockable grab drains 50% of the full grab sequence damage against guard.",
          "Guard sparks fade from bright white toward deep red as Posture diminishes.",
          "The hit that completely drains guard Posture is safely absorbed; the immediate next hit breaks guard.",
          "Shattering an enemy guard leaves them stunned and immediately restores 50% of their base guard HP."
        ],
        "warning": "Guard-breaking moves (such as Star Platinum's Ora Smash or Heaven's Door Prime's Book Rush) shatter guard immediately regardless of current Posture HP."
      },
      {
        "id": "barrage-clashes",
        "title": "Barrage Clash Chip Damage (25% Rate)",
        "content": "When two players initiate stand barrages (E) into each other simultaneously, a Barrage Clash triggers. Following the November 16 combat tuning, Barrage Clashes now inflict only 25% of each hit as chip damage (massively reduced from the oppressive 65% chip damage rate previously). This makes clashes much safer for testing opponent reaction times without losing half your health bar.",
        "tips": [
          "Use barrage clashes to stall out enemy awakening buffs or reposition team members.",
          "If your barrage is nearing its final strike, buffer a Dash (Q) or Evasive to avoid the opponent's finisher."
        ]
      },
      {
        "id": "combo-scaling",
        "title": "Combo Damage Scaling & Anti-Teaming i-Frames",
        "content": "To prevent unfair infinite true combos, Stand Out implements dynamic Combo Damage Scaling. Against other players, each attacker builds a separate combo tracking the percentage of your max HP dealt. After dealing 50% of your max HP, their next hit deals 25% less damage. Once they reach 99% HP dealt, maximum combo damage reduction rises to 40% (raised from 30% in the Update 1 evening hotfix).",
        "steps": [
          "Direct physical and Stand hits refresh the 2.5-second combo tracking window.",
          "Chip damage and Damage Over Time (DOT) count toward active combo totals but do not refresh the window.",
          "Anti-Teaming Protection: When 2 or more players hit the same target in rapid succession, the defender receives approximately 1.0 second of complete invulnerability frames (i-frames)."
        ],
        "tips": [
          "Reset your combo strings every 2.5 seconds in PvP to ensure attacks deal 100% unscaled damage.",
          "In Gang Wars or multi-man battles, stagger attacks with allies to prevent triggering enemy Anti-Teaming i-frames."
        ]
      },
      {
        "id": "hp-movement-scaling",
        "title": "Movement Speed Scaling by Current HP",
        "content": "Your character's movement agility is directly tied to your remaining health pool. At full HP (100%), you move at 100% of baseline sprinting speed. When reduced to 50% HP, your walkspeed slows to 82%. At critical health (1% HP or below), movement drops to 65% of normal speed. Healing through sub-abilities, items, or Crazy Diamond moves restores your speed along this exact curve.",
        "tips": [
          "High Health builds (166 Health = 300 HP) stay above the 50% HP threshold longer, preserving optimal movement speed.",
          "Use mobility tools like Kiss's Double Trouble (+50% leg speed) or Enrico's Gear (+15% walkspeed) to offset low-HP slowdown."
        ]
      },
      {
        "id": "dash-m1-links",
        "title": "Dash Cooldown (1.2s) & M1 Combo Chains",
        "content": "Mobility and basic attacks received substantial overhauls in mid-November. Dash cooldown is now standardized at 1.20 seconds for all characters (reduced from ~1.7s previously), calculated the moment you initiate the dash. Stand M1 hitboxes are 5% wider and reach slightly behind the Stand to prevent close-range whiffs. The recovery endlag after the final M1 in a string is 0.85s on miss/block and 0.70s on hit, with every M1 link stunning the target 0.16s past the next blow.",
        "steps": [
          "M2 Recovery De-linked: You can now execute a heavy M2 attack immediately following an M1 combo without cooldown delay.",
          "Dash Cancelling: Initiating a normal dash near the conclusion of a light attack preserves the next punch in the string.",
          "Mobile Blocking Toggle: Mobile players can enable toggle blocking in settings, allowing single-tap guard and fluid camera swiping."
        ]
      },
      {
        "id": "time-stop-mechanics",
        "title": "Time Stop Durations & Overwriting Tech",
        "content": "Time Stop (TS) remains one of the premier mechanics in Stand Out, available to Star Platinum, The World, SPTW, and TWAU. As of the Nov 16 update, Full Time Stop lasts 5.0 seconds at base Ability up to 10.0 seconds at max Ability (down from 6s to 14s). Quick Time Stop lasts 2.5 seconds base up to 6.0 seconds max (down from 3s to 7s). At 100 Ability, Time Stop duration doubles.",
        "steps": [
          "Overwriting Time Stop: If an opponent initiates Time Stop, any player holding a Time Stop stand can press their TS input during the freeze to overwrite and seize control of the freeze window.",
          "Road Roller Tuning: Road Roller now flies higher into the sky, lands approximately 2.0s after activation, and requires 1 EX Bar.",
          "Anti-Camping: Combat-tagged players who jump into the ocean to stall out Time Stop or combat tags are now attacked by a predatory offshore shark."
        ]
      },
      {
        "id": "universal-evasive",
        "title": "Universal Evasive (30s Cooldown Burst Break)",
        "content": "Introduced in Update 1 and tuned across the Nov 22–24 hotfixes, Universal Evasive gives every player a standardized combo breaker regardless of Stand. Press X (or D-Pad Left on console / mobile Evasive button) to spend 1 EX Bar, break hitstun or ragdoll, and knock nearby attackers away. Note: The initial 45s cooldown was lowered to 30s on Nov 22, and the 10 flat burst damage was removed on Nov 24.",
        "steps": [
          "Keybind / Activation: Press X on PC (D-Pad Left on Console) while grounded, stunned, or caught in an enemy combo.",
          "EX Gauge Requirement: Consumes exactly 1 EX Bar (25% of your total EX meter). Cannot be activated with an empty EX bar.",
          "Base Cooldown: 30.0 seconds (reduced from 45.0s in the Update 1 evening patch). Can also be toggled into the skill list.",
          "Zero Burst Damage (Nov 24 Hotfix): The original 10 flat burst damage was removed on November 24; Universal Evasive is now a pure defensive knockback and combo breaker."
        ],
        "tips": [
          "Save your 1 EX Bar to break high-commitment setups like The Hand Erasure Combo or Crazy Diamond launchers.",
          "If an opponent baits out your Universal Evasive early, you remain vulnerable to full combo chains for the next 30 seconds."
        ]
      }
    ]
  },
  {
    "slug": "bad-company-rework",
    "title": "Bad Company Rework Guide (Nov 24): New Moves, Unit HP, Combos & Counters",
    "category": "Combat & Moves",
    "description": "Complete guide to the November 24 Bad Company rework in Roblox STAND OUT. Covers tripled pilot range, 180-stud Maneuver, Flanking, Landmine, Airstrike (2 EX), unit HP nerfs, optimal builds, and counters.",
    "readingTime": "10 min read",
    "updatedDate": "2026-11-26",
    "tableOfContents": [
      {
        "id": "before-after",
        "title": "Rework Breakdown: Before vs. After (Nov 24)"
      },
      {
        "id": "updated-kit",
        "title": "Complete Reworked Moveset & Unit Stats"
      },
      {
        "id": "optimal-build",
        "title": "Best Playstyle & Level 75 Stat Build (225 SP)"
      },
      {
        "id": "combos-micro",
        "title": "Recommended Combos & Squad Micro"
      },
      {
        "id": "pvp-pve",
        "title": "PvP Ranked vs. PvE Raid Performance"
      },
      {
        "id": "pros-cons-counters",
        "title": "Pros, Cons & How to Counter Bad Company"
      },
      {
        "id": "faq",
        "title": "Bad Company Rework FAQ"
      }
    ],
    "sections": [
      {
        "id": "before-after",
        "title": "Rework Breakdown: Before vs. After (Nov 24)",
        "content": "On November 24, 2026, Studio Umbra: Europa overhauled Bad Company from a passive turret-camping Stand into a high-mobility, micro-intensive tactical army. While every unit took steep HP nerfs and per-type replacement timers, Bad Company gained tripled pilot range, 180-stud deployment reach, two new base moves (Flanking & Landmine), a new 2-EX Airstrike, and universal Paratroopers.",
        "table": {
          "headers": [
            "Mechanic / Stat",
            "Pre-Rework (Nov 22)",
            "Post-Rework (Nov 24)",
            "Gameplay Impact"
          ],
          "rows": [
            [
              "Pilot Range",
              "1x Baseline",
              "3x Tripled Range",
              "Scout & pressure across entire districts"
            ],
            [
              "Maneuver Distance",
              "60 Studs",
              "180 Studs (+Hold Recall)",
              "Absorbed ATTENTIONNN; 3x perimeter reach"
            ],
            [
              "New Base Moves",
              "Focus Fire, Maneuver, ATTENTIONNN",
              "+Flanking (3s) & +Landmine (2s)",
              "Adds orbiting pressure & 3-charge knockdown traps"
            ],
            [
              "Paratroopers",
              "Base Move (Infantry only, 18s)",
              "1 EX Bar (21s, ANY unit type)",
              "Air-drop Tanks, Helis, or Berets up to 180 studs"
            ],
            [
              "Airstrike",
              "Not in kit",
              "2 EX Bars (32s CD)",
              "3-missile guardbreaking jet strike in pilot range"
            ],
            [
              "Infantry / Beret HP",
              "30 HP / 24 HP",
              "10 HP / 5 HP",
              "Fragile; wiped easily if left unguarded"
            ],
            [
              "Tank / Helicopter HP",
              "60 HP / 36 HP",
              "45 HP / 15 HP",
              "Tanks absorb 50% projectiles; Helis very fragile"
            ],
            [
              "Replacement Cooldowns",
              "Flat 25s for all units",
              "10s Inf / 16s Beret / 25s Tank / 30s Heli",
              "Recall wounded units manually to bypass timers"
            ],
            [
              "Piloted Unit Speed",
              "1x Baseline",
              "Inf/Beret +50%, Heli +100% (2x)",
              "Massive chase and hit-and-run speed"
            ],
            [
              "Alternate Skins",
              "Legacy recolors",
              "Urban, Special Forces, Desert",
              "Every unit model & color scheme redone"
            ]
          ]
        }
      },
      {
        "id": "updated-kit",
        "title": "Complete Reworked Moveset & Unit Stats",
        "content": "Bad Company now runs 8 base abilities/passives and 4 EX awakening moves on a strict 14-point Military Might budget (3 Infantry at 2 Might each, 1 Green Beret at 2, 1 Tank at 3, 1 Helicopter at 3). Tap G to cycle unit types (+25% damage bonus for the selected type) or hold G to command the whole army.",
        "table": {
          "headers": [
            "Move / Key",
            "Cost / Cooldown",
            "Scaling / Rules",
            "Tactical Function"
          ],
          "rows": [
            [
              "Focus Fire (E)",
              "15s CD (6s mark)",
              "100% Ability (1.75x at 166)",
              "All units fire on marked target; ends on sub-ability cast"
            ],
            [
              "Maneuver (R)",
              "1s CD (180 studs)",
              "Tap: Hold Spot / Hold: Recall",
              "Position squads up to 180 studs away or call them back"
            ],
            [
              "Flanking (T)",
              "3s CD",
              "50% Ability Bonus",
              "Single unit type orbits enemy; fires on Focus Fire or Pilot M1"
            ],
            [
              "Landmine (Y)",
              "2s CD (3 charges)",
              "100% Ability",
              "Knockdown mine (22s recharge on hit, 1s on expire)"
            ],
            [
              "Paratroopers (1 EX)",
              "1 Bar / 21s CD",
              "Up to 180 studs",
              "Drops selected unit type (requires open slot & Might)"
            ],
            [
              "Airstrike (2 EX)",
              "2 Bars / 32s CD",
              "100% Ability (Guardbreak)",
              "Jet drops 3 guardbreaking missiles (perfect blockable)"
            ],
            [
              "Full Scale Warfare (3 EX)",
              "3 Bars / 48s CD",
              "6s Reinforcements",
              "Fills all empty squad slots temporarily"
            ],
            [
              "Atomic Strike (4 EX)",
              "4 Bars / 75s CD",
              "100% Ability (42 Base + Burn)",
              "14-stud nuke with 3-second air target window"
            ]
          ]
        },
        "tips": [
          "Tank shells and Helicopter missiles now flash a visual warning before firing—Tank shells break guard (perfect blockable) and Helicopter missiles can be blocked normally.",
          "You can reposition the Bad Company unit status HUD anywhere on your screen via the HUD layout editor."
        ]
      },
      {
        "id": "optimal-build",
        "title": "Best Playstyle & Level 75 Stat Build (225 SP)",
        "content": "Because Focus Fire, Landmine, Airstrike, and Atomic Strike all scale 100% with Ability—while your fragile 5–15 HP squads force you to stay alive manually—the optimal Level 75 (225 SP) allocation balances maximum Ability with durable Health.",
        "steps": [
          "Recommended Stats (225 SP): 100 Ability / 85 Health / 40 Damage (or 100 Ability / 100 Health / 25 Damage for Ranked 1v1 survival).",
          "Best Sub-Ability: Caesar Hamon — Bubble Launcher and Bubble Barrier lock melee rushers away from your body while your army pelts them from range. Avoid Vampire if you rely on long-range daylight zoning without Shadow Cloak.",
          "Key Accessories: Equip Jotaro's Set (+15 Ability, +10% DMG) or Mangaka Elite Set (+10 Ability) to push Ability past 115–120 for boosted Landmine and Airstrike bursts."
        ]
      },
      {
        "id": "combos-micro",
        "title": "Recommended Combos & Squad Micro",
        "content": "Post-rework Bad Company rewards proactive unit placement and manual recalls rather than dumping all 14 Might into melee range.",
        "steps": [
          "1. Standard Zoning Loop: Tap G to select Infantry (+25% dmg) → Flanking (T) onto enemy → Focus Fire (E) → Plant Landmine (Y) at your feet to punish anyone dashing in.",
          "2. Airstrike Guardbreak Confirm: Bait a block with Helicopter gunfire → Cast Airstrike (2 EX) behind their guard → Follow with Maneuver-recalled Tanks or Paratroopers Tank drop.",
          "3. Green Beret Stealth Ambush: Select Green Berets → Pilot (Ctrl) within 10 studs to trigger automatic 4s ambush stabs → Immediately place a Landmine under the piloted Beret before it expires.",
          "4. Might Conservation Rule: Always Hold R (Maneuver Recall) before a 10 HP Infantry squad or 15 HP Helicopter dies to AoE—recalling frees Military Might instantly instead of waiting 10–30 seconds."
        ]
      },
      {
        "id": "pvp-pve",
        "title": "PvP Ranked vs. PvE Raid Performance",
        "content": "In PvP (S Tier), Bad Company dominates open arenas and Gang Wars where tripled Pilot Range and 180-stud Maneuvers let you control territory safely, though sharp duelists can snipe your 15 HP Helicopter out of the air. In PvE Raids like 77 Rings and Highway Star (S+ Tier), Tanks soak boss projectiles at 50% damage reduction while Landmines, Airstrike, and Atomic Strike shred clustered undead waves.",
        "tips": [
          "In 77 Rings Stage 1 & 3, station Tanks at choke doorways with Maneuver (R) and save Atomic Strike (4 EX) for Tarkus and DIO.",
          "Remember: casting a Sub-Ability move cancels an active Focus Fire mark, so finish your Focus Fire window before throwing Hamon bubbles."
        ]
      },
      {
        "id": "pros-cons-counters",
        "title": "Pros, Cons & How to Counter Bad Company",
        "content": "Knowing both Bad Company's strengths and its post-rework vulnerabilities is essential whether you main Keicho's army or fight against it in Ranked.",
        "table": {
          "headers": [
            "Strengths (Pros)",
            "Weaknesses (Cons)",
            "How to Counter It"
          ],
          "rows": [
            [
              "3x Pilot Range & 180-stud Maneuver/Paratroopers",
              "Paper-thin unit HP (Infantry 10, Berets 5, Heli 15)",
              "Snipe Helicopters & Infantry first to lock Might for 10–30s"
            ],
            [
              "Flanking + 3-charge Landmines control melee space",
              "Focus Fire (15s CD) cancels if user casts a Sub-Ability",
              "Dash twice immediately to shake off Green Beret ambushes"
            ],
            [
              "2-EX Airstrike & 4-EX Atomic Strike huge AoE burst",
              "Tank (25s) & Heli (30s) replacement cooldowns are punishing",
              "Watch flash warnings to Perfect Block Tank shells & Airstrike missiles"
            ]
          ]
        }
      },
      {
        "id": "faq",
        "title": "Bad Company Rework FAQ",
        "content": "Quick answers to the most common post-rework questions. Visit our main Bad Company Stand page, Tier List, or Best Stands guide for full roster comparisons.",
        "steps": [
          "Where did ATTENTIONNN go? ATTENTIONNN was merged into Maneuver (R)—hold R to recall stationed or flanking units.",
          "Why do my units deal half fire rate when I swing M1? Update 1 reduced unit firing frequency during player M1 swings so Keicho cannot stack full melee + full army DPS simultaneously.",
          "What are the new Bad Company skins? Urban, Special Forces, and Desert—unlocked and swappable via the Alt Colors Phone app."
        ]
      }
    ]
  },
  {
    "slug": "77-rings-raid",
    "title": "77 Rings Raid Guide: Stages, Tarkus & DIO Boss Strategy",
    "category": "Endgame & Raids",
    "description": "Complete dungeon guide for the 77 Rings Bizarre Adventure raid in Roblox STAND OUT. Wave-by-wave walkthrough covering Donatello entry, graveyard undead waves, broken bridge parkour, hypothermia campfires, Tarkus & DIO boss strategies, and Raid Shop token rewards.",
    "readingTime": "11 min read",
    "updatedDate": "2026-11-22",
    "tableOfContents": [
      {
        "id": "entry-reqs",
        "title": "Raid Entry & Party Requirements"
      },
      {
        "id": "stage-1",
        "title": "Stage 1: Graveyard Undead Gauntlet"
      },
      {
        "id": "stage-2",
        "title": "Stage 2: Broken Bridge Parkour & Trainee Knights"
      },
      {
        "id": "stage-3",
        "title": "Stage 3: Training Hall & Tarkus Boss Encounter"
      },
      {
        "id": "stage-4",
        "title": "Stage 4: Frozen Mountain Ascent & Hypothermia"
      },
      {
        "id": "stage-5",
        "title": "Stage 5: Shrine of DIO Boss Battle"
      },
      {
        "id": "rewards-shop",
        "title": "77 Rings Drops, Token Shop & Leaderboard Chips"
      }
    ],
    "sections": [
      {
        "id": "entry-reqs",
        "title": "Raid Entry & Party Requirements",
        "content": "The 77 Rings Bizarre Adventure is an endgame dungeon challenge set in an ancient, brutal knights' training ground. Players enter the raid by speaking to Donatello in the Honolulu underground. While solo runs are viable for high-damage Pinnacle Stand builds, running in a coordinated party of 2 to 4 players is strongly recommended for consistent clears.",
        "steps": [
          "Location: Speak to Donatello in the Honolulu sewer catacombs.",
          "Recommended Level: Level 35 to 75 (max stat allocation recommended for survivability).",
          "Team Size: 1 to 4 players (scaling mob health based on party headcount).",
          "No Cooldown Penalty: Failing or dying inside the raid no longer triggers a cooldown timer.",
          "Boss Kill Full Heal: Defeating any raid boss instantly heals your character to 100% HP."
        ],
        "tips": [
          "Equip Hamon (Jonathan or Zeppeli Path) for passive +25% bonus damage against undead knights and DIO.",
          "Carry at least 2 Hot Cocoa or Warm Broth consumables to counter cold stacks during mountain scaling."
        ]
      },
      {
        "id": "stage-1",
        "title": "Stage 1: Graveyard Undead Gauntlet",
        "content": "Upon spawning into the ancient graveyard, the iron gates slam shut behind you. You must survive 3 consecutive waves of undead knights emerging from tombs. Each wave consists of 4 to 8 undead enemies with aggressive gap-closers and sweeping blade swings.",
        "steps": [
          "Wave 1: Basic Skeleton Knights (low HP, vulnerable to AoE barrages).",
          "Wave 2: Armored Husk Knights with shields (require heavy M2 attacks or guardbreaks to crack).",
          "Wave 3: Undead Berserkers with high movement speed and lunging cleaves.",
          "Gather near the center crypt so mob spawns funnel together into your Stand's AoE attacks."
        ],
        "warning": "The Nov 16 patch resolved a bug where players were permanently locked out if the cemetery gate closed. All party members now spawn inside the combat arena automatically."
      },
      {
        "id": "stage-2",
        "title": "Stage 2: Broken Bridge Parkour & Trainee Knights",
        "content": "Stage 2 begins with a challenging platforming sequence across a crumbling mountain chasm. Spikes jut periodically from broken bridge platforms, and freezing winds apply early hypothermia stacks if you linger too long.",
        "steps": [
          "Time your jumps between stone bridge fragments to avoid retractable spike floor traps.",
          "Use double jump and ledge climbing to scramble up sheer cliffs without tumbling into the abyss.",
          "At the foot of the mountain, defeat a wave of unarmed Trainee Knights using heavy fist strikes.",
          "Ascend the spiraling mountain trail to reach the iron door of the Training Hall."
        ],
        "tips": [
          "Stands with vertical mobility (such as Kiss's Return Trip, Super Fly, or The Hustle) can bypass tricky bridge gaps.",
          "Trainee Knights have no ranged attacks; maintain distance and pick them off with projectiles."
        ]
      },
      {
        "id": "stage-3",
        "title": "Stage 3: Training Hall & Tarkus Boss Encounter",
        "content": "Enter the subterranean Training Hall and fight through armored Hall Guards while dodging floor spikes and collapsing tile traps. Once past the gauntlet, you are locked into the arena chamber of Tarkus, a towering knight boss empowered by vampiric strength.",
        "steps": [
          "Dodge Tarkus's Chain Crush: Tarkus winds up an enormous chain that deals devastating guardbreak damage in a 30-stud cone.",
          "Parry his Heavy Stomp: The stomp has a distinct 0.5s telegraph that matches the 0.12s Perfect Block window.",
          "Avoid the Vampiric Slam: When Tarkus roars and leaps into the ceiling, dash away to avoid the AoE ground impact.",
          "After Tarkus falls, navigate the miniature escape labyrinth to emerge onto the upper frozen ridge."
        ],
        "tips": [
          "Tarkus has high physical armor but takes 30% increased damage from Hamon Overdrive strikes.",
          "His evasive skill cooldown was increased by 6 seconds in the Nov 15 update, giving larger punish windows."
        ]
      },
      {
        "id": "stage-4",
        "title": "Stage 4: Frozen Mountain Ascent & Hypothermia",
        "content": "The most punishing environmental hazard in the raid is the frozen mountain climb. A severe blizzard constantly builds hypothermia stacks on your character. If your cold meter reaches 100%, you suffer rapid damage over time and an 80% walkspeed penalty.",
        "steps": [
          "Monitor your Cold Gauge on the right side of the screen.",
          "Stand near burning Campfires along the climb path to instantly warm up and purge cold stacks.",
          "Watch for falling icicle shadows on the ground; getting hit inflicts heavy stagger and freezing.",
          "Leap across narrow ice bridges and scale the final rock wall to reach DIO's mountain shrine."
        ]
      },
      {
        "id": "stage-5",
        "title": "Stage 5: Shrine of DIO Boss Battle",
        "content": "The climax of the 77 Rings Raid pits your party against an empowered boss incarnation of DIO. DIO possesses enhanced Vampiric abilities, rapid teleportation dashes, Space Ripper Stingy Eyes eye lasers, and the ability to summon elite zombie knights.",
        "steps": [
          "Watch for Space Ripper Stingy Eyes: DIO raises both hands to his brow; dodge horizontally or parry.",
          "Clear Knight Summons: When DIO channels his summon at 66% and 33% HP, focus down the 3 minion knights immediately.",
          "Beware Contact Freeze: If DIO's hands glow cyan, do not engage in close M1 trades or your Stand will be frozen.",
          "Slay DIO to complete the raid: Defeating DIO triggers an instant 100% full heal and spawns the reward chest."
        ],
        "tips": [
          "Hamon users can nullify DIO's contact freeze using Sunlight Yellow Overdrive super armor.",
          "Time Stop stands can freeze DIO during his minion summoning phase to interrupt the cast."
        ]
      },
      {
        "id": "rewards-shop",
        "title": "77 Rings Drops, Token Shop & Leaderboard Chips",
        "content": "Completing the 77 Rings Raid rewards Raid Tokens, Dalas cash, EXP, and rolls for rare crafting materials including Pluck sword parts and Stone Masks. Tokens can be redeemed at the 77 Rings Shop NPC outside the entrance.",
        "table": {
          "headers": [
            "Shop Item",
            "Token Price",
            "Usage & Value"
          ],
          "rows": [
            [
              "Mysterious Arrow",
              "7 Tokens",
              "Standard Stand summoning arrow (~0.50% Pinnacle chance)"
            ],
            [
              "4x Arrow Parts",
              "8 Tokens",
              "Essential crafting component for Lucky and Bizarre Arrows"
            ],
            [
              "Stone Mask",
              "10 Tokens",
              "Required consumable to awaken the Vampire Sub-Ability"
            ],
            [
              "Lucky Arrow",
              "40 Tokens",
              "Guarantees Rare or higher Stand with 1.5% Pinnacle rate"
            ],
            [
              "Bizarre Arrow",
              "80 Tokens",
              "Premier crafting arrow with 4.4% Pinnacle rate (excludes low tiers)"
            ]
          ]
        },
        "tips": [
          "Weekly Leaderboard Rewards: Finishing in the Top 3 of the weekly 77 Rings clear time leaderboard awards the exclusive Heaven's Door Prime Stand Chip!",
          "Hard difficulty mode yields double token drops and higher Pluck fragment drop rates."
        ]
      }
    ]
  },
  {
    "slug": "stand-out-skins",
    "title": "Stand Out Skins & Alt Colors Guide: Unlocks, Customizer & Catalog",
    "category": "Progression",
    "description": "Comprehensive guide to Stand Skins and Alternative Color Schemes in Roblox STAND OUT. Covers the revamped Alt Colors phone app, Bad Company's reworked Urban/Special Forces/Desert skins, and new SPTW, The Hand, Crazy Diamond, and Kiss palettes.",
    "readingTime": "8 min read",
    "updatedDate": "2026-11-26",
    "tableOfContents": [
      {
        "id": "how-skins-work",
        "title": "How Alt Stand Colors Work in Stand Out"
      },
      {
        "id": "prerequisites",
        "title": "Prerequisites: Phone (Z) & Meryl Mei Qi"
      },
      {
        "id": "how-to-equip",
        "title": "Step-by-Step: Equipping & Swapping Alt Skins"
      },
      {
        "id": "roster-availability",
        "title": "Full Stand Roster Skin Availability (36 Stands)"
      },
      {
        "id": "catalog-supporters",
        "title": "Catalog Supporter Ranks & Exclusive Rewards"
      },
      {
        "id": "customizer-settings",
        "title": "Customizer Settings, Poses & Emote Wheel"
      }
    ],
    "sections": [
      {
        "id": "how-skins-work",
        "title": "How Alt Stand Colors Work in Stand Out",
        "content": "Unlike many JoJo Roblox games that lock alternate Stand skins behind 0.01% lucky arrow rolls, Studio Umbra: Europa designed Stand Out's Alternative Color Schemes as quest-obtainable cosmetic palettes. Every player who unlocks a Stand can earn its Alt 1, Alt 2, and Alt 3 color schemes through gameplay milestones. Alt skins are strictly cosmetic and carry zero combat stat buffs or hidden damage multipliers.",
        "tips": [
          "Official Trello notes: If an alt color appears slightly untextured or off in-game, it is a developer placeholder while textures are refined.",
          "Equipping an Alt skin does not consume arrows or risk rerolling your current Stand."
        ]
      },
      {
        "id": "prerequisites",
        "title": "Prerequisites: Phone (Z) & Meryl Mei Qi",
        "content": "To access the skin customization interface, you must complete the early storyline prerequisites to unlock your in-game Smartphone.",
        "steps": [
          "Complete Hey Ya!'s introductory beach tutorial on starting the game.",
          "Travel to the Iko Iko boutique shop in Downtown Honolulu.",
          "Speak with NPC Meryl Mei Qi to receive your in-game Phone.",
          "Press Z (or tap the Phone icon on mobile) to bring up the device application menu."
        ]
      },
      {
        "id": "how-to-equip",
        "title": "Step-by-Step: Equipping & Swapping Alt Skins",
        "content": "Once your Phone is unlocked, swapping between unlocked color palettes can be done anytime outside active combat.",
        "steps": [
          "Ensure your desired Stand is currently equipped (Stands stored with D'Arby cannot have skins modified until withdrawn).",
          "Open your Phone by pressing Z on PC or tapping the Phone widget on mobile.",
          "Tap the 'Alt Stand Colors' application on the home screen.",
          "Select your active Stand from the roster list.",
          "Choose between Default, Alt 1, Alt 2, or Alt 3 palettes and confirm.",
          "Summon your Stand (E) to view the freshly applied color scheme."
        ],
        "warning": "You cannot swap skins while in combat or during an active gang war match."
      },
      {
        "id": "roster-availability",
        "title": "Stand Skin Updates: Bad Company, SPTW, The Hand & Crazy Diamond",
        "content": "Update 1 (Nov 22) revamped the Alt Colors Phone App and restored/added alternate palettes across key Stands, followed by the November 24 Bad Company rework which completely rebuilt every miniature unit's alternate color schemes into Urban, Special Forces, and Desert variants.",
        "tips": [
          "Bad Company (Nov 24 Rework): All unit alt colors completely redone as Urban, Special Forces, and Desert.",
          "Star Platinum: The World & The Hand (Nov 22): Alternate color palettes restored and updated in the revamped Alt Colors app.",
          "Crazy Diamond & Kiss (Nov 24): New alternate color schemes added for both Stands.",
          "Big Mouth Strikes Again & The MATTEKUDASAI: Fixed BMSA alt color tab sizing and MATTEKUDASAI net/structure tracking."
        ]
      },
      {
        "id": "catalog-supporters",
        "title": "Catalog Supporter Ranks & Exclusive Rewards",
        "content": "The in-game Catalog allows players to publish custom outfits, accessories, and builds. When other players save or purchase your public creations, they become your supporters. Earning supporters unlocks prestigious ranks, cosmetic gear, and exclusive Stand chips.",
        "table": {
          "headers": [
            "Supporter Rank",
            "Supporters Required",
            "Unlocked Rewards"
          ],
          "rows": [
            [
              "ROUGH SKETCH",
              "10 Supporters",
              "Rohan's Earrings accessory"
            ],
            [
              "STORYBOARD",
              "25 Supporters",
              "Rohan's G-Pen accessory"
            ],
            [
              "INKED",
              "100 Supporters",
              "Heaven's Door Hat + 2,500 Dalas"
            ],
            [
              "SERIALIZED",
              "500 Supporters",
              "Rohan's Pants accessory"
            ],
            [
              "BESTSELLER",
              "2,000 Supporters",
              "Rohan's Jacket + 10,000 Dalas"
            ],
            [
              "MASTERPIECE",
              "4,000 Supporters",
              "Gradient Name chat styling"
            ],
            [
              "HEAVEN'S DOOR",
              "8,000 Supporters",
              "Builder+ Title & Heaven's Door Prime Stand Chip"
            ]
          ]
        }
      },
      {
        "id": "customizer-settings",
        "title": "Customizer Settings, Poses & Emote Wheel",
        "content": "Beyond color palettes, players can customize their character's presence using the expanded pose and emote system.",
        "steps": [
          "Press P to execute your Stand's signature JoJo pose (charges EX gauge at 1%/sec).",
          "Press L to open the 67-Emote Wheel; players can rotate freely during emote animations.",
          "Visit the Photography Room in Lenny's garage to capture high-res screenshots for the in-game Gallery app.",
          "Toggle 'Map Clutter' in settings to remove ambient debris and maximize performance in 60 FPS combat."
        ]
      }
    ]
  },
  {
    "slug": "ranked-mode",
    "title": "Stand Out Ranked Mode Guide: ELO Tiers, 1v1 Arena & Dolly Dagger",
    "category": "Endgame & Raids",
    "description": "Comprehensive guide to 1v1 Ranked Mode in Roblox STAND OUT. Covers Level 60 entry, 5s respawns, removed health packs, 3x point gain, 30s Universal Evasive, and unlocking Dolly Dagger at 1,850 ELO.",
    "readingTime": "8 min read",
    "updatedDate": "2026-11-26",
    "tableOfContents": [
      {
        "id": "entry-requirements",
        "title": "Entry Requirements & Matchmaking Format"
      },
      {
        "id": "competitive-rules",
        "title": "Competitive Rules & Arena Mechanics"
      },
      {
        "id": "elo-tier-structure",
        "title": "ELO Rating Tiers & Division Thresholds"
      },
      {
        "id": "dolly-dagger-unlock",
        "title": "1,850 ELO Milestone: Unlocking Dolly Dagger"
      },
      {
        "id": "top-meta-picks",
        "title": "Ranked Meta Stand Tier Picks & Matchups"
      },
      {
        "id": "penalty-system",
        "title": "Combat Tag Leaver Penalties & Anti-Disconnect"
      }
    ],
    "sections": [
      {
        "id": "entry-requirements",
        "title": "Entry Requirements & Matchmaking Format",
        "content": "Ranked Mode Beta is the premier competitive 1v1 arena experience in STAND OUT. Designed for endgame players who have perfected their parry timings and builds, the queue matches combatants worldwide based on hidden MMR and visible ELO score.",
        "steps": [
          "Level Gate: Requires Level 60 minimum. Standless characters and players below Level 60 cannot enter the queue.",
          "Queue Access: Enter matchmaking via the in-game Phone app under the Ranked icon, or speak to the Arena Gatekeeper at the Stadium.",
          "Format: Best-of-3 round format inside enclosed gladiator arenas (no environmental out-of-bounds stalling).",
          "Match Clock: 3 minutes per round. If the timer expires, the duelist with higher remaining HP percentage wins the round."
        ],
        "tips": [
          "Reach max Level 75 and allocate all 225 stat points before entering Ranked, as raw HP and Power stats directly affect combo survival.",
          "Warm up parry timings in free-for-all public servers first to calibrate your 0.12s reaction window."
        ]
      },
      {
        "id": "competitive-rules",
        "title": "Competitive Rules & Arena Mechanics",
        "content": "Ranked Mode Beta enforces strict competitive 1v1 rules updated during Update 1 (Nov 22–24): health packs were completely removed from Ranked arenas, respawn timers are fixed at 5 seconds with restored spawn invulnerability, combat tags remain active between stocks, and Ranked point gain was tripled (3x).",
        "steps": [
          "5-Second Respawns & No Health Packs: Health packs are removed in Ranked; respawns take 5 seconds with spawn invulnerability restored.",
          "Tripled (3x) Point Gain & Persistent Combat Tag: Ranked points earn at 3x rate, and combat tags stay active between stocks to prevent disconnect dodging.",
          "Consumable Lock & Rain Walk Cap: Healing items, food, and Rokakakas are disabled; Catch The Rainbow Rain Walk height/duration is capped in Ranked.",
          "Universal Evasive: Press X (1 EX Bar, 30s cooldown, 0 burst damage) to break out of hitstun or ragdoll.",
          "Time Stop & Bug Fixes: Fixed Time Stop failing to freeze opponents, King Crimson frog spawns, Hamon Pluck moves, and Cheap Trick killing NPCs in Ranked."
        ],
        "warning": "Disabling player shadows or using uncapped FPS external injectors that tamper with physics ticks is monitored and subject to competitive matchmaking bans."
      },
      {
        "id": "elo-tier-structure",
        "title": "ELO Rating Tiers & Division Thresholds",
        "content": "All players begin their competitive journey at 1,000 baseline ELO. Winning matches earns between +18 and +32 ELO depending on the opponent's rating differential, while defeats deduct a similar amount.",
        "table": {
          "headers": [
            "Rank Tier",
            "ELO Range",
            "Division Badge",
            "Seasonal Rewards"
          ],
          "rows": [
            [
              "Bronze",
              "1,000 – 1,199 ELO",
              "Bronze Crest",
              "5,000 Dalas + 1 Lucky Arrow"
            ],
            [
              "Silver",
              "1,200 – 1,399 ELO",
              "Silver Crest",
              "15,000 Dalas + 2 Lucky Arrows"
            ],
            [
              "Gold",
              "1,400 – 1,599 ELO",
              "Gold Crest",
              "30,000 Dalas + Bizarre Arrow"
            ],
            [
              "Platinum",
              "1,600 – 1,749 ELO",
              "Platinum Crest",
              "50,000 Dalas + Platinum Nameplate"
            ],
            [
              "Diamond",
              "1,750 – 1,849 ELO",
              "Diamond Crest",
              "75,000 Dalas + Glowing Diamond Aura"
            ],
            [
              "Master",
              "1,850 – 2,099 ELO",
              "Master Crest",
              "Dolly Dagger Stand Chip + Exclusive Ranked Title"
            ],
            [
              "Pinnacle (Top 50)",
              "2,100+ ELO",
              "Grandmaster Crest",
              "Golden Stand Aura + Top 50 Leaderboard Badge"
            ]
          ]
        }
      },
      {
        "id": "dolly-dagger-unlock",
        "title": "1,850 ELO Milestone: Unlocking Dolly Dagger",
        "content": "The crowning achievement of Ranked Mode Beta is reaching 1,850 ELO (Master division). Upon reaching this rating, the system automatically deposits the Dolly Dagger Stand Chip into your inventory or D'Arby vault. Dolly Dagger (inspired by Purple Haze Feedback's Vittorio Cataldi) features unparalleled damage-reflection counterplay (70% standard reflect, 100% ground pin reflect), making it one of the most fearsome duelists in the entire game.",
        "steps": [
          "Reach 1,850 ELO in standard 1v1 Ranked ladder.",
          "Collect your Dolly Dagger Chip directly from the ranked rewards tab in your Phone.",
          "Even if your rating subsequently drops below 1,850 later in the season, your unlocked Dolly Dagger chip is permanent."
        ],
        "tips": [
          "Dolly Dagger excels against burst brawlers like Star Platinum, The Hand, and Crazy Diamond by turning their high-damage swings back onto themselves."
        ]
      },
      {
        "id": "top-meta-picks",
        "title": "Ranked Meta Stand Tier Picks & Matchups",
        "content": "In Season 1, mobility, burst punishers, and defensive counters dominate the high-ELO ladder.",
        "steps": [
          "Star Platinum & SPTW (Z Tier): Reliable 0.12s parry punishes, +15% Nov 22 SPTW damage buff, and Time Stop combo extensions.",
          "Crazy Diamond (Pinnacle / S+ Tier): Stun-immune Diamond Wall (Nov 24), buffed Uppercut/Shining Kick/Tandem Uppercut damage, and strong close-range boxing.",
          "The Hand (S+ Tier): Hyperarmor on base Erasure, 30% Bring to Me slow, and limb-erasing palm strikes.",
          "Bad Company (S Tier Rework): 180-stud Maneuver/Paratroopers, Flanking orbits, 3-charge Landmines, and 2-EX Airstrike zoning.",
          "Dolly Dagger (S+ Tier): 70% damage reflection via Shed the Blame and 100% ground zone reflection."
        ]
      },
      {
        "id": "penalty-system",
        "title": "Combat Tag Leaver Penalties & Anti-Disconnect",
        "content": "Quitting or disconnecting during an active Ranked match triggers automatic forfeiture.",
        "steps": [
          "Leaving during an active match counts as an immediate 0-2 match loss.",
          "The leaver loses 40 ELO flat (double normal loss penalty).",
          "Repeated combat disconnects within 24 hours incur an escalating 15-minute to 2-hour queue timeout."
        ]
      }
    ]
  },
  {
    "slug": "car-tuning",
    "title": "Stand Out Car Tuning Guide: Upgrades, Parts & Customization",
    "category": "Progression",
    "description": "Master vehicle mechanics and car tuning in Roblox STAND OUT. In-depth guide to using the Gang Car Lift, installing V6/V8/Twin Turbo engines, defensive armor plating, security alarms, and self-destruct devices.",
    "readingTime": "7 min read",
    "updatedDate": "2026-11-22",
    "tableOfContents": [
      {
        "id": "car-lift-access",
        "title": "Accessing the Car Lift (Gang Garage & Lenny's)"
      },
      {
        "id": "engine-tuning",
        "title": "Engine & Transmission Upgrades (Speed & Acceleration)"
      },
      {
        "id": "armor-reinforcement",
        "title": "Armor Plating, Reinforced Windows & Bumpers"
      },
      {
        "id": "utility-electronics",
        "title": "Utility Systems: Alarms, Radar Jammer & Self-Destruct"
      },
      {
        "id": "costs-rep-requirements",
        "title": "Upgrade Costs & Gang Reputation Requirements"
      },
      {
        "id": "tactical-vehicle-combat",
        "title": "Vehicle Combat Tactics & Stand Synergy"
      }
    ],
    "sections": [
      {
        "id": "car-lift-access",
        "title": "Accessing the Car Lift (Gang Garage & Lenny's)",
        "content": "Update 1 overhauled vehicle mechanics in STAND OUT, converting standard street cars into customizable tactical assets. To tune your vehicle, you must drive onto a specialized hydraulic Car Lift.",
        "steps": [
          "Public Car Lift: Located inside Lenny's Auto Repair shop downtown. Accessible by all players for standard Dalas fees.",
          "Gang Car Lift: Gangs that capture territory or purchase a Gang Garage unlock private car lifts offering 20% discount on all tuning parts.",
          "Activation: Drive your vehicle onto the yellow boundary markers on the lift, exit the driver seat, and interact with the wall control console."
        ],
        "tips": [
          "Always repair vehicle body health at Lenny's before applying performance mods, as wrecked chassis cannot support high-tier engines."
        ]
      },
      {
        "id": "engine-tuning",
        "title": "Engine & Transmission Upgrades (Speed & Acceleration)",
        "content": "Upgrading your vehicle's powerplant determines top speed, acceleration curves, and hill-climbing torque across Honolulu.",
        "table": {
          "headers": [
            "Engine Tier",
            "Top Speed",
            "Acceleration Bonus",
            "Cost (Dalas)",
            "Reqs"
          ],
          "rows": [
            [
              "Stock Inline-4",
              "45 studs/sec",
              "Baseline (1.0x)",
              "Free / Default",
              "None"
            ],
            [
              "Tuned V6 Engine",
              "65 studs/sec",
              "+30% Acceleration",
              "12,500 Dalas",
              "Level 20"
            ],
            [
              "High-Torque V8",
              "85 studs/sec",
              "+65% Acceleration",
              "35,000 Dalas",
              "Level 40"
            ],
            [
              "Twin Turbo Supercharger",
              "110 studs/sec",
              "+110% Acceleration",
              "80,000 Dalas",
              "Level 60 + Gang Rep 3"
            ]
          ]
        }
      },
      {
        "id": "armor-reinforcement",
        "title": "Armor Plating, Reinforced Windows & Bumpers",
        "content": "Vehicles are frequently targeted by enemy Stand barrages, Highway Star traps, and projectile fire during gang cargo transport. Defensive upgrades increase vehicle hit points and shield occupants from stray bullets.",
        "steps": [
          "Heavy Plating: Increases car base HP from 250 up to 750 HP, absorbing significant explosive and barrage damage.",
          "Reinforced Bumper: Transforms your front grill into a battering ram, dealing up to 45 crash damage to enemies on foot.",
          "Bulletproof Glass: Prevents snipers and pistol users from shooting the driver through front and side windows.",
          "Offroad Tires: Eliminates traction loss when driving across sand dunes, grass verges, and mountainous slopes."
        ]
      },
      {
        "id": "utility-electronics",
        "title": "Utility Systems: Alarms, Radar Jammer & Self-Destruct",
        "content": "Advanced electronics turn your car into a high-tech fortress or a devastating ambush weapon.",
        "steps": [
          "Security Alarm: Sounds a loud klaxon and triggers a localized 5-second stun if an unauthorized player attempts to hotwire your car.",
          "Radar Jammer: Hides your vehicle icon and passengers from enemy Huber and minimap tracking.",
          "Self-Destruct Module: Installed in the glove compartment. The driver can trigger a 3-second countdown that detonates the vehicle for 120 massive AOE damage to surrounding enemies."
        ],
        "warning": "Triggering Self-Destruct destroys your car chassis, requiring a tow retrieval fee at Lenny's to respawn the vehicle."
      },
      {
        "id": "costs-rep-requirements",
        "title": "Upgrade Costs & Gang Reputation Requirements",
        "content": "Top-tier vehicle parts require both financial investment in Dalas and standing within your Gang syndicate.",
        "steps": [
          "Complete Gang Cargo Deliveries to accumulate Gang Reputation tokens.",
          "Gang members holding rank of Lieutenant or higher can authorize communal garage funds for vehicle fleet tuning.",
          "Discounts: Upgrades purchased at a territory-controlled Gang Garage are discounted by 20% compared to Lenny's public garage."
        ]
      },
      {
        "id": "tactical-vehicle-combat",
        "title": "Vehicle Combat Tactics & Stand Synergy",
        "content": "Certain Stands synergize extraordinarily well with tuned vehicles.",
        "tips": [
          "Crazy Diamond Synergy: Crazy Diamond's Reconstruction (H) can instantly repair wrecked or smoking vehicles back to 100% HP during high-speed chases.",
          "Bad Company Synergy: Soldiers and Tanks can fire from the back of an armored flatbed truck, creating a mobile artillery fortress.",
          "The Hand Synergy: The Hand can use Bring to Me (E) while riding shotgun to pull fleeing enemy drivers straight out of their cockpits."
        ]
      }
    ]
  },
  {
    "slug": "highway-star-raid",
    "title": "Highway Star Raid Guide: Mechanics, Yuya Boss & Drops",
    "category": "Endgame & Raids",
    "description": "Complete strategy guide for the Highway Star Raid in STAND OUT. Start via Donatello outside the Museum of Oahu, master the traffic chase and Yuya Fungami fight, and farm the fixed Part 4 Arrow & Highway Star Chip drops.",
    "readingTime": "9 min read",
    "updatedDate": "2026-11-26",
    "tableOfContents": [
      {
        "id": "entry-reqs",
        "title": "Raid Entry & Level Requirements"
      },
      {
        "id": "tunnel-chase",
        "title": "Stage 1: High-Speed Tunnel Chase (60 km/h)"
      },
      {
        "id": "trap-room",
        "title": "Stage 2: Scent Trap & Flesh Room"
      },
      {
        "id": "yuya-boss",
        "title": "Boss Fight: Yuya Fungami"
      },
      {
        "id": "loot-table",
        "title": "Drop Rates & Raid Shop Tokens"
      }
    ],
    "sections": [
      {
        "id": "entry-reqs",
        "title": "Raid Entry & Level Requirements",
        "content": "The Highway Star Bizarre Adventure raid is entered by speaking to Donatello in the park outside the Museum of Oahu (using the generic raid lobby system). Bring a vehicle—Stage 2 requires driving into oncoming traffic while Hey Ya! locates Yuya Fungami. Solo and party runs (1–4 players) are supported on Regular and Hard difficulties.",
        "steps": [
          "Visit Donatello in the park outside the Museum of Oahu to open the Raid selector.",
          "Select Highway Star Raid and choose Regular or Hard difficulty.",
          "Ensure you have a vehicle ready for the traffic pursuit objective.",
          "Note: Hard raids carry a 20-minute cooldown on clear (25 minutes for Regular); losing a raid incurs zero cooldown."
        ],
        "tips": [
          "Equip stamina and walkspeed accessories like Enrico's Pants or Stardust Crusader gear to maintain sprint velocity during tunnel obstacles.",
          "Avoid heavy low-mobility Stands unless paired with high-mobility Sub-Abilities like Caesar Hamon."
        ]
      },
      {
        "id": "tunnel-chase",
        "title": "Stage 1: High-Speed Tunnel Chase (60 km/h)",
        "content": "Highway Star consists of three core objectives: (1) Get Highway Star to half HP, (2) Drive into oncoming traffic while Hey Ya! tracks down where the dead Highway Star user is, and (3) Kill Highway Star. Nurse NPCs also spawn inside the raid instance.",
        "steps": [
          "Phase 1: Burst Highway Star down to 50% HP while avoiding Scent Traps and Nutrient Siphon.",
          "Phase 2: Spawn your vehicle and drive into oncoming traffic while Hey Ya! pinpoints the user's location.",
          "Phase 3: Finish off Highway Star; remember that killing a raid boss grants an instant full HP heal.",
          "Tip: Use Universal Evasive (X, 30s CD) if trapped in Footprint Storm."
        ],
        "warning": "Getting caught by the pursuit footsteps inflicts Nutrient Drain, siphoning 25% of your total health and converting it into a boss heal."
      },
      {
        "id": "trap-room",
        "title": "Stage 2: Scent Trap & Flesh Room",
        "content": "Inside the ruined diagnostic clinic, the team enters an illusory flesh room where disembodied hands emerge from walls and floors. Squad members must eliminate 12 room apparitions while managing rapidly draining oxygen. Breaking 3 ventilation grates across the ceiling clears the miasma.",
        "tips": [
          "Use wide-clearing AoE attacks like Star Finger or November Rain's Heavy Downpour to clear apparitions quickly.",
          "Designate one fast player to break the high wall grates using ranged projectiles."
        ]
      },
      {
        "id": "yuya-boss",
        "title": "Boss Fight: Yuya Fungami",
        "content": "Yuya Fungami fights from hospital bed traction before breaking free in Phase 2. In Phase 1, he commands Highway Star clones to execute multi-directional pounces. In Phase 2 (below 50% HP), Yuya gains high-speed motor gliding, creating scent traps and delivering rapid 30-hit nutrient-draining barrages.",
        "steps": [
          "Phase 1 (100%-50% HP): Focus DPS on the central bed while parrying incoming clone dashes with F.",
          "Watch for the 'Scent Lock' prompt: execute a Universal Evasive (X) immediately to break free.",
          "Phase 2 (50%-0% HP): Bait Yuya's high-speed motor charge into tunnel walls to trigger a 3-second stun window.",
          "Unload high-damage awakenings (Time Stop or Heavy Overdrives) during his wall collision recovery."
        ]
      },
      {
        "id": "loot-table",
        "title": "Drop Rates & Raid Shop Tokens",
        "content": "Clearing the Highway Star Raid awards Coins, EXP, Highway Star Tokens, and item drops. Crucially, the November 22–23 patch fixed a bug where the raid dropped Part 5 Focus Arrows—it now properly drops Mysterious Arrow [Part 4]!",
        "table": {
          "headers": [
            "Reward Item",
            "Regular Difficulty",
            "Hard Difficulty",
            "Highway Star Shop"
          ],
          "rows": [
            [
              "Coins (Dalas)",
              "2,500 – 3,500",
              "5,000 – 7,000",
              "—"
            ],
            [
              "EXP",
              "1,800 – 2,200 (+15% buff)",
              "4,000 – 5,000",
              "—"
            ],
            [
              "Highway Star Stand Chip",
              "Not Listed",
              "1.0% Drop",
              "200 Tokens"
            ],
            [
              "Mysterious Arrow [Part 4] (Fixed!)",
              "3.0% Drop",
              "5.0% Drop",
              "40 Tokens"
            ],
            [
              "Mysterious Arrow",
              "62% Drop",
              "86% Drop",
              "7 Tokens"
            ],
            [
              "Lucky Arrow",
              "16% Drop",
              "49% Drop",
              "17 Tokens"
            ],
            [
              "Bizarre Arrow",
              "9.6% Drop",
              "27% Drop",
              "33 Tokens"
            ],
            [
              "Arrow Part",
              "x2–4 (80%)",
              "x3–5 (79%)",
              "4x for 8 Tokens"
            ],
            [
              "Steel Ingot",
              "x3–5 (53%)",
              "Not Listed",
              "4x for 10 Tokens"
            ],
            [
              "Stone Mask",
              "Not Listed",
              "23% Drop",
              "40 Tokens"
            ]
          ]
        }
      }
    ]
  },
  {
    "slug": "side-quests",
    "title": "Stand Out Side Quests Guide: All 12 Quests, NPCs & Locations",
    "category": "Progression",
    "description": "Complete directory and walkthrough for all 12 side quests in Roblox STAND OUT. Objectives, requirements, NPC spots, and exclusive accessory rewards.",
    "readingTime": "11 min read",
    "updatedDate": "2026-11-23",
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Side Quests Overview & Mechanics"
      },
      {
        "id": "weather-quests",
        "title": "Weather-Dependent Quests (Rain & Fog)"
      },
      {
        "id": "school-quests",
        "title": "McKinley High School Quests"
      },
      {
        "id": "museum-quests",
        "title": "Museum & Lore Quests"
      },
      {
        "id": "rewards-summary",
        "title": "Exclusive Accessory Rewards Summary"
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Side Quests Overview & Mechanics",
        "content": "Side quests in STAND OUT offer essential progression milestones beyond the main storyline. Unlike repeatable daily bounties, side quests reward unique equippable accessories (such as Blackmore's Set, Hand of Fate, Record Keeper's Monocle, and Trader's Sticky Hat) that cannot be obtained through standard mob grinding.",
        "tips": [
          "Check the in-game weather icon before seeking out weather-dependent quest givers like Blackmore or the Old Lady.",
          "Many side quests require specific story chapters completed before the NPC will offer dialogue."
        ]
      },
      {
        "id": "weather-quests",
        "title": "Weather-Dependent Quests (Rain & Fog)",
        "content": "Two major side quests require specific dynamic server weather events: Catch The Rainbow (Rain) and The Statue of Sorrow (Fog).",
        "steps": [
          "Catch The Rainbow: Wait for rain in Honolulu. Head to the McKinley High School courtyard behind the gym to find Blackmore. Follow the rainbow trajectory to defeat the leprechaun, seize the cauldron, and deliver it before sunshine resumes.",
          "The Statue of Sorrow: Wait for dense fog. Speak with the Old Lady behind IKO IKO. Inspect the cracked fissures near Angelo Rock, defeat the CEO of Fighting, and lure Rolling Stones into the containment net."
        ],
        "warning": "During The Statue of Sorrow, if Rolling Stones makes physical contact with your character, you receive the Slave of Fate accessory instead of the Hand of Fate."
      },
      {
        "id": "school-quests",
        "title": "McKinley High School Quests",
        "content": "McKinley High School is a major quest hub featuring Usagi Alohaoe and Bobby. Usagi offers 'Bandit Problem' (defeating 5 perimeter thugs for a Mysterious Arrow), while Bobby provides 'Bubble Practice' (creating 50 Hamon bubbles and defeating Training Humu for the Hawaii Warrior's Jacket)."
      },
      {
        "id": "museum-quests",
        "title": "Museum & Lore Quests",
        "content": "The Honolulu Museum of History houses two critical end-game side quests: Museum Errands and Space Oddity.",
        "steps": [
          "Museum Errands: Speak with the Receptionist, inspect 4 historical exhibits, retrieve land records, and obtain a signature from Meryl, Big Chop, Lettuce Trader, or Jodio to claim the Record Keeper's Monocle.",
          "Space Oddity: Unlocked only after indexing 45+ Stands. Meet Major Tom behind the grand staircase, collect 16 academic surveys across Oahu, deliver papers to D'Arby, and craft 1 Bizarre Arrow to unlock the exclusive Jojosapiens Stand Chip."
        ]
      },
      {
        "id": "rewards-summary",
        "title": "Exclusive Accessory Rewards Summary",
        "content": "Key accessories exclusive to side quest completions:",
        "table": {
          "headers": [
            "Quest Name",
            "NPC Giver",
            "Primary Reward",
            "Key Stat Buff"
          ],
          "rows": [
            [
              "Catch The Rainbow",
              "Blackmore",
              "Blackmore's Set",
              "+2 Ability, +2 Damage, +4 HP"
            ],
            [
              "The Statue of Sorrow",
              "Old Lady",
              "Hand Of Fate",
              "+3 Ability, +7 Strength, +3 HP"
            ],
            [
              "Museum Errands",
              "Receptionist",
              "Record Keeper's Monocle",
              "+13 Ability / +15% Trail Speed"
            ],
            [
              "Bubble Practice",
              "Bobby",
              "Hawaii Warrior's Jacket",
              "+1 Ability, +4 Damage, +1 HP"
            ],
            [
              "Yo-Yo, What the hell, Ma?!",
              "Lettuce Trader",
              "Trader's Sticky Hat",
              "+6 Ability, +3 Strength, +10% Crouch"
            ],
            [
              "Space Oddity",
              "Major Tom",
              "Jojosapiens Stand Chip",
              "Permanent Stand Unlock"
            ]
          ]
        }
      }
    ]
  },
  {
    "slug": "bounties",
    "title": "Stand Out Bounties Guide: All 13 Contracts, Timers & Rewards",
    "category": "Economy",
    "description": "Complete guide to all 13 daily bounty contracts in Roblox STAND OUT. Contract requirements, fail conditions, death limits, and clothing drop tables.",
    "readingTime": "10 min read",
    "updatedDate": "2026-11-23",
    "tableOfContents": [
      {
        "id": "bounty-system",
        "title": "How Bounties Work & Phone App"
      },
      {
        "id": "contract-table",
        "title": "All 13 Bounty Contracts Breakdown"
      },
      {
        "id": "timer-rules",
        "title": "Timers, Death Limits & Failure Rules"
      },
      {
        "id": "loot-pools",
        "title": "Exclusive Outfit & Stand Chip Drops"
      }
    ],
    "sections": [
      {
        "id": "bounty-system",
        "title": "How Bounties Work & Phone App",
        "content": "Bounties are repeatable, timed combat contracts that serve as the primary source of Dalas currency, Mysterious Arrows, and exclusive character accessories (Jodio's, Paco's, Rohan's, and Usagi's clothing lines). Once you receive the Smartphone from Meryl Mei Qi in Storyline Chapter 4, you can accept bounties remotely anywhere on the map or visit Bounty Officer Petyr downtown.",
        "tips": [
          "Always activate the Phone contract interface immediately upon joining a server to check high-tier rewards.",
          "Bounties with death limits (like 4-death or 8-death limits) fail instantly if your party wipes; play cautiously."
        ]
      },
      {
        "id": "contract-table",
        "title": "All 13 Bounty Contracts Breakdown",
        "content": "Verified specifications for all 13 official bounty contracts in STAND OUT:",
        "table": {
          "headers": [
            "Contract Title",
            "Time Limit",
            "Death Limit",
            "Target Location",
            "Key Outfit / Reward"
          ],
          "rows": [
            [
              "Dispose of the Vampires",
              "12:00",
              "None",
              "Cemetery District",
              "Stone Mask / Mysterious Arrow"
            ],
            [
              "Cheap Jewelry, Expensive Problem",
              "10:00",
              "4 Deaths",
              "Galleria Arcade",
              "Dragona's Set"
            ],
            [
              "Save Chubby Baby",
              "10:00",
              "8 Deaths",
              "Waikiki Reef",
              "Mysterious Arrows"
            ],
            [
              "Trust me on This One",
              "09:36",
              "None",
              "Warehouse Vents",
              "Usagi's Backpack & Pants"
            ],
            [
              "Your Personal Helper Friend",
              "09:36",
              "8 Deaths",
              "Construction Site",
              "Jodio's Outfit Set"
            ],
            [
              "Three Wishes",
              "12:00",
              "None",
              "Bazaar Courtyard",
              "Rohan's Clothing Set"
            ],
            [
              "Small Change, Big Problem",
              "10:00",
              "None",
              "Central Park",
              "Shigechi's Set"
            ],
            [
              "Missing Frog",
              "09:00",
              "4 Deaths",
              "Waterfall Basin",
              "Rokaka Seed"
            ],
            [
              "Paco's Challenge",
              "09:00",
              "None",
              "Muscle Beach",
              "Paco's Jacket & Pants"
            ],
            [
              "Rohan's Drawing Contest",
              "09:00",
              "None",
              "Rohan's Villa",
              "Rohan's G-Pen & Earrings"
            ],
            [
              "Usagi's Karaoke Night",
              "10:00",
              "None",
              "Neon Karaoke",
              "Usagi's Accessories"
            ],
            [
              "Four Iced Teas",
              "10:00",
              "None",
              "Seaside Drink Stand",
              "Lucky Arrow"
            ],
            [
              "D'Arby's Rematch",
              "10:00",
              "None",
              "Casino VIP Table",
              "D'Arby's Set & Stand Chip"
            ]
          ]
        }
      },
      {
        "id": "timer-rules",
        "title": "Timers, Death Limits & Failure Rules",
        "content": "Every bounty contract operates on strict mission constraints. If the timer reaches 00:00 or your party exceeds the allotted death count, the contract terminates immediately with zero payout. Additionally, logging out or switching servers while a bounty is active forfeits the contract fee.",
        "steps": [
          "Check the death limit badge on the top-right HUD before engaging the target.",
          "Use crowd control moves (such as Star Finger or String Entangle) to isolate elite targets.",
          "In 4-death contracts like Missing Frog, do not attempt solo melee rushing if health is below 50%."
        ]
      },
      {
        "id": "loot-pools",
        "title": "Exclusive Outfit & Stand Chip Drops",
        "content": "Bounty rewards roll from specific loot pools upon completion. Standard contracts award 1,500 to 3,500 Dalas and 1x Mysterious Arrow. Elite bounties (like D'Arby's Rematch) offer rare Stand Storage Chips and the complete D'Arby Outfit Set (+10% permanent Dalas boost)."
      }
    ]
  },
  {
    "slug": "secret-stands",
    "title": "Secret Stands Guide: How to Get Jojosapiens, SPTW, TWAU & Exclusive Kits",
    "category": "Progression",
    "description": "Unlock every non-arrow secret Stand in STAND OUT: Jojosapiens (2 forms, 14 upgrades, regular arrow re-rolls after unlock), SPTW, TWAU, Dolly Dagger, and Heaven's Door Prime.",
    "readingTime": "12 min read",
    "updatedDate": "2026-11-26",
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Secret & Non-Arrow Stands Overview"
      },
      {
        "id": "jojosapiens",
        "title": "Jojosapiens: Space Oddity Questline"
      },
      {
        "id": "sptw-evolution",
        "title": "Star Platinum: The World (SPTW)"
      },
      {
        "id": "twau-swap",
        "title": "The World: Alternative Universe (TWAU)"
      },
      {
        "id": "exclusive-ranked",
        "title": "Ranked & Supporter Stands (Dolly Dagger & HP Prime)"
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Secret & Non-Arrow Stands Overview",
        "content": "While most Stands in STAND OUT can be rolled from Mysterious Arrows, several elite Stands are completely excluded from the arrow table. These secret Stands require specialized evolution items, high-tier competitive rankings, or extensive multi-step questlines to unlock.",
        "tips": [
          "Do not waste Lucky or Bizarre Arrows trying to roll SPTW, TWAU, or Jojosapiens; their probability on arrows is strictly 0.00%.",
          "Ensure your character is at least Level 60-75 before attempting secret Stand evolutions."
        ]
      },
      {
        "id": "jojosapiens",
        "title": "Jojosapiens: Space Oddity Questline",
        "content": "Jojosapiens is unlocked through Major Tom's Space Oddity questline inside the Museum of Oahu (requires 45 Stands unlocked). Update 1 doubled Data gain to 4 Data per correct Questionnaire answer and 2 Data per full combo (every 8s), powering 2 transformation forms (Imperfect JoJo at 1 EX Bar and Ultimate JoJo at 3 EX Bars / 42 Data) and 14 Survey Upgrades. Once unlocked, Jojosapiens can also be pulled again from regular arrows (Nov 23).",
        "steps": [
          "Index 45+ Stands using arrows and storage chips.",
          "Speak with Major Tom beneath the Museum staircase to accept Space Oddity.",
          "Search Oahu for all 16 academic field survey scrolls.",
          "Bring the survey papers to Daniel J. D'Arby in the Royal Palm Casino cellar.",
          "Craft 1 Bizarre Arrow at a Master Workbench (9 Mysterious Arrows or 3 Lucky Arrows + Shard).",
          "Deliver the Bizarre Arrow to Major Tom to receive the permanent Jojosapiens Stand Chip."
        ]
      },
      {
        "id": "sptw-evolution",
        "title": "Star Platinum: The World (SPTW)",
        "content": "Star Platinum: The World is the premier direct combat evolution in the game. To evolve your base Star Platinum into SPTW, your character must reach Level 75 with maxed 100 Ability points. Consuming an Opal Rokakaka while holding Star Platinum triggers the evolution sequence.",
        "steps": [
          "Obtain Star Platinum from Mysterious Arrows (~0.50%) or Part 3 Focus Arrows (5.0%).",
          "Level up your character to Level 75 (max level cap) and allocate at least 100 points into Ability.",
          "Acquire an Opal Rokakaka via gardening mutation (3.0% base) or 77 Rings raid drop.",
          "Equip Star Platinum, consume the Opal Rokakaka, and confirm the evolution prompt."
        ]
      },
      {
        "id": "twau-swap",
        "title": "The World: Alternative Universe (TWAU)",
        "content": "The World: Alternative Universe is an alternate universe variant armed with revolvers, wire tripmines, and compact Time Stop. Using an Opal Rokakaka on a Level 75 The World provides a documented 10% swap chance to morph the Stand into TWAU.",
        "steps": [
          "Reach Level 75 with The World equipped.",
          "Obtain an Opal Rokakaka.",
          "Consume the Opal Roka. If the 10% swap triggers, The World transforms permanently into TWAU.",
          "If the swap fails, the Opal Roka functions as a safe stat clean without petrification."
        ]
      },
      {
        "id": "exclusive-ranked",
        "title": "Ranked & Supporter Stands (Dolly Dagger & HP Prime)",
        "content": "Two Stands hold the Exclusive tier: Dolly Dagger (unlock at 1,850 ELO in Ranked Mode Beta) and Heaven's Door Prime (unlock via 8,000 Catalog sales/supporters at Rank 7 or Top 3 weekly resets on Raid, Bounty Hunters, Raid Champions, or Fortune leaderboards). As of November 23, players who have already unlocked Heaven's Door Prime can re-obtain it from regular arrows."
      }
    ]
  },
  {
    "slug": "locations-and-npcs",
    "title": "Stand Out Locations & NPCs Guide: Full World Map & Merchant Spots",
    "category": "Progression",
    "description": "Navigate the entire STAND OUT map. Find all NPC trainers, black market dealers, crafting workbenches, raid portals, and safe zones across Honolulu.",
    "readingTime": "11 min read",
    "updatedDate": "2026-11-23",
    "tableOfContents": [
      {
        "id": "honolulu-map",
        "title": "World Map & Districts Overview"
      },
      {
        "id": "merchants-trainers",
        "title": "Key Merchants & Ability Trainers"
      },
      {
        "id": "benches-storage",
        "title": "Crafting Benches & Storage Locations"
      },
      {
        "id": "raid-portals",
        "title": "Raid Entrances & Dungeon Waypoints"
      }
    ],
    "sections": [
      {
        "id": "honolulu-map",
        "title": "World Map & Districts Overview",
        "content": "Roblox STAND OUT takes place across an expansive urban recreation of Oahu, Hawaii. The map is divided into 5 distinct zones: Central Honolulu Plaza (safe zone & tutorial), Downtown Commercial Galleria (IKO IKO & Diamotch), Harbor Marina Docks (ferry & shipping crates), Kailua Hilltop (Rohan's luxury villa), and the North Mountain Pass (High school & Raid tunnels).",
        "tips": [
          "Use the Smartphone Huber app to fast travel between unlocked district taxi stands for 50 Dalas.",
          "Combat zones outside Central Plaza permit open PvP; stay alert near dark alleyways."
        ]
      },
      {
        "id": "merchants-trainers",
        "title": "Key Merchants & Ability Trainers",
        "content": "Notable NPC locations throughout the world:",
        "table": {
          "headers": [
            "NPC Name",
            "Role / Service",
            "Zone / District",
            "Coordinates / Landmark"
          ],
          "rows": [
            [
              "Tutorial Instructor",
              "Starter Combat Training",
              "Central Plaza",
              "Main Fountain Square"
            ],
            [
              "Meryl Mei Qi",
              "Storyline & Heist Operations",
              "Downtown",
              "IKO IKO Boutique"
            ],
            [
              "Lisa Lisa",
              "Hamon Master Trainer",
              "Venice Canal Grounds",
              "Roman Training Pillar"
            ],
            [
              "Daniel J. D'Arby",
              "Stand Storage & Chip Vault",
              "Casino Cellar",
              "Royal Palm Casino B1"
            ],
            [
              "Big Chop",
              "Botanical Seeds & Gardening",
              "Greenhouse Gardens",
              "North Botanical Park"
            ],
            [
              "Lenny the Mechanic",
              "Vehicle Upgrades & Garage",
              "Auto Repair Yard",
              "Industrial District"
            ],
            [
              "Blackmore",
              "Catch The Rainbow Quest",
              "McKinley High",
              "Behind Gymnasium (Rain Only)"
            ],
            [
              "Lettuce Trader",
              "Daily Fruit & Chip Trade",
              "Market Street",
              "Produce Stall (Sunny Only)"
            ],
            [
              "Major Tom",
              "Space Oddity / Jojosapiens",
              "Museum of History",
              "Beneath Grand Staircase"
            ]
          ]
        }
      },
      {
        "id": "benches-storage",
        "title": "Crafting Benches & Storage Locations",
        "content": "Crafting workbenches are situated near major transit hubs. The Central Workshop bench crafts basic Mysterious Arrows and Steel Ingots. The Advanced Master Forge is located in the industrial foundry district near Lenny's garage, required for crafting Lucky and Bizarre Arrows."
      },
      {
        "id": "raid-portals",
        "title": "Raid Entrances & Dungeon Waypoints",
        "content": "Raid queuing waypoints are stationed outside the main city: Passione Train Raid departs from Honolulu Central Station track 3; Highway Star Raid is located at the North Bypass Tunnel; and the 77 Rings Raid portal sits at the Ancient Colosseum ruins past the northern mountain pass."
      }
    ]
  },
  {
    "slug": "enemy-drops",
    "title": "Stand Out Enemies & Drops Guide: Mobs, Elites, Bosses & Rates",
    "category": "Combat & Moves",
    "description": "Complete drop tables for all enemies in Roblox STAND OUT. Street thugs, police officers, syndicate elites, world bosses, and guaranteed material drops.",
    "readingTime": "10 min read",
    "updatedDate": "2026-11-23",
    "tableOfContents": [
      {
        "id": "common-mobs",
        "title": "Street Thugs & Common Enemies"
      },
      {
        "id": "elite-enemies",
        "title": "Syndicate Enforcers & Police Officers"
      },
      {
        "id": "world-bosses",
        "title": "World Bosses & Special Drop Pools"
      },
      {
        "id": "drop-multipliers",
        "title": "Farming Multipliers & Shigechi Harvest"
      }
    ],
    "sections": [
      {
        "id": "common-mobs",
        "title": "Street Thugs & Common Enemies",
        "content": "Common street enemies spawn continuously throughout alleyways and industrial sectors. Defeating them provides reliable baseline EXP, Dalas currency, and foundational crafting materials like Scrap Metal and Arrow Parts.",
        "table": {
          "headers": [
            "Enemy Type",
            "Health (HP)",
            "Level Range",
            "Guaranteed Drops",
            "Rare Drops"
          ],
          "rows": [
            [
              "Street Thug",
              "80 HP",
              "Lv 1-10",
              "15-30 Dalas, 50 EXP",
              "Scrap Metal (15%)"
            ],
            [
              "Delinquent Brawler",
              "150 HP",
              "Lv 10-20",
              "35-60 Dalas, 120 EXP",
              "Arrow Part (10%)"
            ],
            [
              "Harbor Smuggler",
              "220 HP",
              "Lv 20-35",
              "75-120 Dalas, 250 EXP",
              "Steel Ingot (8%)"
            ],
            [
              "Graveyard Undead",
              "180 HP",
              "Lv 25-40",
              "50 Dalas, 200 EXP",
              "Human Blood Vial (12%)"
            ]
          ]
        }
      },
      {
        "id": "elite-enemies",
        "title": "Syndicate Enforcers & Police Officers",
        "content": "Elite enemies feature super armor, blocking capabilities, and telegraphed guardbreak attacks. Corrupt Police Officers drop Civilian IDs and police car keys, while Passione Syndicate Enforcers drop high-tier forging ores and focus items.",
        "tips": [
          "Use a heavy attack (R) immediately when an elite enemy initiates their block posture to trigger a guardbreak.",
          "Elite enemies have a 0.25s parry cooldown; bait their swings before unleashing full 4-hit light combos."
        ]
      },
      {
        "id": "world-bosses",
        "title": "World Bosses & Special Drop Pools",
        "content": "World Bosses spawn on fixed timers across Honolulu. Defeating them grants massive server-wide bounties and exclusive gear:",
        "table": {
          "headers": [
            "Boss Name",
            "Spawn Timer",
            "Health (HP)",
            "Location",
            "Exclusive Drops"
          ],
          "rows": [
            [
              "Rohan Kishibe",
              "30 Minutes",
              "350 HP",
              "Rohan's Villa Study",
              "Heaven's Door Hat / G-Pen"
            ],
            [
              "Ningbo (200 Balloons)",
              "45 Minutes",
              "280 HP",
              "Shopping Promenade",
              "Ningbo's Hat & Pants"
            ],
            [
              "Charming Man",
              "45 Minutes",
              "225 HP",
              "Harbor Pier 4",
              "Charming Man's Outfit"
            ],
            [
              "Hubert (The World)",
              "60 Minutes",
              "550 HP",
              "Construction Top",
              "1x Lucky Arrow / The World Chip"
            ],
            [
              "DIO Phantom",
              "90 Minutes",
              "1,200 HP",
              "Ancient Shrine Crypt",
              "Stone Mask / DIO's Set"
            ]
          ]
        }
      },
      {
        "id": "drop-multipliers",
        "title": "Farming Multipliers & Shigechi Harvest",
        "content": "Equipping Shigechi's Stand (Harvest) grants a passive +25% item drop rate from all common and elite mobs. Pairing Harvest with the 2x Dalas Coin Booster consumable and D'Arby's Set increases net currency gain by over 140%."
      }
    ]
  },
  {
    "slug": "world-events",
    "title": "Stand Out World Events Guide: Meteors, Airdrops & Boss Spawns",
    "category": "Progression",
    "description": "Master dynamic world events in STAND OUT. Meteor crashes, supply airdrops, server weather cycles, and high-tier loot timings.",
    "readingTime": "9 min read",
    "updatedDate": "2026-11-23",
    "tableOfContents": [
      {
        "id": "event-types",
        "title": "Dynamic World Events Overview"
      },
      {
        "id": "meteor-crashes",
        "title": "Meteorite Crash Sites (Stand Materials)"
      },
      {
        "id": "supply-airdrops",
        "title": "Supply Crate Airdrops"
      },
      {
        "id": "weather-cycles",
        "title": "Weather Cycles: Sunny, Rain & Fog"
      }
    ],
    "sections": [
      {
        "id": "event-types",
        "title": "Dynamic World Events Overview",
        "content": "World events in STAND OUT occur dynamically on global server timers. When an event triggers, a server-wide audio cue and chat banner alert all active players. Competing for these events yields the highest concentration of Bizarre Arrows, rare crafting minerals, and exclusive weather-locked quest access."
      },
      {
        "id": "meteor-crashes",
        "title": "Meteorite Crash Sites (Stand Materials)",
        "content": "Every 60 to 90 minutes, a glowing golden meteor crashes into an exterior district (Waikiki Beach, Kailua Ridge, or North Forest). The impact crater produces high heat and spawns 3 to 5 harvestable Meteorite Shards and Mysterious Rocks.",
        "steps": [
          "Watch for the fiery atmospheric trail crossing the sky.",
          "Rush to the impact coordinates marked by a rising smoke plume.",
          "Use a pickaxe or heavy Stand punch to extract Meteorite Shards from the central rock.",
          "Prepare for open PvP combat; meteor sites disable safe zone protections."
        ],
        "tips": [
          "Meteorite Shards are mandatory ingredients for forging Bizarre Arrows at Master Forges."
        ]
      },
      {
        "id": "supply-airdrops",
        "title": "Supply Crate Airdrops",
        "content": "Cargo planes periodically drop parachuted supply crates across industrial docks and public parks. Crates contain military consumables, high-tier Dalas cash bundles ($5,000 to $15,000), 2x EXP Boosters, and rare Steel Ingots.",
        "warning": "Opening an airdrop requires holding E for 10 uninterrupted seconds. Any incoming damage resets your capture progress."
      },
      {
        "id": "weather-cycles",
        "title": "Weather Cycles: Sunny, Rain & Fog",
        "content": "Server weather shifts every 20-30 minutes. Rain activates Blackmore's 'Catch The Rainbow' quest and boosts water stand damage (Catch The Rainbow, Smoke On The Water). Fog spawns the Old Lady and Angelo Rock fissures. Clear sunny weather is required to find the Lettuce Trader."
      }
    ]
  },
  {
    "slug": "phone-and-travel",
    "title": "Stand Out Phone & Fast Travel Guide: Huber, Contacts & Bounties",
    "category": "Starter",
    "description": "How to unlock and use the Smartphone in STAND OUT. Huber taxi travel, remote bounty acceptance, gift codes, and contact management.",
    "readingTime": "8 min read",
    "updatedDate": "2026-11-23",
    "tableOfContents": [
      {
        "id": "unlock-phone",
        "title": "How to Unlock the Smartphone"
      },
      {
        "id": "huber-travel",
        "title": "Huber Fast Travel System & Taxi Stands"
      },
      {
        "id": "phone-apps",
        "title": "Phone Applications: Bounties, Bank & Gifts"
      },
      {
        "id": "tips-shortcuts",
        "title": "Keybind Shortcuts & Efficiency Tips"
      }
    ],
    "sections": [
      {
        "id": "unlock-phone",
        "title": "How to Unlock the Smartphone",
        "content": "The Smartphone is the single most important utility item in STAND OUT. You receive it permanently from Meryl Mei Qi upon completing Storyline Chapter 4 ('Meet Meryl Mei Qi') at IKO IKO. Once unlocked, pressing the P key opens your phone interface anywhere outside active combat.",
        "steps": [
          "Complete Storyline Chapters 1 through 3.",
          "Report to Meryl Mei Qi at the IKO IKO boutique.",
          "Receive the Smartphone as an essential campaign completion reward.",
          "Press P on PC or tap the Phone HUD icon on mobile to launch the interface."
        ]
      },
      {
        "id": "huber-travel",
        "title": "Huber Fast Travel System & Taxi Stands",
        "content": "The Huber taxi app allows instant teleportation between unlocked district taxi stations across Oahu. Teleporting costs a nominal fee of $50 to $100 Dalas, eliminating tedious cross-map walking during delivery missions.",
        "table": {
          "headers": [
            "Taxi Stand Destination",
            "Zone",
            "Fare Cost",
            "Nearby Landmark"
          ],
          "rows": [
            [
              "Central Plaza Station",
              "Central District",
              "$50 Dalas",
              "Tutorial Plaza & Fountain"
            ],
            [
              "IKO IKO Downtown",
              "Commercial District",
              "$50 Dalas",
              "Boutique & Diamotch Jewelers"
            ],
            [
              "Harbor Marina Docks",
              "Waterfront District",
              "$75 Dalas",
              "Ferry Terminal & Cargo Storage"
            ],
            [
              "Kailua Hilltop",
              "Residential Ridge",
              "$100 Dalas",
              "Rohan Kishibe's Villa"
            ],
            [
              "North Bypass Tunnel",
              "Mountain Pass",
              "$100 Dalas",
              "Highway Star Raid Entrance"
            ]
          ]
        }
      },
      {
        "id": "phone-apps",
        "title": "Phone Applications: Bounties, Bank & Gifts",
        "content": "The phone operating system includes several built-in apps: Bounties (accept contracts remotely without visiting Petyr), Bank (view cash balance and transfer Dalas to gang vaults), and Gifts (redeem promotional codes directly from the screen)."
      },
      {
        "id": "tips-shortcuts",
        "title": "Keybind Shortcuts & Efficiency Tips",
        "content": "Pressing P while driving a car automatically engages the GPS waypoint to your nearest active storyline marker. Note: The phone cannot be pulled up while you are ragdolled, guardbroken, or during active Raid boss phases."
      }
    ]
  },
  {
    "slug": "eliminations-and-parties",
    "title": "Stand Out Eliminations & Parties Guide: Squad Combat & Bounty XP",
    "category": "Combat & Moves",
    "description": "Master squad dynamics and player eliminations in STAND OUT. Group EXP sharing, party buffs, bounty hunting, and PvP combat rewards.",
    "readingTime": "9 min read",
    "updatedDate": "2026-11-23",
    "tableOfContents": [
      {
        "id": "party-system",
        "title": "Creating & Managing Squad Parties"
      },
      {
        "id": "exp-sharing",
        "title": "Party EXP & Dalas Sharing Rules"
      },
      {
        "id": "eliminations",
        "title": "Player Eliminations & Bounty Points"
      },
      {
        "id": "synergies",
        "title": "Ideal Squad Compositions"
      }
    ],
    "sections": [
      {
        "id": "party-system",
        "title": "Creating & Managing Squad Parties",
        "content": "STAND OUT supports squad parties of up to 4 players. Inviting friends to your party prevents friendly fire during chaotic AoE attacks and shares quest progress for mob-clearing objectives.",
        "steps": [
          "Open your player roster list in the game menu.",
          "Click the '+' invite button next to a player's username.",
          "Once accepted, squad members gain green health bars above their avatars and shared radar markers."
        ]
      },
      {
        "id": "exp-sharing",
        "title": "Party EXP & Dalas Sharing Rules",
        "content": "When members are within 150 studs of each other, all mob kill EXP and Dalas currency are shared equally with a +15% squad bonus. This makes 4-player grinding at the Graveyard or Harbor Docks substantially faster than solo leveling.",
        "tips": [
          "Ensure squad members remain within visual range; straying past 150 studs disables EXP sharing.",
          "Storyline boss kills register for all party members simultaneously if everyone lands at least 1 hit."
        ]
      },
      {
        "id": "eliminations",
        "title": "Player Eliminations & Bounty Points",
        "content": "Registering player eliminations in open PvP zones or the 1v1 Ranked Arena grants Bounty Points. High bounty players appear on the public board with red name tags; hunting them down awards up to $10,000 Dalas per takedown.",
        "warning": "Killing passive civilian players repeatedly flags you as a Notorious Outlaw, allowing anyone to attack you without reputation loss."
      },
      {
        "id": "synergies",
        "title": "Ideal Squad Compositions",
        "content": "For 77 Rings raids and gang wars, the optimal party composition consists of: 1 Main Tank / Disrupter (The Hustle or White Snake), 1 Time Stop Burst DPS (Star Platinum or The World), 1 Long-Range Zoner (November Rain or Emperor), and 1 Support Healer (Crazy Diamond or Cinderella)."
      }
    ]
  },
  {
    "slug": "customizer",
    "title": "Stand Out Customizer & Builder Guide: Outfits, Colors & Pose Styles",
    "category": "Starter",
    "description": "How to customize your Stand and avatar in STAND OUT. Color palettes, Alt 1-3 skins, customizer tools, and builder perks.",
    "readingTime": "8 min read",
    "updatedDate": "2026-11-23",
    "tableOfContents": [
      {
        "id": "customizer-basics",
        "title": "Accessing the Customizer Station"
      },
      {
        "id": "alt-palettes",
        "title": "Stand Alt Colors & Palette Swaps"
      },
      {
        "id": "avatar-clothing",
        "title": "Equipping Accessories & Outfits"
      },
      {
        "id": "pose-animations",
        "title": "Custom Summon Poses & Taunts"
      }
    ],
    "sections": [
      {
        "id": "customizer-basics",
        "title": "Accessing the Customizer Station",
        "content": "The Customizer is located inside the IKO IKO fashion boutique downtown and the Central Plaza salon. Interacting with the full-length dressing mirror opens the customization interface, allowing you to recolor Stand auras, adjust clothing layers, and set signature summon poses.",
        "steps": [
          "Visit IKO IKO boutique in Downtown Honolulu.",
          "Interact with the dressing mirror station (Press E).",
          "Select between Stand Appearance, Character Apparel, and Pose Animations."
        ]
      },
      {
        "id": "alt-palettes",
        "title": "Stand Alt Colors & Palette Swaps",
        "content": "Every Stand has 3 alternative colorway palettes (Alt 1, Alt 2, and Alt 3) inspired by official JoJo manga color spreads and anime color transitions. Unlocking alt skins requires either reaching Master Level 50 with that Stand or redeeming Catalog Supporter cosmetics.",
        "table": {
          "headers": [
            "Stand",
            "Default Color",
            "Alt 1 Colorway",
            "Alt 2 Colorway",
            "Alt 3 Colorway"
          ],
          "rows": [
            [
              "Star Platinum",
              "Classic Violet / Teal",
              "Manga Emerald Green",
              "Ova Platinum White",
              "All-Star Blue"
            ],
            [
              "The World",
              "Golden Yellow",
              "Shadow DIO Charcoal",
              "Awakened Blood Red",
              "Diego Turquoise"
            ],
            [
              "King Crimson",
              "Crimson Red / White",
              "Anime Lavender Blue",
              "Diavolo Monochrome",
              "Epitaph Green"
            ],
            [
              "November Rain",
              "Navy Blue / Silver",
              "Golden Wind Gold",
              "Tropical Sunset Pink",
              "Slate Charcoal"
            ]
          ]
        }
      },
      {
        "id": "avatar-clothing",
        "title": "Equipping Accessories & Outfits",
        "content": "Unlike standard Roblox avatar customization, accessories in STAND OUT (like DIO's Jacket or Blackmore's Mask) attach directly over your character model and confer active gameplay stat buffs alongside their visual design."
      },
      {
        "id": "pose-animations",
        "title": "Custom Summon Poses & Taunts",
        "content": "Pressing B triggers your character's equipped Stand Summon Pose. You can unlock dynamic poses (such as Jotaro's Point, DIO's Wryyy, and Jodio's Finger Rain) through catalog rank achievements or story milestone badges."
      }
    ]
  },
  {
    "slug": "metal-detecting",
    "title": "Stand Out Metal Detecting Guide: Beach Digging, Scrap & Loot Table",
    "category": "Economy",
    "description": "How to get and use the Metal Detector in STAND OUT. Best treasure digging spots, beeping radar cues, and rare accessory salvage.",
    "readingTime": "8 min read",
    "updatedDate": "2026-11-23",
    "tableOfContents": [
      {
        "id": "how-to-get",
        "title": "How to Get the Metal Detector"
      },
      {
        "id": "detecting-mechanics",
        "title": "How Metal Detecting Works (Radar Cues)"
      },
      {
        "id": "best-spots",
        "title": "Best Digging Locations Across Oahu"
      },
      {
        "id": "loot-table",
        "title": "Metal Detecting Loot Table & Rates"
      }
    ],
    "sections": [
      {
        "id": "how-to-get",
        "title": "How to Get the Metal Detector",
        "content": "The Handheld Metal Detector is a specialized salvage tool purchased from the Harbor Tool Merchant for $3,500 Dalas, or crafted at a Crafting Bench using 3x Steel Ingots, 5x Scrap Metal, and 1x Electrical Wire.",
        "steps": [
          "Earn $3,500 Dalas through initial storyline missions or daily bounties.",
          "Visit the Harbor Marina and speak with Tool Merchant Kai.",
          "Purchase the Handheld Metal Detector and place it on your hotbar (Key 4 or 5)."
        ]
      },
      {
        "id": "detecting-mechanics",
        "title": "How Metal Detecting Works (Radar Cues)",
        "content": "Equip the Metal Detector and walk slowly across sand or soft dirt terrain. As you approach buried metallic loot, the detector emits increasingly rapid audio beeps and a circular radar HUD pulses from yellow to glowing red. When directly over the treasure node, press LMB to unearth the cache.",
        "tips": [
          "Wear headphones to accurately distinguish high-frequency rapid beeps indicating high-tier loot nodes.",
          "Digging nodes despawn if left unexcavated for more than 45 seconds after activation."
        ]
      },
      {
        "id": "best-spots",
        "title": "Best Digging Locations Across Oahu",
        "content": "Top metal detecting routes include: Waikiki Beach shoreline (high coin & watch drops), Harbor Sand Spit (scrap metal & steel ingots), and the Riverbank Delta near the waterfall (Laem Chabang accessories & rare arrow parts)."
      },
      {
        "id": "loot-table",
        "title": "Metal Detecting Loot Table & Rates",
        "content": "Verified salvage rates from metal detecting nodes:",
        "table": {
          "headers": [
            "Salvaged Item",
            "Tier Category",
            "Drop Chance",
            "Average Value"
          ],
          "rows": [
            [
              "Scrap Metal (x3-x5)",
              "Common Material",
              "45.0%",
              "$500 Dalas Crafting Value"
            ],
            [
              "Steel Ingot (x1-x2)",
              "Uncommon Material",
              "25.0%",
              "$1,500 Dalas"
            ],
            [
              "Arrow Part (x1)",
              "Rare Crafting",
              "15.0%",
              "Essential for Arrows"
            ],
            [
              "Dalas Cash Cache ($1k-$3k)",
              "Currency",
              "10.0%",
              "Instant Cash"
            ],
            [
              "Laem Chabang's Holster",
              "Epic Accessory",
              "3.5%",
              "+6 Ability / +5% Bullet Dmg"
            ],
            [
              "Mysterious Arrow (Intact)",
              "Summon Item",
              "1.5%",
              "Instant Stand Summon"
            ]
          ]
        }
      }
    ]
  },
  {
    "slug": "minigames",
    "title": "Stand Out Minigames Guide: Casino Card Games, Batting & Dalas Payouts",
    "category": "Economy",
    "description": "Complete guide to all minigames in Roblox STAND OUT. Royal Palm Casino games, batting cages, training drills, and maximizing payouts.",
    "readingTime": "9 min read",
    "updatedDate": "2026-11-23",
    "tableOfContents": [
      {
        "id": "casino-games",
        "title": "Royal Palm Casino: Poker & Go Fish"
      },
      {
        "id": "batting-cages",
        "title": "Batting Cages & Precision Training"
      },
      {
        "id": "speed-trials",
        "title": "Vehicle Street Rallies & Delivery Runs"
      },
      {
        "id": "payout-strategies",
        "title": "Maximizing Minigame Currency Payouts"
      }
    ],
    "sections": [
      {
        "id": "casino-games",
        "title": "Royal Palm Casino: Poker & Go Fish",
        "content": "Located in the Entertainment District, the Royal Palm Casino is the premier recreational hub in STAND OUT. Inside, players can wager Dalas at high-stakes tables. The cellar hosts Daniel J. D'Arby, where winning his Go Fish duel unlocks permanent Stand Storage slots and the D'Arby Outfit Set.",
        "tips": [
          "Never wager more than 25% of your total Dalas on a single round of casino games.",
          "Wear D'Arby's Jacket and Pants to receive a permanent +10% bonus payout on all casino winnings."
        ]
      },
      {
        "id": "batting-cages",
        "title": "Batting Cages & Precision Training",
        "content": "The Honolulu Batting Cages test timing and parry precision. Pitching machines launch high-speed baseballs that require exact 0.12s melee swings or F-blocks to reflect. Achieving a Perfect 20 streak awards the Slugger Title and 1,500 Dalas.",
        "steps": [
          "Enter the batting cage enclosure and pay the 50 Dalas machine fee.",
          "Time your LMB swing when the incoming ball passes the red target circle.",
          "Chain 10 consecutive home runs to unlock double score multipliers."
        ]
      },
      {
        "id": "speed-trials",
        "title": "Vehicle Street Rallies & Delivery Runs",
        "content": "Street vehicle rallies challenge players to race customized tuner hatchbacks through checkpoint gates across Honolulu without crashing. Completing gold-medal time trials awards engine modification parts and heavy vehicle armor plates."
      },
      {
        "id": "payout-strategies",
        "title": "Maximizing Minigame Currency Payouts",
        "content": "To maximize Dalas generation, cycle between high-yield minigames during server cooldowns: complete 1 batting streak, run 1 casino table round with D'Arby gear equipped, and finish with a timed food delivery route for optimal hourly currency yield."
      }
    ]
  }
];

export const guidesBySlug = new Map(guides.map((g) => [g.slug, g]));

export const guidesByCategory = guides.reduce((acc, guide) => {
  if (!acc[guide.category]) {
    acc[guide.category] = [];
  }
  acc[guide.category].push(guide);
  return acc;
}, {} as Record<string, Guide[]>);
