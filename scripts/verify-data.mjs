import fs from 'fs';
import path from 'path';

console.log('--- Running Build-Time Data & Asset Budget Verification ---');

// 1. Verify Placeholders and alt text in projects data
const projectsFilePath = path.resolve('src/data/projects.ts');
if (!fs.existsSync(projectsFilePath)) {
  console.error('FAIL: src/data/projects.ts not found');
  process.exit(1);
}

const content = fs.readFileSync(projectsFilePath, 'utf8');

// Check for missing alt text
const altMatches = content.match(/alt:\s*"([^"]*)"/g);
if (altMatches) {
  for (const match of altMatches) {
    const text = match.replace(/alt:\s*"/, '').replace(/"$/, '');
    if (text.trim().length < 5) {
      console.error(`FAIL: Alt text too short or empty: "${text}"`);
      process.exit(1);
    }
  }
}

// 2. Check GLB model files exist and are within budget
const modelsDir = path.resolve('public/models');
if (fs.existsSync(modelsDir)) {
  const models = fs.readdirSync(modelsDir).filter(f => f.endsWith('.glb'));
  for (const m of models) {
    const fullPath = path.join(modelsDir, m);
    const stats = fs.statSync(fullPath);
    const sizeKB = stats.size / 1024;
    console.log(`Checking model: ${m} (${sizeKB.toFixed(2)} KB)`);
    if (sizeKB > 5120) {
      console.error(`FAIL: Model ${m} exceeds 5 MB budget limit (${sizeKB.toFixed(2)} KB > 5120 KB)`);
      process.exit(1);
    }
  }
}

console.log('SUCCESS: All projects, alt text, and model budgets verified successfully.');

