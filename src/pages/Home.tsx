import { AboutStack } from "@/components/sections/AboutStack";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutStack />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
};
