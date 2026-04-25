import { motion } from "motion/react";
import type { MouseEvent } from "react";
import { useContext } from "react";

import { SectionContext } from "@/CurrentSectionProvider";

const links = [
  { to: "#hero", label: "Hero" },
  { to: "#techstack", label: "Skills" },
  { to: "#experience", label: "Experience" },
  { to: "#projects", label: "Projects" },
  { to: "#contact", label: "Contact" },
];

export function Navbar() {
  const { currentSection, setSectionFromNav } = useContext(SectionContext)!;

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    to: string,
    label: string,
  ) => {
    event.preventDefault();
    setSectionFromNav(label);

    const section = document.querySelector<HTMLElement>(to);
    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a
          href="#"
          className="text-lg font-medium text-text-primary tracking-tight"
        >
          nethangabrielb
        </a>

        <div className="flex items-center gap-4">
          {links.map(({ to, label }) => (
            <a
              key={to}
              href={to}
              className={`relative hover:text-primary transition-colors ${currentSection === label ? "text-primary" : ""}`}
              onClick={(event) => handleNavClick(event, to, label)}
            >
              {label}
              {currentSection === label && (
                <motion.p
                  className="h-0.5 mt-2 absolute bottom-0 bg-primary w-full"
                  layoutId="underline"
                >
                  {" "}
                </motion.p>
              )}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
