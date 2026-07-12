const fs = require('fs');
let code = fs.readFileSync('components/contact.tsx', 'utf8');

code = code.replace(
  /<a\s+href="https:\/\/www\.linkedin\.com\/company\/sylvedha"[\s\S]*?<\/a>/,
  `<a
                    href="https://www.linkedin.com/company/sylvedha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full h-full pt-4"
                  >
                    <div className="flex flex-col gap-1">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#011e1b]/60 mb-3">Social</p>
                      <span className="block font-heading text-4xl lg:text-5xl font-extrabold text-[#011e1b]">LinkedIn</span>
                      <span className="text-lg lg:text-xl font-medium text-[#011e1b]/70">@Sylvedha</span>
                    </div>
                    <ArrowUpRight className="size-12 lg:size-16 text-[#011e1b]/40 transition-transform group-hover/card:translate-x-1 group-hover/card:-translate-y-1" />
                  </a>`
);

code = code.replace(
  /<a\s+href="https:\/\/instagram\.com\/sylvedha"[\s\S]*?<\/a>/,
  `<a
                  href="https://instagram.com/sylvedha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full h-full pt-4"
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5F0E8]/60 mb-3">Social</p>
                    <span className="block font-heading text-4xl lg:text-5xl font-extrabold text-[#F5F0E8]">Instagram</span>
                    <span className="text-lg lg:text-xl font-medium text-[#F5F0E8]/70">@Sylvedha</span>
                  </div>
                  <ArrowUpRight className="size-12 lg:size-16 text-[#F5F0E8]/40 transition-transform group-hover/card:translate-x-1 group-hover/card:-translate-y-1" />
                </a>`
);

fs.writeFileSync('components/contact.tsx', code);
console.log("Done");
