import type { RokaMutation } from '../types';

export const rokaMutations: RokaMutation[] = [
  {
    name: 'Emerald Roka',
    slug: 'emerald-roka',
    effect: 'Removes your Stand completely. Success probability scales with the harvested fruit grade (Normal: 60%, Good: 85%, Perfect: 100%).',
    removesStand: true,
    stoneLimbPenalty: 'None upon successful consumption.',
    specialNotes: 'Primary method to safely reroll a Stand without using storage chips.'
  },
  {
    name: 'Sapphire Roka',
    slug: 'sapphire-roka',
    effect: 'Offers a 50% chance to cleanse your active Sub-Ability (Hamon or Vampire). Grants +10% EXP bar refund even if removal fails.',
    removesSubAbility: true,
    stoneLimbPenalty: 'None upon successful consumption.',
    specialNotes: 'Cannot be brewed into splash throwable potions. Preserves your current Stand.'
  },
  {
    name: 'Amethyst Roka',
    slug: 'amethyst-roka',
    effect: 'Instantly purges all active harmful combat debuffs and recharges awakening/mode resource meters instead of raw health points.',
    stoneLimbPenalty: 'Turns a body part to stone temporarily. Higher fruit grades reduce petrification duration.',
    specialNotes: 'Strategic tool for raid DPS rotations.'
  },
  {
    name: 'Peridot Roka',
    slug: 'peridot-roka',
    effect: 'Allows choosing one of your two Sub-Ability skills to reroll into an alternate base move from the same fighting discipline without duplicates.',
    removesSubAbility: false,
    stoneLimbPenalty: 'Minor limb calcification lasting 8 seconds.',
    specialNotes: 'Requires having both an active Stand and an unlocked Sub-Ability style.'
  },
  {
    name: 'Opal Roka',
    slug: 'opal-roka',
    effect: 'Catalyzes pinnacle Stand evolution: affects Star Platinum (to SPTW) and The World (to TWAU). Grants a 10% chance to evolve to counterpart, 10% chance to lose Stand, otherwise unchanged.',
    stoneLimbPenalty: 'Full-body petrification during the 10-second transformation cutscene.',
    specialNotes: 'Requires character to reach Level 50+ before consuming.'
  },
  {
    name: 'Attractive Roka',
    slug: 'attractive-roka',
    effect: 'Organic pheromone mutation. Petrifies skin tissue into stone while restoring critical HP and cleansing active bleed effects.',
    stoneLimbPenalty: 'Skin calcification temporarily slowing movement speed by 15%.',
    specialNotes: 'Equivalent exchange converts dermal softness into hardened stone.'
  },
  {
    name: 'Carbonated Roka',
    slug: 'carbonated-roka',
    effect: 'Effervescent sparkling mutation. Trades temporary joint stiffness for a high-velocity toxin purge and immediate stamina refill.',
    stoneLimbPenalty: 'Leg petrification causing brief sprint lockout.',
    specialNotes: 'Produces audible fizzy sound effects upon consumption.'
  },
  {
    name: 'DoctorProof Roka',
    slug: 'doctorproof-roka',
    effect: 'Medicinal antiviral botanical strain. Petrifies a random extremity while curing all poison, blind, and burning damage over time.',
    stoneLimbPenalty: 'One arm petrifies to stone for 12 seconds.',
    specialNotes: 'Provides complete immunity to poison ticks during petrification.'
  },
  {
    name: 'Antimatter Roka',
    slug: 'antimatter-roka',
    effect: 'Volatile dark-matter cellular mutation. Induces severe arm stone calcification to instantly reset negative combat modifiers.',
    stoneLimbPenalty: 'Heavy arm petrification disabling light attacks for 10 seconds.',
    specialNotes: 'High-risk, high-reward cleanse for intense PvP encounters.'
  },
  {
    name: 'Emotional Damage Roka',
    slug: 'emotional-damage-roka',
    effect: 'Psychological shock strain. Inflicts arm numbness and stone weight while restoring 40% maximum HP.',
    stoneLimbPenalty: 'Upper body partial petrification.',
    specialNotes: 'Humorous community-named mutation with verified Trello statistics.'
  },
  {
    name: 'Expired Roka',
    slug: 'expired-roka',
    effect: 'Fermented over-matured strain. Clears negative statuses and heals health, but carries heavy stone penalties due to over-ripeness.',
    stoneLimbPenalty: 'Extended stone duration lasting up to 20 seconds on lower grades.',
    specialNotes: 'Occurs when ripe crops sit unharvested past their peak window.'
  },
  {
    name: 'Fabulous Roka',
    slug: 'fabulous-roka',
    effect: 'Ornamental crystalline strain. Transforms one arm into decorative stone while providing rapid complete health recovery.',
    stoneLimbPenalty: 'Decorative crystal-stone forearm petrification.',
    specialNotes: 'Distinctive sparkling particle effect on the petrified limb.'
  },
  {
    name: 'Italianism Roka',
    slug: 'italianism-roka',
    effect: 'Culinary-infused Mediterranean strain. Rich restorative purge with concentrated lower-limb petrification.',
    stoneLimbPenalty: 'Leg turns to stone, restricting mobility for 10 seconds.',
    specialNotes: 'Passione faction agricultural specialty crop.'
  },
  {
    name: 'Peachy Roka',
    slug: 'peachy-roka',
    effect: 'Sweet tropical variation. Gentle stone calcification accompanied by steady health regeneration over 15 seconds.',
    stoneLimbPenalty: 'Mild localized skin petrification.',
    specialNotes: 'One of the smoothest exchanges with minimal combat interference.'
  },
  {
    name: 'Overcaffeinated Roka',
    slug: 'overcaffeinated-roka',
    effect: 'Hyperactive neural strain. Increases heart rate and reaction speed while petrifying an arm to cleanse stagger.',
    stoneLimbPenalty: 'Arm petrification with jittery camera shake.',
    specialNotes: 'Boosts attack startup speed for non-petrified limbs.'
  },
  {
    name: 'Personal Space Roka',
    slug: 'personal-space-roka',
    effect: 'Repelling aura fruit. Petrifies extremities while clearing nearby enemy debuffs and pulse-knocking back aggressive attackers.',
    stoneLimbPenalty: 'Torso stone crust with reduced dodge distance.',
    specialNotes: 'Generates a micro shockwave upon consumption.'
  },
  {
    name: 'Questionable Dragon Roka',
    slug: 'questionable-dragon-roka',
    effect: 'Scaled exotic mutation. Draconic stone scales harden across the body while healing severe combat trauma.',
    stoneLimbPenalty: 'Heavy dragon-scaled stone armor with -20% walkspeed.',
    specialNotes: 'Grants flat +10% physical damage resistance while stone scales persist.'
  },
  {
    name: 'Root Vision Roka',
    slug: 'root-vision-roka',
    effect: 'Botanical sensory strain. Petrifies eyes/facial features in exchange for acute health recovery and curing blindness.',
    stoneLimbPenalty: 'Facial stone crust temporarily darkening screen edges.',
    specialNotes: 'Reveals hidden outline silhouettes of nearby enemies through walls.'
  },
  {
    name: 'Salty Roka',
    slug: 'salty-roka',
    effect: 'Mineral-crusted briny strain. Dehydrating petrification trading bodily moisture for an instant status wipe.',
    stoneLimbPenalty: 'Brine-stone crust stiffening limb joints.',
    specialNotes: 'Found more frequently when pots are placed near coastal sands.'
  },
  {
    name: 'Slippery Roka',
    slug: 'slippery-roka',
    effect: 'Low-friction fluid fruit. Smooth calcification minimizing joint penalties while healing major injuries.',
    stoneLimbPenalty: 'Polished smooth stone limb with reduced grip.',
    specialNotes: 'Reduces slip and knockdown duration from enemy throws.'
  },
  {
    name: 'Seed Machine Roka',
    slug: 'seed-machine-roka',
    effect: 'High-fertility agricultural strain. Petrifies an arm while yielding 2 to 3 guaranteed bonus seeds upon harvest.',
    stoneLimbPenalty: 'Arm petrification lasting 14 seconds.',
    specialNotes: 'Essential mutation for agricultural farmers expanding crop plots.'
  },
  {
    name: 'Shrinking Roka',
    slug: 'shrinking-roka',
    effect: 'Compressive cellular mutation. Compact stone trade-off granting total negative effect purge.',
    stoneLimbPenalty: 'Lower torso petrification with reduced character hitbox size.',
    specialNotes: 'Slightly compresses player character scale during duration.'
  },
  {
    name: 'Sourpuss Roka',
    slug: 'sourpuss-roka',
    effect: 'Ultra-acidic citrus strain. Puckering jaw petrification while purging corrosive acid and burn effects.',
    stoneLimbPenalty: 'Head and jaw petrification disabling voice/sound cues.',
    specialNotes: 'Effective tactical counter against Purple Haze or Magician\'s Red burns.'
  },
  {
    name: 'Squeaky Clean Roka',
    slug: 'squeaky-clean-roka',
    effect: 'Detergent-pure sterile strain. Completely scrubs all poison, bleed, and burning while petrifying a body part.',
    stoneLimbPenalty: 'Single limb clean stone petrification.',
    specialNotes: 'Removes 100% of lingering damage-over-time debuffs instantly.'
  },
  {
    name: 'Sticky Roka',
    slug: 'sticky-roka',
    effect: 'Viscous adhesive strain. Heavy stone weight penalty with long-lasting regeneration buffer.',
    stoneLimbPenalty: 'Adhesive stone crust slowing dash recovery frames.',
    specialNotes: 'Heals an additional +15% HP over 10 seconds post-consumption.'
  },
  {
    name: 'Stinky Roka',
    slug: 'stinky-roka',
    effect: 'Pungent sulfur mutation. Obnoxious odor paired with effective physical trauma healing and stone trade-off.',
    stoneLimbPenalty: 'Sulfuric stone crust with visible green vapor.',
    specialNotes: 'Nearby NPCs and hostile mob AI react with momentary hesitation.'
  },
  {
    name: 'Suspiciously Healthy Roka',
    slug: 'suspiciously-healthy-roka',
    effect: 'Overly pristine mutation. Rapid organic exchange healing critical wounds at the cost of limb calcification.',
    stoneLimbPenalty: 'Leg petrification causing temporary limp animation.',
    specialNotes: 'Instantly restores 65% HP, one of the highest healing yields.'
  },
  {
    name: 'Brain Freeze Roka',
    slug: 'brain-freeze-roka',
    effect: 'Sub-zero cryo mutation. Cryogenic petrification numbing pain and cleansing status effects.',
    stoneLimbPenalty: 'Frosted stone limb with shivering idle animation.',
    specialNotes: 'Grants temporary immunity to incoming freeze or chill stuns.'
  },
  {
    name: 'Bunch of Me Roka',
    slug: 'bunch-of-me-roka',
    effect: 'Cellular multiplying strain. Rapid tissue reconstruction with distributed stone crystallization.',
    stoneLimbPenalty: 'Scattered stone patches across multiple limbs.',
    specialNotes: 'Produces temporary decoy stone illusions upon taking hits.'
  },
  {
    name: 'Crackling Roka',
    slug: 'crackling-roka',
    effect: 'Bio-electric static mutation. Sparking stone crust trading limb reaction for instant purge.',
    stoneLimbPenalty: 'Static-charged stone forearm with slight recoil.',
    specialNotes: 'Emits harmless electric spark particles.'
  },
  {
    name: 'Couch Potato Roka',
    slug: 'couch-potato-roka',
    effect: 'Sedentary heavy strain. Heavy leg calcification while maximizing passive health recovery.',
    stoneLimbPenalty: 'Full leg petrification locking character in stationary position for 6s.',
    specialNotes: 'Best consumed behind solid cover or inside safe zones.'
  },
  {
    name: 'Rero Rero Roka',
    slug: 'rero-rero-roka',
    effect: 'Cherry-flavored spiraling strain. Nodular tongue and arm petrification with complete status purge.',
    stoneLimbPenalty: 'Arm turns into cherry-nodular stone.',
    specialNotes: 'Tribute mutation referencing Kakyoin\'s signature cherry technique.'
  },
  {
    name: 'Too Hot Roka',
    slug: 'too-hot-roka',
    effect: 'Thermal volcanic strain. Burning stone calcification trading cooling for absolute freeze/stun break.',
    stoneLimbPenalty: 'Smoldering volcanic stone arm with heat haze.',
    specialNotes: 'Instantly shatters any active freeze or petrification stun from enemies.'
  }
];

export const rokaMutationsBySlug = new Map(rokaMutations.map((m) => [m.slug, m]));
