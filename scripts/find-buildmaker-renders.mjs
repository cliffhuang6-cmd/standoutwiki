import fs from 'node:fs';
import path from 'node:path';

const projectRoot = 'C:/Users/chaofan/.gemini/antigravity/scratch/stand-out-wiki';

function scan(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) scan(full);
    else if (/\.(astro|tsx|ts)$/.test(f.name)) {
      const txt = fs.readFileSync(full, 'utf8');
      if (txt.includes('BuildMaker')) console.log(`BuildMaker in: ${path.relative(projectRoot, full)}`);
    }
  }
}

scan(path.join(projectRoot, 'src'));
