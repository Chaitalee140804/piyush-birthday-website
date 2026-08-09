# Piyush Birthday Website ❤️

A romantic, interactive birthday website built with Next.js, React, TypeScript and Tailwind CSS.

## Included

- Birthday hero and romantic animations
- Love letter
- Interactive surprise gift
- Our story timeline
- 19-photo memory gallery
- Compressed birthday video
- 100 reasons I love you
- Interactive birthday cake and candles
- Grand finale
- Responsive mobile/desktop layout
- Accessibility and reduced-motion support

## Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
config/
  siteConfig.ts
public/
  images/
  videos/
    birthday-video-25mb.mp4
.github/
  workflows/
    ci.yml
```

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verify before deployment

```bash
npm run typecheck
npm run lint
npm run build
```

## Assets

The website reads its personal photos and video from `public/images` and `public/videos`. The exact filenames and captions are controlled by `config/siteConfig.ts`.

Keep the compressed video below GitHub's individual-file upload limit and keep the configured filename:

```text
public/videos/birthday-video-25mb.mp4
```
