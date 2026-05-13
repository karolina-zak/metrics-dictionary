import { useEffect, useMemo, useState } from "react";
import { METRIC_SECTIONS } from "./data/metrics.js";
import { TX } from "./data/translations.js";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import PriorityLegend from "./components/PriorityLegend.jsx";
import TabBar from "./components/TabBar.jsx";
import MetricCard from "./components/MetricCard.jsx";

const APP_CONFIG = {
  version: "1.0.0",
  lastUpdated: "2025-05-13",
  dashboardUrl: "DASHBOARD_URL_PLACEHOLDER",
};

const LANG_KEY = "ux-metrics-dictionary-lang";

function formatBadge(t, appConfig, lang) {
  const d = new Date(appConfig.lastUpdated + "T12:00:00");
  const locale = lang === "de" ? "de-DE" : lang === "pl" ? "pl-PL" : "en-GB";
  const dateStr = d.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });
  return `${t.version} ${appConfig.version} · ${t.updated} ${dateStr}`;
}

function matchesPriority(metric, priorityFilter) {
  if (!priorityFilter) return true;
  return metric.priority === priorityFilter;
}

function matchesQuery(metric, q, lang) {
  if (!q) return true;
  const hay = [
    metric.name[lang],
    metric.description[lang],
    metric.formula[lang],
    metric.example[lang],
    metric.benchmark[lang],
    metric.why?.[lang],
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return hay.includes(q);
}

export default function App() {
  const [lang, setLang] = useState(() => {
    try {
      const s = localStorage.getItem(LANG_KEY);
      if (s === "en" || s === "pl" || s === "de") return s;
    } catch {
      /* ignore */
    }
    return "en";
  });
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  const t = TX[lang];

  useEffect(() => {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || document.documentElement.scrollTop);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const q = query.trim().toLowerCase();
  const flatMode = Boolean(q);

  const filtered = useMemo(() => {
    const out = [];
    for (const sec of METRIC_SECTIONS) {
      if (activeTab !== "all" && sec.id !== activeTab) continue;
      const metrics = sec.metrics.filter((m) => matchesPriority(m, priorityFilter) && matchesQuery(m, q, lang));
      if (metrics.length) out.push({ ...sec, metrics });
    }
    return out;
  }, [activeTab, priorityFilter, q, lang]);

  const flatMetrics = useMemo(() => {
    const rows = [];
    for (const sec of filtered) {
      for (const m of sec.metrics) {
        rows.push({ metric: m, sectionTitle: sec.title[lang] });
      }
    }
    return rows;
  }, [filtered, lang]);

  const tabs = useMemo(() => {
    const countInSection = (sec) =>
      sec.metrics.filter((m) => matchesPriority(m, priorityFilter) && matchesQuery(m, q, lang)).length;

    const allCount = METRIC_SECTIONS.reduce((s, sec) => s + countInSection(sec), 0);

    return [
      { id: "all", label: t.all, count: allCount, isNew: false },
      ...METRIC_SECTIONS.map((sec) => ({
        id: sec.id,
        label: sec.label[lang],
        count: countInSection(sec),
        isNew: Boolean(sec.isNew),
      })),
    ];
  }, [t, lang, q, priorityFilter]);

  const badgeText = formatBadge(t, APP_CONFIG, lang);

  const togglePriority = (p) => {
    setPriorityFilter((cur) => (cur === p ? null : p));
  };

  const selectTab = (id) => {
    setActiveTab(id);
    setQuery("");
  };

  return (
    <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 16px 48px" }}>
      <Header t={t} lang={lang} setLang={setLang} appConfig={APP_CONFIG} badgeText={badgeText} dashboardUrl={APP_CONFIG.dashboardUrl} />

      <SearchBar value={query} onChange={setQuery} placeholder={t.search} />

      <PriorityLegend t={t} selectedPriority={priorityFilter} onToggle={togglePriority} />

      <TabBar tabs={tabs} activeTab={activeTab} onSelect={selectTab} />

      {flatMode ? (
        flatMetrics.length === 0 ? (
          <p style={{ textAlign: "center", color: "var(--color-text-muted)", padding: "2rem 0" }}>{t.noResults}</p>
        ) : (
          <div style={{ marginTop: 18 }}>
            {flatMetrics.map(({ metric, sectionTitle }) => (
              <MetricCard key={metric.id} metric={metric} lang={lang} t={t} sectionTitle={sectionTitle} flatMode />
            ))}
          </div>
        )
      ) : filtered.length === 0 ? (
        <p style={{ textAlign: "center", color: "var(--color-text-muted)", padding: "2rem 0" }}>{t.noResults}</p>
      ) : (
        <div style={{ marginTop: 18 }}>
          {filtered.map((sec) => (
            <section key={sec.id} style={{ marginBottom: 8 }}>
              <h2
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: sec.isNew ? "var(--new-green)" : "var(--color-text-muted)",
                  borderBottom: sec.isNew ? "2px solid var(--new-green)" : "1px solid var(--color-border)",
                  paddingBottom: 6,
                  margin: "22px 0 10px",
                }}
              >
                {sec.title[lang]}
              </h2>
              {sec.metrics.map((metric) => (
                <MetricCard key={metric.id} metric={metric} lang={lang} t={t} flatMode={false} />
              ))}
            </section>
          ))}
        </div>
      )}

      {scrollY > 300 && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            right: 18,
            bottom: 22,
            zIndex: 50,
            padding: "10px 14px",
            borderRadius: "var(--radius-pill)",
            border: "1px solid var(--color-border-strong)",
            background: "var(--color-surface)",
            boxShadow: "0 6px 20px rgba(15,23,42,0.12)",
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
            color: "var(--color-text)",
          }}
        >
          {t.scrollTop}
        </button>
      )}
    </div>
  );
}
