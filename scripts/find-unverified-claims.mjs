import fs from 'node:fs';
import path from 'node:path';

const phrases = ['100% Tested', '100% Active', 'Verified Live', 'Real-time Codes', 'Checked & Verified', 'Tested Codes', '100% tested'];

function search(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      if (!['node_modules', '.git', 'dist', '.astro'].includes(item.name)) search(full);
    } else {
      const content = fs.readFileSync(full, 'utf8');
      for (const p of phrases) {
        if (content.toLowerCase().includes(p.toLowerCase())) {
          console.log(`Found "${p}" in ${full}`);
        }
      }
    }
  }
}

search('src');
