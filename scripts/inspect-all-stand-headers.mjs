import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));

// Exact card IDs or names for our 43 stands
const cardMap = {
  'yellow-temperance': '6abc324b5b8abd5060497d3b',
  'yo-yo-ma': '6ad7e532cfa1f2b5ae82bc22',
  'cinderella': '6ab436b85bec87ab8628619c',
  'smooth-operators': '6ab63575179d2be9463dd4b4',
  'beach-boy': '6ad1d959c077dd6581a2e4ac',
  'hey-ya': '6ab4353d5aba7beda0ea064f',
  '200-balloons': '6aba7aec9f5cc34ba1b5c06d',
  'the-sun': '6ab4331ca6ddd9be4aa5861a',
  'lyin-eyes': '6aceae6d0b0fb1d2c961c6ae',
  'the-mattekudasai': '6ae90760921660a7c679d282',
  'hermit-purple': '6ab43550c8d24302f2d1fc17',
  'mr-president': '6ab43538b75b7da9f9627494',
  'the-hustle': '6ae906558dde2ede23744046',
  'notorious-big': '6ad640de1af12f56886658a5',
  'kraft-work': '6ad7d76df72c581dfcbbcf35',
  'rolling-stones': '6ab58f3d81b8eb127e57c627',
  'harvest': '6ab4352ea6528c9c7a197e4a',
  'tubular-bells': '6ab91f8a8e1ff3d8c8ead3e0',
  'super-fly': '6ab4353cad1e1994b19837e6',
  'under-world': '6ab4355568de72ab2beac4cd',
  'walking-heart': '6ab435404fdc1f886a54eb74',
  'glory-days': '6ab43526744449749b06bc10',
  'smoke-on-the-water': '6ab7e2f73f2f794f97be5184',
  'the-grateful-dead': '6ab635789e86f9b20d8782e3',
  'emperor': '6ab43527f0986134d516008c',
  'burning-down-the-house': '6acb7b2331891312381375a5',
  'beyond-the-sea': '6ab43530c1e5dae3cf17b1d4',
  'magicians-red': '6ab4356f469bbaad7ce157b8',
  'death-13': '6ac8f4b3f915753c2ebe8468',
  'catch-the-rainbow': '6ab43547aecedbc970a3af11',
  'silver-chariot': '6ab432b9a5e54ed1c85bcb19',
  'strength': '6ab4354b3073a57ac5674500',
  'mandom': '6ab43549a0e096062fb7b5aa',
  'heavens-door': '6ab43569c8e358d66b0917ae',
  'november-rain': '6ae906578fce929d0c639825',
  'highway-star': '6adbbc892110803ccd561a60',
  'big-mouth-strikes-again': '6ae9076bacf70fece3c2e5ba',
  'king-crimson': '6acab19b9fe44390b9d25d4a', // also has 6ac602a0a67570b152cd592a
  'the-world': '6ab432a929c5cfee2c09f395',
  'star-platinum': '6ab432a7415e48dc2254a026',
  'jojosapiens': '6aed1e78e252af95b837a9e7',
  'the-world-alternative-universe': '6ab4355eec7c0220af83d519',
  'star-platinum-the-world': '6acd35b51579458f6d83dcf1'
};

const cardsById = new Map(data.cards.map(c => [c.id, c]));

for (const [slug, cardId] of Object.entries(cardMap)) {
  const card = cardsById.get(cardId);
  if (!card) {
    console.log(`ERROR: Card not found for ${slug} (${cardId})`);
    continue;
  }
  // Extract all ## headers
  const headers = [];
  const lines = card.desc.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('#')) {
      headers.push(trimmed.replace(/^#+\s*/, '').replace(/\*+/g, '').trim());
    }
  }
  console.log(`${slug} (${card.name}) -> ${headers.length} headers: ${headers.slice(0, 10).join(' | ')}`);
}
