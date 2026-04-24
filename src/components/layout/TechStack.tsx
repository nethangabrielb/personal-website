import {
  SiAstro,
  SiBetterauth,
  SiCss,
  SiDigitalocean,
  SiDocker,
  SiExpress,
  SiGit,
  SiHtml5,
  SiInsomnia,
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

import { TechBadge } from "@/components/TechBadge";
import { Reveal } from "@/components/ui/Reveal";

const techStacks = [
  {
    category: "Frontend",
    tools: [
      { icon: SiReact, label: "React", fill: "#61DAFB" },
      { icon: SiNextdotjs, label: "Next.js", fill: "#000000" },
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
    category: "Backend",
    tools: [
      { icon: SiNodedotjs, label: "Node.js", fill: "#5FA04E" },
      { icon: SiExpress, label: "Express", fill: "#000000" },
      { icon: SiPostgresql, label: "PostgreSQL", fill: "#4169E1" },
      { icon: SiPrisma, label: "Prisma", fill: "#2D3748" },
      { icon: SiInsomnia, label: "RESTful APIs", fill: "#4000BF" },
      { icon: SiSocketdotio, label: "Socket.IO", fill: "#010101" },
      { icon: SiMistralai, label: "Mistral AI", fill: "#FDDC0D" },
      { icon: SiPassport, label: "Passport.js", fill: "#34E27A" },
      { icon: SiLaravel, label: "Laravel", fill: "#FF2D20" },
      { icon: SiPhp, label: "PHP", fill: "#777BB4" },
    ],
  },
  {
    category: "Tools & Infra",
    tools: [
      { icon: SiGit, label: "Git", fill: "#F05032" },
      { icon: SiDocker, label: "Docker", fill: "#2496ED" },
      { icon: SiVercel, label: "Vercel", fill: "#000000" },
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

export const TechStack = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-20">
      <Reveal delay={0.4}>
        <h2 className="text-4xl font-medium tracking-tight text-primary leading-tight">
          Tech Stack
        </h2>
        <p className="text-md text-muted-foreground mt-1">
          The stuffs I use to make stuffs.
        </p>
      </Reveal>

      <Reveal delay={0.5}>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {techStacks.map((stack) => (
            <div
              key={stack.category}
              className="rounded-xl border border-border bg-surface p-4 flex flex-col gap-3 transition-all duration-300 hover:shadow-md"
            >
              <p className="text-md  font-medium text-muted-foreground">
                {stack.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.tools.map((tool) => (
                  <TechBadge
                    key={tool.label}
                    icon={tool.icon}
                    label={tool.label}
                    fill={tool.fill}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};
