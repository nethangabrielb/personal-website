import { Code, Layers, Zap } from "lucide-react";
import { useRef } from "react";

import { Reveal } from "@/components/ui/Reveal";
import { useScrollSection } from "@/hooks/useScrollSection";

export const AboutStack = () => {
  const ref = useRef<HTMLElement>(null);

  useScrollSection({
    sectionName: "About",
    ref,
  });

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about__layout">
        {/* Left Column: Bio & Facts */}
        <div className="about__left">
          {/* Section number */}
          <Reveal>
            <p className="section__number">00</p>
          </Reveal>

          {/* Heading */}
          <Reveal delay={0.05}>
            <h2 className="section__heading">ABOUT</h2>
          </Reveal>

          {/* Bio */}
          <div className="about__bios">
            <Reveal delay={0.15}>
              <p className="about__bio">
                I build full-stack applications from database schema to deployment
                — focused on performance, maintainability, and clean architecture.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="about__bio">
                I got into development through self-directed learning — 1,000+
                hours through The Odin Project before I ever stepped into a
                professional environment. That foundation is what I build on.
              </p>
            </Reveal>
          </div>

          {/* Stat cards */}
          <div className="about__stats">
            <Reveal delay={0.25}>
              <div className="about__stat">
                <span className="about__stat-value">1,000+</span>
                <span className="about__stat-label">Hours — 3 Years Self-Taught</span>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="about__stat">
                <span className="about__stat-value">30+</span>
                <span className="about__stat-label">Projects Built</span>
              </div>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="about__stat">
                <span className="about__stat-value">Full-Stack Intern</span>
                <span className="about__stat-label">Syntactics Inc. 2025</span>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="about__stat">
                <span className="about__stat-value">BS Computer Science</span>
                <span className="about__stat-label">Graduating June 2026</span>
              </div>
            </Reveal>
          </div>

          {/* Footnote */}
          <Reveal delay={0.45}>
            <p className="about__footnote">
              Currently sharpening algorithms &amp; system design through structured
              LeetCode practice.
            </p>
          </Reveal>
        </div>

        {/* Right Column: Interactive Terminal Card & Principles */}
        <div className="about__right">
          {/* Terminal Mockup */}
          <Reveal delay={0.2}>
            <div className="about__terminal">
              <div className="about__terminal-header">
                <div className="about__terminal-dots">
                  <span className="about__terminal-dot about__terminal-dot--red"></span>
                  <span className="about__terminal-dot about__terminal-dot--yellow"></span>
                  <span className="about__terminal-dot about__terminal-dot--green"></span>
                </div>
                <span className="about__terminal-title">developer.json</span>
              </div>
              <div className="about__terminal-body">
                <pre>
                  <code>
                    {`{
  "name": "Nethan Gabriel Bagasbas",
  "role": "Full-Stack Web Developer",
  "origin": "Philippines",
  "stack": ["React", "Next.js", "TypeScript", "Node.js"],
  "experience": "Full-Stack Developer Intern @ Syntactics Inc.",
  "education": "BS Computer Science — USTP, 2026",
  "seeking": "Junior full-stack roles (PH / Remote)"
}`}
                  </code>
                </pre>
              </div>
            </div>
          </Reveal>

          {/* Core Principles */}
          <div className="about__principles">
            <Reveal delay={0.3}>
              <div className="about__principle">
                <div className="about__principle-icon-wrapper">
                  <Zap className="about__principle-icon" />
                </div>
                <div className="about__principle-info">
                  <span className="about__principle-title">⚡ Performance First</span>
                  <p className="about__principle-desc">
                    Optimized queries, Redis caching, and lightweight UIs — shipped in production.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.38}>
              <div className="about__principle">
                <div className="about__principle-icon-wrapper">
                  <Code className="about__principle-icon" />
                </div>
                <div className="about__principle-info">
                  <span className="about__principle-title">{"</> Type-Safe by Default"}</span>
                  <p className="about__principle-desc">
                    TypeScript + Zod across the stack. Standardized contracts, zero runtime surprises.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.46}>
              <div className="about__principle">
                <div className="about__principle-icon-wrapper">
                  <Layers className="about__principle-icon" />
                </div>
                <div className="about__principle-info">
                  <span className="about__principle-title">🧩 Clean Architecture</span>
                  <p className="about__principle-desc">
                    Modular design, separation of concerns, and maintainable patterns — built to scale.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
