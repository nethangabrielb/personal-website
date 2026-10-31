import { Award, Briefcase, GraduationCap, Terminal } from "lucide-react";
import { motion } from "motion/react";

import { EDUCATION, EXPERIENCE, IDENTITY } from "@/data/portfolio";

export const Experience = () => {
  return (
    <section id="experience" className="page-section">
      <div className="container">
        <div className="section-heading-bar">
          <div className="section-heading-left">
            <span className="section-index">02</span>
            <div>
              <h2 className="section-title">Experience &amp; Education</h2>
              <p className="section-subtitle">{IDENTITY.aboutSummary}</p>
            </div>
          </div>
          <span className="section-badge">2023 – Present</span>
        </div>

        <div className="exp-bento-grid">
          <div className="timeline-column">
            {EXPERIENCE.map((entry, idx) => (
              <motion.article
                key={`${entry.company}-${entry.date}`}
                className={`bento-card timeline-card${entry.current ? " is-current" : ""}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="timeline-card-top">
                  <div className="timeline-meta-row">
                    <span className="timeline-period">{entry.date}</span>
                    <span className="timeline-dot-sep">·</span>
                    <span className="timeline-location">{entry.location}</span>
                  </div>
                  {entry.current ? (
                    <span className="current-role-badge">
                      <span className="signal-dot" aria-hidden="true" />
                      Active Role
                    </span>
                  ) : null}
                </div>

                <div className="timeline-title-row">
                  <Briefcase
                    size={16}
                    strokeWidth={1.9}
                    className="timeline-icon"
                    aria-hidden="true"
                  />
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
              </motion.article>
            ))}
          </div>

          <div className="credentials-column">
            <motion.article
              className="bento-card edu-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="edu-card-head">
                <span className="edu-icon-box" aria-hidden="true">
                  <GraduationCap size={18} strokeWidth={1.9} />
                </span>
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
                  <div key={honor} className="honor-badge">
                    <Award size={13} strokeWidth={2} aria-hidden="true" />
                    <span>{honor}</span>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article
              className="bento-card foundation-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="edu-card-head">
                <span className="edu-icon-box" aria-hidden="true">
                  <Terminal size={18} strokeWidth={1.9} />
                </span>
                <div>
                  <span className="edu-year">Self-Directed Engineering</span>
                  <h3 className="edu-degree">{EDUCATION.foundation.title}</h3>
                </div>
              </div>

              <p className="foundation-metrics">
                {EDUCATION.foundation.metrics}
              </p>
              <p className="edu-details">{EDUCATION.foundation.description}</p>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
};
