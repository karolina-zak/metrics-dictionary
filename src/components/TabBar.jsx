import { useCallback, useEffect, useRef } from "react";
import { categoryTabIconLigature } from "../categoryTabIcons";

/**
 * @param {{
 *   tabs: { id: string; label: string; count: number }[];
 *   activeTab: string;
 *   onSelect: (id: string) => void;
 *   t: Record<string, string>;
 *   orientation?: "horizontal" | "vertical";
 *   listId?: string;
 *   hideSupportingText?: boolean;
 * }} props
 *
 * hideSupportingText: sidebar “minimized” — same rail padding/radius; only hides visible labels + counts (icon + aria-label stay).
 */
export default function TabBar({
  tabs,
  activeTab,
  onSelect,
  t,
  orientation = "horizontal",
  listId,
  hideSupportingText = false,
}) {
  const vertical = orientation === "vertical";
  const tabRefs = useRef(/** @type {(HTMLButtonElement | null)[]} */ ([]));

  useEffect(() => {
    tabRefs.current.length = tabs.length;
  }, [tabs.length]);

  const focusTabIndex = useCallback((index) => {
    const el = tabRefs.current[index];
    el?.focus();
    el?.scrollIntoView({ block: "nearest", inline: "nearest" });
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
    [selectByIndex],
  );

  const tablistOverflow = vertical
    ? { overflowY: "auto", overflowX: "hidden", WebkitOverflowScrolling: "touch" }
    : { overflowX: "auto", overflowY: "hidden", WebkitOverflowScrolling: "touch" };

  const tablistStyle = {
    gap: "var(--ui-pill-stack-gap)",
    marginTop: vertical ? 0 : "clamp(12px, 2.2vw, 22px)",
    paddingBottom: vertical ? 0 : 4,
    ...tablistOverflow,
    ...(vertical
      ? {
          display: "grid",
          gridTemplateColumns: "max-content",
          justifyItems: "stretch",
          justifyContent: "start",
          width: "100%",
        }
      : {
          display: "flex",
          flexWrap: "nowrap",
          flexDirection: "row",
        }),
  };

  return (
    <div
      id={listId}
      role="tablist"
      aria-label={t.metricsTabsLabel}
      className={vertical ? "tabbar-scroll-vertical" : "tabbar-scroll"}
      style={tablistStyle}
    >
      {tabs.map((tab, index) => {
        const isOn = activeTab === tab.id;
        const tabId = `tab-${tab.id}`;
        const iconGlyph = categoryTabIconLigature(tab.id);
        const hoverTip = `${tab.label} (${tab.count})`;
        const railTab = vertical;
        const countMarginLeft = railTab && !hideSupportingText ? "auto" : undefined;
        const countBg = isOn
          ? railTab
            ? "var(--color-tab-count-bg-selected)"
            : "rgba(255,255,255,0.2)"
          : railTab
            ? "var(--color-tab-count-bg)"
            : "rgba(100,116,139,0.15)";
        const countColor =
          railTab && !hideSupportingText
            ? "var(--color-text-muted)"
            : isOn
              ? "inherit"
              : "var(--color-text-muted)";

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
            title={hideSupportingText ? hoverTip : undefined}
            onClick={() => onSelect(tab.id)}
            onKeyDown={(e) => onTabKeyDown(e, index)}
            aria-label={`${tab.label} (${tab.count})`}
            style={{
              fontSize: "var(--ui-nav-font-size)",
              fontWeight: "var(--ui-nav-font-weight)",
              padding: railTab ? "var(--ui-sidebar-tab-pad)" : "var(--ui-pill-pad-block) var(--ui-pill-pad-inline)",
              borderRadius: railTab ? "var(--radius-sm)" : "var(--radius-pill)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: hideSupportingText ? 0 : "var(--ui-pill-gap)",
              whiteSpace: "nowrap",
              minHeight: 36,
              width: railTab ? "100%" : undefined,
              maxWidth: railTab ? "100%" : undefined,
              minWidth: railTab && !hideSupportingText ? 0 : undefined,
              boxSizing: "border-box",
              justifyContent: railTab ? "flex-start" : undefined,
              ...(railTab
                ? {
                    border: isOn ? "1px solid var(--color-tab-selected-border)" : "1px solid var(--color-border-strong)",
                    background: isOn ? "var(--color-tab-selected-bg)" : "transparent",
                    color: "var(--color-text)",
                  }
                : {
                    border: isOn ? "1px solid var(--color-text)" : "1px solid var(--color-border-strong)",
                    background: isOn ? "var(--color-text)" : "transparent",
                    color: isOn ? "var(--color-surface)" : "var(--color-text)",
                  }),
            }}
          >
            {iconGlyph ? (
              <span
                className="material-symbols-outlined tab-category-icon"
                aria-hidden="true"
                style={hideSupportingText ? { fontSize: 16 } : undefined}
              >
                {iconGlyph}
              </span>
            ) : null}
            {!hideSupportingText ? (
              <>
                <span
                  aria-hidden="true"
                  style={
                    vertical
                      ? {
                          flex: "1 1 auto",
                          minWidth: 0,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          textAlign: "left",
                        }
                      : undefined
                  }
                >
                  {tab.label}
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    fontSize: "var(--ui-micro-pill-font-size)",
                    fontWeight: 600,
                    padding: "var(--ui-micro-pill-pad-block) var(--ui-micro-pill-pad-inline)",
                    borderRadius: "var(--radius-sm)",
                    background: countBg,
                    color: countColor,
                    flexShrink: 0,
                    marginLeft: countMarginLeft,
                  }}
                >
                  {tab.count}
                </span>
              </>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
