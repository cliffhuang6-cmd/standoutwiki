import fs from 'node:fs';

const r1 = fs.readFileSync('reports/final-report.md', 'utf8');
r1.split('\n').forEach((l, i) => {
  if (l.includes('44')) console.log(`final-report:${i+1}: ${l}`);
});

const r2 = fs.readFileSync('reports/seo-audit.md', 'utf8');
r2.split('\n').forEach((l, i) => {
  if (l.includes('44')) console.log(`seo-audit:${i+1}: ${l}`);
});
