const fs = require('fs');
let content = fs.readFileSync('app/projects/page.tsx', 'utf8');

// Remove ScrollStack imports
content = content.replace('import ScrollStack, { ScrollStackItem } from "@/components/scroll-stack"', '');
content = content.replace('import { SubtractedCard } from "@/components/subtracted-card"\n', 'import { SubtractedCard } from "@/components/subtracted-card"');

// Remove ScrollStack opening tag and first Item
content = content.replace('<ScrollStack useWindowScroll={true} itemDistance={60} baseScale={0.9} stackPosition="25%" scaleEndPosition="15%">\n            <ScrollStackItem>\n', '');

// Restore animate-on-scroll to Algae
content = content.replace('className="mb-8 group"', 'className="animate-on-scroll mb-8 group"');

// Remove closing ScrollStackItem and closing ScrollStack
content = content.replace('          </SubtractedCard>\n            </ScrollStackItem>', '          </SubtractedCard>');

content = content.replace('          </div>\n          </ScrollStack>', '          </div>');

// Remove ScrollStackItem wrapper in the map
const itemRegex = /<ScrollStackItem key=\{project\.title\}>\s*<SubtractedCard/g;
content = content.replace(itemRegex, '<SubtractedCard');

const endItemRegex = /<\/SubtractedCard>\s*<\/ScrollStackItem>/g;
content = content.replace(endItemRegex, '</SubtractedCard>');

// Restore animate-on-scroll for grid cards
content = content.replace(/className=\"group\"/g, 'className="animate-on-scroll group"');
// Fix any double replacements
content = content.replace('className="animate-on-scroll animate-on-scroll mb-8 group"', 'className="animate-on-scroll mb-8 group"');
content = content.replace('className="animate-on-scroll animate-on-scroll group"', 'className="animate-on-scroll group"');

fs.writeFileSync('app/projects/page.tsx', content);
