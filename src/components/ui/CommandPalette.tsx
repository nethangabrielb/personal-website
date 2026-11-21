import {
  ArrowUpRight,
  Copy,
  FileText,
  Layers,
  Moon,
  Search,
  Sun,
  Terminal,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";

import { IDENTITY, NAV_SECTIONS, PROJECTS } from "@/data/portfolio";
import type { SectionId, ThemeMode } from "@/types";

interface CommandItem {
  id: string;
  group: string;
  label: string;
  hint?: string;
  icon: "copy" | "file" | "theme" | "section" | "external" | "code";
  onSelect: () => void;
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  onNavigate: (section: SectionId) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export const CommandPalette = ({
  open,
  onClose,
  onNavigate,
  theme,
  onToggleTheme,
}: CommandPaletteProps) => {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      const id = window.requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
      return () => window.cancelAnimationFrame(id);
    }
  }, [open]);

  const items = useMemo<CommandItem[]>(() => {
    const actions: CommandItem[] = [
      {
        id: "copy-email",
        group: "Quick actions",
        label: `Copy email (${IDENTITY.email})`,
        icon: "copy",
        onSelect: () => {
          navigator.clipboard?.writeText(IDENTITY.email);
          toast.success(`Copied ${IDENTITY.email}`);
          onClose();
        },
      },
      {
        id: "open-resume",
        group: "Quick actions",
        label: "Open resume (PDF)",
        hint: "bagasbas-resume.pdf",
        icon: "file",
        onSelect: () => {
          window.open(IDENTITY.resumeUrl, "_blank", "noopener,noreferrer");
          onClose();
        },
      },
      {
        id: "toggle-theme",
        group: "Quick actions",
        label:
          theme === "dark"
            ? "Switch to light theme"
            : "Switch to dark theme",
        hint: "T",
        icon: "theme",
        onSelect: () => {
          onToggleTheme();
          onClose();
        },
      },
    ];

    const navItems: CommandItem[] = NAV_SECTIONS.map((sec) => ({
      id: `nav-${sec.id}`,
      group: "Jump to section",
      label: `${sec.index} · ${sec.label}`,
      hint: sec.shortcut,
      icon: "section",
      onSelect: () => {
        onNavigate(sec.id);
        onClose();
      },
    }));

    const projectItems: CommandItem[] = PROJECTS.flatMap((proj) => {
      const entries: CommandItem[] = [];
      if (proj.links.live) {
        entries.push({
          id: `live-${proj.slug}`,
          group: "Projects",
          label: `${proj.title} · Open live app`,
          hint: proj.domainUrl,
          icon: "external",
          onSelect: () => {
            window.open(proj.links.live, "_blank", "noopener,noreferrer");
            onClose();
          },
        });
      }
      entries.push({
        id: `repo-${proj.slug}`,
        group: "Projects",
        label: `${proj.title} · View source`,
        hint: "GitHub",
        icon: "code",
        onSelect: () => {
          window.open(proj.links.github, "_blank", "noopener,noreferrer");
          onClose();
        },
      });
      return entries;
    });

    const profileItems: CommandItem[] = [
      {
        id: "github-profile",
        group: "Profiles",
        label: "GitHub · @nethangabrielb",
        icon: "external",
        onSelect: () => {
          window.open(IDENTITY.githubUrl, "_blank", "noopener,noreferrer");
          onClose();
        },
      },
      {
        id: "linkedin-profile",
        group: "Profiles",
        label: "LinkedIn · Nethan Gabriel Bagasbas",
        icon: "external",
        onSelect: () => {
          window.open(IDENTITY.linkedinUrl, "_blank", "noopener,noreferrer");
          onClose();
        },
      },
    ];

    return [...actions, ...navItems, ...projectItems, ...profileItems];
  }, [onClose, onNavigate, onToggleTheme, theme]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q) ||
        (item.hint && item.hint.toLowerCase().includes(q)),
    );
  }, [items, query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }
    if (filtered.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filtered.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (event.key === "Enter") {
      event.preventDefault();
      filtered[activeIndex]?.onSelect();
    }
  };

  const renderIcon = (kind: CommandItem["icon"]) => {
    switch (kind) {
      case "copy":
        return <Copy size={14} strokeWidth={1.75} />;
      case "file":
        return <FileText size={14} strokeWidth={1.75} />;
      case "theme":
        return theme === "dark" ? (
          <Sun size={14} strokeWidth={1.75} />
        ) : (
          <Moon size={14} strokeWidth={1.75} />
        );
      case "section":
        return <Layers size={14} strokeWidth={1.75} />;
      case "code":
        return <Terminal size={14} strokeWidth={1.75} />;
      case "external":
        return <ArrowUpRight size={14} strokeWidth={1.75} />;
    }
  };

  return (
    <AnimatePresence>
      {open ? (
        <div
          className="cmd-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
          onKeyDown={handleKeyDown}
        >
          <motion.div
            className="cmd-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
          />

          <motion.div
            className="cmd-dialog"
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="cmd-search-bar">
              <Search
                size={15}
                strokeWidth={1.75}
                className="cmd-search-icon"
                aria-hidden="true"
              />
              <input
                ref={inputRef}
                type="text"
                className="cmd-input"
                placeholder="Search commands"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Filter commands"
              />
              <button
                type="button"
                className="cmd-close-btn"
                onClick={onClose}
                aria-label="Close command palette"
              >
                <X size={14} strokeWidth={1.75} />
              </button>
            </div>

            <div className="cmd-list" role="listbox">
              {filtered.length === 0 ? (
                <p className="cmd-empty">No matching commands</p>
              ) : (
                filtered.map((item, idx) => {
                  const prevGroup = idx > 0 ? filtered[idx - 1]?.group : null;
                  const showGroup = item.group !== prevGroup;
                  const isSelected = idx === activeIndex;

                  return (
                    <div key={item.id}>
                      {showGroup ? (
                        <div className="cmd-group-heading">{item.group}</div>
                      ) : null}
                      <button
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        className={`cmd-item${isSelected ? " is-selected" : ""}`}
                        onMouseEnter={() => setActiveIndex(idx)}
                        onClick={item.onSelect}
                      >
                        <span className="cmd-item-icon" aria-hidden="true">
                          {renderIcon(item.icon)}
                        </span>
                        <span className="cmd-item-label">{item.label}</span>
                        {item.hint ? (
                          <span className="cmd-item-hint">{item.hint}</span>
                        ) : null}
                      </button>
                    </div>
                  );
                })
              )}
            </div>

            <div className="cmd-footer">
              <span>
                <kbd>↑</kbd> <kbd>↓</kbd> Navigate
              </span>
              <span>
                <kbd>↵</kbd> Select
              </span>
              <span>
                <kbd>Esc</kbd> Close
              </span>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
};

export default CommandPalette;
