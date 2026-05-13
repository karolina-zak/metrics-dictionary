const PRIORITY_KEYS = [1, 2, 3, 4];
const PRIORITY_VAR = { 1: "--p1", 2: "--p2", 3: "--p3", 4: "--p4" };

export default function PriorityLegend({ t, selectedPriority, onToggle }) {
  return (
    <div style={{ marginTop: 10 }}>
      <fieldset
        style={{
          border: "none",
          margin: 0,
          padding: 0,
          minWidth: 0,
        }}
      >
        <legend className="sr-only">{t.priorityFilterLabel}</legend>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            padding: "10px 12px",
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-md)",
          }}
        >
          {PRIORITY_KEYS.map((p) => {
            const on = selectedPriority === p;
            return (
              <button
                key={p}
                type="button"
                aria-pressed={on}
                onClick={() => onToggle(p)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                  border: on ? "1px solid var(--color-text)" : "1px solid transparent",
                  borderRadius: "var(--radius-pill)",
                  padding: "4px 10px",
                  background: on ? "rgba(15,23,42,0.06)" : "transparent",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "var(--color-text-muted)",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: `var(${PRIORITY_VAR[p]})`,
                    flexShrink: 0,
                  }}
                />
                <span style={{ textAlign: "left" }}>{t.legend[p]}</span>
              </button>
            );
          })}
        </div>
      </fieldset>
      <p style={{ margin: "8px 0 0", fontSize: 11, color: "var(--color-text-muted)" }}>{t.priorityHint}</p>
    </div>
  );
}
