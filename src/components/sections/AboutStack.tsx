import { useRef } from "react";

import { Reveal } from "@/components/ui/Reveal";
import { useScrollSection } from "@/hooks/useScrollSection";

const skills = [
  {
    category: "LANGUAGES",
    values: "JavaScript  ·  TypeScript  ·  Python  ·  PHP",
  },
  {
    category: "FRONTEND",
    values: "React  ·  Next.js  ·  Tailwind CSS  ·  Framer Motion",
  },
  {
    category: "BACKEND",
    values: "Node.js  ·  Express  ·  Laravel",
  },
  {
    category: "DATABASE",
    values: "PostgreSQL  ·  Prisma  ·  Redis",
  },
  {
    category: "INFRA",
    values: "Docker  ·  DigitalOcean  ·  Vercel",
  },
  {
    category: "TOOLS",
    values: "Git  ·  pnpm  ·  Vite  ·  VS Code",
  },
];

export const AboutStack = () => {
  const ref = useRef<HTMLElement>(null);

  useScrollSection({
    sectionName: "About",
    ref,
  });

  return (
    <section className="about" id="about" ref={ref}>
      {/* Section number */}
      <Reveal>
        <p className="section__number">00</p>
      </Reveal>

      {/* Heading */}
      <Reveal delay={0.05}>
        <h2 className="section__heading">ABOUT</h2>
      </Reveal>

      {/* Bio paragraph */}
      <Reveal delay={0.15}>
        <p className="about__bio">
          Graduating Computer Science student from USTP, Cagayan de Oro. I build
          full-stack web applications — from the database schema to the deployed
          container. I started with The Odin Project in my sophomore year and
          haven't stopped shipping since. Currently looking for junior and remote
          full-stack roles.
        </p>
      </Reveal>

      {/* Divider between about and skills */}
      <Reveal delay={0.2}>
        <hr className="about__rule about__rule--main" />
      </Reveal>

      {/* Skills grid */}
      <div className="about__skills">
        {skills.map((skill, index) => (
          <Reveal key={skill.category} delay={0.25 + index * 0.06}>
            <div className="about__skill-row">
              <span className="about__skill-category">{skill.category}</span>
              <span className="about__skill-values">{skill.values}</span>
            </div>
            {index < skills.length - 1 && <hr className="about__rule" />}
          </Reveal>
        ))}
      </div>
    </section>
  );
};
