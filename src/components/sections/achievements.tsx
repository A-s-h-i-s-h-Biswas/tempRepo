import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/layout/container";
import { achievements } from "@/data/achievements";

export function Achievements() {
  return (
    <section id="achievements" className="py-(--spacing-section)">
      <Container>
        <Reveal>
          <p className="text-accent-blue mb-3 font-mono text-sm tracking-wide uppercase">
            Achievements
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Milestones along the way
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Reveal key={achievement.title} delay={index * 0.06} y={16}>
                <div className="glow-on-hover border-border bg-card hover:border-accent-blue/40 h-full rounded-2xl border p-6 transition-colors">
                  <span className="bg-accent-blue/10 text-accent-blue flex size-10 items-center justify-center rounded-xl">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-heading mt-4 text-lg font-semibold">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    {achievement.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
