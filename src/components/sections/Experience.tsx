import { EDUCATION, EXPERIENCE, IDENTITY } from "@/data/portfolio";

export const Experience = () => {
  return (
    <section id="experience" className="page-section">
      <div className="container">
        <div className="section-heading-bar">
          <div className="section-heading-left">
            <span className="section-index">02</span>
            <div>
              <h2 className="section-title">Experience &amp; education</h2>
              <p className="section-subtitle">{IDENTITY.aboutSummary}</p>
            </div>
          </div>
        </div>

        <div className="exp-bento-grid">
          <div className="timeline-column">
            {EXPERIENCE.map((entry) => (
              <article
                key={`${entry.company}-${entry.date}`}
                className={`bento-card timeline-card${entry.current ? " is-current" : ""}`}
              >
                <div className="timeline-card-top">
                  <div className="timeline-meta-row">
                    {entry.current ? (
                      <span className="signal-dot" aria-hidden="true" />
                    ) : null}
                    <span className="timeline-period">{entry.date}</span>
                    <span className="timeline-dot-sep">·</span>
                    <span className="timeline-location">{entry.location}</span>
                  </div>
                </div>

                <div className="timeline-title-row">
                  <div>
                    <h3 className="timeline-role">{entry.role}</h3>
                    <p className="timeline-company">{entry.company}</p>
                  </div>
                </div>

                <p className="timeline-summary">{entry.summary}</p>

                <ul className="timeline-bullets">
                  {entry.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="chip-group">
                  {entry.stack.map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="credentials-column">
            <article className="bento-card edu-card">
              <div className="edu-card-head">
                <div>
                  <span className="edu-year">
                    Class of {EDUCATION.date} · {EDUCATION.location}
                  </span>
                  <h3 className="edu-degree">{EDUCATION.degree}</h3>
                </div>
              </div>

              <p className="edu-school">{EDUCATION.institution}</p>
              <p className="edu-details">{EDUCATION.details}</p>

              <div className="honors-list">
                {EDUCATION.honors.map((honor) => (
                  <div key={honor} className="honor-row">
                    <span>{honor}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="bento-card foundation-card">
              <div className="edu-card-head">
                <div>
                  <span className="edu-year">Self-directed engineering</span>
                  <h3 className="edu-degree">{EDUCATION.foundation.title}</h3>
                </div>
              </div>

              <p className="foundation-metrics">
                {EDUCATION.foundation.metrics}
              </p>
              <p className="edu-details">{EDUCATION.foundation.description}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
