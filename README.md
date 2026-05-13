# UX Metrics Dictionary

Interactive bilingual (English, Polish, German) reference for UX designers working with an **Adobe Analytics** dashboard in a large multi-brand home appliance e-commerce context. All metric definitions, formulas, examples, and benchmarks live in the repository as static data—no backend.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview
```

The `dist/` folder is suitable for static hosting (e.g. **Netlify**). `public/_redirects` contains a SPA fallback rule.

## Update metrics (non-technical)

1. **English & Polish** content is generated from `scripts/metricsData.source.ts` (same structure as before: `SECTIONS` with `n`, `tag`, `f`, `d`, `e`, `b`, `why`, `p`, `tc`, etc.).
2. **German** copy for each metric lives in `scripts/de-locale.json` (one object per metric, keyed by `slug`—must stay in the same order as the generator expects; see `slugOrder` in `scripts/gen-metrics.mjs`).
3. After editing, run:

   ```bash
   node scripts/gen-metrics.mjs
   ```

   This regenerates `src/data/metrics.js`.

4. Bump **`APP_CONFIG.version`** and **`APP_CONFIG.lastUpdated`** in `src/App.jsx`.
5. Commit and push:

   ```bash
   git add .
   git commit -m "v1.x.x - short description of change"
   git push
   ```

Netlify (or similar) can auto-deploy from `main` within a few minutes.

## Change the dashboard URL

In `src/App.jsx`, edit:

```javascript
const APP_CONFIG = {
  // ...
  dashboardUrl: "https://experience.adobe.com/…/workspace/edit/…",
};
```

Use your real Adobe Analytics or workspace URL. If the value is missing, invalid, or still contains `DASHBOARD_URL_PLACEHOLDER`, the **Open Dashboard** control is disabled and a tooltip explains how to fix it.

## Project structure (high level)

| Path | Role |
|------|------|
| `src/App.jsx` | Layout, filters, language persistence, scroll-to-top |
| `src/data/metrics.js` | Generated metric sections (do not hand-edit; regenerate) |
| `src/data/translations.js` | UI strings EN / PL / DE |
| `scripts/gen-metrics.mjs` | Builds `metrics.js` from source + `de-locale.json` |
| `scripts/metricsData.source.ts` | EN/PL source for all metrics |
| `scripts/de-locale.json` | German fields per metric slug |
| `src/components/*.jsx` | Header, search, tabs, legend, cards |

## Version history

| Version | Date | Notes |
|---------|------|--------|
| 1.0.0 | 2025-05-13 | Initial release: 41 metrics, EN/PL/DE, React 18 + Vite, Netlify-ready `dist/` |
