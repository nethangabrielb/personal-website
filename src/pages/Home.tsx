import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";

import { FloatingDock } from "@/components/layout/FloatingDock";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Overview } from "@/components/sections/Overview";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { NAV_SECTIONS } from "@/data/portfolio";
import type { SectionId, ThemeMode } from "@/types";

const CommandPalette = lazy(() => import("@/components/ui/CommandPalette"));

const SHORTCUT_MAP: Record<string, SectionId> = {
  "0": "overview",
  "1": "work",
  "2": "experience",
  "3": "stack",
  "4": "contact",
};

export const HomePage = () => {
  const [activeSection, setActiveSection] = useState<SectionId>("overview");
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const scrollLockRef = useRef<number>(0);

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    if (current === "light" || current === "dark") {
      setTheme(current);
      const metaTheme = document.querySelector('meta[name="theme-color"]');
      if (metaTheme) {
        metaTheme.setAttribute(
          "content",
          current === "light" ? "#f5f4f0" : "#0b0b0d",
        );
      }
    }
  }, []);

  const applyTheme = useCallback((next: ThemeMode) => {
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("nb-theme", next);
    } catch {
      // ignore storage errors
    }
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", next === "light" ? "#f5f4f0" : "#0b0b0d");
    }
  }, []);

  const toggleTheme = useCallback(() => {
    applyTheme(theme === "dark" ? "light" : "dark");
  }, [applyTheme, theme]);

  const navigateTo = useCallback((id: SectionId) => {
    setActiveSection(id);
    scrollLockRef.current = Date.now() + 750;
    if (id === "overview") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    const elements = NAV_SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < scrollLockRef.current) return;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
            break;
          }
        }
      },
      {
        rootMargin: "-22% 0px -62% 0px",
        threshold: 0,
      },
    );

    for (const el of elements) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((prev) => !prev);
        return;
      }

      if (paletteOpen || event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (event.key.toLowerCase() === "t") {
        event.preventDefault();
        toggleTheme();
        return;
      }

      const sectionTarget = SHORTCUT_MAP[event.key];
      if (sectionTarget) {
        event.preventDefault();
        navigateTo(sectionTarget);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navigateTo, paletteOpen, toggleTheme]);

  return (
    <div className="workbench-app">
      <div className="ambient-stage" aria-hidden="true" />

      <FloatingDock
        activeSection={activeSection}
        onNavigate={navigateTo}
        onOpenPalette={() => setPaletteOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main id="workspace">
        <Overview
          onNavigate={navigateTo}
          onOpenPalette={() => setPaletteOpen(true)}
        />
        <Projects />
        <Experience />
        <Skills />
        <Contact onNavigate={navigateTo} />
      </main>

      {paletteOpen ? (
        <Suspense fallback={null}>
          <CommandPalette
            open={paletteOpen}
            onClose={() => setPaletteOpen(false)}
            onNavigate={navigateTo}
            theme={theme}
            onToggleTheme={toggleTheme}
          />
        </Suspense>
      ) : null}
    </div>
  );
};
