import { useRef } from "react";

import { SectionRule } from "@/components/ui/SectionRule";
import { useScrollSection } from "@/hooks/useScrollSection";

const projectsData = [
  {
    number: "01",
    title: "CALIBRATE AI",
    description:
      "AI-powered job application tracker with resume scoring, match analysis, and Zod-validated JSON output via Mistral AI. Features anti-inflation rubric, Upstash Redis rate limiting, and resume versioning with duplicate detection.",
    screenshot: "/calibrate-screenshot.webp",
    tags: [
      { label: "React", cls: "react" },
      { label: "TypeScript", cls: "ts" },
      { label: "Next.js", cls: "" },
      { label: "PostgreSQL", cls: "" },
      { label: "Prisma", cls: "" },
      { label: "Mistral AI", cls: "" },
      { label: "Upstash Redis", cls: "" },
      { label: "Better Auth", cls: "" },
    ],
    links: {
      live: "https://calibrate-ai.vercel.app/",
      github: "https://github.com/nethangabrielb/calibrate-ai",
    },
  },
  {
    number: "02",
    title: "CHIRPER",
    description:
      "Full-stack Twitter/X clone with real-time messaging via Socket.IO. Built as a pnpm monorepo with Controller→Service→Repository architecture, cursor-based pagination, and Google OAuth. Docker-deployed on DigitalOcean; Next.js frontend on Vercel.",
    screenshot: "/chirper-screenshot.webp",
    tags: [
      { label: "React", cls: "react" },
      { label: "TypeScript", cls: "ts" },
      { label: "Next.js", cls: "" },
      { label: "Express 5", cls: "" },
      { label: "Socket.IO", cls: "" },
      { label: "Docker", cls: "" },
      { label: "DigitalOcean", cls: "" },
      { label: "Passport.js", cls: "" },
    ],
    links: {
      live: "https://chirper-frontend.vercel.app/",
      github: "https://github.com/nethangabrielb/chirper",
    },
  },
  {
    number: "03",
    title: "NETHANGABRIELB.DEV",
    description:
      "This portfolio — React + Vite + TypeScript + Vanilla CSS. Verified by Google PageSpeed Insights (90+ Performance, 96 Accessibility, 100 Best Practices, 100 SEO) and Seobility (88% On-Page score).",
    screenshot: "/personal-website.webp",
    tags: [
      { label: "React", cls: "react" },
      { label: "TypeScript", cls: "ts" },
      { label: "Vite", cls: "" },
      { label: "Vanilla CSS", cls: "" },
      { label: "Motion", cls: "" },
    ],
    links: {
      live: "https://nethangabrielb.dev",
      github: "https://github.com/nethangabrielb/personal-website",
    },
  },
];

/* SVG icons inlined to avoid extra deps */
const ExternalIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-3M9 2h5m0 0v5m0-5L8 9" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

export const Projects = () => {
  const ref = useRef<HTMLElement>(null);
  useScrollSection({ sectionName: "Projects", ref });

  return (
    <section id="projects" ref={ref}>
      <div className="outer">
        <SectionRule number="03" title="Selected Work" date="PRODUCTION DEPLOYED" />
        <div className="projects-header">
          <div>
            <div className="projects-heading">
              <span className="num">PROJECTS</span>
              WORK
            </div>
          </div>
          <p className="projects-subtext">
            Both projects are live, production-deployed, and built to a spec
            I wrote myself. No tutorials. No YouTube clones.
          </p>
        </div>

        <div className="project-list">
          {projectsData.map((project) => (
            <div key={project.number} className="project-card">
              <div className="project-num-col">{project.number}</div>
              <div className="project-body">
                <div className="project-title-row">
                  <div className="project-title">{project.title}</div>
                  <span className="project-status live">Live</span>
                </div>
                <p className="project-desc">{project.description}</p>
                {project.screenshot && (
                  <div className="project-screenshot">
                    <img
                      src={project.screenshot}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag.label} className={`tag ${tag.cls}`}>
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-links-col">
                <a href={project.links.live} className="icon-btn" title="View live" target="_blank" rel="noopener noreferrer">
                  <ExternalIcon />
                </a>
                <a href={project.links.github} className="icon-btn" title="View code" target="_blank" rel="noopener noreferrer">
                  <GithubIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
