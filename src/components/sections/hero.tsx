import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

import { GridBackground } from "@/components/animations/grid-background";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden pt-24">
      <GridBackground />

      <Container>
        <Reveal>
          <p className="text-accent-blue mb-5 font-mono text-sm tracking-wide uppercase">
            Software Engineer
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="max-w-4xl text-6xl font-semibold tracking-tight text-balance sm:text-7xl lg:text-8xl">
            {siteConfig.name}
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="text-muted-foreground mt-6 max-w-xl text-lg">
            Building scalable, high-performance applications with modern
            technologies.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton>
              <Button
                size="lg"
                className="shadow-glow"
                nativeButton={false}
                render={<Link href="/projects" />}
              >
                View Projects
                <ArrowRight />
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                variant="outline"
                size="lg"
                nativeButton={false}
                render={
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Download Resume
              </Button>
            </MagneticButton>
          </div>
        </Reveal>
      </Container>

      <a
        href="#trust"
        aria-label="Scroll to next section"
        className="text-muted-foreground hover:text-foreground absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-colors"
      >
        <ChevronDown />
      </a>
    </section>
  );
}
