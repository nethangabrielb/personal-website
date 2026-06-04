import { useRef } from "react";

import { SectionRule } from "@/components/ui/SectionRule";
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
        <SectionRule number="06" title="Contact" date="LET'S BUILD SOMETHING" />
        <div className="contact-bg-text">HIRE ME</div>
        <div className="contact-layout">
          <div className="contact-left">
            <h2 className="contact-heading">
              LET'S<br />
              <span className="line2">WORK</span><br />
              TOGETHER
            </h2>
            <p className="contact-sub">
              Looking for a junior full-stack developer who ships, reads errors carefully,
              and understands what they've built.
            </p>
            <div className="contact-links">
              <a href="mailto:contact@nethangabrielb.dev" className="contact-link">
                <span className="contact-link-label">contact@nethangabrielb.dev</span>
                <span className="contact-link-arrow">→</span>
              </a>
              <a href="https://github.com/nethangabrielb" className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-link-label">github.com/nethangabrielb</span>
                <span className="contact-link-arrow">→</span>
              </a>
              <a href="https://linkedin.com/in/nethangabrielb" className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-link-label">linkedin.com/in/nethangabrielb</span>
                <span className="contact-link-arrow">→</span>
              </a>
              <a href="https://nethangabrielb.dev" className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-link-label">nethangabrielb.dev</span>
                <span className="contact-link-arrow">→</span>
              </a>
            </div>
          </div>

          <div className="contact-right">
            <form onSubmit={onSubmit}>
              <div className="form-row">
                <label className="form-label">Name</label>
                <input type="text" className="form-input" placeholder="Your name" {...register("name")} />
                {errors.name && <span className="form-error">{errors.name.message}</span>}
              </div>
              <div className="form-row">
                <label className="form-label">Email</label>
                <input type="email" className="form-input" placeholder="your@email.com" {...register("email")} />
                {errors.email && <span className="form-error">{errors.email.message}</span>}
              </div>
              <div className="form-row">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" placeholder="What do you need built?" {...register("message")} />
                {errors.message && <span className="form-error">{errors.message.message}</span>}
              </div>
              <button type="submit" className="form-submit" disabled={isSubmitting}>
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
