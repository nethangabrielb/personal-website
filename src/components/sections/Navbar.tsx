import { AnimatePresence, motion } from "motion/react";
import type { MouseEvent } from "react";
import { useContext, useEffect, useRef, useState } from "react";

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

  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const sectionMap: Record<string, string> = {
    About: "About",
    Skills: "Skills",
    Projects: "Projects",
    Experience: "Experience",
    Contact: "Contact",
  };
  const activeLabel = sectionMap[currentSection] || "";

  // Close the mobile menu on Escape or outside click while it is open
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const scrollTo = (selector: string) => {
    document.body.style.overflow = "";
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
    <nav className="nav-bar" ref={navRef}>
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
        ref={toggleRef}
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
