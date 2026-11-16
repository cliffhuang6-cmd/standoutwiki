import fs from 'node:fs';
import path from 'node:path';

function searchHrefs(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      if (!['node_modules', '.git', 'dist', '.astro'].includes(item.name)) searchHrefs(full);
    } else if (full.endsWith('.astro') || full.endsWith('.tsx') || full.endsWith('.ts')) {
      const content = fs.readFileSync(full, 'utf8');
      const matches = content.match(/href=["']https?:\/\/[^"']+["']/g);
      if (matches) {
        matches.forEach(m => {
          if (!m.includes('standoutwiki.org') && !m.includes('schema.org') && !m.includes('w3.org')) {
            console.log(`${full}: ${m}`);
          }
        });
      }
      const siteConfigMatches = content.match(/href=\{siteConfig\.[^}]+\}/g);
      if (siteConfigMatches) {
        siteConfigMatches.forEach(m => {
          if (!m.includes('siteConfig.url') && !m.includes('contactEmail')) {
            console.log(`${full}: ${m}`);
          }
        });
      }
    }
  }
}

searchHrefs('src');
