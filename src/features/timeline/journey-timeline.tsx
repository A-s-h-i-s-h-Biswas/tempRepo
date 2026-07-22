import { Reveal } from "@/components/animations/reveal";
import { journeyMilestones } from "@/data/journey";

export function JourneyTimeline() {
  return (
    <ol className="relative">
      <div
        aria-hidden
        className="from-accent-blue via-border absolute top-2 bottom-2 left-5 w-px bg-gradient-to-b to-transparent"
      />

      {journeyMilestones.map((milestone, index) => {
        const Icon = milestone.icon;
        return (
          <li key={milestone.year} className="relative pb-10 pl-16 last:pb-0">
            <Reveal delay={index * 0.06} y={16} className="block">
              <span className="border-border bg-card text-accent-blue absolute top-0 left-0 flex size-10 items-center justify-center rounded-full border shadow-sm">
                <Icon className="size-4.5" />
              </span>

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-accent-blue font-mono text-sm">
                  {milestone.year}
                </span>
                <h3 className="font-heading text-lg font-semibold">
                  {milestone.title}
                </h3>
              </div>
              <p className="text-muted-foreground mt-1.5 max-w-2xl text-sm">
                {milestone.description}
              </p>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
