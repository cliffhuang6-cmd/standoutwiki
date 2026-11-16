import fs from 'node:fs';

const ITEMS = [
  {
    slug: 'mysterious-arrow',
    name: 'Mysterious Arrow',
    category: 'Arrow',
    description: 'The fundamental golden artifact of STAND OUT. Pierces the user to awaken an initial Stand or reroll an existing one across the full standard rarity pool.',
    obtainMethod: 'Tutorial completion, Story Quests 1 & 4, repeatable NPC bounties, Passione Train Raid drops, and Crafting Station (3x Arrow Parts).',
    image: '/images/arrows/mysterious-arrow.webp',
    rarity: 'Common',
    sellPrice: '$500 Dalas',
    uses: [
      'Awakens a Stand from the full obtainable rarity pool (Rare through Pinnacle: 0.07%).',
      'Rerolls your current active Stand (overwrites previous ability unless stored).',
      'Essential baseline material required for crafting Lucky Arrows and Bizarre Arrows.'
    ]
  },
  {
    slug: 'lucky-arrow',
    name: 'Lucky Arrow',
    category: 'Arrow',
    description: 'An enriched, polished Stand Arrow that completely filters out low-tier rolls. Guarantees Epic rarity or higher, boosting Pinnacle Stand odds to 1.5%.',
    obtainMethod: 'Crafted at Advanced Crafting Bench (1 Mysterious Arrow, 10 Scrap Metal, 3 Gold Ingots) or 90-minute world spawns.',
    image: '/images/arrows/lucky-arrow.webp',
    rarity: 'Legendary',
    sellPrice: '$25,000 Dalas',
    uses: [
      'Guarantees an Epic (42%), Legendary (22%), Mythical (4.5%), or Pinnacle (1.5%) Stand.',
      'Completely eliminates Common and Rare tier outcomes from the roll pool.',
      'Can be combined with Part 3 or Part 5 focus items for targeted summoning.'
    ]
  },
  {
    slug: 'bizarre-arrow',
    name: 'Bizarre Arrow',
    category: 'Arrow',
    description: 'The premier summon artifact in STAND OUT. Offers a staggering 4.4% Pinnacle rate (62x standard) and completely eliminates both Common and Rare pools.',
    obtainMethod: 'Passione Train Raid (Nightmare difficulty MVP chest drop) or Master Forge crafting (3 Lucky Arrows + 1 Meteorite Shard + $50k).',
    image: '/images/arrows/bizarre-arrow.webp',
    rarity: 'Pinnacle',
    sellPrice: '$75,000 Dalas',
    uses: [
      'Highest base Pinnacle drop rate in the game at 4.40% (Star Platinum, The World, King Crimson).',
      'Filters out all Common, Rare, and low-tier Epic filler Stands.',
      'Guaranteed high-tier summon for competitive PvP players and raid speedrunners.'
    ]
  },
  {
    slug: 'part-3-arrow',
    name: 'Mysterious Arrow [Part 3]',
    category: 'Arrow',
    description: 'An ancient arrow inscribed with Egyptian hieroglyphs. Exclusively awakens Stands from JoJo Part 3: Stardust Crusaders, with elevated 5% rates for SP and The World.',
    obtainMethod: 'Specialist Vendor in Cairo Bazaar or crafting with 1 Mysterious Arrow + 1 Cairo Relic.',
    image: '/images/arrows/part-3-arrow.webp',
    rarity: 'Epic',
    sellPrice: '$8,000 Dalas',
    uses: [
      'Restricts the summon banner exclusively to Part 3 Stands (Star Platinum, The World, Silver Chariot, Magician\'s Red, etc.).',
      'Gives a boosted 5.0% individual pull probability for Star Platinum and The World.',
      'Eliminates all Part 4, Part 5, Part 7, Part 8, and Part 9 Stands from the result.'
    ]
  },
  {
    slug: 'part-5-arrow',
    name: 'Mysterious Arrow [Part 5]',
    category: 'Arrow',
    description: 'A golden beetle clings to this arrow\'s head. Exclusively awakens Stands from JoJo Part 5: Golden Wind, featuring a 5% boosted chance for King Crimson.',
    obtainMethod: 'Passione Contraband Caches in Venice or crafting with 1 Mysterious Arrow + 1 Passione Brooch.',
    image: '/images/arrows/part-5-arrow.webp',
    rarity: 'Epic',
    sellPrice: '$8,000 Dalas',
    uses: [
      'Restricts summons strictly to Part 5 Stands (King Crimson, Kraft Work, The Grateful Dead, Beach Boy, Notorious B.I.G).',
      'Grants a boosted 5.0% chance of pulling King Crimson directly.',
      'Ideal for players targeting Diavolo or Sale builds without cross-part dilution.'
    ]
  },
  {
    slug: 'arrow-part',
    name: 'Arrow Part',
    category: 'Material',
    description: 'A fragmented piece of ancient meteorite metal salvaged from world craters or broken arrows. Used as core crafting component for summon arrows.',
    obtainMethod: 'Meteorite strike world events, mining rocky cave deposits, and disassembling duplicate standard arrows.',
    image: '/images/arrows/arrow-part.webp',
    rarity: 'Rare',
    sellPrice: '$200 Dalas',
    uses: [
      'Combine 3x Arrow Parts at any Basic Workbench to forge 1 Mysterious Arrow.',
      'Component in upgrading high-tier crafting stations and repairing meteorite tools.'
    ]
  },
  {
    slug: 'phone',
    name: 'Smartphone',
    category: 'Story',
    description: 'Your primary utility device in STAND OUT. Provides access to Huber taxi fast travel, real-time mini-map GPS navigation, and the Gifts app for promo code redemption.',
    obtainMethod: 'Permanent reward awarded upon completing Storyline Quest 2 from NPC Meryl Mei Qi in Downtown.',
    image: '/images/items/phone.webp',
    rarity: 'Rare',
    sellPrice: 'Non-Sellable (Bound to Account)',
    uses: [
      'Access Huber taxi app to fast travel instantly between discovered districts.',
      'Open GPS Map app to drop live navigation pins on story NPCs and bounty targets.',
      'Open Gifts app to enter active promotional codes and claim free arrows and Dalas.'
    ]
  },
  {
    slug: 'stone-mask',
    name: 'Ancient Stone Mask',
    category: 'Consumable',
    description: 'The Aztec relic crafted by Kars. Consuming or activating this mask at night transforms the user into a Vampire, granting blood siphon, hyper-regeneration, and eye laser beams.',
    obtainMethod: 'Catacombs Crypt raid drop, world boss DIO defeat reward, or Black Market Dealer for $15,000 Dalas.',
    image: '/images/items/stone-mask.webp',
    rarity: 'Legendary',
    sellPrice: '$7,500 Dalas',
    uses: [
      'Transforms the player into a Vampire Sub-Ability user when activated at night.',
      'Unlocks the crimson Blood Bar, Space Ripper Stingy Eyes, and Vaporizing Freeze.',
      'Imposes severe daytime sunlight burning penalties unless protected by a Shadow Cloak.'
    ]
  },
  {
    slug: 'stand-chip',
    name: 'D\'Arby Stand Storage Chip',
    category: 'Stand Chip',
    description: 'A metallic casino poker chip imprinted with Daniel J. D\'Arby\'s soul seal. Allows storing an active Stand into safe storage slots at the casino counter.',
    obtainMethod: 'Purchased from D\'Arby in the Downtown Casino for $2,500 Dalas or awarded via Storyline Quest 4.',
    image: '/images/items/stand-chip.webp',
    rarity: 'Rare',
    sellPrice: '$1,250 Dalas',
    uses: [
      'Deposits your current Stand into one of D\'Arby\'s casino storage slots.',
      'Allows switching between different Stand builds without having to reroll arrows.',
      'Protects high-tier or evolved Stands while experimenting with new banner rolls.'
    ]
  },
  {
    slug: 'steel-ingot',
    name: 'Steel Ingot',
    category: 'Material',
    description: 'Heavy refined steel bar forged in industrial blast furnaces. Fundamental metallurgy material for crafting armor, lucky arrows, and reinforced garden pots.',
    obtainMethod: 'Purchased from Big Chop Lumberyard, mined from Cave ore veins, or scavenged in the Industrial District.',
    image: '/images/items/steel-ingot.webp',
    rarity: 'Common',
    sellPrice: '$350 Dalas',
    uses: [
      'Essential material for crafting Lucky Arrows (3x required per arrow).',
      'Used to forge Heavy Boots and protective armor accessories at workbenches.',
      'Repairs broken gear and workbench structures across your Gang Base.'
    ]
  },
  {
    slug: 'scrap',
    name: 'Scrap Metal',
    category: 'Material',
    description: 'Salvaged automotive and industrial metal fragments. Abundant building material gathered by breaking vehicle wrecks and metal street fixtures.',
    obtainMethod: 'Striking abandoned scrap cars in the Industrial Scrap Yard with heavy Stand attacks or mob drops.',
    image: '/images/items/scrap.webp',
    rarity: 'Common',
    sellPrice: '$50 Dalas',
    uses: [
      'Primary component for Lucky Arrow crafting (10x Scrap Metal required).',
      'Used to construct Basic Workbenches and repair base storage crates.',
      'Can be sold in bulk to the Scrap Merchant for quick pocket cash.'
    ]
  },
  {
    slug: 'wood',
    name: 'Lumber / Wood',
    category: 'Material',
    description: 'Sturdy wooden planks processed from Morioh timber. Used in basic agricultural construction, crate manufacturing, and building repairs.',
    obtainMethod: 'Chopping mature trees with an axe, purchased from Big Chop lumber mill, or found in warehouse pallets.',
    image: '/images/items/wood.webp',
    rarity: 'Common',
    sellPrice: '$40 Dalas',
    uses: [
      'Used to craft Produce Delivery Crates for lettuce and crop export trading.',
      'Required material for building garden plot trellises and workbench bases.'
    ]
  },
  {
    slug: 'glass',
    name: 'Refined Glass',
    category: 'Material',
    description: 'Clear, tempered glass blown from beach sand quartz. Required for crafting produce packaging jars and optical lenses.',
    obtainMethod: 'Smelting sand at the Industrial Furnace or purchased from the Harbor Export Merchant for $100 Dalas.',
    image: '/images/items/glass.webp',
    rarity: 'Common',
    sellPrice: '$60 Dalas',
    uses: [
      'Crafts Empty Glass Jars used to package mature Rokakaka fruits, apples, and tomatoes.',
      'Material used in crafting sniper scopes and optical monocle accessories.'
    ]
  },
  {
    slug: 'apple',
    name: 'Fresh Apple',
    category: 'Consumable',
    description: 'A crisp, sweet apple harvested from orchard trees or garden plots. Restores health over time and cures minor combat exhaustion.',
    obtainMethod: 'Grown from Apple Seeds (18 min growth cycle) or harvested from fruit trees outside town.',
    image: '/images/items/apple.webp',
    rarity: 'Common',
    sellPrice: '$150 Dalas (Raw) / $875 (Packaged Jar)',
    uses: [
      'Restores 35 HP instantly and cleanses mild bleeding status.',
      'Can be packaged into Jars of Apples at the packaging station for 25% profit markup.',
      'Ingredient in brewing high-stamina cider potions.'
    ]
  },
  {
    slug: 'black-umbrella',
    name: 'Black Umbrella',
    category: 'Consumable',
    description: 'A sturdy, water-repellent umbrella. Provides full environmental protection against heavy rain weather and blocks direct sunlight for Vampires.',
    obtainMethod: 'Purchased from the Big Chop general goods store for $800 Dalas.',
    image: '/images/items/black-umbrella.webp',
    rarity: 'Rare',
    sellPrice: '$400 Dalas',
    uses: [
      'Protects Vampire players from burning during daytime while outdoors.',
      'Shields players from torrential rain downpours during Catch The Rainbow weather events.'
    ]
  },
  {
    slug: 'blue-diamond',
    name: 'Blue Diamond',
    category: 'Story',
    description: 'A priceless, flawless blue gemstone smuggled into Morioh. Central objective in the high-stakes heist storyline.',
    obtainMethod: 'Awarded upon completing Storyline Quest 5: The Heist from Meryl Mei Qi.',
    image: '/images/items/blue-diamond.webp',
    rarity: 'Legendary',
    sellPrice: 'Story Quest Item',
    uses: [
      'Turned in to complete Chapter 1 of the main story campaign.',
      'Unlocks the high-tier Passione syndicate reputation tier.'
    ]
  },
  {
    slug: 'lava-rock',
    name: 'Lava Rock',
    category: 'Story',
    description: 'A mysterious volcanic rock imbued with magnetic attraction for valuable items, originating from Hawaii\'s volcanic beaches.',
    obtainMethod: 'Acquired during Storyline Quest 7: Escape with the Diamond in the Harbor district.',
    image: '/images/items/lava-rock.webp',
    rarity: 'Legendary',
    sellPrice: 'Story Quest Item',
    uses: [
      'Story progression key item required to access the Part 9 JOJOLands quest arc.',
      'Passively attracts loose dropped Dalas coins within an 8-stud radius.'
    ]
  },
  {
    slug: 'your-id',
    name: 'Civilian ID Card',
    category: 'Story',
    description: 'Your personal identification card issued by the Morioh Municipal Authority. Proves your residency and unlocks city service checkpoints.',
    obtainMethod: 'Granted during the opening tutorial sequence by the Instructor.',
    image: '/images/items/your-id.webp',
    rarity: 'Common',
    sellPrice: 'Personal Document',
    uses: [
      'Required to pass police roadblocks and board the inter-city subway transit.',
      'Used to open a personal bank vault account at the Central Bank.'
    ]
  },
  {
    slug: 'jodios-id',
    name: 'Jodio\'s ID Document',
    category: 'Story',
    description: 'A forged Hawaii driver\'s license belonging to Jodio Joestar. Essential document used to deceive customs officers.',
    obtainMethod: 'Found in Jodio\'s duffel bag during Storyline Quest 6.',
    image: '/images/items/jodios-id.webp',
    rarity: 'Rare',
    sellPrice: 'Quest Item',
    uses: [
      'Bypasses airport security checkpoints during Part 9 story missions.',
      'Required dialogue trigger with Charming Man in the Harbor.'
    ]
  },
  {
    slug: 'dragonas-id',
    name: 'Dragona\'s ID Document',
    category: 'Story',
    description: 'Official state identification belonging to Dragona Joestar. Used to clear Passione verification gates.',
    obtainMethod: 'Received from Dragona during the Boutique delivery objective.',
    image: '/images/items/dragonas-id.webp',
    rarity: 'Rare',
    sellPrice: 'Quest Item',
    uses: [
      'Key item in the Smooth Operators storyline chapter.',
      'Unlocks discounted prices at high-end fashion boutiques.'
    ]
  },
  {
    slug: 'charming-mans-id',
    name: 'Charming Man\'s ID',
    category: 'Story',
    description: 'A heavily worn identification card belonging to Charming Man, stained with volcanic sand.',
    obtainMethod: 'Recovered after defeating Charming Man\'s disguise in the Mountain caves.',
    image: '/images/items/charming-mans-id.webp',
    rarity: 'Rare',
    sellPrice: 'Quest Item',
    uses: [
      'Unlocks the secret mountain shortcut connecting the Caves to the Harbor.',
      'Required to initiate the Big Mouth Strikes Again combat trial.'
    ]
  },
  {
    slug: 'signed-documents',
    name: 'Signed Passione Contract',
    category: 'Story',
    description: 'Legal real estate documents bearing the signatures of Bruno Bucciarati and Billy, transferring ownership of the local safehouse.',
    obtainMethod: 'Conclude Storyline Quest 3 by interrogating delinquent informants in the alley.',
    image: '/images/items/signed-documents.webp',
    rarity: 'Rare',
    sellPrice: 'Contract Document',
    uses: [
      'Grants permanent free access to the Downtown safehouse storage chests.',
      'Unlocks the repeatable daily bounty board on your Smartphone.'
    ]
  },
  {
    slug: 'mysterious-rock',
    name: 'Mysterious Geode',
    category: 'Material',
    description: 'An unrefined mineral geode cracked open from deep mountain boulders. Radiates a subtle spiritual frequency.',
    obtainMethod: 'Mining sparkling crystal nodes inside the Mountain Caves or deep sewer waterways.',
    image: '/images/items/mysterious-rock.webp',
    rarity: 'Rare',
    sellPrice: '$1,500 Dalas',
    uses: [
      'Can be cut at the Jewelry bench to yield high-grade quartz and opal gemstones.',
      'Component in crafting high-capacity Garden Pots and alchemy crucibles.'
    ]
  },
  {
    slug: 'metal-detector',
    name: 'Handheld Metal Detector',
    category: 'Consumable',
    description: 'Battery-powered metal detection wand. Beeps with increasing frequency when walking over buried scrap, coins, or arrows on sandy terrain.',
    obtainMethod: 'Purchased from the Beachside Harbor Shop for $1,200 Dalas.',
    image: '/images/items/metal-detector.webp',
    rarity: 'Rare',
    sellPrice: '$600 Dalas',
    uses: [
      'Equip on Morioh beaches to uncover buried Dalas envelopes and Arrow Parts.',
      'Finds hidden historical coins used for trade with the Museum Curator.'
    ]
  },
  {
    slug: 'guitar',
    name: 'Acoustic Guitar',
    category: 'Consumable',
    description: 'A six-string acoustic guitar. Equipping the guitar plays rhythmic JoJo melody chords and slowly regenerates stamina for surrounding party members.',
    obtainMethod: 'Purchased at the Downtown Music Emporium for $3,500 Dalas.',
    image: '/images/items/guitar.webp',
    rarity: 'Common',
    sellPrice: '$1,750 Dalas',
    uses: [
      'Performs interactive musical strum animations during downtime.',
      'Provides a +5% passive stamina recovery aura to teammates within 20 studs.'
    ]
  },
  {
    slug: 'pogo-stick',
    name: 'Spring Pogo Stick',
    category: 'Consumable',
    description: 'A high-tension mechanical pogo stick. Compresses on ground contact to launch the rider high into the air, reaching rooftop perches.',
    obtainMethod: 'Purchased from the Toy & Novelty Merchant for $2,000 Dalas.',
    image: '/images/items/pogo-stick.webp',
    rarity: 'Common',
    sellPrice: '$1,000 Dalas',
    uses: [
      'Grants a massive vertical bounce to scale building walls without Stand mobility skills.',
      'Fun utility item for parkour routes across downtown Morioh.'
    ]
  },
  {
    slug: '2x-exp-booster',
    name: '2x EXP Booster (1 Hour)',
    category: 'Consumable',
    description: 'A pressurized booster vial that temporarily doubles all experience gained from quest completions, mob farming, and raid bosses for 60 minutes.',
    obtainMethod: 'Redeemed via promotional codes, awarded on milestone level achievements, or event drops.',
    image: '/images/items/2x-exp-booster.webp',
    rarity: 'Epic',
    sellPrice: '$5,000 Dalas',
    uses: [
      'Doubles character leveling experience gain for 60 continuous minutes.',
      'Stacks multiplicatively with weekend community server EXP events for 3x rates.'
    ]
  },
  {
    slug: '2x-coins-booster',
    name: '2x Dalas Coin Booster (1 Hour)',
    category: 'Consumable',
    description: 'A shimmering golden token that doubles all cash drops, bounty payouts, and produce crate export sales for 60 minutes.',
    obtainMethod: 'Redeemed from promo codes, daily login gifts, or high-tier raid vaults.',
    image: '/images/items/2x-coins-booster.webp',
    rarity: 'Epic',
    sellPrice: '$5,000 Dalas',
    uses: [
      'Doubles all Dalas income earned from lettuce trading, mob drops, and quest rewards for 1 hour.',
      'Optimal booster to activate prior to turning in large batches of greenhouse crates.'
    ]
  }
];

const output = `import type { Item } from '../types';

export const items: Item[] = ${JSON.stringify(ITEMS, null, 2)};

export const itemsBySlug = new Map(items.map((i) => [i.slug, i]));

export const itemsByCategory = items.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = [];
  }
  acc[item.category].push(item);
  return acc;
}, {} as Record<string, Item[]>);
`;

fs.writeFileSync('src/data/items.ts', output, 'utf8');
console.log(`Successfully generated src/data/items.ts with all ${ITEMS.length} verified items!`);
