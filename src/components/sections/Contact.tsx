import { useRef } from "react";

import { Reveal } from "@/components/ui/Reveal";
import { useContactForm } from "@/hooks/useContactForm";
import { useScrollSection } from "@/hooks/useScrollSection";

export const Contact = () => {
  const { form, onSubmit } = useContactForm();
  const {
    register,
    formState: { errors, isSubmitting },
  } = form;

  const ref = useRef<HTMLElement>(null);

  useScrollSection({
    sectionName: "Contact",
    ref,
  });

  return (
    <section className="contact" id="contact" ref={ref}>
      <Reveal>
        <h2 className="contact__heading">Let's work.</h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="contact__sub">
          Available for full-time and remote roles
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="contact__links">
          <a
            href="mailto:contact@nethangabrielb.dev"
            className="contact__link"
          >
            contact@nethangabrielb.dev ↗
          </a>
          <a
            href="https://linkedin.com/in/nethangabrielb"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            linkedin/nethangabrielb ↗
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="contact__form-wrapper">
          <form onSubmit={onSubmit} className="contact__form">
            <div className="form-field">
              <label htmlFor="contact-name" className="form-label">
                Name
              </label>
              <input
                id="contact-name"
                className="form-input"
                placeholder="Your name"
                {...register("name")}
              />
              {errors.name && (
                <span className="form-error">{errors.name.message}</span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="contact-email" className="form-label">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                className="form-input"
                placeholder="you@example.com"
                {...register("email")}
              />
              {errors.email && (
                <span className="form-error">{errors.email.message}</span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="contact-message" className="form-label">
                Message
              </label>
              <textarea
                id="contact-message"
                className="form-textarea"
                placeholder="Tell me about your project..."
                rows={5}
                {...register("message")}
              />
              {errors.message && (
                <span className="form-error">{errors.message.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
};
