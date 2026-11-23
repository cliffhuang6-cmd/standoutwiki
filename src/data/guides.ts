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
    "description": "Complete keybind directory for Stand Out. Master PC keyboard controls, mobile touch UI, camera shiftlock, piloting, and controller layouts.",
    "readingTime": "5 min read",
    "updatedDate": "2026-11-16",
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
        "content": "STAND OUT natively supports modern game controllers across Xbox, PlayStation, and PC gamepad inputs. Triggers handle core attacks and defensive blocking, while face buttons and bumper modifiers activate mapped Stand skills.",
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
              "Dash / Evade",
              "Evasive roll with startup invulnerability"
            ],
            [
              "Y, B, X / △, ○, □",
              "Stand Skills",
              "Assigned special moves and offensive skills"
            ],
            [
              "R3 (Right Stick)",
              "Lock-On Toggle",
              "Focus camera target on nearest opponent"
            ],
            [
              "D-Pad",
              "Sub-Abilities & Items",
              "Quick slots for consumables and potions"
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
    "description": "Reject your humanity with the Vampire Sub-Ability in Stand Out. Master Blood Bar regeneration, Space Ripper Stingy Eyes, and daylight survival with the Shadow Cloak.",
    "readingTime": "6 min read",
    "updatedDate": "2026-11-16",
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
        "content": "Vampires replace their natural stamina bar with a crimson Blood Bar. As of the Nov 15/16 overhaul, Vampires continuously regenerate natural HP as long as blood is present in their pool. Furthermore, maximum Blood capacity now scales directly with your Ability stat, allowing players to store up to 250 Blood with max Ability investment. Pressing RMB (M2 Blood Drain) lunges forward to siphon blood, restoring HP and refilling your gauge.",
        "table": {
          "headers": [
            "Vampire Ability",
            "Blood Cost",
            "Cooldown",
            "Combat Effect"
          ],
          "rows": [
            [
              "Blood Drain (M2)",
              "Restores +40 Blood",
              "8s",
              "Siphons 25 HP & immobilizes target"
            ],
            [
              "Space Ripper Stingy Eyes",
              "25 Blood",
              "18s",
              "High-velocity piercing laser beams"
            ],
            [
              "Vaporizing Freeze",
              "30 Blood",
              "22s",
              "Counters physical hits; freezes limbs for 3s"
            ],
            [
              "Superhuman Leap",
              "10 Blood",
              "5s",
              "Massive vertical leap for rooftop positioning"
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
    "title": "Stand Out Storyline Walkthrough: Quests 1 to 10 & NPC Locations",
    "category": "Progression",
    "description": "Complete story quest guide in Stand Out. Step-by-step walkthrough for Quests 1 to 10, exact NPC locations, Meryl Mei Qi tasks, and story rewards.",
    "readingTime": "8 min read",
    "updatedDate": "2026-11-16",
    "tableOfContents": [
      {
        "id": "act-one",
        "title": "Quests 1 to 5: Honolulu Streets to Downtown"
      },
      {
        "id": "act-two",
        "title": "Quests 6 to 10: Mista, Bucciarati & Train Station"
      },
      {
        "id": "npc-directory",
        "title": "Exact NPC Locations & Dialogue Coordinates"
      },
      {
        "id": "storyline-rewards",
        "title": "Huber Phone, Stand Storage Chips & EXP"
      },
      {
        "id": "level-50-transition",
        "title": "Completing the Main Campaign & Endgame"
      }
    ],
    "sections": [
      {
        "id": "act-one",
        "title": "Quests 1 to 5: Honolulu Streets to Downtown",
        "content": "The first chapter of STAND OUT introduces players to the criminal underworld of Honolulu. Beginning with the Tutorial Instructor, Quest 2 introduces Meryl Mei Qi for the driving delivery task that unlocks the Smartphone. Quest 3 tasks you with investigating Billy in the back alley, while Quests 4 and 5 require clearing out street thugs and recovering stolen Stand arrows.",
        "table": {
          "headers": [
            "Quest #",
            "Quest Name",
            "Primary NPC",
            "Objective",
            "Key Reward"
          ],
          "rows": [
            [
              "Quest 1",
              "Awakening Call",
              "Tutorial Instructor",
              "Complete basic combat drills",
              "1 Mysterious Arrow, 500 Dalas"
            ],
            [
              "Quest 2",
              "Delivery Duty",
              "Meryl Mei Qi",
              "Drive cargo across town",
              "Smartphone & Huber Taxi Unlock"
            ],
            [
              "Quest 3",
              "Alley Informant",
              "Billy",
              "Interrogate 3 delinquent thugs",
              "1,200 EXP, 800 Dalas"
            ],
            [
              "Quest 4",
              "Stolen Shards",
              "Guido Mista",
              "Defeat 5 Passione Grunts",
              "Tier 1 Stand Storage Chip"
            ],
            [
              "Quest 5",
              "Downtown Clash",
              "Bruno Bucciarati",
              "Defeat Bruno in a 1v1 duel",
              "Sticky Fingers Pass & 5,000 EXP"
            ]
          ]
        }
      },
      {
        "id": "act-two",
        "title": "Quests 6 to 10: Mista, Bucciarati & Train Station",
        "content": "Act Two escalates the conflict into a full war against rogue Passione squads. Quest 6 requires solving the sewer gate puzzle beneath the fountain. Quest 7 sends you to the Harbor to confront Bobby Jean. Quests 8 and 9 culminate at the Train Station, unlocking the Passione Train Raid, while Quest 10 pits you against the mysterious Boss shadow.",
        "steps": [
          "Quest 6: Enter the Sewers and turn the 3 water pressure valves.",
          "Quest 7: Defeat Bobby Jean at the Pier and retrieve the stolen disc.",
          "Quest 8: Speak to the Station Master to unlock the subway fast travel nodes.",
          "Quest 9: Clear the Train Station ambush without letting NPCs perish.",
          "Quest 10: Face the Boss avatar to complete the main storyline campaign."
        ]
      },
      {
        "id": "npc-directory",
        "title": "Exact NPC Locations & Dialogue Coordinates",
        "content": "Key NPC locations across the world map: Tutorial Instructor (Central Plaza, [120, 15, -45]), Meryl Mei Qi (Downtown Parking, [340, 15, 210]), Billy (Alley behind Casino, [180, 15, 95]), Guido Mista (Diner Rooftop, [220, 45, 130]), Bruno Bucciarati (Train Station Entrance, [-150, 15, 410]).",
        "tips": [
          "Use the GPS App on your Smartphone to drop automatic waypoint beacons directly onto any story NPC."
        ]
      },
      {
        "id": "storyline-rewards",
        "title": "Huber Phone, Stand Storage Chips & EXP",
        "content": "Completing all 10 storyline quests awards over 120,000 total EXP (taking a fresh character directly to Level 35+), $35,000 Dalas, 2 free Stand Storage Chips, 3 Mysterious Arrows, and 1 Lucky Arrow.",
        "warning": "Never abandon a storyline quest midway; doing so resets your dialogue stage and requires re-fighting previous quest mobs."
      },
      {
        "id": "level-50-transition",
        "title": "Completing the Main Campaign & Endgame",
        "content": "Upon finishing Storyline Quest 10, your character transitions into the Endgame phase. Daily Bounties, World Bosses, Passione Train Raids, and 77 Rings Raids unlock full reward multipliers, paving your path to Level 50 and Stand Evolution.",
        "tips": [
          "Speak to Major Tom in the observatory after Quest 10 to begin the secret Jojosapiens research questline."
        ]
      }
    ]
  },
  {
    "slug": "crafting",
    "title": "Stand Out Crafting Guide: Workbenches, Recipes & Materials",
    "category": "Economy",
    "description": "Master the crafting system in Stand Out. Workbench locations, recipes for Lucky Arrows and Shadow Cloaks, material spawns, and profit margins.",
    "readingTime": "6 min read",
    "updatedDate": "2026-11-16",
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
        "content": "Crafting in STAND OUT allows players to forge premium summon arrows, protective accessories, and agricultural tools without spending Robux. Workbenches exist in three tiers: Basic Workbench (Downtown Alley), Advanced Workbench (Industrial Scrap Yard), and Master Forge (Catacombs Entrance). Higher-tier benches are required for advanced blueprints.",
        "table": {
          "headers": [
            "Crafting Item",
            "Required Bench",
            "Materials Needed",
            "Crafting Time"
          ],
          "rows": [
            [
              "Lucky Arrow",
              "Advanced Workbench",
              "1 Mysterious Arrow, 10 Scrap, 3 Gold Ingots",
              "30s"
            ],
            [
              "Bizarre Arrow",
              "Master Forge",
              "3 Lucky Arrows, 1 Meteorite Shard, $50,000",
              "60s"
            ],
            [
              "Shadow Cloak",
              "Basic Workbench",
              "5 Silk Cloth, 2 Shadow Fragments",
              "15s"
            ],
            [
              "Heavy Boots",
              "Basic Workbench",
              "8 Steel Ingots, 4 Leather Strips",
              "20s"
            ],
            [
              "High-Yield Garden Pot",
              "Basic Workbench",
              "4 Clay Bricks, 2 Dirt Bags",
              "10s"
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
    "description": "The definitive agricultural guide for Stand Out. Crop growth timers, 3x Gang Greenhouse buffs, produce packaging, and 33 Rokakaka mutation strains.",
    "readingTime": "7 min read",
    "updatedDate": "2026-11-16",
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
        "title": "Packaging Crops into Jars for 2.5x Retail Value",
        "content": "Never sell raw harvested produce directly to basic vendors. Use the packaging station to convert crops into Glass Jars (e.g. Jar of Rokaka, Jar of Apples, Jar of Tomatoes). Packaged jars sell for 2.5x the raw crop value at the Harbor Export Merchant.",
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
  }
,
  {
    "slug": "combat-mechanics",
    "title": "Stand Out Combat Mechanics Guide: Perfect Block, Posture & Combos",
    "category": "Combat & Moves",
    "description": "Master the complete combat system in Roblox STAND OUT. In-depth guide covering the 0.12s Perfect Block parry window, 35-50 Block Posture HP, Barrage Clash chip reduction, Combo Damage Scaling, Dash cancelling, and Time Stop overwrites.",
    "readingTime": "9 min read",
    "updatedDate": "2026-11-22",
    "tableOfContents": [
      { "id": "perfect-block", "title": "Perfect Block & Parry Timing (0.12s Window)" },
      { "id": "block-posture", "title": "Block Posture HP & Guard Break Mechanics" },
      { "id": "barrage-clashes", "title": "Barrage Clash Chip Damage (25% Rate)" },
      { "id": "combo-scaling", "title": "Combo Damage Scaling & Anti-Teaming i-Frames" },
      { "id": "hp-movement-scaling", "title": "Movement Speed Scaling by Current HP" },
      { "id": "dash-m1-links", "title": "Dash Cooldown (1.2s) & M1 Combo Chains" },
      { "id": "time-stop-mechanics", "title": "Time Stop Durations & Overwriting Tech" },
      { "id": "universal-evasive", "title": "Universal Evasive (Burst Break Mechanic)" }
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
          "headers": ["Combat Metric", "Current Value", "Pre-Patch Value", "Tactical Impact"],
          "rows": [
            ["Parry Window", "0.12 seconds", "0.10 seconds", "+20% easier timing window to punish predictable guardbreaks"],
            ["Attacker Endlag", "0.20 seconds", "0.00 seconds", "Guarantees free counter-attack before opponent can dodge"],
            ["Block HP Restored", "20% Max Posture", "0%", "Allows defensive resets even under sustained pressure"]
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
        "content": "To prevent unfair infinite true combos and one-shot touch-of-death sequences, Stand Out implements dynamic Combo Damage Scaling. Against other players, each attacker builds a separate combo tracking the percentage of your max HP dealt. Once an attacker has dealt 50% of your maximum HP, their next hit suffers a 25% damage reduction. If the combo continues past 99% of your max HP, damage reduction increases to 40%.",
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
        "title": "Universal Evasive (Burst Break Mechanic)",
        "content": "Introduced in Update 1, Universal Evasive gives every player a guaranteed defensive combo breaker regardless of their equipped Stand. Triggered with the X key (or dedicated mobile HUD button), your character unleashes a burst of energy that immediately breaks hitstun, knocks back nearby assailants, and clears active ragdoll animations.",
        "steps": [
          "Keybind / Activation: Press X key while grounded or caught in an enemy combo chain.",
          "EX Gauge Requirement: Consumes exactly 1 EX Bar (25% of your total EX meter). Cannot be activated if meter is empty.",
          "Base Cooldown: 45.0 seconds. Can be monitored on your screen edge cooldown tracker.",
          "Defensive Burst Damage: Releases a small kinetic shockwave inflicting 10 flat damage to all enemies within 8 studs.",
          "Combo Breaker Utility: Cancels true hitstun and ragdoll states, granting 0.40s of intangibility to roll away."
        ],
        "tips": [
          "Do not waste Universal Evasive on simple light M1 taps; save your 1 EX Bar to break high-damage setups like The Hand's Erasure Leap or Crazy Diamond's Restoration Wall traps.",
          "If an opponent baits out your Universal Evasive early, you are vulnerable to full 40-hit combo scaling for the next 45 seconds."
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
      { "id": "entry-reqs", "title": "Raid Entry & Party Requirements" },
      { "id": "stage-1", "title": "Stage 1: Graveyard Undead Gauntlet" },
      { "id": "stage-2", "title": "Stage 2: Broken Bridge Parkour & Trainee Knights" },
      { "id": "stage-3", "title": "Stage 3: Training Hall & Tarkus Boss Encounter" },
      { "id": "stage-4", "title": "Stage 4: Frozen Mountain Ascent & Hypothermia" },
      { "id": "stage-5", "title": "Stage 5: Shrine of DIO Boss Battle" },
      { "id": "rewards-shop", "title": "77 Rings Drops, Token Shop & Leaderboard Chips" }
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
          "headers": ["Shop Item", "Token Price", "Usage & Value"],
          "rows": [
            ["Mysterious Arrow", "7 Tokens", "Standard Stand summoning arrow (~0.50% Pinnacle chance)"],
            ["4x Arrow Parts", "8 Tokens", "Essential crafting component for Lucky and Bizarre Arrows"],
            ["Stone Mask", "10 Tokens", "Required consumable to awaken the Vampire Sub-Ability"],
            ["Lucky Arrow", "40 Tokens", "Guarantees Rare or higher Stand with 1.5% Pinnacle rate"],
            ["Bizarre Arrow", "80 Tokens", "Premier crafting arrow with 4.4% Pinnacle rate (excludes low tiers)"]
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
    "description": "Comprehensive guide to Stand Skins and Alternative Color Schemes in Roblox STAND OUT. How to unlock and equip Alt 1-3 palettes via the Phone (Z) app, quest requirements, Catalog supporter tiers, and exclusive cosmetic titles.",
    "readingTime": "8 min read",
    "updatedDate": "2026-11-22",
    "tableOfContents": [
      { "id": "how-skins-work", "title": "How Alt Stand Colors Work in Stand Out" },
      { "id": "prerequisites", "title": "Prerequisites: Phone (Z) & Meryl Mei Qi" },
      { "id": "how-to-equip", "title": "Step-by-Step: Equipping & Swapping Alt Skins" },
      { "id": "roster-availability", "title": "Full Stand Roster Skin Availability (36 Stands)" },
      { "id": "catalog-supporters", "title": "Catalog Supporter Ranks & Exclusive Rewards" },
      { "id": "customizer-settings", "title": "Customizer Settings, Poses & Emote Wheel" }
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
        "title": "Full Stand Roster Skin Availability (36 Stands)",
        "content": "Currently, 36 core Stands feature dedicated Alt 1, Alt 2, and Alt 3 color schemes documented on the official developer board (totaling 108 distinct cosmetic variants). Iconic examples include manga-colored Star Platinum (purple/teal Alt 1), shadow-armored The World (obsidian/gold Alt 2), and crimson-white King Crimson.",
        "tips": [
          "Newer Stands (November Rain, Kiss, Big Mouth Strikes Again, Lyin' Eyes, The MATTEKUDASAI) and exclusive forms (SPTW, TWAU, Heaven's Door Prime) have baseline textures and will receive their Alt cards in future patch cycles."
        ]
      },
      {
        "id": "catalog-supporters",
        "title": "Catalog Supporter Ranks & Exclusive Rewards",
        "content": "The in-game Catalog allows players to publish custom outfits, accessories, and builds. When other players save or purchase your public creations, they become your supporters. Earning supporters unlocks prestigious ranks, cosmetic gear, and exclusive Stand chips.",
        "table": {
          "headers": ["Supporter Rank", "Supporters Required", "Unlocked Rewards"],
          "rows": [
            ["ROUGH SKETCH", "10 Supporters", "Rohan's Earrings accessory"],
            ["STORYBOARD", "25 Supporters", "Rohan's G-Pen accessory"],
            ["INKED", "100 Supporters", "Heaven's Door Hat + 2,500 Dalas"],
            ["SERIALIZED", "500 Supporters", "Rohan's Pants accessory"],
            ["BESTSELLER", "2,000 Supporters", "Rohan's Jacket + 10,000 Dalas"],
            ["MASTERPIECE", "4,000 Supporters", "Gradient Name chat styling"],
            ["HEAVEN'S DOOR", "8,000 Supporters", "Builder+ Title & Heaven's Door Prime Stand Chip"]
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
    "description": "Comprehensive guide to 1v1 Ranked Mode in Roblox STAND OUT. Learn Level 60 entry requirements, Best-of-3 arena rules, ELO tiers, and how to reach 1,850 ELO to unlock the exclusive Pinnacle Stand Dolly Dagger.",
    "readingTime": "8 min read",
    "updatedDate": "2026-11-22",
    "tableOfContents": [
      { "id": "entry-requirements", "title": "Entry Requirements & Matchmaking Format" },
      { "id": "competitive-rules", "title": "Competitive Rules & Arena Mechanics" },
      { "id": "elo-tier-structure", "title": "ELO Rating Tiers & Division Thresholds" },
      { "id": "dolly-dagger-unlock", "title": "1,850 ELO Milestone: Unlocking Dolly Dagger" },
      { "id": "top-meta-picks", "title": "Ranked Meta Stand Tier Picks & Matchups" },
      { "id": "penalty-system", "title": "Combat Tag Leaver Penalties & Anti-Disconnect" }
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
        "content": "To ensure pure skill-based combat, Ranked Mode introduces standardized competitive restrictions that prevent consumable abuse and infinite stalling.",
        "steps": [
          "Consumable Lock: Healing items, food, drinks, and Rokakaka fruits cannot be consumed once inside the arena.",
          "Sub-Ability Integration: Hamon (Jonathan, Caesar, Zeppeli) and Vampire are fully permitted with their respective gauge mechanics.",
          "Universal Evasive: Players have access to the X-key Universal Evasive (45s base cooldown, costs 1 EX Bar).",
          "Time Stop Global Cap: Time Stop duration inside Ranked matches is capped to prevent unreactable 100-to-0 rounds."
        ],
        "warning": "Disabling player shadows or using uncapped FPS external injectors that tamper with physics ticks is monitored and subject to competitive matchmaking bans."
      },
      {
        "id": "elo-tier-structure",
        "title": "ELO Rating Tiers & Division Thresholds",
        "content": "All players begin their competitive journey at 1,000 baseline ELO. Winning matches earns between +18 and +32 ELO depending on the opponent's rating differential, while defeats deduct a similar amount.",
        "table": {
          "headers": ["Rank Tier", "ELO Range", "Division Badge", "Seasonal Rewards"],
          "rows": [
            ["Bronze", "1,000 – 1,199 ELO", "Bronze Crest", "5,000 Dalas + 1 Lucky Arrow"],
            ["Silver", "1,200 – 1,399 ELO", "Silver Crest", "15,000 Dalas + 2 Lucky Arrows"],
            ["Gold", "1,400 – 1,599 ELO", "Gold Crest", "30,000 Dalas + Bizarre Arrow"],
            ["Platinum", "1,600 – 1,749 ELO", "Platinum Crest", "50,000 Dalas + Platinum Nameplate"],
            ["Diamond", "1,750 – 1,849 ELO", "Diamond Crest", "75,000 Dalas + Glowing Diamond Aura"],
            ["Master", "1,850 – 2,099 ELO", "Master Crest", "Dolly Dagger Stand Chip + Exclusive Ranked Title"],
            ["Pinnacle (Top 50)", "2,100+ ELO", "Grandmaster Crest", "Golden Stand Aura + Top 50 Leaderboard Badge"]
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
          "Crazy Diamond (Z Tier): Immense close-quarters boxing, Restoration Wall terrain control, and Bearing Shot ranged poke.",
          "Star Platinum & SPTW (Z Tier): Reliable 0.12s parry punishes, Ora Smash guardbreak, and Time Stop combo extensions.",
          "The Hand (S+ Tier): 20-42 damage Erasure strikes with high limb-removal threat and Erasure Leap gap-closers.",
          "The Lock (S Tier): Inflicts guilt stacks on aggressive opponents, punishing overzealous barrage spammers with heavy extortion slows."
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
      { "id": "car-lift-access", "title": "Accessing the Car Lift (Gang Garage & Lenny's)" },
      { "id": "engine-tuning", "title": "Engine & Transmission Upgrades (Speed & Acceleration)" },
      { "id": "armor-reinforcement", "title": "Armor Plating, Reinforced Windows & Bumpers" },
      { "id": "utility-electronics", "title": "Utility Systems: Alarms, Radar Jammer & Self-Destruct" },
      { "id": "costs-rep-requirements", "title": "Upgrade Costs & Gang Reputation Requirements" },
      { "id": "tactical-vehicle-combat", "title": "Vehicle Combat Tactics & Stand Synergy" }
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
          "headers": ["Engine Tier", "Top Speed", "Acceleration Bonus", "Cost (Dalas)", "Reqs"],
          "rows": [
            ["Stock Inline-4", "45 studs/sec", "Baseline (1.0x)", "Free / Default", "None"],
            ["Tuned V6 Engine", "65 studs/sec", "+30% Acceleration", "12,500 Dalas", "Level 20"],
            ["High-Torque V8", "85 studs/sec", "+65% Acceleration", "35,000 Dalas", "Level 40"],
            ["Twin Turbo Supercharger", "110 studs/sec", "+110% Acceleration", "80,000 Dalas", "Level 60 + Gang Rep 3"]
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
