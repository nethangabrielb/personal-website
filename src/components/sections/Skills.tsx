import { useState } from "react";

import { STACK_SPECS } from "@/data/portfolio";

export const Skills = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>("all");

  const filters = [
    { id: "all", label: "All" },
    ...STACK_SPECS.map((s) => ({ id: s.id, label: s.category })),
  ];

  const visibleSpecs =
    selectedDomain === "all"
      ? STACK_SPECS
      : STACK_SPECS.filter((s) => s.id === selectedDomain);

  return (
    <section id="stack" className="page-section">
      <div className="container">
        <div className="section-heading-bar">
          <div className="section-heading-left">
            <span className="section-index">03</span>
            <div>
              <h2 className="section-title">Stack &amp; systems</h2>
              <p className="section-subtitle">
                Tools and architectural layers I use at Inventra and in deployed
                side projects.
              </p>
            </div>
          </div>
        </div>

        <div
          className="domain-filter-bar"
          role="group"
          aria-label="Filter stack by domain"
        >
          {filters.map((filter) => {
            const active = selectedDomain === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={active}
                className={`domain-filter-btn${active ? " is-active" : ""}`}
                onClick={() => setSelectedDomain(filter.id)}
              >
                <span className="domain-filter-label">{filter.label}</span>
              </button>
            );
          })}
        </div>

        <div
          className={`stack-bento-grid${selectedDomain !== "all" ? " is-single" : ""}`}
        >
          {visibleSpecs.map((group) => (
            <article key={group.id} className="bento-card stack-domain-card">
              <div className="stack-card-head">
                <span className="stack-card-no">{group.index}</span>
                <h3 className="stack-card-title">{group.category}</h3>
              </div>

              <p className="stack-card-scope">{group.scope}</p>

              <div className="chip-group stack-chip-group">
                {group.items.map((item) => (
                  <span key={item} className="tech-chip">
                    {item}
                  </span>
                ))}
              </div>

              <div className="stack-verified-bar">
                <span className="verified-label">Applied in</span>
                <span className="verified-list">
                  {group.verifiedIn.join(" · ")}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
