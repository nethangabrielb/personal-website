import { MotionButton } from "@/components/ui/MotionButton";
import { Reveal } from "@/components/ui/Reveal";

export function HomePage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24">
      <Reveal>
        <h1 className="text-5xl font-bold tracking-tight">
          Hello, I'm <span className="text-accent">YourName</span>
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          A short tagline about who you are and what you do goes here.
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="mt-8 flex gap-3">
          <MotionButton>View Projects</MotionButton>
          <MotionButton variant="secondary">Contact Me</MotionButton>
        </div>
      </Reveal>
    </section>
  );
}
