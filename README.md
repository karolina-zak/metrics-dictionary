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

## Deploy on Netlify (first time)

1. Push this repository to GitHub (or GitLab / Bitbucket supported by Netlify).
2. In [Netlify](https://app.netlify.com): **Add new site** → **Import an existing project** → authorize Git → pick the repo.
3. Netlify reads [`netlify.toml`](netlify.toml): **Build command** `npm run build`, **Publish directory** `dist`. No extra env vars are required for a static build.
4. Under **Site configuration → Build & deploy → Continuous deployment**, set **Production branch** to the branch you want live (e.g. `main` or `dev`).
5. After the first deploy succeeds, optional: **Domain management** → add a custom domain and enable HTTPS (automatic on Netlify).

## Update the live site later

Every **push** to the branch Netlify watches for production triggers a new build and deploy (usually within 1–3 minutes). Workflow:

```bash
git add .
git commit -m "Describe the change"
git push origin main   # or: git push origin dev
```

If you change metrics data, run `node scripts/gen-metrics.mjs` (or `npm run build`, which runs the generator) before committing so `src/data/metrics.js` stays in sync. Bump `APP_CONFIG` in `src/App.jsx` when you release a content version (see below).

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

With continuous deployment enabled, Netlify rebuilds after each push to your chosen production branch (see **Deploy on Netlify** above).

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
