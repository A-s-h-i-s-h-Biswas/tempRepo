import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/features/projects/project-card";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Projects",
  description:
    "Production projects spanning AI-powered SaaS, developer tooling, marketplaces, and healthcare software.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main className="flex-1 pt-32 pb-(--spacing-section)">
      <Container>
        <p className="text-accent-blue mb-3 font-mono text-sm tracking-wide uppercase">
          Work
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Projects
        </h1>
        <p className="text-muted-foreground mt-4 max-w-xl">
          A selection of production-grade applications — problems, solutions,
          and the architecture behind each one.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </main>
  );
}
