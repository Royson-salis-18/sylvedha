const fs = require('fs');
let code = fs.readFileSync('components/subtracted-card.tsx', 'utf8');

code = code.replace(
  /  hoverRingScale\?: "large" \| "small"\r?\n  disableTilt\?: boolean\r?\n\}/,
  '  hoverRingScale?: "large" | "small"\n  disableTilt?: boolean\n  shutterContent?: ReactNode\n  shutterColor?: string\n}'
);

code = code.replace(
  /  hoverRingScale = "large",\r?\n  disableTilt = false,\r?\n\}: SubtractedCardProps\) \{/,
  '  hoverRingScale = "large",\n  disableTilt = false,\n  shutterContent,\n  shutterColor,\n}: SubtractedCardProps) {'
);

const targetDiv = /<div className="relative z-\[2\]">\{children\}<\/div>\r?\n\r?\n\s*\{effectiveCorner !== "none" && effectiveCorner\.includes\("bottom"\) && \(\r?\n\s*<div className="relative z-\[2\]" style=\{\{ height: biteRadius, width: "100%", clear: "both" \}\} \/>\r?\n\s*\)\}\r?\n\s*<\/div>/;

const newDiv = `<div className="relative z-[2]">{children}</div>

        {effectiveCorner !== "none" && effectiveCorner.includes("bottom") && (
          <div className="relative z-[2]" style={{ height: biteRadius, width: "100%", clear: "both" }} />
        )}

        {shutterContent && (
          <div
            className="absolute inset-0 z-[10] flex items-center justify-center transition-transform duration-[600ms] ease-in-out group-hover/card:-translate-y-[105%] pointer-events-none"
            style={{ 
              backgroundColor: shutterColor || fillColor,
              borderRadius: shaped ? 0 : borderRadius,
              clipPath: shaped ? \`url(#\${CSS.escape(clipId)})\` : undefined
            }}
          >
            {shutterContent}
          </div>
        )}
      </div>`;

code = code.replace(targetDiv, newDiv);

fs.writeFileSync('components/subtracted-card.tsx', code);
console.log("Done");
