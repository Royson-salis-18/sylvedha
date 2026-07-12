const fs = require('fs');
let code = fs.readFileSync('components/contact.tsx', 'utf8');

code = code.replace(
  /color="white"\r?\n\s*ringSurface="dark"/,
  'color="white"\n                  ringSurface="dark"\n                  shutterColor="#E8E2D4"\n                  shutterContent={<Mail className="size-24 text-[#011e1b]/40" strokeWidth={1} />}'
);

code = code.replace(
  /color="neon"\r?\n\s*ringSurface="dark"/,
  'color="neon"\n                  ringSurface="dark"\n                  shutterColor="#011e1b"\n                  shutterContent={<LinkedinIcon className="size-24 text-[#BFF202]" strokeWidth={1} />}'
);

code = code.replace(
  /color="black"\r?\n\s*ringSurface="dark"/,
  'color="black"\n                  ringSurface="dark"\n                  shutterColor="#BFF202"\n                  shutterContent={<InstagramIcon className="size-24 text-[#011e1b]" strokeWidth={1} />}'
);

fs.writeFileSync('components/contact.tsx', code);
console.log("Done");
