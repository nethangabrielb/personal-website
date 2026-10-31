import { Command, Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

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

  return (
    <header className="dock-wrapper">
      <div className="dock-bar">
        <button
          type="button"
          className="dock-brand"
          onClick={() => onNavigate("overview")}
          aria-label="Scroll to top"
        >
          <span className="dock-monogram">{IDENTITY.monogram}</span>
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
                onClick={() => onNavigate(section.id)}
                aria-current={isActive ? "true" : undefined}
              >
                {isActive ? (
                  <motion.span
                    layoutId="dock-active-pill"
                    className="dock-active-pill"
                    transition={{ type: "spring", stiffness: 440, damping: 36 }}
                  />
                ) : null}
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
            <Command size={13} strokeWidth={2} aria-hidden="true" />
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
              <Sun size={15} strokeWidth={1.9} aria-hidden="true" />
            ) : (
              <Moon size={15} strokeWidth={1.9} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
