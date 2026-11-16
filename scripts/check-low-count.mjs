import fs from 'node:fs';

const summary = JSON.parse(fs.readFileSync('scripts/parsed-items-summary.json', 'utf8'));

for (const [slug, info] of Object.entries(summary)) {
  if (info.validItemsCount < 4) {
    console.log(`LOW COUNT (${info.validItemsCount}): ${slug} (${info.cardName})`);
  }
}
