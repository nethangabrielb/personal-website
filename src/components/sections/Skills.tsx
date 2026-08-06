import { useRef } from "react";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { useScrollSection } from "@/hooks/useScrollSection";

const skillGroups = [
  {
    label: "Frontend",
    items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
  },
  {
    label: "Backend",
    items: [
      "Node.js / Express",
      "NestJS",
      "PostgreSQL",
      "MongoDB / NoSQL",
      "Prisma ORM",
      "Socket.IO",
      "Redis",
    ],
  },
  {
    label: "DevOps & Tooling",
    items: ["Docker", "DigitalOcean", "Vercel", "Git / GitHub", "Linux / SSH"],
  },
  {
    label: "AI / ML",
    items: [
      "AI Agents",
      "Vercel AI SDK",
      "Python / TensorFlow",
      "llama.cpp / LLMs",
      "OpenCV / CAM",
      "Prompt Engineering",
    ],
  },
];

export const Skills = () => {
  const ref = useRef<HTMLElement>(null);
  useScrollSection({ sectionName: "Skills", ref });

  return (
    <section id="skills" ref={ref}>
      <div className="outer">
        <SectionHeader number="04" title="Stack" caption="Tools I actually use" />
        <div className="skills-layout">
          <aside className="skills-sidebar">
            <p className="skills-note">
              Not a list of things I've Googled once. These are what I reach for
              when building production software.
            </p>
          </aside>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div key={group.label} className="skill-group">
                <h3 className="skill-group-label">{group.label}</h3>
                <ul className="skill-list">
                  {group.items.map((item) => (
                    <li key={item} className="skill-name">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
