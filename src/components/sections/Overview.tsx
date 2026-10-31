import { ArrowUpRight, Check, Copy, FileText, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

import { CREDENTIALS, IDENTITY } from "@/data/portfolio";
import type { SectionId } from "@/types";

interface OverviewProps {
  onNavigate: (id: SectionId) => void;
  onOpenPalette: () => void;
}

export const Overview = ({ onNavigate, onOpenPalette }: OverviewProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(IDENTITY.email);
    setCopied(true);
    toast.success(`Copied ${IDENTITY.email}`);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="overview" className="hero-section">
      <div className="container">
        <div className="hero-bento">
          <motion.div
            className="bento-card hero-primary-card"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-status-row">
              <div className="status-pill">
                <span className="signal-dot" aria-hidden="true" />
                <span className="status-pill-role">{IDENTITY.status}</span>
                <span className="status-pill-sep" aria-hidden="true">
                  ·
                </span>
                <span className="status-pill-date">{IDENTITY.statusPeriod}</span>
              </div>
            </div>

            <h1 className="hero-headline">
              {IDENTITY.headlineLead}
              <em>{IDENTITY.headlineEmphasis}</em>
              {IDENTITY.headlineTail}
            </h1>

            <p className="hero-bio">{IDENTITY.bio}</p>

            <div className="hero-cta-row">
              <button
                type="button"
                className="btn-tactile btn-tactile-primary"
                onClick={() => onNavigate("work")}
              >
                <span>Explore Selected Work</span>
                <span className="btn-kbd" aria-hidden="true">
                  1
                </span>
              </button>

              <button
                type="button"
                className="btn-tactile"
                onClick={handleCopyEmail}
              >
                {copied ? (
                  <Check size={14} strokeWidth={2.2} aria-hidden="true" />
                ) : (
                  <Copy size={14} strokeWidth={1.9} aria-hidden="true" />
                )}
                <span>{copied ? "Email Copied" : IDENTITY.email}</span>
              </button>

              <a
                href={IDENTITY.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile"
              >
                <FileText size={14} strokeWidth={1.9} aria-hidden="true" />
                <span>Resume</span>
                <ArrowUpRight size={13} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>

            <div className="hero-shortcut-bar">
              <button
                type="button"
                className="shortcut-trigger"
                onClick={onOpenPalette}
              >
                <span>Press</span>
                <kbd>⌘K</kbd>
                <span>to open command palette</span>
              </button>
              <span className="shortcut-divider" aria-hidden="true">
                ·
              </span>
              <span className="shortcut-hint">
                Keys <kbd>0</kbd>-<kbd>4</kbd> navigate sections · <kbd>T</kbd>{" "}
                switches theme
              </span>
            </div>
          </motion.div>

          <motion.aside
            className="bento-card hero-portrait-card"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="portrait-stage">
              <span className="reticle reticle-tl" aria-hidden="true">
                +
              </span>
              <span className="reticle reticle-tr" aria-hidden="true">
                +
              </span>
              <img
                src={IDENTITY.portrait.src}
                srcSet={IDENTITY.portrait.srcSet}
                sizes="(min-width: 1024px) 420px, 92vw"
                alt={IDENTITY.portrait.alt}
                width={IDENTITY.portrait.width}
                height={IDENTITY.portrait.height}
                className="portrait-img"
              />
              <div className="portrait-coords">{IDENTITY.coordinates}</div>
            </div>

            <div className="portrait-plaque">
              <div className="plaque-top">
                <div>
                  <p className="plaque-name">{IDENTITY.fullName}</p>
                  <p className="plaque-location">
                    <MapPin size={12} strokeWidth={2} aria-hidden="true" />
                    <span>{IDENTITY.location}</span>
                  </p>
                </div>
              </div>

              <div className="plaque-links">
                <a
                  href={IDENTITY.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="plaque-link"
                >
                  <span>GitHub</span>
                  <ArrowUpRight size={13} strokeWidth={2} aria-hidden="true" />
                </a>
                <a
                  href={IDENTITY.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="plaque-link"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} strokeWidth={2} aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.div
          className="telemetry-strip"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          {CREDENTIALS.map((cred) => (
            <div key={cred.index} className="bento-card telemetry-card">
              <div className="telemetry-top">
                <span className="telemetry-index">{cred.index}</span>
                <span className="telemetry-label">{cred.label}</span>
              </div>
              <p className="telemetry-value">{cred.value}</p>
              <p className="telemetry-sub">{cred.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
