const fs = require('fs');
const files = [
    'components/hero.tsx',
    'components/about.tsx',
    'components/contact.tsx',
    'components/focus-areas.tsx',
    'app/projects/page.tsx'
];
files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/import DecryptedText from \".\/decrypted-text\"/g, 'import GradientText from "./gradient-text"');
    content = content.replace(/import DecryptedText from \"@\/components\/decrypted-text\"/g, 'import GradientText from "@/components/gradient-text"');
    content = content.replace(/<DecryptedText text=\"(.*?)\" animateOn=\"view\" \/>/g, '<GradientText colors={["#BFF202", "#66ff66", "#BFF202", "#66ff66", "#BFF202"]} animationSpeed={4}>$1</GradientText>');
    fs.writeFileSync(f, content);
});
