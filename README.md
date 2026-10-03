# Portfolio

A static Astro portfolio based on `~/Downloads/fag.png`. It uses Tailwind CSS and Lucide Astro icons, with small CSS animations and no client framework.

Live site: [www.luiz.ink](https://www.luiz.ink/). The Vercel `portfolio` project is connected to this repository's `main` branch.

Headings use the locally hosted Momo Trust Display font. Its SIL Open Font License is in [`public/fonts/OFL.txt`](public/fonts/OFL.txt).

## Customize

Edit [`src/config.ts`](src/config.ts) for the title, colors, animation timing, profile, featured projects, about text, contact email, and social links. The page shows About me and three projects in one screen, with X and LinkedIn links fixed at the bottom right. The Work with me text link opens an email draft, and Copy email provides a fallback in the same top-right row. Other projects are available through the GitHub link. Replace [`public/avatar.webp`](public/avatar.webp) with your own optimized image, or change `profile.image` in the config to another file in `public/`. The original profile photo is preserved at [`src/assets/avatar-source.png`](src/assets/avatar-source.png), and `public/avatar.webp` is a 294×294 black-and-white render of it, so the grayscale is baked into the pixels instead of a CSS filter. To refresh it after replacing the source, re-render a square grayscale WebP with the same luma weights the browser used (`0.2126`/`0.7152`/`0.0722`), so the page looks identical.

The Open Graph image at `/og-image.png` is generated during the static build from `meta.title`, `meta.description`, and the dark theme colors. Its accessible description follows the same config values.

General icons use Lucide in [`src/components/Icon.astro`](src/components/Icon.astro). X and LinkedIn use their brand marks from Bootstrap Icons in [`src/components/BrandIcon.astro`](src/components/BrandIcon.astro), under the [MIT license](src/components/BOOTSTRAP-ICONS-LICENSE.txt).

## Run

```sh
npm install
npm run dev
```

Run `npm run build` to generate the static site in `dist/`.
