import { useCallback, useEffect, useRef } from "react";

/**
 * @param {{ tabs: { id: string; label: string; count: number }[]; activeTab: string; onSelect: (id: string) => void; t: Record<string, string> }} props
 */
export default function TabBar({ tabs, activeTab, onSelect, t }) {
  const tabRefs = useRef(/** @type {(HTMLButtonElement | null)[]} */ ([]));

  useEffect(() => {
    tabRefs.current.length = tabs.length;
  }, [tabs.length]);

  const focusTabIndex = useCallback((index) => {
    const el = tabRefs.current[index];
    el?.focus();
  }, []);

  const selectByIndex = useCallback(
    (index) => {
      const tab = tabs[index];
      if (!tab) return;
      onSelect(tab.id);
      requestAnimationFrame(() => focusTabIndex(index));
    },
    [tabs, onSelect, focusTabIndex],
  );

  const onTabKeyDown = useCallback(
    (e, index) => {
      const len = tabs.length;
      if (len === 0) return;
      let next = index;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        next = (index + 1) % len;
        selectByIndex(next);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        next = (index - 1 + len) % len;
        selectByIndex(next);
      } else if (e.key === "Home") {
        e.preventDefault();
        selectByIndex(0);
      } else if (e.key === "End") {
        e.preventDefault();
        selectByIndex(len - 1);
      }
    },
    [tabs, selectByIndex],
  );

  return (
    <div
      role="tablist"
      aria-label={t.metricsTabsLabel}
      className="tabbar-scroll"
      style={{ display: "flex", flexWrap: "nowrap", overflowX: "auto", gap: 6, marginTop: 14, paddingBottom: 4, WebkitOverflowScrolling: "touch" }}
    >
      {tabs.map((tab, index) => {
        const isOn = activeTab === tab.id;
        const tabId = `tab-${tab.id}`;
        return (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            id={tabId}
            type="button"
            role="tab"
            aria-selected={isOn}
            aria-controls="metrics-tabpanel"
            tabIndex={isOn ? 0 : -1}
            onClick={() => onSelect(tab.id)}
            onKeyDown={(e) => onTabKeyDown(e, index)}
            aria-label={`${tab.label}, ${tab.count}`}
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
              border: isOn ? "1px solid var(--color-text)" : "1px solid var(--color-border-strong)",
              background: isOn ? "var(--color-text)" : "transparent",
              color: isOn ? "var(--color-surface)" : "var(--color-text)",
            }}
          >
            <span aria-hidden="true">{tab.label}</span>
            <span
              aria-hidden="true"
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
