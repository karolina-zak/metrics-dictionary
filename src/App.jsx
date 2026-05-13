import { useEffect, useMemo, useRef, useState } from "react";
import { METRIC_SECTIONS } from "./data/metrics.js";
import { TX } from "./data/translations.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import SearchBar from "./components/SearchBar.jsx";
import SortFilterBar from "./components/SortFilterBar.jsx";
import TabBar from "./components/TabBar.jsx";
import MetricCard from "./components/MetricCard.jsx";
import LanguageSwitcher from "./components/LanguageSwitcher.jsx";

const APP_CONFIG = {
  version: "1.0.0",
  lastUpdated: "2025-05-13",
  dashboardUrl:
    "https://experience.adobe.com/@bsh/analytics/spa/#/workspace/edit/69972b7b07ba86578b260c74",
};

/** @param {unknown} url */
function isConfiguredDashboardUrl(url) {
  if (typeof url !== "string" || !url.trim()) return false;
  if (url.includes("DASHBOARD_URL_PLACEHOLDER")) return false;
  try {
    const u = new URL(url);
    return u.protocol === "https:" || u.protocol === "http:";
  } catch {
    return false;
  }
}

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const LANG_KEY = "ux-metrics-dictionary-lang";
const SEARCH_INPUT_ID = "metric-search";

const TOTAL_COUNT = METRIC_SECTIONS.reduce((s, sec) => s + sec.metrics.length, 0);

function formatBadge(t, appConfig, lang) {
  const d = new Date(appConfig.lastUpdated + "T12:00:00");
  const locale = lang === "de" ? "de-DE" : lang === "pl" ? "pl-PL" : "en-GB";
  const dateStr = d.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });
  return `${t.version} ${appConfig.version} · ${t.updated} ${dateStr}`;
}


/** Expanded rail width — fixed for all locales; sized for longest DE category pills (icon + label + count). */
const SIDEBAR_EXPANDED_WIDTH_PX = 304;
const SIDEBAR_COLLAPSED_WIDTH_PX = 64;
const SIDEBAR_COLLAPSED_KEY = "ux-metrics-dictionary-sidebar-collapsed";

/** @returns {unknown} Icon only */
function SidebarChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** @returns {unknown} Icon only */
function SidebarChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** @param {number} minWidthPx */
function useMinWidth(minWidthPx) {
  const mq = `(min-width: ${minWidthPx}px)`;
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" && typeof window.matchMedia !== "undefined" ? window.matchMedia(mq).matches : true,
  );

  useEffect(() => {
    const query = `(min-width: ${minWidthPx}px)`;
    const mediaQuery = window.matchMedia(query);
    const onChange = () => setMatches(mediaQuery.matches);
    onChange();
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, [minWidthPx]);

  return matches;
}

/** @param {number[]} selected empty = show all priorities */
function matchesPriorityFilter(metric, selected) {
  if (!selected.length) return true;
  return selected.includes(metric.priority);
}

