import type { RokaMutation } from '../types';

export const rokaMutations: RokaMutation[] = [
  {
    name: 'Emerald Roka',
    slug: 'emerald-roka',
    effect: 'Completely strips and removes your current active Stand, resetting your Stand slot.',
    removesStand: true,
    stoneLimbPenalty: 'None upon successful consumption.',
    specialNotes: 'Removal success rate scales with Roka Quality (Normal: 60%, Good: 85%, Perfect: 100%).'
  },
  {
    name: 'Sapphire Roka',
    slug: 'sapphire-roka',
    effect: 'Has a 50% chance to purge and remove your Sub-Ability (Hamon or Vampire).',
    removesSubAbility: true,
    stoneLimbPenalty: 'None.',
    specialNotes: 'Grants +10% of your current level EXP bar even if sub-ability removal fails. Cannot be bottled.'
  },
  {
    name: 'Amethyst Roka',
    slug: 'amethyst-roka',
    effect: 'Instantly purges all harmful status effects (Bleed, Burn, Poison, Freeze) and fills EX Awakening meter.',
    stoneLimbPenalty: 'Turns a random limb to stone for 15s (Higher grades reduce stone penalty duration).',
    specialNotes: 'Favored in PvP clutch scenarios to restore mode meter under intense debuff pressure.'
  },
  {
    name: 'Opal Roka',
    slug: 'opal-roka',
    effect: 'Special interaction with Time Stop Stands (The World, TWAU, Star Platinum). Grants temporal stability.',
    stoneLimbPenalty: 'Temporary stone arm (-10% attack speed for 10s).',
    specialNotes: 'Reduces enemy Time Stop movement penalty by 50% for 60 seconds.'
  },
  {
    name: 'DoctorProof Roka',
    slug: 'doctorproof-roka',
    effect: 'Rapidly regenerates 65% of max HP over 5 seconds and grants temporary poison immunity.',
    stoneLimbPenalty: 'Turns left leg to stone (reduced sprint speed for 8s).',
    specialNotes: 'Higher gardening grade grants full resistance to The Grateful Dead aging mist.'
  },
  {
    name: 'Carbonated Roka',
    slug: 'carbonated-roka',
    effect: 'Fills user with bubbling kinetic energy, boosting dash distance and jump height by 40%.',
    stoneLimbPenalty: 'Slight stone torso stiffness.',
    specialNotes: 'Synergizes with aerial Stands like Catch the Rainbow and Walking Heart.'
  },
  {
    name: 'Antimatter Roka',
    slug: 'antimatter-roka',
    effect: 'Creates a localized gravitational collapse around the user, knocking back all surrounding opponents.',
    stoneLimbPenalty: 'Severe stone limb penalty for 12s.',
    specialNotes: 'Functions as a panic burst break against infinite combo loops.'
  },
  {
    name: 'Emotional Damage Roka',
    slug: 'emotional-damage-roka',
    effect: 'Inflicts psychological confusion on the last player who damaged you, reversing their movement controls.',
    stoneLimbPenalty: 'Crying facial stone mask for 6s.',
    specialNotes: 'Humorous Easter egg mutation with legitimate competitive disruption capability.'
  },
  {
    name: 'Attractive Roka',
    slug: 'attractive-roka',
    effect: 'Draws loose nearby item drops, coins, and fruit directly toward your character inventory within 50 studs.',
    stoneLimbPenalty: 'Magnetic stone skin.',
    specialNotes: 'Highly useful when farming large mob camps or raid arenas.'
  },
  {
    name: 'Italianism Roka',
    slug: 'italianism-roka',
    effect: 'Boosts physical strike damage by 20% and plays expressive accordion music.',
    stoneLimbPenalty: 'Right hand locks into an Italian hand gesture stone pose.',
    specialNotes: 'Applies bonus scaling to Passione Stand movesets (Kraft Work, Beach Boy).'
  },
  {
    name: 'Overcaffeinated Roka',
    slug: 'overcaffeinated-roka',
    effect: 'Reduces all cooldowns by 30% for 15 seconds, allowing high-tempo ability rotation.',
    stoneLimbPenalty: 'Shaking stone limbs resulting in slight camera jitter.',
    specialNotes: 'Requires high health to absorb the recoil after effect expires.'
  },
  {
    name: 'Personal Space Roka',
    slug: 'personal-space-roka',
    effect: 'Projects an invisible 8-stud barrier that pushes melee attackers away.',
    stoneLimbPenalty: 'Body turns to porous pumice stone.',
    specialNotes: 'Top-tier defensive consumable against close-range rushdown Stands.'
  },
  {
    name: 'Peachy Roka',
    slug: 'peachy-roka',
    effect: 'Cleanse and regeneration fruit. Cures all status debuffs and grants steady HP regen.',
    stoneLimbPenalty: 'Mild petrification of cheeks and jaw.',
    specialNotes: 'Standard high-grade medical exchange.'
  },
  {
    name: 'Too Hot Roka',
    slug: 'too-hot-roka',
    effect: 'Sets user on holy fire, granting fire attack properties to all light attacks for 20s.',
    stoneLimbPenalty: 'Obsidian stone arms that radiate smoke.',
    specialNotes: 'Synergizes with Magician\'s Red and Hamon fire scaling.'
  },
  {
    name: 'Rero Rero Roka',
    slug: 'rero-rero-roka',
    effect: 'Grants extreme projectile accuracy and ricochet tracking for 30s.',
    stoneLimbPenalty: 'Tongue petrifies into a rolling cherry shape.',
    specialNotes: 'Huge buff for Emperor, TWAU, and Johnny nail shots.'
  }
];
