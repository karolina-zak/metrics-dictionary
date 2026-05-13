/** Bottom rhythm (reference gallery generous section breaks) */

export default function Footer({ badgeText, t }) {
  return (
    <footer
      className="app-footer"
      style={{
        marginTop: "clamp(20px, 3.5vw, 36px)",
        paddingTop: "clamp(14px, 2.25vw, 22px)",
        paddingBottom: "clamp(18px, 2.75vw, 28px)",
        borderTop: "1px solid var(--color-border)",
        fontSize: "var(--ui-body-secondary-size)",
        color: "var(--color-text-muted)",
        lineHeight: 1.5,
      }}
    >
      {badgeText}
      <div style={{ marginTop: "clamp(8px, 1.25vw, 12px)" }}>
        <a
          href="#abbreviations"
          style={{
            fontSize: "var(--ui-body-secondary-size)",
            color: "var(--color-text-muted)",
            textDecoration: "underline",
            textUnderlineOffset: 2,
          }}
        >
          {t.abbreviationsLinkLabel}
        </a>
      </div>
    </footer>
  );
}
