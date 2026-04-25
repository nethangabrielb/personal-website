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
    sectionName: "Hero",
    ref,
  });

  return (
    <motion.section
      className="mx-auto max-w-5xl px-4 py-16 sm:py-20 lg:py-24"
      id="hero"
      ref={ref}
    >
      <Reveal>
        <code className="text-xs bg-accent w-fit px-2 py-1 rounded-lg mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-accent-green rounded-full inline-block animate-pulse" />
          open for work
        </code>
      </Reveal>

      <Reveal delay={0.1} className="mt-3 sm:mt-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-primary leading-tight">
          Hi, I'm <span className="text-accent-green">Nethan Bagasbas!</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-primary leading-tight mt-2">
          I build software. It usually works 🥲{" "}
          <code className="text-sm">/j</code>
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Graduating CS student & Full-Stack Dev based in the Philippines{" "}
          <img
            alt="Philippines"
            className="size-4 inline -translate-y-0.1"
            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/PH.svg"
          />{" "}
          <br />I specialize in building apps with{" "}
          <TechBadge icon={SiNodedotjs} label="Node.js" fill="#5FA04E" />,{" "}
          <TechBadge icon={SiReact} label="React" fill="#61DAFB" />,{" "}
          <TechBadge icon={SiNextdotjs} label="Next.js" fill="#000000" />.
          <br /> I enjoy learning through building along the way. <br />
          Got something cool in mind? Let’s talk! 🍵
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
          <MotionButton>
            <a href="#techstack">See my work</a>
          </MotionButton>
          <MotionButton variant="secondary">
            <a href="#contact">Get in touch</a>
          </MotionButton>
        </div>
      </Reveal>
    </motion.section>
  );
};
