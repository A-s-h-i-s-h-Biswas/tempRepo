import { Award, ExternalLink } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/layout/container";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="py-(--spacing-section)">
      <Container className="max-w-4xl">
        <Reveal>
          <p className="text-accent-blue mb-3 font-mono text-sm tracking-wide uppercase">
            Certifications
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Credentials
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 0.06} y={16}>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-border bg-card hover:border-accent-blue/40 flex h-full items-start gap-4 rounded-2xl border p-6 transition-colors"
              >
                <span className="bg-accent-blue/10 text-accent-blue flex size-10 shrink-0 items-center justify-center rounded-xl">
                  <Award className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading group-hover:text-accent-blue font-semibold transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
                {cert.credentialUrl && (
                  <ExternalLink className="text-muted-foreground group-hover:text-accent-blue size-4 shrink-0 transition-colors" />
                )}
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
