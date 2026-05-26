import { AboutStack } from "@/components/sections/AboutStack";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { BackToTop } from "@/components/ui/BackToTop";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutStack />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <BackToTop />
    </>
  );
};
