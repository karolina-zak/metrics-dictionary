import { useMemo, useState } from "react";
import {
  PRIORITY_BG,
  PRIORITY_COLORS,
  PRIORITY_TEXT,
  SECTIONS,
  TAG_STYLES,
  TOTAL,
  TX,
} from "./metricsData";

type Lang = "pl" | "en";

export default function App() {
  const [lang, setLang] = useState<Lang>("pl");
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState("all");
  const t = TX[lang];

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return SECTIONS.map((sec) => ({
      ...sec,
      metrics: sec.metrics.filter((m) => {
        const inSec = activeSection === "all" || activeSection === sec.id;
        const inQ =
          !q ||
          m.n[lang].toLowerCase().includes(q) ||
          (m.d && m.d[lang].toLowerCase().includes(q)) ||
          (m.f && m.f[lang].toLowerCase().includes(q));
        return inSec && inQ;
      }),
    })).filter((sec) => sec.metrics.length > 0);
  }, [lang, query, activeSection]);

  const visibleCount = filtered.reduce((s, sec) => s + sec.metrics.length, 0);

  const pTagStyle = (p: keyof typeof PRIORITY_BG) => ({
    background: PRIORITY_BG[p],
    color: PRIORITY_TEXT[p],
    fontSize: 10,
    fontWeight: 700,
    padding: "2px 8px",
    borderRadius: 20,
    whiteSpace: "nowrap" as const,
  });

  const tagStyle = (tc: string) => {
    const s = TAG_STYLES[tc as keyof typeof TAG_STYLES] || TAG_STYLES.blue;
    return {
      background: s.bg,
      color: s.color,
      fontSize: 10,
      fontWeight: 500,
      padding: "2px 8px",
      borderRadius: 20,
      whiteSpace: "nowrap" as const,
    };
  };

  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        color: "var(--color-text-primary)",
        padding: "0.5rem 1rem 2rem",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      <div style={{ background: "#E0F5F0", borderRadius: "var(--border-radius-lg)", padding: "8px 13px", marginBottom: 12, fontSize: 12, color: "#0D6E55", fontWeight: 500 }}>
        {t.banner}
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap", alignItems: "center" }}>
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveSection("all");
          }}
          placeholder={t.search}
          style={{
            flex: 1,
            minWidth: 160,
            padding: "7px 11px",
            border: "0.5px solid var(--color-border-secondary)",
            borderRadius: "var(--border-radius-md)",
            background: "var(--color-background-primary)",
            color: "var(--color-text-primary)",
            fontSize: 13,
          }}
        />
        <div style={{ display: "flex", border: "0.5px solid var(--color-border-secondary)", borderRadius: 20, overflow: "hidden", flexShrink: 0 }}>
          {(["pl", "en"] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              style={{
                padding: "5px 15px",
                fontSize: 12,
                fontWeight: 500,
                cursor: "pointer",
                background: lang === l ? "var(--color-text-primary)" : "transparent",
                color: lang === l ? "var(--color-background-primary)" : "var(--color-text-secondary)",
                border: "none",
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 12, padding: "9px 13px", background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-lg)" }}>
        {([1, 2, 3, 4] as const).map((p) => (
          <div key={p} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 500, color: "var(--color-text-secondary)" }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: PRIORITY_COLORS[p], flexShrink: 0 }} />
            <span>{t[`l${p}` as "l1" | "l2" | "l3" | "l4"]}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 14 }}>
        {[{ id: "all", lbl: t.all, isNew: false }, ...SECTIONS.map((s) => ({ id: s.id, lbl: s.lbl[lang], isNew: Boolean(s.isNew) }))].map((tab) => {
          const isOn = activeSection === tab.id;
          const cnt = tab.id === "all" ? (query ? visibleCount : TOTAL) : SECTIONS.find((s) => s.id === tab.id)?.metrics.length;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveSection(tab.id);
                setQuery("");
              }}
              style={{
                fontSize: 12,
                fontWeight: 500,
                padding: "4px 12px",
                borderRadius: 20,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 4,
                whiteSpace: "nowrap",
                background: isOn ? "var(--color-text-primary)" : "transparent",
                color: isOn ? "var(--color-background-primary)" : tab.isNew ? "#0D6E55" : "var(--color-text-primary)",
                border: isOn ? "0.5px solid var(--color-text-primary)" : tab.isNew ? "0.5px solid #0D6E55" : "0.5px solid var(--color-border-secondary)",
              }}
            >
              {tab.lbl}
              <span style={{ fontSize: 11, padding: "1px 6px", borderRadius: 20, background: isOn ? "rgba(255,255,255,0.22)" : "rgba(128,128,128,0.15)" }}>{cnt}</span>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 && <div style={{ fontSize: 13, color: "var(--color-text-secondary)", padding: "2rem 0", textAlign: "center" }}>{t.noRes}</div>}
      {filtered.map((sec) => (
        <div key={sec.id}>
          <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: sec.isNew ? "#0D6E55" : "var(--color-text-secondary)", borderBottom: sec.isNew ? "2px solid #0D6E55" : "0.5px solid var(--color-border-tertiary)", paddingBottom: 5, margin: "1.4rem 0 0.8rem" }}>
            {sec.ttl[lang]}
          </div>
          {sec.metrics.map((m, i) => (
            <div key={i} style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", borderLeft: `4px solid ${PRIORITY_COLORS[m.p as keyof typeof PRIORITY_COLORS]}`, outline: "isNew" in m && m.isNew ? "0.5px dashed #0D6E55" : "none", outlineOffset: "isNew" in m && m.isNew ? -1 : 0, padding: "12px 14px", marginBottom: 8 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 7, marginBottom: 8, flexWrap: "wrap" }}>
                <div style={{ fontSize: 13, fontWeight: 500, flex: 1, minWidth: 130 }}>{m.n[lang]}</div>
                <div style={{ display: "flex", gap: 4, flexWrap: "wrap", alignItems: "center", flexShrink: 0 }}>
                  {"isNew" in m && m.isNew ? (
                    <span style={{ fontSize: 10, fontWeight: 700, background: "#0D6E55", color: "#fff", borderRadius: 20, padding: "2px 7px" }}>{t.newLabel}</span>
                  ) : null}
                  <span style={pTagStyle(m.p as keyof typeof PRIORITY_BG)}>{t.pt[m.p as keyof typeof t.pt]}</span>
                  <span style={tagStyle(m.tc)}>{m.tag[lang]}</span>
                </div>
              </div>
              {m.why && m.p <= 2 && (
                <div style={{ fontSize: 12, color: "#7B1F1F", background: "#FCEBEB", borderRadius: "var(--border-radius-md)", padding: "6px 10px", marginBottom: 7, lineHeight: 1.55, borderLeft: "3px solid #A32D2D" }}>
                  <strong>{t.lw} </strong>
                  {m.why[lang]}
                </div>
              )}
              {(
                [
                  ["lf", "f"],
                  ["ld", "d"],
                  ["le", "e"],
                  ["lb", "b"],
                ] as const
              ).map(([lkey, dkey]) => {
                const row = m[dkey];
                if (!row) return null;
                return (
                  <div key={lkey}>
                    <div style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-secondary)", margin: "5px 0 2px" }}>{t[lkey]}</div>
                    {lkey === "lf" ? (
                      <div style={{ fontSize: 11, color: "#185FA5", fontFamily: "var(--font-mono)", background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "5px 8px", marginBottom: 4, lineHeight: 1.5 }}>
                        {row[lang].split("\n").map((line, j) => (
                          <span key={j}>
                            {line}
                            {j < row[lang].split("\n").length - 1 && <br />}
                          </span>
                        ))}
                      </div>
                    ) : lkey === "lb" ? (
                      <div style={{ fontSize: 12, color: "var(--color-text-secondary)", background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "6px 8px", lineHeight: 1.6 }}>{row[lang]}</div>
                    ) : lkey === "le" ? (
                      <div style={{ fontSize: 12, color: "var(--color-text-secondary)", borderLeft: "3px solid var(--color-border-secondary)", paddingLeft: 8, lineHeight: 1.6, marginBottom: 4 }}>{row[lang]}</div>
                    ) : (
                      <div style={{ fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: 4 }}>{row[lang]}</div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      ))}

      <footer style={{ marginTop: 24, paddingTop: 16, borderTop: "0.5px solid var(--color-border-tertiary)", fontSize: 12, color: "var(--color-text-secondary)" }}>
        {lang === "pl" ? "Pełny przewodnik PDF (eksport z dokumentacji):" : "Full PDF guide (documentation export):"}{" "}
        <a href="/docs/slownik_metryk_PL.pdf" style={{ color: "var(--color-text-primary)" }}>
          PL
        </a>
        {" · "}
        <a href="/docs/metrics_dictionary_EN.pdf" style={{ color: "var(--color-text-primary)" }}>
          EN
        </a>
      </footer>
    </div>
  );
}
