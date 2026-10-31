import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Terminal,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { ProjectCarousel } from "@/components/ui/ProjectCarousel";
import { PROJECTS } from "@/data/portfolio";
import type { ProjectEntry } from "@/types";

interface LightboxState {
  project: ProjectEntry;
  index: number;
}

export const Projects = () => {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  useEffect(() => {
    if (!lightbox) return;

    const count = lightbox.project.screenshots.length;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(null);
      } else if (event.key === "ArrowRight" && count > 1) {
        setLightbox((prev) =>
          prev ? { ...prev, index: (prev.index + 1) % count } : null,
        );
      } else if (event.key === "ArrowLeft" && count > 1) {
        setLightbox((prev) =>
          prev ? { ...prev, index: (prev.index - 1 + count) % count } : null,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

  const activeLightboxSlide = lightbox
    ? lightbox.project.screenshots[lightbox.index]
    : null;

  return (
    <section id="work" className="page-section">
      <div className="container">
        <div className="section-heading-bar">
          <div className="section-heading-left">
            <span className="section-index">01</span>
            <div>
              <h2 className="section-title">Selected Work</h2>
              <p className="section-subtitle">
                Production-deployed systems engineered end-to-end. Switch any
                card between live UI screenshots and its 3-tier system
                blueprint.
              </p>
            </div>
          </div>
          <span className="section-badge">03 Flagship Deployments</span>
        </div>

        <div className="work-stack">
          {PROJECTS.map((project) => (
            <motion.article
              key={project.slug}
              className="bento-card work-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="work-info">
                <div className="work-meta-bar">
                  <span className="work-number">{project.number}</span>
                  <span className="live-badge">
                    <span className="signal-dot" aria-hidden="true" />
                    Live Production
                  </span>
                  <span className="work-date">{project.date}</span>
                </div>

                <h3 className="work-title">{project.title}</h3>
                <p className="work-tagline">{project.tagline}</p>
                <p className="work-summary">{project.summary}</p>

                <ul className="work-arch-list">
                  {project.architecture.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="chip-group">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="work-actions">
                  {project.links.live ? (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-tactile btn-tactile-primary"
                    >
                      <span>Live Deployment</span>
                      <ArrowUpRight
                        size={14}
                        strokeWidth={2.1}
                        aria-hidden="true"
                      />
                    </a>
                  ) : null}
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tactile"
                  >
                    <Terminal size={14} strokeWidth={1.9} aria-hidden="true" />
                    <span>Source Code</span>
                    <ArrowUpRight
                      size={13}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>

              <div className="work-visual">
                <ProjectCarousel
                  project={project}
                  onOpenLightbox={(proj, slideIndex) =>
                    setLightbox({ project: proj, index: slideIndex })
                  }
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && activeLightboxSlide ? (
          <div
            className="lightbox-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={`${lightbox.project.title} screenshot preview`}
          >
            <motion.div
              className="lightbox-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.16 }}
              onClick={() => setLightbox(null)}
            />

            <motion.div
              className="lightbox-frame"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="lightbox-bar">
                <div className="lightbox-caption">
                  <span className="lightbox-proj">
                    {lightbox.project.title}
                  </span>
                  <span className="lightbox-sep">·</span>
                  <span>
                    {activeLightboxSlide.label} ({lightbox.index + 1}/
                    {lightbox.project.screenshots.length})
                  </span>
                </div>

                <div className="lightbox-controls">
                  {lightbox.project.links.live ? (
                    <a
                      href={lightbox.project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lightbox-ext"
                    >
                      <span>Open Live</span>
                      <ArrowUpRight size={13} strokeWidth={2} />
                    </a>
                  ) : null}
                  {lightbox.project.screenshots.length > 1 ? (
                    <>
                      <button
                        type="button"
                        className="filmstrip-arrow"
                        onClick={() =>
                          setLightbox((prev) =>
                            prev
                              ? {
                                  ...prev,
                                  index:
                                    (prev.index -
                                      1 +
                                      prev.project.screenshots.length) %
                                    prev.project.screenshots.length,
                                }
                              : null,
                          )
                        }
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={15} strokeWidth={2} />
                      </button>
                      <button
                        type="button"
                        className="filmstrip-arrow"
                        onClick={() =>
                          setLightbox((prev) =>
                            prev
                              ? {
                                  ...prev,
                                  index:
                                    (prev.index + 1) %
                                    prev.project.screenshots.length,
                                }
                              : null,
                          )
                        }
                        aria-label="Next image"
                      >
                        <ChevronRight size={15} strokeWidth={2} />
                      </button>
                    </>
                  ) : null}
                  <button
                    type="button"
                    className="filmstrip-arrow"
                    onClick={() => setLightbox(null)}
                    aria-label="Close preview"
                  >
                    <X size={15} strokeWidth={2} />
                  </button>
                </div>
              </div>

              <div className="lightbox-img-wrap">
                <img
                  src={activeLightboxSlide.src}
                  srcSet={activeLightboxSlide.srcSet}
                  sizes="92vw"
                  alt={`${lightbox.project.title} - ${activeLightboxSlide.label}`}
                  width={activeLightboxSlide.width}
                  height={activeLightboxSlide.height}
                />
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </section>
  );
};
