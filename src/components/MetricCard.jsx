const PRIORITY_BORDER = { 1: "var(--p1)", 2: "var(--p2)", 3: "var(--p3)", 4: "var(--p4)" };
const PRIORITY_BG = { 1: "var(--p1-bg)", 2: "var(--p2-bg)", 3: "var(--p3-bg)", 4: "var(--p4-bg)" };
const PRIORITY_TX = { 1: "var(--p1-tx)", 2: "var(--p2-tx)", 3: "var(--p3-tx)", 4: "var(--p4-tx)" };

const BLOCKS = [
  ["formula", "formula"],
  ["measures", "description"],
  ["example", "example"],
  ["benchmark", "benchmark"],
];

/**
 * Wraps occurrences of `q` in `text` with a yellow <mark>.
 * @param {string} text
 * @param {string} q  lowercase search query
 * @returns {import("react").ReactNode}
 */
function Highlight({ text, q }) {
  if (!q || !text || typeof text !== "string") return text;
  const lower = text.toLowerCase();
  if (!lower.includes(q)) return text;

  const parts = [];
  let last = 0;
  let i = lower.indexOf(q, 0);
  while (i !== -1) {
    if (i > last) parts.push(<span key={`t${last}`}>{text.slice(last, i)}</span>);
    parts.push(
      <mark
        key={`m${i}`}
        style={{
          background: "#ffd700",
          color: "#1a1a1a",
          borderRadius: 2,
          padding: "0 1px",
          fontWeight: 600,
        }}
      >
        {text.slice(i, i + q.length)}
      </mark>,
    );
    last = i + q.length;
    i = lower.indexOf(q, last);
  }
  if (last < text.length) parts.push(<span key={`t${last}`}>{text.slice(last)}</span>);
  return parts;
}

export default function MetricCard({ metric, lang, t, sectionTitle, flatMode, highlight }) {
  const leftBorder = `4px solid ${PRIORITY_BORDER[metric.priority]}`;
  const q = highlight || "";

  return (
    <article
      id={`metric-${metric.id}`}
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderLeft: leftBorder,
        borderRadius: "var(--radius-md)",
        padding: "18px 20px",
        marginBottom: 12,
      }}
    >
      {/* Flat mode: section breadcrumb label with stronger visual treatment */}
      {flatMode && sectionTitle && (
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--color-text)",
            borderLeft: "3px solid var(--color-border-strong)",
            paddingLeft: 8,
            marginBottom: 10,
          }}
        >
          {sectionTitle}
        </div>
      )}

      {/* Card header: name + permalink + badges */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "flex-start", marginBottom: 12 }}>
        <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600, flex: "1 1 200px", lineHeight: 1.35, display: "flex", alignItems: "baseline", gap: 6 }}>
          <Highlight text={metric.name[lang]} q={q} />
          <a
            href={`#metric-${metric.id}`}
            aria-label={`${t.permalinkAria}: ${metric.name[lang]}`}
            style={{
              fontSize: 12,
              color: "var(--color-text-muted)",
              textDecoration: "none",
              flexShrink: 0,
              opacity: 0.6,
            }}
            tabIndex={0}
          >
            #
          </a>
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
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
        </div>
      </div>

      {/* Why label — wording depends on priority: P1 = critical, P2+ = matters */}
      {metric.why && metric.priority <= 2 && (
        <div
          style={{
            fontSize: 13,
            color: "var(--why-tx)",
            background: "var(--why-bg)",
            borderLeft: "3px solid var(--why-border)",
            borderRadius: "var(--radius-sm)",
            padding: "10px 12px",
            marginBottom: 14,
            lineHeight: 1.6,
          }}
        >
          <strong>
            {metric.priority === 1 ? t.labels.whyCritical : t.labels.whyImportant}{" "}
          </strong>
          <Highlight text={metric.why[lang]} q={q} />
        </div>
      )}

      {/* Content blocks */}
      {BLOCKS.map(([labelKey, field], idx) => (
        <div
          key={field}
          style={{
            marginTop: idx === 0 ? 0 : 14,
            paddingTop: idx === 0 ? 0 : 14,
            borderTop: idx === 0 ? "none" : "1px solid var(--color-border)",
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
              marginBottom: 6,
            }}
          >
            {t.labels[labelKey]}
          </div>
          {field === "formula" ? (
            <div
              style={{
                fontSize: 12,
                color: "var(--p3)",
                fontFamily: "var(--font-mono)",
                background: "var(--color-bg)",
                borderRadius: "var(--radius-sm)",
                padding: "10px 12px",
                lineHeight: 1.6,
                whiteSpace: "pre-wrap",
              }}
            >
              <Highlight text={metric.formula[lang]} q={q} />
            </div>
          ) : field === "benchmark" ? (
            <div
              style={{
                fontSize: 13,
                color: "var(--color-text)",
                background: "var(--color-bg)",
                borderRadius: "var(--radius-sm)",
                padding: "10px 12px",
                lineHeight: 1.65,
              }}
            >
              <Highlight text={metric[field][lang]} q={q} />
            </div>
          ) : field === "example" ? (
            <div
              style={{
                fontSize: 13,
                color: "var(--color-text-muted)",
                borderLeft: "3px solid var(--color-border-strong)",
                paddingLeft: 12,
                lineHeight: 1.65,
              }}
            >
              <Highlight text={metric[field][lang]} q={q} />
            </div>
          ) : (
            <p style={{ margin: 0, fontSize: 13, color: "var(--color-text-muted)", lineHeight: 1.65 }}>
              <Highlight text={metric[field][lang]} q={q} />
            </p>
          )}
        </div>
      ))}
    </article>
  );
}
