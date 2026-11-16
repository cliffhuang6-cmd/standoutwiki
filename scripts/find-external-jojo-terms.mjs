import fs from 'node:fs';
import path from 'node:path';

const projectRoot = 'C:/Users/chaofan/.gemini/antigravity/scratch/stand-out-wiki';

const terms = ['YBA', 'AUT', 'A Bizarre Day', 'Your Bizarre Adventure', 'A Universal Time', 'Duwang', 'Morioh-cho'];

function scan(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scan(full);
    } else if (/\.(ts|tsx|astro|md)$/.test(entry.name)) {
      const txt = fs.readFileSync(full, 'utf8');
      const lines = txt.split('\n');
      lines.forEach((l, idx) => {
        for (const t of terms) {
          if (new RegExp('\\b' + t + '\\b', 'i').test(l)) {
            console.log(`${path.relative(projectRoot, full)}:${idx + 1} [${t}] -> ${l.trim()}`);
          }
        }
      });
    }
  }
}

scan(path.join(projectRoot, 'src'));
