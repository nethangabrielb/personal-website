import { AnimatePresence, motion } from "motion/react";
import type { MouseEvent } from "react";
import { useCallback, useContext, useEffect, useRef, useState } from "react";

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

  const linksContainerRef = useRef<HTMLUListElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  const sectionMap: Record<string, string> = {
    About: "About",
    Skills: "Skills",
    Projects: "Projects",
    Experience: "Experience",
    Contact: "Contact",
  };
  const activeLabel = sectionMap[currentSection] || "";

  const updateIndicator = useCallback(() => {
    const container = linksContainerRef.current;
    const activeEl = linkRefs.current.get(activeLabel);
    if (!container || !activeEl) {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
      return;
    }
    const containerRect = container.getBoundingClientRect();
    const linkRect = activeEl.getBoundingClientRect();
    setIndicator({
      left: linkRect.left - containerRect.left,
      width: linkRect.width,
      opacity: 1,
    });
  }, [activeLabel]);

  useEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

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

  const setLinkRef = (label: string) => (el: HTMLAnchorElement | null) => {
    if (el) linkRefs.current.set(label, el);
    else linkRefs.current.delete(label);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-index">NETHANGABRIELB.DEV</div>
      <ul className="nav-links" ref={linksContainerRef}>
        {links.map(({ to, label }) => (
          <li key={to}>
            <a
              href={to}
              ref={setLinkRef(label)}
              className={`nav-link-item ${activeLabel === label ? "active" : ""}`}
              onClick={(event) => handleNavClick(event, to, label)}
            >
              {label}
            </a>
          </li>
        ))}
        <span
          className="nav-indicator"
          style={{
            transform: `translateX(${indicator.left}px)`,
            width: `${indicator.width}px`,
            opacity: indicator.opacity,
          }}
        />
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
