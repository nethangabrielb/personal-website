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
          <div className="exp-heading">EXPERIENCE</div>
          <div className="exp-list">
            <div className="exp-item">
              <div className="exp-meta">
                <div className="exp-period">Sep 2025 – Dec 2025</div>
                <div className="exp-type">Freelance</div>
              </div>
              <div className="exp-body">
                <div className="exp-role">FREELANCE WEB DEVELOPER</div>
                <div className="exp-company">Self-Employed</div>
                <p className="exp-desc">
                  Designed and delivered tailored web solutions for various clients.
                </p>
                <ul className="exp-bullets">
                  <li>Built and delivered SEO-optimized websites</li>
                  <li>Owned end-to-end design and implementation</li>
                  <li>Integrated headless CMS for content management</li>
                </ul>
                <div className="exp-tags">
                  <span className="exp-tag">Astro</span>
                  <span className="exp-tag">Sanity CMS</span>
                  <span className="exp-tag">React</span>
                  <span className="exp-tag">Tailwind CSS</span>
                </div>
              </div>
            </div>
            <div className="exp-item">
              <div className="exp-meta">
                <div className="exp-period">Jun 2025 – Aug 2025</div>
                <div className="exp-type">Internship</div>
              </div>
              <div className="exp-body">
                <div className="exp-role">FULL-STACK DEVELOPER INTERN</div>
                <div className="exp-company">Syntactics Inc.</div>
                <p className="exp-desc">
                  Contributed to the development of enterprise systems and internal training platforms.
                </p>
                <ul className="exp-bullets">
                  <li>Developed and maintained enterprise web applications</li>
                  <li>Refactored frontend architecture and shared hooks</li>
                  <li>Built REST API endpoints and file upload integrations</li>
                  <li>Collaborated with team and shipped through code reviews</li>
                </ul>
                <div className="exp-tags">
                  <span className="exp-tag">React</span>
                  <span className="exp-tag">Next.js</span>
                  <span className="exp-tag">Laravel</span>
                  <span className="exp-tag">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
