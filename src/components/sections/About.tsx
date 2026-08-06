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
                  <span className="meta-val">
                    BS Computer Science, Cum Laude
                  </span>
                  <span className="meta-val-sub">
                    USTP-CDO · Dean's List (4 semesters)
                  </span>
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
                  <span className="meta-val-sub">
                    Late 2023 · 1,000+ hrs · 30+ projects
                  </span>
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
              I built my full-stack foundations from the ground up.
            </p>
            <p>
              I started web development through The Odin Project in late 2023
              and learned the hard way — building a project alongside every new
              concept, one step at a time. No copy-paste, no shortcuts. That
              discipline is why my foundations still hold up today, and why they
              carry over to whatever technology I pick up next.
            </p>
            <p>
              My primary stack is <span className="hl">TypeScript</span>,{" "}
              <span className="hl">React</span>,{" "}
              <span className="hl">Node.js</span>,{" "}
              <span className="hl">PostgreSQL</span>,{" "}
              <span className="hl">Prisma</span>,{" "}
              <span className="hl">Redis</span>, and{" "}
              <span className="hl">Zod</span> — now joined by{" "}
              <span className="hl">NestJS</span> and{" "}
              <span className="hl">MongoDB (NoSQL)</span>. I like clear
              boundaries between frontend and backend: well-structured systems
              with clean types, built for performance and developer experience.
            </p>
            <p>
              Right now I'm interested in, exploring, and learning{" "}
              <span className="hl">AI agents</span> — using them to accelerate
              my development workflow and learn faster.
            </p>
            <blockquote className="about-quote">
              "The hard way is the fast way."
              <span className="about-quote-src">— my learning approach</span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
