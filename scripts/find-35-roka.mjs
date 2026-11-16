import fs from 'node:fs';
import path from 'node:path';

const projectRoot = 'C:/Users/chaofan/.gemini/antigravity/scratch/stand-out-wiki';

function scan(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) scan(full);
    else if (/\.(astro|tsx|ts|md)$/.test(f.name)) {
      const txt = fs.readFileSync(full, 'utf8');
      const lines = txt.split('\n');
      lines.forEach((l, i) => {
        if (/35\s*(?:mutat|roka|fruit)/i.test(l)) {
          console.log(`${path.relative(projectRoot, full)}:${i + 1} -> ${l.trim()}`);
        }
      });
    }
  }
}

scan(path.join(projectRoot, 'src'));
