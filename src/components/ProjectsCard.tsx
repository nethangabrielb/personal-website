import { SiGithub } from "@icons-pack/react-simple-icons";
import { ExternalLink } from "lucide-react";
import type { SimpleIcon } from "simple-icons";

interface TechItem {
  icon: SimpleIcon;
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
  techStack: TechItem[];
  links: ProjectLinks;
}

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-[#E8E4DF] rounded-[12px] p-4 border border-[#D1CDC7] transition-all duration-300 hover:shadow-md">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-lora text-xl font-medium text-[#1A1A1A] mb-1">
            {project.title}
          </h3>
          <p className="font-dm-sans text-sm font-medium text-[#4A7C5F]">
            {project.subHeading}
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B7280] hover:text-[#4A7C5F] transition-colors"
            aria-label="View GitHub Repository"
          >
            <SiGithub></SiGithub>
          </a>
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B7280] hover:text-[#4A7C5F] transition-colors"
            aria-label="View Live Project"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="font-dm-sans text-[#1A1A1A] text-[15px] leading-relaxed mb-6 opacity-90">
        {project.description}
      </p>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <div
            key={tech.label}
            className="inline-flex items-center gap-1.5 bg-[#F9F7F4] border border-[#D1CDC7] px-2 py-1 rounded-[6px]"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="size-3.5"
              style={{ fill: tech.fill }}
              xmlns="http://www.w3.org/2000/svg"
              dangerouslySetInnerHTML={{ __html: tech.icon.path }}
            />
            <span className="font-dm-mono text-[12px] text-[#1A1A1A]">
              {tech.label.toLowerCase()}
            </span>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <div className="mt-6 pt-4 border-t border-[#D1CDC7]/50">
        <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-dm-sans font-medium text-[#7C9E8A] hover:text-[#4A7C5F] transition-colors group"
        >
          View Case Study
          <span className="ml-1 transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>
    </div>
  );
};
