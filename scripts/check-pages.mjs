import fs from 'fs';
import path from 'path';

function check(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) check(full);
    else if (f.name.endsWith('.astro')) {
      const txt = fs.readFileSync(full, 'utf8');
      const m = txt.match(/canonicalPath=["']([^"']*)["']/);
      if (m) {
        console.log(path.relative('src/pages', full), '=>', JSON.stringify(m[1]));
      }
    }
  }
}
check('src/pages');
