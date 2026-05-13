export default function TabBar({ tabs, activeTab, onSelect }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
      {tabs.map((tab) => {
        const isOn = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelect(tab.id)}
            style={{
              fontSize: 12,
              fontWeight: 600,
              padding: "6px 12px",
              borderRadius: "var(--radius-pill)",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              whiteSpace: "nowrap",
              border: isOn ? "1px solid var(--color-text)" : tab.isNew ? "1px solid var(--new-green)" : "1px solid var(--color-border-strong)",
              background: isOn ? "var(--color-text)" : "transparent",
              color: isOn ? "var(--color-surface)" : tab.isNew ? "var(--new-green)" : "var(--color-text)",
            }}
          >
            {tab.label}
            <span
              style={{
                fontSize: 11,
                padding: "1px 7px",
                borderRadius: "var(--radius-pill)",
                background: isOn ? "rgba(255,255,255,0.2)" : "rgba(100,116,139,0.15)",
                color: isOn ? "inherit" : "var(--color-text-muted)",
              }}
            >
              {tab.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
