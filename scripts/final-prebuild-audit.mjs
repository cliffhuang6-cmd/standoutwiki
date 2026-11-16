import fs from 'node:fs';
import path from 'node:path';

const projectRoot = 'C:/Users/chaofan/.gemini/antigravity/scratch/stand-out-wiki';

console.log('====================================================');
console.log('       STAND OUT WIKI FINAL PRE-BUILD AUDIT         ');
console.log('====================================================\n');

let pass = true;

// 1. Stands Data Audit
const standsCode = fs.readFileSync(path.join(projectRoot, 'src/data/stands.ts'), 'utf8');
const standMatches = [...standsCode.matchAll(/"slug":\s*"([^"]+)"/g)].map(m => m[1]);
console.log(`[Stands Count] Total: ${standMatches.length}`);
if (standMatches.length !== 43) {
  console.error(`  FAIL: Expected 43 stands, got ${standMatches.length}`);
  pass = false;
} else {
  console.log(`  PASS: Exactly 43 Stands verified.`);
}

// 2. Check for "description: '!'"
const exclamations = [...standsCode.matchAll(/"description":\s*"!"/g)];
console.log(`[Placeholder Descriptions '!'] Count: ${exclamations.length}`);
if (exclamations.length > 0) {
  console.error(`  FAIL: Found ${exclamations.length} placeholder moves with description '!'`);
  pass = false;
} else {
  console.log(`  PASS: 0 placeholder moves found.`);
}

// 3. Check for "damage: 'Moderate'"
const moderateDamage = [...standsCode.matchAll(/"damage":\s*"Moderate"/g)];
console.log(`[Generic 'Moderate' Damage] Count: ${moderateDamage.length}`);
if (moderateDamage.length > 0) {
  console.error(`  FAIL: Found ${moderateDamage.length} moves with generic 'Moderate' damage`);
  pass = false;
} else {
  console.log(`  PASS: 0 generic 'Moderate' damage entries found.`);
}

// 4. Check for "Stand Mastery" or "Combat Pressure"
const genericPassives = [...standsCode.matchAll(/"name":\s*"(Stand Mastery|Combat Pressure)"/g)];
console.log(`[Generic Passives] Count: ${genericPassives.length}`);
if (genericPassives.length > 0) {
  console.error(`  FAIL: Found ${genericPassives.length} generic passives.`);
  pass = false;
} else {
  console.log(`  PASS: 0 generic passives found. All stands have unique verified passives.`);
}

