# Stand Out Wiki — Data Conflict Audit & Resolution Matrix

This internal document audits and resolves discrepancies found across the official Trello release boards (`7IlUxQPN` and `VDzjwDz2`), developer announcements (Studio Umbra: Europa), community reports, and the three competitor wikis (`standout.wiki`, `stand-out.site`, and `roblox-standout.wiki`).

---

## 1. Stand Count Discrepancies (48 vs 53 vs 62)

### The Conflict
* **standout.wiki** reports **48 Stands** in its primary database.
* **stand-out.site** reports **53 Stands** across its tier lists and filters.
* **Official Trello Boards (`7IlUxQPN` / `VDzjwDz2`)** list **62 entries** across various development categories.

### Root Cause Analysis
* **Live Arrow Pool**: Exactly **41 Stands** are currently obtainable via standard Stand Arrows (11 Rare, 13 Epic, 9 Legendary, 5 Mythical sub-tier, 3 Pinnacle sub-tier). King Crimson has two moveset forms (Doppio / Full).
* **Evolution, Quest & AU Stands**: Exactly **3 implemented Stands** are obtained through evolution or quests rather than basic arrow rolls:
  * `Star Platinum: The World` (SPTW) — Evolution of Star Platinum
  * `The World: Alternative Universe` (TWAU) — Alternate Universe variant
  * `Jojosapiens` — Quest Stand
  * Note: `Hermit Purple` appears in both the Rare arrow pool and has a dedicated questline via Billy.
* **Live Playable Total**: $41 \text{ (Arrow)} + 3 \text{ (Non-Arrow)} = 44\text{ to }45$ fully playable Stands.
* **In Testing / Reworking / Unreleased**: **18-19 entries** exist in the official Trello "Unfinished / In Testing / Reworking" list:
  * Removed from arrow pool pending reworks: *John Rod*, *Tower of Gray*, *West End Girl*, *Cat Size*.
  * In active testing/development: *Bad Company*, *Metallica*, *The Hand*, *Crazy Diamond*, *Sticky Fingers*, *Pearl Jam*, *Dark Blue Moon*, *Doggy Style*, *In a Silent Way*, *Eclipse Eight*, *Anubis*, *Made in Heaven*, *C-Moon*, *Whitesnake*, *Zeppeli Hamon*.
* Competitors arrived at 48 or 53 by either including some of the reworked/tested stands (such as Cat Size, Tower of Gray, West End Girl) without explicitly declaring their unplayable/removed status, or splitting multi-mode characters (King Crimson Doppio vs Full).

### Authoritative Stand Out Wiki Resolution
We implement a multi-tiered data model:
1. **Playable Live Stands (44 Stands)**: Filterable, ranked in Tier Lists, with complete verified movesets and damage numbers.
2. **Evolution & Quest Stands**: Tagged with distinct obtainment badges (Evolution, Quest, AU).
3. **In Testing / Rework / Upcoming (18 Stands)**: Documented with their official status tag (`In Testing`, `Rework Pending`, or `Unreleased`), moveset previews where available from developer cards, and clearly separated from live drop tables so players are never misled.

---

## 2. Codes Status & Server Verification

### The Conflict
* Some sites mark `HUGE100K` and `RELEASE` as active codes.
* Other sites report `SORRY4SHUTDOWN` and `50KLIKES` as the only confirmed live codes.
* Many players report codes failing with "Code does not exist" or "Expired".

### Root Cause Analysis
* **Server Version Gating ("New Servers Only")**: The Studio Umbra developers frequently push codes that only register in server instances booted *after* the deployment timestamp. `50KLIKES` and `HUGE100K` were explicitly announced as "new servers only". Players entering valid codes into older servers receive a false failure.
* **Delayed Activation**: `SORRY4SHUTDOWN` was announced before the server restart script executed, leading to a 45-minute window where players could not redeem it.
* **Specific Deadlines**: `THANKYOUHUGERELEASETHANKS` had a strict 24-hour expiration window announced on Discord, expiring on November 15, 2026.
* **Upcoming Likes Goal**: "100K likes for the next code" is a developer milestone announcement; `HUGE100K` was circulated as an unconfirmed leak rather than an officially confirmed live code.

