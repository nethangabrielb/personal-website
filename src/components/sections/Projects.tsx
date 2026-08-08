import { useRef } from "react";

import { ProjectCarousel } from "@/components/ui/ProjectCarousel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useScrollSection } from "@/hooks/useScrollSection";

type ProjectScreenshot = {
  src: string;
  width: number;
  height: number;
  srcSet?: string;
};

type ProjectData = {
  number: string;
  title: string;
  description: string;
  date: string;
  status: string;
  screenshots?: ProjectScreenshot[];
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
    screenshots: [
      {
        src: "/devlog.webp",
        width: 960,
        height: 501,
        srcSet:
          "/devlog-480.webp 480w, /devlog-768.webp 768w, /devlog.webp 960w",
      },
      {
        src: "/devlog-1.webp",
        width: 960,
        height: 503,
        srcSet:
          "/devlog-1-480.webp 480w, /devlog-1-768.webp 768w, /devlog-1.webp 960w",
      },
      {
        src: "/devlog-2.webp",
        width: 960,
        height: 498,
        srcSet:
          "/devlog-2-480.webp 480w, /devlog-2-768.webp 768w, /devlog-2.webp 960w",
      },
      {
        src: "/devlog-3.webp",
        width: 960,
        height: 501,
        srcSet:
          "/devlog-3-480.webp 480w, /devlog-3-768.webp 768w, /devlog-3.webp 960w",
      },
    ],
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
    screenshots: [
      {
        src: "/personal-website.webp",
        width: 960,
        height: 497,
        srcSet:
          "/personal-website-480.webp 480w, /personal-website-768.webp 768w, /personal-website.webp 960w",
      },
    ],
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
    screenshots: [
      {
        src: "/calibrate-ai.webp",
        width: 960,
        height: 502,
        srcSet:
          "/calibrate-ai-480.webp 480w, /calibrate-ai-768.webp 768w, /calibrate-ai.webp 960w",
      },
      {
        src: "/calibrate-ai-1.webp",
        width: 960,
        height: 497,
        srcSet:
          "/calibrate-ai-1-480.webp 480w, /calibrate-ai-1-768.webp 768w, /calibrate-ai-1.webp 960w",
      },
      {
        src: "/calibrate-ai-2.webp",
        width: 960,
        height: 498,
        srcSet:
          "/calibrate-ai-2-480.webp 480w, /calibrate-ai-2-768.webp 768w, /calibrate-ai-2.webp 960w",
      },
    ],
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
    screenshots: [
      {
        src: "/chirper.webp",
        width: 960,
        height: 498,
        srcSet:
          "/chirper-480.webp 480w, /chirper-768.webp 768w, /chirper.webp 960w",
      },
      {
        src: "/chirper-1.webp",
        width: 960,
        height: 501,
        srcSet:
          "/chirper-1-480.webp 480w, /chirper-1-768.webp 768w, /chirper-1.webp 960w",
      },
      {
        src: "/chirper-2.webp",
        width: 960,
        height: 497,
        srcSet:
          "/chirper-2-480.webp 480w, /chirper-2-768.webp 768w, /chirper-2.webp 960w",
      },
    ],
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
                {project.screenshots ? (
                  project.screenshots.length > 1 ? (
                    <figure className="project-figure">
                      <ProjectCarousel
                        slides={project.screenshots}
                        alt={`${project.title} screenshot`}
                        href={project.links.live ?? project.links.github}
                        linkLabel={
                          project.links.live
                            ? `Open ${project.title} live site`
                            : `Open ${project.title} source code`
                        }
                      />
                      <figcaption>
                        fig. {project.number} — {project.title}
                      </figcaption>
                    </figure>
                  ) : (
                    <figure className="project-figure">
                      <a
                        href={project.links.live ?? project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={
                          project.links.live
                            ? `Open ${project.title} live site`
                            : `Open ${project.title} source code`
                        }
                      >
                        <img
                          src={project.screenshots[0].src}
                          srcSet={project.screenshots[0].srcSet}
                          sizes="(min-width: 768px) 560px, 92vw"
                          alt={`${project.title} screenshot`}
                          loading="lazy"
                          width={project.screenshots[0].width}
                          height={project.screenshots[0].height}
                        />
                      </a>
                      <figcaption>
                        fig. {project.number} — {project.title}
                      </figcaption>
                    </figure>
                  )
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
