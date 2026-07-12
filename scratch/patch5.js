const fs = require('fs');
let code = fs.readFileSync('components/contact.tsx', 'utf8');

code = code.replace(/text-4xl lg:text-5xl/g, 'text-3xl lg:text-4xl');
code = code.replace(/size-12 lg:size-16/g, 'size-10 lg:size-12');
code = code.replace(/text-lg lg:text-xl/g, 'text-base lg:text-lg');

fs.writeFileSync('components/contact.tsx', code);
console.log("Done");
