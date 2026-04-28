import { motion } from "motion/react";
import { useRef } from "react";

import { MotionButton } from "@/components/ui/MotionButton";
import { Reveal } from "@/components/ui/Reveal";
import { useScrollSection } from "@/hooks/useScrollSection";

const HeroPhoto = () => (
  <Reveal
    delay={0.15}
    className="shrink-0 hidden md:flex md:flex-col md:items-center md:gap-2 lg:gap-3"
  >
    <div className="relative w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-96">
      <div className="absolute inset-0 rounded-2xl bg-accent-green/20 translate-x-3 translate-y-3" />
      <img
        src="/hero-me.webp"
        fetchPriority="high"
        alt="Nethan Bagasbas"
        className="relative w-full h-full rounded-2xl object-cover object-top border-2 border-accent-green shadow-sm"
      />
    </div>
    <p className="text-center text-xs text-muted-foreground font-mono">
      yes, that's lechon. best photo i have 😂
    </p>
  </Reveal>
);

const HeroContent = () => (
  <div className="flex flex-col flex-1 gap-6 w-full">
    <Reveal>
      <code className="text-xs bg-accent w-fit px-2 py-1 rounded-lg flex items-center gap-2">
        <span className="w-2 h-2 bg-accent-green rounded-full inline-block animate-pulse" />
        open for work
      </code>
    </Reveal>

    <Reveal delay={0.1}>
      <div className="flex flex-col gap-3">
        <h1 className="font-serif text-4xl lg:text-5xl font-medium tracking-tight text-primary leading-tight">
          <span className="text-muted-foreground text-2xl lg:text-3xl block mb-1">
            Hi, I'm
          </span>
          <span className="text-accent-green">Nethan Bagasbas</span>
        </h1>
        <h2 className="font-serif text-xl lg:text-2xl font-medium tracking-tight text-muted-foreground leading-snug text-balance">
          I turn ideas into full-stack apps —{" "}
          <span className="underline decoration-[#5FA04E] decoration-2 underline-offset-4">
            Node
          </span>
          ,{" "}
          <span className="underline decoration-[#61DAFB] decoration-2 underline-offset-4">
            React
          </span>
          ,{" "}
          <span className="underline decoration-muted-foreground decoration-2 underline-offset-4">
            Next.js
          </span>
          , whatever it takes.
        </h2>
      </div>
    </Reveal>

    <Reveal delay={0.2}>
      <div className="flex flex-col text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
        <p>
          Graduating CS student & Full-Stack Dev based in the Philippines{" "}
          <img
            alt="Philippines"
            className="size-4 inline -translate-y-0.5"
            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/PH.svg"
          />
        </p>
        <p>Got something in mind? Let's talk. 🍵</p>
      </div>
    </Reveal>

    <Reveal delay={0.3}>
      <div className="flex flex-wrap gap-3">
        <MotionButton>
          <a href="#techstack">See my work</a>
        </MotionButton>
        <MotionButton variant="secondary">
          <a href="#contact">Get in touch</a>
        </MotionButton>
      </div>
    </Reveal>
  </div>
);

// ─── Main component ───────────────────────────────────────────────────────────

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);

  useScrollSection({ sectionName: "Home", ref });

  return (
    <motion.section
      id="home"
      ref={ref}
      className="mx-auto max-w-5xl px-4 pt-14 pb-14 sm:pt-16 sm:pb-16 lg:pt-24 lg:pb-20"
    >
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-start md:justify-between md:gap-12 lg:gap-20">
        <HeroContent />
        <HeroPhoto />
      </div>
    </motion.section>
  );
};
