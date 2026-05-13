import LanguageSwitcher from "./LanguageSwitcher.jsx";

const ctaBase = {
  display: "inline-flex",
  alignItems: "center",
  gap: "var(--ui-pill-gap)",
  fontSize: "var(--ui-nav-font-size)",
  fontWeight: "var(--ui-nav-font-weight)",
  minHeight: 40,
  padding: "var(--ui-pill-pad-block) var(--ui-pill-pad-inline)",
  borderRadius: "var(--radius-sm)",
  border: "1px solid var(--color-text)",
  whiteSpace: "nowrap",
};

/** Delikatna separacja paska języka od treści nagłówka (nie „pusty” pasek). — tylko wąski layout. */
const LANG_ROW_SEPARATOR = "1px solid rgba(148, 163, 184, 0.45)";

/**
 * @param {{
 *   t: Record<string, unknown>;
 *   lang: string;
 *   setLang: (l: string) => void;
 *   dashboardHref: string | null;
 *   showLangSwitcher?: boolean;
 *   headerHeading: string;
 *   headerSubtitle: string;
 * }} props
 */
export default function Header({ t, lang, setLang, dashboardHref, showLangSwitcher = true, headerHeading, headerSubtitle }) {
  return (
    <header className={`app-header-gallery ${showLangSwitcher ? "" : "app-header-gallery--rail"}`}>
      {showLangSwitcher ? (
        <div
          className="app-header-gallery__lang-row"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            borderBottom: LANG_ROW_SEPARATOR,
          }}
        >
          <LanguageSwitcher t={t} lang={lang} setLang={setLang} orientation="row" />
        </div>
      ) : null}

      {/* Headline + opis (lewo), CTA (prawo) */}
      <div
        className="header-main-row"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) auto",
          alignItems: "start",
        }}
      >
        <div style={{ minWidth: 0, textAlign: "left" }}>
          <h1
            lang={lang}
            style={{
              margin: 0,
              fontSize: "clamp(1.2rem, 2.8vw, 1.55rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            {headerHeading}
          </h1>
          <p
            style={{
              margin: "clamp(10px, 2vw, 14px) 0 0",
              fontSize: 14,
              color: "var(--color-text-muted)",
              lineHeight: 1.5,
              maxWidth: "62ch",
            }}
          >
            {headerSubtitle}
          </p>
        </div>

        <div
          className="header-cta-wrap"
          style={{
            justifySelf: "end",
            flexShrink: 0,
            paddingTop: "clamp(2px, 0.35vw, 6px)",
          }}
        >
          {dashboardHref ? (
            <div className="header-cta-dashboard">
              <a
                href={dashboardHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-describedby="hdr-dash-caption"
                style={{
                  ...ctaBase,
                  textDecoration: "none",
                  background: "var(--color-text)",
                  color: "var(--color-surface)",
                }}
              >
                {t.openDashboard}
                <span aria-hidden="true"> ↗</span>
              </a>
              <p id="hdr-dash-caption" className="header-dashboard-caption">
                {"openDashboardContext" in t && typeof t.openDashboardContext === "string"
                  ? t.openDashboardContext
                  : null}
              </p>
            </div>
          ) : (
            <button
              type="button"
              disabled
              title={t.openDashboardUnavailable}
              aria-label={t.openDashboardUnavailable}
              style={{
                ...ctaBase,
                cursor: "not-allowed",
                opacity: 0.55,
                background: "var(--color-surface)",
                color: "var(--color-text-muted)",
                borderColor: "var(--color-border-strong)",
              }}
            >
              {t.openDashboard}
              <span aria-hidden="true"> ↗</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
