import {
  SiBetterauth,
  SiDocker,
  SiExpress,
  SiGithub,
  SiMistralai,
  SiNextdotjs,
  SiPassport,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "@icons-pack/react-simple-icons";
import { useRef } from "react";

import { ProjectCard } from "@/components/ProjectsCard";
import { useScrollSection } from "@/hooks/useScrollSection";

import { Reveal } from "../ui/Reveal";

const projectsData = [
  {
    title: "Calibrate AI",
    subHeading: "AI-Powered Job Application Tracker",
    description:
      "AI-powered job application tracker that analyzes resumes against roles to generate fit scores, identify skill gaps, and provide concise recommendations.",
    techStack: [
      { icon: SiReact, label: "React", fill: "#61DAFB" },
      { icon: SiNextdotjs, label: "Next.js", fill: "#000000" },
      { icon: SiTypescript, label: "TypeScript", fill: "#3178C6" },
      { icon: SiTailwindcss, label: "Tailwind CSS", fill: "#06B6D4" },
      { icon: SiReactquery, label: "TanStack Query", fill: "#FF4154" },
      { icon: SiMistralai, label: "Mistral AI", fill: "#FDDC0D" },
      { icon: SiBetterauth, label: "Better Auth", fill: "#EB5424" },
      { icon: SiZod, label: "Zod", fill: "#3E67B1" },
    ],
    links: {
      live: "https://calibrate-ai.vercel.app/",
      github: "https://github.com/nethangabrielb/calibrate-ai",
    },
    screenshot: "/calibrate-screenshot.png",
  },
  {
    title: "Chirper",
    subHeading: "Social Media Platform",
    description:
      "A fully responsive Twitter/X clone. Replicates the core social experience with threaded replies, optimistic UI updates, real-time direct messaging, and live push notifications.",
    techStack: [
      { icon: SiNextdotjs, label: "Next.js", fill: "#000000" },
      { icon: SiExpress, label: "Express", fill: "#000000" },
      { icon: SiTypescript, label: "TypeScript", fill: "#3178C6" },
      { icon: SiPostgresql, label: "PostgreSQL", fill: "#4169E1" },
      { icon: SiPrisma, label: "Prisma", fill: "#2D3748" },
      { icon: SiPassport, label: "Passport.js", fill: "#34E27A" },
      { icon: SiSocketdotio, label: "Socket.IO", fill: "#010101" },
      { icon: SiDocker, label: "Docker", fill: "#2496ED" },
    ],
    links: {
      live: "https://chirper-frontend.vercel.app/",
      github: "https://github.com/nethangabrielb/chirper",
    },
    screenshot: "/chirper-screenshot.png",
  },
];

export const Projects = () => {
  const ref = useRef<HTMLElement>(null);

  useScrollSection({
    sectionName: "Projects",
    ref,
  });
  return (
    <section className="mx-auto max-w-5xl px-4 py-16" id="projects" ref={ref}>
      <Reveal delay={0.2}>
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-primary leading-tight">
          Personal Projects
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-1">
          These are some of my proudest personal projects.
        </p>
      </Reveal>

      <Reveal delay={0.4}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {projectsData.map((project) => (
            <ProjectCard project={project}></ProjectCard>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="text-sm sm:text-base md:text-lg text-center text-muted-foreground mt-6">
          I've also completed 30+ projects ranging from static sites to
          full-stack apps during my time learning in The Odin Project. <br></br>{" "}
          Check out more of my work on{" "}
          <a
            href="https://github.com/nethangabrielb"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center gap-1 hover:text-foreground transition-all duration-300 hover:-translate-y-0.5"
          >
            GitHub
            <SiGithub className="size-4" />
          </a>
        </p>
      </Reveal>
    </section>
  );
};
