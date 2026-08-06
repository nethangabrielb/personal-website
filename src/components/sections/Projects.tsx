import { useRef } from "react";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { useScrollSection } from "@/hooks/useScrollSection";

type ProjectData = {
  number: string;
  title: string;
  description: string;
  date: string;
  status: string;
  screenshot?: { src: string; width: number; height: number; srcSet?: string };
  tags: string[];
  links: { live?: string; github: string };
};

const projectsData: ProjectData[] = [
  {
    number: "01",
    title: "DevLog",
    description:
      "Developer activity tracker that logs time sessions against projects, DSA problems, articles, and snippets, then turns that raw activity into streaks, statistics, charts, and daily reports. Built as a pnpm monorepo with a decoupled NestJS REST API and React SPA sharing a common types package, JWT + Google OAuth authentication, and BullMQ + Redis background report generation.",
    date: "Jul 2026 – Aug 2026",
    status: "Completed",
    tags: [
      "React",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "BullMQ",
      "Redis",
      "TanStack Query",
    ],
    links: {
      github: "https://github.com/nethangabrielb/dev-log",
    },
  },
  {
    number: "02",
    title: "Nethangabrielb.dev",
    description:
      "This portfolio — React + Vite + TypeScript + Vanilla CSS. Verified by Google PageSpeed Insights (90+ Performance, 96 Accessibility, 100 Best Practices, 100 SEO) and Seobility (88% On-Page score).",
    date: "Apr 2026",
    status: "Live",
    screenshot: {
      src: "/personal-website.webp",
      width: 960,
      height: 482,
      srcSet:
        "/personal-website-480.webp 480w, /personal-website-768.webp 768w, /personal-website.webp 960w",
    },
    tags: ["React", "TypeScript", "Vite", "Vanilla CSS", "Motion"],
    links: {
      live: "https://nethangabrielb.dev",
      github: "https://github.com/nethangabrielb/personal-website",
    },
  },
  {
    number: "03",
    title: "Calibrate AI",
    description:
      "AI-powered job application tracker with resume scoring, match analysis, and Zod-validated JSON output via Mistral AI. Features anti-inflation rubric, Upstash Redis rate limiting, and resume versioning with duplicate detection.",
    date: "Mar 2026 – Jun 2026",
    status: "Live",
    screenshot: {
      src: "/calibrate-screenshot.webp",
      width: 960,
      height: 554,
      srcSet:
        "/calibrate-screenshot-480.webp 480w, /calibrate-screenshot-768.webp 768w, /calibrate-screenshot.webp 960w",
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
    number: "04",
    title: "Chirper",
    description:
      "Full-stack Twitter/X clone with real-time messaging via Socket.IO. Built as a pnpm monorepo with Controller→Service→Repository architecture, cursor-based pagination, and Google OAuth. Docker-deployed on DigitalOcean; Next.js frontend on Vercel.",
    date: "Oct 2025 – Mar 2026",
    status: "Live",
    screenshot: {
      src: "/chirper-screenshot.webp",
      width: 960,
      height: 525,
      srcSet:
        "/chirper-screenshot-480.webp 480w, /chirper-screenshot-768.webp 768w, /chirper-screenshot.webp 960w",
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
                  <span className="project-date">{project.date}</span>
                  <span className="project-status">{project.status}</span>
                </div>
                <p className="project-desc">{project.description}</p>
                {project.screenshot ? (
                  <figure className="project-figure">
                    <img
                      src={project.screenshot.src}
                      srcSet={project.screenshot.srcSet}
                      sizes="(min-width: 768px) 560px, 92vw"
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      width={project.screenshot.width}
                      height={project.screenshot.height}
                    />
                    <figcaption>
                      fig. {project.number} — {project.title}
                    </figcaption>
                  </figure>
                ) : (
                  <figure className="project-figure">
                    <div
                      className="project-placeholder"
                      role="img"
                      aria-label={`${project.title} screenshot placeholder`}
                    >
                      <span className="project-placeholder-title">
                        {project.title}
                      </span>
                      <span className="project-placeholder-note">
                        Screenshot coming soon
                      </span>
                    </div>
                    <figcaption>
                      fig. {project.number} — {project.title}
                    </figcaption>
                  </figure>
                )}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-actions">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live site`}
                  >
                    Live <span className="arrow" aria-hidden="true">↗</span>
                  </a>
                )}
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