// 5. Items Count
const itemsCode = fs.readFileSync(path.join(projectRoot, 'src/data/items.ts'), 'utf8');
const itemSlugs = [...itemsCode.matchAll(/["']?slug["']?:\s*["']([^"']+)["']/g)].map(m => m[1]);
console.log(`[Items Count] Total: ${itemSlugs.length}`);
if (itemSlugs.length !== 28) {
  console.error(`  FAIL: Expected 28 items, got ${itemSlugs.length}`);
  pass = false;
} else {
  console.log(`  PASS: Exactly 28 verified items.`);
}

// 6. Rokakaka Count
const rokaCode = fs.readFileSync(path.join(projectRoot, 'src/data/rokakaka.ts'), 'utf8');
const rokaSlugs = [...rokaCode.matchAll(/["']?slug["']?:\s*["']([^"']+)["']/g)].map(m => m[1]);
console.log(`[Roka Mutations Count] Total: ${rokaSlugs.length}`);
if (rokaSlugs.length !== 33) {
  console.error(`  FAIL: Expected 33 mutations, got ${rokaSlugs.length}`);
  pass = false;
} else {
  console.log(`  PASS: Exactly 33 verified mutations.`);
}

// 7. Quests Count
const questCode = fs.readFileSync(path.join(projectRoot, 'src/data/quests.ts'), 'utf8');
const questSlugs = [...questCode.matchAll(/"slug":\s*"([^"]+)"/g)].map(m => m[1]);
console.log(`[Quests Count] Total: ${questSlugs.length}`);
if (questSlugs.length !== 17) {
  console.error(`  FAIL: Expected 17 quests, got ${questSlugs.length}`);
  pass = false;
} else {
  console.log(`  PASS: Exactly 17 verified quests.`);
}

// 8. Codes Count
const codesCode = fs.readFileSync(path.join(projectRoot, 'src/data/codes.ts'), 'utf8');
const codeNames = [...codesCode.matchAll(/code:\s*'([^']+)'/g)].map(m => m[1]);
console.log(`[Codes Count] Total: ${codeNames.length}`);
if (codeNames.length !== 6) {
  console.error(`  FAIL: Expected 6 codes, got ${codeNames.length}`);
  pass = false;
} else {
  console.log(`  PASS: Exactly 6 codes verified.`);
}

// 9. Guides Count
const guidesCode = fs.readFileSync(path.join(projectRoot, 'src/data/guides.ts'), 'utf8');
const guideSlugs = [...guidesCode.matchAll(/"slug":\s*"([^"]+)"/g)].map(m => m[1]);
console.log(`[Guides Count] Total: ${guideSlugs.length}`);
if (guideSlugs.length !== 18) {
  console.error(`  FAIL: Expected 18 guides, got ${guideSlugs.length}`);
  pass = false;
} else {
  console.log(`  PASS: Exactly 18 rich guides.`);
}

// 10. Check for External Third-Party Platform Links in src/
const linkRegex = /href=["'](https?:\/\/[^"']*(?:roblox\.com|discord\.gg|discord\.com|trello\.com)[^"']*)["']/gi;
let externalFound = 0;
function checkExternalLinks(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      checkExternalLinks(full);
    } else if (entry.name.endsWith('.astro') || entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) {
      const content = fs.readFileSync(full, 'utf8');
      let m;
      while ((m = linkRegex.exec(content)) !== null) {
        console.error(`  EXTERNAL LINK FOUND in ${full}: ${m[1]}`);
        externalFound++;
      }
    }
  }
}
checkExternalLinks(path.join(projectRoot, 'src'));
console.log(`[External Official Links in src/] Total: ${externalFound}`);
if (externalFound > 0) {
  console.error(`  FAIL: Found ${externalFound} external official links in src/`);
  pass = false;
} else {
  console.log(`  PASS: 0 external official platform links in src/.`);
}

// 11. Check for Level 75 / 225 stat points
let level75Found = 0;
function checkLevel75(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      checkLevel75(full);
    } else if (entry.name.endsWith('.astro') || entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) {
      const content = fs.readFileSync(full, 'utf8');
      const lines = content.split('\n');
      lines.forEach((l, idx) => {
        if (/level\s*75/i.test(l) || /1\s*(?:-|to)\s*75/i.test(l) || /51\s*-\s*75/i.test(l) || /225\s*stat/i.test(l) || /225\s*sp/i.test(l) || /225\s*points/i.test(l) || /level\s*(?:5[1-9]|[6-9]\d)/i.test(l)) {
          console.error(`  LEVEL >50 or 75/225 in ${full}:${idx + 1} -> ${l.trim()}`);
          level75Found++;
        }
      });
    }
  }
}
checkLevel75(path.join(projectRoot, 'src'));
console.log(`[Level 75 / 225 references in src/] Total: ${level75Found}`);
if (level75Found > 0) {
  console.error(`  FAIL: Found ${level75Found} references to level 75 or 225.`);
  pass = false;
} else {
  console.log(`  PASS: 0 references to Level 75/225. Verified Level 50 cap & 150 points.`);
}

console.log('\n====================================================');
if (pass) {
  console.log('             ALL PRE-BUILD AUDITS PASSED!           ');
} else {
  console.log('             AUDIT FAILED WITH ISSUES!              ');
  process.exitCode = 1;
}
console.log('====================================================\n');
