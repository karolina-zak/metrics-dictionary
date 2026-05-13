import { useMemo, useState } from "react";
import "./App.css";

type Metric = {
  id: string;
  name: string;
  definition: string;
  category: string;
};

const SAMPLE_METRICS: Metric[] = [
  {
    id: "task-success",
    name: "Task success rate",
    definition:
      "Share of users who complete a defined goal flow without abandoning or failing critical steps.",
    category: "Effectiveness",
  },
  {
    id: "time-on-task",
    name: "Time on task",
    definition:
      "Median or average duration to finish a task; lower is better when accuracy is held constant.",
    category: "Efficiency",
  },
  {
    id: "error-rate",
    name: "Error rate",
    definition:
      "Frequency of user mistakes, validation failures, or dead ends while attempting a task.",
    category: "Efficiency",
  },
  {
    id: "sus",
    name: "SUS (System Usability Scale)",
    definition:
      "Standardized 10-item questionnaire score (0–100) summarizing perceived usability.",
    category: "Satisfaction",
  },
];

function App() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SAMPLE_METRICS;
    return SAMPLE_METRICS.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.definition.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="app">
      <header className="hero">
        <p className="eyebrow">Adobe Analytics companion</p>
        <h1>UX Metrics Dictionary</h1>
        <p className="lede">
          Interactive reference for naming and interpreting experience metrics next to your
          dashboards.
        </p>
        <label className="search">
          <span className="sr-only">Search metrics</span>
          <input
            type="search"
            placeholder="Search by metric, category, or keyword…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
        </label>
      </header>

      <main className="grid">
        {filtered.map((m) => (
          <article key={m.id} className="card">
            <p className="category">{m.category}</p>
            <h2>{m.name}</h2>
            <p className="definition">{m.definition}</p>
          </article>
        ))}
        {filtered.length === 0 && (
          <p className="empty">No metrics match your search. Try another term.</p>
        )}
      </main>
    </div>
  );
}

export default App;
