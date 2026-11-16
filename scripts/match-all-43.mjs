import fs from 'node:fs';

const standsTs = fs.readFileSync('src/data/stands.ts', 'utf8');
const data = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));

// Extract slugs and names from stands.ts
const standSlugs = [];
const regex = /"slug":\s*"([^"]+)",\s*"name":\s*"([^"]+)"/g;
let m;
while ((m = regex.exec(standsTs)) !== null) {
  standSlugs.push({ slug: m[1], name: m[2] });
}
console.log(`Found ${standSlugs.length} stands in stands.ts`);

// Map each to a Trello card
const relevantLists = new Set([
  '6ab4325be0216771a9c52fc5', // Stands (Arrow)
  '6ac4ff30d67668e332310906', // Evolution/Quest/AU Stands
  '6ab436ab2fd94306d30230f7'  // Unfinished / In Testing / Reworking
]);

const candidateCards = data.cards.filter(c => relevantLists.has(c.idList));
console.log(`Candidate stand cards in relevant lists: ${candidateCards.length}`);

for (const s of standSlugs) {
  const matched = candidateCards.find(c => {
    const cn = c.name.toLowerCase().trim();
    const sn = s.name.toLowerCase().trim();
    return cn === sn || cn.startsWith(sn) || sn.startsWith(cn);
  });
  if (matched) {
    console.log(`MATCHED: ${s.name} (${s.slug}) -> Card: "${matched.name}" (id: ${matched.id})`);
  } else {
    // try broader match
    const broader = data.cards.find(c => c.name.toLowerCase().includes(s.name.toLowerCase()));
    console.log(`UNMATCHED in candidate: ${s.name} -> Broader: ${broader ? `"${broader.name}" (list: ${broader.idList})` : 'NONE'}`);
  }
}
