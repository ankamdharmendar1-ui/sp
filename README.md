# Real Picker Wheel

Random picker wheel for [realpickerwheel.com](https://realpickerwheel.com). Add a list, spin, and land on one option. Original UI and implementation — not a clone of other wheel brands.

## Features

- Canvas wheel with weighted or equal odds
- Add, edit, delete, paste, import, and export entries
- History, local saved wheels, shareable URL
- Custom colors, sounds, confetti, reduced-motion support
- Informational pages with SEO metadata

## Setup

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

Deploy the `dist` folder to any static host. `vercel.json` and `public/_redirects` keep client-side routes working.

## Notes

- Data lives in `localStorage` (`rpw.v1`).
- Share links encode the wheel in the URL hash (`#w=`).
- Sounds use the Web Audio API (no audio files).
