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
              WHO<br /><span className="accent">I AM</span>
            </div>
            <div className="about-meta">
              <div className="meta-row">
                <span className="meta-key">Education</span>
                <span className="meta-val">BS Computer Science</span>
                <span className="meta-val" style={{ color: "var(--mid-gray)", fontSize: "11px" }}>USTP-CDO · Dean's List</span>
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
              I'm a full-stack developer who builds things that actually ship. Graduated from{" "}
              <span className="highlight">USTP-CDO</span> with a CS degree and spent my sophomore year
              grinding through <span className="highlight">The Odin Project</span> — 1,000+ hours of
              building before most students finished their first internship application.
            </p>
            <p>
              At <span className="highlight">Syntactics Inc.</span>, I took initialization logic scattered
              across 23 pages and collapsed it into a single <span className="tech-tag react">React</span>{" "}
              hook — a ~90% code reduction that eliminated race conditions across 20+ production
              deployments. I also shipped a full-stack admin interface for a{" "}
              <span className="tech-tag ts">TS</span> training platform in under a week.
            </p>
            <p>
              My thesis explored lightweight ML severity estimation for plant disease using
              MobileNetV2 with CAM-based methods. EigenCAM came out on top.
              It's the kind of problem that doesn't get solved by following a tutorial.
            </p>
            <p style={{ color: "var(--mid-gray)" }}>
              Currently job hunting for junior full-stack roles in the Philippines and remote.
              If you need someone who reads error messages carefully and actually understands
              what they built — let's talk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
