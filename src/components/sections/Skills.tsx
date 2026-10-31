import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { STACK_SPECS } from "@/data/portfolio";

export const Skills = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>("all");

  const filters = [
    { id: "all", label: "All Domains" },
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
              <h2 className="section-title">Stack &amp; Systems</h2>
              <p className="section-subtitle">
                Production tools and architectural layers applied across active
                team development at Inventra Inc. and deployed monorepo
                applications.
              </p>
            </div>
          </div>

          <div
            className="domain-filter-bar"
            role="tablist"
            aria-label="Filter stack by engineering domain"
          >
            {filters.map((filter) => {
              const active = selectedDomain === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={`domain-filter-btn${active ? " is-active" : ""}`}
                  onClick={() => setSelectedDomain(filter.id)}
                >
                  {active ? (
                    <motion.span
                      layoutId="stack-filter-pill"
                      className="domain-filter-bg"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 35,
                      }}
                    />
                  ) : null}
                  <span className="domain-filter-label">{filter.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          layout
          className={`stack-bento-grid${selectedDomain !== "all" ? " is-single" : ""}`}
        >
          <AnimatePresence mode="popLayout">
            {visibleSpecs.map((group) => (
              <motion.article
                layout
                key={group.id}
                className="bento-card stack-domain-card"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="stack-card-head">
                  <span className="stack-card-no">{group.index}</span>
                  <h3 className="stack-card-title">{group.category}</h3>
                </div>

                <p className="stack-card-scope">{group.scope}</p>

                <div className="chip-group stack-chip-group">
                  {group.items.map((item) => (
                    <span key={item} className="tech-chip tech-chip-lg">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="stack-verified-bar">
                  <span className="verified-label">Applied in:</span>
                  <span className="verified-list">
                    {group.verifiedIn.join(" · ")}
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
