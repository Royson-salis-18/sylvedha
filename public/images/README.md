
Place the hero image file you provided into this folder and name it `hero-bg.png`.

Steps:
1. Move or copy your image from:

	`D:\Users\royso\Desktop\sylvedha landing page\hero image bg.png`

	to:

	`public/images/hero-bg.png`

	Example (Windows CMD):

	move "D:\Users\royso\Desktop\sylvedha landing page\hero image bg.png" "D:\Users\royso\Desktop\sylvedha landing page\public\images\hero-bg.png"

2. Recommended dimensions: at least 2000x800 (aspect ~2.5:1) for good desktop quality.
3. For best performance, you can optimize the PNG or convert to WebP with tools like `squoosh` or `cwebp`.

Files updated to use this image:
- `components/hero.tsx` — now uses `/images/hero-bg.png` for hero cards.
- `app/layout.tsx` — preloads `/images/hero-bg.png` and uses it in Open Graph/Twitter metadata.

After placing the image, run the dev server:

```bash
pnpm dev
```

If you'd like me to rename or use another filename, tell me and I'll update the code.
