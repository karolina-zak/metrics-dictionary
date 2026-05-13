export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoComplete="off"
      style={{
        width: "100%",
        maxWidth: 480,
        padding: "10px 12px",
        fontSize: 14,
        borderRadius: "var(--radius-sm)",
        border: "1px solid var(--color-border-strong)",
        background: "var(--color-surface)",
        color: "var(--color-text)",
      }}
    />
  );
}
