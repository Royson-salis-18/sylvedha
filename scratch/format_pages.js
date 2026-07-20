const fs = require('fs');
let content = fs.readFileSync('app/projects/page.tsx', 'utf8');

// Add imports
if (!content.includes('ScrollStack')) {
    content = content.replace('import { SubtractedCard } from "@/components/subtracted-card"', 
        'import { SubtractedCard } from "@/components/subtracted-card"\nimport ScrollStack, { ScrollStackItem } from "@/components/scroll-stack"');
}

// Replace the Upcoming Projects section wrapper
const searchStr = `          {/* ── Algae Biorefinery — featured wide card ── */}`;
const newStr = `          <ScrollStack useWindowScroll={true} itemDistance={60} baseScale={0.9} stackPosition="25%" scaleEndPosition="15%">
            <ScrollStackItem>
          {/* ── Algae Biorefinery — featured wide card ── */}`;

content = content.replace(searchStr, newStr);

const endAlgaeSearch = `          </SubtractedCard>

          {/* ── Other upcoming projects grid ── */}`;
const endAlgaeNew = `          </SubtractedCard>
            </ScrollStackItem>

          {/* ── Other upcoming projects grid ── */}`;
content = content.replace(endAlgaeSearch, endAlgaeNew);

const gridSearch = `<div className="grid gap-6 md:grid-cols-2 stagger-children pb-4">`;
const gridNew = `<div className="flex flex-col gap-6 pb-4">`;
content = content.replace(gridSearch, gridNew);

const returnSearch = `              return (
                <SubtractedCard`;
const returnNew = `              return (
                <ScrollStackItem key={project.title}>
                  <SubtractedCard`;
content = content.replace(returnSearch, returnNew);

const endReturnSearch = `                  </div>
                </SubtractedCard>
              )`;
const endReturnNew = `                  </div>
                </SubtractedCard>
                </ScrollStackItem>
              )`;
content = content.replace(endReturnSearch, endReturnNew);

const endGridSearch = `          </div>

        </section>`;
const endGridNew = `          </div>
          </ScrollStack>

        </section>`;
content = content.replace(endGridSearch, endGridNew);

fs.writeFileSync('app/projects/page.tsx', content);
