const fs = require('fs');
let code = fs.readFileSync('components/contact.tsx', 'utf8');

code = code.replace(
  'shutterContent={<Mail className="size-24 text-[#011e1b]/40" strokeWidth={1} />}',
  `shutterContent={
                    <div className="flex flex-col items-center gap-4">
                      <Mail className="size-24 text-[#011e1b]/40" strokeWidth={1} />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#011e1b]/40">Hover to reveal</span>
                    </div>
                  }`
);

code = code.replace(
  'shutterContent={<LinkedinIcon className="size-24 text-[#BFF202]" strokeWidth={1} />}',
  `shutterContent={
                    <div className="flex flex-col items-center gap-4">
                      <LinkedinIcon className="size-24 text-[#BFF202]" strokeWidth={1} />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#BFF202]/70">Hover to connect</span>
                    </div>
                  }`
);

code = code.replace(
  'shutterContent={<InstagramIcon className="size-24 text-[#011e1b]" strokeWidth={1} />}',
  `shutterContent={
                    <div className="flex flex-col items-center gap-4">
                      <InstagramIcon className="size-24 text-[#011e1b]" strokeWidth={1} />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#011e1b]/70">Hover to connect</span>
                    </div>
                  }`
);

fs.writeFileSync('components/contact.tsx', code);
console.log("Done");
