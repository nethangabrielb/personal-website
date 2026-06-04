import { useRef } from "react";

import { SectionRule } from "@/components/ui/SectionRule";
import { useScrollSection } from "@/hooks/useScrollSection";

export const Experience = () => {
  const ref = useRef<HTMLElement>(null);
  useScrollSection({ sectionName: "Experience", ref });

  return (
    <section id="experience" ref={ref}>
      <div className="outer">
        <SectionRule number="05" title="Experience" date="PROFESSIONAL HISTORY" />
        <div className="exp-layout">
          <div className="exp-heading">
            EX<br /><span style={{ color: "var(--gold)" }}>PE<br />RI<br />EN<br />CE</span>
          </div>
          <div className="exp-list">
            <div className="exp-item">
              <div className="exp-meta">
                <div className="exp-period">Jun – Aug 2025</div>
                <div className="exp-type">Internship</div>
              </div>
              <div className="exp-body">
                <div className="exp-role">SOFTWARE ENGINEER INTERN</div>
                <div className="exp-company">Syntactics Inc. — Cagayan de Oro</div>
                <p className="exp-desc">
                  Worked on production React applications with real users and real stakes.
                  Took two problems seriously: messy initialization logic and a missing admin interface.
                </p>
                <div className="exp-highlight">
                  Consolidated component initialization logic from <strong>23 pages into a single React hook</strong>,
                  reducing code by ~90–95% and eliminating race conditions across{" "}
                  <strong>20+ production deployments</strong>. Built a full-stack admin interface
                  for a Laravel/Next.js training platform within a week.
                </div>
              </div>
            </div>
            <div className="exp-item">
              <div className="exp-meta">
                <div className="exp-period">2022 – 2026</div>
                <div className="exp-type">Education</div>
              </div>
              <div className="exp-body">
                <div className="exp-role">BS COMPUTER SCIENCE</div>
                <div className="exp-company">USTP-CDO — Dean's List</div>
                <p className="exp-desc">
                  Built the actual skills in parallel — started The Odin Project in sophomore year.
                  Thesis: lightweight CAM-based plant disease severity estimation.
                </p>
                <div className="exp-highlight">
                  Completed <strong>The Odin Project</strong> in full: 1,000+ hours, 30+ shipped projects.
                  Thesis defended and revised. EigenCAM established as top-performing CAM method
                  across Corn, Potato, and Tomato datasets.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
