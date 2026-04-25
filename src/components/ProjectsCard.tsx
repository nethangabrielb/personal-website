import { SiGithub } from "@icons-pack/react-simple-icons";
import { ExternalLink } from "lucide-react";
import type { ElementType } from "react";

interface TechItem {
  icon: ElementType;
  label: string;
  fill: string;
}

interface ProjectLinks {
  live: string;
  github: string;
}

interface Project {
  title: string;
  subHeading: string;
  description: string;
  screenshot: string;
  techStack: TechItem[];
  links: ProjectLinks;
}

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group flex flex-col rounded-lg border border-border bg-surface p-4 transition-all duration-300 hover:shadow-md sm:p-5">
      {/* Header */}
      <div className="mb-3 flex items-start justify-between sm:mb-4">
        <div>
          <h3 className="font-heading text-lg sm:text-xl font-medium text-text-primary mb-0.5">
            {project.title}
          </h3>
          <p className="font-sans text-xs sm:text-sm font-medium text-accent-green-dark">
            {project.subHeading}
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent-green-dark transition-colors"
            aria-label="View GitHub Repository"
          >
            <SiGithub size={18} />
          </a>
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent-green-dark transition-colors"
            aria-label="View Live Project"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Screenshot */}
      <div className="relative mb-4 overflow-hidden rounded-lg border border-border/60 shadow-sm transition-shadow duration-300 group-hover:shadow-lg sm:mb-5">
        <div className="bg-border flex items-center gap-1.5 px-3 py-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <img
          src={project.screenshot}
          alt={`${project.title} screenshot`}
          className="w-full aspect-16/10 object-cover object-top"
        />
      </div>

      {/* Description */}
      <p className="mb-4 font-sans text-sm text-text-primary leading-relaxed opacity-85 sm:mb-5 sm:text-[15px] md:text-base">
        {project.description}
      </p>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.techStack.map((tech) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.label}
              className="inline-flex items-center gap-1.5 bg-surface border border-border px-2 py-1 rounded-md"
            >
              <Icon
                className="size-3.5"
                style={{
                  color: tech.fill.startsWith("#")
                    ? tech.fill
                    : `#${tech.fill}`,
                }}
              />
              <span className="font-mono text-[11px] sm:text-[12px] text-text-primary">
                {tech.label.toLowerCase()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
