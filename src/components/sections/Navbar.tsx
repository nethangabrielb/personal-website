import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { MouseEvent } from "react";
import { useContext, useState } from "react";

import { SectionContext } from "@/CurrentSectionProvider";

const links = [
  { to: "#home", label: "Home" },
  { to: "#techstack", label: "Skills" },
  { to: "#experience", label: "Experience" },
  { to: "#projects", label: "Projects" },
  { to: "#contact", label: "Contact" },
];

export function Navbar() {
  const { currentSection, setSectionFromNav } = useContext(SectionContext)!;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    to: string,
    label: string,
  ) => {
    event.preventDefault();
    setSectionFromNav(label);
    setMenuOpen(false);

    const section = document.querySelector<HTMLElement>(to);
    if (!section) return;
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

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-4">
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

        {/* Hamburger button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 border-t border-border bg-background/95 backdrop-blur px-4 py-4 flex flex-col gap-4"
          >
            {links.map(({ to, label }) => (
              <a
                key={to}
                href={to}
                className={`text-base transition-colors hover:text-primary ${currentSection === label ? "text-primary font-medium" : "text-muted-foreground"}`}
                onClick={(event) => handleNavClick(event, to, label)}
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
