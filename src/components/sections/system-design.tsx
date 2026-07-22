import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/layout/container";
import { genericArchitecture } from "@/data/architecture";
import { ArchitectureDiagramLazy } from "@/features/architecture/architecture-diagram-lazy";

export function SystemDesign() {
  return (
    <section id="system-design" className="py-(--spacing-section)">
      <Container className="max-w-4xl">
        <Reveal>
          <p className="text-accent-blue mb-3 font-mono text-sm tracking-wide uppercase">
            System Design
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            How I think about architecture
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-muted-foreground mt-4 max-w-xl">
            A typical request path through a production system I&apos;d design —
            click a node for details.
          </p>
        </Reveal>

        <div className="mt-14">
          <ArchitectureDiagramLazy nodes={genericArchitecture} />
        </div>
      </Container>
    </section>
  );
}
