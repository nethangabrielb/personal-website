import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
    </>
  );
};
