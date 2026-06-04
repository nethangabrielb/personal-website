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

  const sectionMap: Record<string, string> = {
    About: "About",
    Skills: "Skills",
    Projects: "Projects",
    Experience: "Experience",
    Contact: "Contact",
  };
  const activeLabel = sectionMap[currentSection] || "";

  return (
    <nav className="nav-bar">
      <div className="nav-index">NBB.DEV</div>
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
      <div className="nav-status">
        <div className="status-dot" />
        Available for work
      </div>

      {/* Hamburger button */}
      <button
        className="nav-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="nav-mobile nav-mobile--open"
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
        )}
      </AnimatePresence>
    </nav>
  );
}
