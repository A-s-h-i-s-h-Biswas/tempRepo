import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/layout/container";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/features/projects/project-card";

export function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-(--spacing-section)">
      <Container>
        <Reveal>
          <p className="text-accent-blue mb-3 font-mono text-sm tracking-wide uppercase">
            Featured Work
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Selected projects
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
