import fs from 'node:fs';

const off = JSON.parse(fs.readFileSync('C:/Users/chaofan/.gemini/antigravity/scratch/stand-out-wiki/research/raw_trello/official_7IlUxQPN.json', 'utf8'));
const rel = JSON.parse(fs.readFileSync('C:/Users/chaofan/.gemini/antigravity/scratch/stand-out-wiki/research/raw_trello/release_VDzjwDz2.json', 'utf8'));

// Find lists related to Rokakaka in both boards
const allLists = [...off.lists.map(l => ({ ...l, board: 'official' })), ...rel.lists.map(l => ({ ...l, board: 'release' }))];
const rokaLists = allLists.filter(l => /roka/i.test(l.name));
console.log('Rokakaka Lists found:');
rokaLists.forEach(l => console.log(`- [${l.board}] ID: ${l.id} | Name: "${l.name}"`));

const cards = [...off.cards, ...rel.cards];

for (const list of rokaLists) {
  console.log(`\n=================== LIST: "${list.name}" (${list.board}) ===================`);
  const listCards = cards.filter(c => c.idList === list.id);
  listCards.forEach((c, idx) => {
    console.log(`${idx + 1}. [${c.id}] "${c.name}"`);
    if (c.desc) {
      console.log(`   Desc: ${c.desc.replace(/\n+/g, ' ').slice(0, 150)}`);
    }
  });
}
