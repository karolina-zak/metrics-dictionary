/** Bottom spacing matches section heading rhythm (see section h2 margin-top in App). */
const FOOTER_BOTTOM = 22;

export default function Footer({ badgeText, t }) {
  return (
    <footer
      className="app-footer"
      style={{
        marginTop: 22,
        paddingTop: 16,
        paddingBottom: FOOTER_BOTTOM,
        borderTop: "1px solid var(--color-border)",
        fontSize: 12,
        color: "var(--color-text-muted)",
        lineHeight: 1.5,
      }}
    >
      {badgeText}
      <div style={{ marginTop: 6 }}>
        <a
          href="#abbreviations"
          style={{
            fontSize: 12,
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
