import { SiGithub } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";

import { Input } from "@/components/ui/Input";
import { MotionButton } from "@/components/ui/MotionButton";
import { Reveal } from "@/components/ui/Reveal";
import { Textarea } from "@/components/ui/Textarea";
import { useContactForm } from "@/hooks/useContactForm";

export const Contact = () => {
  const { form, onSubmit } = useContactForm();
  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = form;


  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <Reveal delay={0.2}>
        <h2 className="text-4xl font-medium tracking-tight text-primary leading-tight">
          Get in Touch
        </h2>
        <p className="text-md text-muted-foreground mt-1">
          Have a project in mind or just want to chat? Reach out!
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
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
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of something great. Feel free to reach
                out through the form or connect with me directly.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <a
                href="mailto:bagasbas.nethangabriel@gmail.com"
                className="inline-flex items-center gap-3 text-muted-foreground hover:text-accent-green transition-colors"
              >
                <Mail className="size-5 shrink-0" />
                <span className="text-sm">bagasbas.nethangabriel@gmail.com</span>
              </a>
              <a
                href="https://github.com/nethangabrielb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-muted-foreground hover:text-accent-green transition-colors"
              >
                <SiGithub className="size-5 shrink-0" />
                <span className="text-sm">github.com/nethangabrielb</span>
              </a>
              <a
                href="https://linkedin.com/in/nethangabrielb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-muted-foreground hover:text-accent-green transition-colors"
              >

                <i className="devicon-linkedin-plain text-xl"></i>

                <span className="text-sm">linkedin.com/in/nethangabrielb</span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
