import { SiGithub } from "@icons-pack/react-simple-icons";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

import { Reveal } from "@/components/ui/Reveal";
import { useScrollSection } from "@/hooks/useScrollSection";

const projectsData = [
  {
    number: "01",
    title: "CALIBRATE AI",
    subtitle: "AI-Powered Job Application Tracker",
    description:
      "AI-powered job application tracker that analyzes resumes against roles to generate fit scores, identify skill gaps, and provide concise recommendations.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Mistral AI",
      "Better Auth",
      "Zod",
    ],
    screenshot: "/calibrate-screenshot.webp",
    links: {
      live: "https://calibrate-ai.vercel.app/",
      github: "https://github.com/nethangabrielb/calibrate-ai",
    },
  },
  {
    number: "02",
    title: "CHIRPER",
    subtitle: "Social Media Platform",
    description:
      "A fully responsive Twitter/X clone with threaded replies, optimistic UI updates, real-time direct messaging, and live push notifications.",
    tech: [
      "Next.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Passport.js",
      "Socket.IO",
      "Docker",
    ],
    screenshot: "/chirper-screenshot.webp",
    links: {
      live: "https://chirper-frontend.vercel.app/",
      github: "https://github.com/nethangabrielb/chirper",
    },
  },
];

export const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);

  useScrollSection({
    sectionName: "Projects",
    ref,
  });

  return (
    <div id="projects" ref={ref}>
      <div className="section-header">
        <Reveal>
          <p className="section__number">01</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section__heading">PROJECTS</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section__sub">
            Things I built because I wanted to, not because I had to.
          </p>
        </Reveal>
      </div>

      {projectsData.map((project, index) => (
        <div key={project.number}>
          {index > 0 && <hr className="project__divider" />}
          <section className="project">
            <div className="project__layout">
              {/* Left — info */}
              <div className="project__info">
                <Reveal>
                  <p className="project__number">{project.number}</p>
                </Reveal>

                <Reveal delay={0.1}>
                  <h2 className="project__name">{project.title}</h2>
                  <p className="project__subtitle">{project.subtitle}</p>
                </Reveal>

                <Reveal delay={0.15}>
                  <p className="project__desc">{project.description}</p>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="project__tags">
                    {project.tech.map((t) => (
                      <span key={t} className="project__tag">
                        {t.toLowerCase()}
                      </span>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={0.25}>
                  <div className="project__links">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__link"
                    >
                      View Live <ArrowUpRight size={14} />
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__link"
                    >
                      GitHub <SiGithub size={14} />
                    </a>
                  </div>
                </Reveal>
              </div>

              {/* Right — screenshot */}
              <Reveal delay={0.2}>
                <div className="project__screenshot">
                  <div className="project__screenshot-bar">
                    <span className="project__dot project__dot--red" />
                    <span className="project__dot project__dot--yellow" />
                    <span className="project__dot project__dot--green" />
                  </div>
                  <img
                    src={project.screenshot}
                    alt={`${project.title} screenshot`}
                    className="project__screenshot-img"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};
