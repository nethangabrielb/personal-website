import { useEffect, useRef, useState } from "react";

type ProjectScreenshot = {
  src: string;
  width: number;
  height: number;
  srcSet?: string;
};

const AUTO_SLIDE_MS = 4000;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const ProjectCarousel = ({
  slides,
  alt,
  href,
  linkLabel,
}: {
  slides: ProjectScreenshot[];
  alt: string;
  href: string;
  linkLabel: string;
}) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;
  const reducedMotionRef = useRef(prefersReducedMotion());

  useEffect(() => {
    if (count <= 1 || paused || reducedMotionRef.current) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, AUTO_SLIDE_MS);

    return () => window.clearInterval(timer);
  }, [count, paused]);

  const goTo = (next: number) => {
    setIndex(((next % count) + count) % count);
  };

  const showControls = count > 1;

  return (
    <div
      className="project-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <a
        className="project-carousel-link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={linkLabel}
      >
        <div
          className="project-carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide) => (
            <div className="project-carousel-slide" key={slide.src}>
              <img
                src={slide.src}
                srcSet={slide.srcSet}
                sizes="(min-width: 768px) 560px, 92vw"
                alt={alt}
                loading="lazy"
                width={slide.width}
                height={slide.height}
              />
            </div>
          ))}
        </div>
      </a>

      {showControls && (
        <>
          <button
            type="button"
            className="project-carousel-arrow project-carousel-prev"
            onClick={() => goTo(index - 1)}
            aria-label="Previous screenshot"
          >
            ←
          </button>
          <button
            type="button"
            className="project-carousel-arrow project-carousel-next"
            onClick={() => goTo(index + 1)}
            aria-label="Next screenshot"
          >
            →
          </button>
          <div className="project-carousel-dots">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                className={`project-carousel-dot${i === index ? " is-active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to screenshot ${i + 1} of ${count}`}
                aria-current={i === index}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
