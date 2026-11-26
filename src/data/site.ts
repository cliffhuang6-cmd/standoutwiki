import type { NavItem, FooterColumn } from '../types';

export const siteConfig: {
  name: string;
  shortName: string;
  domain: string;
  url: string;
  contactEmail: string;
  description: string;
  ogImage: string;
  logoUrl: string;
  iconUrl: string;
  author: string;
  twitterHandle: string;
  analytics: {
    googleAnalyticsId: string;
    microsoftClarityId: string;
    googleSearchConsoleVerification: string;
    bingWebmasterVerification: string;
    indexNowKey: string;
  };
  indexable: boolean;
  navigation: NavItem[];
  footerLinks: FooterColumn[];
} = {
  name: 'Stand Out Wiki',
  shortName: 'Stand Out Wiki',
  domain: 'standoutwiki.org',
  url: 'https://standoutwiki.org',
  contactEmail: 'contact@standoutwiki.org',
  description: 'Stand Out Wiki – Explore Roblox STAND OUT stands, movesets, tier lists, codes, arrow drop rates, items, and guides. Independent fan-made resource.',
  ogImage: 'https://standoutwiki.org/og-image.png',
  logoUrl: 'https://standoutwiki.org/images/brand/stand-out-wiki-logo.webp',
  iconUrl: 'https://standoutwiki.org/images/brand/stand-out-wiki-icon.png',
  author: 'Stand Out Wiki Editorial Team',
  twitterHandle: '@StandOutWiki',
  
  // Analytics and Verification Configuration
  analytics: {
    googleAnalyticsId: 'G-P9Q9F4LS71',
    microsoftClarityId: 'zee7d2kwl5',
    googleSearchConsoleVerification: '', // Domain property verified via DNS
    bingWebmasterVerification: '', // Verified via Domain import
    indexNowKey: '9e3bf17482a5490bb59e51cfa82d7031',
  },

  // Indexing switch: released for production indexing. Disabled only if SITE_INDEXABLE === 'false'
  indexable: (typeof process !== 'undefined' && process.env?.SITE_INDEXABLE === 'false') ? false : (import.meta.env?.SITE_INDEXABLE === 'false' ? false : true),

  navigation: [
    {
      label: 'Stands',
      href: '/stands/',
      children: [
        { label: 'All Stands Database', href: '/stands/', desc: 'Complete 55-Stand roster with movesets and stats' },
        { label: 'Best Stands by Role', href: '/best-stands/', desc: 'Top PvP 1v1, Raids, PvE & Starter recommendations' },
        { label: 'Stand Evolution Guide', href: '/guides/evolve-stands/', desc: 'SPTW & TWAU awakening requirements' },
        { label: 'Arrows & Drop Rates', href: '/stand-arrows/', desc: 'Mysterious, Lucky, Bizarre & Focus rates' },
        { label: 'Stand Rarity & Pity Math', href: '/stand-rarity/', desc: 'Verified drop percentages & pity math' },
        { label: 'Stand Storage', href: '/stand-storage/', desc: "D'Arby chips & slot management" }
      ]
    },
    {
      label: 'Tier List',
      href: '/tier-list/',
      badge: 'Ranked'
    },
    {
      label: 'Codes',
      href: '/codes/',
      badge: 'Active'
    },
    {
      label: 'Items & Systems',
      href: '/items/',
      children: [
        { label: 'Items & Materials (32)', href: '/items/', desc: 'Consumables, crafting, Pluck parts and boss drops' },
        { label: 'Catalog & Supporter Perks', href: '/catalog/', desc: '7 Creator ranks & Heaven\'s Door Prime unlock' },
        { label: 'Stats & Ability Scaling', href: '/stats/', desc: 'Max Level 75 scaling, HP/DMG curves & builds' },
        { label: 'Quests & NPC Directory (82)', href: '/quests/', desc: '54 Chapters, 12 side quests & 13 bounties' },
        { label: 'Rokakaka Mutations', href: '/rokakaka/', desc: 'Stand reset mechanics & 33 mutations' },
        { label: 'Accessories & Sets (62)', href: '/accessories/', desc: 'Gear stat bonuses and 8 set synergies' },
        { label: 'Gardening System', href: '/gardening/', desc: 'Crops, soil, watering & greenhouse' },
        { label: 'Sub-Abilities & Styles', href: '/sub-abilities/', desc: 'Hamon, Vampire & Unarmed mastery' },
        { label: 'Badges Database (3)', href: '/badges/', desc: 'LEGENDARY Top 10, BETA #3 & DAY ONE badges' },
        { label: 'Gang System & Territory', href: '/gang-wars/', desc: '3rd Gang Plot, baseless raids & perks' },
        { label: 'Gamepasses & Shop', href: '/gamepasses/', desc: 'Robux products, pricing & Free Builder unlock' }
      ]
    },
    {
      label: 'Tools',
      href: '/tools/',
      children: [
        { label: 'Stand Comparison Tool', href: '/tools/compare/', desc: 'Compare 2-3 Stands side-by-side with full movesets' },
        { label: 'Tools Hub Directory', href: '/tools/', desc: 'All interactive calculators & simulators' },
        { label: 'Arrow Probability Calc', href: '/tools/#calculator', desc: 'Bernoulli probability odds calculator' },
        { label: '225-Point Build Maker', href: '/tools/#build-maker', desc: 'Max Level 75 stat simulator' },
        { label: 'Rokakaka Mutation Mixer', href: '/tools/#mixer', desc: '33 mutation formulas & garden seeds' }
      ]
    },
    {
      label: 'Guides',
      href: '/guides/',
      children: [
        { label: 'Guides Hub (36)', href: '/guides/', desc: 'All walkthroughs and progression guides' },
        { label: 'Bad Company Rework', href: '/guides/bad-company-rework/', desc: 'Nov 24 squad overhaul, 180-stud Maneuver & Airstrike' },
        { label: 'Storyline Walkthrough', href: '/guides/storyline/', desc: 'Full 54-chapter campaign walkthrough' },
        { label: 'Highway Star Raid Guide', href: '/guides/highway-star-raid/', desc: 'Tunnel chase, Yuya boss & loot table' },
        { label: '77 Rings Raid Guide', href: '/guides/77-rings-raid/', desc: 'Tarkus & DIO boss strategies' },
        { label: 'Side Quests Guide', href: '/guides/side-quests/', desc: 'All 12 optional missions & rewards' },
        { label: 'Daily Bounties Guide', href: '/guides/bounties/', desc: '13 Wanted targets, mechanics & bounties' },
        { label: 'Secret Stands & Unlocks', href: '/guides/secret-stands/', desc: 'Alternative Universe, Jojosapiens & Prime' },
        { label: 'Combat Mechanics & Parry', href: '/guides/combat-mechanics/', desc: '0.12s parry window, posture & combos' },
        { label: 'Beginner Guide', href: '/guides/beginner-guide/', desc: 'Starter tutorial & first hour guide' },
        { label: 'Controls & Keybinds', href: '/guides/controls/', desc: 'PC, Mobile touch & Controller keybinds' },
        { label: 'Level Up Fast (1-75)', href: '/guides/level-up-fast/', desc: 'Optimal EXP loop to max level' },
        { label: 'Ranked Mode & ELO', href: '/guides/ranked-mode/', desc: '1v1 arena rules & Dolly Dagger unlock' },
        { label: 'Car Tuning & Garage', href: '/guides/car-tuning/', desc: 'Vehicle upgrades, armor & self-destruct' }
      ]
    }
  ],

  footerLinks: [
    {
      title: 'Stands & Strategy',
      links: [
        { label: 'All Stands Database', href: '/stands/' },
        { label: 'Best Stands by Role', href: '/best-stands/' },
        { label: 'Stand Comparison Tool', href: '/tools/compare/' },
        { label: 'PvP & PvE Tier List', href: '/tier-list/' },
        { label: 'Stand Evolution Guide', href: '/guides/evolve-stands/' },
        { label: 'Arrows & Drop Rates', href: '/stand-arrows/' },
        { label: 'Stand Rarity & Pity', href: '/stand-rarity/' },
        { label: 'Stand Storage', href: '/stand-storage/' }
      ]
    },
    {
      title: 'Game Systems & Items',
      links: [
        { label: 'Stand Out Codes', href: '/codes/' },
        { label: 'Stand Out Badges (3)', href: '/badges/' },
        { label: 'Items & Materials (32)', href: '/items/' },
        { label: 'Catalog Ranks & Rewards', href: '/catalog/' },
        { label: 'Stats & Ability Scaling', href: '/stats/' },
        { label: 'Quests & NPC Directory', href: '/quests/' },
        { label: 'Rokakaka Mutations', href: '/rokakaka/' },
        { label: 'Accessories & Sets (62)', href: '/accessories/' },
        { label: 'Gardening System', href: '/gardening/' },
        { label: 'Sub-Abilities & Styles', href: '/sub-abilities/' },
        { label: 'Gang Wars & Territory', href: '/gang-wars/' },
        { label: 'Gamepasses & Shop', href: '/gamepasses/' }
      ]
    },
    {
      title: 'Guides & Walkthroughs',
      links: [
        { label: 'Bad Company Rework Guide', href: '/guides/bad-company-rework/' },
        { label: 'Full Storyline Walkthrough', href: '/guides/storyline/' },
        { label: 'Highway Star Raid Guide', href: '/guides/highway-star-raid/' },
        { label: '77 Rings Raid Guide', href: '/guides/77-rings-raid/' },
        { label: 'Side Quests & Bounties', href: '/guides/side-quests/' },
        { label: 'Secret Stands & Unlocks', href: '/guides/secret-stands/' },
        { label: 'Combat Mechanics & Parry', href: '/guides/combat-mechanics/' },
        { label: 'Beginner Starter Guide', href: '/guides/beginner-guide/' },
        { label: 'Game Controls & Keybinds', href: '/guides/controls/' },
        { label: 'Fast Leveling (1-75)', href: '/guides/level-up-fast/' },
        { label: 'Ranked Mode Guide', href: '/guides/ranked-mode/' },
        { label: 'Raids & Dungeons', href: '/guides/raids/' },
        { label: 'World Bosses & Drops', href: '/guides/bosses/' }
      ]
    },
    {
      title: 'About & Information',
      links: [
        { label: 'Tools Directory', href: '/tools/' },
        { label: 'About Us', href: '/about/' },
        { label: 'Contact & Feedback', href: '/contact/' },
        { label: 'Privacy Policy', href: '/privacy/' },
        { label: 'Terms of Service', href: '/terms/' },
        { label: 'Patch Notes & Updates', href: '/updates/' },
        { label: 'Trello Board Directory', href: '/trello/' },
        { label: 'Game FAQ', href: '/faq/' }
      ]
    }
  ]
};
