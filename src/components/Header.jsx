const ctaBase = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  fontSize: 13,
  fontWeight: 600,
  padding: "8px 14px",
  borderRadius: "var(--radius-sm)",
  border: "1px solid var(--color-text)",
  whiteSpace: "nowrap",
};

const langBtn = {
  padding: "6px 10px",
  fontSize: 12,
  fontWeight: 600,
  cursor: "pointer",
  border: "none",
  borderRadius: "var(--radius-sm)",
  background: "transparent",
  color: "var(--color-text-muted)",
};

/** Delikatna separacja paska języka od treści nagłówka (nie „pusty” pasek). */
const LANG_ROW_SEPARATOR = "1px solid rgba(148, 163, 184, 0.45)";

const LANG_FULL = { en: "English", pl: "Polski", de: "Deutsch" };

export default function Header({ t, lang, setLang, dashboardHref }) {
  return (
    <header
      style={{
        marginBottom: 20,
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      {/* Sekcja 1: tylko język — prawy górny róg, linia pod spodem */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingTop: 10,
          paddingBottom: 10,
          borderBottom: LANG_ROW_SEPARATOR,
        }}
      >
        <div role="group" aria-label={t.langSwitcherLabel} style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {["en", "pl", "de"].map((l) => (
            <button
              key={l}
              type="button"
              lang={l}
              aria-label={LANG_FULL[l]}
              aria-pressed={lang === l}
              onClick={() => setLang(l)}
              style={{
                ...langBtn,
                background: lang === l ? "var(--color-bg)" : "transparent",
                color: lang === l ? "var(--color-text)" : "var(--color-text-muted)",
                boxShadow: lang === l ? "inset 0 0 0 1px var(--color-border-strong)" : "none",
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Sekcja 2: headline + opis (lewo), CTA (prawo), wyrównanie do góry */}
      <div
        className="header-main-row"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) auto",
          gap: "16px 20px",
          alignItems: "start",
          paddingTop: 16,
          paddingBottom: 18,
        }}
      >
        <div style={{ minWidth: 0, textAlign: "left" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(1.2rem, 2.8vw, 1.55rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            {t.appTitle}
          </h1>
          <p
            style={{
              margin: "8px 0 0",
              fontSize: 14,
              color: "var(--color-text-muted)",
              lineHeight: 1.45,
              maxWidth: "62ch",
            }}
          >
            {t.appSubtitle}
          </p>
        </div>

        <div
          className="header-cta-wrap"
          style={{
            justifySelf: "end",
            flexShrink: 0,
            paddingTop: 2,
          }}
        >
          {dashboardHref ? (
            <a
              href={dashboardHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.openDashboard} — ${t.openDashboardAriaSuffix}`}
              style={{
                ...ctaBase,
                textDecoration: "none",
                background: "var(--color-text)",
                color: "var(--color-surface)",
              }}
            >
              {t.openDashboard} →
            </a>
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
              {t.openDashboard} →
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
