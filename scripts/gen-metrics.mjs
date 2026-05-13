import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const ts = fs.readFileSync(path.join(__dirname, "metricsData.source.ts"), "utf8");
const m = ts.match(/export const SECTIONS = (\[[\s\S]*?\n\]);\s*\nexport const TOTAL/);
if (!m) throw new Error("Could not parse SECTIONS from scripts/metricsData.source.ts");
const OLD = Function(`"use strict"; return (${m[1]});`)();

const slugOrder = [
  "gmv",
  "overall-cr",
  "aov",
  "traffic-sources",
  "cr-per-device",
  "new-vs-returning-cr",
  "cross-sell-upsell",
  "bounce-rate",
  "time-per-visit",
  "bounce-single-page",
  "feedback-intent",
  "returning-visitors-rate",
  "returning-registration-rate",
  "registration-after-first-visit",
  "most-visited-categories",
  "visits-by-device",
  "atc",
  "purchase-intent",
  "buy-online",
  "external-retailer",
  "comparison-lift",
  "filter-sort-lift",
  "competence-to-pdp",
  "plp-to-pdp",
  "product-discovery-success",
  "pdp-to-atc",
  "media-engagement",
  "reviews-reading",
  "technical-data-filtered",
  "document-download-pdp",
  "search-refinement",
  "search-zero-results",
  "search-to-pdp-ctr",
  "error-to-intent",
  "cart-abandonment",
  "additional-service-attach",
  "return-after-atc",
  "return-buy-after-atc",
  "cart-view-ratio",
  "return-buy-same-visit",
  "most-abandoned-products",
];

const sectionMap = {
  biz: "business",
  eng: "engagement",
  usr: "users",
  dis: "discovery",
  pdp: "pdp",
  src: "search",
  cart: "cart",
};

const dePath = path.join(__dirname, "de-locale.json");
const deRows = JSON.parse(fs.readFileSync(dePath, "utf8"));
if (deRows.length !== slugOrder.length) {
  throw new Error(`de-locale.json length ${deRows.length} !== slugOrder ${slugOrder.length}`);
}

const deBySlug = {};
for (const row of deRows) {
  deBySlug[row.slug] = row;
}

let slugIdx = 0;

function mapMetric(oldMetric, sectionId) {
  const slug = slugOrder[slugIdx++];
  const de = deBySlug[slug];
  if (!de || de.slug !== slug) {
    throw new Error(`DE row mismatch at index ${slugIdx - 1}: expected ${slug}, got ${de?.slug}`);
  }
  const whyBlock =
    oldMetric.why && de.why
      ? { why: { en: oldMetric.why.en, pl: oldMetric.why.pl, de: de.why } }
      : {};
  return {
    id: slug,
    priority: oldMetric.p,
    isNew: !!oldMetric.isNew,
    name: { en: oldMetric.n.en, pl: oldMetric.n.pl, de: de.name },
    tag: { en: oldMetric.tag.en, pl: oldMetric.tag.pl, de: de.tag },
    tagColor: oldMetric.tc,
    ...whyBlock,
    formula: { en: oldMetric.f.en, pl: oldMetric.f.pl, de: de.formula },
    description: { en: oldMetric.d.en, pl: oldMetric.d.pl, de: de.description },
    example: { en: oldMetric.e.en, pl: oldMetric.e.pl, de: de.example },
    benchmark: { en: oldMetric.b.en, pl: oldMetric.b.pl, de: de.benchmark },
  };
}

const OUT = [];
for (const sec of OLD) {
  const newId = sectionMap[sec.id] || sec.id;
  OUT.push({
    id: newId,
    isNew: !!sec.isNew,
    label: { en: sec.lbl.en, pl: sec.lbl.pl, de: deSectionLabel(newId) },
    title: { en: sec.ttl.en, pl: sec.ttl.pl, de: deSectionTitle(newId) },
    metrics: sec.metrics.map((mm) => mapMetric(mm, newId)),
  });
}

function deSectionLabel(id) {
  const map = {
    business: "Business-KPIs",
    engagement: "Engagement",
    users: "Nutzer & Traffic",
    discovery: "Produktentdeckung",
    pdp: "Produktseite",
    search: "Suche",
    cart: "Warenkorb & Kauf",
  };
  return map[id] || id;
}

function deSectionTitle(id) {
  const map = {
    business: "Fehlende Business-KPIs",
    engagement: "Nutzer-Engagement",
    users: "Nutzer & Traffic",
    discovery: "Produktentdeckung & Navigation",
    pdp: "Produktseite (PDP)",
    search: "Such-Erlebnis",
    cart: "Warenkorb & Kauf",
  };
  return map[id] || id;
}

const header = `/**
 * METRICS DICTIONARY — DATA FILE
 *
 * HOW TO UPDATE:
 * 1. Edit EN/PL in src/metricsData.ts, edit DE in scripts/de-locale.json, then run: node scripts/gen-metrics.mjs
 * 2. To add a new metric: copy an existing object, change the id, fill all 3 language fields
 * 3. Update APP_CONFIG.version and APP_CONFIG.lastUpdated in App.jsx
 * 4. Run: git add . && git commit -m "v1.x.x - description" && git push
 * Netlify will auto-deploy within ~2 minutes.
 *
 * VERSION HISTORY:
 * v1.0.0 (2025-05-13) — Initial release, 41 metrics, EN/PL/DE
 */

`;

const body = `export const METRIC_SECTIONS = ${JSON.stringify(OUT, null, 2)};\n\nexport const METRIC_COUNT = METRIC_SECTIONS.reduce((s, sec) => s + sec.metrics.length, 0);\n`;

fs.writeFileSync(path.join(root, "src", "data", "metrics.js"), header + body, "utf8");
console.log("Wrote src/data/metrics.js", OUT.length, "sections", slugIdx, "metrics");
