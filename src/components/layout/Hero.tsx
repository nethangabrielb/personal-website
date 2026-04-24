import { TechBadge } from "@/components/TechBadge";
import { MotionButton } from "@/components/ui/MotionButton";
import { Reveal } from "@/components/ui/Reveal";

export const Hero = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-22">
      <Reveal>
        <code className="text-xs bg-accent w-fit px-2 p-1 rounded-lg mb-8">
          open for work
        </code>
      </Reveal>

      <Reveal delay={0.1} className="mt-4">
        <h1 className="text-5xl font-medium tracking-tight text-primary leading-tight">
          Hi, I'm <span className="text-primary">Nethan Bagasbas!</span>
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
          <br />I specialize building web apps with{" "}
          <TechBadge icon="devicon-nodejs-plain colored" label="Node.js" />,{" "}
          <TechBadge icon="devicon-react-original colored" label="React" />,{" "}
          <TechBadge icon="devicon-nextjs-plain" label="Next.js" /> <br />
          I genuinely enjoy the process of learning and building. <br />
          If you need a reliable dev, let's talk!
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
