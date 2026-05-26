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

interface TechIcon {
  icon: ElementType;
  fill: string;
}

export const techIconMap: Record<string, TechIcon> = {
  // Frontend
  React: { icon: SiReact, fill: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, fill: "#ffffff" },
  TypeScript: { icon: SiTypescript, fill: "#3178C6" },
  JavaScript: { icon: SiJavascript, fill: "#F7DF1E" },
  "Tailwind CSS": { icon: SiTailwindcss, fill: "#06B6D4" },
  HTML5: { icon: SiHtml5, fill: "#E34F26" },
  CSS3: { icon: SiCss, fill: "#1572B6" },
  Astro: { icon: SiAstro, fill: "#FF5D01" },
  "TanStack Query": { icon: SiReactquery, fill: "#FF4154" },

  // Backend
  "Node.js": { icon: SiNodedotjs, fill: "#5FA04E" },
  Express: { icon: SiExpress, fill: "#ffffff" },
  PostgreSQL: { icon: SiPostgresql, fill: "#4169E1" },
  Prisma: { icon: SiPrisma, fill: "#2D3748" },
  "Socket.IO": { icon: SiSocketdotio, fill: "#ffffff" },
  "Mistral AI": { icon: SiMistralai, fill: "#FDDC0D" },
  "Passport.js": { icon: SiPassport, fill: "#34E27A" },
  Laravel: { icon: SiLaravel, fill: "#FF2D20" },
  PHP: { icon: SiPhp, fill: "#777BB4" },

  // Tools & Infra
  Git: { icon: SiGit, fill: "#F05032" },
  Docker: { icon: SiDocker, fill: "#2496ED" },
  Vercel: { icon: SiVercel, fill: "#ffffff" },
  DigitalOcean: { icon: SiDigitalocean, fill: "#0080FF" },
  "Better Auth": { icon: SiBetterauth, fill: "#EB5424" },
  Zod: { icon: SiZod, fill: "#3E67B1" },
  Supabase: { icon: SiSupabase, fill: "#3ECF8E" },
  "Upstash Redis": { icon: SiUpstash, fill: "#00E9A3" },
  Sanity: { icon: SiSanity, fill: "#F03E2F" },
  "Sanity CMS": { icon: SiSanity, fill: "#F03E2F" },
  pnpm: { icon: SiPnpm, fill: "#F69220" },
  Vite: { icon: SiVite, fill: "#646CFF" },
};
