import type { Stand } from "../types";

export const stands: Stand[] = [
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
    "lore": "\u201cDO YOU UNDERSTANDDDD!?\u201d The stand of Rubber Soul, one of DIO\u2019s assassins.. Yellow Temperance is a yellow, flesh-consuming substance that wraps around its user. It absorbs organic matter to grow and can imitate another person\u2019s body and clothing, as Rubber Soul demonstrates by impersonating Kakyoin. Its soft body withstands powerful blows, heat and cold, but its protection cannot remove its user\u2019s need to breathe.",
    "image": "/images/stands/yellow-temperance.webp",
    "combatRole": "Tank",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Yellow Temperance aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "\u201cDO YOU UNDERSTANDDDD!?\u201d",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "The stand of Rubber Soul, one of DIO\u2019s assassins.. Yellow Temperance is a yellow, flesh-consuming substance that wraps around its user. It absorbs organic matter to grow and can imitate another person\u2019s body and clothing, as Rubber Soul demonstrates "
      },
      {
        "key": "RMB / R",
        "name": "Trapped Breath",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Living Armor holds 100 air and uses 5 each second. Hits cost another 1.25 air for each point of damage taken. With no air left you lose 12% of your max health each second. Hold Living Armor to open or close the mask; tap to remove the suit. Taking it"
      },
      {
        "key": "E",
        "name": "Assimilation",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Repeated hits and contact with slime build up to 10 stacks per enemy. Damage rises from 0.25 each second at one stack to 2.5 at ten, before bonuses and protection. Fresh slime adds stacks and refreshes the effect. Overlapping puddles still apply once"
      },
      {
        "key": "R",
        "name": "Feeding Slime",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Your damage bonus counts your own Assimilation stacks across every enemy, Ten stacks on one enemy and five on another give you 15% more damage. When their slime wears off or is cleansed, you lose that part of the bonus. Dying or changing Stands clear"
      },
      {
        "key": "T",
        "name": "Ravenous Flurry",
        "type": "Attack",
        "cooldown": "18s",
        "damage": "Moderate",
        "description": "Sweep enemies left, then right, before all four tentacles slam them forward and knock them down. Each blow adds assimilation !"
      },
      {
        "key": "Y",
        "name": "Borrowed Face",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Moderate",
        "description": "Aim near a player or NPC within 300 studs to copy their appearance, name, and pose for 2 minutes. You can use it from behind cover. Use again to change back. !"
      },
      {
        "key": "F",
        "name": "Living Armor",
        "type": "Attack",
        "cooldown": "8s",
        "damage": "Moderate",
        "description": "Wrap yourself in slime to take 65% less damage and coat nearby players in Assimilation. Air drains over time and when hit; at zero lose 12% of your max health each second. Tap again to remove the suit. Hold to open or close its mask; an open mask res"
      },
      {
        "key": "G",
        "name": "TAP [SUIT]",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Jonathan Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Yellow Temperance?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items."
      },
      {
        "q": "Is Yellow Temperance good for beginner leveling?",
        "a": "Yes, Yellow Temperance offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cThat was a mean thing to do\u2026 Treating me like an object\u2026 not that I mind\u201d The Stand of D an G. Yo-Yo Ma follows people and offers to help them, hiding its corrosive saliva behind a friendly face. Its tough body can be knocked around without hurting it. It uses mosquitos and water to spread saliva whilst nobody is looking.",
    "image": "/images/stands/yo-yo-ma.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Yo-Yo Ma aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Stand Mechanics",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Executes Stand Mechanics against nearby targets."
      },
      {
        "key": "RMB / R",
        "name": "A Devil in Disguise/Automatic Stand",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Hold E while aiming at someone within 100 studs of the stand to follow them. It follows from behind and stops when watched. Yo-Yo Ma sends mosquitos after its chosen target, Acidic Saliva leaves them Muted. !"
      },
      {
        "key": "E",
        "name": "Repulsive",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Yo-Yo Ma takes no damage, but can be stunned or knocked away. Close hits splash saliva onto the attacker and makes them Stinky. Sending it flying splashes nearby enemies too. !"
      },
      {
        "key": "R",
        "name": "Crybaby",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "If the user is attacked while piloting the stand, they will cry out and be stunned for a few seconds. !"
      },
      {
        "key": "T",
        "name": "An Expert Craftsman",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Talk to Yo-Yo Ma while it is parked or following someone else. It can craft using your materials, heal 30 health, or shine your boots to grant Encouraged, giving 10% more damage for 40 seconds. Collect finished crafts within five seconds before someo"
      },
      {
        "key": "Y",
        "name": "Tainted Item",
        "type": "Attack",
        "cooldown": "15s",
        "damage": "Moderate",
        "description": "Hold to cycle through items, then tap to make one in Yo-Yo Ma\u2019s empty stomach. Use Treacherous Hoarder to spit it out. Real Mysterious Arrows and Rokakas take 60 to 30 minutes to make again. SSSS Rokakas and Over Heaven Arrows are fakes that deal del"
      },
      {
        "key": "F",
        "name": "Hold",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "G",
        "name": "Tap",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "(Eating the selected object) !"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Yo-Yo Ma?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 6 focus items."
      },
      {
        "q": "Is Yo-Yo Ma good for beginner leveling?",
        "a": "Yes, Yo-Yo Ma offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cThe moral of the story is that miracles take dedication.\u201d Aya Tsuji runs Morioh\u2019s Cinderella salon, where she uses her Stand to change people\u2019s faces and bodies. She wants to help her clients find love, and her work can change their luck as well as their looks. The results can depend on following her instructions. Her ability to swap faces can also help someone hide who they really are.",
    "image": "/images/stands/cinderella.webp",
    "combatRole": "Support",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Cinderella aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Ability Scaling",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Change of Face: Misfortune lasts up to 50% longer (90 seconds) and treatment is up to 30% faster with Ability."
      },
      {
        "key": "RMB / R",
        "name": "Hair Cut",
        "type": "Attack",
        "cooldown": "18s",
        "damage": "Moderate",
        "description": "Grab an opponent and give them a messy haircut, acting as a powerful extender. You both heal a little and gain 2 EX bars. Their hair returns after combat. Hold to cut your own hair. !"
      },
      {
        "key": "E",
        "name": "Self [HOLD]",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "R",
        "name": "Enhancement Selector",
        "type": "Attack",
        "cooldown": "0.3s",
        "damage": "Moderate",
        "description": "Cycle through the faces Cinderella can apply. Hold to go back. !"
      },
      {
        "key": "T",
        "name": "Faces and fate",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Choose one of five faces with Enhancement Selector, then apply it with Change of Face; hold to treat yourself. Miracle lasts until death. Botching the treatment on yourself or a non-user gives Misfortune for 60 seconds, up to 90 with Ability, and Abi"
      },
      {
        "key": "Y",
        "name": "Existing Faces",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Angry Face - 25% Damage, 30% Attack Speed ! Lucky Face - Enemy projectiles veer away. 25% of enemy hits miss you. ! Gentle Face - -25% Damage taken ! Pretty Face - Enemies go after others first, Shop prices -15%, Anyone who hits you attacks 25% slowe"
      },
      {
        "key": "F",
        "name": "Botched Faces (Lasts 60 seconds)",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Angry Face - -15% Attack Speed, -25% Damage. ! Lucky Face - +25% Damage Taken ! Gentle Face - Damage Taken +10%, Healing received -50%. ! Pretty Face - Damage taken +10%, Nobody wants to talk to you, Shop prices +25%, Enemies go after you first. ! Fa"
      },
      {
        "key": "G",
        "name": "Change of Face",
        "type": "Attack",
        "cooldown": "8s",
        "damage": "Moderate",
        "description": "Apply a face and its blessing, which lasts until death. Hold to treat yourself; press again during treatment to botch it on purpose. A botched treatment gives misfortune for 60 seconds instead. !"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Cinderella?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 4 focus items."
      },
      {
        "q": "Is Cinderella good for beginner leveling?",
        "a": "Yes, Cinderella offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cThis is what we\u2019re going to slide. Do it, Smooth Operators!\u201d The Stand of Dragona Joestar. A colony of four tiny operators that travel on tank treads. Working together, they can slide objects and body features across surfaces, shifting everything from a face\u2019s features to an injury. Their strength lies in careful teamwork rather than direct fighting.",
    "image": "/images/stands/smooth-operators.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Smooth Operators aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Injury Shift / Target Yourself [HOLD]",
        "type": "Attack",
        "cooldown": "14s",
        "damage": "Moderate",
        "description": "Lift an injury, healing up to 10/15/20/25% max health with 1/2/3/4 operators. Use again to pass that percentage to another target as damage, or destroy a nearby prop or dropped item. Hold to target yourself. Getting hit or having the transfer blocked"
      },
      {
        "key": "RMB / R",
        "name": "First use",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "E",
        "name": "Second use",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "R",
        "name": "Rearrange",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Moderate",
        "description": "Shift an enemy' body for 8 seconds. One operator targets a leg, two the eyes, three both, and four add an arm. Legs slow movement, eyes blur vision, and arms weaken damage. !"
      },
      {
        "key": "T",
        "name": "Anyone\u2019s Weakness",
        "type": "Attack",
        "cooldown": "24s",
        "damage": "Moderate",
        "description": "A low kick that breaks guard and briefly blurs the target\u2019s vision. !"
      },
      {
        "key": "Y",
        "name": "Internal Pain",
        "type": "Attack",
        "cooldown": "22s",
        "damage": "Moderate",
        "description": "Send your deployed operators inside an enemy, More operators deal stronger, faster damage ticks and stay longer. Moving more than 30 studs apart brings them back. !"
      },
      {
        "key": "F",
        "name": "Colony Formation",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Deploy/Return Operators !"
      },
      {
        "key": "G",
        "name": "Pilot Mode",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Summon your stand, Then use ctrl to enter or leave pilot mode. (Can travel on walls/ceilings) ! --- # EX [Awakening Moves]"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Smooth Operators?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items."
      },
      {
        "q": "Is Smooth Operators good for beginner leveling?",
        "a": "Yes, Smooth Operators offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cGot him! He took the bait!\u201d The stand of Pesci, a member of La Squadra Esecuzioni. Beach Boy is a fishing rod whose line and hook pass through anything but their prey. Any attack on the line travels into whoever is hooked.",
    "image": "/images/stands/beach-boy.webp",
    "combatRole": "Zoner",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Beach Boy aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "\u201cGot him! He took the bait!\u201d",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "The stand of Pesci, a member of La Squadra Esecuzioni. Beach Boy is a fishing rod whose line and hook pass through anything but their prey. Any attack on the line travels into whoever is hooked. ---"
      },
      {
        "key": "RMB / R",
        "name": "Ability Scaling",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Ability makes your line longer and your reel stronger. The line can reach up to 225 studs."
      },
      {
        "key": "E",
        "name": "For My Bro!",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Anyone who kills a member of your party is marked for 20 seconds. Your hook sinks into them 50% faster."
      },
      {
        "key": "R",
        "name": "Cast Out (Ctrl)",
        "type": "Attack",
        "cooldown": "1s",
        "damage": "Moderate",
        "description": "Steer your hook through walls and floors to catch someone. Use again to stop steering, then again to resume. Heavy attacks reels it back. !"
      },
      {
        "key": "T",
        "name": "The Line Carries",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "You and your allies can hit the line to damage whoever is hooked. Hamon also travels through it."
      },
      {
        "key": "Y",
        "name": "An Angler\u2019s Hold",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Being ragdolled or hit with heavy knockback releases whoever you have hooked, including during Focused Fishing."
      },
      {
        "key": "F",
        "name": "Big Catches",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Hook a large object, such as a car. Hold M1 to reel yourself toward it, or press R for a quick pull."
      },
      {
        "key": "G",
        "name": "Quick Pull (R)",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Beach Boy?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 5 focus items."
      },
      {
        "q": "Is Beach Boy good for beginner leveling?",
        "a": "Yes, Beach Boy offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cLucky you! You\u2019ve got more luck than anyone in the world\u201d The Stand of Pocoloco. Unlike most Stands, Hey Ya! has no physical combat ability. Instead, it offers encouragement and advice to Pocoloco, guiding him toward incredibly lucky outcomes.",
    "image": "/images/stands/hey-ya.webp",
    "combatRole": "Support",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Hey Ya! aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Inspiration! / Build Luck [HOLD]",
        "type": "Attack",
        "cooldown": "9s",
        "damage": "Moderate",
        "description": "Hey Ya! cheers you on, building luck stacks over time. (Needs luck stacks to be activated.) !"
      },
      {
        "key": "RMB / R",
        "name": "Build Luck",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "E",
        "name": "Lucky Observation",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Reveal a nearby throwable object and empower it for your next throw. Look for the highlighted object, pick it up with H, then throw it. ! !"
      },
      {
        "key": "R",
        "name": "Premonition / Believe in Yourself! [HOLD",
        "type": "Attack",
        "cooldown": "28s",
        "damage": "Moderate",
        "description": "Tap for a brief counter window, or hold to toggle your lucky dodge."
      },
      {
        "key": "T",
        "name": "Tap Variant",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "Y",
        "name": "Counter Hit",
        "type": "Counter",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "F",
        "name": "Held Variant (Drains luck stack each dod",
        "type": "Counter",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "G",
        "name": "Whispers From Hey Ya!",
        "type": "Attack",
        "cooldown": "2s",
        "damage": "Moderate",
        "description": "Follow Hey Ya!'s advice in time to gain luck and recover a little health. Follow the advice above Hey Ya! before it expires. You may be asked to jump, pose, block, turn, or dash in a certain direction. !"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Hey Ya!?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 7 focus items."
      },
      {
        "q": "Is Hey Ya! good for beginner leveling?",
        "a": "Yes, Hey Ya! offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "Ningbo\u2019s Stand can inflate anything he touches, including parts of a person\u2019s body. The affected area becomes light enough to float and fragile enough to burst. A firefighter working with Laem Chabang, Ningbo uses this ability to threaten people up close. He can also inflate bullets to keep them from hurting him.",
    "image": "/images/stands/200-balloons.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard 200 Balloons aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Inflating Attacks",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Your own light attacks apply inflations. TOTAL BALLOONS doubles their inflations while active. !"
      },
      {
        "key": "RMB / R",
        "name": "Sudden Balloons",
        "type": "Attack",
        "cooldown": "20s",
        "damage": "Moderate",
        "description": "Grab an enemy and rapidly inflate their body before dropping them. Your character performs the grab. The hit lands partway through the opening animation and can be blocked. A caught enemy is inflated repeatedly, then released and ragdolled. !"
      },
      {
        "key": "E",
        "name": "Inflate",
        "type": "Attack",
        "cooldown": "14s",
        "damage": "Moderate",
        "description": "Inflate an enemy or turn a loose object into a exploding balloon. Hold to slam the ground and inflate its debris. Tap on an enemy for random body inflations, or inflate a nearby loose prop into a throwable balloon. Hold for the ground slam; some debr"
      },
      {
        "key": "R",
        "name": "On person",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "T",
        "name": "Gasoline",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "Y",
        "name": "Fire hydrant",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "F",
        "name": "Car",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "G",
        "name": "Slam [HOLD]",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock 200 Balloons?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items."
      },
      {
        "q": "Is 200 Balloons good for beginner leveling?",
        "a": "Yes, 200 Balloons offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cThe desert night is often cold\u2026 but not tonight.\u201d The Stand of Arabia Fats. It manifests as a massive, sun-like square that radiates scorching heat and intense light. It can fire high-precision lasers and increase the surrounding temperature to lethal levels.",
    "image": "/images/stands/the-sun.webp",
    "combatRole": "Zoner",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard The Sun aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "M1 Light Combo & M2 Attack",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "RMB / R",
        "name": "Up The Heat / Lower The Heat [HOLD]",
        "type": "Attack",
        "cooldown": "5s",
        "damage": "Moderate",
        "description": "Turn up the heat to strengthen your fire attacks. Increasing the heat too much can cause you to start burning and taking damage."
      },
      {
        "key": "E",
        "name": "Up The Heat",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "R",
        "name": "Lower The Heat",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "T",
        "name": "Solar Onslaught",
        "type": "Attack",
        "cooldown": "28s",
        "damage": "Moderate",
        "description": "Bombard your target with concentrated solar rays. !"
      },
      {
        "key": "Y",
        "name": "Solar Snipe",
        "type": "Attack",
        "cooldown": "23s",
        "damage": "Moderate",
        "description": "Focus the sun\u2019s energy into a long-range beam. (Procs burn on hit) !"
      },
      {
        "key": "F",
        "name": "Disguise",
        "type": "Attack",
        "cooldown": "15s",
        "damage": "Moderate",
        "description": "Hide inside a trashcan to become invisible. (Requires Trashcan) Prevents burning from The Sun !"
      },
      {
        "key": "G",
        "name": "Pilot Mode",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Summon your stand, then use Ctrl to enter or leave pilot control. Your camera and movement follow the stand. ! --- # EX [Awakening Moves]"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock The Sun?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items."
      },
      {
        "q": "Is The Sun good for beginner leveling?",
        "a": "Yes, The Sun offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cYou\u2019re afraid. So you\u2019ve lost.\u201d Laem Chabang\u2019s Stand lives in the nematodes on her glasses. They sense people\u2019s stress and help her track suspects and question them.",
    "image": "/images/stands/lyin-eyes.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Lyin' Eyes aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "\u201cYou\u2019re afraid. So you\u2019ve lost.\u201d",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Laem Chabang\u2019s Stand lives in the nematodes on her glasses. They sense people\u2019s stress and help her track suspects and question them. --- ! --- # Glasses Use E to put on your glasses. Wear them to see Stress and use Target, Fear Sense, Locate and Yes"
      },
      {
        "key": "RMB / R",
        "name": "Piling Nematodes",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Attacks and Stress, up to 20 stacks. Each stack gives the next damaging skill 3% more damage, up to 60%, or 5% per stack for a  skill. That skill spends the Stress and keeps the bonus for all its hits. Those hits do not add Stress. After 15 seconds w"
      },
      {
        "key": "E",
        "name": "Yes Or No?",
        "type": "Attack",
        "cooldown": "25s",
        "damage": "Moderate",
        "description": "While wearing your glasses, give a nearby player 5 seconds to answer a yes-or-no question, about themselves or anything at all. You can keep fighting while they answer. A correct answer adds 3 Stress. A wrong answer or no answer makes you shoot their"
      },
      {
        "key": "R",
        "name": "Correct Answer",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "T",
        "name": "Wrong Answer",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "Y",
        "name": "Fear Sense",
        "type": "Attack",
        "cooldown": "1s",
        "damage": "Moderate",
        "description": "See an enemy\u2019s EX. Choosing your locked target or the nearest enemy. Drains 1 Stress every 3 seconds and ends when they run out. Use again to stop. !"
      },
      {
        "key": "F",
        "name": "Fury",
        "type": "Attack",
        "cooldown": "0.35s",
        "damage": "Moderate",
        "description": "Draw your 10-round pistol and fire with light attacks. You cannot sprint while it is drawn. Use again to holster and keep your remaining ammo. Hold to reload. Drawing an empty pistol also reloads it. !"
      },
      {
        "key": "G",
        "name": "Light Attacks",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Lyin' Eyes?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items."
      },
      {
        "q": "Is Lyin' Eyes good for beginner leveling?",
        "a": "Yes, Lyin' Eyes offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201ci wish it worked with the things i want though.\u201d The Stand of Usagi Alohaoe. THE MATTEKUDASAI is a small mechanical bird that hops along the ground and turns into a copy of whatever someone else needs. It needs someone else\u2019s request before it can make a copy.",
    "image": "/images/stands/the-mattekudasai.webp",
    "combatRole": "Utility",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard The MATTEKUDASAI aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "\u201ci wish it worked with the things i want",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "The Stand of Usagi Alohaoe. THE MATTEKUDASAI is a small mechanical bird that hops along the ground and turns into a copy of whatever someone else needs. It needs someone else\u2019s request before it can make a copy. ---"
      },
      {
        "key": "RMB / R",
        "name": "Big Jump",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "The bird can make a second leap before landing. Use it to clear gaps and reach higher ground. !"
      },
      {
        "key": "E",
        "name": "False Structure",
        "type": "Attack",
        "cooldown": "11s",
        "damage": "Moderate",
        "description": "Scan a prop, then turn the Stand into a copy. Hold to switch between learned props. Pilot the copy to move and swing it, or stop piloting to leave it in place. Tap again to recall it. !"
      },
      {
        "key": "R",
        "name": "Copy",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "T",
        "name": "Swinging (M1)",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "Y",
        "name": "Switching copy (Hold)",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "F",
        "name": "Recall",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "False Structure, The Gift, Weapon Wish, Not Licensed and Fake Camera can be recalled with another tap. The net and wire fence stay until they finish or break. A form\u2019s cooldown starts when it returns. !"
      },
      {
        "key": "G",
        "name": "Net",
        "type": "Attack",
        "cooldown": "14s",
        "damage": "Moderate",
        "description": "Throw the stand as a net to slam and pin an enemy. Close catches hold them longer. Hold to stretch it into a wire fence that knocks enemies back. Both bypass blocking, can be parried, and can be broken. !"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock The MATTEKUDASAI?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items."
      },
      {
        "q": "Is The MATTEKUDASAI good for beginner leveling?",
        "a": "Yes, The MATTEKUDASAI offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items.",
    "lore": "\u201cDid you see it? The thorns from my hand? That is my Stand!\u201d The Stand of Joseph Joestar. Thorn-covered purple vines extend from his hands, letting him bind opponents, swing between buildings, and channel Hamon. Its spirit photography can reveal distant people and places through cameras and televisions, or trace a map in dust.",
    "image": "/images/stands/hermit-purple.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Hermit Purple aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "M1 Light Combo & M2 Attack",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "RMB / R",
        "name": "Hermit\u2019s Sling / Swing [TAP] / Pull [HOL",
        "type": "Attack",
        "cooldown": "5s",
        "damage": "Moderate",
        "description": "Tap to catch a high surface to either side and swing forward through open space, releasing upward. Successive swings favor alternating sides. Hold to pull toward your aim; release to let go. Press Jump for extra lift. No cooldown outside of combat."
      },
      {
        "key": "E",
        "name": "Tap  Variant",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "R",
        "name": "Hold Variant",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "T",
        "name": "Boulder Hold / Pull Rock / Throw",
        "type": "Attack",
        "cooldown": "24s",
        "damage": "Moderate",
        "description": "Brace and pull a rock from the ground. While holding it, use slower, heavier basic attacks that deal more damage and stun. Use again to spin with hyperarmor, repeatedly knocking nearby enemies away before throwing the rock. It bursts on impact to hit"
      },
      {
        "key": "Y",
        "name": "M1S",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "F",
        "name": "Throw",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "G",
        "name": "Spirit Photography",
        "type": "Attack",
        "cooldown": "15s",
        "damage": "Moderate",
        "description": "Choose a player from the leaderboard, then smash a camera to develop a photograph of them and their surroundings. !"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Hermit Purple?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items."
      },
      {
        "q": "Is Hermit Purple good for beginner leveling?",
        "a": "Yes, Hermit Purple offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cThere\u2019s a room inside the turtle?!\u201d The Stand of the turtle Coco Jumbo. It manifests as a special room located inside the gem of a key. When the key is placed in the turtle\u2019s shell, it functions as a mobile safe house that can shelter humans.",
    "image": "/images/stands/mr-president.webp",
    "combatRole": "Support",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Mr. President aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Enter Room/Entrap [HOLD]",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Enter the turtle\u2019s pocket dimension room. ( ) Tap to enter the turtle\u2019s room; hold to use Entrap, Use Room Eject to send occupants back outside."
      },
      {
        "key": "RMB / R",
        "name": "Tap Variant",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "! \u200c"
      },
      {
        "key": "E",
        "name": "Held Variant",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "! \u200c"
      },
      {
        "key": "R",
        "name": "Room Eject",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Forcefully eject everyone from the turtle room. ( ) !"
      },
      {
        "key": "T",
        "name": "Shell Defense",
        "type": "Attack",
        "cooldown": "45s",
        "damage": "Moderate",
        "description": "Retreat into the shell for a sturdy defensive stance. !"
      },
      {
        "key": "Y",
        "name": "BANKEY",
        "type": "Attack",
        "cooldown": "45s",
        "damage": "Moderate",
        "description": "Activate the turtle\u2019s key to change your fighting style. Activate near your turtle while it is out of its shell and you are not piloting, The Key changes your fighting style and enables its special dash. Use the move again to turn it off. ! !"
      },
      {
        "key": "F",
        "name": "Key Dash",
        "type": "Movement",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Activate BANKEY, then use Q forward for the Key\u2019s special dash. Side and backward dashes work as usual. Shift lock is not required. !"
      },
      {
        "key": "G",
        "name": "M1 Light Combo & M2 Attack",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Mr. President?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 5 focus items."
      },
      {
        "q": "Is Mr. President good for beginner leveling?",
        "a": "Yes, Mr. President offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "The Hustle is a powerful Stand possessed by Paco Laburante from JoJo's Bizarre Adventure Part 9: The JOJOLands.",
    "image": "/images/stands/the-hustle.webp",
    "combatRole": "Offense",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard The Hustle aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "\u201cThe Hustle! Time to do your stuff!\u201d",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Paco Laburante\u2019s Stand has no body of its own. It lives in his muscles and gives him total control over them, so he can swell them to crush a throat, harden them to shrug off a blow or crawl up a wall with them. --- ! ---"
      },
      {
        "key": "RMB / R",
        "name": "Chiseled Like A Rock",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Summoning The Hustle grows muscles on your body. While it\u2019s out you take 10% less damage, deal 5% more melee damage and deal 50% more damage to piloted Stands. Use R while blocking to knock bullets away. !"
      },
      {
        "key": "E",
        "name": "Bizarre Physique",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "The Hustle can\u2019t be piloted. Press Pilot (Ctrl) to flex instead. You can climb and crawl on any surface but can\u2019t sprint in this mode, and Leap ends it. The first throwable you walk into sticks to your back and takes the next hit for you. Press H to "
      },
      {
        "key": "R",
        "name": "Throwable",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "T",
        "name": "Throat Grab",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Moderate",
        "description": "Grab an enemy by the throat and choke them for 5 seconds. You can walk and climb walls while holding them. Press again to use DO IT and throw them, which can be aimed upwards with your camera. Being thrown into a wall or other player does bonus damag"
      },
      {
        "key": "Y",
        "name": "Hold",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "F",
        "name": "The Path Of Violence",
        "type": "Attack",
        "cooldown": "14s",
        "damage": "Moderate",
        "description": "Lunge forward with an elbow. If it lands, you dash in, grab them and beat them down before sending them flying. The initial flying elbow deals chip damage. !"
      },
      {
        "key": "G",
        "name": "Tense Up",
        "type": "Attack",
        "cooldown": "18s",
        "damage": "Moderate",
        "description": "Tense your body for 1 second. You gain the unstoppable status during this pose. Attacks during the window do 75% less damage to you and a quarter of the damage hits the attacker instead. If the attack hits you in the first 0.3 seconds of the stance, "
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Jonathan Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock The Hustle?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items."
      },
      {
        "q": "Is The Hustle good for beginner leveling?",
        "a": "Yes, The Hustle offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cGUGURGUURGURUGRUGUR\u201d The stand of Carne, one of the Boss\u2019s bodyguards. Notorious B.I.G only awakens once its user is dead, driven by the hatred Carne died with. it hunts whatever moves fastest around it and eats anything it catches, growing larger the more it consumes. Because its user is already dead, there is nothing left of him that can be killed in the usual way.",
    "image": "/images/stands/notorious-big.webp",
    "combatRole": "Tank",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Notorious B.I.G aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Death Wish",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "While Notorious B.I.G\u2019s user is alive, every hit against them does 50% more damage."
      },
      {
        "key": "RMB / R",
        "name": "Hate",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Landing hits, getting hurt, Stalking and insulting people  all build Hate, up to 250. It slowly fades when you haven\u2019t added any for a few seconds. The more Hate you die with, the more Mass Notorious B.I.G rises with, and at full Hate it rises bigger"
      },
      {
        "key": "E",
        "name": "Grudge",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Anyone who hurts you builds a Grudge against you, more the harder they hit, and whoever kills you gets a full one. It shows as a red bar over their head that only you can see. The dead Notorious B.I.G deals up to 50% more damage  to enemies with a Gr"
      },
      {
        "key": "R",
        "name": "Hateful Punches",
        "type": "Attack",
        "cooldown": "14s",
        "damage": "Moderate",
        "description": "Notorious B.I.G throws a slow barrage of hateful punches. Every hit builds Hate, and the last one staggers. Taking a hit interrupts it. !"
      },
      {
        "key": "T",
        "name": "Insult",
        "type": "Attack",
        "cooldown": "14s",
        "damage": "Moderate",
        "description": "Hiss and scream insults at everyone around you. Each enemy in range takes 20% more damage for 8 seconds, gives you Hate, and loses any Grudge they had against you. !"
      },
      {
        "key": "Y",
        "name": "Tumorous Pulse",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Notorious B.I.G steps out in front of you and smashes the ground, sending a wave of tumors bursting forward through it. Anyone it catches is thrown far forward and knocked down. Blocking it keeps you on your feet. !"
      },
      {
        "key": "F",
        "name": "Stalk (HOLD)",
        "type": "Attack",
        "cooldown": "6s",
        "damage": "Moderate",
        "description": "Hold to stare down an enemy in front of you. While they aren\u2019t looking at you, or you\u2019re too far away for them to notice, you build Hate. If anyone close by looks at you, you\u2019re spotted and the stalk ends. It also ends once your Hate is full. ! ---"
      },
      {
        "key": "G",
        "name": "Good Luck (3 Bars)",
        "type": "Attack",
        "cooldown": "30s",
        "damage": "Moderate",
        "description": "Costs 3 EX bars and all of your Hate. Your stand is put away and you burst into Notorious B.I.G on the spot, starting with 40 extra Mass. Works even while your next transformation is on cooldown. !"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Jonathan Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Notorious B.I.G?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 5 focus items."
      },
      {
        "q": "Is Notorious B.I.G good for beginner leveling?",
        "a": "Yes, Notorious B.I.G offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cI\u2019m overflowing with hope and motivation!\u201d The Stand of Sale, a member of Passione. Kraft Work fixes objects in place and stores force in them through repeated strikes. Sale uses it to stop bullets, pin opponents against surfaces and climb on objects suspended in midair. Releasing a charged object sends it flying.",
    "image": "/images/stands/kraft-work.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Kraft Work aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Krafted",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Kraft Work\u2019s heavy attacks, hits from projectiles you froze, Fixation and Kinetic Field leave enemies Krafted for 10 seconds. Contact Fixation and touching your frozen objects also mark enemies. A heavy attack that releases a Kinetized enemy does not"
      },
      {
        "key": "RMB / R",
        "name": "Kinetic Control",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "With Kraft Work summoned, block just before a projectile reaches its front to freeze it. While blocking, use R just before a projectile hits to deflect and freeze it. You can freeze 15 objects at once. They unfreeze when you dismiss Kraft Work or the"
      },
      {
        "key": "E",
        "name": "R/M2 Deflect",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "R",
        "name": "Kinetic Throw",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "When throwing an object, then use R during the windup to lift it and kinetically lock it. !"
      },
      {
        "key": "T",
        "name": "Fixation",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Freeze projectiles, loose throwables, vehicles and piloted Stands around Kraft Work, and mark enemies Krafted. Enemies caught in the burst become Krafted for 10 seconds. The burst freezes projectiles from any direction and loose throwables, and stops"
      },
      {
        "key": "Y",
        "name": "Stopping the train",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "F",
        "name": "Stopping projectiles",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "G",
        "name": "Contact Fixation",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Moderate",
        "description": "Touch an enemy with Kraft Work to leave them Kineticized, or freeze a loose throwable to charge and launch. Kineticized lasts 4 seconds. Light attacks build up to 6 charges and change the enemy\u2019s launch direction. Charged enemies launch them when the"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Kraft Work?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 5 focus items."
      },
      {
        "q": "Is Kraft Work good for beginner leveling?",
        "a": "Yes, Kraft Work offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cThis stone moves with no regard to my will.\u201d The Stand of Scolippi. An automatic stone that follows people destined to die, changing its shape to reveal their approaching fate. Its touch offers a peaceful death. Even if its user cannot command it, and breaking the stone does not erase the fate it has foretold.",
    "image": "/images/stands/rolling-stones.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Rolling Stones aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Stone Deity",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Use E to release Rolling Stones. It follows its own targets and cannot be recalled. !"
      },
      {
        "key": "RMB / R",
        "name": "Spiritual Connection",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "use Ctrl to watch from the stone. This only changes your view. If you die, the stone remains, removes its current target, and moves to the next."
      },
      {
        "key": "E",
        "name": "We Are All Slaves Of Fate",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Eight seconds after summon, a random player or NPC becomes Roling Stone\u2019s target and receives a hidden timer of 120 seconds. The user cannot be the first target, Rolling and leaping begin after the first 10% of the timer; until then the stone can sti"
      },
      {
        "key": "R",
        "name": "Ruthlessness Is Mercy",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "If the stone touches its current target, that target dies immediately and painlessly. Contact with anyone else is harmless. !"
      },
      {
        "key": "T",
        "name": "Forbidden Throwable",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Pick up the stone with the normal throwable controls. !"
      },
      {
        "key": "Y",
        "name": "It\u2019s Not My Time Yet",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "While someone else is the stone\u2019s current target, damage to someone holding the stone is absorbed by the stone instead. Carrying the stone prevents the holder from attacking or healing, and moving too far away from the stone\u2019s target will cause it to"
      },
      {
        "key": "F",
        "name": "Within Death\u2019s Reach",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "The stone rolls after its target and leaps when close."
      },
      {
        "key": "G",
        "name": "Unearthed Insight",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "The stone changes form as it loses health."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Rolling Stones?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 5 focus items."
      },
      {
        "q": "Is Rolling Stones good for beginner leveling?",
        "a": "Yes, Rolling Stones offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cThey\u2019re my friends\u2026 my precious Harvest!\u201d The stand of Shigekiyo \u201cShigechi\u201d Yangu. A colony of roughly 500 tiny insect-like units acting as a single will. Each unit is feeble, But the swarm can scour a entire town for anything of value and overwhelm enemies through sheer numbers.",
    "image": "/images/stands/harvest.webp",
    "combatRole": "Support",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Harvest aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "M1 Light Combo & M2 Attack",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "RMB / R",
        "name": "Colony Carry [TAP AGAIN TO STOP]",
        "type": "Attack",
        "cooldown": "25s",
        "damage": "Moderate",
        "description": "The colony scoops you up and hauls you rapidly across any surface (including walls). Tap again to stop early. !"
      },
      {
        "key": "E",
        "name": "Harvest Ambush/RECALL [HOLD]",
        "type": "Attack",
        "cooldown": "0.45s",
        "damage": "Moderate",
        "description": "Tap to plant a Harvest squad on a floor, wall, or ceiling. They ambush enemies who come near. Hold to recall your squads. Active ambush squads must be recalled or spent before a normal unsummon. (Procs Poison) ! !"
      },
      {
        "key": "R",
        "name": "Harvest Tornado",
        "type": "Attack",
        "cooldown": "23s",
        "damage": "Moderate",
        "description": "Harvest circles you at high speed, shredding nearby enemies from every direction. !"
      },
      {
        "key": "T",
        "name": "Search Party / Command [M1] / Cycle [TAP",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Send all nine Harvest out to search. The enemies, objects and items they find stay marked until you recall them. !"
      },
      {
        "key": "Y",
        "name": "Recall [HOLD]",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "F",
        "name": "Cycle [TAP]",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "G",
        "name": "Command [M1]",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "! --- # EX [Awakening Moves]"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Harvest?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 4 focus items."
      },
      {
        "q": "Is Harvest good for beginner leveling?",
        "a": "Yes, Harvest offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cYour sentence to torture is now repealed! Now! immediately! You are to be executed!\u201d The Stand of Mike O., President Funny Valentine\u2019s bodyguard. Tubular Bells lets him inflate metal into balloon animals that pursue a memorized scent. He can reshape them from a distance, and their elastic bodies squeeze through narrow openings. When a balloon bursts, it returns to its original metal form: a nail hidden in a animal or a heavy sheet raised overhead can become a deadly trap.",
    "image": "/images/stands/tubular-bells.webp",
    "combatRole": "Zoner",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Tubular Bells aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Five Animals",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Nails and gas cans make dogs, hydrants make swans, trash cans make turtles, signs make snakes, and metal benches or empty cars make lions. Holding Inflate longer increases size, damage and knockback."
      },
      {
        "key": "RMB / R",
        "name": "Trash Can (Turtle)",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "E",
        "name": "Empty cars/metal benches (Lion)",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "R",
        "name": "Fire hydrants (Swan)",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "! (The swan is faster than any other balloon)"
      },
      {
        "key": "T",
        "name": "Nails and gas cans (Dog)",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "! (The dog is faster when scent tracking)"
      },
      {
        "key": "Y",
        "name": "Signs (Snake)",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "F",
        "name": "Balloon Control",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Tap Ctrl to cycle through your balloon animals and back to your body. Move toward your camera; aim up or down to change height. Hold Ctrl to return immediately. !"
      },
      {
        "key": "G",
        "name": "Early Pop",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Press E while piloting to pop the balloon and drop its original object. !"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Tubular Bells?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 7 focus items."
      },
      {
        "q": "Is Tubular Bells good for beginner leveling?",
        "a": "Yes, Tubular Bells offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cSomeone has to stay.\u201d The Stand of Toyohiro Kanedaichi, bound to the transmission tower he calls home. Anyone left alone inside becomes its prisoner, turning to metal if they try to leave without a replacement. Attacking the tower is no way out: it stores the force of each blow and sends it back.",
    "image": "/images/stands/super-fly.webp",
    "combatRole": "Tank",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Super Fly aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "M1 Light Combo & M2 Attack",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "RMB / R",
        "name": "Prisoner Boundary",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "If you are the tower\u2019s lone prisoner, crossing outside its boundary turns you to metal. Another occupant is needed before the prisoner can leave normally. Attacking the tower feeds Damage Redirection. ! \u200c"
      },
      {
        "key": "E",
        "name": "Deploy Power Line",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Throw a power line where you aim. Anyone can click near the top to zip down, or near the landed hook to climb back up. Click again to let go. Tap to deploy a line. Any player can aim at the top and press M1 nearby to ride down, or do the same at the "
      },
      {
        "key": "R",
        "name": "Screw Volley",
        "type": "Attack",
        "cooldown": "23s",
        "damage": "Moderate",
        "description": "Fire three screws from the tower. Shiftlock aims them at the target closest to your mouse. Screws stick into whatever they hit. !"
      },
      {
        "key": "T",
        "name": "Damage Redirection",
        "type": "Attack",
        "cooldown": "15s",
        "damage": "Moderate",
        "description": "Super Fly stores damage from attacks against it. Tap to fire it at your target, or hold to send each attacker their share back. You can hit the tower to charge it yourself. While someone else is trapped, it fires back automatically. ! \u200c"
      },
      {
        "key": "Y",
        "name": "Super Leap",
        "type": "Attack",
        "cooldown": "35s",
        "damage": "Moderate",
        "description": "Hold to pick a ledge on your tower, then release to jump there. ! --- # EX [Awakening Moves]"
      },
      {
        "key": "F",
        "name": "Tower Reposition",
        "type": "Attack",
        "cooldown": "75s",
        "damage": "Moderate",
        "description": "Send the whole tower spinning into the sky, then bring it down where you\u2019re standing. The landing sends nearby enemies flying and plants Super Fly in its new spot. !"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Jonathan Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Super Fly?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 4 focus items."
      },
      {
        "q": "Is Super Fly good for beginner leveling?",
        "a": "Yes, Super Fly offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cAnything is possible if i use Under World!\u201d The Stand of Donatello Versus. A long-range Stand bound to the earth itself, Under World possesses the terrifying ability to dig up and revive past events from the ground. Anything that once happened on a patch of land, a falling boulder, a passing car, a victim\u2019s last breath no matter what it is it can be unearthed and replayed in the present.",
    "image": "/images/stands/under-world.webp",
    "combatRole": "Zoner",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Under World aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "M1 Light Combo & M2 Attack",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "RMB / R",
        "name": "Burrow [HOLD]",
        "type": "Attack",
        "cooldown": "28s",
        "damage": "Moderate",
        "description": "Dive into the earth and tunnel through the ground. Release to erupt out of ground. !"
      },
      {
        "key": "E",
        "name": "Unearth",
        "type": "Attack",
        "cooldown": "45s",
        "damage": "Moderate",
        "description": "Dig a warrior from the ground\u2019s memory to guard you and attack nearby enemies. ! !"
      },
      {
        "key": "R",
        "name": "Prop Memory",
        "type": "Attack",
        "cooldown": "29s",
        "damage": "Moderate",
        "description": "Let Under World dig up a random usable object from the ground\u2019s memory. (Gasoline, Table, Chair, Sign) !"
      },
      {
        "key": "T",
        "name": "Tora! Tora! Tora! / Aim Drop [HOLD] / Dr",
        "type": "Attack",
        "cooldown": "23s",
        "damage": "Moderate",
        "description": "Tap to dig up an Aichi D3A, steer by turning, then tap again to drop three incendiary bombs. Hold to send it bombing where you\u2019re aiming. !"
      },
      {
        "key": "Y",
        "name": "Drop",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "F",
        "name": "Pilot Mode",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Summon your stand, then use Ctrl to enter or leave pilot control. ! --- # EX [Awakening Moves]"
      },
      {
        "key": "G",
        "name": "Underground Illusion Chamber [1 Bar]",
        "type": "Attack",
        "cooldown": "75s",
        "damage": "Moderate",
        "description": "Dig a chamber beneath the battlefield. Use again while nearby to recreate a volcanic eruption inside."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Under World?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 6 focus items."
      },
      {
        "q": "Is Under World good for beginner leveling?",
        "a": "Yes, Under World offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cI will pierce you through!\u201d The Stand of Hato Higashikata. A Stand integrated into the user\u2019s footwear that allows for the hardening and elongation of the heels. These spikes possess immense piercing power, capable of penetrating stone and allowing the user to anchor themselves to walls and ceilings.",
    "image": "/images/stands/walking-heart.webp",
    "combatRole": "Offense",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Walking Heart aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "M1 Light Combo & M2 Attack",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "RMB / R",
        "name": "Spike Extension",
        "type": "Attack",
        "cooldown": "24s",
        "damage": "Moderate",
        "description": "Extend your heels to reach higher surfaces and enable wall and ceiling movement. With your heels extended, you can walk on walls and ceilings. Watch which way you are facing as you move around an edge. ! !"
      },
      {
        "key": "E",
        "name": "Heel Barrage",
        "type": "Barrage",
        "cooldown": "23s",
        "damage": "Moderate",
        "description": "Rapid-fire kicks with spiked heels. !"
      },
      {
        "key": "R",
        "name": "Spike Creation / Charge Stomp [HOLD]",
        "type": "Attack",
        "cooldown": "28s",
        "damage": "Moderate",
        "description": "Stomp the ground to create a field of deadly spikes. (The spike can then be grabbed and thrown.) VARIATION: Charge Stomp [HOLD]"
      },
      {
        "key": "T",
        "name": "Base Variant",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "Y",
        "name": "Held Variant",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "F",
        "name": "Size Difference",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "G",
        "name": "Ground Impale",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Target an opponent near your aim to raise a ground spike and impale them. Aims within 14 studs of the cursor; if no target is found, chooses the closest opponent within 10 studs of you. The strike position is fixed when activated, so opponents can ju"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Jonathan Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Walking Heart?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 8 focus items."
      },
      {
        "q": "Is Walking Heart good for beginner leveling?",
        "a": "Yes, Walking Heart offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cGlory Days.\u201d The Stand of Bobby Jean. It is a pure ability Stand that allows Bobby Jean to manipulate the speed of the bullets he fires.",
    "image": "/images/stands/glory-days.webp",
    "combatRole": "Zoner",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Glory Days aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Gun Controls",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Use E to draw the gun and M1 to fire. The magazine must be refilled with Reload. Glory changes the behavior of newly fired rounds, while Elevator Trap sets up a seperate crossfire."
      },
      {
        "key": "RMB / R",
        "name": "M1 Light Combo & M2 Attack",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "E",
        "name": "Glory",
        "type": "Attack",
        "cooldown": "0.3s",
        "damage": "Moderate",
        "description": "Toggle Glory to suspend newly fired rounds in midair. !"
      },
      {
        "key": "R",
        "name": "Release",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "T",
        "name": "Reload",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Reload your gun Stand\u2019s magazine. !"
      },
      {
        "key": "Y",
        "name": "Knock Knock",
        "type": "Attack",
        "cooldown": "28s",
        "damage": "Moderate",
        "description": "Kick forward, striking enemies in front of you. !"
      },
      {
        "key": "F",
        "name": "Elevator Trap",
        "type": "Attack",
        "cooldown": "23s",
        "damage": "Moderate",
        "description": "Set a hidden crossfire with Glory Days. The bullets close in when an enemy enters. !"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Glory Days?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items."
      },
      {
        "q": "Is Glory Days good for beginner leveling?",
        "a": "Yes, Glory Days offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "The stand of an unknown user. Stored in a DISC by Whitesnake, this unnamed ability appears in Stone Ocean when Enrico Pucci inserts it into F.F. Water she touches begins to boil, threatening her water-dependent body. its original user and the full limits of its power are never revealed.",
    "image": "/images/stands/smoke-on-the-water.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Smoke On The Water aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Integrated Stand",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Press E to activate Boiling Water, You can still use your usual weapon attacks."
      },
      {
        "key": "RMB / R",
        "name": "Heat",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Heat rises while the Stand is active and when you use its boiling attacks. Above 70 Heat, you lose health each second. The hotter you get, the more health you lose. Hold Let Off Steam to cool down. Cold or dismissing the stand Stand also lowers Heat."
      },
      {
        "key": "E",
        "name": "Bring to a Boil",
        "type": "Attack",
        "cooldown": "8s",
        "damage": "Moderate",
        "description": "Boil the water you\u2019re aiming at, including any puddles touching it. The steam repeatedly damages and stuns enemies. Boiling a soaked enemy burns them repeatedly for 6 seconds. Hold to highlight water and targets. Cold protects against this move."
      },
      {
        "key": "R",
        "name": "Puddle",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "T",
        "name": "Person",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "! (Ignore the puddle below, Super Soaker and Hot Potato proc soaked making them boil.)"
      },
      {
        "key": "Y",
        "name": "Highlight (Held)",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "F",
        "name": "Super Soaker",
        "type": "Attack",
        "cooldown": "5s",
        "damage": "Moderate",
        "description": "Fire four arcing shots of water, Each hit leaves a puddle, and enemies hit directly become Soaked, blocking stops the damage and keeps them dry. !"
      },
      {
        "key": "G",
        "name": "Hot Potato",
        "type": "Attack",
        "cooldown": "8s",
        "damage": "Moderate",
        "description": "Throw a water balloon that bursts on impact, soaking nearby enemies and leaving a large puddle. Hitting someone directly also knocks them back and briefly stuns them. !"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Smoke On The Water?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 5 focus items."
      },
      {
        "q": "Is Smoke On The Water good for beginner leveling?",
        "a": "Yes, Smoke On The Water offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cWhen we truly think \u201cI\u2019ll kill you!\u201d from the bottom of our hearts\u2026 by that time, the deed has already been done!\u201d The Stand of Prosciutto, an assassin from La Squadra Esecuzioni. It rapidly ages living things for it. The warmer a victim\u2019s body, the faster they weaken; keeping cold can slow the effect.",
    "image": "/images/stands/the-grateful-dead.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard The Grateful Dead aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Ungraceful Aging",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Aging affects allies and enemies. Your neck and shoulders droop as stacks rise, and your attacks and dashes steadily weaken. Near 100 stacks, attack speed is reduced by up to 60% and dash power by up to 80%. At 100 stacks, players die immediately; Pv"
      },
      {
        "key": "RMB / R",
        "name": "Withering Mist [TOGGLE]",
        "type": "Attack",
        "cooldown": "1.5s",
        "damage": "Moderate",
        "description": "Surround Grateful Dead with aging mist, Everyone nearby except you gains Aging and takes a little damage, including allies. Use again to stop !"
      },
      {
        "key": "E",
        "name": "Rotten Grasp",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "When piloting, Grateful Dead holds an enemy for 4 seconds, applies up to 8 Aging stacks, then throws them left. You can still turn or leave pilot mode while it holds them. Otherwise, you grab them yourself for 2 seconds, apply up to 16 stacks, and dr"
      },
      {
        "key": "R",
        "name": "Base Variant",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "T",
        "name": "Pilot Variant",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "Y",
        "name": "One-Armed Barrage",
        "type": "Barrage",
        "cooldown": "23s",
        "damage": "Moderate",
        "description": "Balance on one arm and pummel anyone in front of you with the other. You can turn, but cannot move during the barrage. Every third hit on the same target adds 1 Aging stack. !"
      },
      {
        "key": "F",
        "name": "Senior Citizen [TOGGLE]",
        "type": "Attack",
        "cooldown": "1s",
        "damage": "Moderate",
        "description": "Age yourself to gain EX over time. Your attacks become 60% slower and your dashes lose 80% of their power. Use again to return to normal. This form cannot kill you; Aging from enemies still builds up seperately ! --- # EX [Awakening Moves]"
      },
      {
        "key": "G",
        "name": "On The Train [3 Bars]",
        "type": "Attack",
        "cooldown": "30s",
        "damage": "Moderate",
        "description": "Spread Withering Mist much farther for 20 seconds. Activates the mist if not already running. !"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock The Grateful Dead?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 5 focus items."
      },
      {
        "q": "Is The Grateful Dead good for beginner leveling?",
        "a": "Yes, The Grateful Dead offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cThe gun is mightier than the sword!\u201d The stand of Hol Horse. A gun summoned directly to the user\u2019s hand, Emperor allows its user to fire bullets that are also part of the Stand. These bullets can be steered mid-air with absolute precision, making cover useless. !",
    "image": "/images/stands/emperor.webp",
    "combatRole": "Zoner",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Emperor aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "M1 Light Combo & M2 Attack",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "RMB / R",
        "name": "Hol Horse Philosophy [HOLD]",
        "type": "Attack",
        "cooldown": "55s",
        "damage": "Moderate",
        "description": "Hold to run forward quickly, then release to stop. Start running in the direction you face. Keep holding to run, or release to stop. Being stunned or reaching the time limit also ends the run. !"
      },
      {
        "key": "E",
        "name": "Blind Shots",
        "type": "Attack",
        "cooldown": "35s",
        "damage": "Moderate",
        "description": "Fire a group of bullets and guide them by moving your camera. Fire a group of bullets, then turn the camera to steer them. You stay in place while controlling them. Each bullet dissapears after a hit. Control ends when no bullets remain, the group hi"
      },
      {
        "key": "R",
        "name": "Fan The Hammer [HOLD]",
        "type": "Attack",
        "cooldown": "23s",
        "damage": "Moderate",
        "description": "Tap to fire ricocheting bullets, or hold for a close-range volley that hits instantly. VARIATION: [HOLD] Tap to fire a short volley of bullets that can bounce off surfaces. Hold through the startup to fire more slowly, hitting instantly at shorter ra"
      },
      {
        "key": "T",
        "name": "Tap Variant",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "! \u200c"
      },
      {
        "key": "Y",
        "name": "Held Variant",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "F",
        "name": "Emperor Shot [HOLD]",
        "type": "Attack",
        "cooldown": "28s",
        "damage": "Moderate",
        "description": "Charge a blast straight ahead, Holding increases its damage,size,reach and knockback. VARIATION: [HOLD] Hold to charge for up to two seconds, then release to fire. A full charge doubles the blast size, damage and knockback. The shot travels in the di"
      },
      {
        "key": "G",
        "name": "Tap Variant",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Emperor?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items."
      },
      {
        "q": "Is Emperor good for beginner leveling?",
        "a": "Yes, Emperor offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "burning-down-the-house",
    "name": "Burning Down The House",
    "canonicalUser": "Emporio Alni\u00f1o",
    "jojoPart": "Part 6: Stone Ocean",
    "rarity": "Legendary",
    "tier": {
      "pvp": "B",
      "raid": "A",
      "farming": "B"
    },
    "status": "Playable",
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 6 focus items.",
    "lore": "# \u201cThe house itself is a ghost.\u201d The stand of Emporio Alnino. Burning Down The House lets him use the ghosts of destroyed rooms and objects. He hides in the remains of a music room that burned down at Green Dolphin Street Prison, entering through a narrow crack in the wall. The room gives Emporio and his friends a place to hide.",
    "image": "/images/stands/burning-down-the-house.webp",
    "combatRole": "Utility",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Burning Down The House aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Ghost Piano",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "There is a working piano in the room. !"
      },
      {
        "key": "RMB / R",
        "name": "Grand Piano",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Use the piano\u2019s prompt to sit down. Play Giorno\u2019s Theme without a wrong note to give everyone in the room 30% more damage for 60 seconds. Inspired does not stack. ! (You can use the sheet)"
      },
      {
        "key": "E",
        "name": "Ghost Room",
        "type": "Attack",
        "cooldown": "8s",
        "damage": "Moderate",
        "description": "Hold to choose a wall, then release to open a crack. Keep your hand against the wall for 3 seconds. Use again to close it when nobody is inside. Your room and stored items stay until you die."
      },
      {
        "key": "R",
        "name": "Hold",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "T",
        "name": "Tap",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "Y",
        "name": "Ghost Storage",
        "type": "Awakening / EX",
        "cooldown": "0.5s",
        "damage": "Moderate",
        "description": "Set down a throwable inside a ghost room to keep it. Each room holds up to 15. Pick them up later. !"
      },
      {
        "key": "F",
        "name": "Ghost Refreshments",
        "type": "Attack",
        "cooldown": "0.5s",
        "damage": "Moderate",
        "description": "Make the table snacks vanish or bring them back. Eat chocolates for 15% faster movement, or drink orange juice for 15% faster basic attacks. Each buff lasts 20 seconds."
      },
      {
        "key": "G",
        "name": "Appear",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Burning Down The House?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 6 focus items."
      },
      {
        "q": "Is Burning Down The House good for beginner leveling?",
        "a": "Yes, Burning Down The House offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cYou\u2019re simply a ripple trying to stop the inevitable Tsunami.\u201d The stand of Wachika Yatsu. It manifests as a large, and bulbous ocean sunfish, It has the ability to control all sea life, at least that\u2019s what Wachika thinks\u2026",
    "image": "/images/stands/beyond-the-sea.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Beyond the Sea aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "M1 Light Combo & M2 Attack",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "RMB / R",
        "name": "Sunfish Slap/Sunfish Slam [HOLD]",
        "type": "Attack",
        "cooldown": "28s",
        "damage": "Moderate",
        "description": "Slap your enemy with the full force of a sunfish. VARIATION: [HOLD] Sunfish Slam"
      },
      {
        "key": "E",
        "name": "Tap Variant",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "! \u200c"
      },
      {
        "key": "R",
        "name": "Held Variant",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "! \u200c"
      },
      {
        "key": "T",
        "name": "Jellyfish Summon",
        "type": "Attack",
        "cooldown": "45s",
        "damage": "Moderate",
        "description": "Summon a jellyfish that follows you and retaliates when either of you is attacked. ! ! \u200c"
      },
      {
        "key": "Y",
        "name": "Maelstrom",
        "type": "Attack",
        "cooldown": "23s",
        "damage": "Moderate",
        "description": "Circle a growing whirlpool at high speed and drag nearby enemies into its center ! \u200c"
      },
      {
        "key": "F",
        "name": "Riptide",
        "type": "Attack",
        "cooldown": "28s",
        "damage": "Moderate",
        "description": "Mark where a current begins, then choose its destination to carry enemies with the flow. VARIATION: Place Point [TAP AGAIN] Choose the starting point, then press the move again to place the destination. The current carries enemies along that route."
      },
      {
        "key": "G",
        "name": "First Activation",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Beyond the Sea?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items."
      },
      {
        "q": "Is Beyond the Sea good for beginner leveling?",
        "a": "Yes, Beyond the Sea offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cYES, I AM!\u201d The Stand of Muhammed Avdol. A powerful Close-Range Stand that generates and manipulates intense flames. It can shape fire into various forms, such as the Red Bind or Crossfire Hurricane, and is capable of incinerating anything it touches.",
    "image": "/images/stands/magicians-red.webp",
    "combatRole": "Zoner",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Magician's Red aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "M1 Light Combo & M2 Attack",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "RMB / R",
        "name": "Crossfire Hurricane / Penta Ankh [HOLD]",
        "type": "Attack",
        "cooldown": "23s",
        "damage": "Moderate",
        "description": "Launch a flaming ankh, or hold to fire five smaller ones. Stay near Life Detector to make them travel farther and track the marked enemy closest to your mouse. (Procs Burn) Tap for the normal attack, hold for Penta Ankh. Use Life Detector first and s"
      },
      {
        "key": "E",
        "name": "Tap Variant",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "R",
        "name": "Hold Variant",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "T",
        "name": "Red Pull",
        "type": "Attack",
        "cooldown": "28s",
        "damage": "Moderate",
        "description": "Yank an enemy toward you with a fiery tendril. !"
      },
      {
        "key": "Y",
        "name": "Flaming Grasp",
        "type": "Attack",
        "cooldown": "35s",
        "damage": "Moderate",
        "description": "Grab an enemy and set them on fire. Burns them to ashes if their health is low enough. !"
      },
      {
        "key": "F",
        "name": "Barrage",
        "type": "Barrage",
        "cooldown": "23s",
        "damage": "Moderate",
        "description": "Pummel enemies with a measured barrage of punches, then knock them away. ! --- # EX [Awakening Moves]"
      },
      {
        "key": "G",
        "name": "Red Bind [3 Bars]",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Your stand catches enemies, lifts them into the air, then slams them toward you. You can still move and attack. While piloting, enemies are thrown toward your Stand instead. !"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Magician's Red?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items."
      },
      {
        "q": "Is Magician's Red good for beginner leveling?",
        "a": "Yes, Magician's Red offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cLali-ho!\u201d The Stand of Mannish Boy, an eleven month-old baby hired to kill the Joestar group. Death 13 rules the world of dreams, where its masked, scythe-wielding form can do anything it likes to whoever falls asleep. It\u2019s user sleeping body is the one thing it leaves vulnerable in the waking world.",
    "image": "/images/stands/death-13.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Death 13 aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "\u201cLali-ho!\u201d",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "The Stand of Mannish Boy, an eleven month-old baby hired to kill the Joestar group. Death 13 rules the world of dreams, where its masked, scythe-wielding form can do anything it likes to whoever falls asleep. It\u2019s user sleeping body is the one thing "
      },
      {
        "key": "RMB / R",
        "name": "Drowsiness",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Your light and heavy attacks and certain skills add Drowsiness. At 3 stacks, enemies become Tired. At 10, they can see Death 13 and be hurt by its attacks. At 30, they fall into Slumber. Stacks decay after 12 seconds without another hit. !"
      },
      {
        "key": "E",
        "name": "Slumber",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Slumber lasts 6 seconds, up to 12 with more Ability. Taking damage shortens it by 1 second. Damage over 4 wakes sleeping targets instantly. After waking, the target resists Drowsiness and Slumber for 3 seconds. !"
      },
      {
        "key": "R",
        "name": "Sleeping Powder",
        "type": "Attack",
        "cooldown": "14s",
        "damage": "Moderate",
        "description": "Blow out a cloud of sleeping powder that grows in size and slowly drifts forward. Anyone inside is briefly stunned, has their vision blurred, and gains 5 Drowsiness for every second they stay in it. it does no damage. !"
      },
      {
        "key": "T",
        "name": "Sleepwalk",
        "type": "Attack",
        "cooldown": "28s",
        "damage": "Moderate",
        "description": "Recover health while sleepwalking for 10 seconds. Hits during the first 2 seconds trigger a scythe counter that raises the attacker to 10 Drowsiness, or adds 5 if they already have 10 or more. Later hits wake you. Use again to wake early. !"
      },
      {
        "key": "Y",
        "name": "Counter",
        "type": "Counter",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "F",
        "name": "Pan Smack",
        "type": "Attack",
        "cooldown": "14s",
        "damage": "Moderate",
        "description": "Whack the nearest enemy over the head with a frying pan. It knocks them forward and down and adds 5 Drowsiness. Small props in the swing go flying. !"
      },
      {
        "key": "G",
        "name": "Nightmare",
        "type": "Attack",
        "cooldown": "40s",
        "damage": "Moderate",
        "description": "Kneel and touch a sleeping enemy to take them into a dream for 30 seconds, where Death 13 fights them on its own. Use it beside any other sleeper to bring them into the same dream, or use it again to wake everyone. use Pilot to take control of Death "
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Death 13?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items."
      },
      {
        "q": "Is Death 13 good for beginner leveling?",
        "a": "Yes, Death 13 offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 7 focus items.",
    "lore": "Catch The Rainbow is a powerful Stand possessed by Blackmore from JoJo's Bizarre Adventure Part 7: Steel Ball Run.",
    "image": "/images/stands/catch-the-rainbow.webp",
    "combatRole": "Zoner",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Catch The Rainbow aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Catch The Rainbow",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Catch The Rainbow needs fog, rain, or an active hydrant within 30 studs to be used."
      },
      {
        "key": "RMB / R",
        "name": "Rain Walking/Floating",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Summon your stand, then hold Space for a short moment to begin rising. Release Jump to keep your height and move horizontally. Hold Z to descend. Sprinting makes horizontal floating faster. Landing ends the float; release and press Jump again after a"
      },
      {
        "key": "E",
        "name": "Hidden Controls",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "While floating, E activates Rain Transport. While hidden, aim at an enemy and press M1 for its teleport follow-up. With the mask on, Ctrl launches Body Projectile. Both extra moves are listed in Moves."
      },
      {
        "key": "R",
        "name": "Rain Transport",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "T",
        "name": "Followup",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "Y",
        "name": "Body Projectile",
        "type": "Attack",
        "cooldown": "23s",
        "damage": "Moderate",
        "description": "Detach your  arm and steer it with the camera to grab an enemy. ! # Weapons Of Rain Fire seven water shots that soak enemies on impact. Aim at your target before casting. The rain bursts also apply water to fire and gasoline they hit. !"
      },
      {
        "key": "F",
        "name": "Motionless Rain",
        "type": "Attack",
        "cooldown": "45s",
        "damage": "Moderate",
        "description": "Surround yourself with suspended raindrops for projectile defense. Your mask must be on. The raindrops stay around you until  used up; wait for them to clear before creating another set. !"
      },
      {
        "key": "G",
        "name": "Triple Shot",
        "type": "Attack",
        "cooldown": "27s",
        "damage": "Moderate",
        "description": "Fire three shots toward your mouse. !"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Catch The Rainbow?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 7 focus items."
      },
      {
        "q": "Is Catch The Rainbow good for beginner leveling?",
        "a": "Yes, Catch The Rainbow offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
      }
    ],
    "verifiedDate": "2026-11-16"
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
    "lore": "\u201cI\u2019m going to turn you into a pin-cushion!\u201d The Stand of Jean Pierre Polnareff. An armored, humanoid Stand that wields a rapier with masterful skill. It is highly agile and can shed its heavy silver armor to move at blinding speeds, creating afterimages to confuse opponents.",
    "image": "/images/stands/silver-chariot.webp",
    "combatRole": "Speed / Hit-and-Run",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Silver Chariot aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "M1 Light Combo & M2 Attack",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "RMB / R",
        "name": "Rapier Rush",
        "type": "Attack",
        "cooldown": "23s",
        "damage": "Moderate",
        "description": "A lightning-fast series of rapier thrusts. !"
      },
      {
        "key": "E",
        "name": "Blade Eject",
        "type": "Attack",
        "cooldown": "30s",
        "damage": "Moderate",
        "description": "Launch the blade from its hilt as a high-speed projectile. (Can Ricochet) User cannot use any stand abilities without their rapier. User can take their rapier back to avoid waiting for it to return. !"
      },
      {
        "key": "R",
        "name": "Pick up",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "T",
        "name": "Super Cool Ricochet",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "Y",
        "name": "Your Last Moments",
        "type": "Attack",
        "cooldown": "34s",
        "damage": "Moderate",
        "description": "Deliver a heavy strike that finishes off weakened enemies. !"
      },
      {
        "key": "F",
        "name": "Execution",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "G",
        "name": "French Rotation",
        "type": "Attack",
        "cooldown": "20s",
        "damage": "Moderate",
        "description": "Silver Chariot spins and cuts everything around it, knocking enemies away with Bleed and breaking a blocking guard, unless perfect blocked. Use while stunned it breaks the stun and winds up longer. Ability scaling: Damage scales 80% with Strength and"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Silver Chariot?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items."
      },
      {
        "q": "Is Silver Chariot good for beginner leveling?",
        "a": "Yes, Silver Chariot offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cYou\u2019re not a normal monkey, are you?\u201d The stand of Forever. Unlike spiritual Stands, Strength is bound to a physical object; A massive freighter. It allows the user to manipulate the ship\u2019s structure freely, weaponizing pipes, floors, and propellers with overwhelming force.",
    "image": "/images/stands/strength.webp",
    "combatRole": "Tank",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Strength aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Pilot Mode",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Summon your stand, then use Ctrl to enter or leave pilot control. Your camera and movement follow the stand. This stand stays on the ground while you pilot it. !"
      },
      {
        "key": "RMB / R",
        "name": "Building Strength / Speed Mode [HOLD]",
        "type": "Attack",
        "cooldown": "1s",
        "damage": "Moderate",
        "description": "Toggle between power mode and speed mode."
      },
      {
        "key": "E",
        "name": "Building Strength",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "R",
        "name": "Speed Mode",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "T",
        "name": "Ship Scraps",
        "type": "Attack",
        "cooldown": "23s",
        "damage": "Moderate",
        "description": "Lob ship debris high into the air to land where you\u2019re aiming. !"
      },
      {
        "key": "Y",
        "name": "Hooked",
        "type": "Attack",
        "cooldown": "5s",
        "damage": "Moderate",
        "description": "Snag an enemy with a chain hook and reel them in. !"
      },
      {
        "key": "F",
        "name": "Hull Trap",
        "type": "Attack",
        "cooldown": "5s",
        "damage": "Moderate",
        "description": "Set a hidden hull plate trap that snares anyone who sets on it. !"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Jonathan Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Strength?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items."
      },
      {
        "q": "Is Strength good for beginner leveling?",
        "a": "Yes, Strength offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cWelcome\u2026 to the \u201cTrue Man\u2019s World.\u201d The Stand of Ringo Roadagain. By turning the dial on his wristwatch, Ringo can rewind time by exactly six seconds. He uses this ability to correct his errors and achieve perfection in a duel.",
    "image": "/images/stands/mandom.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Mandom aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Rewind",
        "type": "Attack",
        "cooldown": "45s",
        "damage": "Moderate",
        "description": "Turn back time by 6 seconds, restoring your previous position and health. !"
      },
      {
        "key": "RMB / R",
        "name": "Ol' Reliable [BASIC ATTACK]",
        "type": "Attack",
        "cooldown": "28s",
        "damage": "Moderate",
        "description": "Fire a trusty revolver shot at your target."
      },
      {
        "key": "E",
        "name": "First Usage",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "R",
        "name": "Basic Attack",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "T",
        "name": "Deadeye",
        "type": "Attack",
        "cooldown": "35s",
        "damage": "Moderate",
        "description": "Take careful aim and fire a powerful shot. !"
      },
      {
        "key": "Y",
        "name": "Watch Set",
        "type": "Attack",
        "cooldown": "70s",
        "damage": "Moderate",
        "description": "Start a countdown that automatically rewinds you and nearby targets. Once the watch is set, you can move and fight while the countdown runs. The rewind happens automatically when time runs out. ! ---"
      },
      {
        "key": "F",
        "name": "EX Moveset",
        "type": "Attack",
        "cooldown": "90s",
        "damage": "Moderate",
        "description": "# TRUE MAN\u2019S WORLD (5 Bars) Spend a full EX gauge to rewind after a lethal hit during the next 30 seconds. Use while bleeding out to rewind immediately. Nearby opponents rewind with you."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Mandom?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 7 focus items."
      },
      {
        "q": "Is Mandom good for beginner leveling?",
        "a": "Yes, Mandom offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "\u201cReality is the lifeblood of entertainment.\u201d The Stand of Rohan Kishibe, encountered in Hawaii. While physically weak, it posesses the terrifying ability to turn people into books. By reading them, Rohan can learn their secrets, and by writing in them, he can force them to obey absolute commands.",
    "image": "/images/stands/heavens-door.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Heaven's Door aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "\u201cReality is the lifeblood of entertainme",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "The Stand of Rohan Kishibe, encountered in Hawaii. While physically weak, it posesses the terrifying ability to turn people into books. By reading them, Rohan can learn their secrets, and by writing in them, he can force them to obey absolute command"
      },
      {
        "key": "RMB / R",
        "name": "Book Transmutation",
        "type": "Attack",
        "cooldown": "16s",
        "damage": "Moderate",
        "description": "Turn an enemy\u2019s face into a book for 1.5-2 seconds based on Ability, allowing blocks but not perfect blocks and closing when either participant is hit. Ability Scaling: At 166 Ability; 17.5 stud range and 2 second book, with damage scaling 80% Abilit"
      },
      {
        "key": "E",
        "name": "Written Command",
        "type": "Attack",
        "cooldown": "15s",
        "damage": "Moderate",
        "description": "Write a command on a book target, with Ability extending Forget Motion from 2 to 2.5 seconds, Sleep from 2 to 3, Forget Me from 6 to 10 and Lower Your Guard from 8 to 10, while Fly Away keeps its 4x wall-splat multiplier. Ability Scaling: At 166 Abil"
      },
      {
        "key": "R",
        "name": "Page Rip",
        "type": "Attack",
        "cooldown": "28s",
        "damage": "Moderate",
        "description": "Tear a page from a grabbed book target for 16 base damage. Ability Scaling: Damage scales 70% Strength / 30% Ability, with 4-6 seconds of knockback vulnerability at an unchanged 1.45x multiplier. !"
      },
      {
        "key": "T",
        "name": "Safety Lock",
        "type": "Attack",
        "cooldown": "34s",
        "damage": "Moderate",
        "description": "Write on an enemy\u2019s open face to refuse their next two direct attacks against you within 15 seconds. --- # EX [Awakening Moves]"
      },
      {
        "key": "Y",
        "name": "Manga [3 Bars]",
        "type": "Attack",
        "cooldown": "45s",
        "damage": "Moderate",
        "description": "Hold up Heaven\u2019s Door\u2019s manga panel to do 15 base damage and turn nearby viewers into books for 3-3.5 seconds based on Ability,  without allowing perfect blocks. Ability Scaling: 80% Ability / 20% Strength damage; 32-40 stud radius; 3-3.5 second book"
      },
      {
        "key": "F",
        "name": "Become My Character [4 Bars]",
        "type": "Attack",
        "cooldown": "120s",
        "damage": "Moderate",
        "description": "Command someone you\u2019ve turned into a book to fight for you with their Stand. Ability Scaling: At 166 Ability: control rises from 12s to 20 seconds, application range from 15 to 22 studs and guard detection from 65 to 85 studs. !"
      },
      {
        "key": "G",
        "name": "Chapter Counter [3 Bars]",
        "type": "Counter",
        "cooldown": "35s",
        "damage": "Moderate",
        "description": "Spend 2 EX bars to counter an attack and book the attacker for 3.5-4 seconds based on Ability, with stun ending alongside ragdoll. Ability Scaling: Book duration scales from 3-4 seconds by 166 Ability without changing the counter activation window. !"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Heaven's Door?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 4 focus items."
      },
      {
        "q": "Is Heaven's Door good for beginner leveling?",
        "a": "Yes, Heaven's Door offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
      }
    ],
    "verifiedDate": "2026-11-16"
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
    "lore": "\u201cI\u2019m becoming rich no matter what it takes!\u201d The Stand of Jodio Joestar. November Rain produces rain beneath its body and lets Jodio control the weight of its drops. Its downpour can crush enemies, deflect bullets and break through concrete.",
    "image": "/images/stands/november-rain.webp",
    "combatRole": "Zoner",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard November Rain aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "\u201cI\u2019m becoming rich no matter what it tak",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "The Stand of Jodio Joestar. November Rain produces rain beneath its body and lets Jodio control the weight of its drops. Its downpour can crush enemies, deflect bullets and break through concrete. ---"
      },
      {
        "key": "RMB / R",
        "name": "Hidden Piloting",
        "type": "Movement",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Use Ctrl while November Rain is unsummoned to move it quickly and leave it in position. You can use Make It Rain to summon it and start the downpour instantly. Taking a hit forces it to appear. If it is left beyond your range, it walks back to you. !"
      },
      {
        "key": "E",
        "name": "Pressure",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Enemies gain one stack of Pressure per second in your rain. At one stack, attacks are slowed. At two stacks, movement slows too. At three, the enemy is crushed and the stacks clear. Outside the rain, they lose one stack per second. Multiple rain sour"
      },
      {
        "key": "R",
        "name": "Make It Rain",
        "type": "Attack",
        "cooldown": "8s",
        "damage": "Moderate",
        "description": "Toggle a downpour beneath November Rain.  Enemies caught in it take steady damage, become Soaked and build Pressure. The rain passes through roofs and floors. Press again to stop. While piloting the unsummoned Stand, this summons it at that spot and "
      },
      {
        "key": "T",
        "name": "Raining on enemy",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "Y",
        "name": "Catch The Rainbow",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "users in your party, or players you have spared, can use your active downpour as a water source from up to 8 studs away, or 16 when the stand is larger. !"
      },
      {
        "key": "F",
        "name": "Rainfall",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Rain falls beneath November Rain, passing through roofs and floors for up to 60 studs below its feet. It applies Soaked without Cold, puts out fires and enlarges puddles it lands in. !"
      },
      {
        "key": "G",
        "name": "Tilt",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Only the stand tilts and fires a stream of rain; aiming does not turn the user\u2019s body. Hold the skill to keep firing. The direction of the drops is aimable. Each drop briefly stuns, pushes enemies back, applies Soaked and builds Pressure. Rain that h"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock November Rain?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items."
      },
      {
        "q": "Is November Rain good for beginner leveling?",
        "a": "Yes, November Rain offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "Yuya Fungami\u2019s Stand tracks people by scent. It can split into a pack of feet to chase its target and drain their nutrients to heal its user.",
    "image": "/images/stands/highway-star.webp",
    "combatRole": "Speed / Hit-and-Run",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Highway Star aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Scent",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Scented enemies appear on your scent list and are marked through walls. Pursuit can chase them within 600 studs. Becoming Soaked washes the scent off. !"
      },
      {
        "key": "RMB / R",
        "name": "Barrage",
        "type": "Barrage",
        "cooldown": "14s",
        "damage": "Moderate",
        "description": "Unleash a rapid flurry of punches on your opponent. !"
      },
      {
        "key": "E",
        "name": "Scent Trap",
        "type": "Attack",
        "cooldown": "30s",
        "damage": "Moderate",
        "description": "Aim at a throwable to coat it in scent, or aim at the ground to throw a fake Mysterious Arrow. Touching either applies Scented for 3 minutes. The arrow also drains and slows whoever takes the bait. Traps last 1 minute, with up to one arrow and two co"
      },
      {
        "key": "R",
        "name": "Arrow",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "T",
        "name": "Object",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "Y",
        "name": "Pursuit",
        "type": "Attack",
        "cooldown": "28s",
        "damage": "Moderate",
        "description": "Tap to send Highway Star after your selected Scented target within 600 studs. It chases them on its own and drains them on contact, healing you and filling your Nutrients. Hold to recall it, or hold while it is home to cycle through scents. A perfect"
      },
      {
        "key": "F",
        "name": "Recall (HOLD)",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "G",
        "name": "Footprints",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "A perfect block as Pursuit\u2019s feet land turns them away; once they are on, only becoming Soaked or riding in a fast-moving vehicle removes them, and the same goes for the feet left by Footprint Storm."
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Highway Star?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 4 focus items."
      },
      {
        "q": "Is Highway Star good for beginner leveling?",
        "a": "Yes, Highway Star offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "lore": "Big Mouth Strikes Again is a powerful Stand possessed by Charming Man from JoJo's Bizarre Adventure Part 9: The JOJOLands.",
    "image": "/images/stands/big-mouth-strikes-again.webp",
    "combatRole": "Disruption",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Big Mouth Strikes Again aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "\u201cMy skin\u2019s been coarse and sandy ever si",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Charming Man\u2019s Stand lets him break his skin into fragments, blend into his surroundings and disguise his appearance. He can also detach body parts and control them from a distance. ---"
      },
      {
        "key": "RMB / R",
        "name": "Chameleon",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Crouch near walls at any time to gain stealth. Uncrouching or attacking reveals you. !"
      },
      {
        "key": "E",
        "name": "Hand-Eye Coordination",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Tap Ctrl to detach your dagger hand, or hold it to detach an eye. The hand has short range but can use basic attacks and dagger skills. The eye can be used to scout at a much larger range. Press ctrl again or take a hit to stop controlling them. Usin"
      },
      {
        "key": "R",
        "name": "Arm",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "T",
        "name": "Eye",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "Y",
        "name": "Blend In",
        "type": "Attack",
        "cooldown": "20s",
        "damage": "Moderate",
        "description": "Hide for up to six seconds. Attacking reveals you and gives your next hit 50% more damage. Taking damage or pressing again also ends it. Enemies can still hit you and hear your footsteps. !"
      },
      {
        "key": "F",
        "name": "Attacking",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "G",
        "name": "Shank Barrage",
        "type": "Barrage",
        "cooldown": "14s",
        "damage": "Moderate",
        "description": "Slash repeatedly in front of you. Then finish with a heavier slice that knocks targets away and causes Bleed for four seconds. Can be blocked or perfect blocked. !"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Big Mouth Strikes Again?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 9 focus items."
      },
      {
        "q": "Is Big Mouth Strikes Again good for beginner leveling?",
        "a": "Yes, Big Mouth Strikes Again offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 5 focus items.",
    "lore": "Diavolo\u2019s King Crimson erases a span of time, leaving only its results. Epitaph shows him a glimpse of the future, allowing him to avoid a fate others cannot change. Doppio can borrow its arms and Epitaph without revealing the full Stand.",
    "image": "/images/stands/king-crimson-doppio-moveset.webp",
    "combatRole": "Offense",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard King Crimson aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "---",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Executes --- against nearby targets."
      },
      {
        "key": "RMB / R",
        "name": "King Of The Court (Alter Ego)",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "After three Frog Phone calls, the user unleashes King Crimson in its full potential. This switches the users avatar to their ALTER EGO avatar. !"
      },
      {
        "key": "E",
        "name": "Two Identities",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Use ALTER EGO in the character customizer to change your other form\u2019s appearance. At stage 3, hold E to become that form. Hold it out of combat to return to Doppio at stage 0. ! (In character customizer) --- # Moveset:"
      },
      {
        "key": "R",
        "name": "Barrage",
        "type": "Barrage",
        "cooldown": "23s",
        "damage": "Moderate",
        "description": "Hammer the enemy with a two-second barrage of punches. !"
      },
      {
        "key": "T",
        "name": "Chop",
        "type": "Attack",
        "cooldown": "14s",
        "damage": "Moderate",
        "description": "Stun the enemy with a blockable chop to extend a combo. A successful hit recovers twice as fast. Has a 25% chance to cut off their left arm and deal bonus damage. Ends Time Erase. !"
      },
      {
        "key": "Y",
        "name": "Cutting off left arm",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "F",
        "name": "Decree",
        "type": "Attack",
        "cooldown": "22s",
        "damage": "Moderate",
        "description": "An armored, guard-breaking strike that can be parried. Hit from behind to impale the enemy for double damage. Misses recover more slowly. Ends Time Erase. !"
      },
      {
        "key": "G",
        "name": "From behind",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Jonathan Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock King Crimson?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 5 focus items."
      },
      {
        "q": "Is King Crimson good for beginner leveling?",
        "a": "Yes, King Crimson offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items.",
    "lore": "\u201cThis is The World\u2019s true power!\u201d The Stand of DIO. A Close-Range Power Type Stand with immense strength and speed that rivals Star Platinum. its signature ability allows it to stop time completely, allowing DIO to move freely while the universe is frozen.",
    "image": "/images/stands/the-world.webp",
    "combatRole": "Offense",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard The World aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Barrage",
        "type": "Barrage",
        "cooldown": "23s",
        "damage": "Moderate",
        "description": "Unleash a rapid flurry of punches on your opponent. !"
      },
      {
        "key": "RMB / R",
        "name": "Pilot Variant",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "E",
        "name": "Knife Throw [HOLD IN TIMESTOP]",
        "type": "Attack",
        "cooldown": "25s",
        "damage": "Moderate",
        "description": "Throw a volley of knives at your cursor\u2019s position. (Useable with unsummoned stand.) !"
      },
      {
        "key": "R",
        "name": "Timestop Variant",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "T",
        "name": "Hole Puncher",
        "type": "Attack",
        "cooldown": "30s",
        "damage": "Moderate",
        "description": "Time-skip forward and punch a hole clean through your opponent\u2019s guard. !"
      },
      {
        "key": "Y",
        "name": "Head Slam",
        "type": "Attack",
        "cooldown": "15s",
        "damage": "Moderate",
        "description": "Slam the opponent\u2019s head down, leaving an opening for a follow-up. ! ---"
      },
      {
        "key": "F",
        "name": "Tandem Flank [2 Bars]",
        "type": "Attack",
        "cooldown": "45s",
        "damage": "Moderate",
        "description": "You and your Stand barrage from both sides. ! (Heavy isnt part of the move)"
      },
      {
        "key": "G",
        "name": "Stand Jump [1 Bar]",
        "type": "Attack",
        "cooldown": "2s",
        "damage": "Moderate",
        "description": "Use your Stand\u2019s power to launch high into the air. !"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Jonathan Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock The World?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items."
      },
      {
        "q": "Is The World good for beginner leveling?",
        "a": "Yes, The World offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
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
    "obtainMethod": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items.",
    "lore": "# \u201cI\u2019ll be the judge!\u201d The Stand of Jotaro Kujo. One of the most powerful Close-Range Stands, it possesses superhuman senses, strength, and speed. Its overwhelming power is capable of destroying diamonds, and it eventually awakens the ability to stop time.",
    "image": "/images/stands/star-platinum.webp",
    "combatRole": "Offense",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Star Platinum aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "M1 Light Combo & M2 Attack",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "RMB / R",
        "name": "Barrage / Rage Finish [HOLD]",
        "type": "Barrage",
        "cooldown": "23s",
        "damage": "Moderate",
        "description": "Unleash a rapid flurry of punches on your opponent. !"
      },
      {
        "key": "E",
        "name": "Rage Finish (HOLD)",
        "type": "Awakening / EX",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "R",
        "name": "Star Finger",
        "type": "Attack",
        "cooldown": "35s",
        "damage": "Moderate",
        "description": "Extend Star Platinum\u2019s finger to strike from mid-range. ! # Tap: !"
      },
      {
        "key": "T",
        "name": "Hold",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "Y",
        "name": "Ora Smash",
        "type": "Attack",
        "cooldown": "32s",
        "damage": "Moderate",
        "description": "Wind up a heavy ORA punch that sends enemies flying. (Can be held to extend its range.) !"
      },
      {
        "key": "F",
        "name": "Held Variant",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "G",
        "name": "Inhale",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Hold to draw enemies, loose objects and cars toward Star Platinum. The pull stuns without dealing damage, grounds flying enemies, and shakes ripe fruit from trees. !"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Jonathan Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Star Platinum?",
        "a": "Can be awakened using Mysterious Arrows, Lucky Arrows, or Bizarre Arrows. Focus rollable via Part 3 focus items."
      },
      {
        "q": "Is Star Platinum good for beginner leveling?",
        "a": "Yes, Star Platinum offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "obtainMethod": "Awarded upon completing the dedicated research questline from Major Tom and town NPCs.",
    "lore": "Jojosapiens is a powerful Stand possessed by Rohan / Jojo Historian from JoJo's Bizarre Adventure Part 9: The JOJOLands.",
    "image": "/images/stands/jojosapiens.webp",
    "combatRole": "Support",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Jojosapiens aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "Unformed",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Until taking human form, fight as JoJosapiens with your unsummonable unformed self behind you and 15% more incoming damage, returning to this form on death. !"
      },
      {
        "key": "RMB / R",
        "name": "Survey Rush",
        "type": "Attack",
        "cooldown": "9s",
        "damage": "Moderate",
        "description": "Barrage ahead with blockable arcing papers that cover hit player\u2019s screens in survey popups. !"
      },
      {
        "key": "E",
        "name": "Opponent Perspective",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Executes Opponent Perspective against nearby targets."
      },
      {
        "key": "R",
        "name": "Final Answer",
        "type": "Attack",
        "cooldown": "11s",
        "damage": "Moderate",
        "description": "JoJosapiens dashes in and punches the enemy away, breaking their guard and the scenery in its path. !"
      },
      {
        "key": "T",
        "name": "Loose Papers",
        "type": "Attack",
        "cooldown": "6s",
        "damage": "Moderate",
        "description": "Throw up to two paper bundles for 15 seconds each to trip and knock down the first enemy stepping on them, with anyone able to pick them up and throw them elsewhere. !"
      },
      {
        "key": "Y",
        "name": "Questionnare (IN COMBAT)",
        "type": "Attack",
        "cooldown": "20s",
        "damage": "Moderate",
        "description": "Answer a combat JoJo question by clicking one of three answers or pressing its skill key within 8 seconds for 2 Data, starting with three skips and recovering one per three correct answers up to three."
      },
      {
        "key": "F",
        "name": "Correct",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "G",
        "name": "Incorrect",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Jojosapiens?",
        "a": "Awarded upon completing the dedicated research questline from Major Tom and town NPCs."
      },
      {
        "q": "Is Jojosapiens good for beginner leveling?",
        "a": "Yes, Jojosapiens offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
      }
    ],
    "verifiedDate": "2026-11-16"
  },
  {
    "slug": "the-world-alternative-universe",
    "name": "The World: Alternative Universe",
    "canonicalUser": "Diego Brando (AU)",
    "jojoPart": "Part 7: Steel Ball Run",
    "rarity": "Alternative Universe",
    "tier": {
      "pvp": "S+",
      "raid": "S",
      "farming": "A+"
    },
    "status": "Alternative Universe",
    "obtainMethod": "Obtained through Alternative Universe dimensional mechanics and special Diego Brando questline.",
    "lore": "\u201cI, Diego Brando, shall seize the corpse!\u201d The Stand of Diego Brando from Another Universe. A Close-Range Power Type with terrifying precision. it possesses the ability to stop time, allowing Diego to unleash a volley of knives while his opponents are frozen in place.",
    "image": "/images/stands/the-world-alternative-universe.webp",
    "combatRole": "Zoner",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard The World: Alternative Universe aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "M1 Light Combo & M2 Attack",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "RMB / R",
        "name": "Barrage",
        "type": "Barrage",
        "cooldown": "23s",
        "damage": "Moderate",
        "description": "Unleash a rapid flurry of punches on your opponent. !"
      },
      {
        "key": "E",
        "name": "Knife Throw",
        "type": "Attack",
        "cooldown": "25s",
        "damage": "Moderate",
        "description": "Throw two knife volleys toward your cursor, following aim through wind-up and between volleys even while unsummoned. Ability scaling: Damage scales 80% with Strength and 20% with Ability. !"
      },
      {
        "key": "R",
        "name": "Held in Timestop",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "T",
        "name": "Hole Puncher",
        "type": "Attack",
        "cooldown": "30s",
        "damage": "Moderate",
        "description": "Time-skip forward and punch a hole clean through your opponent\u2019s guard. !"
      },
      {
        "key": "Y",
        "name": "Arsenal",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Tap to step back and toss a handful of firecrackers that burst together in the air with a blinding flash, burning enemies and setting off gasoline, or hold with your Stand out to have it throw barbed wire that binds the enemy in front of it or lies o"
      },
      {
        "key": "F",
        "name": "Tap",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "G",
        "name": "Hold",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "! ! --- # EX [Awakening Moves]"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Caesar Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock The World: Alternative Universe?",
        "a": "Obtained through Alternative Universe dimensional mechanics and special Diego Brando questline."
      },
      {
        "q": "Is The World: Alternative Universe good for beginner leveling?",
        "a": "Yes, The World: Alternative Universe offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
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
    "obtainMethod": "Evolved from base Star Platinum by achieving Level 75, completing the Evolution Quest, and fulfilling mastery prerequisites.",
    "lore": "\u201cI\u2019ll be the judge!\u201d The Stand of Jotaro Kujo, now known as Star Platinum: The World. It retains Star Platinum\u2019s strength,speed, and precision, along with the ability to stop time that Jotaro discovered during his fight with DIO.",
    "image": "/images/stands/star-platinum-the-world.webp",
    "combatRole": "Offense",
    "passives": [
      {
        "name": "Stand Mastery",
        "description": "Standard Star Platinum: The World aura boosting physical damage and reducing stun recovery time."
      },
      {
        "name": "Combat Pressure",
        "description": "Consecutive hits build awakening meter 15% faster against blocking opponents."
      }
    ],
    "moveset": [
      {
        "key": "LMB",
        "name": "\u201cI\u2019ll be the judge!\u201d",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "The Stand of Jotaro Kujo, now known as Star Platinum: The World. It  retains Star Platinum\u2019s strength,speed, and precision, along with the ability to stop time that Jotaro discovered during his fight with DIO. ---"
      },
      {
        "key": "RMB / R",
        "name": "Bane of Rats",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Use H to send your Stand to collect a frozen knife, nail, bullet or throwable. Aim and attack to throw a caught projectile back. Click an unheld frozen projectile to punch it in your aiming direction instead. !"
      },
      {
        "key": "E",
        "name": "Punching a projectile away",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "! \u200c"
      },
      {
        "key": "R",
        "name": "Platinum Parry",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "With your stand summoned, hold F. Press m1 to try to catch a projectile or R to deflect it."
      },
      {
        "key": "T",
        "name": "M1",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "!"
      },
      {
        "key": "Y",
        "name": "M2",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "! ---"
      },
      {
        "key": "F",
        "name": "Moveset",
        "type": "Attack",
        "cooldown": "12s",
        "damage": "Moderate",
        "description": "Executes Moveset against nearby targets."
      },
      {
        "key": "G",
        "name": "Ora Blitz",
        "type": "Attack",
        "cooldown": "19s",
        "damage": "Moderate",
        "description": "Send Star Platinum forward in a barrage that carries enemies along. Deflects incoming projectiles. You can punch and use sub-ability skills during the rush, or use it while piloting. !"
      }
    ],
    "abilityScaling": [
      "Every 20 Ability points increases signature move duration by +0.5s.",
      "Ability points scale projectile velocity and hitbox detection radius."
    ],
    "recommendedBuild": {
      "points": {
        "health": 80,
        "damage": 85,
        "ability": 60
      },
      "subAbility": "Hamon (Jonathan Path)",
      "synergyNotes": "Pair with DIO or Jotaro gear sets for maximum damage scaling and ability cooldown reduction."
    },
    "pros": [
      "High baseline damage and reliable combo chains",
      "Exceptional versatility in both 1v1 PvP and Gang Wars",
      "Strong block pressure with guardbreak options"
    ],
    "cons": [
      "High awakening meter cost on critical skills",
      "Punishable recovery frames on missed heavy finishers",
      "Requires strict Ability point investment to optimize"
    ],
    "faqs": [
      {
        "q": "How do I unlock Star Platinum: The World?",
        "a": "Evolved from base Star Platinum by achieving Level 75, completing the Evolution Quest, and fulfilling mastery prerequisites."
      },
      {
        "q": "Is Star Platinum: The World good for beginner leveling?",
        "a": "Yes, Star Platinum: The World offers strong AOE clearing and sustained DPS which accelerates story quests and NPC bounty completion."
      }
    ],
    "verifiedDate": "2026-11-16"
  }
];

export const standsBySlug = Object.fromEntries(stands.map(s => [s.slug, s]));
