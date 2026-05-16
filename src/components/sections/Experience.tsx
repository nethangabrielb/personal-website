import { useRef } from "react";

import { Reveal } from "@/components/ui/Reveal";
import { useScrollSection } from "@/hooks/useScrollSection";

const experiences = [
  {
    company: "Self-Employed",
    role: "Freelance Web Developer",
    date: "Sep 2025 – Dec 2025",
    summary:
      "Designed and delivered tailored web solutions for various clients.",
    bullets: [
      "Built and delivered SEO-optimized websites",
      "Owned end-to-end design and implementation",
      "Integrated headless CMS for content management",
    ],
    tech: ["Astro", "Sanity CMS", "React", "Tailwind CSS"],
  },
  {
    company: "Syntactics Inc.",
    role: "Full-Stack Developer Intern",
    date: "Jun 2025 – Aug 2025",
    summary:
      "Contributed to the development of enterprise systems and internal training platforms.",
    bullets: [
      "Developed and maintained enterprise web applications",
      "Refactored frontend architecture and shared hooks",
      "Built REST API endpoints and file upload integrations",
      "Collaborated with team and shipped through code reviews",
    ],
    tech: ["React", "Next.js", "Laravel", "Tailwind CSS"],
  },
];

export const Experience = () => {
  const ref = useRef<HTMLElement>(null);

  useScrollSection({
    sectionName: "Experience",
    ref,
  });

  return (
    <section className="experience" id="experience" ref={ref}>
      <div className="section-header">
        <Reveal>
          <p className="section__number">02</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section__heading">EXPERIENCE</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section__sub">
            Real work, real codebases, real deadlines.
          </p>
        </Reveal>
      </div>

      {experiences.map((exp, index) => (
        <Reveal key={index} delay={0.1 + index * 0.15}>
          <div className="experience__card">
            <div className="experience__header">
              <div>
                <h3 className="experience__company">{exp.company}</h3>
                <p className="experience__role">{exp.role}</p>
              </div>
              <span className="experience__date">{exp.date}</span>
            </div>

            <p className="experience__summary">{exp.summary}</p>

            <ul className="experience__bullets">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="experience__bullet">
                  <span className="experience__bullet-marker">◆</span>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="experience__tags">
              {exp.tech.map((t) => (
                <span key={t} className="experience__tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
};