### Authoritative Stand Out Wiki Resolution
We classify all codes with explicit status chips and instructional alerts:
* **Active (Confirmed)**: `SORRY4SHUTDOWN` (Shutdown compensation), `50KLIKES` (3x Lucky Arrow, 2,500 Dalas — requires fresh server).
* **Unconfirmed**: `HUGE100K` (1x Bizarre Arrow), `RELEASE` (3x Mysterious Arrows). Marked with orange warning chip explaining "Server dependent / Unconfirmed".
* **Expired**: `THANKYOUHUGERELEASETHANKS` (Expired Nov 15, 2026), `PLAYTEST` (10x Mysterious Arrows).
* Provide a direct guide on how to join a fresh server and note the prerequisite of obtaining the Phone from Meryl Mei Qi in Story Quest 2.

---

## 3. Arrow Probabilities & Focus Arrow Mathematics

### The Conflict
* Third-party sites often make up arbitrary drop percentages (e.g. 1% for every Stand) or claim Mysterious Arrow has an exact 0.1% Star Platinum rate.
* Lack of distinction between **Rarity Tier roll chance** vs **Individual Stand roll chance**.

### Root Cause Analysis
* The developers published explicit mathematical relationships on Trello:
  * **Lucky Arrow**: Explicitly excludes Rare stands. Card text: *"Its pinnacle chance matches getting at least one Pinnacle from 3 regular arrows."* Published Lucky Arrow Pinnacle rate = **1.5%**.
  * Solving $1 - (1 - p)^3 = 0.015 \implies (1 - p)^3 = 0.985 \implies 1 - p \approx 0.99497 \implies p \approx 0.005$ (**0.5%** base Pinnacle chance on Mysterious Arrow).
  * **Bizarre Arrow**: Explicitly excludes Rare and Epic stands. Card text: *"Its Pinnacle chance matches getting at least one Pinnacle from 9 regular arrows."* Calculating $1 - (1 - 0.005)^9 = 1 - 0.9558 = 4.42\% \approx \mathbf{4.4\%}$, which exactly matches the published rate table.
  * **Focus Arrows**:
    * `Mysterious Arrow [Part 5]`: Rolls only Part 5 Stands with equal odds, except **King Crimson which is locked at 5%**.
    * `Mysterious Arrow [Part 3]`: Rolls only Part 3 Stands with equal odds, except **The World and Star Platinum locked at 5% each**.
    * `Mysterious Rock`: Rolls only Part 9 Stands with equal odds.

### Authoritative Stand Out Wiki Resolution
* The **Arrow Probability Calculator** uses the exact Bernoulli trials formula $P(\ge 1) = 1 - (1 - p)^n$.
* Tiers:
  * Mysterious Arrow: Rare, Epic, Legendary, Mythical, Pinnacle (Base rates: Pinnacle ~0.5%, with tiers dividing remaining probability).
  * Lucky Arrow: Epic 42.5%, Legendary 34.0%, Mythical 22.1%, Pinnacle 1.5%.
  * Bizarre Arrow: Legendary 57.9%, Mythical 37.7%, Pinnacle 4.4%.
* Clear disclaimer: Individual Stand rates within a tier are distributed equally among that tier's available pool, unless explicitly overridden by focus arrows (e.g. 5% KC/TW/SP).

---

## 4. Storyline Progression Arrow Pool Lock

### The Conflict
* Players frequently complain about not being able to roll certain Stands despite using hundreds of arrows.
* Some wikis fail to mention the story progression lock entirely.

### Root Cause Analysis
* Studio Umbra implemented an internal safety check on arrow pools to prevent new players from being softlocked with Stands that have no combat/leveling capability.
* Excluded before beating the main story:
  1. *Super Fly* (Tower lock)
  2. *Rolling Stones* (Automatic/non-combat)
  3. *Cinderella* (Utility/appearance)
  4. *Burning Down The House* (Room utility)
  5. *Catch The Rainbow* (Weather dependent)
  6. *Strength* (Bound ship)
  7. *Lyin' Eyes* (Added Nov 14, 2026)

### Authoritative Stand Out Wiki Resolution
* Clearly document the "Pre-Storyline Arrow Pool" vs "Post-Storyline Arrow Pool" across all Stand pages, Arrow guide, and Beginner guide.
