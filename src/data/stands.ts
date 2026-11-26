import type { Stand } from "../types";

export const stands: Stand[] = [
  {
    "slug": "star-platinum",
    "name": "Star Platinum",
    "canonicalUser": "Jotaro Kujo",
    "jojoPart": "Part 3: Stardust Crusaders",
    "rarity": "Pinnacle",
    "tier": {
      "pvp": "Z",
      "raid": "S+",
      "farming": "S"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows (~0.50% tier chance), Lucky Arrows (1.5%), or Bizarre Arrows (4.4%). Focus rollable via Part 3 focus items (~5.0%).",
    "lore": "Star Platinum is a powerful Stand possessed by Jotaro Kujo in Part 3: Stardust Crusaders.",
    "image": "/images/stands/star-platinum.webp",
    "combatRole": "Offense",
    "passives": [
      {
        "name": "Platinum Parry",
        "description": "Hold F. Press M1 to try to catch a projectile, or R/M2 to deflect it. [R/M2 (Deflect): ‌] [M1 (Catch): (Caught and thrown) EX [Awakening Moves]]"
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Star Finger",
        "type": "Attack",
        "cooldown": "35s",
        "damage": "Combative Strike",
        "description": "Extend Star Platinum’s finger to strike from mid-range. Tap:"
      },
      {
        "key": "E",
        "name": "Ora Smash",
        "type": "Heavy",
        "cooldown": "32s",
        "damage": "Heavy Guardbreak",
        "description": "Wind up a heavy ORA punch that sends enemies flying. (Can be held to extend its range.)"
      },
      {
        "key": "R",
        "name": "Inhale",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Hold to draw enemies, loose objects and cars toward Star Platinum. The pull stuns without dealing damage, grounds flying enemies, and shakes ripe fruit from trees."
      },
      {
        "key": "T",
        "name": "Stand Jump [1 Bar]",
        "type": "Awakening / EX",
        "cooldown": "2s",
        "damage": "High Impact / EX",
        "description": "Use your Stand’s power to launch high into the air."
      },
      {
        "key": "Y",
        "name": "Time Stop In-Air Variant",
        "type": "Attack",
        "cooldown": "45s",
        "damage": "Combative Strike",
        "description": "Executes Time Stop In-Air Variant dealing decisive Combative Strike with tactical combat utility."
      },
      {
        "key": "F",
        "name": "Tandem Flank [2 Bars]",
        "type": "Awakening / EX",
        "cooldown": "45s",
        "damage": "High Impact / EX",
        "description": "You and your stand attack from both sides. [Time Stop / Quick Time Stop [HOLD]: Freeze time. Higher ability makes it last longer; 100 Ability doubles the base duration. (CAN BE OVERWRITEN BY OTHER TIME STOP STANDS.) ]"
      },
      {
        "key": "G",
        "name": "Quick Time Stop (Held)",
        "type": "Attack",
        "cooldown": "45s",
        "damage": "Combative Strike",
        "description": "Using Quick Time Stop cuts half your original timestop duration in exchange for no startup."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 45,
        "damage": 65,
        "ability": 40
      },
      "subAbility": "Hamon (Jonathan Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Star Platinum in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows (~0.50% tier chance), Lucky Arrows (1.5%), or Bizarre Arrows (4.4%). Focus rollable via Part 3 focus items (~5.0%)."
      },
      {
        "q": "What combat role does Star Platinum fulfill?",
        "a": "Star Platinum functions primarily as an authentic Offense Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "the-world",
    "name": "The World",
    "canonicalUser": "DIO",
    "jojoPart": "Part 3: Stardust Crusaders",
    "rarity": "Pinnacle",
    "tier": {
      "pvp": "Z",
      "raid": "S+",
      "farming": "S"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows (~0.50% tier chance), Lucky Arrows (1.5%), or Bizarre Arrows (4.4%). Focus rollable via Part 3 focus items (~5.0%).",
    "lore": "The World is a powerful Stand possessed by DIO in Part 3: Stardust Crusaders.",
    "image": "/images/stands/the-world.webp",
    "combatRole": "Offense",
    "passives": [
      {
        "name": "Time Perception",
        "description": "Enhanced temporal perception grants awareness within stopped time and accelerates movement towards frozen targets."
      },
      {
        "name": "Predator Instinct",
        "description": "Consecutive heavy attacks against staggered foes deal 15% increased physical damage."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Barrage",
        "type": "Barrage",
        "cooldown": "23s",
        "damage": "Multi-Hit Rapid DMG",
        "description": "Unleash a rapid flurry of punches on your opponent."
      },
      {
        "key": "E",
        "name": "Knife Throw [HOLD IN TIMESTOP]",
        "type": "Awakening / EX",
        "cooldown": "25s",
        "damage": "High Impact / EX",
        "description": "Throw a volley of knives at your cursor’s position. (Useable with unsummoned stand.)"
      },
      {
        "key": "R",
        "name": "Hole Puncher",
        "type": "Attack",
        "cooldown": "30s",
        "damage": "Combative Strike",
        "description": "Time-skip forward and punch a hole clean through your opponent’s guard."
      },
      {
        "key": "T",
        "name": "Head Slam",
        "type": "Heavy",
        "cooldown": "15s",
        "damage": "Heavy Guardbreak",
        "description": "Slam the opponent’s head down, leaving an opening for a follow-up."
      },
      {
        "key": "Y",
        "name": "Tandem Flank [2 Bars]",
        "type": "Awakening / EX",
        "cooldown": "45s",
        "damage": "High Impact / EX",
        "description": "You and your Stand barrage from both sides. (Heavy isnt part of the move)"
      },
      {
        "key": "F",
        "name": "Stand Jump [1 Bar]",
        "type": "Awakening / EX",
        "cooldown": "2s",
        "damage": "High Impact / EX",
        "description": "Use your Stand’s power to launch high into the air. [Time Stop / Road Roller [TAP AGAIN] / Quick Time Stop [HOLD] [4 Bars]: Freeze time. Higher ability makes it last longer; 100 Ability doubles the base duration. (CAN BE OVERWRITTEN BY OTHER TIME STOP STANDS.) ]"
      },
      {
        "key": "G",
        "name": "Quick Time Stop (Held)",
        "type": "Attack",
        "cooldown": "45s",
        "damage": "Combative Strike",
        "description": "Using Quick Time Stop cuts half your original timestop duration in exchange for no startup."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 45,
        "damage": 65,
        "ability": 40
      },
      "subAbility": "Hamon (Jonathan Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain The World in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows (~0.50% tier chance), Lucky Arrows (1.5%), or Bizarre Arrows (4.4%). Focus rollable via Part 3 focus items (~5.0%)."
      },
      {
        "q": "What combat role does The World fulfill?",
        "a": "The World functions primarily as an authentic Offense Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "king-crimson",
    "name": "King Crimson",
    "canonicalUser": "Diavolo / Vinegar Doppio",
    "jojoPart": "Part 5: Golden Wind",
    "rarity": "Pinnacle",
    "tier": {
      "pvp": "Z",
      "raid": "S",
      "farming": "A+"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows (~0.50% tier chance), Lucky Arrows (1.5%), or Bizarre Arrows (4.4%). Focus rollable via Part 5 focus items (~5.0%).",
    "lore": "King Crimson is a powerful Stand possessed by Diavolo / Vinegar Doppio in Part 5: Golden Wind.",
    "image": "/images/stands/king-crimson.webp",
    "combatRole": "Offense",
    "passives": [
      {
        "name": "Epitaph",
        "description": "Dodge up to two hits over two seconds, or three once both arms are out. Move left or right to choose your dodge direction. Red outlines show where nearby enemies and projectiles are heading. Base cooldown: 18s (Works the same in full body) EX: [Aw..."
      },
      {
        "name": "Doppio’s stages",
        "description": "Finish calls to unlock King Crimson. Each call gives you one stage. Stage 1: One arm, Pocket Projectiles and Epitaph. The arm helps with heavy attacks and your first and third punches."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "King Of The Court (Alter Ego)",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "After three Frog Phone calls, the user unleashes King Crimson in its full potential. This switches the users avatar to their ALTER EGO avatar."
      },
      {
        "key": "E",
        "name": "Two Identities",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Use ALTER EGO in the character customizer to change your other form’s appearance. At stage 3, hold E to become that form. Hold it out of combat to return to Doppio at stage 0. (In character customizer) Moveset:"
      },
      {
        "key": "R",
        "name": "Barrage",
        "type": "Barrage",
        "cooldown": "23s",
        "damage": "Multi-Hit Rapid DMG",
        "description": "Hammer the enemy with a two-second barrage of punches."
      },
      {
        "key": "T",
        "name": "Chop",
        "type": "Attack",
        "cooldown": "14s",
        "damage": "Combative Strike",
        "description": "Stun the enemy with a blockable chop to extend a combo. A successful hit recovers twice as fast. Has a 25% chance to cut off their left arm and deal bonus damage. Ends Time Erase."
      },
      {
        "key": "Y",
        "name": "Decree",
        "type": "Attack",
        "cooldown": "22s",
        "damage": "Combative Strike",
        "description": "An armored, guard-breaking strike that can be parried. Hit from behind to impale the enemy for double damage. Misses recover more slowly. Ends Time Erase."
      },
      {
        "key": "F",
        "name": "Tandem Combo [2 Bars]",
        "type": "Awakening / EX",
        "cooldown": "45s",
        "damage": "High Impact / EX",
        "description": "Send King Crimson behind an enemy for three hits. The last knocks them away. You can move and attack during the combo. [Time Skip [1 Bar] / HOLD: PREVIEW / RELEASE: SKIP: Skip 2 seconds within 100 studs. Moves people, projectiles and cars forward. Also advances ongoing attacks , cooldowns, bleeding,"
      },
      {
        "key": "G",
        "name": "Blood Blind [1 Bar]",
        "type": "Awakening / EX",
        "cooldown": "12s",
        "damage": "High Impact / EX",
        "description": "Spend 5 health to fling blood into an enemy’s eyes, blinding them for 3 seconds. During Time Erase, the blood stays on their face and blinds them when erasure ends. THIS IS A PART OF THE ACTUAL KING CRIMSON, I HAD TO SPLIT THE CARD CUZ TOO MANY ATTACHMENTS. Doppio Mode:"
      },
      {
        "key": "H",
        "name": "Stage 1",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Stage 2: Two arms, Desperate barrage and Tantrum. Your light attacks become a four-punch combo. The middle punches stun longer and the last knocks enemies back. Your heavy sends them upward."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 45,
        "damage": 65,
        "ability": 40
      },
      "subAbility": "Hamon (Jonathan Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain King Crimson in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows (~0.50% tier chance), Lucky Arrows (1.5%), or Bizarre Arrows (4.4%). Focus rollable via Part 5 focus items (~5.0%)."
      },
      {
        "q": "What combat role does King Crimson fulfill?",
        "a": "King Crimson functions primarily as an authentic Offense Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "star-platinum-the-world",
    "name": "Star Platinum: The World",
    "canonicalUser": "Jotaro Kujo",
    "jojoPart": "Part 4: Diamond is Unbreakable",
    "rarity": "Evolution",
    "tier": {
      "pvp": "Z",
      "raid": "Z",
      "farming": "S"
    },
    "status": "Evolution",
    "obtainMethod": "Obtainable by consuming an Opal Roka while having base Star Platinum active (requires Level 50+).",
    "lore": "Star Platinum: The World is a powerful Stand possessed by Jotaro Kujo in Part 4: Diamond is Unbreakable.",
    "image": "/images/stands/star-platinum-the-world.webp",
    "combatRole": "Offense",
    "passives": [
      {
        "name": "Bane of Rats",
        "description": "Use H to send your Stand to collect a frozen knife, nail, bullet or throwable. Aim and attack to throw a caught projectile back. Click an unheld frozen projectile to punch it in your aiming direction instead."
      },
      {
        "name": "Platinum Parry",
        "description": "With your stand summoned, hold F. Press m1 to try to catch a projectile or R to deflect it."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "M1 Light Combo & Bane of Rats",
        "type": "Attack",
        "description": "Fast close-range Stand punches (overall SPTW damage raised +15% in Nov 22 balance pass after Update 1 tuning). Use H (Bane of Rats) to collect or punch frozen projectiles."
      },
      {
        "key": "E",
        "name": "Ora Blitz",
        "type": "Barrage",
        "cooldown": "19s",
        "description": "Send Star Platinum forward in a rushing barrage that carries enemies along and deflects incoming projectiles. Usable while piloting."
      },
      {
        "key": "R",
        "name": "Bearing Toss",
        "type": "Attack",
        "cooldown": "9s",
        "damage": "250-Stud Headshot Knockdown",
        "description": "Flick a steel bearing up to 250 studs that stuns and knocks back; headshots knock down and blur vision. Blockable and usable while piloting."
      },
      {
        "key": "T",
        "name": "I'm Wide Open",
        "type": "Counter",
        "cooldown": "24s",
        "description": "Counter an attack by appearing behind the attacker and throwing a heavy knockdown punch (defenders can turn and block it)."
      },
      {
        "key": "Y",
        "name": "Time Jump",
        "type": "Movement",
        "description": "Hold to preview and release to teleport instantly up to 64+ studs (scales with Ability), keeping momentum and breaking NPC targeting. Works summoned or dismissed."
      },
      {
        "key": "T (Hold) + E",
        "name": "Campfire",
        "type": "Awakening / EX",
        "exCost": "0 Bars",
        "cooldown": "20s",
        "description": "Build a 10s campfire (even in combat or while piloting) that restores 3 HP/s when seated and dries wet status; flames burn and stumble anyone stepping inside."
      },
      {
        "key": "T (Hold) + R",
        "name": "Tandem Rushdown",
        "type": "Awakening / EX",
        "exCost": "2 Bars",
        "cooldown": "45s",
        "description": "Star Platinum rushes an enemy within 40 studs, barrages, and slams them down while you remain free to move and attack. Blockable and parriable."
      },
      {
        "key": "T (Hold) + T",
        "name": "Panic Time Stop (Short Tap / Full Hold)",
        "type": "Awakening / EX",
        "exCost": "1 Bar (Tap) / 4 Bars (Hold)",
        "cooldown": "20s (Short) / 60s (Full)",
        "description": "Tap for a 1-EX instant Time Stop (2s at 1 Ability, 4s at 100 Ability, works dismissed) or hold with Stand out for a 4-EX full Time Stop (3.5s base, 7s at 100 Ability). Both reach 150 studs and can counter/overwrite enemy Time Stops."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 45,
        "damage": 65,
        "ability": 40
      },
      "subAbility": "Hamon (Jonathan Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Star Platinum: The World in STAND OUT?",
        "a": "Obtainable by consuming an Opal Roka while having base Star Platinum active (requires Level 50+)."
      },
      {
        "q": "What combat role does Star Platinum: The World fulfill?",
        "a": "Star Platinum: The World functions primarily as an authentic Offense Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-26"
  },
  {
    "slug": "the-world-alternative-universe",
    "name": "The World: Alternative Universe",
    "canonicalUser": "Diego Brando (AU)",
    "jojoPart": "Part 7: Steel Ball Run",
    "rarity": "Evolution",
    "tier": {
      "pvp": "S+",
      "raid": "S",
      "farming": "A+"
    },
    "status": "Evolution",
    "obtainMethod": "Alternate Universe evolution of The World. Obtained by using an Opal Rokakaka on a max-level The World for a 10% swap chance, or through specialized Part 7 Diego quests.",
    "lore": "The World: Alternative Universe is a powerful Stand possessed by Diego Brando (AU) in Part 7: Steel Ball Run.",
    "image": "/images/stands/the-world-alternative-universe.webp",
    "combatRole": "Zoner",
    "passives": [
      {
        "name": "Stand Aura",
        "description": "Intrinsically manifests user Stand power, scaling combat effectiveness with Ability stat points."
      },
      {
        "name": "Combat Resilience",
        "description": "Mastery over Stand manifestation grants increased resistance to stun and knockback."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Barrage",
        "type": "Barrage",
        "cooldown": "23s",
        "damage": "Multi-Hit Rapid DMG",
        "description": "Unleash a rapid flurry of punches on your opponent."
      },
      {
        "key": "E",
        "name": "Knife Throw",
        "type": "Attack",
        "cooldown": "25s",
        "damage": "Ranged Projectile",
        "description": "Throw two knife volleys toward your cursor, following aim through wind-up and between volleys even while unsummoned. Ability scaling: Damage scales 80% with Strength and 20% with Ability."
      },
      {
        "key": "R",
        "name": "Hole Puncher",
        "type": "Attack",
        "cooldown": "30s",
        "damage": "Combative Strike",
        "description": "Time-skip forward and punch a hole clean through your opponent’s guard."
      },
      {
        "key": "T",
        "name": "Arsenal",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Tap to step back and toss a handful of firecrackers that burst together in the air with a blinding flash, burning enemies and setting off gasoline, or hold with your Stand out to have it throw barbed wire that binds the enemy in front of it or lies on the ground to trip whoever walks into it."
      },
      {
        "key": "Y",
        "name": "Hold",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "EX [Awakening Moves]"
      },
      {
        "key": "F",
        "name": "Tandem Flank [2 Bars]",
        "type": "Awakening / EX",
        "cooldown": "45s",
        "damage": "High Impact / EX",
        "description": "You and your Stand barrage together from both sides."
      },
      {
        "key": "G",
        "name": "Stand Jump [1 Bar]",
        "type": "Awakening / EX",
        "cooldown": "2s",
        "damage": "High Impact / EX",
        "description": "Use your Stand’s power to launch high into the air."
      },
      {
        "key": "H",
        "name": "Deadly Shots",
        "type": "Attack",
        "cooldown": "7s",
        "damage": "Ranged Projectile",
        "description": "Draw your revolver for 1 EX bar and fire one heavy round at your cursor, then tap the move again after it hits while your Stand is out to have The World smack the target down for X damage at the cost of another bar and a 26 second cooldown. Ability Scaling: Damage scales 40% with Strength and 60% wi"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 40,
        "damage": 55,
        "ability": 55
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain The World: Alternative Universe in STAND OUT?",
        "a": "Obtainable by using an Opal Roka while having base The World active."
      },
      {
        "q": "What combat role does The World: Alternative Universe fulfill?",
        "a": "The World: Alternative Universe functions primarily as an authentic Zoner Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "jojosapiens",
    "name": "Jojosapiens",
    "canonicalUser": "Rohan / Jojo Historian",
    "jojoPart": "Part 9: The JOJOLands",
    "rarity": "Quest",
    "tier": {
      "pvp": "S",
      "raid": "A+",
      "farming": "S+"
    },
    "status": "Quest",
    "obtainMethod": "Unlocked exclusively by completing Major Tom's Space Oddity questline inside the Museum of Oahu (requires 45 unique Stands unlocked). Rewards the Jojosapiens Stand Chip; once unlocked, it can also be re-obtained from regular arrows (Nov 23 update).",
    "lore": "Jojosapiens is a powerful Stand possessed by Rohan / Jojo Historian in Part 9: The JOJOLands.",
    "image": "/images/stands/jojosapiens.webp",
    "combatRole": "Support",
    "passives": [
      {
        "name": "Unformed State & Two Transformation Forms",
        "description": "Starts in Unformed state taking +15% incoming damage and returning to Unformed upon death. Transform early via Imperfect JoJo (1 EX Bar, 8s CD: +5% damage, enables Survey Upgrades, continuous EX drain) or permanently until death at 42 Data via Ultimate JoJo (3 EX Bars, 45s CD: +15% damage, +10% speed, activates all 14 Survey Upgrades)."
      },
      {
        "name": "Doubled Data & 14 Survey Upgrades",
        "description": "Earn 4 Data per correct Questionnaire answer or 2 Data per full combo every 8s (doubled in Update 1). Every 3 Data grants 1 of 14 Survey Upgrades (up to 14 total; repeated picks upgrade Tiers I→III): Clean Copy, Second Draft, Open Book I-III, Bizarre Strength I-III, Land Survey I-III, Trick Question I-III, Flanking I-III, Cardboard Surveys I-III, Sticky Notes I-III, Rush Order, Blackout I-III, Paper Cut I-III, Carbon Paper I-III, and Paper Planes I-III."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Unformed / Manifested Combo",
        "type": "Attack",
        "description": "Fight alongside your unformed self (taking +15% incoming damage) until transforming via Imperfect JoJo or Ultimate JoJo. Full combo awards 2 Data (8s per target CD)."
      },
      {
        "key": "E",
        "name": "Survey Rush",
        "type": "Barrage",
        "cooldown": "9s",
        "description": "Barrage ahead with blockable arcing survey papers that cover hit opponents' screens in survey popups (upgradable with Cardboard Surveys, Sticky Notes, Paper Cut, and Paper Planes)."
      },
      {
        "key": "R",
        "name": "Final Answer",
        "type": "Heavy",
        "cooldown": "11s",
        "damage": "Guardbreak + Scenery",
        "description": "Dash forward and punch the target away, breaking guard and scenery (upgradable with Open Book, Bizarre Strength, Land Survey, Trick Question, Flanking, and Blackout)."
      },
      {
        "key": "T",
        "name": "Loose Papers",
        "type": "Utility",
        "cooldown": "6s",
        "description": "Throw up to 2 paper bundles lasting 15s each that trip and knock down the first enemy stepping on them (upgradable with Carbon Paper I-III)."
      },
      {
        "key": "Y",
        "name": "Questionnaire (In Combat)",
        "type": "Utility",
        "cooldown": "20s",
        "description": "Answer a JoJo trivia question within 8s for 4 Data (doubled from 2). Starts with 3 skips, recovering 1 skip per 3 correct answers."
      },
      {
        "key": "T (Hold) + E",
        "name": "Imperfect JoJo (Form 1)",
        "type": "Awakening / EX",
        "exCost": "1 Bar",
        "cooldown": "8s",
        "description": "Manifest human form early with +5% damage and active Survey Upgrades until continuous EX drain empties your gauge or you cancel."
      },
      {
        "key": "T (Hold) + R",
        "name": "Ultimate JoJo (Form 2)",
        "type": "Awakening / EX",
        "exCost": "3 Bars",
        "cooldown": "45s",
        "description": "At 42 Data, transform into the Ultimate JoJo Human until death with +15% damage, +10% movement speed, and all 14 Survey Upgrades active simultaneously."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 50,
        "damage": 50,
        "ability": 50
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Jojosapiens in STAND OUT?",
        "a": "Awarded upon completing the dedicated research questline from Major Tom and town NPCs."
      },
      {
        "q": "What combat role does Jojosapiens fulfill?",
        "a": "Jojosapiens functions primarily as an authentic Support Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-26"
  },
  {
    "slug": "november-rain",
    "name": "November Rain",
    "canonicalUser": "Jodio Joestar",
    "jojoPart": "Part 9: The JOJOLands",
    "rarity": "Mythical",
    "tier": {
      "pvp": "S+",
      "raid": "S+",
      "farming": "S+"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items.",
    "lore": "November Rain is a powerful Stand possessed by Jodio Joestar in Part 9: The JOJOLands.",
    "image": "/images/stands/november-rain.webp",
    "combatRole": "Zoner",
    "passives": [
      {
        "name": "Heavy Droplets",
        "description": "Produces localized precipitation directly beneath its chassis with controllable gravitational mass, crushing grounded opponents."
      },
      {
        "name": "Crushing Downpour",
        "description": "Enemies caught within continuous rainfall suffer cumulative slowdown and lose jump height."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Hidden Piloting",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Use Ctrl while November Rain is unsummoned to move it quickly and leave it in position. You can use Make It Rain to summon it and start the downpour instantly. Taking a hit forces it to appear. If it is left beyond your range, it walks back to you."
      },
      {
        "key": "E",
        "name": "Pressure",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Enemies gain one stack of Pressure per second in your rain. At one stack, attacks are slowed. At two stacks, movement slows too. At three, the enemy is crushed and the stacks clear. Outside the rain, they lose one stack per second. Multiple rain sources do not stack quicker. ‌"
      },
      {
        "key": "R",
        "name": "Make It Rain",
        "type": "Attack",
        "cooldown": "8s",
        "damage": "Combative Strike",
        "description": "Toggle a downpour beneath November Rain. Enemies caught in it take steady damage, become Soaked and build Pressure. The rain passes through roofs and floors. Press again to stop. While piloting the unsummoned Stand, this summons it at that spot and starts the rain."
      },
      {
        "key": "T",
        "name": "Catch The Rainbow",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "users in your party, or players you have spared, can use your active downpour as a water source from up to 8 studs away, or 16 when the stand is larger."
      },
      {
        "key": "Y",
        "name": "Rainfall",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Rain falls beneath November Rain, passing through roofs and floors for up to 60 studs below its feet. It applies Soaked without Cold, puts out fires and enlarges puddles it lands in."
      },
      {
        "key": "F",
        "name": "Tilt",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Combative Strike",
        "description": "Only the stand tilts and fires a stream of rain; aiming does not turn the user’s body. Hold the skill to keep firing. The direction of the drops is aimable. Each drop briefly stuns, pushes enemies back, applies Soaked and builds Pressure. Rain that hits a flat ceiling leaves a puddle there for one m"
      },
      {
        "key": "G",
        "name": "Skewer",
        "type": "Attack",
        "cooldown": "10s",
        "damage": "Combative Strike",
        "description": "Stab the nearest enemy in reach with November Rain’s closest leg, koncking them down. Breaks guards, but can be perfect blocked. Deals 150% more damage while the Stand is enlarged. Deals bonus damage when the target is crushed by Pressure."
      },
      {
        "key": "H",
        "name": "Isolation Veil",
        "type": "Attack",
        "cooldown": "18s",
        "damage": "Combative Strike",
        "description": "Surround November Rain with a curtain of rain for 5 seconds. The rain stops all projectiles and forces thrown props straight down. While inside, you are also protected from two light melee attacks or one heavy hit before the curtain breaks. Higher ability extends the duration."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 40,
        "damage": 55,
        "ability": 55
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain November Rain in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items."
      },
      {
        "q": "What combat role does November Rain fulfill?",
        "a": "November Rain functions primarily as an authentic Zoner Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "highway-star",
    "name": "Highway Star",
    "canonicalUser": "Yuya Fungami",
    "jojoPart": "Part 4: Diamond is Unbreakable",
    "rarity": "Mythical",
    "tier": {
      "pvp": "S+",
      "raid": "S",
      "farming": "S"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 4 focus items.",
    "lore": "Highway Star is a powerful Stand possessed by Yuya Fungami in Part 4: Diamond is Unbreakable.",
    "image": "/images/stands/highway-star.webp",
    "combatRole": "Speed / Hit-and-Run",
    "passives": [
      {
        "name": "Scent",
        "description": "Scented enemies appear on your scent list and are marked through walls. Pursuit can chase them within 600 studs. Becoming Soaked washes the scent off."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Barrage",
        "type": "Barrage",
        "cooldown": "14s",
        "damage": "Multi-Hit Rapid DMG",
        "description": "Unleash a rapid flurry of punches on your opponent."
      },
      {
        "key": "E",
        "name": "Scent Trap",
        "type": "Attack",
        "cooldown": "30s",
        "damage": "Combative Strike",
        "description": "Aim at a throwable to coat it in scent, or aim at the ground to throw a fake Mysterious Arrow. Touching either applies Scented for 3 minutes. The arrow also drains and slows whoever takes the bait. Traps last 1 minute, with up to one arrow and two coated items at a time."
      },
      {
        "key": "R",
        "name": "Pursuit",
        "type": "Attack",
        "cooldown": "28s",
        "damage": "Combative Strike",
        "description": "Tap to send Highway Star after your selected Scented target within 600 studs. It chases them on its own and drains them on contact, healing you and filling your Nutrients. Hold to recall it, or hold while it is home to cycle through scents. A perfect block as the feet land is the only way to turn th"
      },
      {
        "key": "T",
        "name": "Footprints",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "A perfect block as Pursuit’s feet land turns them away; once they are on, only becoming Soaked or riding in a fast-moving vehicle removes them, and the same goes for the feet left by Footprint Storm."
      },
      {
        "key": "Y",
        "name": "Nutrient Siphon",
        "type": "Attack",
        "cooldown": "18s",
        "damage": "Combative Strike",
        "description": "Highway Star grabs an enemy in front of it and drains their health to heal you. Scented enemies are held longer and gain more Withered stacks. Against a downed enemy, finish them off and recover 30% of your maximum health."
      },
      {
        "key": "F",
        "name": "Nutrients",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Stand attacks and draining enemies fill your Nutrients, up to 100. Stored Nutrients gradually heal you while Highway Star is summoned. Below 60, you take 20% more damage and move 15% slower while it is out. At 100, your next Scent Trap or Nutrient Siphon is stronger and leaves you with 60. Nutrients"
      },
      {
        "key": "G",
        "name": "Foot Form",
        "type": "Attack",
        "cooldown": "3s",
        "damage": "Combative Strike",
        "description": "Hold the summon key to split Highway Star into a pack of feet. While piloting, move 75% faster and climb walls by moving into them. You cannot punch or fly in this form. Hold the key again to change back."
      },
      {
        "key": "H",
        "name": "Footprint Flurry",
        "type": "Barrage",
        "cooldown": "14s",
        "damage": "Multi-Hit Rapid DMG",
        "description": "In Foot Form, strike enemies in front of you with a flurry of feet. Hits apply Scented and occasionally drain health to heal you. The final hit knocks them back. in normal form, use Barrage instead."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 50,
        "damage": 50,
        "ability": 50
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Highway Star in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 4 focus items."
      },
      {
        "q": "What combat role does Highway Star fulfill?",
        "a": "Highway Star functions primarily as an authentic Speed / Hit-and-Run Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "mandom",
    "name": "Mandom",
    "canonicalUser": "Ringo Roadagain",
    "jojoPart": "Part 7: Steel Ball Run",
    "rarity": "Mythical",
    "tier": {
      "pvp": "S+",
      "raid": "A",
      "farming": "B"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 7 focus items.",
    "lore": "Mandom is a powerful Stand possessed by Ringo Roadagain in Part 7: Steel Ball Run.",
    "image": "/images/stands/mandom.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Stand Aura",
        "description": "Intrinsically manifests user Stand power, scaling combat effectiveness with Ability stat points."
      },
      {
        "name": "Combat Resilience",
        "description": "Mastery over Stand manifestation grants increased resistance to stun and knockback."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Two rewind timings",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Rewind instantly or schedule a rewind with Watch Set."
      },
      {
        "key": "E",
        "name": "Rewind",
        "type": "Attack",
        "cooldown": "45s",
        "damage": "Combative Strike",
        "description": "Turn back time by 6 seconds, restoring your previous position and health."
      },
      {
        "key": "R",
        "name": "Ol' Reliable [BASIC ATTACK]",
        "type": "Attack",
        "cooldown": "28s",
        "damage": "Combative Strike",
        "description": "Fire a trusty revolver shot at your target."
      },
      {
        "key": "T",
        "name": "Deadeye",
        "type": "Attack",
        "cooldown": "35s",
        "damage": "Combative Strike",
        "description": "Take careful aim and fire a powerful shot."
      },
      {
        "key": "Y",
        "name": "Watch Set",
        "type": "Attack",
        "cooldown": "70s",
        "damage": "Combative Strike",
        "description": "Start a countdown that automatically rewinds you and nearby targets. Once the watch is set, you can move and fight while the countdown runs. The rewind happens automatically when time runs out. [EX Moveset: TRUE MAN’S WORLD (5 Bars) Spend a full EX gauge to rewind after a lethal hit during the next "
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 45,
        "damage": 45,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Mandom in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 7 focus items."
      },
      {
        "q": "What combat role does Mandom fulfill?",
        "a": "Mandom functions primarily as an authentic Disruption Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "heavens-door",
    "name": "Heaven's Door",
    "canonicalUser": "Rohan Kishibe",
    "jojoPart": "Part 4: Diamond is Unbreakable",
    "rarity": "Mythical",
    "tier": {
      "pvp": "S",
      "raid": "S",
      "farming": "A"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 4 focus items.",
    "lore": "Heaven's Door is a powerful Stand possessed by Rohan Kishibe in Part 4: Diamond is Unbreakable.",
    "image": "/images/stands/heavens-door.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Stand Aura",
        "description": "Intrinsically manifests user Stand power, scaling combat effectiveness with Ability stat points."
      },
      {
        "name": "Combat Resilience",
        "description": "Mastery over Stand manifestation grants increased resistance to stun and knockback."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Book Transmutation",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Turn an enemy’s face into a book for 1.5-2 seconds based on Ability, allowing blocks but not perfect blocks and closing when either participant is hit. Ability Scaling: At 166 Ability; 17.5 stud range and 2 second book, with damage scaling 80% Ability / 20% Strength. ‌"
      },
      {
        "key": "E",
        "name": "Written Command",
        "type": "Attack",
        "cooldown": "15s",
        "damage": "Combative Strike",
        "description": "Write a command on a book target, with Ability extending Forget Motion from 2 to 2.5 seconds, Sleep from 2 to 3, Forget Me from 6 to 10 and Lower Your Guard from 8 to 10, while Fly Away keeps its 4x wall-splat multiplier. Ability Scaling: At 166 Ability: 25-stud range, Forget Motion 2.5s, Sleep 3s, "
      },
      {
        "key": "R",
        "name": "Page Rip",
        "type": "Attack",
        "cooldown": "28s",
        "damage": "Combative Strike",
        "description": "Tear a page from a grabbed book target for 16 base damage. Ability Scaling: Damage scales 70% Strength / 30% Ability, with 4-6 seconds of knockback vulnerability at an unchanged 1.45x multiplier."
      },
      {
        "key": "T",
        "name": "Safety Lock",
        "type": "Attack",
        "cooldown": "34s",
        "damage": "Combative Strike",
        "description": "Write on an enemy’s open face to refuse their next two direct attacks against you within 15 seconds. EX [Awakening Moves]"
      },
      {
        "key": "Y",
        "name": "Manga [3 Bars]",
        "type": "Awakening / EX",
        "cooldown": "45s",
        "damage": "High Impact / EX",
        "description": "Hold up Heaven’s Door’s manga panel to do 15 base damage and turn nearby viewers into books for 3-3.5 seconds based on Ability, without allowing perfect blocks. Ability Scaling: 80% Ability / 20% Strength damage; 32-40 stud radius; 3-3.5 second books."
      },
      {
        "key": "F",
        "name": "Become My Character [4 Bars]",
        "type": "Awakening / EX",
        "cooldown": "120s",
        "damage": "High Impact / EX",
        "description": "Command someone you’ve turned into a book to fight for you with their Stand. Ability Scaling: At 166 Ability: control rises from 12s to 20 seconds, application range from 15 to 22 studs and guard detection from 65 to 85 studs."
      },
      {
        "key": "G",
        "name": "Chapter Counter [3 Bars]",
        "type": "Awakening / EX",
        "cooldown": "35s",
        "damage": "High Impact / EX",
        "description": "Spend 2 EX bars to counter an attack and book the attacker for 3.5-4 seconds based on Ability, with stun ending alongside ragdoll. Ability Scaling: Book duration scales from 3-4 seconds by 166 Ability without changing the counter activation window."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 45,
        "damage": 45,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Heaven's Door in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 4 focus items."
      },
      {
        "q": "What combat role does Heaven's Door fulfill?",
        "a": "Heaven's Door functions primarily as an authentic Disruption Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "big-mouth-strikes-again",
    "name": "Big Mouth Strikes Again",
    "canonicalUser": "Charming Man",
    "jojoPart": "Part 9: The JOJOLands",
    "rarity": "Mythical",
    "tier": {
      "pvp": "S",
      "raid": "A+",
      "farming": "A"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items.",
    "lore": "Big Mouth Strikes Again is a powerful Stand possessed by Charming Man in Part 9: The JOJOLands.",
    "image": "/images/stands/big-mouth-strikes-again.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Sandy Camouflage",
        "description": "User’s skin breaks into fine particles, blending seamlessly into terrain textures and breaking enemy target lock."
      },
      {
        "name": "Flesh Separation",
        "description": "Detach body parts to set remote ambush traps while retaining full motor control from safety."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Chameleon",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Crouch near walls at any time to gain stealth. Uncrouching or attacking reveals you."
      },
      {
        "key": "E",
        "name": "Hand-Eye Coordination",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Tap Ctrl to detach your dagger hand, or hold it to detach an eye. The hand has short range but can use basic attacks and dagger skills. The eye can be used to scout at a much larger range. Press ctrl again or take a hit to stop controlling them. Using M1 while piloting the eye marks enemies in sight"
      },
      {
        "key": "R",
        "name": "Blend In",
        "type": "Attack",
        "cooldown": "20s",
        "damage": "Combative Strike",
        "description": "Hide for up to six seconds. Attacking reveals you and gives your next hit 50% more damage. Taking damage or pressing again also ends it. Enemies can still hit you and hear your footsteps."
      },
      {
        "key": "T",
        "name": "Shank Barrage",
        "type": "Barrage",
        "cooldown": "14s",
        "damage": "Multi-Hit Rapid DMG",
        "description": "Slash repeatedly in front of you. Then finish with a heavier slice that knocks targets away and causes Bleed for four seconds. Can be blocked or perfect blocked."
      },
      {
        "key": "Y",
        "name": "Fragmented",
        "type": "Attack",
        "cooldown": "20s",
        "damage": "Combative Strike",
        "description": "Avoid the next direct hit for 1.25 seconds, leaving a copy behind. You become hidden, invulnerable and much faster for one second. Press again to end the movement early, or attack to return with 50% more damage on your next hit."
      },
      {
        "key": "F",
        "name": "Go For The Throat",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Lunge forward with your dagger. A hit causes Bleed and stops the enemy from speaking for six seconds. Breaks guard instead if they are blocking. Can be perfect blocked."
      },
      {
        "key": "G",
        "name": "Eye Slash [1 Bar]",
        "type": "Awakening / EX",
        "cooldown": "18s",
        "damage": "High Impact / EX",
        "description": "Cut across nearby enemies, blinding them for 3.5 seconds. Can be blocked or perfect blocked."
      },
      {
        "key": "H",
        "name": "Identity Theft [1 Bar]",
        "type": "Awakening / EX",
        "cooldown": "12s",
        "damage": "High Impact / EX",
        "description": "Steal the nearest person’s ID in front of you without breaking camouflage, Hold to open your wallet and copy a stolen name and appearance from your collected IDs. Attacking or taking damage ends the disguise; hold to change back. Keep up to three IDs until you die."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 45,
        "damage": 45,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Big Mouth Strikes Again in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items."
      },
      {
        "q": "What combat role does Big Mouth Strikes Again fulfill?",
        "a": "Big Mouth Strikes Again functions primarily as an authentic Disruption Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "kraft-work",
    "name": "Kraft Work",
    "canonicalUser": "Sale",
    "jojoPart": "Part 5: Golden Wind",
    "rarity": "Epic",
    "tier": {
      "pvp": "S",
      "raid": "S",
      "farming": "A"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 5 focus items.",
    "lore": "Kraft Work is a powerful Stand possessed by Sale in Part 5: Golden Wind.",
    "image": "/images/stands/kraft-work.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Krafted",
        "description": "Kraft Work’s heavy attacks, hits from projectiles you froze, Fixation and Kinetic Field leave enemies Krafted for 10 seconds. Contact Fixation and touching your frozen objects also mark enemies. A heavy attack that releases a Kinetized enemy does ..."
      },
      {
        "name": "Kinetic Control",
        "description": "With Kraft Work summoned, block just before a projectile reaches its front to freeze it. While blocking, use R just before a projectile hits to deflect and freeze it. You can freeze 15 objects at once. They unfreeze when you dismiss Kraft Work or ..."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Kinetic Throw",
        "type": "Attack",
        "cooldown": "9s",
        "damage": "Ranged Projectile",
        "description": "When throwing an object, then use R during the windup to lift it and kinetically lock it."
      },
      {
        "key": "E",
        "name": "Fixation",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Combative Strike",
        "description": "Freeze projectiles, loose throwables, vehicles and piloted Stands around Kraft Work, and mark enemies Krafted. Enemies caught in the burst become Krafted for 10 seconds. The burst freezes projectiles from any direction and loose throwables, and stops vehicles, trains and piloted Stands for 4 seconds"
      },
      {
        "key": "R",
        "name": "Contact Fixation",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Touch an enemy with Kraft Work to leave them Kineticized, or freeze a loose throwable to charge and launch. Kineticized lasts 4 seconds. Light attacks build up to 6 charges and change the enemy’s launch direction. Charged enemies launch them when the hold ends. Use R or Werk to throw them early. The"
      },
      {
        "key": "T",
        "name": "Rock Throw",
        "type": "Attack",
        "cooldown": "10s",
        "damage": "Ranged Projectile",
        "description": "Throw three rocks in a small fan. Press again at any point in their flight to freeze the rocks."
      },
      {
        "key": "Y",
        "name": "Press again",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "(Fixating the rocks, M1ng then and then using Werk to launch them.)"
      },
      {
        "key": "F",
        "name": "Werk",
        "type": "Attack",
        "cooldown": "1.25s",
        "damage": "Combative Strike",
        "description": "Tap to release your frozen objects and enemies. Hold to turn nearby Krafted enemies Kineticized. Hold until the snap to leave nearby enemies you marked Krafted Kineticized for 4 seconds. If an enemy is piloting, the snap freezes their Stand instead. The snap can be perfect blocked. The held version "
      },
      {
        "key": "G",
        "name": "Hold",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "(Using the held variant of Werk to turn a marked enemy (Krafted) Kineticized to then M1 them and launch them.)"
      },
      {
        "key": "H",
        "name": "Stepping Stones",
        "type": "Attack",
        "cooldown": "5s",
        "damage": "Combative Strike",
        "description": "Throw three floating stones to cross gaps or climb higher. Aim in a direction to throw out three stone slabs. Enemies can break them. Stepping on your own stones resets your jump cooldown. Placing more keeps the stone you are standing on. You can charge and launch the stones like other frozen object"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 45,
        "damage": 45,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Kraft Work in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 5 focus items."
      },
      {
        "q": "What combat role does Kraft Work fulfill?",
        "a": "Kraft Work functions primarily as an authentic Disruption Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "the-hustle",
    "name": "The Hustle",
    "canonicalUser": "Paco Laburante",
    "jojoPart": "Part 9: The JOJOLands",
    "rarity": "Epic",
    "tier": {
      "pvp": "A+",
      "raid": "A",
      "farming": "A"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items.",
    "lore": "The Hustle is a powerful Stand possessed by Paco Laburante in Part 9: The JOJOLands.",
    "image": "/images/stands/the-hustle.webp",
    "combatRole": "Offense",
    "passives": [
      {
        "name": "Chiseled Like A Rock",
        "description": "Summoning The Hustle grows muscles on your body. While it’s out you take 10% less damage, deal 5% more melee damage and deal 50% more damage to piloted Stands. Use R while blocking to knock bullets away."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Bizarre Physique",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "The Hustle can’t be piloted. Press Pilot (Ctrl) to flex instead. You can climb and crawl on any surface but can’t sprint in this mode, and Leap ends it. The first throwable you walk into sticks to your back and takes the next hit for you. Press H to take it off."
      },
      {
        "key": "E",
        "name": "Throat Grab",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Grab an enemy by the throat and choke them for 5 seconds. You can walk and climb walls while holding them. Press again to use DO IT and throw them, which can be aimed upwards with your camera. Being thrown into a wall or other player does bonus damage. Hold the key instead to carry someone with no d"
      },
      {
        "key": "R",
        "name": "The Path Of Violence",
        "type": "Attack",
        "cooldown": "14s",
        "damage": "Combative Strike",
        "description": "Lunge forward with an elbow. If it lands, you dash in, grab them and beat them down before sending them flying. The initial flying elbow deals chip damage."
      },
      {
        "key": "T",
        "name": "Tense Up",
        "type": "Attack",
        "cooldown": "18s",
        "damage": "Combative Strike",
        "description": "Tense your body for 1 second. You gain the unstoppable status during this pose. Attacks during the window do 75% less damage to you and a quarter of the damage hits the attacker instead. If the attack hits you in the first 0.3 seconds of the stance, it’s parried, the attacker is stuck to you for 2 s"
      },
      {
        "key": "Y",
        "name": "DO the HUSTLE",
        "type": "Attack",
        "cooldown": "30s",
        "damage": "Combative Strike",
        "description": "Requires 25 HUSTLE. Flex to grow bigger and knock away anyone next to you. Constantly drain your HUSTLE meter to deal 30% more melee damage, move 20% faster, throw objects harder, make targets vibrate with every hit and break guard with your last basic attack. Taking hits and blocking can keep the m"
      },
      {
        "key": "F",
        "name": "HUSTLE",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Damage you take, hits you block, hits Tense Up softens and hits your Muscle Plate takes you all add HUSTLE. It slowly drains every 10 seconds out of combat. Do the HUSTLE spends it."
      },
      {
        "key": "G",
        "name": "Weapon Disarm [1 Bar]",
        "type": "Awakening / EX",
        "cooldown": "18s",
        "damage": "High Impact / EX",
        "description": "Take the throwable out of a target’s hands, or knock the item they’re holding to the ground."
      },
      {
        "key": "H",
        "name": "Muscle Spasm [1 Bar]",
        "type": "Awakening / EX",
        "cooldown": "20s",
        "damage": "High Impact / EX",
        "description": "Your next heavy attack plants a hidden muscle spasm in the target for 8 seconds. The next time they shoot, throw or use a heavy attack, it goes wrong and leaves them stunned."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 45,
        "damage": 65,
        "ability": 40
      },
      "subAbility": "Hamon (Jonathan Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain The Hustle in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items."
      },
      {
        "q": "What combat role does The Hustle fulfill?",
        "a": "The Hustle functions primarily as an authentic Offense Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "notorious-big",
    "name": "Notorious B.I.G",
    "canonicalUser": "Carne",
    "jojoPart": "Part 5: Golden Wind",
    "rarity": "Epic",
    "tier": {
      "pvp": "S",
      "raid": "S+",
      "farming": "A+"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 5 focus items.",
    "lore": "Notorious B.I.G is a powerful Stand possessed by Carne in Part 5: Golden Wind.",
    "image": "/images/stands/notorious-big.webp",
    "combatRole": "Tank",
    "passives": [
      {
        "name": "Death Wish",
        "description": "While Notorious B.I.G’s user is alive, every hit against them does 50% more damage."
      },
      {
        "name": "Hate",
        "description": "Landing hits, getting hurt, Stalking and insulting people all build Hate, up to 250. It slowly fades when you haven’t added any for a few seconds. The more Hate you die with, the more Mass Notorious B.I.G rises with, and at full Hate it rises bigger."
      },
      {
        "name": "Grudge",
        "description": "Anyone who hurts you builds a Grudge against you, more the harder they hit, and whoever kills you gets a full one. It shows as a red bar over their head that only you can see. The dead Notorious B.I.G deals up to 50% more damage to enemies with a ..."
      },
      {
        "name": "Vengeful Life",
        "description": "the moment you would start Bleeding out, Notorious B.I.G emerges and you become it in the same life. Your health becomes Mass. It drains all the time and only eating brings it back, so you have to keep feeding. When your Mass runs out, you die for..."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Hateful Punches",
        "type": "Attack",
        "cooldown": "14s",
        "damage": "Combative Strike",
        "description": "Notorious B.I.G throws a slow barrage of hateful punches. Every hit builds Hate, and the last one staggers. Taking a hit interrupts it."
      },
      {
        "key": "E",
        "name": "Insult",
        "type": "Attack",
        "cooldown": "14s",
        "damage": "Combative Strike",
        "description": "Hiss and scream insults at everyone around you. Each enemy in range takes 20% more damage for 8 seconds, gives you Hate, and loses any Grudge they had against you."
      },
      {
        "key": "R",
        "name": "Tumorous Pulse",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Combative Strike",
        "description": "Notorious B.I.G steps out in front of you and smashes the ground, sending a wave of tumors bursting forward through it. Anyone it catches is thrown far forward and knocked down. Blocking it keeps you on your feet."
      },
      {
        "key": "T",
        "name": "Stalk (HOLD)",
        "type": "Attack",
        "cooldown": "6s",
        "damage": "Combative Strike",
        "description": "Hold to stare down an enemy in front of you. While they aren’t looking at you, or you’re too far away for them to notice, you build Hate. If anyone close by looks at you, you’re spotted and the stalk ends. It also ends once your Hate is full."
      },
      {
        "key": "Y",
        "name": "Good Luck (3 Bars)",
        "type": "Attack",
        "cooldown": "30s",
        "damage": "Combative Strike",
        "description": "Costs 3 EX bars and all of your Hate. Your stand is put away and you burst into Notorious B.I.G on the spot, starting with 40 extra Mass. Works even while your next transformation is on cooldown."
      },
      {
        "key": "F",
        "name": "Blind",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "As Notorious B.I.G you only see a short way through a dark fog. Past that, anyone walking shows up as a faint pink square, and anyone running or driving shows up as a bright one from much farther away, even through walls. While you’re eating or riding someone, you see through their eyes."
      },
      {
        "key": "G",
        "name": "Can’t swim",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "As Notorious B.I.G, deep water (the sea, lakes and pools, not puddles) kills you on the spot; the body sinks to the bottom and you respawn a few seconds later. Riding a boat is safe. While you’re still alive you swim like anyone else."
      },
      {
        "key": "H",
        "name": "Mouthful",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "As Notorious B.I.G, picking up an object swallows it instead of carrying it. Attack or press the pick-up key again to spit it back out in front of you. It can’t throw things, and cars are too big to pick up."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 65,
        "damage": 45,
        "ability": 40
      },
      "subAbility": "Hamon (Jonathan Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Notorious B.I.G in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 5 focus items."
      },
      {
        "q": "What combat role does Notorious B.I.G fulfill?",
        "a": "Notorious B.I.G functions primarily as an authentic Tank Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "rolling-stones",
    "name": "Rolling Stones",
    "canonicalUser": "Scolippi",
    "jojoPart": "Part 5: Golden Wind",
    "rarity": "Epic",
    "tier": {
      "pvp": "A",
      "raid": "B",
      "farming": "C"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 5 focus items.",
    "lore": "Rolling Stones is a powerful Stand possessed by Scolippi in Part 5: Golden Wind.",
    "image": "/images/stands/rolling-stones.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Stone Deity",
        "description": "Use E to release Rolling Stones. It follows its own targets and cannot be recalled."
      },
      {
        "name": "Spiritual Connection",
        "description": "use Ctrl to watch from the stone. This only changes your view. If you die, the stone remains, removes its current target, and moves to the next."
      },
      {
        "name": "We Are All Slaves Of Fate",
        "description": "Eight seconds after summon, a random player or NPC becomes Roling Stone’s target and receives a hidden timer of 120 seconds. The user cannot be the first target, Rolling and leaping begin after the first 10% of the timer; until then the stone can ..."
      },
      {
        "name": "Ruthlessness Is Mercy",
        "description": "If the stone touches its current target, that target dies immediately and painlessly. Contact with anyone else is harmless."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Forbidden Throwable",
        "type": "Attack",
        "cooldown": "9s",
        "damage": "Ranged Projectile",
        "description": "Pick up the stone with the normal throwable controls."
      },
      {
        "key": "E",
        "name": "It’s Not My Time Yet",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "While someone else is the stone’s current target, damage to someone holding the stone is absorbed by the stone instead. Carrying the stone prevents the holder from attacking or healing, and moving too far away from the stone’s target will cause it to melt through their hands to escape."
      },
      {
        "key": "R",
        "name": "Within Death’s Reach",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "The stone rolls after its target and leaps when close."
      },
      {
        "key": "T",
        "name": "Unearthed Insight",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "The stone changes form as it loses health."
      },
      {
        "key": "Y",
        "name": "Steintossen",
        "type": "Attack",
        "cooldown": "10s",
        "damage": "Combative Strike",
        "description": "While holding Rolling Stones as a throwable, launch it in a stronger aimed arc. The impact damages and knocks back nearby enemies, breaking fragile scenery."
      },
      {
        "key": "F",
        "name": "Sculpted Destruction",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Strike nearby Rolling Stones with a sledgehammer, sending stone fragments forward. Each strike advances the stone one health stage: regular to damaged, then destroyed."
      },
      {
        "key": "G",
        "name": "Written in Stone",
        "type": "Attack",
        "cooldown": "8s",
        "damage": "Combative Strike",
        "description": "Carve a short message into the top of nearby Rolling Stones. Enter up to 48 characters, then confirm. Taking damage interrupts carving. A new inscription replaces the old one."
      },
      {
        "key": "H",
        "name": "Super Glue",
        "type": "Utility",
        "cooldown": "12s",
        "damage": "Combative Strike",
        "description": "Hold beside Rolling Stones to kneel and repair 5% of its maximum health every half second, for up to 10 seconds. Can rebuild rubble. Release to stop; damageto you or the stone interrupts the repair. EX [Awakening Moves]"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 45,
        "damage": 45,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Rolling Stones in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 5 focus items."
      },
      {
        "q": "What combat role does Rolling Stones fulfill?",
        "a": "Rolling Stones functions primarily as an authentic Disruption Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "harvest",
    "name": "Harvest",
    "canonicalUser": "Shigekiyo Yangu",
    "jojoPart": "Part 4: Diamond is Unbreakable",
    "rarity": "Epic",
    "tier": {
      "pvp": "B",
      "raid": "B",
      "farming": "Z"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 4 focus items.",
    "lore": "Harvest is a powerful Stand possessed by Shigekiyo Yangu in Part 4: Diamond is Unbreakable.",
    "image": "/images/stands/harvest.webp",
    "combatRole": "Support",
    "passives": [
      {
        "name": "Stand Aura",
        "description": "Intrinsically manifests user Stand power, scaling combat effectiveness with Ability stat points."
      },
      {
        "name": "Combat Resilience",
        "description": "Mastery over Stand manifestation grants increased resistance to stun and knockback."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "## Harvest Tornado",
        "type": "Attack",
        "cooldown": "23s",
        "damage": "Combative Strike",
        "description": "Harvest circles you at high speed, shredding nearby enemies from every direction. [Search Party / Command [M1] / Cycle [TAP] / Recall [HOLD]: Send all nine Harvest out to search. The enemies, objects and items they find stay marked until you recall them.] [Command [M1]: EX [Awakening Moves]]"
      },
      {
        "key": "E",
        "name": "Poured Into Veins [3 Bars]",
        "type": "Awakening / EX",
        "cooldown": "16s",
        "damage": "High Impact / EX",
        "description": "“I poured it into your veins!” All nine Harvest combine into one concealed trap and overwhelm its victim with poisoned stings."
      },
      {
        "key": "R",
        "name": "## You want proof?! [4 Bars]",
        "type": "Awakening / EX",
        "cooldown": "35s",
        "damage": "High Impact / EX",
        "description": "Harvest quadruples its ranks and overwhelms one marked enemy."
      },
      {
        "key": "T",
        "name": "## Snatch [2 Bars]",
        "type": "Awakening / EX",
        "cooldown": "18s",
        "damage": "High Impact / EX",
        "description": "Send Harvest to take a consumable from an enemy’s hand and bring it back. Getting hit on the way interrupts them and drops anything they took."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 50,
        "damage": 50,
        "ability": 50
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Harvest in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 4 focus items."
      },
      {
        "q": "What combat role does Harvest fulfill?",
        "a": "Harvest functions primarily as an authentic Support Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "tubular-bells",
    "name": "Tubular Bells",
    "canonicalUser": "Mike O.",
    "jojoPart": "Part 7: Steel Ball Run",
    "rarity": "Epic",
    "tier": {
      "pvp": "A+",
      "raid": "A",
      "farming": "B"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 7 focus items.",
    "lore": "Tubular Bells is a powerful Stand possessed by Mike O. in Part 7: Steel Ball Run.",
    "image": "/images/stands/tubular-bells.webp",
    "combatRole": "Zoner",
    "passives": [
      {
        "name": "Five Animals",
        "description": "Nails and gas cans make dogs, hydrants make swans, trash cans make turtles, signs make snakes, and metal benches or empty cars make lions. Holding Inflate longer increases size, damage and knockback. [Fire hydrants (Swan): (The swan is faster than..."
      },
      {
        "name": "Balloon Control",
        "description": "Tap Ctrl to cycle through your balloon animals and back to your body. Move toward your camera; aim up or down to change height. Hold Ctrl to return immediately."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Nails and gas cans (Dog)",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "(The dog is faster when scent tracking)"
      },
      {
        "key": "E",
        "name": "Early Pop",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Press E while piloting to pop the balloon and drop its original object."
      },
      {
        "key": "R",
        "name": "Inflate Balloon",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Hold while aiming at a metal object to blow it into a balloon animal. Blow longer to make it bigger and hit harder. Tap to send an animal forward; it returns if it misses. Keep up to five, including duplicates. (Cursor over object)"
      },
      {
        "key": "T",
        "name": "Pick Up Scent",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Hold while aiming at a throwable to collect the scent of its last owner, or someone nearby. Tap to send your animals after that person, even through walls. Tap again to recall them. The scent lasts 45 seconds."
      },
      {
        "key": "Y",
        "name": "Balloon Flower",
        "type": "Attack",
        "cooldown": "6s",
        "damage": "Combative Strike",
        "description": "Plant a flower in front of you. It takes one second to grow, then blasts enemies who approach from the front. The burst knocks them down; enemies behind it are safe. Keep up to three flowers, each lasting 25 seconds."
      },
      {
        "key": "F",
        "name": "Spiked Balloon Swarm",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Inflate nearby metal into a swarm of small balloons, some covered in spikes. Bigger objects make larger swarms. They drift toward enemies ahead, stick to them, then burst. Each enemy can take up to five hits. (Cursor over object)"
      },
      {
        "key": "G",
        "name": "Balloon Beast [4 Bars]",
        "type": "Awakening / EX",
        "cooldown": "40s",
        "damage": "High Impact / EX",
        "description": "Combine one of each animal into a T-rex, or five of the same animal into a weaker giant. Pilot it, send it with Inflate or have it follow a scent. It swallows an enemy on contact and bursts inside them. Lasts up to 50 seconds and uses all five balloons."
      },
      {
        "key": "H",
        "name": "Babylonian Balloons [3 Bars]",
        "type": "Awakening / EX",
        "cooldown": "22s",
        "damage": "High Impact / EX",
        "description": "Turn your balloons into swords and fire them forward one after another. They stick into enemies, then burst and cause Bleed."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 40,
        "damage": 55,
        "ability": 55
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Tubular Bells in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 7 focus items."
      },
      {
        "q": "What combat role does Tubular Bells fulfill?",
        "a": "Tubular Bells functions primarily as an authentic Zoner Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "super-fly",
    "name": "Super Fly",
    "canonicalUser": "Toyohiro Kanedaichi",
    "jojoPart": "Part 4: Diamond is Unbreakable",
    "rarity": "Epic",
    "tier": {
      "pvp": "B",
      "raid": "C",
      "farming": "C"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 4 focus items.",
    "lore": "Super Fly is a powerful Stand possessed by Toyohiro Kanedaichi in Part 4: Diamond is Unbreakable.",
    "image": "/images/stands/super-fly.webp",
    "combatRole": "Tank",
    "passives": [
      {
        "name": "Tower Boundary",
        "description": "User is tethered to the electrical transmission tower; leaving the boundary petrifies the occupant into metal."
      },
      {
        "name": "Kinetic Retaliation",
        "description": "Attacks striking the tower frame absorb kinetic energy and reflect back at 100% velocity."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "## Prisoner Boundary",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "If you are the tower’s lone prisoner, crossing outside its boundary turns you to metal. Another occupant is needed before the prisoner can leave normally. Attacking the tower feeds Damage Redirection. ‌"
      },
      {
        "key": "E",
        "name": "Deploy Power Line",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Combative Strike",
        "description": "Throw a power line where you aim. Anyone can click near the top to zip down, or near the landed hook to climb back up. Click again to let go. Tap to deploy a line. Any player can aim at the top and press M1 nearby to ride down, or do the same at the bottom to climb up more slowly. Press M1 again whi"
      },
      {
        "key": "R",
        "name": "Screw Volley",
        "type": "Attack",
        "cooldown": "23s",
        "damage": "Combative Strike",
        "description": "Fire three screws from the tower. Shiftlock aims them at the target closest to your mouse. Screws stick into whatever they hit."
      },
      {
        "key": "T",
        "name": "Damage Redirection",
        "type": "Attack",
        "cooldown": "15s",
        "damage": "Combative Strike",
        "description": "Super Fly stores damage from attacks against it. Tap to fire it at your target, or hold to send each attacker their share back. You can hit the tower to charge it yourself. While someone else is trapped, it fires back automatically. ‌"
      },
      {
        "key": "Y",
        "name": "Super Leap",
        "type": "Movement",
        "cooldown": "35s",
        "damage": "Combative Strike",
        "description": "Hold to pick a ledge on your tower, then release to jump there. EX [Awakening Moves]"
      },
      {
        "key": "F",
        "name": "Tower Reposition",
        "type": "Attack",
        "cooldown": "75s",
        "damage": "Combative Strike",
        "description": "Send the whole tower spinning into the sky, then bring it down where you’re standing. The landing sends nearby enemies flying and plants Super Fly in its new spot."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 65,
        "damage": 45,
        "ability": 40
      },
      "subAbility": "Hamon (Jonathan Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Super Fly in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 4 focus items."
      },
      {
        "q": "What combat role does Super Fly fulfill?",
        "a": "Super Fly functions primarily as an authentic Tank Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "under-world",
    "name": "Under World",
    "canonicalUser": "Donatello Versus",
    "jojoPart": "Part 6: Stone Ocean",
    "rarity": "Epic",
    "tier": {
      "pvp": "A+",
      "raid": "A+",
      "farming": "A"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 6 focus items.",
    "lore": "Under World is a powerful Stand possessed by Donatello Versus in Part 6: Stone Ocean.",
    "image": "/images/stands/under-world.webp",
    "combatRole": "Zoner",
    "passives": [
      {
        "name": "Excavated Memory",
        "description": "Unearths historical terrain memories from the earth, manifesting past airplane crashes and buried hazards."
      },
      {
        "name": "Fated Catastrophe",
        "description": "Enemies dragged into excavated memories are locked into unavoidable historical outcomes."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Unearth",
        "type": "Attack",
        "cooldown": "45s",
        "damage": "Combative Strike",
        "description": "Dig a warrior from the ground’s memory to guard you and attack nearby enemies."
      },
      {
        "key": "E",
        "name": "Prop Memory",
        "type": "Attack",
        "cooldown": "29s",
        "damage": "Combative Strike",
        "description": "Let Under World dig up a random usable object from the ground’s memory. (Gasoline, Table, Chair, Sign) [Tora! Tora! Tora! / Aim Drop [HOLD] / Drop [TAP AGAIN]: Tap to dig up an Aichi D3A, steer by turning, then tap again to drop three incendiary bombs. Hold to send it bombing where you’re aiming. ]"
      },
      {
        "key": "R",
        "name": "Pilot Mode",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Summon your stand, then use Ctrl to enter or leave pilot control. EX [Awakening Moves]"
      },
      {
        "key": "T",
        "name": "Underground Illusion Chamber [1 Bar]",
        "type": "Awakening / EX",
        "cooldown": "75s",
        "damage": "High Impact / EX",
        "description": "Dig a chamber beneath the battlefield. Use again while nearby to recreate a volcanic eruption inside."
      },
      {
        "key": "Y",
        "name": "Zero Hour [1 Bar]",
        "type": "Awakening / EX",
        "cooldown": "24s",
        "damage": "High Impact / EX",
        "description": "Dig up an A6M Zero for a strafing run, firing its machine guns across a long strip of ground."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 40,
        "damage": 55,
        "ability": 55
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Under World in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 6 focus items."
      },
      {
        "q": "What combat role does Under World fulfill?",
        "a": "Under World functions primarily as an authentic Zoner Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "walking-heart",
    "name": "Walking Heart",
    "canonicalUser": "Hato Higashikata",
    "jojoPart": "Part 8: JoJolion",
    "rarity": "Epic",
    "tier": {
      "pvp": "A",
      "raid": "A",
      "farming": "B"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 8 focus items.",
    "lore": "Walking Heart is a powerful Stand possessed by Hato Higashikata in Part 8: JoJolion.",
    "image": "/images/stands/walking-heart.webp",
    "combatRole": "Offense",
    "passives": [
      {
        "name": "Heel Spikes",
        "description": "Extends hardened heel spikes up to 4 meters into walls, floors, and ceilings for vertical mobility."
      },
      {
        "name": "Surface Grip",
        "description": "Can scale sheer vertical surfaces and hang inverted to execute downward heel drive ambushes."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "## Spike Extension",
        "type": "Attack",
        "cooldown": "24s",
        "damage": "Combative Strike",
        "description": "Extend your heels to reach higher surfaces and enable wall and ceiling movement. With your heels extended, you can walk on walls and ceilings. Watch which way you are facing as you move around an edge."
      },
      {
        "key": "E",
        "name": "Heel Barrage",
        "type": "Barrage",
        "cooldown": "23s",
        "damage": "Multi-Hit Rapid DMG",
        "description": "Rapid-fire kicks with spiked heels. [Spike Creation / Charge Stomp [HOLD]: Stomp the ground to create a field of deadly spikes. (The spike can then be grabbed and thrown.) VARIATION: Charge Stomp [HOLD] ]"
      },
      {
        "key": "R",
        "name": "Ground Impale",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Combative Strike",
        "description": "Target an opponent near your aim to raise a ground spike and impale them. Aims within 14 studs of the cursor; if no target is found, chooses the closest opponent within 10 studs of you. The strike position is fixed when activated, so opponents can jump or dash away during startup. Breaks guards, but"
      },
      {
        "key": "T",
        "name": "Stomp EX [3 Bars]",
        "type": "Awakening / EX",
        "cooldown": "45s",
        "damage": "High Impact / EX",
        "description": "Stomp the ground and erupt a field of spikes in front of you. (All erupted spikes can be thrown.)"
      },
      {
        "key": "Y",
        "name": "Impale EX [3 Bars]",
        "type": "Awakening / EX",
        "cooldown": "28s",
        "damage": "High Impact / EX",
        "description": "Extend your heel to impale up to three opponents, carry them outward, and pull them back. Inflicts bleed for 4 seconds. Breaks guard, but can be parried. A miss retracts faster."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 45,
        "damage": 65,
        "ability": 40
      },
      "subAbility": "Hamon (Jonathan Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Walking Heart in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 8 focus items."
      },
      {
        "q": "What combat role does Walking Heart fulfill?",
        "a": "Walking Heart functions primarily as an authentic Offense Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "glory-days",
    "name": "Glory Days",
    "canonicalUser": "Bobby Jean",
    "jojoPart": "Part 9: The JOJOLands",
    "rarity": "Epic",
    "tier": {
      "pvp": "A",
      "raid": "B",
      "farming": "B"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items.",
    "lore": "Glory Days is a powerful Stand possessed by Bobby Jean in Part 9: The JOJOLands.",
    "image": "/images/stands/glory-days.webp",
    "combatRole": "Zoner",
    "passives": [
      {
        "name": "Bullet Deceleration",
        "description": "Slows the velocity of fired bullets in midair, allowing calculated tactical bullet traps."
      },
      {
        "name": "Delayed Impact",
        "description": "Decelerated bullets store kinetic force, accelerating into sudden lethal volleys on command."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Glory",
        "type": "Attack",
        "cooldown": "0.3s",
        "damage": "Combative Strike",
        "description": "Toggle Glory to suspend newly fired rounds in midair."
      },
      {
        "key": "E",
        "name": "Reload",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Reload your gun Stand’s magazine."
      },
      {
        "key": "R",
        "name": "Knock Knock",
        "type": "Attack",
        "cooldown": "28s",
        "damage": "Combative Strike",
        "description": "Kick forward, striking enemies in front of you."
      },
      {
        "key": "T",
        "name": "Elevator Trap",
        "type": "Attack",
        "cooldown": "23s",
        "damage": "Combative Strike",
        "description": "Set a hidden crossfire with Glory Days. The bullets close in when an enemy enters."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 40,
        "damage": 55,
        "ability": 55
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Glory Days in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items."
      },
      {
        "q": "What combat role does Glory Days fulfill?",
        "a": "Glory Days functions primarily as an authentic Zoner Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "smoke-on-the-water",
    "name": "Smoke On The Water",
    "canonicalUser": "Unknown Disc User",
    "jojoPart": "Part 5 Spin-Off",
    "rarity": "Epic",
    "tier": {
      "pvp": "A+",
      "raid": "S",
      "farming": "A+"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 5 focus items.",
    "lore": "Smoke On The Water is a powerful Stand possessed by Unknown Disc User in Part 5 Spin-Off.",
    "image": "/images/stands/smoke-on-the-water.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Integrated Stand",
        "description": "Press E to activate Boiling Water, You can still use your usual weapon attacks."
      },
      {
        "name": "Heat",
        "description": "Heat rises while the Stand is active and when you use its boiling attacks. Above 70 Heat, you lose health each second. The hotter you get, the more health you lose. Hold Let Off Steam to cool down. Cold or dismissing the stand Stand also lowers He..."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Bring to a Boil",
        "type": "Attack",
        "cooldown": "8s",
        "damage": "Combative Strike",
        "description": "Boil the water you’re aiming at, including any puddles touching it. The steam repeatedly damages and stuns enemies. Boiling a soaked enemy burns them repeatedly for 6 seconds. Hold to highlight water and targets. Cold protects against this move."
      },
      {
        "key": "E",
        "name": "Person",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "(Ignore the puddle below, Super Soaker and Hot Potato proc soaked making them boil.)"
      },
      {
        "key": "R",
        "name": "Super Soaker",
        "type": "Attack",
        "cooldown": "5s",
        "damage": "Combative Strike",
        "description": "Fire four arcing shots of water, Each hit leaves a puddle, and enemies hit directly become Soaked, blocking stops the damage and keeps them dry."
      },
      {
        "key": "T",
        "name": "Hot Potato",
        "type": "Attack",
        "cooldown": "8s",
        "damage": "Combative Strike",
        "description": "Throw a water balloon that bursts on impact, soaking nearby enemies and leaving a large puddle. Hitting someone directly also knocks them back and briefly stuns them. [Let Off Steam / Vent [HOLD]: Hold to cool yourself with a growing cloud of steam. Nearby enemies take damage and are stunned. You ca"
      },
      {
        "key": "Y",
        "name": "Venting near enemy",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "EX [Awakening Moves]"
      },
      {
        "key": "F",
        "name": "Flash Boil [3 Bars]",
        "type": "Awakening / EX",
        "cooldown": "24s",
        "damage": "High Impact / EX",
        "description": "Heat the water on a Soaked enemy, then make it burst. If the hit leaves them below 15% health, they explode. Cold protects them, and taking cover or getting out of range stops the move. Adds 25 Heat on hit."
      },
      {
        "key": "G",
        "name": "Pressure Cooker [2 Bars]",
        "type": "Awakening / EX",
        "cooldown": "22s",
        "damage": "High Impact / EX",
        "description": "Build pressure in a fire hydrant or your flying water balloon until it bursts, launching nearby enemies. Hydrants leave scalding water for five seconds. Cold protects against the scalding water. Adds 20 Heat. [Boil Dry / Find Water [HOLD]: Boil away a puddle and any puddles touching it. As the water"
      },
      {
        "key": "H",
        "name": "Superheated Steam [4 Bars]",
        "type": "Awakening / EX",
        "cooldown": "28s",
        "damage": "High Impact / EX",
        "description": "Bring your hands together and fire a narrow beam of steam. Turn to aim as it burns through enemies, repeatedly pushing them back and setting them on fire. Walls stop the beam. Adds 30 Heat."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 45,
        "damage": 45,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Smoke On The Water in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 5 focus items."
      },
      {
        "q": "What combat role does Smoke On The Water fulfill?",
        "a": "Smoke On The Water functions primarily as an authentic Disruption Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "the-grateful-dead",
    "name": "The Grateful Dead",
    "canonicalUser": "Prosciutto",
    "jojoPart": "Part 5: Golden Wind",
    "rarity": "Epic",
    "tier": {
      "pvp": "S",
      "raid": "S",
      "farming": "S+"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 5 focus items.",
    "lore": "The Grateful Dead is a powerful Stand possessed by Prosciutto in Part 5: Golden Wind.",
    "image": "/images/stands/the-grateful-dead.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Ungraceful Aging",
        "description": "Aging affects allies and enemies. Your neck and shoulders droop as stacks rise, and your attacks and dashes steadily weaken. Near 100 stacks, attack speed is reduced by up to 60% and dash power by up to 80%. At 100 stacks, players die immediately;..."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Withering Mist [TOGGLE]",
        "type": "Attack",
        "cooldown": "1.5s",
        "damage": "Combative Strike",
        "description": "Surround Grateful Dead with aging mist, Everyone nearby except you gains Aging and takes a little damage, including allies. Use again to stop"
      },
      {
        "key": "E",
        "name": "Rotten Grasp",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Combative Strike",
        "description": "When piloting, Grateful Dead holds an enemy for 4 seconds, applies up to 8 Aging stacks, then throws them left. You can still turn or leave pilot mode while it holds them. Otherwise, you grab them yourself for 2 seconds, apply up to 16 stacks, and drop them. Use again during either hold to release e"
      },
      {
        "key": "R",
        "name": "One-Armed Barrage",
        "type": "Barrage",
        "cooldown": "23s",
        "damage": "Multi-Hit Rapid DMG",
        "description": "Balance on one arm and pummel anyone in front of you with the other. You can turn, but cannot move during the barrage. Every third hit on the same target adds 1 Aging stack."
      },
      {
        "key": "T",
        "name": "Senior Citizen [TOGGLE]",
        "type": "Attack",
        "cooldown": "1s",
        "damage": "Combative Strike",
        "description": "Age yourself to gain EX over time. Your attacks become 60% slower and your dashes lose 80% of their power. Use again to return to normal. This form cannot kill you; Aging from enemies still builds up seperately EX [Awakening Moves]"
      },
      {
        "key": "Y",
        "name": "On The Train [3 Bars]",
        "type": "Awakening / EX",
        "cooldown": "30s",
        "damage": "High Impact / EX",
        "description": "Spread Withering Mist much farther for 20 seconds. Activates the mist if not already running."
      },
      {
        "key": "F",
        "name": "Ice Pack [3 Bars]",
        "type": "Awakening / EX",
        "cooldown": "40s",
        "damage": "High Impact / EX",
        "description": "Toss a bag of ice for someone else. Touching it clears Aging and protects them from Aging and Withering Mist for 30 seconds. Ragdolling knocks it off. Unclaimed bags disappear after 5 seconds."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 45,
        "damage": 45,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain The Grateful Dead in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 5 focus items."
      },
      {
        "q": "What combat role does The Grateful Dead fulfill?",
        "a": "The Grateful Dead functions primarily as an authentic Disruption Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "mr-president",
    "name": "Mr. President",
    "canonicalUser": "Coco Jumbo",
    "jojoPart": "Part 5: Golden Wind",
    "rarity": "Epic",
    "tier": {
      "pvp": "B",
      "raid": "S",
      "farming": "B"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 5 focus items.",
    "lore": "Mr. President is a powerful Stand possessed by Coco Jumbo in Part 5: Golden Wind.",
    "image": "/images/stands/mr-president.webp",
    "combatRole": "Support",
    "passives": [
      {
        "name": "Stand Aura",
        "description": "Intrinsically manifests user Stand power, scaling combat effectiveness with Ability stat points."
      },
      {
        "name": "Combat Resilience",
        "description": "Mastery over Stand manifestation grants increased resistance to stun and knockback."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Tap Variant",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Executes Tap Variant dealing decisive Combative Strike with tactical combat utility."
      },
      {
        "key": "E",
        "name": "Held Variant",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Executes Held Variant dealing decisive Combative Strike with tactical combat utility."
      },
      {
        "key": "R",
        "name": "Room Eject",
        "type": "Utility",
        "cooldown": "12s",
        "damage": "Combative Strike",
        "description": "Forcefully eject everyone from the turtle room. ( )"
      },
      {
        "key": "T",
        "name": "Shell Defense",
        "type": "Attack",
        "cooldown": "45s",
        "damage": "Combative Strike",
        "description": "Retreat into the shell for a sturdy defensive stance."
      },
      {
        "key": "Y",
        "name": "## BANKEY",
        "type": "Attack",
        "cooldown": "45s",
        "damage": "Combative Strike",
        "description": "Activate the turtle’s key to change your fighting style. Activate near your turtle while it is out of its shell and you are not piloting, The Key changes your fighting style and enables its special dash. Use the move again to turn it off."
      },
      {
        "key": "F",
        "name": "Key Dash",
        "type": "Movement",
        "cooldown": "15s",
        "damage": "Combative Strike",
        "description": "Activate BANKEY, then use Q forward for the Key’s special dash. Side and backward dashes work as usual. Shift lock is not required."
      },
      {
        "key": "G",
        "name": "## Pilot Mode (LCTRL)",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Summon your stand, Then use Ctrl to enter or leave pilot control. Your camera and movement follow the stand. This stand stays on the ground while you pilot it."
      },
      {
        "key": "H",
        "name": "Tortoise Toss [2 Bars]",
        "type": "Awakening / EX",
        "cooldown": "20s",
        "damage": "High Impact / EX",
        "description": "Throw Coco Jumbo at an enemy to bring them into your room. Take control of the turtle when it lands."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 50,
        "damage": 50,
        "ability": 50
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Mr. President in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 5 focus items."
      },
      {
        "q": "What combat role does Mr. President fulfill?",
        "a": "Mr. President functions primarily as an authentic Support Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "emperor",
    "name": "Emperor",
    "canonicalUser": "Hol Horse",
    "jojoPart": "Part 3: Stardust Crusaders",
    "rarity": "Legendary",
    "tier": {
      "pvp": "A+",
      "raid": "A",
      "farming": "A"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items.",
    "lore": "Emperor is a powerful Stand possessed by Hol Horse in Part 3: Stardust Crusaders.",
    "image": "/images/stands/emperor.webp",
    "combatRole": "Zoner",
    "passives": [
      {
        "name": "Steerable Bullets",
        "description": "Fired spiritual bullets possess no physical mass and can be steered around shields and obstacles."
      },
      {
        "name": "Unholstered Reflexes",
        "description": "Instant unholster speed with 0 frame draw time, allowing rapid retaliatory counters."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Blind Shots",
        "type": "Attack",
        "cooldown": "35s",
        "damage": "Ranged Projectile",
        "description": "Fire a group of bullets and guide them by moving your camera. Fire a group of bullets, then turn the camera to steer them. You stay in place while controlling them. Each bullet dissapears after a hit. Control ends when no bullets remain, the group hits a wall, or six seconds pass. ‌ [Fan The Hammer "
      },
      {
        "key": "E",
        "name": "Tap Variant",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "‌ [Emperor Shot [HOLD]: Charge a blast straight ahead, Holding increases its damage,size,reach and knockback. VARIATION: [HOLD] Hold to charge for up to two seconds, then release to fire. A full charge doubles the blast size, damage and knockback. The shot travels in the direction you face. You move"
      },
      {
        "key": "R",
        "name": "Held Variant",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "EX [Awakening Moves]"
      },
      {
        "key": "T",
        "name": "Emperor Pulemet",
        "type": "Attack",
        "cooldown": "120s",
        "damage": "Combative Strike",
        "description": "Requires 4 bars of Charge up, then keep firing across a wide area in front of you. After a short charge, fire continously for nearly four seconds. You cannot move while firing, but you can turn to aim. Repeated hits push enemies back and wear down their guard."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 40,
        "damage": 55,
        "ability": 55
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Emperor in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items."
      },
      {
        "q": "What combat role does Emperor fulfill?",
        "a": "Emperor functions primarily as an authentic Zoner Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "burning-down-the-house",
    "name": "Burning Down The House",
    "canonicalUser": "Emporio Alniño",
    "jojoPart": "Part 6: Stone Ocean",
    "rarity": "Legendary",
    "tier": {
      "pvp": "B",
      "raid": "A",
      "farming": "B"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 6 focus items.",
    "lore": "Burning Down The House is a powerful Stand possessed by Emporio Alniño in Part 6: Stone Ocean.",
    "image": "/images/stands/burning-down-the-house.webp",
    "combatRole": "Utility",
    "passives": [
      {
        "name": "Ghost Object Permeation",
        "description": "Interacts with phantom objects from destroyed historical structures, including ghost weapons and pianos."
      },
      {
        "name": "Ghost Room Sanctuary",
        "description": "Can enter an invisible ghost room hidden between walls, becoming completely untargetable."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Ghost Piano",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "There is a working piano in the room."
      },
      {
        "key": "E",
        "name": "Grand Piano",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Use the piano’s prompt to sit down. Play Giorno’s Theme without a wrong note to give everyone in the room 30% more damage for 60 seconds. Inspired does not stack. (You can use the sheet)"
      },
      {
        "key": "R",
        "name": "Ghost Room",
        "type": "Utility",
        "cooldown": "8s",
        "damage": "Combative Strike",
        "description": "Hold to choose a wall, then release to open a crack. Keep your hand against the wall for 3 seconds. Use again to close it when nobody is inside. Your room and stored items stay until you die."
      },
      {
        "key": "T",
        "name": "Ghost Storage",
        "type": "Awakening / EX",
        "cooldown": "0.5s",
        "damage": "High Impact / EX",
        "description": "Set down a throwable inside a ghost room to keep it. Each room holds up to 15. Pick them up later."
      },
      {
        "key": "Y",
        "name": "Ghost Refreshments",
        "type": "Attack",
        "cooldown": "0.5s",
        "damage": "Combative Strike",
        "description": "Make the table snacks vanish or bring them back. Eat chocolates for 15% faster movement, or drink orange juice for 15% faster basic attacks. Each buff lasts 20 seconds."
      },
      {
        "key": "F",
        "name": "Ghost Revolver",
        "type": "Attack",
        "cooldown": "3s",
        "damage": "Combative Strike",
        "description": "Form a ghost revolver and fire once. The shot makes an enemy dodge sideways and briefly stuns them. It deals no damage. EX [Awakening Moves]"
      },
      {
        "key": "G",
        "name": "Temporary Doorway [3 Bars]",
        "type": "Awakening / EX",
        "cooldown": "25s",
        "damage": "High Impact / EX",
        "description": "Open a smaller doorway into your room without charging, It lasts 5 seconds. Your original entrance closes while it is open, then reopens. Create your room first."
      },
      {
        "key": "H",
        "name": "Ghost Pallet",
        "type": "Attack",
        "cooldown": "6s",
        "damage": "Combative Strike",
        "description": "Place a wooden pallet to climb on or cross a gap. Keep up to 3 at once. Each lasts 12 seconds and can be broken."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 45,
        "damage": 45,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Burning Down The House in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 6 focus items."
      },
      {
        "q": "What combat role does Burning Down The House fulfill?",
        "a": "Burning Down The House functions primarily as an authentic Utility Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "beyond-the-sea",
    "name": "Beyond the Sea",
    "canonicalUser": "Charming Man",
    "jojoPart": "Part 9: The JOJOLands",
    "rarity": "Legendary",
    "tier": {
      "pvp": "A+",
      "raid": "A",
      "farming": "A"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items.",
    "lore": "Beyond the Sea is a powerful Stand possessed by Charming Man in Part 9: The JOJOLands.",
    "image": "/images/stands/beyond-the-sea.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Skin Camouflage",
        "description": "Alters skin texture to mimic stone, bark, and ocean water, granting near total visual transparency."
      },
      {
        "name": "Maelstrom Sense",
        "description": "Detects vibrations in wet surfaces, boosting dodge window during rain weather."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Tap Variant",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Executes Tap Variant dealing decisive Combative Strike with tactical combat utility."
      },
      {
        "key": "E",
        "name": "Held Variant",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Executes Held Variant dealing decisive Combative Strike with tactical combat utility."
      },
      {
        "key": "R",
        "name": "Jellyfish Summon",
        "type": "Attack",
        "cooldown": "45s",
        "damage": "Combative Strike",
        "description": "Summon a jellyfish that follows you and retaliates when either of you is attacked. ‌"
      },
      {
        "key": "T",
        "name": "Maelstrom",
        "type": "Attack",
        "cooldown": "23s",
        "damage": "Combative Strike",
        "description": "Circle a growing whirlpool at high speed and drag nearby enemies into its center ‌"
      },
      {
        "key": "Y",
        "name": "Riptide",
        "type": "Attack",
        "cooldown": "28s",
        "damage": "Combative Strike",
        "description": "Mark where a current begins, then choose its destination to carry enemies with the flow. VARIATION: Place Point [TAP AGAIN] Choose the starting point, then press the move again to place the destination. The current carries enemies along that route."
      },
      {
        "key": "F",
        "name": "Pilot Mode",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Summon your stand, then use Ctrl to enter or leave pilot control, Your camera and movement follow the stand ‌"
      },
      {
        "key": "G",
        "name": "Sunfish Sail",
        "type": "Attack",
        "cooldown": "55s",
        "damage": "Combative Strike",
        "description": "M1 while piloting Ride the ocean sunfish and sail across the water. EX [Awakening Moves]"
      },
      {
        "key": "H",
        "name": "Humu Summon [3 Bars]",
        "type": "Awakening / EX",
        "cooldown": "34s",
        "damage": "High Impact / EX",
        "description": "Summon a faster, stronger flying triggerfish that retaliates when either of you is attacked."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 45,
        "damage": 45,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Beyond the Sea in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items."
      },
      {
        "q": "What combat role does Beyond the Sea fulfill?",
        "a": "Beyond the Sea functions primarily as an authentic Disruption Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "magicians-red",
    "name": "Magician's Red",
    "canonicalUser": "Muhammad Avdol",
    "jojoPart": "Part 3: Stardust Crusaders",
    "rarity": "Legendary",
    "tier": {
      "pvp": "S",
      "raid": "S",
      "farming": "S"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items.",
    "lore": "Magician's Red is a powerful Stand possessed by Muhammad Avdol in Part 3: Stardust Crusaders.",
    "image": "/images/stands/magicians-red.webp",
    "combatRole": "Zoner",
    "passives": [
      {
        "name": "Crossfire Combustion",
        "description": "Spiritual flame ankhs burn hot enough to melt iron bars and ignite flammable props on contact."
      },
      {
        "name": "Heat Sensor",
        "description": "Detects ambient body temperature changes, revealing concealed or invisible players."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Red Pull",
        "type": "Attack",
        "cooldown": "28s",
        "damage": "Combative Strike",
        "description": "Yank an enemy toward you with a fiery tendril."
      },
      {
        "key": "E",
        "name": "Flaming Grasp",
        "type": "Attack",
        "cooldown": "35s",
        "damage": "Combative Strike",
        "description": "Grab an enemy and set them on fire. Burns them to ashes if their health is low enough."
      },
      {
        "key": "R",
        "name": "Barrage",
        "type": "Barrage",
        "cooldown": "23s",
        "damage": "Multi-Hit Rapid DMG",
        "description": "Pummel enemies with a measured barrage of punches, then knock them away. EX [Awakening Moves]"
      },
      {
        "key": "T",
        "name": "Red Bind [3 Bars]",
        "type": "Awakening / EX",
        "cooldown": "30s",
        "damage": "High Impact / EX",
        "description": "Your stand catches enemies, lifts them into the air, then slams them toward you. You can still move and attack. While piloting, enemies are thrown toward your Stand instead."
      },
      {
        "key": "Y",
        "name": "Life Detector [1 Bar]",
        "type": "Awakening / EX",
        "cooldown": "25s",
        "damage": "High Impact / EX",
        "description": "Mark nearby living enemies within 80 studs so Crossfire Hurricane can track them. Place the detector to mark nearby living enemies. While you are near it, Crossfire Hurricane can track the marked target closest to your aim."
      },
      {
        "key": "F",
        "name": "Flame Breath [1 Bar]",
        "type": "Awakening / EX",
        "cooldown": "25s",
        "damage": "High Impact / EX",
        "description": "Hold: breathe fire while walking for 1 EX bar upfront and 0.75 EX bars per second, ending on release or empty EX Hits: every 0.5 seconds, including ragdolled enemies, refreshing a 1-second knockdown with half damage on follow-up hits against ragdolled enemies. Blocking: greatly reduces damage and st"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 40,
        "damage": 55,
        "ability": 55
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Magician's Red in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items."
      },
      {
        "q": "What combat role does Magician's Red fulfill?",
        "a": "Magician's Red functions primarily as an authentic Zoner Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "death-13",
    "name": "Death 13",
    "canonicalUser": "Mannish Boy",
    "jojoPart": "Part 3: Stardust Crusaders",
    "rarity": "Legendary",
    "tier": {
      "pvp": "S",
      "raid": "A",
      "farming": "B"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items.",
    "lore": "Death 13 is a powerful Stand possessed by Mannish Boy in Part 3: Stardust Crusaders.",
    "image": "/images/stands/death-13.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Drowsiness",
        "description": "Your light and heavy attacks and certain skills add Drowsiness. At 3 stacks, enemies become Tired. At 10, they can see Death 13 and be hurt by its attacks. At 30, they fall into Slumber. Stacks decay after 12 seconds without another hit."
      },
      {
        "name": "Slumber",
        "description": "Slumber lasts 6 seconds, up to 12 with more Ability. Taking damage shortens it by 1 second. Damage over 4 wakes sleeping targets instantly. After waking, the target resists Drowsiness and Slumber for 3 seconds."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Sleeping Powder",
        "type": "Attack",
        "cooldown": "14s",
        "damage": "Combative Strike",
        "description": "Blow out a cloud of sleeping powder that grows in size and slowly drifts forward. Anyone inside is briefly stunned, has their vision blurred, and gains 5 Drowsiness for every second they stay in it. it does no damage."
      },
      {
        "key": "E",
        "name": "Sleepwalk",
        "type": "Attack",
        "cooldown": "28s",
        "damage": "Combative Strike",
        "description": "Recover health while sleepwalking for 10 seconds. Hits during the first 2 seconds trigger a scythe counter that raises the attacker to 10 Drowsiness, or adds 5 if they already have 10 or more. Later hits wake you. Use again to wake early."
      },
      {
        "key": "R",
        "name": "Pan Smack",
        "type": "Attack",
        "cooldown": "14s",
        "damage": "Combative Strike",
        "description": "Whack the nearest enemy over the head with a frying pan. It knocks them forward and down and adds 5 Drowsiness. Small props in the swing go flying."
      },
      {
        "key": "T",
        "name": "Nightmare",
        "type": "Attack",
        "cooldown": "40s",
        "damage": "Combative Strike",
        "description": "Kneel and touch a sleeping enemy to take them into a dream for 30 seconds, where Death 13 fights them on its own. Use it beside any other sleeper to bring them into the same dream, or use it again to wake everyone. use Pilot to take control of Death 13, and again to return to your body at any time."
      },
      {
        "key": "Y",
        "name": "Taking control of Death 13: (LCtrl)",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Executes Taking control of Death 13: (LCtrl) dealing decisive Combative Strike with tactical combat utility."
      },
      {
        "key": "F",
        "name": "Lali Ho",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Kneel and touch a sleeping enemy with Nightmare to take them into a dream for 30 seconds. Use Nightmare beside any other sleeper to bring them into the same dream. Nightmare can be reused to wake everyone. Death 13 automatically fights targets inside the nightmare on its own. You are able to persona"
      },
      {
        "key": "G",
        "name": "Living Weapon",
        "type": "Attack",
        "cooldown": "18s",
        "damage": "Combative Strike",
        "description": "Three random pieces of furniture rise around Death 13, hang high for a moment, then fly at a target. Each one that lands stuns briefly, and the last one sends them flying. They can be blocked or broken. [Scary Box: Drop a cage where you aim, trapping the dreamer for 5 seconds. Death 13 can pass thro"
      },
      {
        "key": "H",
        "name": "Vanishing Reap",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Death 13 vanishes, appears infront of the opponent and slashes with its scythe."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 45,
        "damage": 45,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Death 13 in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items."
      },
      {
        "q": "What combat role does Death 13 fulfill?",
        "a": "Death 13 functions primarily as an authentic Disruption Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "catch-the-rainbow",
    "name": "Catch The Rainbow",
    "canonicalUser": "Blackmore",
    "jojoPart": "Part 7: Steel Ball Run",
    "rarity": "Legendary",
    "tier": {
      "pvp": "A+",
      "raid": "A",
      "farming": "B"
    },
    "status": "Playable",
    "obtainMethod": "Unlocked in the Arrow pool after completing the main Storyline (cannot be rolled pre-storyline). Obtainable via Mysterious Arrows, Lucky Arrows (34.0% Legendary), or Bizarre Arrows (57.9% Legendary).",
    "lore": "“I… have the ability to catch the rainbow.” The mask-like Stand of Blackmore grants control over rain, letting him walk on suspended raindrops or slice enemies with razor-sharp water projectiles.",
    "image": "/images/stands/catch-the-rainbow.webp",
    "combatRole": "Zoner",
    "passives": [
      {
        "name": "Weather Requirement & Ocarina Rain",
        "description": "Catch The Rainbow requires fog, natural rain, an active fire hydrant within 30 studs, or rain summoned via Generic Unbranded Ocarina (5 EX Bars, usable with mask off) to activate its Stand abilities."
      },
      {
        "name": "Rain Walking / Floating",
        "description": "Summon your Stand and hold Space briefly to rise; release Jump to maintain altitude and float horizontally (sprint for faster air travel). Hold Z to descend. As of Update 1, walking down to the ground no longer inflicts fall damage, and Rain Walk is capped in Ranked Mode."
      },
      {
        "name": "Hidden Aerial Controls (Rain Transport)",
        "description": "While floating in Rain Walk, press E to activate Rain Transport and hide inside the rain; aim at an enemy and press M1 for a teleport ambush follow-up. With the mask on, Left Ctrl launches Body Projectile."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "M1 Strikes / Frozen Dagger Slashes",
        "type": "Attack",
        "damage": "Buffed Frozen Knife DMG",
        "description": "Standard light combo; when Frozen Rain EX is active, M1 and M2 are replaced by bleeding frozen dagger slashes with buffed Update 1 damage."
      },
      {
        "key": "E",
        "name": "Weapons Of Rain",
        "type": "Attack",
        "cooldown": "23s",
        "damage": "7 Water Shots + Soaked",
        "description": "Fires seven water projectiles toward your aim that apply Soaked on impact and douse fire/gasoline. Hitbox size, range, and projectile speed were buffed in Update 1."
      },
      {
        "key": "R",
        "name": "Motionless Rain",
        "type": "Utility",
        "cooldown": "45s",
        "description": "Surround yourself with suspended raindrops for projectile defense (mask must be worn). Drops remain until consumed; scales +1 extra drop per arm for every 50 Ability points."
      },
      {
        "key": "T",
        "name": "Triple Shot",
        "type": "Attack",
        "cooldown": "27s",
        "damage": "3 Ranged Shots",
        "description": "Fire three razor-sharp raindrops toward your cursor."
      },
      {
        "key": "Y",
        "name": "Rain Catch",
        "type": "Attack",
        "cooldown": "32s",
        "damage": "Guard-Bypass Dive & Execute",
        "blockable": false,
        "parriable": true,
        "description": "Leap up and press again midair to dive (or dive immediately while airborne), catching an enemy through ordinary guard and executing weakened targets. Update 1 increased aim range, made the dive steerable, and fixed post-grab jitter. Can be perfect blocked."
      },
      {
        "key": "Ctrl",
        "name": "Body Projectile",
        "type": "Attack",
        "cooldown": "28s",
        "damage": "Steerable Arm Grab",
        "description": "Requires mask worn. Detach your arm and steer it with your camera to grab distant targets."
      },
      {
        "key": "T (Hold) + E",
        "name": "Frozen Rain",
        "type": "Awakening / EX",
        "exCost": "2 Bars",
        "cooldown": "35s",
        "damage": "20s Bleed Dagger / Limb Sever",
        "description": "Forms a frozen rain dagger for 20 seconds, replacing light and heavy attacks with high-damage bleeding slashes capable of severing limbs."
      },
      {
        "key": "T (Hold) + R",
        "name": "Generic Unbranded Ocarina",
        "type": "Awakening / EX",
        "exCost": "5 Bars",
        "cooldown": "90s",
        "damage": "30s Summoned Rain",
        "description": "Play Rhapsody of Rain (low D, F, and high D twice) to summon 30 seconds of rainfall on demand, enabling Catch The Rainbow anywhere. Can be played even with your mask off."
      }
    ],
    "abilityScaling": [
      "Motionless Rain creates 1 additional defensive drop per arm for every 50 Ability points invested.",
      "Higher Ability builds enable faster EX generation for Frozen Rain (2 Bars) and Generic Unbranded Ocarina (5 Bars)."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 70,
        "ability": 75
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Caesar Hamon bubbles complement Catch The Rainbow ranged zoning, while 70 Damage boosts Frozen Rain dagger M1s and 75 Ability adds defensive Motionless Rain droplets."
    },
    "pros": [
      "Generic Unbranded Ocarina lets you summon 30s of rain on demand—even with the mask off",
      "Rain Walk offers unmatched aerial positioning with zero fall damage when descending",
      "Steerable Rain Catch bypasses ordinary guard and executes low-HP targets",
      "Buffed Weapons Of Rain and Frozen Rain M1/M2 damage in Update 1"
    ],
    "cons": [
      "Generic Unbranded Ocarina requires 5 EX Bars and a long 90s cooldown",
      "Completely reliant on rain, fog, or hydrants within 30 studs when Ocarina is on cooldown",
      "Cannot be rolled from arrows until the main storyline is beaten"
    ],
    "faqs": [
      {
        "q": "How does Generic Unbranded Ocarina work on Catch The Rainbow?",
        "a": "Spend 5 EX Bars (90s cooldown) to play Rhapsody of Rain (low D, F, and high D twice), summoning 30 seconds of rain so you can use your Stand anywhere. Unlike Body Projectile or Motionless Rain, you can play the ocarina with your mask off."
      },
      {
        "q": "Why can't I roll Catch The Rainbow on a new account?",
        "a": "Catch The Rainbow is one of 7 storyline-locked utility Stands removed from the arrow pool until you complete the main storyline."
      }
    ],
    "verifiedDate": "2026-11-26"
  },
  {
    "slug": "silver-chariot",
    "name": "Silver Chariot",
    "canonicalUser": "Jean Pierre Polnareff",
    "jojoPart": "Part 3: Stardust Crusaders",
    "rarity": "Legendary",
    "tier": {
      "pvp": "S",
      "raid": "A+",
      "farming": "A"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items.",
    "lore": "Silver Chariot is a powerful Stand possessed by Jean Pierre Polnareff in Part 3: Stardust Crusaders.",
    "image": "/images/stands/silver-chariot.webp",
    "combatRole": "Speed / Hit-and-Run",
    "passives": [
      {
        "name": "Stand Aura",
        "description": "Intrinsically manifests user Stand power, scaling combat effectiveness with Ability stat points."
      },
      {
        "name": "Combat Resilience",
        "description": "Mastery over Stand manifestation grants increased resistance to stun and knockback."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Rapier Rush",
        "type": "Barrage",
        "cooldown": "23s",
        "damage": "Multi-Hit Rapid DMG",
        "description": "A lightning-fast series of rapier thrusts."
      },
      {
        "key": "E",
        "name": "Blade Eject",
        "type": "Attack",
        "cooldown": "30s",
        "damage": "Combative Strike",
        "description": "Launch the blade from its hilt as a high-speed projectile. (Can Ricochet) User cannot use any stand abilities without their rapier. User can take their rapier back to avoid waiting for it to return."
      },
      {
        "key": "R",
        "name": "Your Last Moments",
        "type": "Attack",
        "cooldown": "34s",
        "damage": "Combative Strike",
        "description": "Deliver a heavy strike that finishes off weakened enemies."
      },
      {
        "key": "T",
        "name": "French Rotation",
        "type": "Attack",
        "cooldown": "20s",
        "damage": "Combative Strike",
        "description": "Silver Chariot spins and cuts everything around it, knocking enemies away with Bleed and breaking a blocking guard, unless perfect blocked. Use while stunned it breaks the stun and winds up longer. Ability scaling: Damage scales 80% with Strength and 20% with Ability."
      },
      {
        "key": "Y",
        "name": "In stun",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "EX [Awakening Moves]"
      },
      {
        "key": "F",
        "name": "Stand Jump [1 Bar]",
        "type": "Awakening / EX",
        "cooldown": "16s",
        "damage": "High Impact / EX",
        "description": "Use your Stand’s power to launch high into the air."
      },
      {
        "key": "G",
        "name": "Armor Toggle [1 Bar]",
        "type": "Awakening / EX",
        "cooldown": "20s",
        "damage": "High Impact / EX",
        "description": "Spend one EX bar to remove Silver Chariot’s armor for faster attacks, with EX draining slowly while it is off, and use it again to put the armor back on. Armor Toggle trades protection and speed. (Armor off also gives you bigger hitboxes)"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 50,
        "damage": 50,
        "ability": 50
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Silver Chariot in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items."
      },
      {
        "q": "What combat role does Silver Chariot fulfill?",
        "a": "Silver Chariot functions primarily as an authentic Speed / Hit-and-Run Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "strength",
    "name": "Strength",
    "canonicalUser": "Forever",
    "jojoPart": "Part 3: Stardust Crusaders",
    "rarity": "Legendary",
    "tier": {
      "pvp": "B",
      "raid": "A",
      "farming": "B"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items.",
    "lore": "Strength is a powerful Stand possessed by Forever in Part 3: Stardust Crusaders.",
    "image": "/images/stands/strength.webp",
    "combatRole": "Tank",
    "passives": [
      {
        "name": "Ship Metamorphosis",
        "description": "Binds with marine vessels, controlling propellers, winches, and steel bulkheads as bodily extensions."
      },
      {
        "name": "Hull Trap",
        "description": "Manipulates mechanical structures to entrap boarders within pressurized holds and pipes."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Pilot Mode",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Summon your stand, then use Ctrl to enter or leave pilot control. Your camera and movement follow the stand. This stand stays on the ground while you pilot it. [Building Strength / Speed Mode [HOLD]: Toggle between power mode and speed mode. ]"
      },
      {
        "key": "E",
        "name": "Ship Scraps",
        "type": "Attack",
        "cooldown": "23s",
        "damage": "Combative Strike",
        "description": "Lob ship debris high into the air to land where you’re aiming."
      },
      {
        "key": "R",
        "name": "Hooked",
        "type": "Attack",
        "cooldown": "5s",
        "damage": "Combative Strike",
        "description": "Snag an enemy with a chain hook and reel them in."
      },
      {
        "key": "T",
        "name": "Hull Trap",
        "type": "Attack",
        "cooldown": "5s",
        "damage": "Combative Strike",
        "description": "Set a hidden hull plate trap that snares anyone who sets on it."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 65,
        "damage": 45,
        "ability": 40
      },
      "subAbility": "Hamon (Jonathan Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Strength in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items."
      },
      {
        "q": "What combat role does Strength fulfill?",
        "a": "Strength functions primarily as an authentic Tank Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "yellow-temperance",
    "name": "Yellow Temperance",
    "canonicalUser": "Rubber Soul",
    "jojoPart": "Part 3: Stardust Crusaders",
    "rarity": "Rare",
    "tier": {
      "pvp": "A",
      "raid": "A",
      "farming": "A"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items.",
    "lore": "Yellow Temperance is a powerful Stand possessed by Rubber Soul in Part 3: Stardust Crusaders.",
    "image": "/images/stands/yellow-temperance.webp",
    "combatRole": "Tank",
    "passives": [
      {
        "name": "Trapped Breath",
        "description": "Living Armor holds 100 air and uses 5 each second. Hits cost another 1.25 air for each point of damage taken. With no air left you lose 12% of your max health each second. Hold Living Armor to open or close the mask; tap to remove the suit. Taking..."
      },
      {
        "name": "Assimilation",
        "description": "Repeated hits and contact with slime build up to 10 stacks per enemy. Damage rises from 0.25 each second at one stack to 2.5 at ten, before bonuses and protection. Fresh slime adds stacks and refreshes the effect. Overlapping puddles still apply o..."
      },
      {
        "name": "Feeding Slime",
        "description": "Your damage bonus counts your own Assimilation stacks across every enemy, Ten stacks on one enemy and five on another give you 15% more damage. When their slime wears off or is cleansed, you lose that part of the bonus. Dying or changing Stands cl..."
      },
      {
        "name": "Assimilation",
        "description": "Spread slime in front of you to consume loose props or finish downed enemies, filling your yellow bar. Hold to empty the bar into a puddle beneath you. More stored slime makes a larger puddle. Base cooldown: 8s"
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Ravenous Flurry",
        "type": "Barrage",
        "cooldown": "18s",
        "damage": "Multi-Hit Rapid DMG",
        "description": "Sweep enemies left, then right, before all four tentacles slam them forward and knock them down. Each blow adds assimilation"
      },
      {
        "key": "E",
        "name": "Borrowed Face",
        "type": "Utility",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Aim near a player or NPC within 300 studs to copy their appearance, name, and pose for 2 minutes. You can use it from behind cover. Use again to change back."
      },
      {
        "key": "R",
        "name": "Living Armor",
        "type": "Attack",
        "cooldown": "8s",
        "damage": "Combative Strike",
        "description": "Wrap yourself in slime to take 65% less damage and coat nearby players in Assimilation. Air drains over time and when hit; at zero lose 12% of your max health each second. Tap again to remove the suit. Hold to open or close its mask; an open mask restores air, but body protection falls to 35% and yo"
      },
      {
        "key": "T",
        "name": "Crawling Temperance [1 Bar]",
        "type": "Awakening / EX",
        "cooldown": "20s",
        "damage": "High Impact / EX",
        "description": "Grow four tentacles that lift you off the ground and carry you quickly for 6 seconds. Steer with your movement controls and tap again to retract them. Being stunned ends the ride."
      },
      {
        "key": "Y",
        "name": "Borrowed Stand [1 Bar]",
        "type": "Awakening / EX",
        "cooldown": "20s",
        "damage": "High Impact / EX",
        "description": "While disguised, shape your slime into their Stand. You can pilot the imitation and throw punches, but cannot use its skills. Use again to dissolve it. (Posing with the imitated stand)"
      },
      {
        "key": "F",
        "name": "Play Dead [3 Bars]",
        "type": "Awakening / EX",
        "cooldown": "25s",
        "damage": "High Impact / EX",
        "description": "While disguised, prepare to fake your death. The next enemy blow within 8 seconds deals no damage and makes you fall like a corpse. After 3 seconds, Burst out of the disguise and reveal your real health."
      },
      {
        "key": "G",
        "name": "Assimilation Trail [3 Bars]",
        "type": "Awakening / EX",
        "cooldown": "18s",
        "damage": "High Impact / EX",
        "description": "For 6 seconds, leave slime puddles as you move. Enemies touching them gain Assimilation, and the puddles grow as they feed. Each puddle lasts 12 seconds. Use again to stop early."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 65,
        "damage": 45,
        "ability": 40
      },
      "subAbility": "Hamon (Jonathan Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Yellow Temperance in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items."
      },
      {
        "q": "What combat role does Yellow Temperance fulfill?",
        "a": "Yellow Temperance functions primarily as an authentic Tank Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "yo-yo-ma",
    "name": "Yo-Yo Ma",
    "canonicalUser": "D an G",
    "jojoPart": "Part 6: Stone Ocean",
    "rarity": "Rare",
    "tier": {
      "pvp": "B",
      "raid": "B",
      "farming": "B"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 6 focus items.",
    "lore": "Yo-Yo Ma is a powerful Stand possessed by D an G in Part 6: Stone Ocean.",
    "image": "/images/stands/yo-yo-ma.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Stand Aura",
        "description": "Intrinsically manifests user Stand power, scaling combat effectiveness with Ability stat points."
      },
      {
        "name": "Combat Resilience",
        "description": "Mastery over Stand manifestation grants increased resistance to stun and knockback."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "A Devil in Disguise/Automatic Stand",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Hold E while aiming at someone within 100 studs of the stand to follow them. It follows from behind and stops when watched. Yo-Yo Ma sends mosquitos after its chosen target, Acidic Saliva leaves them Muted."
      },
      {
        "key": "E",
        "name": "Repulsive",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Yo-Yo Ma takes no damage, but can be stunned or knocked away. Close hits splash saliva onto the attacker and makes them Stinky. Sending it flying splashes nearby enemies too."
      },
      {
        "key": "R",
        "name": "Crybaby",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "If the user is attacked while piloting the stand, they will cry out and be stunned for a few seconds."
      },
      {
        "key": "T",
        "name": "An Expert Craftsman",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Talk to Yo-Yo Ma while it is parked or following someone else. It can craft using your materials, heal 30 health, or shine your boots to grant Encouraged, giving 10% more damage for 40 seconds. Collect finished crafts within five seconds before someone else does. Your materials are only spent when t"
      },
      {
        "key": "Y",
        "name": "Tainted Item",
        "type": "Attack",
        "cooldown": "15s",
        "damage": "Combative Strike",
        "description": "Hold to cycle through items, then tap to make one in Yo-Yo Ma’s empty stomach. Use Treacherous Hoarder to spit it out. Real Mysterious Arrows and Rokakas take 60 to 30 minutes to make again. SSSS Rokakas and Over Heaven Arrows are fakes that deal delayed acid damage when used."
      },
      {
        "key": "F",
        "name": "Tap",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "(Eating the selected object)"
      },
      {
        "key": "G",
        "name": "Drooling Menace",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Combative Strike",
        "description": "Coat the ground and nearby objects in Acidic Saliva, damaging enemies and leaving them Muted. It also contaminates connected water. ABILITY SCALING: Ability makes the pool up to 30% wider."
      },
      {
        "key": "H",
        "name": "Treacherous Hoarder",
        "type": "Attack",
        "cooldown": "3s",
        "damage": "Combative Strike",
        "description": "Swallow nearby items to carry them back to you, then interact to collect them. Use the move again to spit out items or launch swallowed throwables, leaving a trail of saliva. Heavy hits force them out."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 45,
        "damage": 45,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Yo-Yo Ma in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 6 focus items."
      },
      {
        "q": "What combat role does Yo-Yo Ma fulfill?",
        "a": "Yo-Yo Ma functions primarily as an authentic Disruption Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "cinderella",
    "name": "Cinderella",
    "canonicalUser": "Aya Tsuji",
    "jojoPart": "Part 4: Diamond is Unbreakable",
    "rarity": "Rare",
    "tier": {
      "pvp": "C",
      "raid": "C",
      "farming": "A"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 4 focus items.",
    "lore": "Cinderella is a powerful Stand possessed by Aya Tsuji in Part 4: Diamond is Unbreakable.",
    "image": "/images/stands/cinderella.webp",
    "combatRole": "Support",
    "passives": [
      {
        "name": "Ability Scaling",
        "description": "Change of Face: Misfortune lasts up to 50% longer (90 seconds) and treatment is up to 30% faster with Ability."
      },
      {
        "name": "Faces and fate",
        "description": "Choose one of five faces with Enhancement Selector, then apply it with Change of Face; hold to treat yourself. Miracle lasts until death. Botching the treatment on yourself or a non-user gives Misfortune for 60 seconds, up to 90 with Ability, and ..."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Hair Cut",
        "type": "Attack",
        "cooldown": "18s",
        "damage": "Combative Strike",
        "description": "Grab an opponent and give them a messy haircut, acting as a powerful extender. You both heal a little and gain 2 EX bars. Their hair returns after combat. Hold to cut your own hair."
      },
      {
        "key": "E",
        "name": "Enhancement Selector",
        "type": "Utility",
        "cooldown": "0.3s",
        "damage": "Combative Strike",
        "description": "Cycle through the faces Cinderella can apply. Hold to go back."
      },
      {
        "key": "R",
        "name": "Existing Faces",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Angry Face - 25% Damage, 30% Attack Speed Lucky Face - Enemy projectiles veer away. 25% of enemy hits miss you. Gentle Face - -25% Damage taken Pretty Face - Enemies go after others first, Shop prices -15%, Anyone who hits you attacks 25% slower for 3s, Damage taken -10% Fated Face - Damage +10%, Su"
      },
      {
        "key": "T",
        "name": "Botched Faces: (Lasts 60 seconds)",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Angry Face - -15% Attack Speed, -25% Damage. Lucky Face - +25% Damage Taken Gentle Face - Damage Taken +10%, Healing received -50%. Pretty Face - Damage taken +10%, Nobody wants to talk to you, Shop prices +25%, Enemies go after you first. Fated Face - Below 30% health, damage taken +30%"
      },
      {
        "key": "Y",
        "name": "Change of Face",
        "type": "Attack",
        "cooldown": "8s",
        "damage": "Combative Strike",
        "description": "Apply a face and its blessing, which lasts until death. Hold to treat yourself; press again during treatment to botch it on purpose. A botched treatment gives misfortune for 60 seconds instead. [Special Lipstick / [HOLD: TOGGLE SALES]: Throw lipstick to cure a Misfortune you caused. Hold to sell cur"
      },
      {
        "key": "F",
        "name": "Limb Replacement [4 Bars]",
        "type": "Awakening / EX",
        "cooldown": "40s",
        "damage": "High Impact / EX",
        "description": "Mark two people to swap their arms and Strength for the rest of their lives. Hold to choose yourself. Both are briefly stunned by the exchange."
      },
      {
        "key": "G",
        "name": "Moral of The Story [3 Bars]",
        "type": "Awakening / EX",
        "cooldown": "20s",
        "damage": "High Impact / EX",
        "description": "Replace someone’s face and hair until they die. Hold to enter a customization code."
      },
      {
        "key": "H",
        "name": "Miracle [1 Bar]",
        "type": "Awakening / EX",
        "cooldown": "5s",
        "damage": "High Impact / EX",
        "description": "Let another player permanently change their body, hair, face and markings. Stay nearby and out of combat. Use near another player to let them change their appearance. Both of you must stay nearby and out of combat."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 50,
        "damage": 50,
        "ability": 50
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Cinderella in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 4 focus items."
      },
      {
        "q": "What combat role does Cinderella fulfill?",
        "a": "Cinderella functions primarily as an authentic Support Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "smooth-operators",
    "name": "Smooth Operators",
    "canonicalUser": "Dragona Joestar",
    "jojoPart": "Part 9: The JOJOLands",
    "rarity": "Rare",
    "tier": {
      "pvp": "A",
      "raid": "A",
      "farming": "B"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items.",
    "lore": "Smooth Operators is a powerful Stand possessed by Dragona Joestar in Part 9: The JOJOLands.",
    "image": "/images/stands/smooth-operators.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Stand Aura",
        "description": "Intrinsically manifests user Stand power, scaling combat effectiveness with Ability stat points."
      },
      {
        "name": "Combat Resilience",
        "description": "Mastery over Stand manifestation grants increased resistance to stun and knockback."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Rearrange",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Shift an enemy' body for 8 seconds. One operator targets a leg, two the eyes, three both, and four add an arm. Legs slow movement, eyes blur vision, and arms weaken damage."
      },
      {
        "key": "E",
        "name": "Anyone’s Weakness",
        "type": "Attack",
        "cooldown": "24s",
        "damage": "Combative Strike",
        "description": "A low kick that breaks guard and briefly blurs the target’s vision."
      },
      {
        "key": "R",
        "name": "Internal Pain",
        "type": "Attack",
        "cooldown": "22s",
        "damage": "Combative Strike",
        "description": "Send your deployed operators inside an enemy, More operators deal stronger, faster damage ticks and stay longer. Moving more than 30 studs apart brings them back."
      },
      {
        "key": "T",
        "name": "Colony Formation",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Deploy/Return Operators"
      },
      {
        "key": "Y",
        "name": "Pilot Mode",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Summon your stand, Then use ctrl to enter or leave pilot mode. (Can travel on walls/ceilings) EX [Awakening Moves]"
      },
      {
        "key": "F",
        "name": "Face Lift [2 Bars]",
        "type": "Awakening / EX",
        "cooldown": "18s",
        "damage": "High Impact / EX",
        "description": "Lift someone’s face markings for this life. Use again on another person to apply them, hold either use to target yourself, or aim at empty ground to discard them. Carried markings disappear after 20 seconds."
      },
      {
        "key": "G",
        "name": "Zip It [2 Bars]",
        "type": "Awakening / EX",
        "cooldown": "24s",
        "damage": "High Impact / EX",
        "description": "Slide an enemy’s mouth shut, preventing them from chatting for 25 seconds."
      },
      {
        "key": "H",
        "name": "Lock Up [2 Bars]",
        "type": "Awakening / EX",
        "cooldown": "25s",
        "damage": "High Impact / EX",
        "description": "Send Smooth Operators to seal a nearby door shut for 15 seconds."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 45,
        "damage": 45,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Smooth Operators in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items."
      },
      {
        "q": "What combat role does Smooth Operators fulfill?",
        "a": "Smooth Operators functions primarily as an authentic Disruption Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "beach-boy",
    "name": "Beach Boy",
    "canonicalUser": "Pesci",
    "jojoPart": "Part 5: Golden Wind",
    "rarity": "Rare",
    "tier": {
      "pvp": "A",
      "raid": "A",
      "farming": "B"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 5 focus items.",
    "lore": "Beach Boy is a powerful Stand possessed by Pesci in Part 5: Golden Wind.",
    "image": "/images/stands/beach-boy.webp",
    "combatRole": "Zoner",
    "passives": [
      {
        "name": "Ability Scaling",
        "description": "Ability makes your line longer and your reel stronger. The line can reach up to 225 studs."
      },
      {
        "name": "An Angler’s Hold",
        "description": "Being ragdolled or hit with heavy knockback releases whoever you have hooked, including during Focused Fishing."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "For My Bro!",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Anyone who kills a member of your party is marked for 20 seconds. Your hook sinks into them 50% faster."
      },
      {
        "key": "E",
        "name": "Cast Out (Ctrl)",
        "type": "Attack",
        "cooldown": "1s",
        "damage": "Combative Strike",
        "description": "Steer your hook through walls and floors to catch someone. Use again to stop steering, then again to resume. Heavy attacks reels it back. [The Line Carries: You and your allies can hit the line to damage whoever is hooked. Hamon also travels through it.]"
      },
      {
        "key": "R",
        "name": "Big Catches",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Hook a large object, such as a car. Hold M1 to reel yourself toward it, or press R for a quick pull."
      },
      {
        "key": "T",
        "name": "Good Vibrations",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "While steering the hook inside a wall or underground, nearby people appear as pink squares and loose objects appear as pale squares."
      },
      {
        "key": "Y",
        "name": "Quickcast",
        "type": "Attack",
        "cooldown": "6s",
        "damage": "Combative Strike",
        "description": "Cast your hook toward your aim in a shallow arc. It catches people, sticks into large objects, or stays where it lands."
      },
      {
        "key": "F",
        "name": "Hook Depth",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Hold M1 to reel someone in and build depth. More Strength makes the hook sink faster. Deeper hooks slow them more and deal more damage when pulled out. At 25% depth or more, R tears the hook out. They escape if they get too far beyond your line's reach."
      },
      {
        "key": "G",
        "name": "Double Snag",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Combative Strike",
        "description": "Whip the hook twice. Landing both hits causes bleeding. If someone is already hooked, tear it out and try to hook them again at half depth."
      },
      {
        "key": "H",
        "name": "If hooked",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "(Tearing heart out and proccing bleed, then re-entering with half the depth: 77% to 39%.)"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 40,
        "damage": 55,
        "ability": 55
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Beach Boy in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 5 focus items."
      },
      {
        "q": "What combat role does Beach Boy fulfill?",
        "a": "Beach Boy functions primarily as an authentic Zoner Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "hey-ya",
    "name": "Hey Ya!",
    "canonicalUser": "Pocoloco",
    "jojoPart": "Part 7: Steel Ball Run",
    "rarity": "Rare",
    "tier": {
      "pvp": "C",
      "raid": "B",
      "farming": "B"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 7 focus items.",
    "lore": "Hey Ya! is a powerful Stand possessed by Pocoloco in Part 7: Steel Ball Run.",
    "image": "/images/stands/hey-ya.webp",
    "combatRole": "Support",
    "passives": [
      {
        "name": "Lucky Observation",
        "description": "Reveal a nearby throwable object and empower it for your next throw. Look for the highlighted object, pick it up with H, then throw it. [Premonition / Believe in Yourself! [HOLD]: Tap for a brief counter window, or hold to toggle your lucky dodge...."
      },
      {
        "name": "Whispers From Hey Ya!",
        "description": "Follow Hey Ya!'s advice in time to gain luck and recover a little health. Follow the advice above Hey Ya! before it expires. You may be asked to jump, pose, block, turn, or dash in a certain direction. Base cooldown: 2s"
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Lucky Uppercut",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Using 8 stacks of luck with Build Luck will result in you getting the ability to use a Lucky Uppercut. (Replaces your M2/R)"
      },
      {
        "key": "E",
        "name": "Pilot Mode",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Summon your stand, then use Ctrl to enter or leave pilot control. Your camera and movement follow the stand. This stand stays on the ground while you pilot it."
      },
      {
        "key": "R",
        "name": "Ride Along",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "While piloting, touch another player with Hey Ya! to attach to them and share its advice. (Applies to moves)"
      },
      {
        "key": "T",
        "name": "Signature Strike",
        "type": "Attack",
        "cooldown": "18s",
        "damage": "Combative Strike",
        "description": "Harnesses unique Stand ability to pressure opposing defenses and control spacing."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 50,
        "damage": 50,
        "ability": 50
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Hey Ya! in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 7 focus items."
      },
      {
        "q": "What combat role does Hey Ya! fulfill?",
        "a": "Hey Ya! functions primarily as an authentic Support Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "200-balloons",
    "name": "200 Balloons",
    "canonicalUser": "Ningbo",
    "jojoPart": "Part 9: The JOJOLands",
    "rarity": "Rare",
    "tier": {
      "pvp": "B",
      "raid": "B",
      "farming": "B"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items.",
    "lore": "200 Balloons is a powerful Stand possessed by Ningbo in Part 9: The JOJOLands.",
    "image": "/images/stands/200-balloons.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Inflating Attacks",
        "description": "Your own light attacks apply inflations. TOTAL BALLOONS doubles their inflations while active."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Sudden Balloons",
        "type": "Attack",
        "cooldown": "20s",
        "damage": "Combative Strike",
        "description": "Grab an enemy and rapidly inflate their body before dropping them. Your character performs the grab. The hit lands partway through the opening animation and can be blocked. A caught enemy is inflated repeatedly, then released and ragdolled."
      },
      {
        "key": "E",
        "name": "Inflate",
        "type": "Attack",
        "cooldown": "14s",
        "damage": "Combative Strike",
        "description": "Inflate an enemy or turn a loose object into a exploding balloon. Hold to slam the ground and inflate its debris. Tap on an enemy for random body inflations, or inflate a nearby loose prop into a throwable balloon. Hold for the ground slam; some debris becomes balloons that drift outward and upward,"
      },
      {
        "key": "R",
        "name": "MAC-10",
        "type": "Attack",
        "cooldown": "18s",
        "damage": "Combative Strike",
        "description": "Fire a rapid burst of silenced bullets towards your cursor. Fire the user-mounted gun toward your aim with a spread of bullets. This move also works while your stand is dismissed."
      },
      {
        "key": "T",
        "name": "Relentless Counter",
        "type": "Counter",
        "cooldown": "28s",
        "damage": "Combative Strike",
        "description": "Counter an attack, grab the attacker by their face, and repeatedly inflate their head. Bursts their head if they finish below 20% health. Incoming projectiles become balloons while you hold the counter pose. A succesful counter holds the ragdolled attacker by their face and repeatedly inflates their"
      },
      {
        "key": "Y",
        "name": "Deflect",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Executes Deflect dealing decisive Combative Strike with tactical combat utility."
      },
      {
        "key": "F",
        "name": "TOTAL BALLOONS [1 Bar]",
        "type": "Awakening / EX",
        "cooldown": "3s",
        "damage": "High Impact / EX",
        "description": "Spend 1 EX bar to surround yourself with balloons. Attackers receive an inflation, M1S cause twice as many inflations, and incoming projectiles become balloons without blocking. Drains 5% of your full EX meter each second."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 45,
        "damage": 45,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain 200 Balloons in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items."
      },
      {
        "q": "What combat role does 200 Balloons fulfill?",
        "a": "200 Balloons functions primarily as an authentic Disruption Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "the-sun",
    "name": "The Sun",
    "canonicalUser": "Arabia Fats",
    "jojoPart": "Part 3: Stardust Crusaders",
    "rarity": "Rare",
    "tier": {
      "pvp": "B",
      "raid": "A",
      "farming": "A"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items.",
    "lore": "The Sun is a powerful Stand possessed by Arabia Fats in Part 3: Stardust Crusaders.",
    "image": "/images/stands/the-sun.webp",
    "combatRole": "Zoner",
    "passives": [
      {
        "name": "Stand Aura",
        "description": "Intrinsically manifests user Stand power, scaling combat effectiveness with Ability stat points."
      },
      {
        "name": "Combat Resilience",
        "description": "Mastery over Stand manifestation grants increased resistance to stun and knockback."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Solar Onslaught",
        "type": "Attack",
        "cooldown": "28s",
        "damage": "Combative Strike",
        "description": "Bombard your target with concentrated solar rays."
      },
      {
        "key": "E",
        "name": "Solar Snipe",
        "type": "Attack",
        "cooldown": "23s",
        "damage": "Ranged Projectile",
        "description": "Focus the sun’s energy into a long-range beam. (Procs burn on hit)"
      },
      {
        "key": "R",
        "name": "Disguise",
        "type": "Attack",
        "cooldown": "15s",
        "damage": "Combative Strike",
        "description": "Hide inside a trashcan to become invisible. (Requires Trashcan) Prevents burning from The Sun"
      },
      {
        "key": "T",
        "name": "Pilot Mode",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Summon your stand, then use Ctrl to enter or leave pilot control. Your camera and movement follow the stand. EX [Awakening Moves]"
      },
      {
        "key": "Y",
        "name": "Solar Flare [2 Bars]",
        "type": "Awakening / EX",
        "cooldown": "28s",
        "damage": "High Impact / EX",
        "description": "Release a flash of sunlight that burns and blinds nearby enemies."
      },
      {
        "key": "F",
        "name": "Callous Sol [4 Bars]",
        "type": "Awakening / EX",
        "cooldown": "45s",
        "damage": "High Impact / EX",
        "description": "Gather the sun’s light into a growing sphere, then hurl it down. The longer it charges, the bigger it lands, leaving molten ground that burns anyone who walks on it."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 40,
        "damage": 55,
        "ability": 55
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain The Sun in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items."
      },
      {
        "q": "What combat role does The Sun fulfill?",
        "a": "The Sun functions primarily as an authentic Zoner Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "lyin-eyes",
    "name": "Lyin' Eyes",
    "canonicalUser": "Laem Chabang",
    "jojoPart": "Part 9: The JOJOLands",
    "rarity": "Rare",
    "tier": {
      "pvp": "B",
      "raid": "B",
      "farming": "C"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items.",
    "lore": "Lyin' Eyes is a powerful Stand possessed by Laem Chabang in Part 9: The JOJOLands.",
    "image": "/images/stands/lyin-eyes.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Piling Nematodes",
        "description": "Attacks and Stress, up to 20 stacks. Each stack gives the next damaging skill 3% more damage, up to 60%, or 5% per stack for a skill. That skill spends the Stress and keeps the bonus for all its hits. Those hits do not add Stress. After 15 seconds..."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Yes Or No?",
        "type": "Attack",
        "cooldown": "25s",
        "damage": "Combative Strike",
        "description": "While wearing your glasses, give a nearby player 5 seconds to answer a yes-or-no question, about themselves or anything at all. You can keep fighting while they answer. A correct answer adds 3 Stress. A wrong answer or no answer makes you shoot their leg, spending one Fury round and leaving them Cri"
      },
      {
        "key": "E",
        "name": "Fear Sense",
        "type": "Attack",
        "cooldown": "1s",
        "damage": "Combative Strike",
        "description": "See an enemy’s EX. Choosing your locked target or the nearest enemy. Drains 1 Stress every 3 seconds and ends when they run out. Use again to stop."
      },
      {
        "key": "R",
        "name": "Fury",
        "type": "Attack",
        "cooldown": "0.35s",
        "damage": "Combative Strike",
        "description": "Draw your 10-round pistol and fire with light attacks. You cannot sprint while it is drawn. Use again to holster and keep your remaining ammo. Hold to reload. Drawing an empty pistol also reloads it."
      },
      {
        "key": "T",
        "name": "Stress Test",
        "type": "Attack",
        "cooldown": "24s",
        "damage": "Combative Strike",
        "description": "Hold an enemy at gunpoint for up to 4 seconds. You can walk with them, and they take the hits coming from in front of you instead of you. A hit from behind makes you let them go. Click to shoot if they have less EX than you, spending one Fury round. Otherwise you choke them and drop them. Running ou"
      },
      {
        "key": "Y",
        "name": "Target",
        "type": "Attack",
        "cooldown": "1s",
        "damage": "Combative Strike",
        "description": "Lock onto a nearby person. Your skills prefer them while they are in range. Hold to clear the target. (Hold to clear target.) EX Moves [Awakening Moveset]"
      },
      {
        "key": "F",
        "name": "Locate [2 Bars]",
        "type": "Awakening / EX",
        "cooldown": "30s",
        "damage": "High Impact / EX",
        "description": "Choose a player to track for 60 seconds. Lock onto them with Target to end the search and add 5 Stress."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 45,
        "damage": 45,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Lyin' Eyes in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items."
      },
      {
        "q": "What combat role does Lyin' Eyes fulfill?",
        "a": "Lyin' Eyes functions primarily as an authentic Disruption Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "the-mattekudasai",
    "name": "The MATTEKUDASAI",
    "canonicalUser": "Usagi Alohaoe",
    "jojoPart": "Part 9: The JOJOLands",
    "rarity": "Rare",
    "tier": {
      "pvp": "A",
      "raid": "B",
      "farming": "B"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items.",
    "lore": "The MATTEKUDASAI is a powerful Stand possessed by Usagi Alohaoe in Part 9: The JOJOLands.",
    "image": "/images/stands/the-mattekudasai.webp",
    "combatRole": "Utility",
    "passives": [
      {
        "name": "Request Fulfillment",
        "description": "Mechanical bird hops forward to transform into exact utility tools or weapons requested by allies."
      },
      {
        "name": "Big Jump",
        "description": "Performs a secondary aerial leap before touching the floor, clearing wide chasms and evasion traps."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Big Jump",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "The bird can make a second leap before landing. Use it to clear gaps and reach higher ground."
      },
      {
        "key": "E",
        "name": "## False Structure",
        "type": "Attack",
        "cooldown": "11s",
        "damage": "Combative Strike",
        "description": "Scan a prop, then turn the Stand into a copy. Hold to switch between learned props. Pilot the copy to move and swing it, or stop piloting to leave it in place. Tap again to recall it."
      },
      {
        "key": "R",
        "name": "Recall",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "False Structure, The Gift, Weapon Wish, Not Licensed and Fake Camera can be recalled with another tap. The net and wire fence stay until they finish or break. A form’s cooldown starts when it returns."
      },
      {
        "key": "T",
        "name": "Net",
        "type": "Attack",
        "cooldown": "14s",
        "damage": "Combative Strike",
        "description": "Throw the stand as a net to slam and pin an enemy. Close catches hold them longer. Hold to stretch it into a wire fence that knocks enemies back. Both bypass blocking, can be parried, and can be broken."
      },
      {
        "key": "Y",
        "name": "The Gift",
        "type": "Attack",
        "cooldown": "17s",
        "damage": "Combative Strike",
        "description": "Offer a gift for another player to choose, or answer an NPC’s request. Tap again to recall it safely. Hold while an enemy carries it to make it stab or bonk them; the hit can’t be blocked or dodged."
      },
      {
        "key": "F",
        "name": "Weapon Wish",
        "type": "Attack",
        "cooldown": "25s",
        "damage": "Combative Strike",
        "description": "Let another player choose a MAC-10, Glory Days pistol or Ringo’s revolver. They can pick it up and use light attacks to shoot. Tap again to recall it, or hold to turn the gun on its holder."
      },
      {
        "key": "G",
        "name": "Real Damage",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Combative Strike",
        "description": "Attacks on copied props, the net, the fence and gifts left on the ground pass some damage to you. Crashes and attacks on the car hurt you too. The camera breaks in one hostile hit and deals a small amount of damage to you. EX Moves [Awakening Moves]"
      },
      {
        "key": "H",
        "name": "Not Licensed [2 Bars]",
        "type": "Awakening / EX",
        "cooldown": "38s",
        "damage": "High Impact / EX",
        "description": "Turn the Stand into a tougher, faster sports car you or an ally can drive. Pilot it to steer slowly without sitting inside. Damage to the car hurts you too. Tap again to turn it back."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 45,
        "damage": 45,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain The MATTEKUDASAI in STAND OUT?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items."
      },
      {
        "q": "What combat role does The MATTEKUDASAI fulfill?",
        "a": "The MATTEKUDASAI functions primarily as an authentic Utility Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "hermit-purple",
    "name": "Hermit Purple",
    "canonicalUser": "Joseph Joestar",
    "jojoPart": "Part 3: Stardust Crusaders",
    "rarity": "Rare",
    "tier": {
      "pvp": "A",
      "raid": "A",
      "farming": "A+"
    },
    "status": "Playable",
    "obtainMethod": "Obtainable by doing Bill’s Request quest (requires Hamon mastery and no Stand equipped).",
    "lore": "Hermit Purple is a powerful Stand possessed by Joseph Joestar in Part 3: Stardust Crusaders.",
    "image": "/images/stands/hermit-purple.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Hamon Conduction",
        "description": "Purple vines channel breathing Ripple current, inflicting severe sunlight burns against Vampires and Pillar Men."
      },
      {
        "name": "Divination Sight",
        "description": "Vines track enemy positions through walls and reveal hidden traps across the district."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Boulder Hold / Pull Rock / Throw",
        "type": "Attack",
        "cooldown": "24s",
        "damage": "Ranged Projectile",
        "description": "Brace and pull a rock from the ground. While holding it, use slower, heavier basic attacks that deal more damage and stun. Use again to spin with hyperarmor, repeatedly knocking nearby enemies away before throwing the rock. It bursts on impact to hit nearby targets."
      },
      {
        "key": "E",
        "name": "Spirit Photography",
        "type": "Attack",
        "cooldown": "15s",
        "damage": "Combative Strike",
        "description": "Choose a player from the leaderboard, then smash a camera to develop a photograph of them and their surroundings."
      },
      {
        "key": "R",
        "name": "Hermit Grasp",
        "type": "Attack",
        "cooldown": "8s",
        "damage": "Combative Strike",
        "description": "Lash out with your vines, pushing nearby enemise outward before pulling them toward you. Bypasses their guard and briefly prevents blocking without dealing damage. EX [Awakening Moves]"
      },
      {
        "key": "T",
        "name": "Hermit Grasp EX [1 Bar]",
        "type": "Awakening / EX",
        "cooldown": "16s",
        "damage": "High Impact / EX",
        "description": "Aim at an enemy and extend your vines to bind them from afar. Interrupts flight and reels them toward you. Bypassing their guard without dealing damage."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature skill effectiveness and duration.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 45,
        "damage": 45,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "Authentic JoJo moveset matching official game mechanics",
      "Strong competitive versatility across PvP and Raid encounters",
      "Reliable guardbreak options and combo starters"
    ],
    "cons": [
      "Requires strict Ability point investment to optimize scaling",
      "Punishable recovery frames on whiffed heavy finishers",
      "Dependent on situational spacing and cooldown pacing"
    ],
    "faqs": [
      {
        "q": "How do I obtain Hermit Purple in STAND OUT?",
        "a": "Obtainable by doing Bill’s Request quest (requires Hamon mastery and no Stand equipped)."
      },
      {
        "q": "What combat role does Hermit Purple fulfill?",
        "a": "Hermit Purple functions primarily as an authentic Disruption Stand with dedicated tools for competitive battles."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "kiss",
    "name": "Kiss",
    "canonicalUser": "Ermes Costello",
    "jojoPart": "Part 6: Stone Ocean",
    "rarity": "Legendary",
    "tier": {
      "pvp": "A+",
      "raid": "S",
      "farming": "A"
    },
    "status": "Playable",
    "obtainMethod": "Awakened using Mysterious Arrows (Legendary tier ~2.5% pool), Lucky Arrows (34.0%), or Bizarre Arrows (57.9%).",
    "lore": "Ermes Costello's Stand creates stickers that duplicate whatever they touch. Removing a sticker forces the two copies violently back together, damaging them as they merge. She uses this power to duplicate limbs, turn objects into traps, and pull herself toward distant targets.",
    "image": "/images/stands/kiss.webp",
    "combatRole": "Utility",
    "passives": [
      {
        "name": "Sticker Replication & Merge Physics",
        "description": "Kiss can deploy up to 6 stickers on enemies, objects, or limbs. Spent stickers regenerate every 4 seconds. Peeling stickers via Sticker Rip (G) reunites duplicates, dealing collision damage to enemies caught between them. Peeling enemy limbs applies specialized debuffs: arm deals 8 damage and slows attacks for 4s, leg deals 7 damage and slows movement for 4s, and head deals 13 damage with extended stun and 3s vision blur."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Sticker Placement / Throw",
        "type": "Utility",
        "cooldown": "4s",
        "damage": "Variable Debuff",
        "description": "Tap to place a sticker on an enemy or throwable within reach. Hold to throw a sticker up to 120 studs. You can maintain up to six stickers simultaneously. Placing on enemies can be blocked or perfect blocked."
      },
      {
        "key": "E",
        "name": "Kizz Olala",
        "type": "Barrage",
        "cooldown": "14s",
        "damage": "Rapid Multi-Kick",
        "description": "Deliver a rapid kick barrage. The final kick strains opponent guards (can be perfect blocked), knocks them back, and automatically places an arm sticker on anyone who lacks one. Follow up with G to peel for bonus damage and attack slow."
      },
      {
        "key": "R",
        "name": "Yeet",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "8 Dmg + Ragdoll",
        "description": "Kiss flies to the enemy or throwable nearest your cursor within 22 studs, lifts them overhead, and violently heaves them in camera direction. Enemies take 8 damage and ragdoll for 1 second. Stickered prop copies fly three times farther and hurt anyone they hit."
      },
      {
        "key": "F",
        "name": "Double Trouble",
        "type": "Utility",
        "cooldown": "16s",
        "damage": "+50% Buff",
        "description": "Spend two stickers to duplicate your limbs for 12 seconds: aim cursor above screen center for arms (+50% light attack damage) or below center for legs (+50% movement speed and jump power). Hold while aiming at another player to apply to them instead."
      },
      {
        "key": "G",
        "name": "Sticker Rip",
        "type": "Attack",
        "cooldown": "1s",
        "damage": "7-13 Dmg / Collision",
        "description": "Command Kiss to fly to an active sticker within 50 studs and rip it off, forcing copies to snap back together. Merging objects deal high damage to intervening players. Peeling limb stickers applies devastating slow and vision blur."
      },
      {
        "key": "T (Hold) + LMB",
        "name": "Body Double",
        "type": "Awakening / EX",
        "cooldown": "30s",
        "exCost": "3 EX Bars",
        "damage": "50% Banked Dmg",
        "description": "Slap a sticker on an enemy to tear off a full body double that anyone can hit, carry, or throw. The double banks 50% of all damage it takes. Press G to rip the sticker and snap the double back into the target, dealing all banked damage at once, or carry it to drag them to you."
      },
      {
        "key": "T (Hold) + E",
        "name": "Thread Recall",
        "type": "Awakening / EX",
        "cooldown": "22s",
        "exCost": "2 EX Bars",
        "damage": "12 Dmg + Pull",
        "description": "Kiss flies up to 32 studs to latch on and swipe a copy of enemy clothing. Hold for up to 60 seconds. Tap again to yank the enemy right to your feet, or hold to launch the copy back into them for 12 damage."
      },
      {
        "key": "T (Hold) + R",
        "name": "Return Trip",
        "type": "Movement",
        "cooldown": "18s",
        "exCost": "1 EX Bar",
        "damage": "Prop Flight",
        "description": "Grab a stickered object and ride the magnetic pull toward its original counterpart. Press jump mid-transit to dismount early while retaining high directional momentum."
      }
    ],
    "abilityScaling": [
      "Ability points extend the duration and magnet pull range of Double Trouble and Return Trip.",
      "Higher Ability stat shortens sticker replenishment cooldown down to 2.5s."
    ],
    "recommendedBuild": {
      "points": {
        "health": 60,
        "damage": 55,
        "ability": 110
      },
      "subAbility": "Hamon (Zeppeli Path)",
      "synergyNotes": "Double Trouble arm duplication stacks with Zeppeli Hamon light attacks for insane DPS, while leg duplication enables untouchable zoning and gap-closing."
    },
    "pros": [
      "Extreme tactical versatility with sticker props, limb duplication, and body doubles",
      "Body Double (3 EX) banks 50% damage for burst one-shot setups in team fights",
      "Short 1s cooldown on Sticker Rip allows continuous pressure and movement disruption"
    ],
    "cons": [
      "Sticker placement requires accurate cursor aiming and can be blocked or parried",
      "Requires tracking up to 6 active stickers and 12 object duplicates",
      "Lower baseline raw punch damage without Double Trouble active"
    ],
    "faqs": [
      {
        "q": "How do you get Kiss (Kizz) in Stand Out?",
        "a": "Kiss was officially released in the November 10, 2026 update and can be awakened with standard Mysterious Arrows (~50% tier share in the Rare pool) or Lucky/Bizarre Arrows."
      },
      {
        "q": "How does Body Double work?",
        "a": "Place a sticker on an enemy to rip off a double. Any damage dealt to the double is banked at 50% value. When you press G, the double snaps back into the enemy, instantly delivering all accumulated damage."
      }
    ],
    "verifiedDate": "2026-11-22"
  },
  {
    "slug": "heavens-door-prime",
    "name": "Heaven's Door Prime",
    "canonicalUser": "Rohan Kishibe",
    "jojoPart": "Part 4: Diamond is Unbreakable",
    "rarity": "Exclusive",
    "tier": {
      "pvp": "Z",
      "raid": "S+",
      "farming": "S"
    },
    "status": "Playable",
    "obtainMethod": "Unlocked via Catalog Supporter Rank 7 (Heaven's Door tier at 8,000 sales/supporters) or Top 3 weekly resets on Raid, Bounty Hunters, Raid Champions, or Fortune leaderboards. Once unlocked, Heaven's Door Prime can be re-obtained from regular arrows (Nov 23 update).",
    "lore": "The ascended, ultimate form of Rohan Kishibe's Stand encountered in Hawaii. While physically elegant, it wields absolute authority over human biology and consciousness—transmuting opponents into living manuscripts, inscribing binding commands, and commandeering enemies to fight as obedient pawns.",
    "image": "/images/stands/heavens-door-prime.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Manuscript Authority & 166 Stat Scaling",
        "description": "Heaven's Door Prime possesses unmatched Ability scaling. At 166 Ability, Book Transmutation reaches 17.5 stud range with a full 2-second book duration, Written Command range extends from 18 to 25 studs with 50% boosted healing and burn damage, and Become My Character extends mind control duration to 20 seconds with 85-stud guard detection."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Pen Barrage",
        "type": "Barrage",
        "cooldown": "20s",
        "damage": "Rapid Slashing",
        "description": "Sweep your Stand's G-Pen through a rapid, blockable barrage of artistic slashes. Damage scales 70% with Strength and 30% with Ability."
      },
      {
        "key": "E",
        "name": "Book Transmutation",
        "type": "Attack",
        "cooldown": "22s",
        "damage": "Face Unfold / Stun",
        "description": "Turn an enemy's face into an open manuscript for 1.5–2 seconds (scales with Ability). Travels faster than base Heaven's Door with longer reach. Allows regular blocks but cannot be perfect blocked. Closes prematurely if either player takes damage."
      },
      {
        "key": "R",
        "name": "Written Command",
        "type": "Utility",
        "cooldown": "15s",
        "damage": "Multi-Command Effect",
        "description": "Write on a book target, or hold to write on yourself. Commands: Burn (2.5s fire), Blind (5s vision blur), Reveal Cooldowns (12s insight), Restore 30 Health, or Grant Unstoppable (5s super armor). At 166 Ability, command durations, healing, and damage rise by 50%."
      },
      {
        "key": "G",
        "name": "Book Rush",
        "type": "Heavy",
        "cooldown": "25s",
        "damage": "3s Unblockable Book",
        "description": "Rush Heaven's Door forward to turn touched enemies into books for 3 full seconds. Bypasses both standard blocks and perfect blocks (Nov 23 fix: no longer instant-kills when snapping a neck)."
      },
      {
        "key": "T (Hold) + E",
        "name": "Manga",
        "type": "Awakening / EX",
        "cooldown": "45s",
        "exCost": "3 EX Bars",
        "damage": "15 Base + AoE Book",
        "description": "Hold up Heaven's Door's original manga manuscript. Deals 15 base damage and turns all nearby players within a 32–40 stud radius into books for 3–3.5s based on Ability. Bypasses perfect blocks completely."
      },
      {
        "key": "T (Hold) + R",
        "name": "Become My Character",
        "type": "Awakening / EX",
        "cooldown": "120s",
        "exCost": "4 EX Bars",
        "damage": "Puppet Control",
        "description": "Command someone you have turned into a book to fight for you with their Stand! At 166 Ability, puppet duration rises from 12s to 20s, application range from 15 to 22 studs, and automated enemy guard detection to 85 studs."
      }
    ],
    "abilityScaling": [
      "At 166 Ability: Book Transmutation reaches 17.5 studs and 2s duration (80% Ability / 20% Strength scaling).",
      "At 166 Ability: Written Command range increases to 25 studs, with 50% stronger healing, burning, and buffs.",
      "At 166 Ability: Become My Character puppet duration extends to 20 seconds."
    ],
    "recommendedBuild": {
      "points": {
        "health": 59,
        "damage": 0,
        "ability": 166
      },
      "subAbility": "Vampire (Stone Mask)",
      "synergyNotes": "Maximize Ability to the hard 166 cap for 20-second mind control and max book range, paired with Vampire for passive night regeneration and Space Ripper Stingy Eyes."
    },
    "pros": [
      "Top-tier crowd control with unblockable Book Rush and 40-stud AoE Manga EX",
      "Become My Character mind control turns enemy players into combat allies for up to 20 seconds",
      "Written Command offers self-healing, super armor, vision blur, and burning versatility"
    ],
    "cons": [
      "Extreme obtainment difficulty: requires Top 3 weekly raid/bounty leaderboards or 8,000 Catalog supporters",
      "High cooldowns on major skills (Book Rush 25s, Manga 45s, Become My Character 120s)",
      "Book Transmutation closes immediately if Rohan takes incoming damage"
    ],
    "faqs": [
      {
        "q": "How do you get Heaven's Door Prime?",
        "a": "Unlock its Stand Chip by placing Top 3 at the weekly reset on Raid leaderboards, Bounty Hunters, Raid Champions, or the Fortune leaderboard, or by reaching 8,000 Catalog sales/supporters. Once unlocked on your account, you can also pull it again from regular arrows."
      },
      {
        "q": "Can you get Heaven's Door Prime from arrows?",
        "a": "Not initially—it is locked behind Exclusive milestones. However, as of the November 23 patch, players who have already unlocked Heaven's Door Prime can re-obtain it from regular arrows."
      },
      {
        "q": "What is the difference between Heaven's Door and Heaven's Door Prime?",
        "a": "Heaven's Door Prime features faster Book Transmutation travel, unblockable Book Rush (G), higher Ability scaling up to 166 SP, and Become My Character (4 EX) to mind-control enemies."
      }
    ],
    "verifiedDate": "2026-11-26"
  },
  {
    "slug": "crazy-diamond",
    "name": "Crazy Diamond",
    "canonicalUser": "Josuke Higashikata",
    "jojoPart": "Part 4: Diamond is Unbreakable",
    "rarity": "Pinnacle",
    "tier": {
      "pvp": "S+",
      "raid": "S+",
      "farming": "S"
    },
    "status": "Playable",
    "obtainMethod": "Awakened from the Arrow Pool as a Pinnacle Stand: Mysterious Arrows (~0.5% Pinnacle tier), Lucky Arrows (1.5% Pinnacle), or Bizarre Arrows (4.4% Pinnacle). Not obtainable from Part 3 or Part 5 Focus Arrows.",
    "lore": "Josuke Higashikata’s Crazy Diamond can punch a wall to pieces and put it back together. It can mend someone else’s wounds the same way. Josuke can’t use it on himself or bring anyone back from the dead.",
    "image": "/images/stands/crazy-diamond.webp",
    "combatRole": "Support",
    "passives": [
      {
        "name": "Restoration Mode (G)",
        "description": "Tap G to heal enemies and allies. A full light combo restores up to 20 health before bonuses; a heavy restores 8. Healing can still stagger or push the target. Enough healing during bleedout gets allies back on their feet. Crazy Diamond cannot heal its own user or bring back the dead."
      },
      {
        "name": "Reconstruction",
        "description": "Release over damaged scenery or a vehicle to repair it. Broken prop pieces rebuild in front of the user, and deconstructed cubes rebuild the original prop or vehicle. Aim at a standing wall, staircase, or pillar to lower it, or use wall rubble to raise it again."
      },
      {
        "name": "Hair Rage (WHAT DID YOU SAY?)",
        "description": "With 5 EX bars and Crazy Diamond summoned, nearby opponents (within 24 studs) insulting your hair—or activating the 5-EX skill—triggers Rage. Light attacks deal double damage/healing, heavy Stand punches and eligible base moves deal +15% damage, base cooldowns run 20% faster on foot, and Heaven's Door cannot turn you into a book or write new commands."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Dora Light Combo",
        "type": "Attack",
        "damage": "4-Hit / 20 HP Heal (Restore)",
        "description": "Four-strike punch combo. In Restoration Mode, restores up to 20 health before bonuses (8 HP on Heavy) and can revive downed allies during bleedout."
      },
      {
        "key": "E",
        "name": "Dora Barrage",
        "type": "Barrage",
        "cooldown": "23s",
        "damage": "Guardbreak Finisher / 30-45 Heal",
        "blockable": true,
        "parriable": true,
        "description": "Punch in quick succession and finish with a guard-breaking blow (final punch can be perfect blocked). In Restoration Mode, restores 30 HP (45 HP at 151 Ability). During Rage, the barrage lasts longer, allows walking, and leaves the enemy's face crooked until respawn."
      },
      {
        "key": "R",
        "name": "Crazy Uppercut / Fixed Donut / Fresh Pair Of Underwear",
        "type": "Heavy",
        "cooldown": "18s",
        "damage": "Buffed Launcher / 20-30 Heal",
        "description": "Launch the target with a rising punch (damage buffed in Update 1). In Restoration Mode, becomes Fixed Donut, grabbing targets, healing 20-30 HP (30 at 151 Ability), and clearing harmful effects. In Rage with Restoration off, becomes Fresh Pair Of Underwear: grabs through block, heals on contact, and triggers a delayed barrage 3 seconds later that scales with health restored (beatdown healing fixed Nov 22)."
      },
      {
        "key": "T",
        "name": "Shining Kick",
        "type": "Attack",
        "cooldown": "28s",
        "damage": "Buffed Leg-Break Kick",
        "description": "Hold to kick farther, increasing leg-break chance; a 1-second hold knocks enemies off their feet (damage buffed in Update 1). Aim at airborne enemies to chase and launch them. Tracks nearby foes during Rage and shatters Diamond Walls into shorter-range shards."
      },
      {
        "key": "Y",
        "name": "Diamond Wall / Bearing Shot (Restore) / Yo Angelo (Rage)",
        "type": "Utility",
        "cooldown": "20s (Wall) / 14s (Bearing)",
        "description": "Barrage the ground to raise an 80-HP protective wall for 6 seconds that blocks projectiles (Nov 24 update: wall creation is NO LONGER cancelled by stun). Enemy punches tip it back; 3 lights topple it, heavies scatter shards, uppercuts rain rocks. With Restoration on, swaps to Bearing Shot (390-stud projectile, +15% headshot damage, tracks Blood Knife marks). With Rage on (Restore off), swaps to Yo Angelo, turning <10% HP or downed targets into throwable rock statues."
      },
      {
        "key": "H",
        "name": "Blood Knife (Restore Variant)",
        "type": "Attack",
        "cooldown": "14s",
        "damage": "80% Str / 20% Abil",
        "description": "Send a slash of blood forward. Anyone hit by the slash, trail, or splash is marked for 10 seconds, allowing Bearing Shot to fire homing shards after them."
      },
      {
        "key": "G",
        "name": "Toggle Restoration Mode",
        "type": "Utility",
        "cooldown": "1s",
        "description": "Toggle between offensive combat mode and Restoration healing mode (swapping Diamond Wall for Bearing Shot and Crazy Uppercut for Fixed Donut)."
      },
      {
        "key": "T (Hold) + E",
        "name": "Rock Staircase",
        "type": "Awakening / EX",
        "exCost": "1 Bar",
        "cooldown": "6s",
        "description": "Stand still to raise steps launching enemies up and forward; move forward to ride a slanted pillar knocking foes ahead; cast midair to rise on a straight pillar. 3 light hits topple a pillar; heavy sends it flying."
      },
      {
        "key": "T (Hold) + R",
        "name": "Tandem Uppercut",
        "type": "Awakening / EX",
        "exCost": "2 Bars",
        "cooldown": "45s",
        "damage": "Buffed EX Launcher",
        "description": "Send Crazy Diamond behind an enemy to uppercut them back toward you for extended combos (damage increased in Update 1)."
      },
      {
        "key": "T (Hold) + T",
        "name": "Deconstruction",
        "type": "Awakening / EX",
        "exCost": "2 Bars",
        "cooldown": "16s",
        "description": "Hold to aim and punch a vehicle, prop, or streetlight into a throwable cube; breaks dropped crafted items into ingredients. Restoring a cube beside an enemy coats them in scrap and slows their attacks for 4s. On a motorcycle, vaults you upward and forward while rebuilding."
      },
      {
        "key": "T (Hold) + Y",
        "name": "WHAT DID YOU SAY?",
        "type": "Awakening / EX",
        "exCost": "5 Bars",
        "cooldown": "12s",
        "description": "Forces the nearest opponent within 24 studs to insult your hair and triggers Rage Mode (1 EX bar drained every 12s). Doubles light attack damage/healing, boosts heavy Stand punches and eligible base moves by 15%, speeds up base cooldowns by 20% on foot, and grants immunity to Heaven's Door book transmutation."
      }
    ],
    "abilityScaling": [
      "Ability increases Healing Barrage (Dora Barrage in Restore) from 30 up to 45 HP at 151 Ability.",
      "Ability increases Crazy Uppercut / Fixed Donut healing from 20 up to 30 HP at 151 Ability.",
      "Blood Knife and Bearing Shot scale 80% with Strength and 20% with Ability.",
      "Dora Barrage, Crazy Uppercut, Shining Kick, and Diamond Wall damage scale with Strength."
    ],
    "recommendedBuild": {
      "points": {
        "health": 100,
        "damage": 75,
        "ability": 50
      },
      "subAbility": "Zeppeli Hamon",
      "synergyNotes": "100 Health maximizes survival (since Crazy Diamond cannot heal itself), 75 Damage amplifies Dora Barrage, Uppercut, and Shining Kick buffs, and 50 Ability boosts Blood Knife/Bearing Shot and healing scaling."
    },
    "pros": [
      "Unmatched hybrid team healer and close-range Pinnacle brawler",
      "Diamond Wall creation is no longer cancelled by stun (Nov 24 buff)",
      "Can revive allies during bleedout and repair vehicles/scenery via Reconstruction",
      "Rage Mode doubles light damage/healing and blocks Heaven's Door transmutation"
    ],
    "cons": [
      "Cannot heal its own user with Restoration Mode",
      "Toggling Restoration swaps out Diamond Wall for Bearing Shot",
      "Rage drains 1 EX bar every 12 seconds and requires full 5 EX bars to start"
    ],
    "faqs": [
      {
        "q": "Is Crazy Diamond Pinnacle or Exclusive rarity?",
        "a": "Crazy Diamond is officially Pinnacle rarity (listed under Stands (Arrow) on the official Trello). It is rolled from Mysterious (0.5%), Lucky (1.5%), and Bizarre (4.4%) Arrows—not Exclusive."
      },
      {
        "q": "Can Diamond Wall be interrupted anymore?",
        "a": "No. The November 24, 2026 patch updated Crazy Diamond so Diamond Wall creation is no longer cancelled by stun."
      },
      {
        "q": "How do you revive players with Crazy Diamond?",
        "a": "Toggle Restoration Mode with G and hit a downed ally who is bleeding out using light attacks or Dora Barrage to bring them back onto their feet."
      }
    ],
    "verifiedDate": "2026-11-26"
  },
  {
    "slug": "the-hand",
    "name": "The Hand",
    "canonicalUser": "Okuyasu Nijimura",
    "jojoPart": "Part 4: Diamond is Unbreakable",
    "rarity": "Mythical",
    "tier": {
      "pvp": "S",
      "raid": "S",
      "farming": "A+"
    },
    "status": "Playable",
    "obtainMethod": "Awakened from the Arrow Pool using Mysterious Arrows (~1.5% Mythical tier chance), Lucky Arrows (~4.5%), or Bizarre Arrows (~12%).",
    "lore": "Okuyasu Nijimura’s The Hand erases whatever its right palm scrapes away. The space on either side closes the gap instantly.",
    "image": "/images/stands/the-hand.webp",
    "combatRole": "Offense",
    "passives": [
      {
        "name": "Erased Limbs",
        "description": "Erasure, Erasure Leap, Bring to Me, Rib Breaker’s grab and Erasure Combo each have a 10% chance to erase an enemy arm and a separate 5% chance to erase a leg. Damaged limbs heavily penalize enemy speed and combat capabilities."
      },
      {
        "name": "Projectile Erasure",
        "description": "Right-palm scraping swipes automatically erase incoming projectiles directly in front of The Hand."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Right Palm Scrapes",
        "type": "Attack",
        "damage": "Heavy Strikes",
        "description": "Heavy punches scaling equally with Strength and Ability."
      },
      {
        "key": "E",
        "name": "Barrage",
        "type": "Barrage",
        "cooldown": "23s",
        "damage": "Heavy Guardbreak",
        "description": "A slower flurry of heavy punches, ending in a guardbreak palm scrape that can be perfect blocked."
      },
      {
        "key": "R",
        "name": "Erasure",
        "type": "Heavy",
        "cooldown": "22s",
        "damage": "20–42 Erasure Damage",
        "description": "Suck nearby enemies into your erasure, then swipe with The Hand’s right palm. Deals 20-42 damage, breaks guard, stuns for 0.75s, destroys terrain and walls, and grants hyperarmor from windup through the swipe (Update 1)."
      },
      {
        "key": "T",
        "name": "Rib Breaker",
        "type": "Heavy",
        "cooldown": "20s",
        "damage": "Grab / 10-24 Damage",
        "description": "Grab an enemy through their guard and drive a knee into their ribs, dealing 10-24 damage and stunning for 1.4 seconds for guaranteed follow-up."
      },
      {
        "key": "Y",
        "name": "Erasure Leap",
        "type": "Movement",
        "cooldown": "12s",
        "damage": "10-24 Damage",
        "description": "Erase space ahead to dash 47 to 141 studs toward your cursor, taking nearby characters along. Strikes for 10-24 damage on arrival."
      },
      {
        "key": "G",
        "name": "Pilot Mode",
        "type": "Utility",
        "cooldown": "5s",
        "description": "Release The Hand to pilot it independently within range."
      },
      {
        "key": "V",
        "name": "Bring to Me",
        "type": "Awakening / EX",
        "exCost": "1 Bar",
        "cooldown": "20s",
        "damage": "4-12 Damage",
        "description": "Erase space to pull enemies from up to 87.36 studs into punching range. Marked enemies move 30% slower (buffed from 20% in Update 1) and are stunned for 0.3s. Can also catch one loose throwable."
      },
      {
        "key": "B",
        "name": "Erasure Combo",
        "type": "Awakening / EX",
        "exCost": "2 Bars",
        "cooldown": "28s",
        "damage": "28-60 Damage",
        "description": "Swipe with right palm, followed by two punches dealing 28-60 damage, ragdolling enemies for 1.2s."
      },
      {
        "key": "H",
        "name": "ZA HANDO... ZA WARUDO!",
        "type": "Awakening / EX",
        "exCost": "5 Bars",
        "cooldown": "60s",
        "damage": "Catastrophic Space Collapse",
        "description": "Massive arena-wide erasure that collapses space around all enemies in range."
      }
    ],
    "abilityScaling": [
      "Ability increases Erasure Leap travel distance from 47 studs up to 141 studs at 166 Ability.",
      "Ability increases Bring to Me range from 67.2 studs up to 87.36 studs.",
      "Strength and Ability contribute equally to Erasure and Barrage damage."
    ],
    "recommendedBuild": {
      "points": {
        "health": 100,
        "damage": 65,
        "ability": 60
      },
      "subAbility": "Vampire",
      "synergyNotes": "Vampire blood drain and dash synergize with The Hand devastating grab stuns and space-erasing pulls."
    },
    "pros": [
      "High-damage true guardbreak with Erasure",
      "Long-range space pull with Bring to Me",
      "Incredible mobility via Erasure Leap (up to 141 studs)",
      "Chance to sever limbs, permanently debuffing opponents during battle"
    ],
    "cons": [
      "Relatively slow barrage startup compared to Star Platinum",
      "Requires precise cursor aiming for Erasure Leap and Bring to Me",
      "High EX cost for ultimate awakening moves"
    ],
    "faqs": [
      {
        "q": "Can The Hand erase walls and scenery?",
        "a": "Yes, Erasure physically deletes destructible obstacles and breakable walls, allowing bypass of buildings."
      },
      {
        "q": "What triggers the limb erasure passive?",
        "a": "Erasure, Erasure Leap, Bring to Me, and Rib Breaker each roll a 10% chance to sever an arm and 5% chance to sever a leg."
      }
    ],
    "verifiedDate": "2026-11-26"
  },
  {
    "slug": "bad-company",
    "name": "Bad Company",
    "canonicalUser": "Keicho Nijimura",
    "jojoPart": "Part 4: Diamond is Unbreakable",
    "rarity": "Mythical",
    "tier": {
      "pvp": "S",
      "raid": "S+",
      "farming": "S"
    },
    "status": "Playable",
    "obtainMethod": "Awakened from the Arrow Pool using Mysterious Arrows (~5.0% Mythical tier chance), Lucky Arrows (22.1% Mythical), or Bizarre Arrows (37.7% Mythical). Part 3 and Part 5 Focus Arrows cannot pull Part 4 Stands.",
    "lore": "Keicho Nijimura commands Bad Company, a miniature army of riflemen, Green Berets, tanks and attack helicopters. Their weapons fire live rounds.",
    "image": "/images/stands/bad-company.webp",
    "combatRole": "Zoner",
    "passives": [
      {
        "name": "Military Might (14-Point Budget & Per-Unit Cooldowns)",
        "description": "You deploy with 3 Infantry (2 Might each), 1 Green Beret (2 Might), 1 Tank (3 Might), and 1 Attack Helicopter (3 Might), consuming all 14 Military Might. Recalling a unit frees its Might immediately. Destroyed units lock their Might on per-type replacement timers: Infantry 10s, Green Berets 16s, Tanks 25s, and Helicopters 30s."
      },
      {
        "name": "Unit Health & Armor Rules (Nov 24 Rework)",
        "description": "Following the November 24 rework, unit health pools were reduced across the board: Infantry 10 HP (was 30), Green Berets 5 HP (was 24), Tanks 45 HP (was 60), and Helicopters 15 HP (was 36). Tanks take 50% reduced projectile damage and fire perfect-blockable guardbreaking shells with a flash warning; Helicopters fly lower, take bonus projectile damage, and fire blockable missiles with a flash warning."
      },
      {
        "name": "Green Beret Ambush & Pilot Mobility",
        "description": "Green Berets stay hidden while piloted; approaching within 10 studs of an enemy makes them leap onto the target for up to 4s of stabbing (1.6 dmg/hit), expending the unit. Enemies can dash twice to throw off attached Green Berets. Piloted Infantry and Green Berets move +50% faster, and piloted Helicopters move +100% faster (2x speed)."
      },
      {
        "name": "Reworked Alt Colors & HUD Layout",
        "description": "All unit alternate color skins were completely redesigned on November 24 into Urban, Special Forces, and Desert palettes. The Bad Company unit menu can also be repositioned freely via the in-game HUD layout editor."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Squad Volley / Pilot Attack Order",
        "type": "Attack",
        "damage": "0.5 Rifle / 0.33 Heli Burst",
        "description": "Aim at an enemy and click M1 while piloting to order piloted units to attack. During your own player M1 swings, active units fire at half rate."
      },
      {
        "key": "G",
        "name": "Unit Type / Select All (Hold)",
        "type": "Utility",
        "cooldown": "1s",
        "description": "Tap G to cycle through deployed unit types; the selected type deals +25% bonus damage. Hold G to select the entire army for unified movement or recall (no type bonus)."
      },
      {
        "key": "Ctrl",
        "name": "Pilot Mode (3x Range)",
        "type": "Movement",
        "description": "Press Left Ctrl to directly pilot selected units at 3x pre-rework Pilot Range. Select Helicopters to fly (+100% speed), or Infantry/Green Berets (+50% speed). With All Units selected, you can lead up to 3 units simultaneously."
      },
      {
        "key": "E",
        "name": "Focus Fire",
        "type": "Attack",
        "cooldown": "15s",
        "damage": "100% Ability Scaling (1.75x at 166)",
        "description": "Mark an enemy for 6 seconds so Infantry, Tanks, and Helicopters open fire as soon as the target enters range. Tap again to switch targets. Ends immediately if you cast a Sub-Ability move; cooldown increased from 10s to 15s in Update 1."
      },
      {
        "key": "R",
        "name": "Maneuver / Recall (Hold)",
        "type": "Movement",
        "cooldown": "1s",
        "description": "Tap to send selected units to hold a position up to 180 studs away (tripled from 60 studs). Hold to call back selected units that are holding a spot or flanking (merged former ATTENTIONNN skill). Units you are piloting stay with you."
      },
      {
        "key": "T",
        "name": "Flanking",
        "type": "Attack",
        "cooldown": "3s",
        "damage": "50% Ability Bonus",
        "description": "Select one specific unit type and cast on an enemy to make those units circle the target at close range until toggled again. Flanking units fire during Focus Fire or piloted M1 commands. Piloting a flanking type locks your camera onto it as it orbits. Cannot be used with All Units selected."
      },
      {
        "key": "Y",
        "name": "Landmine",
        "type": "Utility",
        "cooldown": "2s",
        "damage": "100% Ability Scaling",
        "description": "Plant an armed mine a step in front of you or beneath your piloted unit (3 charges max). Detonates on contact, knocking down and throwing nearby enemies away. Triggered mines recharge in 22s; expired mines recharge in 1s."
      },
      {
        "key": "T (Hold) + E",
        "name": "Paratroopers",
        "type": "Awakening / EX",
        "exCost": "1 Bar",
        "cooldown": "21s",
        "description": "Deploy a unit of the selected type anywhere up to 180 studs away (requires an open slot and Military Might). Infantry and Green Berets parachute in, Tanks drop under a heavy parachute, and Helicopters fly down. Drops Infantry if All Units are selected."
      },
      {
        "key": "T (Hold) + R",
        "name": "Airstrike",
        "type": "Awakening / EX",
        "exCost": "2 Bars",
        "cooldown": "32s",
        "damage": "Guardbreak (100% Ability)",
        "blockable": false,
        "parriable": true,
        "description": "A fighter jet dives in from behind and flies to your cursor within pilot range, dropping three missiles in sequence. Each blast breaks guard, can be perfect blocked, and scales 100% with Ability."
      },
      {
        "key": "T (Hold) + T",
        "name": "Full Scale Warfare",
        "type": "Awakening / EX",
        "exCost": "3 Bars",
        "cooldown": "48s",
        "damage": "All-Out Reinforcements",
        "description": "Summons temporary reinforcements to fill every empty slot in your army for 6 seconds. Units holding a position fall back to you."
      },
      {
        "key": "T (Hold) + Y",
        "name": "Atomic Strike",
        "type": "Awakening / EX",
        "exCost": "4 Bars",
        "cooldown": "75s",
        "damage": "42 Base + Burn (100% Ability)",
        "description": "Launches a silo warhead with a 3-second aiming window. Strikes enemies within 14 studs of impact and sets survivors on fire. Scales 100% with Ability."
      }
    ],
    "abilityScaling": [
      "Focus Fire scales 100% with Ability (up to 1.75x base damage at 166 Ability).",
      "Landmine and Airstrike blasts scale 100% with Ability.",
      "Atomic Strike impact damage and burn damage scale 100% with Ability.",
      "Flanking gains half the normal Ability damage bonus."
    ],
    "recommendedBuild": {
      "points": {
        "health": 85,
        "damage": 40,
        "ability": 100
      },
      "subAbility": "Caesar Hamon",
      "synergyNotes": "Prioritize Ability to maximize Focus Fire, Landmine, Airstrike, and Atomic Strike damage while maintaining enough Health (85+) to survive rushes if your fragile post-rework squads are wiped."
    },
    "pros": [
      "Tripled pilot range and 180-stud Maneuver/Paratroopers enable massive map control",
      "New Flanking and 3-charge Landmine tools create inescapable close-range zoning traps",
      "2-EX Airstrike provides fast guardbreaking pressure from safe distance",
      "Piloted Helicopters move 2x faster and Infantry/Green Berets move 50% faster"
    ],
    "cons": [
      "Drastically reduced unit HP (Infantry 10, Green Berets 5, Helicopters 15) makes units easy to wipe with AoE",
      "Destroyed Tanks (25s) and Helicopters (30s) lock Military Might for long periods if not recalled manually",
      "Focus Fire has a 15s cooldown and cancels immediately upon using a Sub-Ability move"
    ],
    "faqs": [
      {
        "q": "What changed in the November 24 Bad Company Rework?",
        "a": "Pilot range tripled, Maneuver reach increased from 60 to 180 studs (absorbing ATTENTIONNN as its hold action), Flanking and Landmine were added as base moves, Airstrike (2 EX) was added, Paratroopers moved to 1 EX and can drop any unit type, unit HP was heavily nerfed across all units with per-type replacement cooldowns (10/16/25/30s), piloted speeds increased, and Urban/Special Forces/Desert skins were completely redone."
      },
      {
        "q": "How do you recall Bad Company units after the rework?",
        "a": "ATTENTIONNN is no longer a separate keybind. Hold the Maneuver key (R) to recall selected units that are holding a position or flanking back to your side."
      },
      {
        "q": "How do you counter Bad Company in PvP?",
        "a": "Snipe low-HP Helicopters (15 HP) and Infantry (10 HP) with projectiles to lock their Military Might for 10-30s, dash twice to shake off Green Berets, perfect block Tank shells and Airstrike missiles on their flash warning, and break Focus Fire line of sight."
      }
    ],
    "verifiedDate": "2026-11-26"
  },
  {
    "slug": "the-lock",
    "name": "The Lock",
    "canonicalUser": "Tamami Kobayashi",
    "jojoPart": "Part 4: Diamond is Unbreakable",
    "rarity": "Legendary",
    "tier": {
      "pvp": "A+",
      "raid": "B",
      "farming": "A"
    },
    "status": "Playable",
    "obtainMethod": "Awakened from the Arrow Pool using Mysterious Arrows (~5.0% Legendary tier chance), Lucky Arrows (~15.0%), or Bizarre Arrows.",
    "lore": "Tamami Kobayashi manifests The Lock upon anyone burdened by guilt. As guilt grows in the victim heart, the lock expands and weighs them down.",
    "image": "/images/stands/the-lock.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Weight of Guilt & Crushing Guilt",
        "description": "Lock gauntlets deal +20% light and +12% heavy damage with +12% reach. Taking direct damage from the same enemy (8 initial / 16 after Nov 22 hotfix) places a padlock on them. The lock grows at 30, 50, 80, and 100 Guilt, slowing them and reflecting incoming hit damage back at them. At 100 Guilt, Crushing Guilt disables their dash and fills over 25s (60s for bosses), triggering a 1.3s stun and breaking the lock (hotfixed from instant collapse)."
      },
      {
        "name": "Pardon & Decay",
        "description": "Aim at a wearer within 35 studs and press G to pardon them. Hitting a locked target removes 2 Guilt on light punches, 8 on heavies, and 4-8 on other hits. Out of combat for 13s, Guilt decays at 9/sec."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Gauntlet Strikes",
        "type": "Attack",
        "damage": "+20% LMB / +12% RMB",
        "description": "Heavy brass gauntlet punches with 12% extended reach that reduce target Guilt on hit."
      },
      {
        "key": "E",
        "name": "Iron Lock Barrage",
        "type": "Barrage",
        "cooldown": "16s",
        "damage": "70% Str / 30% Abil",
        "description": "Rapidly barrage forward with hand locks, lunging on the final punch to knock the target away."
      },
      {
        "key": "R",
        "name": "Lock Spin",
        "type": "Heavy",
        "cooldown": "10s",
        "damage": "Directional Knockback",
        "description": "Wind up and swing both locks around you, launching enemies in the direction you are facing."
      },
      {
        "key": "T",
        "name": "Sob Story",
        "type": "Utility",
        "cooldown": "14s",
        "damage": "+15 Guilt (Unblockable)",
        "description": "Tell a sad story to stagger enemies within 30 studs even through block, inflicting +15 Guilt to every enemy hit."
      },
      {
        "key": "Y",
        "name": "Guilt Trip",
        "type": "Counter",
        "cooldown": "10s",
        "description": "Tense up in fear for 0.85s. Catching a direct hit negates all damage, launches Tamami backward, halves cooldown, and inflicts Guilt equal to the damage negated (minimum 10). Whiffing leaves you open for 0.22s."
      },
      {
        "key": "F",
        "name": "Lock Toss",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Ragdoll & Concussion",
        "description": "Lift a giant padlock overhead and throw it forward. Direct hits knock back, ragdoll, and concuss the target."
      },
      {
        "key": "G",
        "name": "Pardon",
        "type": "Utility",
        "cooldown": "1s",
        "description": "Aim at a lock wearer within 35 studs and press G to open their lock. Putting your gauntlets away opens all active locks."
      },
      {
        "key": "T (Hold) + E",
        "name": "Schrodinger's Cat",
        "type": "Awakening / EX",
        "exCost": "1 Bar",
        "cooldown": "20s",
        "description": "Place a box lasting 2 minutes. The first enemy to damage or drive over it instantly gains 50 Guilt."
      },
      {
        "key": "T (Hold) + R",
        "name": "Settlement",
        "type": "Awakening / EX",
        "exCost": "1 Bar",
        "cooldown": "24s",
        "damage": "20-100 Dalas",
        "description": "Force a locked target to pay 20 Dalas per lock size (up to 100), removing their lock and resetting Guilt to 0."
      },
      {
        "key": "T (Hold) + T",
        "name": "Heavy Conscience",
        "type": "Awakening / EX",
        "exCost": "2 Bars",
        "cooldown": "20s",
        "damage": "Slam & 1-3s Hold",
        "description": "Slam any locked enemy into the ground for 1s to 3s (+0.5s and +6 damage per lock size). Perfect block stops the slam."
      },
      {
        "key": "T (Hold) + Y",
        "name": "Lock and Roll",
        "type": "Awakening / EX",
        "exCost": "2 Bars",
        "cooldown": "25s",
        "damage": "3.5-14s Pin",
        "description": "At 30+ Guilt, pin the target to a nearby prop, lamp post, or vehicle for 3.5s per lock tier (scales with Ability) while halting Guilt decay. You can drive away with them pinned."
      }
    ],
    "abilityScaling": [
      "Ability increases Lock and Roll pin duration.",
      "Ability increases Heavy Conscience slam damage."
    ],
    "recommendedBuild": {
      "points": {
        "health": 120,
        "damage": 40,
        "ability": 65
      },
      "subAbility": "Vampire",
      "synergyNotes": "Vampire survivability and passive regen complement The Lock defensive counter-play and guilt buildup."
    },
    "pros": [
      "Punishes aggressive players heavily via Tense Up counter",
      "Guilt slows down enemies and sets up guaranteed crowd-control",
      "Can pin enemies to moving vehicles with Lock and Roll",
      "Settlement generates easy cash from NPCs in PvE"
    ],
    "cons": [
      "Low offensive burst damage on standard moves",
      "Guilt naturally decays after 13 seconds without combat",
      "Requires opponents to attack or step on traps to build Guilt"
    ],
    "faqs": [
      {
        "q": "How do you give opponents a Lock?",
        "a": "Catch an opponent attack with Tense Up or have them step on or run over Schrodinger Cat to inflict Guilt, which manifests the Lock."
      },
      {
        "q": "What does Settlement do?",
        "a": "Settlement extorts 20 to 100 Dalas from a locked enemy, resetting their Guilt while putting coins directly into your pocket."
      }
    ],
    "verifiedDate": "2026-11-26"
  },
  {
    "slug": "cheap-trick",
    "name": "Cheap Trick",
    "canonicalUser": "Masazo Kinoto",
    "jojoPart": "Part 4: Diamond is Unbreakable",
    "rarity": "Epic",
    "tier": {
      "pvp": "A",
      "raid": "C",
      "farming": "B"
    },
    "status": "Playable",
    "obtainMethod": "Awakened from the Arrow Pool using Mysterious Arrows (~10.0% Epic tier chance), Lucky Arrows, or Bizarre Arrows.",
    "lore": "A Stand that clings to its host back and turns attention against them. Cheap Trick cannot be directly unsummoned by its host and seeks to trick enemies into viewing the host back.",
    "image": "/images/stands/cheap-trick.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Back Clinger",
        "description": "Cheap Trick permanently clings to the user spine. Host cannot put Cheap Trick away. Any player who looks directly at the host exposed back causes heavy mental damage and triggers host death, transferring the Stand."
      },
      {
        "name": "Host Vulnerability",
        "description": "Host permanently takes 10% increased damage from behind and attracts NPC aggression from double the normal radius."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Parasitic Scratch",
        "type": "Attack",
        "damage": "Fast Chip Damage",
        "description": "Quick parasitic claw swipes from the host shoulder."
      },
      {
        "key": "E",
        "name": "Cry For Help",
        "type": "Utility",
        "cooldown": "12s",
        "description": "Shriek loudly, forcing nearby enemies and NPCs to turn their camera perspective directly toward the host."
      },
      {
        "key": "R",
        "name": "Insult!",
        "type": "Attack",
        "cooldown": "10s",
        "damage": "Provocation / EX Gain",
        "description": "Gain 15% EX meter while insulting opponents, provoking nearby enemy NPCs and forcing enemy players to rush the host with a light attack."
      },
      {
        "key": "T",
        "name": "Taunt",
        "type": "Utility",
        "cooldown": "12s",
        "description": "Lower the host or target damage resistance by 15% for 5 seconds."
      },
      {
        "key": "Y",
        "name": "SCREAM!",
        "type": "Attack",
        "cooldown": "20s",
        "damage": "Stun & Deafen",
        "description": "Screams directly into the ear of the target or host, stunning them for the duration of the animation and deafening them for 10 seconds."
      },
      {
        "key": "V",
        "name": "Powerful Grip",
        "type": "Awakening / EX",
        "exCost": "1 Bar",
        "cooldown": "14s",
        "damage": "True Spinal Damage",
        "description": "Violently squeezes the host spine, dealing true damage and stunning them for 1 second."
      }
    ],
    "abilityScaling": [
      "Ability increases Insult EX meter gain from 15% up to 25%.",
      "Ability extends SCREAM stun duration."
    ],
    "recommendedBuild": {
      "points": {
        "health": 120,
        "damage": 25,
        "ability": 80
      },
      "subAbility": "Jonathan Hamon",
      "synergyNotes": "High Health helps withstand Cheap Trick self-damage while Jonathan Hamon defense mitigates back-stab vulnerabilities."
    },
    "pros": [
      "Forces enemy players to look at your back, triggering instant defeat conditions in PvP",
      "Generates rapid EX meter via Insult!",
      "SCREAM provides a reliable point-blank stun and deafen",
      "Extremely chaotic and disruptive in team battles"
    ],
    "cons": [
      "Permanently active and cannot be unsummoned",
      "Host suffers defensive debuffs and increased NPC aggression",
      "Difficult to play in solo raids"
    ],
    "faqs": [
      {
        "q": "Can you unsummon Cheap Trick?",
        "a": "No, Cheap Trick cannot be unsummoned normally. You must use a Rokakaka fruit or have someone look at your back while you die to transfer it."
      },
      {
        "q": "What happens when an enemy looks at your back?",
        "a": "Viewing Cheap Trick on someone back rips off the host back, killing the host and transferring Cheap Trick to the viewer."
      }
    ],
    "verifiedDate": "2026-11-23"
  },
  {
    "slug": "dolly-dagger",
    "name": "Dolly Dagger",
    "canonicalUser": "Vittorio Cataldi",
    "jojoPart": "Part 5: Golden Wind (Purple Haze Feedback)",
    "rarity": "Exclusive",
    "tier": {
      "pvp": "S+",
      "raid": "A",
      "farming": "B"
    },
    "status": "Playable",
    "obtainMethod": "Achieve 1850+ ELO in the 1v1 Ranked Arena. Exclusive competitive milestone reward; not rollable from standard or lucky arrows.",
    "lore": "Vittorio Cataldi carries Dolly Dagger, a Stand bound to a Scottish dirk dagger. When someone is reflected in the blade, seven tenths of the damage dealt to Vittorio passes to them.",
    "image": "/images/stands/dolly-dagger.webp",
    "combatRole": "Speed / Hit-and-Run",
    "passives": [
      {
        "name": "Reflective Dagger",
        "description": "With Dolly Dagger equipped, landing your 5th M1 inflicts 3 seconds of Bleed. While the dagger is stuck in an opponent or planted into the ground, you fight with unarmed fists until retrieving it with Pull Free."
      },
      {
        "name": "Damage Redirection",
        "description": "While an enemy face is captured in the blade via Capture Reflection or Shed the Blame, 70% of all incoming damage suffered by Vittorio is instantly transferred to that enemy."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Dagger Combo",
        "type": "Attack",
        "damage": "5-Hit Bleed Combo",
        "description": "With the dagger in hand, land your 5th M1 to inflict 3 seconds of Bleed. When unarmed, attacks become rapid fist strikes."
      },
      {
        "key": "E",
        "name": "Swift Stabs",
        "type": "Attack",
        "cooldown": "9s",
        "damage": "Bleed & Knockdown",
        "description": "Stab twice in rapid succession. The second stab makes your opponent bleed and knocks them off their feet."
      },
      {
        "key": "R",
        "name": "Sinking Suspicion",
        "type": "Heavy",
        "cooldown": "12s",
        "damage": "Guardbreak Grab",
        "description": "Grab an opponent through their guard and drive Dolly Dagger into them. Press again up close to pull it free, knocking them down and inflicting severe bleed."
      },
      {
        "key": "T",
        "name": "Disregard",
        "type": "Attack",
        "cooldown": "13s",
        "damage": "Thrown Dagger / Headshot",
        "description": "Throw Dolly Dagger where aiming. Headshots deal massive bonus damage. A clean hit leaves the dagger stuck in the target. On a miss, it boomerangs back, cutting enemies in its path."
      },
      {
        "key": "Y",
        "name": "Steadier Than Hands",
        "type": "Utility",
        "cooldown": "22s",
        "description": "Drive Dolly Dagger into the ground. While staying within 12 studs, 100% of incoming attack damage reflects back to whoever dealt it. Press again within 45 studs to trigger Phantasmagoria Burst, blinding nearby foes."
      },
      {
        "key": "G",
        "name": "Capture Reflection",
        "type": "Utility",
        "cooldown": "5s",
        "description": "Hold G and aim at an enemy within 30 studs for 1.5 seconds. Their face stays reflected in the blade for 15 seconds, enabling Shed the Blame damage transfer."
      },
      {
        "key": "V",
        "name": "Shed the Blame",
        "type": "Awakening / EX",
        "exCost": "2 Bars",
        "cooldown": "20s",
        "damage": "70% Damage Reflection",
        "description": "Capture a face first, then spend 2 EX bars. For 12 seconds, the reflected enemy suffers 70% of each combat hit meant for Vittorio."
      }
    ],
    "abilityScaling": [
      "Ability extends Steadier Than Hands reflection duration and Phantasmagoria Burst blind time.",
      "Strength increases Dagger Combo and Swift Stabs bleed ticks."
    ],
    "recommendedBuild": {
      "points": {
        "health": 120,
        "damage": 55,
        "ability": 50
      },
      "subAbility": "Vampire",
      "synergyNotes": "Vampire night regeneration and blood pool allow Vittorio to survive incoming blows while reflecting 70% of all damage directly back to opponents."
    },
    "pros": [
      "Devastating 70% damage reflection with Shed the Blame",
      "100% ground reflection zone with Steadier Than Hands",
      "Unblockable grab and dagger planting with Sinking Suspicion",
      "High-mobility ranged poke with boomerang Disregard throw"
    ],
    "cons": [
      "Requires reaching 1850 ELO in Ranked Mode Beta to unlock",
      "Fighting unarmed while dagger is planted or embedded removes dagger skills",
      "Reflected damage cannot directly deliver the final finishing blow"
    ],
    "faqs": [
      {
        "q": "How do you unlock Dolly Dagger?",
        "a": "Dolly Dagger is exclusively unlocked by achieving 1850 ELO in the Ranked Mode Beta playlist (requires Level 60+)."
      },
      {
        "q": "How does Shed the Blame work?",
        "a": "First hold G to capture an opponent reflection in the blade for 1.5s, then press V with 2 EX bars. For 12 seconds, 70% of all damage you take transfers to them."
      }
    ],
    "verifiedDate": "2026-11-23"
  },
  {
    "slug": "cat-size",
    "name": "Cat Size",
    "canonicalUser": "Wild Cats",
    "jojoPart": "Part 9: The JOJOLands",
    "rarity": "Historical",
    "tier": {
      "pvp": "B",
      "raid": "C",
      "farming": "B"
    },
    "status": "Historical",
    "obtainMethod": "Historical Kit (Pre-rework reference). Temporarily removed from the active Arrow summon pool pending an official ability rework.",
    "lore": "Cat Size is an elusive feline Stand from Part 9: The JOJOLands. In STAND OUT, it previously served as a pre-rework arrow kit featuring pounce attacks and string-based crowd control traps.",
    "image": "/images/stands/cat-size.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Feline Agility",
        "description": "Reduces fall damage by 50% and provides silent footsteps when crouched."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Cat Claw Pounce",
        "type": "Attack",
        "cooldown": "25s",
        "damage": "Combative Strike",
        "description": "Leap forward with razor claws, dealing rapid slashing damage on contact."
      },
      {
        "key": "E",
        "name": "String Entangle",
        "type": "Heavy",
        "cooldown": "30s",
        "damage": "Guardbreak Trap",
        "description": "Cast microscopic string wires across the terrain that snare passing targets, disabling movement for 2.5s."
      },
      {
        "key": "R",
        "name": "Camouflage Hiss",
        "type": "Utility",
        "cooldown": "20s",
        "damage": "Debuff / Blind",
        "description": "Emit a startling hiss that briefly blinds nearby opponents and grants a temporary burst of walk speed."
      }
    ],
    "abilityScaling": [
      "String Entangle snare duration scales up to 3.5s with Ability stat.",
      "Cat Claw Pounce slash damage scales with Physical Strength."
    ],
    "recommendedBuild": {
      "points": {
        "health": 75,
        "damage": 50,
        "ability": 100
      },
      "subAbility": "Jonathan Hamon",
      "synergyNotes": "Utilize string trap setups to guarantee heavy Hamon overdrives on immobilized targets."
    },
    "pros": [
      "Exceptional ambush potential with string traps",
      "Strong vertical mobility with pounce jumps",
      "Silent movement facilitates unexpected ganks"
    ],
    "cons": [
      "Removed from current arrow summon pools pending rework",
      "Lower baseline health pool compared to Pinnacle stands",
      "Ineffective in large multi-target Raid boss encounters"
    ],
    "faqs": [
      {
        "q": "Can Cat Size still be rolled from Mysterious Arrows?",
        "a": "No. Cat Size was officially removed from active summon banners and is currently classified as a historical pre-rework reference kit."
      },
      {
        "q": "When will Cat Size return to the game?",
        "a": "Developers have confirmed Cat Size is slated for a complete mechanical rework in a future post-Update 1 patch."
      }
    ],
    "verifiedDate": "2026-11-23"
  },
  {
    "slug": "john-rod",
    "name": "John Rod",
    "canonicalUser": "Cryptid Organism",
    "jojoPart": "Part 9: The JOJOLands",
    "rarity": "Historical",
    "tier": {
      "pvp": "A",
      "raid": "B",
      "farming": "B"
    },
    "status": "Historical",
    "obtainMethod": "Historical Kit (Pre-rework reference). Removed from active summon tables pending an official mechanics revamp.",
    "lore": "John Rod is an aerial atmospheric Stand inspired by cryptid rod phenomena. It previously featured airborne mode shifting and high-velocity flight charges before being archived for balance redesign.",
    "image": "/images/stands/john-rod.webp",
    "combatRole": "Speed / Hit-and-Run",
    "passives": [
      {
        "name": "Atmospheric Glide",
        "description": "Holding Space mid-air activates a high-speed thermal glide with reduced gravity."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Sky Piercing Rod",
        "type": "Attack",
        "cooldown": "22s",
        "damage": "Combative Strike",
        "description": "Hurl high-velocity biological rods that pierce straight through enemy guard frames."
      },
      {
        "key": "E",
        "name": "Sky Shift",
        "type": "Movement",
        "cooldown": "35s",
        "damage": "Reposition / Flight",
        "description": "Transform into high-altitude flight mode, evading ground hazards and re-engaging from above."
      },
      {
        "key": "R",
        "name": "Atmospheric Shock",
        "type": "Heavy",
        "cooldown": "28s",
        "damage": "Shockwave AoE",
        "description": "Divebomb into the earth, creating an atmospheric pressure wave that knocks back surrounding foes."
      }
    ],
    "abilityScaling": [
      "Atmospheric Shock divebomb radius and stun scale with Ability.",
      "Sky Piercing Rod projectile speed scales with Damage."
    ],
    "recommendedBuild": {
      "points": {
        "health": 60,
        "damage": 65,
        "ability": 100
      },
      "subAbility": "Vampire",
      "synergyNotes": "Aerial flight allows daytime sunlight avoidance when paired with roof and cave navigation."
    },
    "pros": [
      "Top-tier vertical movement and escape routes",
      "Piercing projectiles bypass basic guard",
      "Strong hit-and-run harassment in open arenas"
    ],
    "cons": [
      "Currently unrollable in live arrow pools",
      "Long cooldown on flight transform",
      "Vulnerable to long-range projectile snipers while hovering"
    ],
    "faqs": [
      {
        "q": "How do I get John Rod right now?",
        "a": "John Rod is currently vaulted in the pre-rework archive and cannot be obtained through standard gameplay or arrows until its official revamp lands."
      }
    ],
    "verifiedDate": "2026-11-23"
  },
  {
    "slug": "tower-of-gray",
    "name": "Tower of Gray",
    "canonicalUser": "Gray Fly",
    "jojoPart": "Part 3: Stardust Crusaders",
    "rarity": "Historical",
    "tier": {
      "pvp": "A",
      "raid": "C",
      "farming": "B"
    },
    "status": "Historical",
    "obtainMethod": "Historical Kit (Pre-rework reference). Temporarily removed from active arrow rolls pending trajectory reworks.",
    "lore": "Tower of Gray is a stag beetle Stand possessing supersonic flight agility and a lethal predatory tongue. Removed from the live arrow pool while developers rework its flight path and hitboxes.",
    "image": "/images/stands/tower-of-gray.webp",
    "combatRole": "Speed / Hit-and-Run",
    "passives": [
      {
        "name": "Supersonic Evasion",
        "description": "Grants a passive 15% evasion chance against standard single-target projectiles."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Needle Dart",
        "type": "Attack",
        "cooldown": "18s",
        "damage": "Rapid Pierce",
        "description": "Dart forward in an erratic zigzag trajectory, tearing through opponents with supersonic mandibles."
      },
      {
        "key": "E",
        "name": "Blinding Buzz",
        "type": "Utility",
        "cooldown": "30s",
        "damage": "Disorientation",
        "description": "Generate high-frequency wing vibrations that scramble opponent screen controls and sound cues."
      },
      {
        "key": "R",
        "name": "Tongue Drill",
        "type": "Heavy",
        "cooldown": "32s",
        "damage": "Heavy Guardbreak",
        "description": "Unfurl a concealed barbed tongue to rip through guard postures and inflict bleed."
      }
    ],
    "abilityScaling": [
      "Tongue Drill bleed ticks scale with Ability stat.",
      "Needle Dart burst damage scales with Physical Strength."
    ],
    "recommendedBuild": {
      "points": {
        "health": 55,
        "damage": 70,
        "ability": 100
      },
      "subAbility": "Jonathan Hamon",
      "synergyNotes": "Blinding Buzz ensures uninterrupted Hamon charging during combat resets."
    },
    "pros": [
      "Extremely erratic movement makes tracking difficult",
      "Heavy guardbreak attack with bleed damage",
      "High passive evasion against ranged attacks"
    ],
    "cons": [
      "Temporarily archived and not obtainable via arrows",
      "Fragile posture against heavy AoE slams",
      "Low impact in PvE raid boss DPS rotations"
    ],
    "faqs": [
      {
        "q": "Why was Tower of Gray removed from arrows?",
        "a": "Its flight trajectory caused hitbox desync issues in earlier builds, prompting the developers to vault it for a full trajectory rework."
      }
    ],
    "verifiedDate": "2026-11-23"
  },
  {
    "slug": "west-end-girl",
    "name": "West End Girl",
    "canonicalUser": "Unknown Syndicate",
    "jojoPart": "Part 9: The JOJOLands",
    "rarity": "Historical",
    "tier": {
      "pvp": "A",
      "raid": "B",
      "farming": "B"
    },
    "status": "Historical",
    "obtainMethod": "Historical Kit (Pre-rework reference). Removed from active summon tables pending developer redesign.",
    "lore": "West End Girl is an environmental spatial Stand that creates physical voids and gap traps for movement and ambush tactics. Archived as a historical reference pending full gameplay polish.",
    "image": "/images/stands/west-end-girl.webp",
    "combatRole": "Zoner",
    "passives": [
      {
        "name": "Void Sense",
        "description": "Detects enemies moving near created gaps and displays a proximity alert on your screen."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Gap Trap",
        "type": "Utility",
        "cooldown": "24s",
        "damage": "Entrapment",
        "description": "Open a dimensional gap in the surface that pulls in enemies and prevents sprinting."
      },
      {
        "key": "E",
        "name": "Spatial Traverse",
        "type": "Movement",
        "cooldown": "32s",
        "damage": "Teleportation",
        "description": "Step into an open gap to instantly emerge at a linked location up to 40 studs away."
      },
      {
        "key": "R",
        "name": "Void Collapse",
        "type": "Heavy",
        "cooldown": "35s",
        "damage": "Heavy Implosion",
        "description": "Forcefully slam all open gaps shut, crushing enemies trapped inside with immense spatial pressure."
      }
    ],
    "abilityScaling": [
      "Void Collapse implosion damage scales directly with Ability.",
      "Gap Trap snare duration increases with higher Ability points."
    ],
    "recommendedBuild": {
      "points": {
        "health": 70,
        "damage": 55,
        "ability": 100
      },
      "subAbility": "Jonathan Hamon",
      "synergyNotes": "Position gap traps to funnel enemies directly into charged Sunlight Yellow Overdrives."
    },
    "pros": [
      "Superior territory control and positional denial",
      "Fast instant-traverse between linked spatial gaps",
      "High burst damage upon collapsing multiple traps"
    ],
    "cons": [
      "Currently vaulted as a historical pre-rework entry",
      "Requires high setup time in fast-paced 1v1 arenas",
      "Gaps are visible to attentive opponents who can sidestep them"
    ],
    "faqs": [
      {
        "q": "Is West End Girl rollable with Bizarre Arrows?",
        "a": "No. Like Cat Size and Tower of Gray, West End Girl is archived in the pre-rework historical category and cannot be rolled."
      }
    ],
    "verifiedDate": "2026-11-23"
  }
];

export const standsBySlug = new Map(stands.map((s) => [s.slug, s]));

export const standsByRarity = stands.reduce((acc, stand) => {
  if (!acc[stand.rarity]) {
    acc[stand.rarity] = [];
  }
  acc[stand.rarity].push(stand);
  return acc;
}, {} as Record<string, Stand[]>);

export const standsByTier = stands.reduce((acc, stand) => {
  const pvpTier = stand.tier.pvp;
  if (!acc[pvpTier]) {
    acc[pvpTier] = [];
  }
  acc[pvpTier].push(stand);
  return acc;
}, {} as Record<string, Stand[]>);