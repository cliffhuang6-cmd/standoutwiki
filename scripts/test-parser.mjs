import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));
const cardsById = new Map(data.cards.map(c => [c.id, c]));

const testSlugs = {
  'yellow-temperance': '6abc324b5b8abd5060497d3b',
  'kraft-work': '6ad7d76df72c581dfcbbcf35',
  'cinderella': '6ab436b85bec87ab8628619c',
  'rolling-stones': '6ab58f3d81b8eb127e57c627',
  'notorious-big': '6ad640de1af12f56886658a5'
};

for (const [slug, cardId] of Object.entries(testSlugs)) {
  const card = cardsById.get(cardId);
  console.log(`\n================== ${card.name} (${slug}) ==================`);
  const sections = card.desc.split(/(?:^|\n)##\s+/);
  for (let i = 1; i < sections.length; i++) {
    const lines = sections[i].split('\n').map(l => l.trim()).filter(Boolean);
    const header = lines[0].replace(/\*\*/g, '').replace(/:$/, '').trim();
    const body = lines.slice(1).filter(l => !l.startsWith('![') && !l.startsWith('---')).join(' ');
    console.log(`  [Header ${i}] "${header}" -> ${body.slice(0, 120)}`);
  }
}
