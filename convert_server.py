import os, re

d = r'd:\Users\royso\Desktop\sylvedha landing page\components'

for f in os.listdir(d):
    if not f.endswith('.tsx') or f in ['site-header.tsx', 'contact-form.tsx', 'floating-cubes.tsx']: 
        continue
        
    p = os.path.join(d, f)
    with open(p, 'r', encoding='utf-8') as file: 
        c = file.read()
        
    if 'useAnimate' in c:
        # Check if we should remove 'use client'
        remove_client = 'useState' not in c and 'useEffect' not in c and 'useRef' not in c
        if remove_client:
            c = c.replace('"use client"\n\n', '').replace('"use client"\n', '')
            c = c.replace("'use client'\n\n", '').replace("'use client'\n", '')
        
        # Remove import
        c = re.sub(r'import\s+{\s*useAnimate\s*}\s+from\s+["\']./use-animate["\']\n?', '', c)
        
        # Remove hook call
        c = re.sub(r'\s*const\s+ref\s*=\s*useAnimate\(\)\n?', '', c)
        
        # Remove ref={ref} from the outermost section/div
        c = re.sub(r'\sref=\{ref\}', '', c)
        
        with open(p, 'w', encoding='utf-8') as file: 
            file.write(c)
        print(f'Converted {f} to Server Component')
