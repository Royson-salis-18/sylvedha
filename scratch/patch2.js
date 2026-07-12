const fs = require('fs');
let code = fs.readFileSync('components/subtracted-card.tsx', 'utf8');

const targetDiv = /\{shutterContent && \(\r?\n\s*<div\r?\n\s*className="absolute inset-0 z-\[10\] flex items-center justify-center transition-transform duration-\[600ms\] ease-in-out group-hover\/card:-translate-y-\[105%\] pointer-events-none"\r?\n\s*style=\{\{ \r?\n\s*backgroundColor: shutterColor \|\| fillColor,\r?\n\s*borderRadius: shaped \? 0 : borderRadius,\r?\n\s*clipPath: shaped \? `url\(#\$\{CSS\.escape\(clipId\)\}\)` : undefined\r?\n\s*\}\}\r?\n\s*>\r?\n\s*\{shutterContent\}\r?\n\s*<\/div>\r?\n\s*\)\}/;

const newDiv = `{shutterContent && (
          <div
            className="absolute inset-0 z-[10] pointer-events-none"
            style={{ 
              borderRadius: shaped ? 0 : borderRadius,
              clipPath: shaped ? \`url(#\${CSS.escape(clipId)})\` : 'none',
              overflow: shaped ? 'visible' : 'hidden'
            }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center transition-transform duration-[500ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover/card:-translate-y-full"
              style={{ backgroundColor: shutterColor || fillColor }}
            >
              {shutterContent}
            </div>
          </div>
        )}`;

code = code.replace(targetDiv, newDiv);

fs.writeFileSync('components/subtracted-card.tsx', code);
console.log("Done");
