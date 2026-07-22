import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/layout/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";

function formatDuration(start: string, end: string | null) {
  const format = (value: string) => {
    const [year, month] = value.split("-").map(Number);
    return new Date(year!, (month ?? 1) - 1).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };
  return `${format(start)} — ${end ? format(end) : "Present"}`;
}

export function Experience() {
  return (
    <section id="experience" className="py-(--spacing-section)">
      <Container className="max-w-4xl">
        <Reveal>
          <p className="text-accent-blue mb-3 font-mono text-sm tracking-wide uppercase">
            Experience
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Where I&apos;ve worked
          </h2>
        </Reveal>

        <div className="mt-14">
          <Accordion
            defaultValue={experiences[0] ? [experiences[0].id] : []}
            className="gap-4"
          >
            {experiences.map((experience, index) => (
              <Reveal key={experience.id} delay={index * 0.08}>
                <AccordionItem
                  value={experience.id}
                  className="border-border bg-card rounded-2xl border px-6 py-1 not-last:border-b-0"
                >
                  <AccordionTrigger className="py-5 hover:no-underline">
                    <div className="flex flex-col gap-1 text-left">
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        <span className="font-heading text-lg font-semibold">
                          {experience.role}
                        </span>
                        <span className="text-muted-foreground">
                          @ {experience.company}
                        </span>
                      </div>
                      <span className="text-muted-foreground font-mono text-xs">
                        {formatDuration(
                          experience.startDate,
                          experience.endDate,
                        )}
                        {" · "}
                        {experience.location}
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent>
                    <p className="text-muted-foreground">
                      {experience.summary}
                    </p>

                    <div className="bg-muted/50 mt-4 grid grid-cols-3 gap-4 rounded-xl p-4">
                      {experience.metrics.map((metric) => (
                        <div key={metric.label}>
                          <p className="text-accent-blue text-xl font-semibold">
                            {metric.value}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <div>
                        <h4 className="mb-2 text-xs font-semibold tracking-wide uppercase">
                          Responsibilities
                        </h4>
                        <ul className="text-muted-foreground space-y-1.5">
                          {experience.responsibilities.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 text-xs font-semibold tracking-wide uppercase">
                          Achievements
                        </h4>
                        <ul className="text-muted-foreground space-y-1.5">
                          {experience.achievements.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
