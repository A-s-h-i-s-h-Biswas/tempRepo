import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/layout/container";
import { JourneyTimeline } from "@/features/timeline/journey-timeline";

export function About() {
  return (
    <section id="about" className="py-(--spacing-section)">
      <Container className="max-w-4xl">
        <Reveal>
          <p className="text-accent-blue mb-3 font-mono text-sm tracking-wide uppercase">
            About
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            My programming journey
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-muted-foreground mt-4 max-w-xl">
            From core Java fundamentals to shipping AI-powered, production-scale
            systems — here&apos;s how I got here.
          </p>
        </Reveal>

        <div className="mt-14">
          <JourneyTimeline />
        </div>
      </Container>
    </section>
  );
}
