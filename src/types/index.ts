export type Rarity = 'Rare' | 'Epic' | 'Legendary' | 'Mythical' | 'Pinnacle' | 'Evolution' | 'Quest' | 'Alternative Universe';
export type StandStatus = 'Playable' | 'Evolution' | 'Quest' | 'In Testing' | 'Rework Pending' | 'Unreleased' | 'Alternative Universe';
export type TierRank = 'Z' | 'S+' | 'S' | 'A+' | 'A' | 'B' | 'C';

export interface Move {
  key: string; // 'LMB' | 'RMB' | 'E' | 'R' | 'T' | 'Y' | 'F' | 'G' | 'H' | 'V' | 'B' | 'C' | 'X' | 'Z'
  name: string;
  type: 'Attack' | 'Barrage' | 'Heavy' | 'Utility' | 'Movement' | 'Awakening / EX' | 'Counter' | 'Passive';
  cooldown?: string;
  damage?: string;
  exCost?: string;
  description: string;
  blockable?: boolean;
  parriable?: boolean;
}

export interface Stand {
  slug: string;
  name: string;
  canonicalUser: string;
  jojoPart: string;
  rarity: Rarity;
  tier: {
    pvp: TierRank;
    raid: TierRank;
    farming: TierRank;
  };
  status: StandStatus;
  obtainMethod: string;
  lore: string;
  image: string;
  poseImage?: string;
  combatRole: 'Offense' | 'Zoner' | 'Support' | 'Disruption' | 'Speed / Hit-and-Run' | 'Tank' | 'Utility';
  passives: {
    name: string;
    description: string;
  }[];
  moveset: Move[];
  abilityScaling?: string[];
  recommendedBuild: {
    points: {
      health: number;
      damage: number;
      ability: number;
    };
    subAbility: string;
    synergyNotes: string;
  };
  pros: string[];
  cons: string[];
  faqs: {
    q: string;
    a: string;
  }[];
  verifiedDate: string;
}

export interface Code {
  code: string;
  reward: string;
  status: 'Active' | 'May Be Expired' | 'Expired';
  isNewServerOnly: boolean;
  addedDate: string;
  lastCheckedDate?: string;
  expiryDate?: string;
  evidenceSource?: string;
  notes: string;
}

export interface NavChild {
  label: string;
  href: string;
  desc?: string;
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: NavChild[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface Item {
  slug: string;
  name: string;
  category: 'Arrow' | 'Consumable' | 'Material' | 'Story' | 'Stand Chip';
  description: string;
  obtainMethod: string;
  rarity?: string;
  image?: string;
  sellPrice?: string;
  uses: string[];
}

export interface Accessory {
  slug: string;
  name: string;
  bonuses: {
    health?: number;
    damage?: number;
    ability?: number;
    special?: string;
  };
  setBonus?: {
    setName: string;
    requiredPieces: string[];
    effect: string;
  };
  dropsFrom: string;
  image?: string;
}

export interface Quest {
  slug: string;
  title: string;
  npc: string;
  category: 'Storyline' | 'Sub-Ability' | 'Side Quest' | 'Daily Quest' | 'Bounty';
  location: string;
  prerequisites?: string;
  objectives: string[];
  rewards: {
    dalas?: number;
    exp?: number;
    items?: string[];
    stand?: string;
  };
}

export interface RokaMutation {
  name: string;
  slug: string;
  effect: string;
  removesStand?: boolean;
  removesSubAbility?: boolean;
  stoneLimbPenalty: string;
  specialNotes?: string;
}

export interface UpdateLog {
  date: string;
  title: string;
  summary: string;
  changes: string[];
  bugFixes?: string[];
}

export interface GuideSection {
  id: string;
  title: string;
  content: string;
  steps?: string[];
  tips?: string[];
  warning?: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface Guide {
  slug: string;
  title: string;
  category: 'Starter' | 'Combat & Moves' | 'Progression' | 'Endgame & Raids' | 'Economy';
  description: string;
  readingTime: string;
  updatedDate: string;
  tableOfContents: { id: string; title: string }[];
  sections: GuideSection[];
}
