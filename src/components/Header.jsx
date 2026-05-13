export default function Header({ t, lang, setLang, appConfig, badgeText, dashboardUrl }) {
  return (
    <header
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "12px 16px",
        padding: "16px 0 12px",
        borderBottom: "1px solid var(--color-border)",
        marginBottom: 16,
      }}
    >
      <div style={{ flex: "1 1 220px", minWidth: 0 }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
          <h1 style={{ margin: 0, fontSize: "clamp(1.25rem, 3vw, 1.6rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
            {t.appTitle}
          </h1>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "var(--color-text-muted)",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border-strong)",
              borderRadius: "var(--radius-pill)",
              padding: "3px 10px",
              whiteSpace: "nowrap",
            }}
          >
            {badgeText}
          </span>
        </div>
        <p style={{ margin: "6px 0 0", fontSize: 13, color: "var(--color-text-muted)", maxWidth: "52ch" }}>{t.appSubtitle}</p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", marginLeft: "auto" }}>
        <a
          href={dashboardUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
            padding: "8px 14px",
            borderRadius: "var(--radius-sm)",
            background: "var(--color-text)",
            color: "var(--color-surface)",
            border: "1px solid var(--color-text)",
          }}
        >
          {t.openDashboard} →
        </a>
        <div
          role="group"
          aria-label="Language"
          style={{
            display: "flex",
            border: "1px solid var(--color-border-strong)",
            borderRadius: "var(--radius-pill)",
            overflow: "hidden",
          }}
        >
          {["en", "pl", "de"].map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              style={{
                padding: "7px 12px",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                border: "none",
                background: lang === l ? "var(--color-text)" : "transparent",
                color: lang === l ? "var(--color-surface)" : "var(--color-text-muted)",
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
