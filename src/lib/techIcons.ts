import {
  SiAstro,
  SiBetterauth,
  SiDocker,
  SiExpress,
  SiLaravel,
  SiMistralai,
  SiNextdotjs,
  SiPassport,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiSanity,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "@icons-pack/react-simple-icons";
import type { ElementType } from "react";

interface TechIcon {
  icon: ElementType;
  fill: string;
}

export const techIconMap: Record<string, TechIcon> = {
  React: { icon: SiReact, fill: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, fill: "#ffffff" },
  TypeScript: { icon: SiTypescript, fill: "#3178C6" },
  "Tailwind CSS": { icon: SiTailwindcss, fill: "#06B6D4" },
  "TanStack Query": { icon: SiReactquery, fill: "#FF4154" },
  "Mistral AI": { icon: SiMistralai, fill: "#FDDC0D" },
  "Better Auth": { icon: SiBetterauth, fill: "#EB5424" },
  Zod: { icon: SiZod, fill: "#3E67B1" },
  Express: { icon: SiExpress, fill: "#ffffff" },
  PostgreSQL: { icon: SiPostgresql, fill: "#4169E1" },
  Prisma: { icon: SiPrisma, fill: "#2D3748" },
  "Passport.js": { icon: SiPassport, fill: "#34E27A" },
  "Socket.IO": { icon: SiSocketdotio, fill: "#ffffff" },
  Docker: { icon: SiDocker, fill: "#2496ED" },
  Astro: { icon: SiAstro, fill: "#FF5D01" },
  "Sanity CMS": { icon: SiSanity, fill: "#F03E2F" },
  Laravel: { icon: SiLaravel, fill: "#FF2D20" },
};
