import { useRef } from "react";

import { Ticker } from "@/components/ui/Ticker";
import { useScrollSection } from "@/hooks/useScrollSection";

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  useScrollSection({ sectionName: "Home", ref });

  return (
    <section id="hero" ref={ref}>
      <div className="outer">
        <div className="hero-main">
          <div className="hero-bg-num">01</div>

          <div className="hero-left">
            <div className="hero-eyebrow">
              <div className="hero-eyebrow-line" />
              <span>Full-Stack Developer</span>
            </div>
            <h1 className="hero-name">
              <span className="first">NETHAN</span>
              <span className="last">BAGASBAS</span>
            </h1>
            <div className="hero-role-block">
              <div className="hero-role">React · Next.js · TypeScript · Node.js</div>
              <div className="hero-location">Nasipit, Agusan del Norte — Open to Remote</div>
            </div>
            <div className="hero-ctas">
              <a href="#projects" className="btn-primary" onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                View Work
              </a>
              <a href="#contact" className="btn-ghost" onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}>
                Get In Touch
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-manifesto">
              <div className="manifesto-header">// ENGINEERING FOCUS</div>
              <p className="manifesto-tagline">
                I construct <strong>type-safe, database-to-deployment</strong> systems.
              </p>
              <p className="manifesto-sub">Every line of code is written with a focus on:</p>
              <ul className="manifesto-list">
                <li>
                  <span className="bullet">⚡ [01]</span> Zero runtime surprises via <code className="tech-code">TypeScript</code> + <code className="tech-code">Zod</code>
                </li>
                <li>
                  <span className="bullet">⚡ [02]</span> Sub-second load times via <code className="tech-code">caching</code> &amp; <code className="tech-code">clean queries</code>
                </li>
                <li>
                  <span className="bullet">⚡ [03]</span> Maintainable code via <code className="tech-code">modular design</code> &amp; <code className="tech-code">clean patterns</code>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-cell">
            <div className="stat-val">1,000+</div>
            <div className="stat-label">Hours — 3 Years Self-Taught</div>
          </div>
          <div className="stat-cell">
            <div className="stat-val">30+</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div className="stat-cell">
            <div className="stat-val">Full-Stack Intern</div>
            <div className="stat-label">Syntactics Inc. 2025</div>
          </div>
          <div className="stat-cell">
            <div className="stat-val">BS Computer Science</div>
            <div className="stat-label">Cum Laude · USTP-CDO 2026</div>
          </div>
        </div>
      </div>

      <Ticker />
    </section>
  );
};
