import { useRef } from "react";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { useContactForm } from "@/hooks/useContactForm";
import { useScrollSection } from "@/hooks/useScrollSection";

export const Contact = () => {
  const { form, onSubmit } = useContactForm();
  const {
    register,
    formState: { errors, isSubmitting },
  } = form;

  const ref = useRef<HTMLElement>(null);
  useScrollSection({ sectionName: "Contact", ref });

  return (
    <section id="contact" ref={ref}>
      <div className="outer">
        <SectionHeader number="06" title="Contact" caption="Let's build something" />
        <div className="contact-layout">
          <div className="contact-left">
            <p className="contact-heading">
              Let's build something <em>together.</em>
            </p>
            <p className="contact-sub">
              I'm a junior full-stack developer who ships, reads errors carefully,
              and understands what I've built. Let's build something together.
            </p>
            <div className="contact-links">
              <a href="mailto:contact@nethangabrielb.dev" className="contact-link">
                <span className="contact-link-label">contact@nethangabrielb.dev</span>
                <span className="contact-link-arrow" aria-hidden="true">→</span>
              </a>
              <a href="https://github.com/nethangabrielb" className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-link-label">github.com/nethangabrielb</span>
                <span className="contact-link-arrow" aria-hidden="true">→</span>
              </a>
              <a href="https://linkedin.com/in/nethangabrielb" className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-link-label">linkedin.com/in/nethangabrielb</span>
                <span className="contact-link-arrow" aria-hidden="true">→</span>
              </a>
              <a href="/bagasbas-resume.pdf" className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-link-label">Download resume (PDF)</span>
                <span className="contact-link-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="contact-right">
            <h3 className="contact-form-title">Send a message</h3>
            <form onSubmit={onSubmit}>
              <div className="form-row">
                <label className="form-label" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  className="form-input"
                  placeholder="Your name"
                  autoComplete="name"
                  {...register("name")}
                />
                {errors.name ? (
                  <span className="form-error" role="alert">{errors.name.message}</span>
                ) : null}
              </div>
              <div className="form-row">
                <label className="form-label" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  className="form-input"
                  placeholder="your@email.com"
                  autoComplete="email"
                  spellCheck={false}
                  inputMode="email"
                  {...register("email")}
                />
                {errors.email ? (
                  <span className="form-error" role="alert">{errors.email.message}</span>
                ) : null}
              </div>
              <div className="form-row">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  placeholder="What do you need built?"
                  autoComplete="off"
                  {...register("message")}
                />
                {errors.message ? (
                  <span className="form-error" role="alert">{errors.message.message}</span>
                ) : null}
              </div>
              <button type="submit" className="form-submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending…" : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
