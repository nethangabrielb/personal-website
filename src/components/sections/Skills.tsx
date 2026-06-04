import { useRef } from "react";

import { SectionRule } from "@/components/ui/SectionRule";
import { useScrollSection } from "@/hooks/useScrollSection";
import { useSkillBars } from "@/hooks/useSkillBars";

const skillGroups = [
  {
    label: "Frontend",
    items: [
      { name: "React / Next.js", width: 95 },
      { name: "TypeScript", width: 90 },
      { name: "Tailwind CSS", width: 92 },
      { name: "Framer Motion", width: 80 },
      { name: "Vite", width: 88 },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js / Express", width: 90 },
      { name: "PostgreSQL", width: 85 },
      { name: "Prisma ORM", width: 88 },
      { name: "Socket.IO", width: 82 },
      { name: "Redis", width: 75 },
    ],
  },
  {
    label: "DevOps & Tooling",
    items: [
      { name: "Docker", width: 83 },
      { name: "DigitalOcean", width: 78 },
      { name: "Vercel", width: 90 },
      { name: "Git / GitHub", width: 95 },
      { name: "Linux / SSH", width: 80 },
    ],
  },
  {
    label: "AI / ML",
    items: [
      { name: "Vercel AI SDK", width: 82 },
      { name: "Python / TensorFlow", width: 75 },
      { name: "llama.cpp / LLMs", width: 70 },
      { name: "OpenCV / CAM", width: 72 },
      { name: "Prompt Engineering", width: 85 },
    ],
  },
];

export const Skills = () => {
  const ref = useRef<HTMLElement>(null);
  const { containerRef, animated } = useSkillBars();
  useScrollSection({ sectionName: "Skills", ref });

  return (
    <section id="skills" ref={ref}>
      <div className="outer">
        <SectionRule number="04" title="Stack" date="TOOLS I ACTUALLY USE" />
        <div className="skills-layout">
          <div className="skills-sidebar">
            <div className="skills-heading">
              TECH<br /><span style={{ color: "var(--gold)" }}>STACK</span>
            </div>
            <p className="skills-note">
              Not a list of things I've Googled once.<br />
              These are what I reach for when building production software.
            </p>
          </div>
          <div className="skills-grid" ref={containerRef}>
            {skillGroups.map((group) => (
              <div key={group.label} className="skill-group">
                <div className="skill-group-label">{group.label}</div>
                <div className="skill-items">
                  {group.items.map((item) => (
                    <div key={item.name} className="skill-item">
                      <span>{item.name}</span>
                      <div className="skill-bar-track">
                        <div
                          className={`skill-bar-fill ${animated ? "animate" : ""}`}
                          style={{ "--w": `${item.width}%` } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
