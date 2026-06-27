import { useRef } from "react";

import { SectionRule } from "@/components/ui/SectionRule";
import { useScrollSection } from "@/hooks/useScrollSection";

export const About = () => {
  const ref = useRef<HTMLElement>(null);
  useScrollSection({ sectionName: "About", ref });

  return (
    <section id="about" ref={ref}>
      <div className="outer">
        <SectionRule number="02" title="About" date="CDO → NASIPIT" />
        <div className="about-grid">
          <div className="about-label-col">
            <div className="big-label">
              WHO <span className="accent">I AM</span>
            </div>

            <div className="about-avatar-container">
              <img src="/hero-me-new.png" alt="Nethan Gabriel Bagasbas" className="about-avatar" />
            </div>

            <div className="about-meta">
              <div className="meta-row">
                <span className="meta-key">Education</span>
                <span className="meta-val">BS Computer Science, Cum Laude</span>
                <span className="meta-val" style={{ color: "var(--mid-gray)", fontSize: "11px" }}>USTP-CDO · Dean's List (4 Semesters)</span>
              </div>
              <div className="meta-row">
                <span className="meta-key">Awards</span>
                <span className="meta-val">Best Thesis Award</span>
                <span className="meta-val" style={{ color: "var(--mid-gray)", fontSize: "11px" }}>USTP-CDO · 2026</span>
              </div>
              <div className="meta-row">
                <span className="meta-key">Internship</span>
                <span className="meta-val">Syntactics Inc.</span>
                <span className="meta-val" style={{ color: "var(--mid-gray)", fontSize: "11px" }}>Jun–Aug 2025</span>
              </div>
              <div className="meta-row">
                <span className="meta-key">Foundation</span>
                <span className="meta-val">The Odin Project</span>
                <span className="meta-val" style={{ color: "var(--mid-gray)", fontSize: "11px" }}>1,000+ hrs · 30+ projects</span>
              </div>
              <div className="meta-row" style={{ borderBottom: "none" }}>
                <span className="meta-key">Status</span>
                <span className="meta-val" style={{ color: "#22c55e" }}>Open to Work</span>
              </div>
            </div>
          </div>
          <div className="about-content">
            <p>
              I build full-stack applications from database schema to deployment — focused
              on performance, maintainability, and clean architecture.
            </p>
            <p>
              I got into development through self-directed learning — 1,000+ hours through{" "}
              <span className="highlight">The Odin Project</span> before I ever stepped into
              a professional environment. That foundation is what I build on.
            </p>
            <p>
              I focus on performance: optimized queries, <span className="highlight">Redis caching</span>,
              and lightweight UIs. On both the client and server, I write <span className="highlight">TypeScript</span> +{" "}
              <span className="highlight">Zod</span> to enforce clean, type-safe contracts with zero
              runtime surprises. Everything is designed around modular, maintainable patterns.
            </p>
            <p style={{ color: "var(--mid-gray)" }}>
              Currently sharpening algorithms &amp; system design through structured LeetCode practice.
            </p>

            <div className="about-terminal">
              <div className="about-terminal-bar">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="about-terminal-title">developer.json</span>
              </div>
              <pre className="about-terminal-code">{`{
  "name": "Nethan Gabriel B. Bagasbas",
  "role": "Full Stack Developer",
  "location": "Philippines 🇵🇭",
  "status": "Actively learning & building",
  "focus": [
    "Expanding full-stack development skills",
    "Modern system design & scalable architecture",
    "API Design & Contract-First Development"
  ],
  "interests": [
    "Web Performance & Optimization",
    "Clean, maintainable code",
    "AI integrations"
  ],
  "open_to": "Collaborations, freelance, full-time roles"
}`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
