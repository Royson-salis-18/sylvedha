const fs = require('fs');
let html = fs.readFileSync('public/grevara-catalog.html', 'utf8');

const regex = /import\(\"data:text\/javascript;base64,([^\"]+)\"\)/;
const match = html.match(regex);
if (match) {
  let js = Buffer.from(match[1], 'base64').toString('utf8');
  console.log('Found JS blob, length:', js.length);
  
  let modified = false;
  if (js.includes('Printing Instructions')) {
    console.log('Found Printing Instructions! Replacing...');
    js = js.replace(/Printing Instructions/g, '');
    js = js.replace(/Press Ctrl \+ P to print the catalog pages below\./g, '');
    modified = true;
  }
  
  if (js.includes('Try the new AI Chef button in the bottom right corner!')) {
    console.log('Found AI Chef text! Replacing...');
    js = js.replace(/Try the new AI Chef button in the bottom right corner!/g, '');
    modified = true;
  }

  // Also remove the "AI Chef" button text itself if it exists, or just any 'AI Chef'
  if (js.includes('AI Chef')) {
    console.log('Found AI Chef generic text! Replacing...');
    js = js.replace(/"AI Chef"/g, '""');
    modified = true;
  }
  
  if (modified) {
    const newBase64 = Buffer.from(js, 'utf8').toString('base64');
    html = html.replace(match[1], newBase64);
    fs.writeFileSync('public/grevara-catalog.html', html, 'utf8');
    console.log('Successfully wrote modified HTML.');
  } else {
    console.log('No text found to modify.');
  }
} else {
  console.log('Base64 bundle not found');
}
