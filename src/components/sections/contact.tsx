import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/layout/container";
import { CopyEmailButton } from "@/components/shared/copy-email-button";
import {
  GithubIcon,
  LeetcodeIcon,
  LinkedinIcon,
  TwitterXIcon,
} from "@/components/shared/social-icons";
import { siteConfig } from "@/config/site.config";
import { ContactForm } from "@/features/contact-form/contact-form";

export function Contact() {
  return (
    <section id="contact" className="py-(--spacing-section)">
      <Container className="max-w-4xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="text-accent-blue mb-3 font-mono text-sm tracking-wide uppercase">
                Contact
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                Let&apos;s build something
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-muted-foreground mt-4 max-w-md">
                Have a role, a project, or just a question? My inbox is open.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="border-border bg-card mt-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                Available for new opportunities
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8">
                <CopyEmailButton email={siteConfig.author.email} />
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex items-center gap-3">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="border-border text-muted-foreground hover:border-accent-blue/40 hover:text-foreground flex size-9 items-center justify-center rounded-full border transition-colors"
                >
                  <GithubIcon className="size-4" />
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="border-border text-muted-foreground hover:border-accent-blue/40 hover:text-foreground flex size-9 items-center justify-center rounded-full border transition-colors"
                >
                  <LinkedinIcon className="size-4" />
                </a>
                <a
                  href={siteConfig.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Leetcode"
                  className="border-border text-muted-foreground hover:border-accent-blue/40 hover:text-foreground flex size-9 items-center justify-center rounded-full border transition-colors"
                >
                  <LeetcodeIcon className="size-4" />
                </a>
                
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
