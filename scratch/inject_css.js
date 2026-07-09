const fs = require('fs');
let html = fs.readFileSync('public/grevara-catalog.html', 'utf8');

// Remove the old injected script
const oldScriptStart = html.indexOf('<script>\n  (function() {\n    function hideElements()');
if (oldScriptStart !== -1) {
    const oldScriptEnd = html.indexOf('</script>', oldScriptStart) + 9;
    html = html.substring(0, oldScriptStart) + html.substring(oldScriptEnd);
    console.log("Removed old script injection.");
} else {
    // maybe minified or different format, let's try regex
    html = html.replace(/<script>[^<]*hideElements[^<]*<\/script>/, '');
}

const styleInjection = `
<style>
  .no-print {
    display: none !important;
  }
</style>
`;

if (!html.includes('.no-print {')) {
    html = html.replace('</head>', styleInjection + '</head>');
    fs.writeFileSync('public/grevara-catalog.html', html, 'utf8');
    console.log('Injected simple CSS style tag.');
} else {
    console.log('CSS already injected.');
}
