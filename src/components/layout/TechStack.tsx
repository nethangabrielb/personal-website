import {
  siAstro,
  siBetterauth,
  siCss,
  siDigitalocean,
  siDocker,
  siExpress,
  siGit,
  siHtml5,
  siInsomnia,
  siJavascript,
  siLaravel,
  siMistralai,
  siNextdotjs,
  siNodedotjs,
  siPassport,
  siPhp,
  siPnpm,
  siPostgresql,
  siPrisma,
  siReact,
  siReactquery,
  siSanity,
  siSocketdotio,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siUpstash,
  siVercel,
  siVite,
  siZod,
} from "simple-icons";

import { TechBadge } from "@/components/TechBadge";
import { Reveal } from "@/components/ui/Reveal";

const techStacks = [
  {
    category: "Frontend",
    tools: [
      { icon: siReact, label: "React", fill: "#61DAFB" },
      { icon: siNextdotjs, label: "Next.js", fill: "#000000" },
      { icon: siTypescript, label: "TypeScript", fill: "#3178C6" },
      { icon: siJavascript, label: "JavaScript", fill: "#F7DF1E" },
      { icon: siTailwindcss, label: "Tailwind CSS", fill: "#06B6D4" },
      { icon: siHtml5, label: "HTML5", fill: "#E34F26" },
      { icon: siCss, label: "CSS3", fill: "#1572B6" },
      { icon: siAstro, label: "Astro", fill: "#FF5D01" },
      { icon: siReactquery, label: "TanStack Query", fill: "#FF4154" },
    ],
  },
  {
    category: "Backend",
    tools: [
      { icon: siNodedotjs, label: "Node.js", fill: "#5FA04E" },
      { icon: siExpress, label: "Express", fill: "#000000" },
      { icon: siPostgresql, label: "PostgreSQL", fill: "#4169E1" },
      { icon: siPrisma, label: "Prisma", fill: "#2D3748" },
      { icon: siInsomnia, label: "RESTful APIs", fill: "#4000BF" },
      { icon: siSocketdotio, label: "Socket.IO", fill: "#010101" },
      { icon: siZod, label: "Zod", fill: "#3E67B1" },
      { icon: siMistralai, label: "Mistral AI", fill: "#FDDC0D" },
      { icon: siPassport, label: "Passport.js", fill: "#34E27A" },
      { icon: siBetterauth, label: "Better Auth", fill: "#EB5424" },
      { icon: siLaravel, label: "Laravel", fill: "#FF2D20" },
      { icon: siPhp, label: "PHP", fill: "#777BB4" },
    ],
  },
  {
    category: "Tools & Infra",
    tools: [
      { icon: siGit, label: "Git", fill: "#F05032" },
      { icon: siDocker, label: "Docker", fill: "#2496ED" },
      { icon: siVercel, label: "Vercel", fill: "#000000" },
      { icon: siDigitalocean, label: "DigitalOcean", fill: "#0080FF" },
      { icon: siSupabase, label: "Supabase", fill: "#3ECF8E" },
      { icon: siUpstash, label: "Upstash Redis", fill: "#00E9A3" },
      { icon: siSanity, label: "Sanity", fill: "#F03E2F" },
      { icon: siPnpm, label: "pnpm", fill: "#F69220" },
      { icon: siVite, label: "Vite", fill: "#646CFF" },
    ],
  },
];

export const TechStack = () => {
  return (
    <section className="mx-auto max-w-5xl px-4">
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
              className="rounded-xl border border-border bg-surface p-5 flex flex-col gap-3"
            >
              <p className="text-sm font-mono text-muted-foreground">
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
