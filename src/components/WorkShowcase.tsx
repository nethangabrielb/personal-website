import { type KeyboardEvent, type MouseEvent, useId, useRef, useState } from "react";

export interface ShowcaseProject {
  slug: string;
  title: string;
  year: string;
  subtitle: string;
  archNote: string;
  liveUrl: string;
  sourceUrl: string;
  image: {
    src: string;
    srcSet: string;
    width: number;
    height: number;
    alt: string;
  };
}

interface WorkShowcaseProps {
  projects: ShowcaseProject[];
}

export default function WorkShowcase({ projects }: WorkShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const rowRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const stageId = useId();

  const activeProject = projects[activeIndex] ?? projects[0];
  if (!activeProject) return null;

  const handleRowKeyDown = (
    event: KeyboardEvent<HTMLAnchorElement>,
    index: number,
  ) => {
    let nextIndex: number | null = null;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      nextIndex = (index + 1) % projects.length;
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      nextIndex = (index - 1 + projects.length) % projects.length;
    } else if (event.key === "Home") {
      event.preventDefault();
      nextIndex = 0;
    } else if (event.key === "End") {
      event.preventDefault();
      nextIndex = projects.length - 1;
    }

    if (nextIndex !== null) {
      setActiveIndex(nextIndex);
      rowRefs.current[nextIndex]?.focus();
    }
  };

  const handleRowClick = (
    event: MouseEvent<HTMLAnchorElement>,
    index: number,
  ) => {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    if (index !== activeIndex) {
      event.preventDefault();
      setActiveIndex(index);
    }
  };

  return (
    <>
      {/* Desktop interactive split showcase */}
      <div className="hidden lg:grid lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-10 lg:items-start">
        <div
          className="border-t border-b border-border divide-y divide-border"
          role="list"
          aria-label="Selected projects"
        >
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            return (
              <div key={project.slug} role="listitem">
                <a
                  ref={(el) => {
                    rowRefs.current[index] = el;
                  }}
                  href={`/work/${project.slug}`}
                  aria-current={isActive ? "true" : undefined}
                  aria-controls={stageId}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleRowKeyDown(event, index)}
                  onClick={(event) => handleRowClick(event, index)}
                  className={`group relative block py-4 pl-4 pr-3 transition-[background-color,color] duration-150 ease-out ${
                    isActive
                      ? "bg-surface-hover"
                      : "bg-transparent hover:bg-surface-hover/60"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-y-0 left-0 w-[2px] bg-ink transition-opacity duration-150 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <div className="flex items-baseline justify-between gap-3">
                    <span
                      className={`inline-flex items-baseline gap-1.5 text-[1rem] font-medium leading-[1.35] tracking-[-0.015em] transition-colors duration-150 ${
                        isActive
                          ? "text-ink"
                          : "text-ink-secondary group-hover:text-ink"
                      }`}
                    >
                      <span>{project.title}</span>
                      <span
                        aria-hidden="true"
                        className={`text-[0.875rem] text-ink-muted transition-opacity duration-150 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        &rarr;
                      </span>
                    </span>
                    <span className="mono-data shrink-0 text-ink-muted">
                      {project.year}
                    </span>
                  </div>
                  <p className="mt-1.5 mb-0 text-[0.84375rem] leading-[1.5] text-ink-secondary line-clamp-2">
                    {project.subtitle}
                  </p>
                </a>
              </div>
            );
          })}
        </div>

        {/* Right live product stage */}
        <div
          id={stageId}
          aria-live="polite"
          className="min-w-0 rounded-[6px] border border-border bg-surface p-4 sm:p-6"
        >
          <a
            href={`/work/${activeProject.slug}`}
            aria-label={`Read ${activeProject.title} case study`}
            className="relative block aspect-[960/503] w-full overflow-hidden rounded-[4px] border border-border-strong bg-bg shadow-[0_4px_20px_-8px_rgba(9,9,11,0.12)]"
          >
            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <img
                  key={project.slug}
                  src={project.image.src}
                  srcSet={project.image.srcSet}
                  sizes="(min-width: 1080px) 610px, 60vw"
                  width={project.image.width}
                  height={project.image.height}
                  alt={project.image.alt}
                  aria-hidden={!isActive}
                  loading="eager"
                  decoding={index === 0 ? "sync" : "async"}
                  className={`absolute inset-0 block h-full w-full object-cover object-top transition-opacity duration-[180ms] ease-out motion-reduce:transition-none ${
                    isActive
                      ? "z-10 opacity-100"
                      : "pointer-events-none z-0 opacity-0"
                  }`}
                />
              );
            })}
          </a>

          <div className="mt-4 border-t border-border pt-3.5">
            <p className="m-0 text-[0.84375rem] leading-[1.45] text-ink-secondary">
              {activeProject.archNote}
            </p>
            <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[0.84375rem]">
              <a
                href={`/work/${activeProject.slug}`}
                className="primary-link"
              >
                Read case study &rarr;
              </a>
              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="quiet-link"
              >
                Live &#8599;
              </a>
              <a
                href={activeProject.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="quiet-link"
              >
                Source &#8599;
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile clean vertical stack */}
      <div className="block space-y-12 lg:hidden">
        {projects.map((project, index) => (
          <article key={project.slug}>
            <a
              href={`/work/${project.slug}`}
              aria-label={`Read ${project.title} case study`}
              className="block rounded-[6px] border border-border bg-surface p-3.5 sm:p-5"
            >
              <img
                src={project.image.src}
                srcSet={project.image.srcSet}
                sizes="(min-width: 640px) calc(100vw - 120px), calc(100vw - 76px)"
                width={project.image.width}
                height={project.image.height}
                alt={project.image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding={index === 0 ? "sync" : "async"}
                className="block w-full h-auto rounded-[4px] border border-border-strong shadow-[0_4px_20px_-8px_rgba(9,9,11,0.12)]"
              />
            </a>

            <div className="mt-4">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="m-0 text-[1.0625rem] font-medium tracking-[-0.015em] text-ink">
                  <a href={`/work/${project.slug}`} className="hover:opacity-80">
                    {project.title}
                  </a>
                </h3>
                <span className="mono-data shrink-0 text-ink-muted">
                  {project.year}
                </span>
              </div>

              <p className="mt-1.5 mb-0 text-[0.90625rem] leading-[1.55] text-ink-secondary text-pretty">
                {project.subtitle}
              </p>

              <p className="mt-2 mb-0 text-[0.8125rem] leading-[1.45] text-ink-muted">
                {project.archNote}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[0.84375rem]">
                <a href={`/work/${project.slug}`} className="primary-link">
                  Read case study &rarr;
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quiet-link"
                >
                  Live &#8599;
                </a>
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quiet-link"
                >
                  Source &#8599;
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
