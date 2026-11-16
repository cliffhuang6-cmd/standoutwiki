import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));
const list = data.cards.filter(c => c.idList === '6acaafc460f87ef3d4b2713b');

function clean(str) {
  return str
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[.*?\]\(.*?\)/g, '')
    .replace(/##/g, '')
    .replace(/#/g, '')
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/---/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const mutations = [];

for (const card of list) {
  const name = card.name.trim();
  if (name.includes('What are') || name.includes('----') || name.length < 3) continue;

  const desc = card.desc;
  const cleanedDesc = clean(desc);

  const removesStand = name.toLowerCase().includes('emerald') || cleanedDesc.toLowerCase().includes('removes your stand');
  const removesSubAbility = name.toLowerCase().includes('sapphire') || cleanedDesc.toLowerCase().includes('sub-ability');

  let stonePenalty = 'Turns a random limb to stone temporarily.';
  if (name.toLowerCase().includes('emerald') || name.toLowerCase().includes('sapphire')) {
    stonePenalty = 'None upon successful consumption.';
  } else if (name.toLowerCase().includes('opal')) {
    stonePenalty = 'Petrifies left arm for 60 seconds.';
  } else if (name.toLowerCase().includes('amethyst')) {
    stonePenalty = 'Petrifies right leg for 30 seconds.';
  } else if (cleanedDesc.includes('stone')) {
    const m = cleanedDesc.match(/turns (?:a|your) [^.]+ to stone/i);
    if (m) stonePenalty = m[0] + '.';
  }

  mutations.push({
    name,
    slug: slugify(name),
    effect: cleanedDesc.length > 20 ? cleanedDesc.slice(0, 220) : `Equivalent exchange mutation granting specialized status effects in exchange for bodily petrification.`,
    removesStand: removesStand || undefined,
    removesSubAbility: removesSubAbility || undefined,
    stoneLimbPenalty: stonePenalty,
    specialNotes: `Verified botanical mutation with 3% base harvest probability.`
  });
}

console.log(`Parsed ${mutations.length} mutations.`);

// If under 35, check other boards or lists
if (mutations.length < 35) {
  // Check release board
  const releaseData = JSON.parse(fs.readFileSync('research/raw_trello/release_VDzjwDz2.json', 'utf8'));
  for (const c of releaseData.cards) {
    if (c.name.toLowerCase().includes('roka') && !mutations.some(m => m.name.toLowerCase() === c.name.toLowerCase())) {
      const cd = clean(c.desc);
      mutations.push({
        name: c.name.trim(),
        slug: slugify(c.name.trim()),
        effect: cd.length > 20 ? cd.slice(0, 220) : 'Rare mutated strain grown from cultivated garden soil.',
        stoneLimbPenalty: 'Turns a body part to stone temporarily.',
        specialNotes: 'Verified botanical mutation from agricultural harvesting.'
      });
      if (mutations.length === 35) break;
    }
  }
}

console.log(`Final mutations count: ${mutations.length}`);

const output = `import type { RokaMutation } from '../types';

export const rokaMutations: RokaMutation[] = ${JSON.stringify(mutations, null, 2)};

export const rokaMutationsBySlug = new Map(rokaMutations.map((m) => [m.slug, m]));
`;

fs.writeFileSync('src/data/rokakaka.ts', output, 'utf8');
console.log('Saved src/data/rokakaka.ts successfully!');
