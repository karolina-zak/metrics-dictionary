const PRIORITY_KEYS = [1, 2, 3, 4];

/**
 * @param {{
 *   t: Record<string, unknown>;
 *   sortBy: "default" | "priority";
 *   onSortChange: (v: "default" | "priority") => void;
 *   selectedPriorities: number[];
 *   onTogglePriority: (p: number) => void;
 *   onClearPriorityFilter: () => void;
 * }} props
 */
export default function SortFilterBar({
  t,
  sortBy,
  onSortChange,
  selectedPriorities,
  onTogglePriority,
  onClearPriorityFilter,
}) {
  const hasPriorityFilter = selectedPriorities.length > 0;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-end",
        gap: "14px 20px",
        marginTop: 12,
      }}
    >
      {/* Sort */}
      <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 200, flex: "0 1 220px" }}>
        <label htmlFor="metric-sort" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-muted)" }}>
          {t.sortSectionLabel}
        </label>
        <select
          id="metric-sort"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value === "priority" ? "priority" : "default")}
          aria-label={t.sortSectionLabel}
          style={{
            fontSize: 13,
            fontWeight: 500,
            padding: "10px 12px",
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--color-border-strong)",
            background: "var(--color-surface)",
            color: "var(--color-text)",
            cursor: "pointer",
            width: "100%",
          }}
        >
          <option value="default">{t.sortDefault}</option>
          <option value="priority">{t.sortByImportance}</option>
        </select>
        {sortBy === "priority" && (
          <p style={{ fontSize: 11, color: "var(--color-text-muted)", margin: "4px 0 0", lineHeight: 1.4 }}>
            {t.sortSecondaryHint}
          </p>
        )}
      </div>

      {/* Filter */}
      <div style={{ flex: "1 1 280px", minWidth: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-muted)" }}>
            {t.filterSectionLabel}
          </span>
          {hasPriorityFilter && (
            <button
              type="button"
              onClick={onClearPriorityFilter}
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "var(--p1)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "2px 4px",
                textDecoration: "underline",
              }}
            >
              {t.filterClear}
            </button>
          )}
        </div>
        <div role="group" aria-label={t.priorityFilterLabel} className="filter-chips-scroll" style={{ display: "flex", flexWrap: "nowrap", overflowX: "auto", gap: 6, paddingBottom: 4, WebkitOverflowScrolling: "touch" }}>
          {PRIORITY_KEYS.map((p) => {
            const on = selectedPriorities.includes(p);
            return (
              <button
                key={p}
                type="button"
                aria-pressed={on}
                onClick={() => onTogglePriority(p)}
                title={t.legend[p]}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  padding: "8px 12px",
                  borderRadius: "var(--radius-pill)",
                  cursor: "pointer",
                  border: on ? "2px solid var(--color-text)" : "1px solid var(--color-border-strong)",
                  background: on ? "var(--color-text)" : "var(--color-surface)",
                  color: on ? "var(--color-surface)" : "var(--color-text)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: `var(--p${p})`,
                    flexShrink: 0,
                    boxShadow: on ? "0 0 0 1px rgba(255,255,255,0.5)" : "none",
                  }}
                />
                {t.priorities[p]}
              </button>
            );
          })}
        </div>
        <p style={{ margin: "8px 0 0", fontSize: 11, color: "var(--color-text-muted)", lineHeight: 1.45 }}>
          {t.priorityFilterHint}
        </p>
      </div>
    </div>
  );
}
