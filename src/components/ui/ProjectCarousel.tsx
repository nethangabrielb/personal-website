import {
  ChevronLeft,
  ChevronRight,
  Cpu,
  Maximize2,
} from "lucide-react";
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
          <span className="chrome-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="chrome-domain">{project.domainUrl}</span>
        </div>

        <div className="stage-mode-switch" role="tablist" aria-label={`${project.title} view mode`}>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "preview"}
            className={`mode-tab${mode === "preview" ? " is-active" : ""}`}
            onClick={() => setMode("preview")}
          >
            {mode === "preview" ? (
              <motion.span
                layoutId={`stage-mode-${project.slug}`}
                className="mode-tab-bg"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            ) : null}
            <span className="mode-tab-label">UI Preview</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={mode === "blueprint"}
            className={`mode-tab${mode === "blueprint" ? " is-active" : ""}`}
            onClick={() => setMode("blueprint")}
          >
            {mode === "blueprint" ? (
              <motion.span
                layoutId={`stage-mode-${project.slug}`}
                className="mode-tab-bg"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            ) : null}
            <span className="mode-tab-label">
              <Cpu size={12} strokeWidth={2} aria-hidden="true" />
              Blueprint
            </span>
          </button>
        </div>
      </div>

      {mode === "preview" && activeSlide ? (
        <div className="stage-preview-wrap">
          <div className="stage-viewport">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={activeSlide.src}
                src={activeSlide.src}
                srcSet={activeSlide.srcSet}
                sizes="(min-width: 1024px) 680px, 94vw"
                alt={`${project.title} - ${activeSlide.label}`}
                loading="lazy"
                width={activeSlide.width}
                height={activeSlide.height}
                className="stage-image"
                initial={{ opacity: 0.25 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.25 }}
                transition={{ duration: 0.18 }}
                onClick={() => onOpenLightbox(project, index)}
              />
            </AnimatePresence>

            <button
              type="button"
              className="stage-zoom-btn"
              onClick={() => onOpenLightbox(project, index)}
              aria-label={`Inspect ${project.title} screenshot in fullscreen`}
              title="Inspect fullscreen"
            >
              <Maximize2 size={14} strokeWidth={2} />
            </button>
          </div>

          <div className="stage-filmstrip">
            <div className="filmstrip-tabs">
              {slides.map((slide, idx) => (
                <button
                  key={slide.src}
                  type="button"
                  className={`filmstrip-pill${idx === index ? " is-active" : ""}`}
                  onClick={() => setIndex(idx)}
                >
                  <span className="filmstrip-no">0{idx + 1}</span>
                  <span>{slide.label}</span>
                </button>
              ))}
            </div>

            {count > 1 ? (
              <div className="filmstrip-arrows">
                <button
                  type="button"
                  className="filmstrip-arrow"
                  onClick={() => goTo(index - 1)}
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={14} strokeWidth={2} />
                </button>
                <button
                  type="button"
                  className="filmstrip-arrow"
                  onClick={() => goTo(index + 1)}
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={14} strokeWidth={2} />
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="stage-blueprint">
          <div className="blueprint-grid">
            {project.blueprint.map((layer, tierIdx) => (
              <div key={layer.tier} className="blueprint-tier">
                <div className="blueprint-tier-head">
                  <span className="blueprint-tier-step">
                    TIER 0{tierIdx + 1}
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
