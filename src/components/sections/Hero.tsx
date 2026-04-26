import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
} from "@icons-pack/react-simple-icons";
import { motion } from "motion/react";
import { useRef } from "react";

import { TechBadge } from "@/components/TechBadge";
import { MotionButton } from "@/components/ui/MotionButton";
import { Reveal } from "@/components/ui/Reveal";
import { useScrollSection } from "@/hooks/useScrollSection";

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);

  useScrollSection({
    sectionName: "Home",
    ref,
  });

  return (
    <motion.section
      className="mx-auto max-w-5xl px-4 pt-14 sm:pt-16 lg:pt-24 lg:pb-20 sm:pb-16 pb-14"
      id="home"
      ref={ref}
    >
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-start md:justify-between md:gap-12 lg:gap-20">
        <div className="flex flex-col flex-1 gap-6 w-full">
          <Reveal>
            <code className="text-xs bg-accent w-fit px-2 py-1 rounded-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-green rounded-full inline-block animate-pulse" />
              open for work
            </code>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-2">
              <h1 className="font-serif text-4xl sm:text-4xl md:text-3xl lg:text-5xl font-medium tracking-tight text-primary leading-tight">
                Hi, I'm{" "}
                <span className="text-accent-green">Nethan Bagasbas!</span>
              </h1>
              <h2 className="font-serif text-2xl sm:text-2xl md:text-xl lg:text-3xl font-medium tracking-tight text-primary leading-snug">
                I build software. It usually works 🥲{" "}
                <code className="font-mono text-sm">/j</code>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col gap-3 text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              <p>
                Graduating CS student & Full-Stack Dev based in the Philippines{" "}
                <img
                  alt="Philippines"
                  className="size-4 inline -translate-y-0.5"
                  src="https://purecatamphetamine.github.io/country-flag-icons/3x2/PH.svg"
                />
              </p>
              <p>
                I specialize in building apps with{" "}
                <TechBadge icon={SiNodedotjs} label="Node.js" fill="#5FA04E" />,{" "}
                <TechBadge icon={SiReact} label="React" fill="#61DAFB" />, and{" "}
                <TechBadge icon={SiNextdotjs} label="Next.js" fill="#000000" />.
              </p>
              <p>
                I enjoy learning through building along the way. Got something
                cool in mind? Let's talk! 🍵
              </p>
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
      </div>
    </motion.section>
  );
};
