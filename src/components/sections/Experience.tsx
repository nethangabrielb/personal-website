import {
  SiAstro,
  SiLaravel,
  SiNextdotjs,
  SiReact,
  SiSanity,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";
import type { ElementType } from "react";

import { TechBadge } from "@/components/TechBadge";
import { Reveal } from "@/components/ui/Reveal";

interface ExperienceTech {
  icon: ElementType;
  label: string;
  fill: string;
}

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  tasks: string[];
  tech: ExperienceTech[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Self-Employed",
    role: "Freelance Web Developer",
    period: "Sep 2025 – Dec 2025",
    description:
      "Designed and delivered tailored web solutions for various clients.",
    tasks: [
      "Built and delivered SEO-optimized websites",
      "Owned end-to-end design and implementation",
      "Integrated headless CMS for content management",
    ],
    tech: [
      { icon: SiAstro, label: "Astro", fill: "#FF5D01" },
      { icon: SiSanity, label: "Sanity CMS", fill: "#F03E2F" },
      { icon: SiReact, label: "React", fill: "#61DAFB" },
      { icon: SiTailwindcss, label: "Tailwind CSS", fill: "#06B6D4" },
    ],
  },
  {
    company: "Syntactics Inc.",
    role: "Full-Stack Developer Intern",
    period: "Jun 2025 – Aug 2025",
    description:
      "Contributed to the development of enterprise systems and internal training platforms.",
    tasks: [
      "Developed and maintained enterprise web applications",
      "Refactored frontend architecture and shared hooks",
      "Built REST API endpoints and file upload integrations",
      "Collaborated with team and shipped through code reviews",
    ],
    tech: [
      { icon: SiReact, label: "React", fill: "#61DAFB" },
      { icon: SiNextdotjs, label: "Next.js", fill: "#000000" },
      { icon: SiLaravel, label: "Laravel", fill: "#FF2D20" },
      { icon: SiTailwindcss, label: "Tailwind CSS", fill: "#06B6D4" },
    ],
  },
];

export const Experience = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16" id="experience">
      <Reveal delay={0.2}>
        <h2 className="text-4xl font-medium tracking-tight text-primary leading-tight">
          Relevant Experience
        </h2>
        <p className="text-md text-muted-foreground mt-1">
          The things I did when I used my skills in a real-world setting.
        </p>
      </Reveal>

      <div className="mt-8 flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <Reveal key={index} delay={0.3 + index * 0.1}>
            <div className="rounded-xl border border-border p-6 md:p-8 transition-all duration-300 hover:shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="font-heading text-xl font-medium text-text-primary">
                  {exp.company}
                </h3>
                <span className="text-sm font-mono text-muted-foreground shrink-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-md font-medium text-accent-green">
                {exp.role}
              </p>

              <p className="text-muted-foreground leading-relaxed mt-4">
                {exp.description}
              </p>

              <ul className="mt-4 flex flex-col gap-2">
                {exp.tasks.map((task, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground leading-relaxed flex items-start gap-3"
                  >
                    <span className="text-accent-green/50 mt-1.5 text-xs shrink-0">
                      ◆
                    </span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-border/50">
                {exp.tech.map((tech) => (
                  <TechBadge
                    key={tech.label}
                    icon={tech.icon}
                    label={tech.label}
                    fill={tech.fill}
                    className="border border-border bg-background/20! shadow-2xs"
                  />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
