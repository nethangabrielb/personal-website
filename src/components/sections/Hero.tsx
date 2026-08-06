import { useRef } from "react";

import { useScrollSection } from "@/hooks/useScrollSection";

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  useScrollSection({ sectionName: "Home", ref });

  return (
    <section id="hero" ref={ref}>
      <div className="outer hero-outer">
        <div className="hero-topline">
          <span className="hero-topline-name">Nethan Gabriel B. Bagasbas</span>
          <span className="hero-topline-meta">Nasipit, Agusan del Norte — Open to remote/relocate</span>
        </div>

        <div className="hero-main">
          <p className="hero-kicker">Full-Stack Developer</p>
          <h1 className="hero-title">
            Software that ships.
            <br />
            Systems that <em>hold up.</em>
          </h1>
          <p className="hero-deck">
            I'm a full-stack developer from the Philippines — 1,000+ hours of
            self-taught practice and 30+ projects behind me, plus a Best Thesis
            in computer science. I care about the boring, important things: clean
            types, clear boundaries, and code that survives its first user.
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">
              View work
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-index">
          <a href="#about" className="hero-index-item">
            <span className="hero-index-no">02</span>About
          </a>
          <a href="#projects" className="hero-index-item">
            <span className="hero-index-no">03</span>Projects
          </a>
          <a href="#skills" className="hero-index-item">
            <span className="hero-index-no">04</span>Stack
          </a>
        </div>
      </div>
    </section>
  );
};
