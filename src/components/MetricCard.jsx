const TAG_STYLES = {
  red: { bg: "var(--tag-red-bg)", color: "var(--tag-red-tx)" },
  amber: { bg: "var(--tag-amber-bg)", color: "var(--tag-amber-tx)" },
  green: { bg: "var(--tag-green-bg)", color: "var(--tag-green-tx)" },
  blue: { bg: "var(--tag-blue-bg)", color: "var(--tag-blue-tx)" },
};

const PRIORITY_BORDER = { 1: "var(--p1)", 2: "var(--p2)", 3: "var(--p3)", 4: "var(--p4)" };
const PRIORITY_BG = { 1: "var(--p1-bg)", 2: "var(--p2-bg)", 3: "var(--p3-bg)", 4: "var(--p4-bg)" };
const PRIORITY_TX = { 1: "var(--p1-tx)", 2: "var(--p2-tx)", 3: "var(--p3-tx)", 4: "var(--p4-tx)" };

const BLOCKS = [
  ["formula", "formula"],
  ["measures", "description"],
  ["example", "example"],
  ["benchmark", "benchmark"],
];

export default function MetricCard({ metric, lang, t, sectionTitle, flatMode }) {
  const tc = TAG_STYLES[metric.tagColor] || TAG_STYLES.blue;
  const leftBorder = metric.isNew ? "4px solid var(--new-green)" : `4px solid ${PRIORITY_BORDER[metric.priority]}`;
  const outline = metric.isNew ? "1px dashed var(--new-green)" : "none";

  return (
    <article
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderLeft: leftBorder,
        outline,
        outlineOffset: metric.isNew ? -1 : 0,
        borderRadius: "var(--radius-md)",
        padding: "14px 16px",
        marginBottom: 10,
      }}
    >
      {flatMode && sectionTitle && (
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--new-green)", marginBottom: 6 }}>
          {sectionTitle}
        </div>
      )}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
        <h2 style={{ margin: 0, fontSize: 15, fontWeight: 600, flex: "1 1 200px" }}>{metric.name[lang]}</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
          {metric.isNew && (
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                background: "var(--new-green)",
                color: "#fff",
                borderRadius: "var(--radius-pill)",
                padding: "2px 8px",
              }}
            >
              {t.newLabel}
            </span>
          )}
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              padding: "2px 8px",
              borderRadius: "var(--radius-pill)",
              background: PRIORITY_BG[metric.priority],
              color: PRIORITY_TX[metric.priority],
            }}
          >
            {t.priorities[metric.priority]}
          </span>
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              padding: "2px 8px",
              borderRadius: "var(--radius-pill)",
              background: tc.bg,
              color: tc.color,
            }}
          >
            {metric.tag[lang]}
          </span>
        </div>
      </div>

      {metric.why && metric.priority <= 2 && (
        <div
          style={{
            fontSize: 13,
            color: "var(--why-tx)",
            background: "var(--why-bg)",
            borderLeft: "3px solid var(--why-border)",
            borderRadius: "var(--radius-sm)",
            padding: "8px 10px",
            marginBottom: 8,
            lineHeight: 1.55,
          }}
        >
          <strong>{t.labels.whyCritical} </strong>
          {metric.why[lang]}
        </div>
      )}

      {BLOCKS.map(([labelKey, field]) => (
        <div key={field} style={{ marginTop: 6 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: "var(--color-text-muted)", marginBottom: 2 }}>{t.labels[labelKey]}</div>
          {field === "formula" ? (
            <div
              style={{
                fontSize: 12,
                color: "var(--p3)",
                fontFamily: "var(--font-mono)",
                background: "var(--color-bg)",
                borderRadius: "var(--radius-sm)",
                padding: "8px 10px",
                lineHeight: 1.5,
                whiteSpace: "pre-wrap",
              }}
            >
              {metric.formula[lang]}
            </div>
          ) : field === "benchmark" ? (
            <div
              style={{
                fontSize: 13,
                color: "var(--color-text-muted)",
                background: "var(--color-bg)",
                borderRadius: "var(--radius-sm)",
                padding: "8px 10px",
                lineHeight: 1.55,
              }}
            >
              {metric[field][lang]}
            </div>
          ) : field === "example" ? (
            <div
              style={{
                fontSize: 13,
                color: "var(--color-text-muted)",
                borderLeft: "3px solid var(--color-border-strong)",
                paddingLeft: 10,
                lineHeight: 1.55,
              }}
            >
              {metric[field][lang]}
            </div>
          ) : (
            <p style={{ margin: 0, fontSize: 13, color: "var(--color-text-muted)", lineHeight: 1.55 }}>{metric[field][lang]}</p>
          )}
        </div>
      ))}
    </article>
  );
}
