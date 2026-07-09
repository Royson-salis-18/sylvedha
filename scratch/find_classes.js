const fs = require('fs');
let html = fs.readFileSync('public/grevara-catalog.html', 'utf8');
const match = html.match(/import\(\"data:text\/javascript;base64,([^\"]+)\"\)/);
if (match) {
  let js = Buffer.from(match[1], 'base64').toString('utf8');
  
  // Find "Printing Instructions" and look around it
  let idx = js.indexOf('Printing Instructions');
  if (idx !== -1) {
    console.log("Found Printing Instructions at", idx);
    console.log("Context:\n", js.substring(idx - 200, idx + 200));
  }
  
  // Find "AI Chef" and look around it
  let chefIdx = js.indexOf('AI Chef');
  if (chefIdx !== -1) {
    console.log("Found AI Chef at", chefIdx);
    console.log("Context:\n", js.substring(chefIdx - 200, chefIdx + 200));
  }
}
