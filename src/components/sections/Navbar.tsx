import { AnimatePresence, motion } from "motion/react";
import type { MouseEvent } from "react";
import { useContext, useEffect, useState } from "react";

import { SectionContext } from "@/CurrentSectionProvider";

const links = [
  { to: "#about", label: "About" },
  { to: "#projects", label: "Projects" },
  { to: "#experience", label: "Experience" },
  { to: "#contact", label: "Contact" },
];

export function Navbar() {
  const { currentSection, setSectionFromNav } = useContext(SectionContext)!;
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Show nav after scrolling past hero
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    Projects: "Projects",
    Experience: "Experience",
    Contact: "Contact",
  };
  const activeLabel = sectionMap[currentSection] || "";

  return (
    <header className={`nav ${visible ? "nav--visible" : ""}`}>
      <nav className="nav__inner">
        <a href="#" className="nav__logo">
          NB
        </a>

        {/* Desktop links */}
        <ul className="nav__links">
          {links.map(({ to, label }) => (
            <li key={to}>
              <a
                href={to}
                className={`nav__link ${activeLabel === label ? "nav__link--active" : ""}`}
                onClick={(event) => handleNavClick(event, to, label)}
              >
                {label}
                {activeLabel === label && (
                  <motion.div
                    layoutId="nav-indicator-desktop"
                    className="nav__indicator"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="nav__toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
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
            className={`nav__mobile nav__mobile--open`}
          >
            {links.map(({ to, label }) => (
              <a
                key={to}
                href={to}
                className={`nav__link ${activeLabel === label ? "nav__link--active" : ""}`}
                onClick={(event) => handleNavClick(event, to, label)}
              >
                {label}
                {activeLabel === label && (
                  <motion.div
                    layoutId="nav-indicator-mobile"
                    className="nav__indicator"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
