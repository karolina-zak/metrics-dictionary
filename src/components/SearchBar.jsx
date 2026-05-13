export default function SearchBar({ id, label, value, onChange, placeholder, t }) {
  const hasValue = value.length > 0;

  return (
    <div style={{ marginTop: 4 }}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div style={{ position: "relative", display: "inline-flex", width: "100%", maxWidth: 480 }}>
        <input
          id={id}
          type="search"
          name="metric-search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete="off"
          spellCheck="false"
          style={{
            width: "100%",
            padding: hasValue ? "10px 40px 10px 12px" : "10px 12px",
            fontSize: 14,
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--color-border-strong)",
            background: "var(--color-surface)",
            color: "var(--color-text)",
          }}
        />
        {hasValue && (
          <button
            type="button"
            aria-label={t.searchClear}
            onClick={() => onChange("")}
            style={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--color-text-muted)",
              fontSize: 18,
              lineHeight: 1,
              padding: "4px 6px",
              borderRadius: "var(--radius-sm)",
            }}
          >
            ×
          </button>
        )}
      </div>
      <p
        style={{
          margin: "4px 0 0",
          fontSize: 11,
          color: "var(--color-text-muted)",
          lineHeight: 1.4,
        }}
      >
        {t.searchHint}
      </p>
    </div>
  );
}
