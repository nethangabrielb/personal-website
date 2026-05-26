import {
  SiAstro,
  SiBetterauth,
  SiCss,
  SiDigitalocean,
  SiDocker,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMistralai,
  SiNextdotjs,
  SiNodedotjs,
  SiPassport,
  SiPhp,
  SiPnpm,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiSanity,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiUpstash,
  SiVercel,
  SiVite,
  SiZod,
} from "@icons-pack/react-simple-icons";
import type { ElementType } from "react";
import { useRef } from "react";

import { Reveal } from "@/components/ui/Reveal";
import { useScrollSection } from "@/hooks/useScrollSection";

interface Tool {
  icon: ElementType;
  label: string;
  fill: string;
}

const skillGroups: { category: string; tools: Tool[] }[] = [
  {
    category: "I shape frontends using",
    tools: [
      { icon: SiReact, label: "React", fill: "#61DAFB" },
      { icon: SiNextdotjs, label: "Next.js", fill: "#ffffff" },
      { icon: SiTypescript, label: "TypeScript", fill: "#3178C6" },
      { icon: SiJavascript, label: "JavaScript", fill: "#F7DF1E" },
      { icon: SiTailwindcss, label: "Tailwind CSS", fill: "#06B6D4" },
      { icon: SiHtml5, label: "HTML5", fill: "#E34F26" },
      { icon: SiCss, label: "CSS3", fill: "#1572B6" },
      { icon: SiAstro, label: "Astro", fill: "#FF5D01" },
      { icon: SiReactquery, label: "TanStack Query", fill: "#FF4154" },
    ],
  },
  {
    category: "I build backends with",
    tools: [
      { icon: SiNodedotjs, label: "Node.js", fill: "#5FA04E" },
      { icon: SiExpress, label: "Express", fill: "#ffffff" },
      { icon: SiPostgresql, label: "PostgreSQL", fill: "#4169E1" },
      { icon: SiPrisma, label: "Prisma", fill: "#2D3748" },
      { icon: SiSocketdotio, label: "Socket.IO", fill: "#ffffff" },
      { icon: SiMistralai, label: "Mistral AI", fill: "#FDDC0D" },
      { icon: SiPassport, label: "Passport.js", fill: "#34E27A" },
      { icon: SiLaravel, label: "Laravel", fill: "#FF2D20" },
      { icon: SiPhp, label: "PHP", fill: "#777BB4" },
    ],
  },
  {
    category: "I deploy and scale with",
    tools: [
      { icon: SiGit, label: "Git", fill: "#F05032" },
      { icon: SiDocker, label: "Docker", fill: "#2496ED" },
      { icon: SiVercel, label: "Vercel", fill: "#ffffff" },
      { icon: SiDigitalocean, label: "DigitalOcean", fill: "#0080FF" },
      { icon: SiBetterauth, label: "Better Auth", fill: "#EB5424" },
      { icon: SiZod, label: "Zod", fill: "#3E67B1" },
      { icon: SiSupabase, label: "Supabase", fill: "#3ECF8E" },
      { icon: SiUpstash, label: "Upstash Redis", fill: "#00E9A3" },
      { icon: SiSanity, label: "Sanity", fill: "#F03E2F" },
      { icon: SiPnpm, label: "pnpm", fill: "#F69220" },
      { icon: SiVite, label: "Vite", fill: "#646CFF" },
    ],
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
      <div className="about__layout">
        {/* Left Column: Bio & Facts */}
        <div className="about__left">
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

          {/* Facts list */}
          <Reveal delay={0.22}>
            <div className="about__facts">
              <div className="about__fact">
                <span className="about__fact-label">EDUCATION</span>
                <span className="about__fact-value">BS Computer Science (USTP)</span>
              </div>
              <div className="about__fact">
                <span className="about__fact-label">FOCUS AREAS</span>
                <span className="about__fact-value">Full-Stack Development, SaaS, APIs</span>
              </div>
              <div className="about__fact">
                <span className="about__fact-label">STATUS</span>
                <span className="about__fact-value">Open to Junior & Remote Roles</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Skills */}
        <div className="about__right">
          <div className="about__skills">
            {skillGroups.map((group, index) => (
              <Reveal key={group.category} delay={0.25 + index * 0.08}>
                <div className="about__skill-row">
                  <span className="about__skill-category">{group.category}</span>
                  <div className="about__skill-badges">
                    {group.tools.map((tool) => {
                      const Icon = tool.icon;
                      return (
                        <span key={tool.label} className="about__badge">
                          <Icon
                            className="about__badge-icon"
                            style={{ color: tool.fill }}
                          />
                          {tool.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
                {index < skillGroups.length - 1 && (
                  <hr className="about__rule" />
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
