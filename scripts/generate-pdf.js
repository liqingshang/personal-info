#!/usr/bin/env node
'use strict';

const { execFile } = require('child_process');
const path = require('path');
const fs = require('fs');

const repoRoot = path.resolve(__dirname, '..');
const inputFile = path.join(repoRoot, 'resume.html');
const outputFile = path.join(repoRoot, 'assets', 'resume.pdf');

const chromePaths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
];

function findChrome() {
  for (const p of chromePaths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }
  return null;
}

const chrome = findChrome();
if (!chrome) {
  console.error('Error: Google Chrome not found.');
  console.error('Please install Chrome or update chromePaths in this script.');
  process.exit(1);
}

if (!fs.existsSync(inputFile)) {
  console.error(`Error: ${inputFile} not found.`);
  process.exit(1);
}

const args = [
  '--headless',
  '--disable-gpu',
  '--run-all-compositor-stages-before-draw',
  '--virtual-time-budget=3000',
  `--print-to-pdf=${outputFile}`,
  `file:///${inputFile.replace(/\\/g, '/')}`,
];

console.log(`Generating PDF from ${path.basename(inputFile)}...`);
console.log(`Using Chrome: ${chrome}`);

execFile(chrome, args, (error, stdout, stderr) => {
  if (error) {
    console.error('Failed to generate PDF:', error.message);
    process.exit(1);
  }
  if (stderr) {
    // Chrome prints benign warnings to stderr; only log if file was not created.
    if (!fs.existsSync(outputFile)) {
      console.error('Chrome stderr:', stderr);
      process.exit(1);
    }
  }
  const stats = fs.statSync(outputFile);
  console.log(`PDF generated: ${outputFile} (${(stats.size / 1024).toFixed(1)} KB)`);
});
