import { Database, Laptop, Sparkles, Terminal } from "lucide-react";
import { useRef } from "react";

import { Reveal } from "@/components/ui/Reveal";
import { useScrollSection } from "@/hooks/useScrollSection";
import { techIconMap } from "@/lib/techIcons";

const techStacks = [
  {
    category: "Frontend",
    icon: Laptop,
    glow: "rgba(97, 218, 251, 0.03)",
    tools: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Astro",
      "TanStack Query",
    ],
  },
  {
    category: "Backend",
    icon: Database,
    glow: "rgba(95, 160, 78, 0.03)",
    tools: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Socket.IO",
      "Mistral AI",
      "Passport.js",
      "Laravel",
      "PHP",
    ],
  },
  {
    category: "Tools & Infra",
    icon: Terminal,
    glow: "rgba(240, 80, 50, 0.03)",
    tools: [
      "Git",
      "Docker",
      "Vercel",
      "DigitalOcean",
      "Better Auth",
      "Zod",
      "Supabase",
      "Upstash Redis",
      "Sanity CMS",
      "pnpm",
      "Vite",
    ],
  },
];

export const TechStack = () => {
  const ref = useRef<HTMLElement>(null);

  useScrollSection({
    sectionName: "Skills",
    ref,
  });

  return (
    <section className="techstack" id="techstack" ref={ref}>
      <div className="techstack__layout">
        {/* Left Column: Stack Strategy & Philosophy */}
        <div className="techstack__left">
          <Reveal>
            <p className="section__number">01</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section__heading">TECH STACK</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="techstack__philosophy">
              My approach is centered around building high-performance, type-safe software that scales. I select tools that support fast iteration cycles while preserving strict code quality, type safety, and seamless deployments.
            </p>
          </Reveal>

          {/* Daily Driver Highlight Panel */}
          <Reveal delay={0.18}>
            <div className="techstack__focus-panel">
              <div className="techstack__focus-header">
                <Sparkles className="techstack__focus-icon" />
                <span className="techstack__focus-title">CURRENT DAILY DRIVER</span>
              </div>
              <p className="techstack__focus-desc">
                Building custom full-stack software using a highly modern, fully integrated core stack:
              </p>
              <div className="techstack__focus-badges">
                <span className="techstack__focus-badge">Next.js</span>
                <span className="techstack__focus-badge">TypeScript</span>
                <span className="techstack__focus-badge">PostgreSQL</span>
                <span className="techstack__focus-badge">Tailwind</span>
              </div>
              <hr className="techstack__focus-divider" />
              <p className="techstack__focus-desc techstack__focus-desc--secondary">
                <strong>Currently sharpening:</strong> Core algorithms & data structures (LeetCode) and high-scale System Design principles.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Flat Clean Grid Cards */}
        <div className="techstack__right">
          <div className="techstack__cards-stack">
            {techStacks.map((stack, index) => {
              const CategoryIcon = stack.icon;
              return (
                <Reveal key={stack.category} delay={0.15 + index * 0.1}>
                  <div
                    className="techstack__card"
                    style={
                      {
                        "--ambient-glow": stack.glow,
                      } as React.CSSProperties
                    }
                  >
                    <div className="techstack__card-header">
                      <div className="techstack__card-icon-wrapper">
                        <CategoryIcon className="techstack__card-icon" />
                      </div>
                      <p className="techstack__category">{stack.category}</p>
                    </div>
                    <div className="techstack__badges">
                      {stack.tools.map((toolName) => {
                        const iconInfo = techIconMap[toolName];
                        if (!iconInfo) return null;
                        const Icon = iconInfo.icon;
                        return (
                          <span
                            key={toolName}
                            className="techstack__badge"
                            style={
                              {
                                "--brand-color": iconInfo.fill,
                              } as React.CSSProperties
                            }
                          >
                            <Icon
                              className="techstack__badge-icon"
                              style={{ color: iconInfo.fill }}
                            />
                            {toolName}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
