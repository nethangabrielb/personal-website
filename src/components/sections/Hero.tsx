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
              <span className="last">GABRIEL</span>
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
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
            <p className="hero-desc">
              BS Computer Science graduate building <strong>production-grade web applications</strong>{" "}
              that ship fast and scale reliably. Thesis: lightweight ML severity estimation
              for plant disease using <strong>MobileNetV2 + CAM methods</strong>.
            </p>
            <div className="hero-stats">
              <div className="stat-cell">
                <div className="stat-val">2+</div>
                <div className="stat-label">Years Building</div>
              </div>
              <div className="stat-cell">
                <div className="stat-val">30+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-cell">
                <div className="stat-val">99</div>
                <div className="stat-label">Lighthouse Score</div>
              </div>
              <div className="stat-cell">
                <div className="stat-val">∞</div>
                <div className="stat-label">Odin Hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Ticker />
    </section>
  );
};
