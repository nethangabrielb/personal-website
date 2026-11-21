import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import type { ProjectEntry } from "@/types";

interface ProjectCarouselProps {
  project: ProjectEntry;
  onOpenLightbox: (project: ProjectEntry, slideIndex: number) => void;
}

export const ProjectCarousel = ({
  project,
  onOpenLightbox,
}: ProjectCarouselProps) => {
  const [mode, setMode] = useState<"preview" | "blueprint">("preview");
  const [index, setIndex] = useState(0);

  const slides = project.screenshots;
  const count = slides.length;
  const activeSlide = slides[index] ?? slides[0];

  const goTo = (next: number) => {
    setIndex(((next % count) + count) % count);
  };

  return (
    <div className="workbench-stage">
      <div className="stage-chrome">
        <div className="stage-chrome-left">
          <span className="chrome-domain">{project.domainUrl}</span>
        </div>

        <div
          className="stage-mode-switch"
          role="group"
          aria-label={`${project.title} view mode`}
        >
          <button
            type="button"
            aria-pressed={mode === "preview"}
            className={`mode-tab${mode === "preview" ? " is-active" : ""}`}
            onClick={() => setMode("preview")}
          >
            <span className="mode-tab-label">Live UI</span>
          </button>

          <button
            type="button"
            aria-pressed={mode === "blueprint"}
            className={`mode-tab${mode === "blueprint" ? " is-active" : ""}`}
            onClick={() => setMode("blueprint")}
          >
            <span className="mode-tab-label">Blueprint</span>
          </button>
        </div>
      </div>

      {mode === "preview" && activeSlide ? (
        <>
          <div className="stage-viewport">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={activeSlide.src}
                src={activeSlide.src}
                srcSet={activeSlide.srcSet}
                sizes="(min-width: 1040px) 640px, 94vw"
                alt={`${project.title} - ${activeSlide.label}`}
                loading="lazy"
                width={activeSlide.width}
                height={activeSlide.height}
                className="stage-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.16 }}
                onClick={() => onOpenLightbox(project, index)}
              />
            </AnimatePresence>
          </div>

          <div className="stage-filmstrip">
            <div
              className="filmstrip-tabs"
              role="group"
              aria-label="Choose screenshot"
            >
              {slides.map((slide, idx) => (
                <button
                  key={slide.src}
                  type="button"
                  aria-pressed={idx === index}
                  className={`filmstrip-tab${idx === index ? " is-active" : ""}`}
                  onClick={() => setIndex(idx)}
                >
                  <span className="filmstrip-no">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>{slide.label}</span>
                </button>
              ))}
            </div>

            <div className="filmstrip-actions">
              <button
                type="button"
                className="filmstrip-expand"
                onClick={() => onOpenLightbox(project, index)}
                aria-label={`Inspect ${project.title} screenshot in fullscreen`}
                title="Inspect fullscreen"
              >
                <Maximize2 size={14} strokeWidth={1.75} />
              </button>

              {count > 1 ? (
                <>
                  <button
                    type="button"
                    className="filmstrip-arrow"
                    onClick={() => goTo(index - 1)}
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={14} strokeWidth={1.75} />
                  </button>
                  <button
                    type="button"
                    className="filmstrip-arrow"
                    onClick={() => goTo(index + 1)}
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={14} strokeWidth={1.75} />
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </>
      ) : (
        <div className="stage-blueprint">
          <div className="blueprint-grid">
            {project.blueprint.map((layer, tierIdx) => (
              <div key={layer.tier} className="blueprint-tier">
                <div className="blueprint-tier-head">
                  <span className="blueprint-tier-step">
                    Tier {tierIdx + 1}
                  </span>
                  <span className="blueprint-tier-name">{layer.tier}</span>
                </div>

                <div className="blueprint-nodes">
                  {layer.nodes.map((node) => (
                    <div key={node.name} className="blueprint-node">
                      <span className="blueprint-node-title">{node.name}</span>
                      <span className="blueprint-node-detail">
                        {node.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
