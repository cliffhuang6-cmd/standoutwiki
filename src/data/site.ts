export const siteConfig = {
  name: 'Stand Out Wiki',
  shortName: 'Stand Out Wiki',
  domain: 'standoutwiki.org',
  url: 'https://standoutwiki.org',
  contactEmail: 'contact@standoutwiki.org',
  description: 'The definitive independent Wiki, database, tier list, tools, and guides for Roblox STAND OUT by Studio Umbra: Europa.',
  ogImage: 'https://standoutwiki.org/og-image.png',
  logoUrl: 'https://standoutwiki.org/images/brand/stand-out-wiki-logo.webp',
  iconUrl: 'https://standoutwiki.org/images/brand/stand-out-wiki-icon.png',
  author: 'Stand Out Wiki Editorial Team',
  twitterHandle: '@StandOutWiki',
  robloxGameUrl: 'https://www.roblox.com/games/128828638194450/STAND-OUT',
  officialTrelloUrl: 'https://trello.com/b/7IlUxQPN/stand-out-official-trello',
  officialDiscordUrl: 'https://discord.gg/HtBGQUMSTd',
  developerGroupUrl: 'https://www.roblox.com/groups/11477678/Sagetempest-Group#!/about',
  
  // Analytics and Verification Configuration
  analytics: {
    googleAnalyticsId: 'G-P9Q9F4LS71',
    microsoftClarityId: 'zee7d2kwl5',
    googleSearchConsoleVerification: '', // Domain property verified via DNS
    bingWebmasterVerification: '', // Verified via Domain import
    indexNowKey: '9e3bf17482a5490bb59e51cfa82d7031',
  },

  // Indexing switch: controlled explicitly by SITE_INDEXABLE (default false until user explicitly requests open indexing)
  indexable: (typeof process !== 'undefined' && process.env?.SITE_INDEXABLE === 'true') || import.meta.env?.SITE_INDEXABLE === 'true',

  navigation: [
    {
      label: 'Stands',
      href: '/stands/',
      children: [
        { label: 'All Stands Database', href: '/stands/', desc: 'Complete roster with movesets and damage' },
        { label: 'Tier List', href: '/tier-list/', desc: 'Ranked tiers for PvP, Raids & Farming' },
        { label: 'Stand Rarity & Rates', href: '/stand-rarity/', desc: 'Verified drop percentages & pity math' },
        { label: 'Stand Arrows', href: '/stand-arrows/', desc: 'Mysterious, Lucky, Bizarre & Focus arrows' },
        { label: 'Stand Storage', href: '/stand-storage/', desc: "D'Arby chips & slot management" }
      ]
    },
    {
      label: 'Codes',
      href: '/codes/',
      badge: 'Active'
    },
    {
      label: 'Tools',
      href: '/tier-list/',
      children: [
        { label: 'Tier List Ranking', href: '/tier-list/', desc: 'Interactive PvP, Raid, and Farming rankings' },
        { label: 'Arrow Probability Calc', href: '/stand-rarity/#calculator', desc: 'Bernoulli probability odds calculator' },
        { label: 'Stats & Build Maker', href: '/guides/level-up-fast/#build-maker', desc: 'Interactive 225-point stat simulator' },
        { label: 'Rokakaka Mixer & Seeds', href: '/rokakaka/#mixer', desc: '35 mutation formulas & garden seeds' }
      ]
    },
    {
      label: 'Mechanics',
      href: '/items/',
      children: [
        { label: 'Items & Materials', href: '/items/', desc: 'Consumables, crafting and boss drops' },
        { label: 'Accessories & Sets', href: '/accessories/', desc: 'Gear stat bonuses and set synergies' },
        { label: 'Rokakaka Mutations', href: '/rokakaka/', desc: 'Stand reset mechanics & 35 mutations' },
        { label: 'Gardening System', href: '/gardening/', desc: 'Crops, soil, watering & greenhouse' },
        { label: 'Sub-Abilities & Styles', href: '/sub-abilities/', desc: 'Hamon, Vampire & Unarmed mastery' },
        { label: 'Quests & NPCs', href: '/quests/', desc: 'Storyline, bounties, and NPC map' },
        { label: 'Gang System & Base', href: '/gang-wars/', desc: 'Territory, gang perks & base rooms' },
        { label: 'Gamepasses & Shop', href: '/gamepasses/', desc: 'Robux products and slot value' }
      ]
    },
    {
      label: 'Guides',
      href: '/guides/',
      children: [
        { label: 'Guides Hub', href: '/guides/', desc: 'All walkthroughs and progression guides' },
        { label: 'Beginner Guide', href: '/guides/beginner-guide/', desc: 'Starter tutorial & first hour guide' },
        { label: 'Controls Guide', href: '/guides/controls/', desc: 'PC, Mobile touch & Controller keybinds' },
        { label: 'Level Up Fast (1-75)', href: '/guides/level-up-fast/', desc: 'Optimal EXP loop to max level' },
        { label: 'Farm Dalas / Cash', href: '/guides/farm-dalas/', desc: 'Highest payout cash delivery routes' },
        { label: 'Raids & Dungeons', href: '/guides/raids/', desc: 'Train Raid, Highway Star & 77 Rings' },
        { label: 'World Bosses', href: '/guides/bosses/', desc: 'Spawns, mechanics & guaranteed drops' }
      ]
    },
    {
      label: 'Updates',
      href: '/updates/',
      children: [
        { label: 'Patch Notes & Changelog', href: '/updates/', desc: 'Chronological update timeline' },
        { label: 'Official Trello & Links', href: '/trello/', desc: 'Verified developer boards & Discord' },
        { label: 'Release Date & History', href: '/release-date/', desc: 'Launch timeline & upcoming roadmap' },
        { label: 'Game FAQ', href: '/faq/', desc: 'Answers to frequently asked questions' }
      ]
    }
  ],

  footerLinks: [
    {
      title: 'Database',
      links: [
        { label: 'All Stands', href: '/stands/' },
        { label: 'Tier List', href: '/tier-list/' },
        { label: 'Stand Arrows', href: '/stand-arrows/' },
        { label: 'Stand Rarity & Rates', href: '/stand-rarity/' },
        { label: 'Items & Crafting', href: '/items/' },
        { label: 'Accessories & Sets', href: '/accessories/' },
        { label: 'Quests & NPCs', href: '/quests/' }
      ]
    },
    {
      title: 'Systems & Tools',
      links: [
        { label: 'Stand Out Codes', href: '/codes/' },
        { label: 'Rokakaka Mutations', href: '/rokakaka/' },
        { label: 'Gardening Guide', href: '/gardening/' },
        { label: 'Hamon Guide', href: '/hamon/' },
        { label: 'Vampire Guide', href: '/vampire/' },
        { label: 'Stand Storage', href: '/stand-storage/' },
        { label: 'Gang System', href: '/gang-wars/' },
        { label: 'Gamepasses', href: '/gamepasses/' }
      ]
    },
    {
      title: 'Walkthroughs',
      links: [
        { label: 'Beginner Guide', href: '/guides/beginner-guide/' },
        { label: 'Game Controls', href: '/guides/controls/' },
        { label: 'Fast Leveling (1-75)', href: '/guides/level-up-fast/' },
        { label: 'Dalas Farming', href: '/guides/farm-dalas/' },
        { label: 'Raids Walkthrough', href: '/guides/raids/' },
        { label: 'Bosses & Drops', href: '/guides/bosses/' },
        { label: 'Evolving Stands', href: '/guides/evolve-stands/' }
      ]
    },
    {
      title: 'About & Official',
      links: [
        { label: 'About Us', href: '/about/' },
        { label: 'Contact & Feedback', href: '/contact/' },
        { label: 'Privacy Policy', href: '/privacy/' },
        { label: 'Terms of Use', href: '/terms/' },
        { label: 'Update Timeline', href: '/updates/' },
        { label: 'Official Trello & Discord', href: '/trello/' },
        { label: 'Play STAND OUT on Roblox', href: 'https://www.roblox.com/games/128828638194450/STAND-OUT', external: true }
      ]
    }
  ]
};
