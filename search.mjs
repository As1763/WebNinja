import fs from 'fs';
import path from 'path';

let dir = new URL('./src/data/chapters', import.meta.url).pathname;
dir = decodeURIComponent(dir);
const cleanDir = process.platform === 'win32' ? dir.substring(1) : dir;
const files = fs.readdirSync(cleanDir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  const content = fs.readFileSync(path.join(cleanDir, f), 'utf-8');
  const withoutInitialCode = content.replace(/initialCode=\{`[\s\S]*?`\}/g, '');
  
  if (withoutInitialCode.includes('style="')) {
    console.log(`FOUND IN ${f}`);
    const lines = withoutInitialCode.split('\n');
    lines.forEach((l, i) => {
      if (l.includes('style="')) console.log(`  Line ${i+1}: ${l}`);
    });
  }
});
