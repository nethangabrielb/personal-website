import { Code, Zap } from "lucide-react";
import { useRef } from "react";

import { Reveal } from "@/components/ui/Reveal";
import { useScrollSection } from "@/hooks/useScrollSection";

export const AboutStack = () => {
  const ref = useRef<HTMLElement>(null);

  useScrollSection({
    sectionName: "About",
    ref,
  });

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about__layout">
        {/* Left Column: Bio & Facts */}
        <div className="about__left">
          {/* Section number */}
          <Reveal>
            <p className="section__number">00</p>
          </Reveal>

          {/* Heading */}
          <Reveal delay={0.05}>
            <h2 className="section__heading">ABOUT</h2>
          </Reveal>

          {/* Bio paragraphs */}
          <div className="about__bios">
            <Reveal delay={0.15}>
              <p className="about__bio">
                I'm a graduating Computer Science student at USTP who got into
                software development through self-directed learning and countless
                hours building things from scratch. What started with responsive
                web interfaces in The Odin Project eventually evolved into building
                and deploying full-stack applications focused on performance,
                usability, and clean system design.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="about__bio">
                I enjoy working across the entire stack — from designing database
                schemas and backend systems to crafting responsive, intuitive user
                experiences. Recently, I've been sharpening my problem-solving and
                DSA fundamentals through LeetCode while deepening my understanding
                of scalable system design and modern full-stack architecture. I'm
                currently looking for junior and remote full-stack opportunities
                where I can continue growing while contributing meaningful work.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Right Column: Interactive Terminal Card & Principles */}
        <div className="about__right">
          {/* Terminal Mockup */}
          <Reveal delay={0.2}>
            <div className="about__terminal">
              <div className="about__terminal-header">
                <div className="about__terminal-dots">
                  <span className="about__terminal-dot about__terminal-dot--red"></span>
                  <span className="about__terminal-dot about__terminal-dot--yellow"></span>
                  <span className="about__terminal-dot about__terminal-dot--green"></span>
                </div>
                <span className="about__terminal-title">developer.json</span>
              </div>
              <div className="about__terminal-body">
                <pre>
                  <code>
                    {`{
  "name": "Nethan Gabriel Bagasbas",
  "role": "Full-Stack Web Developer",
  "origin": "Butuan City, PH",
  "favorites": {
    "editor": "VS Code",
    "shell": "zsh / bash",
    "stack": "React / Next.js / TypeScript"
  },
  "currently_reading": [
    "Kafka on the Shore (Haruki Murakami)",
    "System Design (Distributed Systems)"
  ]
}`}
                  </code>
                </pre>
              </div>
            </div>
          </Reveal>

          {/* Core Principles */}
          <div className="about__principles">
            <Reveal delay={0.3}>
              <div className="about__principle">
                <div className="about__principle-icon-wrapper">
                  <Zap className="about__principle-icon" />
                </div>
                <div className="about__principle-info">
                  <span className="about__principle-title">Performance First</span>
                  <p className="about__principle-desc">
                    Speed is a feature. Optimized database queries, lightweight page weights, and 60fps animations are non-negotiable.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.38}>
              <div className="about__principle">
                <div className="about__principle-icon-wrapper">
                  <Code className="about__principle-icon" />
                </div>
                <div className="about__principle-info">
                  <span className="about__principle-title">Scalable DX</span>
                  <p className="about__principle-desc">
                    Clean, self-documenting code. Standardized BEM layouts, strictly typed API contracts (TypeScript + Zod), and dockerized environments.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
