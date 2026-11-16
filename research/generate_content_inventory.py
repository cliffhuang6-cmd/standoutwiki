import os

content_inv = """# Stand Out Wiki — Master Content Inventory

**Target Domain**: `https://standoutwiki.org/`
**Total Planned Live Pages**: 80+ comprehensive indexable routes + interactive utilities.
**Content Quality Standard**: Verified facts, developer damage scaling, keybinds, full movesets, zero generic filler text.

---

## 1. Hub & System Core Pages (18 Pages)
1. `/` — Home Page: Hero, quick search, featured Stands, active codes, starter pathways, patch highlights, tools showcase.
2. `/codes/` — Stand Out Codes: Live verified codes, unconfirmed, expired, one-click copy, redemption guide.
3. `/stands/` — All Stands Database: Interactive multi-facet filter (Rarity, JoJo Part, Status, Tier, Combat Type).
4. `/tier-list/` — Stand Out Tier List: Dynamic 3-mode rankings (PvP, Raids/PvE, Farming) with criteria explanations.
5. `/stand-rarity/` — Stand Rarity & Drop Rates: Verified tier chances, mysterious arrow odds, developer formulas.
6. `/stand-arrows/` — Stand Arrows: Full guide on Mysterious, Lucky, Bizarre, Part 3, Part 5, Mysterious Rock.
7. `/quests/` — Quests & NPCs: Complete world directory of quest-givers, requirements, and rewards.
8. `/items/` — Items & Materials: Consumables, crafting components, boss drops, and currencies.
9. `/accessories/` — Accessories & Gear Sets: Flat stat increases, set bonuses (DIO, Jotaro, Enrico, SWAT, D'Arby).
10. `/sub-abilities/` — Sub-Abilities Hub: Overview of fighting styles, removal rules, and build synergies.
11. `/hamon/` — Hamon (The Ripple): Lisa Lisa quest, breathing test, Jonathan, Caesar, and Zeppeli skill trees.
12. `/vampire/` — Vampire (Stone Mask): Blood thirst mechanics, night regeneration, daylight protection (Cloak).
13. `/rokakaka/` — Rokakaka Fruit: Resetting stands/sub-abilities and 35 verified Roka mutations.
14. `/gardening/` — Gardening & Crop System: Seed types, pots, soil, water, growth stages, gang base greenhouse.
15. `/stand-storage/` — Stand Storage: D'Arby Stand Chips, storage slots, character slot unlocks.
16. `/gamepasses/` — Gamepasses & Robux Shop: Character slots, Stand arrow bundles, fast travel.
17. `/gang-wars/` — Gang System & Base Rooms: Gang creation, territory, base upgrades, 3x Roka growing room.
18. `/guides/` — Guides Hub: Central index of all beginner, leveling, farming, boss, and raid walkthroughs.

---

## 2. Stand Detail Pages (`/stands/[slug]/`)
Each Stand detail page provides:
* Entity Header: JoJo Part, Canon User, Rarity Tier, Current In-Game Status.
* In-Game Visual: Render / pose screenshot.
* Obtainment: Detailed requirements, arrow pools, or questline steps.
* Moveset Table: Keybind (E, R, T, Y, F, G, H, V, B, C, X, Z), move name, base cooldown, damage scaling, guardbreak/parry status, and EX cost.
* Passives & Mechanics: Unique gauge mechanics, mode activation, pilot mode controls.
* Ability Stat Scaling: Verified bonuses per point invested into the Ability stat.
* Recommended Builds: Stat point distribution (Health / Damage / Ability), synergistic sub-abilities, and gear sets.
* PvP, Raid & Farming Analysis: Matchup strengths, combo chains, counter-picks, and playstyle advice.
* Pros & Cons Breakdown.
* FAQ Section.

### Complete Documented Stand Roster (44 Live Playable Entries)
1. `/stands/star-platinum/` (Pinnacle - Part 3)
2. `/stands/the-world/` (Pinnacle - Part 3)
3. `/stands/king-crimson/` (Pinnacle - Part 5)
4. `/stands/star-platinum-the-world/` (Evolution - Part 4)
5. `/stands/the-world-alternative-universe/` (Alternative Universe - Part 7)
6. `/stands/jojosapiens/` (Quest - Part 9)
7. `/stands/november-rain/` (Mythical - Part 9)
8. `/stands/highway-star/` (Mythical - Part 4)
9. `/stands/mandom/` (Mythical - Part 7)
10. `/stands/heavens-door/` (Mythical - Part 4)
11. `/stands/big-mouth-strikes-again/` (Mythical - Part 9)
12. `/stands/kraft-work/` (Epic - Part 5)
13. `/stands/the-hustle/` (Epic - Part 9)
14. `/stands/notorious-big/` (Epic - Part 5)
15. `/stands/rolling-stones/` (Epic - Part 5)
16. `/stands/harvest/` (Epic - Part 4)
17. `/stands/tubular-bells/` (Epic - Part 7)
18. `/stands/super-fly/` (Epic - Part 4)
19. `/stands/under-world/` (Epic - Part 6)
20. `/stands/walking-heart/` (Epic - Part 8)
21. `/stands/glory-days/` (Epic - Part 9)
22. `/stands/smoke-on-the-water/` (Epic - Part 5 Spin-off)
23. `/stands/the-grateful-dead/` (Epic - Part 5)
24. `/stands/mr-president/` (Epic - Part 5)
25. `/stands/emperor/` (Legendary - Part 3)
26. `/stands/kiss/` (Legendary - Part 6)
27. `/stands/burning-down-the-house/` (Legendary - Part 6)
28. `/stands/beyond-the-sea/` (Legendary - Part 9)
29. `/stands/magicians-red/` (Legendary - Part 3)
30. `/stands/death-13/` (Legendary - Part 3)
31. `/stands/catch-the-rainbow/` (Legendary - Part 7)
32. `/stands/silver-chariot/` (Legendary - Part 3)
33. `/stands/strength/` (Legendary - Part 3)
34. `/stands/yellow-temperance/` (Rare - Part 3)
35. `/stands/yo-yo-ma/` (Rare - Part 6)
36. `/stands/cinderella/` (Rare - Part 4)
37. `/stands/smooth-operators/` (Rare - Part 9)
38. `/stands/beach-boy/` (Rare - Part 5)
39. `/stands/hey-ya/` (Rare - Part 7)
40. `/stands/200-balloons/` (Rare - Part 9)
41. `/stands/the-sun/` (Rare - Part 3)
42. `/stands/lyin-eyes/` (Rare - Part 9)
43. `/stands/the-mattekudasai/` (Rare - Part 9)
44. `/stands/hermit-purple/` (Rare/Quest - Part 2/3)

---

## 3. Dedicated Walkthrough Guides (`/guides/[slug]/`)
1. `/guides/beginner-guide/` — Stand Out Beginner Guide: First hour, UI, controls, quests, leveling.
2. `/guides/controls/` — Stand Out Controls: Full keybind guide for PC, Mobile touch layout, and Console.
3. `/guides/level-up-fast/` — How to Level Up Fast: Optimal EXP routes from Level 1 to Level 75.
4. `/guides/farm-dalas/` — How to Farm Dalas: High-yield cash farming, bounty loops, lettuce trade deliveries.
5. `/guides/first-stand/` — How to Get Your First Stand: Tutorial breakdown, mysterious arrows, and reroll etiquette.
6. `/guides/lucky-arrows/` — How to Get Lucky Arrows: Crafting requirements, train shop tokens, codes.
7. `/guides/bizarre-arrows/` — How to Get Bizarre Arrows: 9x arrow merge, high-tier drop optimization.
8. `/guides/star-platinum/` — How to Get Star Platinum: Drop rates, Part 3 focus arrows, pity calculation.
9. `/guides/the-world/` — How to Get The World: Obtainment methods, time stop overwrite mechanics.
10. `/guides/king-crimson/` — How to Get King Crimson: Part 5 focus arrows, train raid drop table.
11. `/guides/evolve-stands/` — How to Evolve Stands: Star Platinum to SPTW evolution step-by-step.
12. `/guides/sptw/` — Complete SPTW Guide: Questline, evolution requirements, optimal PvP build.
13. `/guides/twau/` — Complete TWAU Guide: Alternate universe obtainment, revolver/trap playstyle.
14. `/guides/raids/` — Stand Out Raids Guide: Train Raid, Highway Star Raid, and 77 Rings dungeon.
15. `/guides/bosses/` — Stand Out Bosses Guide: Spawns, mechanics, and guaranteed drop items.
16. `/guides/storyline/` — Storyline Walkthrough: Quests 1 through 10, required items, and milestones.
17. `/guides/crafting/` — Crafting Guide: Crafting Station locations, materials (Steel, Wood, Scrap), recipes.
18. `/guides/gardening/` — Gardening Walkthrough: Seed growth cycles, fertilizer stacking, mutation triggers.

---

## 4. Updates, Community & Legal Pages
1. `/updates/` — Full Update Timeline & Changelogs: Chronological patch notes, balance adjustments.
2. `/trello/` — Official Links Hub: Verified Trello boards, Studio Umbra Discord, Roblox game URL.
3. `/release-date/` — Release Date & Roadmap: Game development history, milestone releases.
4. `/faq/` — Frequently Asked Questions: Stand removal, storage, teaming i-frames, time-stop rules.
5. `/about/` — About Stand Out Wiki: Independent community initiative, database methodology.
6. `/contact/` — Contact & Corrections: Feedback submission channel.
7. `/privacy/` — Privacy Policy: Compliant disclosure for modern web standards.
8. `/terms/` — Terms of Use: Independent fan site terms & Roblox community guidelines disclaimer.
9. `/404/` — Custom 404 Error Page: Helpful search suggestions and navigation.
"""

with open(r"C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\research\content-inventory.md", "w", encoding="utf-8") as f:
    f.write(content_inv)

print("Created research/content-inventory.md successfully!")
