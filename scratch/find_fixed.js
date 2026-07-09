const fs = require('fs');
let html = fs.readFileSync('public/grevara-catalog.html', 'utf8');
const match = html.match(/import\(\"data:text\/javascript;base64,([^\"]+)\"\)/);
if (match) {
  let js = Buffer.from(match[1], 'base64').toString('utf8');
  let idx = js.indexOf('fixed bottom-');
  let searchStart = 0;
  while(idx !== -1) {
      console.log("Found fixed bottom at", idx);
      console.log("Context:\n", js.substring(Math.max(0, idx - 100), idx + 200));
      searchStart = idx + 1;
      idx = js.indexOf('fixed bottom-', searchStart);
  }
}
