const fs = require('fs');
let html = fs.readFileSync('public/grevara-catalog.html', 'utf8');
const match = html.match(/import\(\"data:text\/javascript;base64,([^\"]+)\"\)/);
if (match) {
  let js = Buffer.from(match[1], 'base64').toString('utf8');
  let idx = js.indexOf('Printing Instructions');
  if (idx !== -1) {
    console.log("Context:\n", js.substring(idx - 600, idx + 600));
  }
}
