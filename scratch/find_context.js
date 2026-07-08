const fs = require('fs');
let html = fs.readFileSync('public/grevara-catalog.html', 'utf8');
const regex = /import\(\"data:text\/javascript;base64,([^\"]+)\"\)/;
const match = html.match(regex);
if (match) {
  let js = Buffer.from(match[1], 'base64').toString('utf8');
  const printIdx = js.indexOf('Printing Instructions');
  if (printIdx !== -1) {
    console.log('Context of Printing Instructions:');
    console.log(js.substring(Math.max(0, printIdx - 200), printIdx + 200));
  } else {
    console.log('Not found (already replaced)');
  }
}
