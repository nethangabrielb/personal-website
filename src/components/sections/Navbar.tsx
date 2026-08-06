import { AnimatePresence, motion } from "motion/react";
import type { MouseEvent } from "react";
import { useContext, useState } from "react";

import { SectionContext } from "@/CurrentSectionProvider";

const links = [
  { to: "#about", label: "About" },
  { to: "#projects", label: "Projects" },
  { to: "#skills", label: "Skills" },
  { to: "#experience", label: "Experience" },
  { to: "#contact", label: "Contact" },
];

export function Navbar() {
  const { currentSection, setSectionFromNav } = useContext(SectionContext)!;
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionMap: Record<string, string> = {
    About: "About",
    Skills: "Skills",
    Projects: "Projects",
    Experience: "Experience",
    Contact: "Contact",
  };
  const activeLabel = sectionMap[currentSection] || "";

  const scrollTo = (selector: string) => {
    const section = document.querySelector<HTMLElement>(selector);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    to: string,
    label: string,
  ) => {
    event.preventDefault();
    setSectionFromNav(label);
    setMenuOpen(false);
    scrollTo(to);
  };

  const handleBrandClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMenuOpen(false);
    scrollTo("#hero");
  };

  return (
    <nav className="nav-bar">
      <a href="#hero" className="nav-brand" onClick={handleBrandClick}>
        Nethan Bagasbas<span className="nav-brand-dot">.</span>
      </a>

      <ul className="nav-links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <a
              href={to}
              className={`nav-link-item ${activeLabel === label ? "active" : ""}`}
              onClick={(event) => handleNavClick(event, to, label)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="nav-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="nav-mobile-menu"
      >
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
      </button>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="nav-mobile nav-mobile--open"
            id="nav-mobile-menu"
          >
            {links.map(({ to, label }) => (
              <a
                key={to}
                href={to}
                className={`nav-link-item ${activeLabel === label ? "active" : ""}`}
                onClick={(event) => handleNavClick(event, to, label)}
              >
                {label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
