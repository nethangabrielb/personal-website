import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/ui/Reveal";
import { useScrollSection } from "@/hooks/useScrollSection";

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);
  const [scrollHidden, setScrollHidden] = useState(false);

  useScrollSection({ sectionName: "Home", ref });

  // Parallax effect on the photo — throttled with rAF
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (photoRef.current) {
            const offset = window.scrollY * 0.3;
            photoRef.current.style.transform = `translateY(calc(-50% - ${offset}px))`;
          }

          // Hide scroll indicator after first scroll
          if (window.scrollY > 50 && !scrollHidden) {
            setScrollHidden(true);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollHidden]);

  return (
    <section id="home" ref={ref} className="hero">
      {/* Photo — positioned behind the name */}
      <img
        ref={photoRef}
        src="/hero-me-new.webp"
        fetchPriority="high"
        alt="Nethan Bagasbas"
        className="hero__photo"
      />

      <Reveal>
        <p className="hero__label">
          Full-Stack Developer — Butuan City, PH
          <span className="hero__cursor">▋</span>
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="hero__name">
          NETHAN
          <br />
          BAGASBAS
        </h1>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="hero__stack">React · Node.js · PostgreSQL · Next.js</p>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="hero__actions">
          <a
            href="#contact"
            className="btn btn--primary"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get in Touch
          </a>
          <a
            href="bagasbas-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            View Resume
          </a>
        </div>
      </Reveal>

      {/* Scroll indicator */}
      <div
        className={`hero__scroll ${scrollHidden ? "hero__scroll--hidden" : ""}`}
      >
        <div className="hero__scroll-line" />
        <span className="hero__scroll-text">scroll</span>
      </div>
    </section>
  );
};
