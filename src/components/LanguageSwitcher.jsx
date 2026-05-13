const langBtnBase = {
  padding: "var(--ui-pill-pad-block) 12px",
  fontSize: "var(--ui-nav-font-size)",
  fontWeight: "var(--ui-nav-font-weight)",
  cursor: "pointer",
  border: "none",
  borderRadius: "var(--radius-sm)",
  background: "transparent",
  color: "var(--color-text-muted)",
};

const LANG_CODES = ["en", "pl", "de"];
const LANG_FULL = { en: "English", pl: "Polski", de: "Deutsch" };

/**
 * @param {{
 *   t: Record<string, string>;
 *   lang: "en" | "pl" | "de";
 *   setLang: (l: "en" | "pl" | "de") => void;
 *   orientation?: "row" | "column";
 *   rail?: boolean;
 *   collapsedSolo?: boolean;
 * }} props
 * rail: narrower buttons for pinned collapsed sidebar (~48px)
 * collapsedSolo: only selected language chip visible — click advances en → pl → de → en (narrow rail)
 */
export default function LanguageSwitcher({ t, lang, setLang, orientation = "row", rail = false, collapsedSolo = false }) {
  const isCol = orientation === "column";

  const cycleLang = () => {
    const i = LANG_CODES.indexOf(lang);
    const next = LANG_CODES[(i + 1) % LANG_CODES.length];
    setLang(next);
  };

  if (collapsedSolo) {
    return (
      <button
        type="button"
        lang={lang}
        onClick={cycleLang}
        aria-label={t.langPressToCycle.replace("{{lang}}", LANG_FULL[lang])}
        style={{
          ...langBtnBase,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px 4px",
          fontSize: "var(--ui-micro-pill-font-size)",
          fontWeight: 700,
          letterSpacing: "0.04em",
          width: "100%",
          minHeight: 36,
          boxSizing: "border-box",
          borderRadius: "var(--radius-sm)",
          background: "var(--color-bg)",
          color: "var(--color-text)",
          boxShadow: "inset 0 0 0 1px var(--color-border-strong)",
        }}
      >
        {lang.toUpperCase()}
      </button>
    );
  }

  return (
    <div
      role="group"
      aria-label={t.langSwitcherLabel}
      style={{
        display: "flex",
        flexDirection: isCol ? "column" : "row",
        flexWrap: "nowrap",
        alignItems: isCol ? "stretch" : "center",
        justifyContent: isCol ? undefined : undefined,
        gap: isCol ? (rail ? 6 : "var(--ui-pill-stack-gap)") : 6,
        width: isCol ? "100%" : undefined,
      }}
    >
      {LANG_CODES.map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          aria-label={LANG_FULL[l]}
          aria-pressed={lang === l}
          onClick={() => setLang(l)}
          style={{
            ...langBtnBase,
            ...(rail
              ? {
                  padding: "7px 6px",
                  fontSize: "var(--ui-micro-pill-font-size)",
                  width: "100%",
                  boxSizing: "border-box",
                }
              : {}),
            background: lang === l ? "var(--color-bg)" : "transparent",
            color: lang === l ? "var(--color-text)" : "var(--color-text-muted)",
            boxShadow: lang === l ? "inset 0 0 0 1px var(--color-border-strong)" : "none",
          }}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
