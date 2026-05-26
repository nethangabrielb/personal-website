import { useRef } from "react";

import { Reveal } from "@/components/ui/Reveal";
import { useScrollSection } from "@/hooks/useScrollSection";
import { techIconMap } from "@/lib/techIcons";

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
      {/* Section header — consistent with Projects & About */}
      <div className="section-header">
        <Reveal>
          <p className="section__number">03</p>
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

      {/* Timeline cards */}
      <div className="experience__timeline">
        {experiences.map((exp, index) => (
          <Reveal
            key={`${exp.company}-${exp.role}-${index}`}
            delay={0.1 + index * 0.15}
          >
            <div className="experience__card">
              <div className="experience__dot" aria-hidden="true" />

              <div className="experience__card-body">
                <div className="experience__header">
                  <div>
                    <h3 className="experience__company">{exp.company}</h3>
                    <p className="experience__role">{exp.role}</p>
                  </div>
                  <time
                    className="experience__date"
                    dateTime={exp.date}
                    aria-label={exp.date}
                  >
                    {exp.date}
                  </time>
                </div>

                <p className="experience__summary">{exp.summary}</p>

                <ul className="experience__bullets">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={`${exp.company}-bullet-${i}`}
                      className="experience__bullet"
                    >
                      <span
                        aria-hidden="true"
                        className="experience__bullet-marker"
                      >
                        ◆
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="experience__tags">
                  {exp.tech.map((t, j) => {
                    const iconInfo = techIconMap[t];
                    const IconComponent = iconInfo?.icon;
                    return (
                      <span
                        key={`${exp.company}-tech-${index}-${j}-${t}`}
                        className="experience__tag"
                        style={
                          {
                            "--brand-color": iconInfo?.fill || "var(--amber)",
                          } as React.CSSProperties
                        }
                      >
                        {IconComponent && (
                          <IconComponent
                            className="experience__tag-icon"
                            style={{ color: iconInfo.fill }}
                          />
                        )}
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
