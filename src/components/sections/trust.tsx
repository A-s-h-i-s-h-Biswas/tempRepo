import { CountUp } from "@/components/animations/count-up";
import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/layout/container";
import { trustStats } from "@/data/trust";

export function Trust() {
  return (
    <section id="trust" className="border-border border-y py-16">
      <Container className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {trustStats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.08} y={16}>
            <div className="text-center sm:text-left">
              <p className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-muted-foreground mt-2 text-sm">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
