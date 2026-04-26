import { SiGithub } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import { useRef } from "react";

import { Input } from "@/components/ui/Input";
import { MotionButton } from "@/components/ui/MotionButton";
import { Reveal } from "@/components/ui/Reveal";
import { Textarea } from "@/components/ui/Textarea";
import { useContactForm } from "@/hooks/useContactForm";
import { useScrollSection } from "@/hooks/useScrollSection";

export const Contact = () => {
  const { form, onSubmit } = useContactForm();
  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = form;

  const ref = useRef<HTMLElement>(null);

  useScrollSection({
    sectionName: "Contact",
    ref,
  });

  return (
    <section
      className="mx-auto max-w-5xl px-4 py-14 sm:py-16 lg:py-20"
      id="contact"
      ref={ref}
    >
      <Reveal delay={0.2}>
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-primary leading-tight">
          Get in Touch
        </h2>
        <p className="mt-1 max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground">
          Have a project in mind or just want to chat? Reach out!
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mt-7 grid grid-cols-1 gap-8 sm:mt-8 md:grid-cols-2 md:gap-10">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-4 border border-border/60 rounded-lg p-4 transition-all duration-300 hover:shadow-md"
          >
            <Input
              label="Name"
              placeholder="Your name"
              {...register("name")}
              error={errors.name?.message}
            />
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              error={errors.email?.message}
            />
            <Textarea
              label="Message"
              placeholder="Tell me about your project..."
              rows={5}
              {...register("message")}
              error={errors.message?.message}
            />

            <MotionButton
              type="submit"
              variant="secondary"
              disabled={isSubmitting}
              loading={isSubmitting}
              className="w-full mt-2"
            >
              {isSubmitSuccessful ? "Message sent!" : "Send message"}
            </MotionButton>
          </form>

          {/* Info */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="max-w-prose text-sm sm:text-base text-muted-foreground leading-relaxed">
                Look, I know reaching out to someone you've never met can feel a
                little awkward. But I promise I'm pretty easy to talk to. If you
                have a project you want built, an idea you're not sure about
                yet, or even just a question, drop me a message. I genuinely
                enjoy hearing what people are working on, and I'll get back to
                you as soon as I can.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4">
              <a
                href="mailto:contact@nethangabrielb.dev"
                className="inline-flex items-center gap-3 text-muted-foreground hover:text-accent-green transition-colors"
              >
                <Mail className="size-5 shrink-0" />
                <span className="text-xs sm:text-sm">
                  contact@nethangabrielb.dev
                </span>
              </a>
              <a
                href="https://github.com/nethangabrielb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-muted-foreground hover:text-accent-green transition-colors"
              >
                <SiGithub className="size-5 shrink-0" />
                <span className="text-xs sm:text-sm">
                  github.com/nethangabrielb
                </span>
              </a>
              <a
                href="https://linkedin.com/in/nethangabrielb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-muted-foreground hover:text-accent-green transition-colors"
              >
                <svg
                  viewBox="0 0 128 128"
                  className="size-5 shrink-0"
                  fill="currentColor"
                >
                  <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path>
                </svg>

                <span className="text-xs sm:text-sm">
                  linkedin.com/in/nethangabrielb
                </span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
