const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'data', 'chapters');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf-8');
  // Remove initialCode={...} blocks so we don't match inside the LiveEditor code strings
  const withoutInitialCode = content.replace(/initialCode=\{`[\s\S]*?`\}/g, '');
  
  if (withoutInitialCode.includes('style="')) {
    console.log(`FOUND IN ${f}`);
    const lines = withoutInitialCode.split('\n');
    lines.forEach((l, i) => {
      if (l.includes('style="')) console.log(`  Line ${i+1}: ${l}`);
    });
  }
});
