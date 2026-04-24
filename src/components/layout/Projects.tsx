import {
  siBetterauth,
  siDocker,
  siExpress,
  siMistralai,
  siNextdotjs,
  siPassport,
  siPnpm,
  siPostgresql,
  siPrisma,
  siReact,
  siReactquery,
  siSocketdotio,
  siTailwindcss,
  siTypescript,
  siZod,
} from "simple-icons";

import { ProjectCard } from "@/components/ProjectsCard";

import { Reveal } from "../ui/Reveal";

const projectsData = [
  {
    title: "Calibrate AI",
    subHeading: "AI-Powered Job Application Tracker",
    description:
      "AI-powered job application tracker that analyzes resumes against roles to generate fit scores, identify skill gaps, and provide concise recommendations.",
    techStack: [
      { icon: siReact, label: "React", fill: "#61DAFB" },
      { icon: siNextdotjs, label: "Next.js", fill: "#000000" },
      { icon: siTypescript, label: "TypeScript", fill: "#3178C6" },
      { icon: siTailwindcss, label: "Tailwind CSS", fill: "#06B6D4" },
      { icon: siReactquery, label: "TanStack Query", fill: "#FF4154" },
      { icon: siMistralai, label: "Mistral AI", fill: "#FDDC0D" },
      { icon: siBetterauth, label: "Better Auth", fill: "#EB5424" },
      { icon: siZod, label: "Zod", fill: "#3E67B1" },
    ],
    links: {
      live: "https://calibrate-ai.vercel.app/",
      github: "https://github.com/nethangabrielb/calibrate-ai",
    },
  },
  {
    title: "Chirper",
    subHeading: "Social Media Platform",
    description:
      "Real-time social media platform featuring a pnpm monorepo, Controller-Service-Repository architecture, and instant messaging via Socket.IO.",
    techStack: [
      { icon: siNextdotjs, label: "Next.js", fill: "#000000" },
      { icon: siExpress, label: "Express", fill: "#000000" },
      { icon: siTypescript, label: "TypeScript", fill: "#3178C6" },
      { icon: siPostgresql, label: "PostgreSQL", fill: "#4169E1" },
      { icon: siPrisma, label: "Prisma", fill: "#2D3748" },
      { icon: siPassport, label: "Passport.js", fill: "#34E27A" },
      { icon: siSocketdotio, label: "Socket.IO", fill: "#010101" },
      { icon: siDocker, label: "Docker", fill: "#2496ED" },
      { icon: siPnpm, label: "pnpm", fill: "#F69220" },
    ],
    links: {
      live: "https://chirper-frontend.vercel.app/",
      github: "https://github.com/nethangabrielb/chirper",
    },
  },
];

export const Projects = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-20">
      <Reveal>
        <h2 className="text-4xl font-medium tracking-tight text-primary leading-tight">
          Personal Projects
        </h2>
        <p className="text-md text-muted-foreground mt-1">
          These are some of my proudest personal projects.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="flex flex-row gap-4 mt-8">
          {projectsData.map((project) => (
            <ProjectCard project={project}></ProjectCard>
          ))}
        </div>
      </Reveal>
    </section>
  );
};
