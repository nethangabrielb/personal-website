import { useRef } from "react";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { useScrollSection } from "@/hooks/useScrollSection";

export const About = () => {
  const ref = useRef<HTMLElement>(null);
  useScrollSection({ sectionName: "About", ref });

  return (
    <section id="about" ref={ref}>
      <div className="outer">
        <SectionHeader number="02" title="About" caption="Who I am" />
        <div className="about-grid">
          <div className="about-label-col">
            <figure className="about-figure">
              <img
                src="/hero-me-new.webp"
                alt="Portrait of Nethan Gabriel Bagasbas"
                width={1086}
                height={1448}
                loading="lazy"
              />
              <figcaption>Nethan Bagasbas — Nasipit, Philippines</figcaption>
            </figure>

            <div className="about-meta">
              <div className="meta-row">
                <span className="meta-key">Education</span>
                <div className="meta-vals">
                  <span className="meta-val">BS Computer Science, Cum Laude</span>
                  <span className="meta-val-sub">USTP-CDO · Dean's List (4 semesters)</span>
                </div>
              </div>
              <div className="meta-row">
                <span className="meta-key">Awards</span>
                <div className="meta-vals">
                  <span className="meta-val">Best Thesis Award</span>
                  <span className="meta-val-sub">USTP-CDO · 2026</span>
                </div>
              </div>
              <div className="meta-row">
                <span className="meta-key">Internship</span>
                <div className="meta-vals">
                  <span className="meta-val">Syntactics Inc.</span>
                  <span className="meta-val-sub">Jun–Aug 2025</span>
                </div>
              </div>
              <div className="meta-row">
                <span className="meta-key">Foundation</span>
                <div className="meta-vals">
                  <span className="meta-val">The Odin Project</span>
                  <span className="meta-val-sub">1,000+ hrs · 30+ projects</span>
                </div>
              </div>
              <div className="meta-row">
                <span className="meta-key">Status</span>
                <div className="meta-vals">
                  <span className="meta-val status">Open to work</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-content">
            <p className="about-lede">
              I build full-stack web applications from database design to deployment.
            </p>
            <p>
              I focus on software that is maintainable, reliable, and performant —
              the kind you don't dread coming back to. My journey started with
              self-directed learning: over <span className="hl">1,000 hours</span> of
              The Odin Project before entering a professional environment. That
              foundation taught me to build complete applications from scratch and
              solve problems on my own.
            </p>
            <p>
              My primary stack is <span className="hl">TypeScript</span>,{" "}
              <span className="hl">React</span>, <span className="hl">Node.js</span>,{" "}
              <span className="hl">PostgreSQL</span>, <span className="hl">Prisma</span>,{" "}
              <span className="hl">Redis</span>, and <span className="hl">Zod</span>. I
              like clear boundaries between frontend and backend — well-structured
              systems with clean types, built with performance and developer
              experience in mind.
            </p>
            <p>
              Right now I'm learning <span className="hl">NestJS</span> and{" "}
              <span className="hl">NoSQL</span> while sharpening data structures and
              algorithms on LeetCode.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
