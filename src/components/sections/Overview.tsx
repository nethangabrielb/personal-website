import { ArrowUpRight, MapPin } from "lucide-react";

import { CREDENTIALS, IDENTITY } from "@/data/portfolio";
import type { SectionId } from "@/types";

interface OverviewProps {
  onNavigate: (id: SectionId) => void;
  onOpenPalette: () => void;
}

export const Overview = ({ onNavigate, onOpenPalette }: OverviewProps) => {
  return (
    <section id="overview" className="hero-section">
      <div className="container">
        <div className="hero-bento">
          <div className="bento-card hero-primary-card">
            <div className="hero-status-row">
              <span className="hero-folio" aria-hidden="true">
                00
              </span>
              <span className="signal-dot" aria-hidden="true" />
              <span className="hero-status-role">{IDENTITY.status}</span>
              <span className="hero-status-sep" aria-hidden="true">
                ·
              </span>
              <span className="hero-status-date">{IDENTITY.statusPeriod}</span>
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
                <span>View work</span>
                <span className="btn-kbd" aria-hidden="true">
                  1
                </span>
              </button>

              <a
                href={IDENTITY.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile"
              >
                <span>Resume</span>
                <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden="true" />
              </a>
            </div>

            <button
              type="button"
              className="hero-command-hint"
              onClick={onOpenPalette}
            >
              <kbd>⌘K</kbd>
              <span>Command palette</span>
            </button>
          </div>

          <aside className="bento-card hero-portrait-card">
            <div className="portrait-stage">
              <img
                src={IDENTITY.portrait.src}
                srcSet={IDENTITY.portrait.srcSet}
                sizes="(min-width: 1040px) 410px, 92vw"
                alt={IDENTITY.portrait.alt}
                width={IDENTITY.portrait.width}
                height={IDENTITY.portrait.height}
                className="portrait-img"
              />
            </div>

            <div className="portrait-plaque">
              <div>
                <p className="plaque-name">{IDENTITY.fullName}</p>
                <p className="plaque-location">
                  <MapPin size={12} strokeWidth={1.75} aria-hidden="true" />
                  <span>{IDENTITY.location}</span>
                </p>
              </div>

              <div className="plaque-links">
                <a
                  href={IDENTITY.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="plaque-link"
                >
                  <span>GitHub</span>
                  <ArrowUpRight size={13} strokeWidth={1.75} aria-hidden="true" />
                </a>
                <a
                  href={IDENTITY.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="plaque-link"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} strokeWidth={1.75} aria-hidden="true" />
                </a>
              </div>
            </div>
          </aside>
        </div>

        <div className="credential-strip">
          {CREDENTIALS.map((cred) => (
            <div key={cred.label} className="credential-item">
              <p className="credential-label">{cred.label}</p>
              <p className="credential-value">{cred.value}</p>
              <p className="credential-sub">{cred.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
