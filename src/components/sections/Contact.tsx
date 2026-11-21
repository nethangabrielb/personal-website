import { ArrowUp, ArrowUpRight, Check, Copy, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { IDENTITY, NAV_SECTIONS, QUICK_LINKS } from "@/data/portfolio";
import { useContactForm } from "@/hooks/useContactForm";
import type { SectionId } from "@/types";

interface ContactProps {
  onNavigate: (id: SectionId) => void;
}

export const Contact = ({ onNavigate }: ContactProps) => {
  const { form, onSubmit } = useContactForm();
  const {
    register,
    formState: { errors, isSubmitting },
  } = form;

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(IDENTITY.email);
    setCopied(true);
    toast.success(`Copied ${IDENTITY.email}`);
    window.setTimeout(() => setCopied(false), 2200);
  };

  const directoryLinks = QUICK_LINKS.filter((l) => l.label !== "Email");

  return (
    <section id="contact" className="page-section contact-section">
      <div className="container">
        <div className="section-heading-bar">
          <div className="section-heading-left">
            <span className="section-index">04</span>
            <div>
              <h2 className="section-title">Contact</h2>
              <p className="section-subtitle">
                For roles, collaboration, or a question, email me directly or
                send a message.
              </p>
            </div>
          </div>
        </div>

        <div className="contact-bento">
          <div className="contact-channels">
            <button
              type="button"
              className="bento-card email-copy-card"
              onClick={handleCopyEmail}
              aria-label={`Copy email ${IDENTITY.email}`}
            >
              <div className="email-card-top">
                <span className="email-label">Email</span>
                <span
                  className={`copy-state${copied ? " is-copied" : ""}`}
                  aria-live="polite"
                >
                  {copied ? (
                    <>
                      <Check size={12} strokeWidth={1.75} aria-hidden="true" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={12} strokeWidth={1.75} aria-hidden="true" />
                      Copy
                    </>
                  )}
                </span>
              </div>
              <p className="email-address-display">{IDENTITY.email}</p>
            </button>

            <div className="channel-cards-grid">
              {directoryLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="bento-card channel-card"
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <div className="channel-card-top">
                    <span className="channel-label">{link.label}</span>
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.75}
                      className="channel-arrow"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="channel-value">{link.value}</span>
                </a>
              ))}
            </div>

            <div className="bento-card location-card">
              <div className="location-card-row">
                <MapPin size={15} strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <p className="location-primary">{IDENTITY.location}</p>
                  <p className="location-sub">
                    {IDENTITY.coordinates} · UTC+8
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bento-card form-workbench-card">
            <h3 className="workbench-form-title">Send a message</h3>
            <form className="workbench-form" onSubmit={onSubmit} noValidate>
              <div className="form-split-row">
                <div className="field-group">
                  <label className="field-label" htmlFor="contact-name">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    className="field-input"
                    placeholder="Your name"
                    autoComplete="name"
                    {...register("name")}
                  />
                  {errors.name ? (
                    <span className="field-error" role="alert">
                      {errors.name.message}
                    </span>
                  ) : null}
                </div>

                <div className="field-group">
                  <label className="field-label" htmlFor="contact-email">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    className="field-input"
                    placeholder="name@domain.com"
                    autoComplete="email"
                    spellCheck={false}
                    inputMode="email"
                    {...register("email")}
                  />
                  {errors.email ? (
                    <span className="field-error" role="alert">
                      {errors.email.message}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="field-group">
                <label className="field-label" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  className="field-textarea"
                  placeholder="Tell me about the role, system, or project"
                  autoComplete="off"
                  {...register("message")}
                />
                {errors.message ? (
                  <span className="field-error" role="alert">
                    {errors.message.message}
                  </span>
                ) : null}
              </div>

              <button
                type="submit"
                className="btn-tactile btn-tactile-primary form-submit-btn"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? "Sending message..." : "Send message"}</span>
              </button>
            </form>
          </div>
        </div>

        <footer className="site-footer">
          <div className="footer-top">
            <div className="footer-identity">
              <span className="dock-monogram" aria-hidden="true">
                {IDENTITY.monogram}
              </span>
              <div>
                <p className="footer-name">{IDENTITY.fullName}</p>
                <p className="footer-role">{IDENTITY.status}</p>
              </div>
            </div>

            <div className="footer-nav">
              {NAV_SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  type="button"
                  className="footer-nav-link"
                  onClick={() => onNavigate(sec.id)}
                >
                  {sec.label}
                </button>
              ))}
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-colophon">
              © 2026 {IDENTITY.name} · {IDENTITY.colophon}
            </p>
            <button
              type="button"
              className="footer-top-btn"
              onClick={() => onNavigate("overview")}
            >
              <ArrowUp size={14} strokeWidth={1.75} aria-hidden="true" />
              Back to top
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
};
