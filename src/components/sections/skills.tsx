import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/layout/container";
import { categoryIcons, skills } from "@/data/skills";
import { SKILL_CATEGORIES } from "@/types/skill";

export function Skills() {
  return (
    <section id="skills" className="py-(--spacing-section)">
      <Container className="max-w-4xl">
        <Reveal>
          <p className="text-accent-blue mb-3 font-mono text-sm tracking-wide uppercase">
            Tech Stack
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Tools of the trade
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = categoryIcons[category];
            const categorySkills = skills.filter(
              (skill) => skill.category === category,
            );
            if (categorySkills.length === 0) return null;

            return (
              <Reveal key={category} delay={index * 0.05} y={16}>
                <div>
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
                    <Icon className="text-accent-blue size-4" />
                    {category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <span
                        key={skill.name}
                        className="border-border bg-card text-muted-foreground hover:border-accent-blue/50 hover:text-foreground hover:shadow-glow rounded-lg border px-3 py-1.5 text-sm transition-all duration-200 hover:-translate-y-0.5"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
