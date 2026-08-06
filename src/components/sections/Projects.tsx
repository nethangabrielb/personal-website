import { useRef } from "react";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { useScrollSection } from "@/hooks/useScrollSection";

const projectsData = [
  {
    number: "01",
    title: "Calibrate AI",
    description:
      "AI-powered job application tracker with resume scoring, match analysis, and Zod-validated JSON output via Mistral AI. Features anti-inflation rubric, Upstash Redis rate limiting, and resume versioning with duplicate detection.",
    screenshot: {
      src: "/calibrate-screenshot.webp",
      width: 960,
      height: 554,
    },
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Mistral AI",
      "Upstash Redis",
      "Better Auth",
    ],
    links: {
      live: "https://calibrate-ai.vercel.app/",
      github: "https://github.com/nethangabrielb/calibrate-ai",
    },
  },
  {
    number: "02",
    title: "Chirper",
    description:
      "Full-stack Twitter/X clone with real-time messaging via Socket.IO. Built as a pnpm monorepo with Controller→Service→Repository architecture, cursor-based pagination, and Google OAuth. Docker-deployed on DigitalOcean; Next.js frontend on Vercel.",
    screenshot: {
      src: "/chirper-screenshot.webp",
      width: 960,
      height: 525,
    },
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Express 5",
      "Socket.IO",
      "Docker",
      "DigitalOcean",
      "Passport.js",
    ],
    links: {
      live: "https://chirper-frontend.vercel.app/",
      github: "https://github.com/nethangabrielb/chirper",
    },
  },
  {
    number: "03",
    title: "Nethangabrielb.dev",
    description:
      "This portfolio — React + Vite + TypeScript + Vanilla CSS. Verified by Google PageSpeed Insights (90+ Performance, 96 Accessibility, 100 Best Practices, 100 SEO) and Seobility (88% On-Page score).",
    screenshot: {
      src: "/personal-website.webp",
      width: 960,
      height: 482,
    },
    tags: ["React", "TypeScript", "Vite", "Vanilla CSS", "Motion"],
    links: {
      live: "https://nethangabrielb.dev",
      github: "https://github.com/nethangabrielb/personal-website",
    },
  },
];

export const Projects = () => {
  const ref = useRef<HTMLElement>(null);
  useScrollSection({ sectionName: "Projects", ref });

  return (
    <section id="projects" ref={ref}>
      <div className="outer">
        <SectionHeader number="03" title="Selected work" caption="Production deployed" />
        <div className="projects-header">
          <p className="projects-heading">
            Built to <em>ship.</em>
          </p>
          <p className="projects-subtext">
            Live, production-deployed, and built to a spec I wrote myself.
            No tutorials. No YouTube clones.
          </p>
        </div>

        <div className="project-list">
          {projectsData.map((project) => (
            <article key={project.number} className="project-row">
              <div>
                <div className="project-title-row">
                  <span className="project-index">{project.number}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-status">Live</span>
                </div>
                <p className="project-desc">{project.description}</p>
                <figure className="project-figure">
                  <img
                    src={project.screenshot.src}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    width={project.screenshot.width}
                    height={project.screenshot.height}
                  />
                  <figcaption>
                    fig. {project.number} — {project.title}
                  </figcaption>
                </figure>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-actions">
                <a
                  href={project.links.live}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} live site`}
                >
                  Live <span className="arrow" aria-hidden="true">↗</span>
                </a>
                <a
                  href={project.links.github}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} source code`}
                >
                  Source <span className="arrow" aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
