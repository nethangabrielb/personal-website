import { MotionButton } from "@/components/ui/MotionButton";
import { Reveal } from "@/components/ui/Reveal";

export const Hero = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24">
      <Reveal>
        <h1 className="text-5xl font-bold tracking-tight text-primary">
          Hi! I'm <span className="text-primary">Nethan 🙋‍♂️</span>
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          I'm a Full-Stack Dev and a graduating (June 2026) Computer Science
          student. Appreciate you for visiting my personal website!
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="mt-8 flex gap-3">
          <MotionButton>About me</MotionButton>
          <MotionButton variant="secondary">Contact Me</MotionButton>
        </div>
      </Reveal>
    </section>
  );
};