/** Returns true if metric matches query. */
function matchesQuery(metric, q, lang) {
  if (!q) return true;
  const titleLower = (metric.name[lang] || "").toLowerCase();
  if (titleLower.includes(q)) return true;
  const body = [
    metric.description[lang],
    metric.formula[lang],
    metric.example[lang],
    metric.benchmark[lang],
    metric.why?.[lang],
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return body.includes(q);
}

function isTitleMatch(metric, q, lang) {
  if (!q) return false;
  return (metric.name[lang] || "").toLowerCase().includes(q);
}

export default function App() {
  const mainRef = useRef(/** @type {HTMLElement | null} */ (null));
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
  /** @type {[number[], React.Dispatch<React.SetStateAction<number[]>>]} */
  const [selectedPriorities, setSelectedPriorities] = useState([]);
  const [sortBy, setSortBy] = useState("default"); // "default" | "priority"
  const [scrollY, setScrollY] = useState(0);
  const [liveText, setLiveText] = useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    try {
      return localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === "1";
    } catch {
      /* ignore */
    }
    return false;
  });

  const t = TX[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    let el = document.querySelector('meta[name="description"]');
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("name", "description");
      document.head.appendChild(el);
    }
    el.setAttribute("content", t.metaDescription);
  }, [t.metaDescription]);

  useEffect(() => {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  useEffect(() => {
    try {
      localStorage.setItem(SIDEBAR_COLLAPSED_KEY, sidebarCollapsed ? "1" : "0");
    } catch {
      /* ignore */
    }
  }, [sidebarCollapsed]);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || document.documentElement.scrollTop);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to metric if URL hash present on mount
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ block: "start", behavior: prefersReducedMotion() ? "auto" : "smooth" });
        el.focus({ preventScroll: true });
      }, 100);
    }
  }, []);

  const q = query.trim().toLowerCase();
  const flatMode = Boolean(q) || sortBy === "priority";

  const filtered = useMemo(() => {
    const out = [];
    for (const sec of METRIC_SECTIONS) {
      if (activeTab !== "all" && sec.id !== activeTab) continue;
      const metrics = sec.metrics.filter((m) => matchesPriorityFilter(m, selectedPriorities) && matchesQuery(m, q, lang));
      if (metrics.length) out.push({ ...sec, metrics });
    }
    return out;
  }, [activeTab, selectedPriorities, q, lang]);

  const flatMetrics = useMemo(() => {
    const rows = [];
    for (const sec of filtered) {
      for (const m of sec.metrics) {
        rows.push({ metric: m, sectionTitle: sec.title[lang] });
      }
    }

    if (sortBy === "priority") {
      rows.sort((a, b) => a.metric.priority - b.metric.priority);
    } else if (q) {
      rows.sort((a, b) => {
        const aTitle = isTitleMatch(a.metric, q, lang) ? 0 : 1;
        const bTitle = isTitleMatch(b.metric, q, lang) ? 0 : 1;
        return aTitle - bTitle;
      });
    }

    return rows;
  }, [filtered, lang, sortBy, q]);

  const tabs = useMemo(() => {
    const countInSection = (sec) =>
      sec.metrics.filter((m) => matchesPriorityFilter(m, selectedPriorities) && matchesQuery(m, q, lang)).length;
    const allCount = METRIC_SECTIONS.reduce((s, sec) => s + countInSection(sec), 0);
    return [
      { id: "all", label: t.all, count: allCount },
      ...METRIC_SECTIONS.map((sec) => ({
        id: sec.id,
        label: sec.label[lang],
        count: countInSection(sec),
      })),
    ];
  }, [t, lang, q, selectedPriorities]);

  const { headerHeading, headerSubtitle } = useMemo(() => {
    if (activeTab === "all") {
      return { headerHeading: t.headerBrowseAllTitle, headerSubtitle: t.headerBrowseAllSubtitle };
    }
    const sec = METRIC_SECTIONS.find((s) => s.id === activeTab);
    const sectionDesc = /** @type {Record<string, string> | undefined} */ (t.sectionHeaderDesc);
    const desc = sectionDesc?.[activeTab] ?? "";
    if (sec && desc) {
      return { headerHeading: sec.label[lang] || "", headerSubtitle: desc };
    }
    return { headerHeading: t.appTitle, headerSubtitle: t.appSubtitle };
  }, [activeTab, lang, t]);

  useEffect(() => {
    const suffix =
      lang === "en" ? "UX Metrics Dictionary" : lang === "pl" ? "Słownik metryk UX" : "UX-Metrik-Lexikon";
    document.title = `${headerHeading} — ${suffix}`;
  }, [lang, headerHeading]);

  const visibleCount = flatMode
    ? flatMetrics.length
    : filtered.reduce((sum, sec) => sum + sec.metrics.length, 0);

  const resultsLiveText = useMemo(() => {
    if (visibleCount === 0) return t.noResults;
    if (visibleCount === 1) return t.resultsLive1;
    return t.resultsLiveN.replace("{{count}}", String(visibleCount));
  }, [visibleCount, t]);

  // Debounce aria-live announcements to avoid SR spam during fast typing
  useEffect(() => {
    const id = setTimeout(() => setLiveText(resultsLiveText), 400);
    return () => clearTimeout(id);
  }, [resultsLiveText]);

  const counterText = useMemo(() => {
    if (visibleCount === TOTAL_COUNT && !q && !selectedPriorities.length) {
      return t.showingAll.replace("{{total}}", String(TOTAL_COUNT));
    }
    return t.showingOf
      .replace("{{visible}}", String(visibleCount))
      .replace("{{total}}", String(TOTAL_COUNT));
  }, [visibleCount, q, selectedPriorities, t]);

  const badgeText = formatBadge(t, APP_CONFIG, lang);

  const togglePriority = (p) => {
    setSelectedPriorities((cur) => (cur.includes(p) ? cur.filter((x) => x !== p) : [...cur, p].sort((a, b) => a - b)));
  };

  const clearPriorityFilter = () => setSelectedPriorities([]);

  // P1 fix: do NOT clear query when switching tabs — query persists across categories
  const selectTab = (id) => {
    setActiveTab(id);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  };

  const onSkipToMain = (e) => {
    e.preventDefault();
    const node = mainRef.current;
    if (!node) return;
    node.focus({ preventScroll: true });
    node.scrollIntoView({ block: "start", behavior: prefersReducedMotion() ? "auto" : "smooth" });
  };

  const abbrevList = t.abbreviations;
  const pinnedCategorySidebar = useMinWidth(761);
  const sidebarRailPx = pinnedCategorySidebar
    ? sidebarCollapsed
      ? SIDEBAR_COLLAPSED_WIDTH_PX
      : SIDEBAR_EXPANDED_WIDTH_PX
    : 0;

  const railToggleBtn = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 36,
    height: 36,
    padding: 0,
    flexShrink: 0,
    borderRadius: "var(--radius-sm)",
    border: "1px solid var(--color-border-strong)",
    background: "var(--color-bg)",
    color: "var(--color-text)",
    cursor: "pointer",
  };

  const langFooterSx = {
    flexShrink: 0,
    marginTop: "auto",
    paddingTop: pinnedCategorySidebar ? (sidebarCollapsed ? 10 : "clamp(15px, 2.4vw, 24px)") : 0,
    borderTop: pinnedCategorySidebar ? "1px solid var(--color-border)" : undefined,
    alignSelf: "stretch",
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <a href="#main-content" className="skip-link" onClick={onSkipToMain}>
        {t.skipToContent}
      </a>

      <aside
        className={
          pinnedCategorySidebar
            ? sidebarCollapsed
              ? "app-sidebar app-sidebar--pinned app-sidebar--collapsed"
              : "app-sidebar app-sidebar--pinned"
            : "app-sidebar app-sidebar--strip"
        }
        style={
          pinnedCategorySidebar
            ? { width: sidebarRailPx }
            : {
                position: "sticky",
                top: 0,
                zIndex: 30,
                width: "100%",
                boxSizing: "border-box",
                background: "var(--color-surface)",
                overflowX: "auto",
                overflowY: "hidden",
                borderBottom: "1px solid var(--color-border)",
              }
        }
      >
        {pinnedCategorySidebar ? (
          <>
            <div
              style={{
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  marginBottom: "clamp(6px, 1vw, 12px)",
                  paddingBottom: 0,
                  minHeight: 48,
                  ...(sidebarCollapsed
                    ? {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }
                    : {
                        position: "relative",
                        paddingRight: 42,
                      }),
                }}
              >
                <button
                  type="button"
                  style={{
                    ...railToggleBtn,
                    ...(sidebarCollapsed ? {} : { position: "absolute", top: 0, right: 0 }),
                  }}
                  onClick={() => setSidebarCollapsed((c) => !c)}
                  aria-label={sidebarCollapsed ? t.sidebarExpandAria : t.sidebarCollapseAria}
                  aria-expanded={!sidebarCollapsed}
                  aria-controls="metrics-category-tablist"
                >
                  {sidebarCollapsed ? <SidebarChevronRight /> : <SidebarChevronLeft />}
                </button>
                <h2
                  lang={lang}
                  className={sidebarCollapsed ? "sr-only" : undefined}
                  style={{
                    margin: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    fontSize: "clamp(15px, 1.85vw, 18px)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.25,
                    color: "var(--color-text)",
                  }}
                >
                  {t.appTitle}
                </h2>
              </div>
              <div style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
                <TabBar
                  tabs={tabs}
                  activeTab={activeTab}
                  onSelect={selectTab}
                  t={t}
                  orientation="vertical"
                  hideSupportingText={sidebarCollapsed}
                  listId="metrics-category-tablist"
                />
              </div>
            </div>
            <div style={langFooterSx}>
              <LanguageSwitcher
                t={t}
                lang={lang}
                setLang={setLang}
                orientation="row"
                collapsedSolo={sidebarCollapsed}
              />
            </div>
          </>
        ) : (
          <TabBar
            tabs={tabs}
            activeTab={activeTab}
            onSelect={selectTab}
            t={t}
            orientation="horizontal"
          />
        )}
      </aside>

      <div
        style={{
          marginLeft: pinnedCategorySidebar ? sidebarRailPx : 0,
          minHeight: pinnedCategorySidebar ? "100vh" : undefined,
          transition: pinnedCategorySidebar ? "margin-left 220ms ease" : undefined,
        }}
      >
        <div className="app-main-shell">
          <Header
            t={t}
            lang={lang}
            setLang={setLang}
            showLangSwitcher={!pinnedCategorySidebar}
            dashboardHref={
              isConfiguredDashboardUrl(APP_CONFIG.dashboardUrl) ? APP_CONFIG.dashboardUrl : null
            }
            headerHeading={headerHeading}
            headerSubtitle={headerSubtitle}
          />

          <main ref={mainRef} id="main-content" tabIndex={-1}>
            {/* Debounced aria-live region — not direct resultsLiveText to avoid SR spam */}
            <div id="metrics-results-live" aria-live="polite" aria-atomic="true" className="sr-only">
              {liveText}
            </div>

            {/* Categories description — OUTSIDE role="tabpanel" per WAI-ARIA tabs pattern; tablist lives in <aside> */}
            <p
              style={{
                margin: "clamp(12px, 2.4vw, 24px) 0 0",
                fontSize: "var(--ui-body-secondary-size)",
                color: "var(--color-text-muted)",
                lineHeight: 1.55,
                maxWidth: "72ch",
              }}
            >
              <strong style={{ color: "var(--color-text)" }}>{t.categoriesHeading}</strong> {t.categoriesHelp}
            </p>

            <SearchBar
              id={SEARCH_INPUT_ID}
              label={t.searchLabel}
              value={query}
              onChange={setQuery}
              t={t}
            />

            <SortFilterBar
              t={t}
              sortBy={sortBy}
              onSortChange={setSortBy}
              selectedPriorities={selectedPriorities}
              onTogglePriority={togglePriority}
              onClearPriorityFilter={clearPriorityFilter}
            />

            {/* P1 ARIA fix: tabpanel wraps ONLY results content, not tablist */}
            <div role="tabpanel" id="metrics-tabpanel" aria-labelledby={`tab-${activeTab}`}>
              {/* Counter — directly above results */}
              <div
                style={{
                  fontSize: "var(--ui-body-secondary-size)",
                  color: "var(--color-text-muted)",
                  marginTop: "clamp(12px, 2.2vw, 22px)",
                  marginBottom: "clamp(6px, 1.1vw, 10px)",
                }}
              >
                {counterText}
              </div>

              {flatMode ? (
                flatMetrics.length === 0 ? (
                  <p style={{ textAlign: "center", color: "var(--color-text-muted)", padding: "2rem 0" }}>{t.noResults}</p>
                ) : (
                  <div style={{ marginTop: "clamp(14px, 2.5vw, 24px)" }}>
                    <h2 className="sr-only">{t.flatResultsHeading}</h2>
                    {flatMetrics.map(({ metric, sectionTitle }) => (
                      <MetricCard
                        key={metric.id}
                        metric={metric}
                        lang={lang}
                        t={t}
                        sectionTitle={sectionTitle}
                        flatMode
                        highlight={q}
                      />
                    ))}
                  </div>
                )
              ) : filtered.length === 0 ? (
                <p style={{ textAlign: "center", color: "var(--color-text-muted)", padding: "2rem 0" }}>{t.noResults}</p>
              ) : (
                <div style={{ marginTop: "clamp(14px, 2.5vw, 24px)" }}>
                  {filtered.map((sec) => (
                    <section key={sec.id} style={{ marginBottom: 8 }}>
                      <h2
                        style={{
                          fontSize: "var(--ui-caps-label-font-size)",
                          fontWeight: 700,
                          letterSpacing: "var(--ui-caps-label-tracking)",
                          textTransform: "uppercase",
                          color: "var(--color-text-muted)",
                          borderBottom: "1px solid var(--color-border)",
                          paddingBottom: 8,
                          margin: "clamp(18px, 3vw, 30px) 0 clamp(10px, 1.6vw, 14px)",
                        }}
                      >
                        {sec.title[lang]}
                      </h2>
                      {sec.metrics.map((metric) => (
                        <MetricCard key={metric.id} metric={metric} lang={lang} t={t} flatMode={false} highlight={q} />
                      ))}
                    </section>
                  ))}
                </div>
              )}
            </div>
          </main>

          <details
            id="abbreviations"
            style={{
              marginTop: "clamp(20px, 3.5vw, 40px)",
              fontSize: "var(--ui-field-font-size)",
            }}
          >
            <summary
              style={{
                cursor: "pointer",
                fontWeight: 600,
                color: "var(--color-text)",
              }}
            >
              {t.abbreviationsTitle}
            </summary>
            <p style={{ margin: "8px 0 10px", color: "var(--color-text-muted)", lineHeight: 1.5 }}>{t.abbreviationsIntro}</p>
            <dl style={{ margin: 0, display: "grid", gap: "8px 16px", gridTemplateColumns: "auto 1fr" }}>
              {abbrevList.map((row) => (
                <div key={row.k} style={{ display: "contents" }}>
                  <dt
                    style={{
                      margin: 0,
                      fontWeight: 700,
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--ui-body-secondary-size)",
                      color: "var(--color-text)",
                    }}
                  >
                    {row.k}
                  </dt>
                  <dd style={{ margin: 0, color: "var(--color-text-muted)", lineHeight: 1.5 }}>{row.v}</dd>
                </div>
              ))}
            </dl>
          </details>

          <Footer badgeText={badgeText} t={t} />
        </div>

        {scrollY > 300 && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label={t.scrollTopAria}
            style={{
              position: "fixed",
              right: 18,
              bottom: "max(22px, env(safe-area-inset-bottom, 22px))",
              zIndex: 50,
              minHeight: 40,
              padding: "var(--ui-pill-pad-block) var(--ui-pill-pad-inline)",
              borderRadius: "var(--radius-pill)",
              border: "1px solid var(--color-border-strong)",
              background: "var(--color-surface)",
              boxShadow: "0 6px 20px rgba(15,23,42,0.12)",
              fontSize: "var(--ui-nav-font-size)",
              fontWeight: "var(--ui-nav-font-weight)",
              cursor: "pointer",
              color: "var(--color-text)",
            }}
          >
            {t.scrollTop}
          </button>
        )}
      </div>
    </div>
  );
}
