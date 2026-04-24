import { siNextdotjs, siNodedotjs, siReact } from "simple-icons";

import { TechBadge } from "@/components/TechBadge";
import { MotionButton } from "@/components/ui/MotionButton";
import { Reveal } from "@/components/ui/Reveal";

export const Hero = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      <Reveal>
        <code className="text-xs bg-accent w-fit px-2 py-1 rounded-lg mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-accent-green rounded-full inline-block animate-pulse" />
          open for work
        </code>
      </Reveal>

      <Reveal delay={0.1} className="mt-4">
        <h1 className="text-5xl font-medium tracking-tight text-primary leading-tight">
          Hi, I'm <span className="text-accent-green">Nethan Bagasbas!</span>
        </h1>
        <h2 className="text-4xl font-medium tracking-tight text-primary leading-tight">
          I build things because I can't stop. 🙃
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Full-Stack Dev based in the Philippines{" "}
          <img
            alt="Philippines"
            className="size-4 inline -translate-y-0.1"
            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/PH.svg"
          />{" "}
          <br />I specialize in building apps with{" "}
          <TechBadge icon={siNodedotjs} label="Node.js" fill="#5FA04E" />,{" "}
          <TechBadge icon={siReact} label="React" fill="#61DAFB" />,{" "}
          <TechBadge icon={siNextdotjs} label="Next.js" fill="#000000" />.
          <br /> I genuinely enjoy the process of learning and building. <br />
          If you need a reliable developer, hook me up!
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mt-8 flex gap-3">
          <MotionButton>See my work</MotionButton>
          <MotionButton variant="secondary">Get in touch</MotionButton>
        </div>
      </Reveal>
    </section>
  );
};
