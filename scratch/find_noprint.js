const fs = require('fs');
let html = fs.readFileSync('public/grevara-catalog.html', 'utf8');
const match = html.match(/import\(\"data:text\/javascript;base64,([^\"]+)\"\)/);
if (match) {
  let js = Buffer.from(match[1], 'base64').toString('utf8');
  let idx = js.indexOf('no-print');
  let count = 0;
  while(idx !== -1) {
      console.log("Found no-print at", idx);
      console.log("Context:\n", js.substring(Math.max(0, idx - 20), idx + 100));
      idx = js.indexOf('no-print', idx + 1);
      count++;
  }
  console.log("Total no-print classes found:", count);
}
