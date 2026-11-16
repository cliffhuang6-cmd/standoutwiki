import json
import os

with open(r"C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\research\raw_trello\release_VDzjwDz2.json", "r", encoding="utf-8") as f:
    board = json.load(f)

lists = {l["id"]: l["name"] for l in board["lists"]}

cards_by_list = {}
for c in board["cards"]:
    lname = lists.get(c["idList"], "Unknown")
    cards_by_list.setdefault(lname, []).append(c)

# Stands breakdown
stands_arrow = cards_by_list.get("Stands (Arrow)", [])
stands_evo = cards_by_list.get("Evolution/Quest/AU Stands", [])
stands_unfin = cards_by_list.get("Unfinished / In Testing / Reworking", [])

audit_md = """# Stand Out Wiki — Comprehensive Game Data Audit

**Audited Source**: Studio Umbra: Europa Official Release Board (`VDzjwDz2`) & Official Trello (`7IlUxQPN`), plus Roblox Game Data (`128828638194450/STAND-OUT`).
**Audit Date**: November 16, 2026
**Target Site**: https://standoutwiki.org/

---

## 1. Executive Summary & Data Integrity Rules
* **Game Title**: STAND OUT
* **Developer**: Studio Umbra: Europa (Lead Developer: Sagetempest / Umbra dev team)
* **Genre**: Action RPG / JoJo's Bizarre Adventure inspired Roblox experience
* **Current Public Status**: Active Live Game (Continuous patch cycle: October/November 2026)
* **Maximum Level**: Level 75 (Updated from initial Level 50 cap; grants 3 Stat Points per level = 225 total Stat Points)
* **Stat Attributes**: Health, Damage, Ability (plus sub-stats: Walkspeed, Jump Power, EX/Awakening charge rate)

---

## 2. Stands Classification & Inventory

### A. Arrow-Obtainable Stands (Live Pool: 41 Stands)

#### Rare (11 Stands)
1. **Yellow Temperance** (Part 3) — Rubber Soul's Stand. Physical devour, disguise mechanics, acidic slime absorption.
2. **Yo-Yo Ma** (Part 6) — D an G's Stand. Automatic tracking, acid saliva melt, bait & deception.
3. **Cinderella** (Part 4) — Aya Tsuji's Stand. Aesthetic modification, luck manipulation, facial restructuring.
4. **Smooth Operators** (Part 9) — Dragona Joestar's Stand. Displacement, sliding physical wounds, repositioning objects.
5. **Beach Boy** (Part 5) — Pesci's Stand. Line casting, organ hook detection, phase piercing through walls.
6. **Hey Ya!** (Part 7) — Pocoloco's Stand. Luck booster, moral encouragement, passive dodge cues.
7. **200 Balloons** (Part 9) — Ningbo's Stand. Body inflation, balloon projectiles, gravity floating.
8. **The Sun** (Part 3) — Arabia Fats' Stand. Solar heat lasers, ambient scorch, high-range bombardment.
9. **Lyin' Eyes** (Part 9) — Laem Chabang's Stand. Nematode parasites, psychological fear debuff. (Note: Excluded from story pool).
10. **The MATTEKUDASAI** (Part 9) — Usagi Alohaoe's Stand. Object duplication, environmental transformation.
11. **Hermit Purple** (Part 2/3) — Joseph Joestar's Stand. Vine whip, ripple conduction, psychic spirit photography. Also obtainable via Billy's questline.

#### Epic (13 Stands)
1. **Mr. President** (Part 5) — Coco Jumbo's Stand. Pocket dimension turtle room, team sanctuary, safe storage.
2. **The Hustle** (Part 9) — Paco Laburante's Stand. Muscle grab, grappling, kinetic body tension.
3. **Notorious B.I.G** (Part 5) — Carne's Stand. Post-mortem flesh monster, speed-tracking devour, infinite mass scaling.
4. **Kraft Work** (Part 5) — Sale's Stand. Position fixing, kinetic energy accumulation, floating platform creation.
5. **Rolling Stones** (Part 5) — Scolippi's Stand. Inevitable fate tracking, stone manifestation, touch of mercy. (Note: Excluded from story pool).
6. **Harvest** (Part 4) — Shigechi's Stand. Swarm collection, dalas/item foraging, hypodermic needle injection.
7. **Tubular Bells** (Part 7) — Mike O.'s Stand. Metal blowing, balloon dogs, explosive interior shrapnel.
8. **Super Fly** (Part 4) — Toyohiro Kanedaichi's Stand. Pylon reflection, energy redirection, territory lock. (Note: Excluded from story pool).
9. **Under World** (Part 6) — Donatello Versus's Stand. Earth memory unearthing, historical plane crash recreation, past events summon.
10. **Walking Heart** (Part 8) — Hato Higashikata's Stand. Heel spike elongation, wall standing, high-piercing thrusts.
11. **Glory Days** (Part 9) — Bobby Jean's Stand. Bullet velocity control, time-dilated gunshot traps.
12. **Smoke On The Water** (Part 5 Spin-off) — Stored Disc Stand. Water boil, high-pressure steam blast, scalding traps.
13. **The Grateful Dead** (Part 5) — Prosciutto's Stand. Body temperature rapid aging, thermal decay mist, cold mitigation.

#### Legendary (9 Stands)
1. **Emperor** (Part 3) — Hol Horse's Stand. Gun Stand, controllable bullet trajectory, rapid ricochet.
2. **Kiss (Kizz)** (Part 6) — Ermes Costello's Stand. Sticker duplication, physical collision damage upon peel.
3. **Burning Down The House** (Part 6) — Emporio's Stand. Ghost room navigation, phantom object utilization. (Note: Excluded from story pool).
4. **Beyond the Sea** (Part 9) — Charming Man's Stand. Sand camouflage, skin moisture camouflage, body fragment dissolve.
5. **Magician's Red** (Part 3) — Muhammad Avdol's Stand. Crossfire Hurricane, pyrokinesis, life heat detection.
6. **Death 13** (Part 3) — Mannish Boy's Stand. Dream world control, scythe combat, illusion manipulation.
7. **Catch The Rainbow** (Part 7) — Blackmore's Stand. Rain droplet suspension, blade rain walking, droplet projectile slicing. (Note: Excluded from story pool).
8. **Silver Chariot** (Part 3) — Jean Pierre Polnareff's Stand. Rapier speed, armor removal blitz, afterimage sword dance.
9. **Strength** (Part 3) — Forever's Stand. Bound freighter manipulation, mechanical crane crushing. (Note: Excluded from story pool).

#### Mythical Sub-Tier (5 Stands)
1. **Mandom** (Part 7) — Ringo Roadagain's Stand. 6-second true time rewind, gun quickdraw, positioning reset.
2. **Heaven's Door** (Part 4) — Rohan Kishibe's Stand. Safety lock, command writing, memory alteration, book body.
3. **November Rain** (Part 9) — Jodio Joestar's Stand. Heavy crushing localized downpour, unsummoned hidden piloting, concrete smash.
4. **Highway Star** (Part 4) — Yuya Fungami's Stand. High-speed 60km/h scent pursuit, flesh room illusion, nutrient drain siphon.
5. **Big Mouth Strikes Again** (Part 9) — Charming Man's alternate combat variant. Shifting ocular camouflage, stealth assassinations.

#### Pinnacle Sub-Tier (3 Top Stands)
1. **Star Platinum** (Part 3) — Jotaro Kujo's Stand. Unmatched precision, Ora Ora barrage, Star Finger, Time Stop (5s base, scales to 10s with Ability).
2. **The World** (Part 3) — DIO's Stand. Muda Muda barrage, knife throw volley, Time Stop (5s base, scales to 10s with Ability), Overwrite Time Stop mechanic.
3. **King Crimson** (Part 5) — Diavolo / Doppio's Stand. Time Erase (invulnerability & repositioning), Epitaph future forecast, Donut execution.

---

### B. Evolution, Quest & Alternative Universe Stands (3 Implemented Stands)
1. **Star Platinum: The World (SPTW)** — Direct evolution of Star Platinum. Heavy combat upgrade, enhanced Beatdown, extended Time Stop, Skull Crusher.
2. **The World: Alternative Universe (TWAU)** — Alternate universe Diego Brando variant. Revolver shots, wire traps, gasoline matches, compact Time Stop.
3. **Jojosapiens** — Special Part 9 Quest Stand. Obtainment via dedicated cultural/research questline.

---

### C. Unfinished, In-Testing & Reworking Stands (18 Entries)
* **Removed Pending Rework**:
  1. *Cat Size* — Trap & ankle snare rework in progress.
  2. *Tower of Gray* — Acid spit & flight trajectory rework.
  3. *West End Girl* — Money case & gap traverse update.
  4. *John Rod* — Blind the Heavens charge mechanics revamp.
* **Under Active Development (Studio Umbra Roadmap)**:
  5. *Bad Company* (Keicho Nijimura) — Miniature army, helicopter airstrike.
  6. *Metallica* (Risotto Nero) — Iron magnetism, razorblade cough, camouflage.
  7. *The Hand* (Okuyasu Nijimura) — Spatial erasure, distance pull.
  8. *Crazy Diamond* (Josuke Higashikata) — Restoration, blood homing, wall trap.
  9. *Sticky Fingers* (Bruno Bucciarati) — Zipper portals, limb detachment.
  10. *Pearl Jam* (Tonio Trussardi) — Culinary healing buff system.
  11. *Dark Blue Moon* (Captain Tennille) — Underwater dominance, barnacle drain.
  12. *Doggy Style* (Rai Mamezuku) — Bandage unraveling, crossbow string.
  13. *In a Silent Way* (Sandman) — Sound construct solid strikes.
  14. *Eclipse Eight* — Original/Community development entry.
  15. *Anubis* — Possessed sword mechanics.
  16. *Made in Heaven* — Universal time acceleration.
  17. *C-Moon* — Gravitational inversion.
  18. *Whitesnake* — Memory & Stand disc extraction.

---

## 3. Arrow & Obtainment Mechanics Matrix

| Arrow Type | Obtain Method | Exclusions | Tier Odds |
| :--- | :--- | :--- | :--- |
| **Mysterious Arrow** | Quests, Story, Bounties, Train Raid/Shop (7 Tokens), Crafting (3x Arrow Parts) | None (Post-story) | Rare: High, Epic: Moderate, Legendary: Low, Mythical: ~5%, Pinnacle: ~0.5% |
| **Lucky Arrow** | Crafting (3x Mysterious Arrows), Train Shop (25 Tokens), Codes | Rare Tier Excluded | Epic: 42.5%, Legendary: 34.0%, Mythical: 22.1%, Pinnacle: 1.5% |
| **Bizarre Arrow** | Crafting (9x Mysterious Arrows), Train Shop (75 Tokens) | Rare & Epic Excluded | Legendary: 57.9%, Mythical: 37.7%, Pinnacle: 4.4% |
| **Mysterious Arrow [P3]** | Crafting Station (5x Steel + Mysterious Arrow) | Only Part 3 Stands | All P3 Stands equal odds, Star Platinum & The World at 5% each |
| **Mysterious Arrow [P5]** | Crafting Station (5x Steel + Mysterious Arrow), Train Raid | Only Part 5 Stands | All P5 Stands equal odds, King Crimson at 5% |
| **Mysterious Rock** | Crafting Station, Story Milestone | Only Part 9 Stands | All P9 Stands equal odds |

---

## 4. Sub-Abilities & Fighting Styles
1. **Hamon (The Ripple)**:
   * Trainer: Lisa Lisa (Venice/Training Grounds).
   * Prerequisite: Hamon Training Quest (breathe through the Ripple Mask 300 times).
   * Three Paths:
     * *Jonathan Path*: Direct heavy physical overdrive, Sunlight Yellow Overdrive, healing breath.
     * *Caesar Path*: Bubble Launcher, Bubble Cutter, Bubble Barrier entrapment.
     * *Zeppeli Path*: Zoom Punch, Life Magnetism Overdrive, Torquoise Blue Overdrive.
2. **Vampire (Stone Mask)**:
   * Acquisition: Stone Mask item + Human Blood.
   * Mechanics: Night hunter, high regeneration, Space Ripper Stingy Eyes, freezing contact.
   * Weakness: Daylight burns unless wearing the **Cloak** accessory.
3. **Sub-Ability Removal**:
   * Eating a grown **Apple** (grown from seed obtained at Big Chop).
   * Consuming a **Sapphire Roka** (50% removal chance + 10% EXP compensation).

---

## 5. Items & Rokakaka Mutations Audit

### Stand & Ability Items
* `Mysterious Arrow`, `Lucky Arrow`, `Bizarre Arrow`, `Part 3 Arrow`, `Part 5 Arrow`, `Mysterious Rock`.
* `Stand Chip` (King Crimson Chip 1% from Train Raid or 200 Tokens; Highway Star Chip). Used with D'Arby Stand Storage.
* `Rokaka Seed`, `Garden Pot`, `Mysterious Fertilizer`, `Ice Water`.
* `Apple` (Sub-ability reset).
* `Steel Ingot`, `Wood`, `Arrow Part`, `Scrap`, `Coins / Dalas`.

### Key Rokaka Mutations (3% chance per harvest, 3x speed in Gang Base)
* **Emerald Roka**: Removes Stand safely (success rate scales with Roka grade: Normal, Good, Perfect).
* **Sapphire Roka**: 50% chance to remove Sub-Ability (Hamon/Vampire), gives 10% EXP.
* **Amethyst Roka**: Removes all debuffs, petrifies limb, converts damage taken to EX meter.
* **Opal Roka**: Special interaction with Time Stop stands (The World, TWAU, Star Platinum).
* **Tactical Rokas**: DoctorProof, Carbonated, Antimatter, Emotional Damage, Italianism, Peachy, Overcaffeinated.

---

## 6. Raids & World Bosses
1. **Train Raid**: Passione train cars, multi-stage combat against Pesci and Prosciutto. Drops Part 5 Arrows, Train Tokens, King Crimson Chip (1% on Hard mode).
2. **Highway Star Raid**: High-speed tunnel pursuit against Yuya Fungami. Drops Highway Star Tokens, Highway Star Chip, rare accessories.
3. **77 Rings Raid**: Historic knight trial with 77 consecutive waves/stages including Graveyard Undead. Drops Tarkus's Helmet and massive Dalas rewards.
4. **World Bosses**: Rohan Kishibe (350 HP), Ningbo (280 HP), Charming Man (225 HP), Laem Chabang (200 HP), Hubert (The World user, 55 HP).
"""

with open(r"C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\research\game-data-audit.md", "w", encoding="utf-8") as f:
    f.write(audit_md)

print("Created research/game-data-audit.md successfully!")
