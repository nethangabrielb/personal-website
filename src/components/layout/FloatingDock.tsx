import { Command, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { IDENTITY, NAV_SECTIONS } from "@/data/portfolio";
import type { SectionId, ThemeMode } from "@/types";

interface FloatingDockProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
  onOpenPalette: () => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export const FloatingDock = ({
  activeSection,
  onNavigate,
  onOpenPalette,
  theme,
  onToggleTheme,
}: FloatingDockProps) => {
  const [phtTime, setPhtTime] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Manila",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date());
        setPhtTime(`${formatted} PHT`);
      } catch {
        setPhtTime("UTC+8 PHT");
      }
    };

    updateClock();
    const timer = window.setInterval(updateClock, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
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

  const handleNavigate = (id: SectionId) => {
    setMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="dock-wrapper" ref={headerRef}>
      <div className="dock-bar">
        <button
          type="button"
          className="dock-brand"
          onClick={() => handleNavigate("overview")}
          aria-label="Scroll to top"
        >
          <span className="dock-monogram" aria-hidden="true">
            {IDENTITY.monogram}
          </span>
          <span className="dock-brand-text">
            <span className="dock-brand-name">{IDENTITY.name}</span>
            {phtTime ? <span className="dock-clock">{phtTime}</span> : null}
          </span>
        </button>

        <nav className="dock-nav" aria-label="Primary navigation">
          {NAV_SECTIONS.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                type="button"
                className={`dock-nav-btn${isActive ? " is-active" : ""}`}
                onClick={() => handleNavigate(section.id)}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="dock-nav-label">{section.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="dock-actions">
          <button
            type="button"
            className="dock-cmd-btn"
            onClick={onOpenPalette}
            aria-label="Open command palette (Ctrl+K or Command+K)"
          >
            <Command size={14} strokeWidth={1.75} aria-hidden="true" />
            <span className="dock-cmd-text">Command</span>
            <kbd className="dock-kbd">⌘K</kbd>
          </button>

          <button
            type="button"
            className="dock-icon-btn"
            onClick={onToggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light theme (T)"
                : "Switch to dark theme (T)"
            }
            title="Toggle theme (T)"
          >
            {theme === "dark" ? (
              <Sun size={16} strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <Moon size={16} strokeWidth={1.75} aria-hidden="true" />
            )}
          </button>

          <button
            ref={menuButtonRef}
            type="button"
            className="dock-menu-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            title={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X size={18} strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <Menu size={18} strokeWidth={1.75} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          className="dock-mobile-panel"
          aria-label="Mobile navigation"
        >
          {NAV_SECTIONS.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                type="button"
                className={`dock-mobile-link${isActive ? " is-active" : ""}`}
                onClick={() => handleNavigate(section.id)}
                aria-current={isActive ? "true" : undefined}
              >
                {section.label}
              </button>
            );
          })}

          <button
            type="button"
            className="dock-mobile-command"
            onClick={() => {
              setMenuOpen(false);
              onOpenPalette();
            }}
          >
            <Command size={16} strokeWidth={1.75} aria-hidden="true" />
            <span>Command palette</span>
            <kbd>⌘K</kbd>
          </button>
        </nav>
      ) : null}
    </header>
  );
};
