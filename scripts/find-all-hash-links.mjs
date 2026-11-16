import fs from 'node:fs';
import path from 'node:path';

const projectRoot = 'C:/Users/chaofan/.gemini/antigravity/scratch/stand-out-wiki';

const hashPattern = /href=["']([^"']*#[^"']+)["']/g;

const foundHashes = [];

function scan(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) scan(full);
    else if (/\.(astro|tsx|ts)$/.test(f.name)) {
      const txt = fs.readFileSync(full, 'utf8');
      let m;
      while ((m = hashPattern.exec(txt)) !== null) {
        foundHashes.push({ file: path.relative(projectRoot, full), target: m[1] });
      }
    }
  }
}

scan(path.join(projectRoot, 'src'));

console.log(`Found ${foundHashes.length} hash references:`);
foundHashes.forEach(h => console.log(`  [${h.file}] -> ${h.target}`));
