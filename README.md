# Adaptive EX — Remotion preview (first 10.5s)

This starter contains the first three approved scenes:

1. Hook — 0:00–0:03.5
2. Model T Logic — 0:03.5–0:07.0
3. Bridge to Employee Experience — 0:07.0–0:10.5

## Run

```bash
npm install
npm run dev
```

Open the `AdaptiveEXPreview` composition in Remotion Studio.

Render MP4:

```bash
npm run render
```

## Format

- 1080 × 1350 (4:5)
- 30 FPS
- 315 frames / 10.5 seconds
- Persian-first, English accents
- Cream + Navy + Green
- Vazirmatn via `@remotion/google-fonts`

## Model T asset

The scene currently uses a remote public-domain 1908 Ford Model T image from Wikimedia Commons:

https://commons.wikimedia.org/wiki/File:Ford_Model_T_fra_1908.jpg

Direct image URL used by the code:

https://upload.wikimedia.org/wikipedia/commons/7/7f/Ford_Model_T_fra_1908.jpg

For deterministic/offline rendering later, download the image into `public/images/` and replace the remote URL in `src/data/script.ts` with `staticFile('images/your-file.jpg')`.

## Next build pass

After approving this 10.5-second visual language, continue with:

- Why Now
- 5-step Framework reveal
- One-size-fits-all
- Segmentation
- Personalization
- Hyper-personalization
- Adaptive EX
- Beyond onboarding
- Governance
- Final shift / CTA
