import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/layout/container";
import { GithubIcon } from "@/components/shared/social-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, projects } from "@/data/projects";
import { ArchitectureDiagramLazy } from "@/features/architecture/architecture-diagram-lazy";
import { constructMetadata } from "@/lib/metadata";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return constructMetadata({
    title: project.name,
    description: project.tagline,
    image: `/projects/${project.slug}/opengraph-image`,
    path: `/projects/${project.slug}`,
  });
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Reveal className="border-border border-t py-10 first:border-t-0 first:pt-0">
      <h2 className="font-heading text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      <div className="text-muted-foreground [&_li]:marker:text-accent-blue mt-4 [&_li]:list-disc [&_ul]:ml-5 [&_ul]:space-y-2">
        {children}
      </div>
    </Reveal>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex-1 pt-32 pb-(--spacing-section)">
      <Container className="max-w-4xl">
        <Link
          href="/projects"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm"
        >
          <ArrowLeft className="size-3.5" />
          All projects
        </Link>

        <div className="mt-6">
          <p className="text-accent-blue mb-3 font-mono text-sm tracking-wide uppercase">
            Case Study
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {project.name}
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
            {project.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.demo && (
              <Button
                nativeButton={false}
                render={
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Live Demo
                <ArrowUpRight />
              </Button>
            )}
            {project.links.github && (
              <Button
                variant="outline"
                nativeButton={false}
                render={
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <GithubIcon className="size-4" />
                GitHub
              </Button>
            )}
          </div>
        </div>

        <Image
          src={`/projects/${project.slug}/opengraph-image`}
          alt={`${project.name} cover`}
          width={1200}
          height={630}
          priority
          className="border-border mt-10 aspect-[1200/630] w-full rounded-2xl border object-cover"
        />

        <div className="mt-4">
          <Section title="Overview">
            <p>{project.overview}</p>
          </Section>

          <Section title="Problem & Solution">
            <p>
              <span className="text-foreground font-medium">Problem — </span>
              {project.problem}
            </p>
            <p className="mt-3">
              <span className="text-foreground font-medium">Solution — </span>
              {project.solution}
            </p>
          </Section>

          <Section title="Features">
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </Section>

          <Section title="Architecture">
            <ArchitectureDiagramLazy nodes={project.architecture} />
          </Section>

          <Section title="Database Design">
            <p>{project.database}</p>
          </Section>

          <Section title="API Design">
            <p>{project.apiDesign}</p>
          </Section>

          <Section title="Authentication">
            <p>{project.authentication}</p>
          </Section>

          <Section title="Performance">
            <p>{project.performance}</p>
          </Section>

          <Section title="Challenges & Solutions">
            <div className="space-y-5">
              {project.challenges.map((item) => (
                <div key={item.challenge}>
                  <p>
                    <span className="text-foreground font-medium">
                      Challenge —{" "}
                    </span>
                    {item.challenge}
                  </p>
                  <p className="mt-1">
                    <span className="text-foreground font-medium">
                      Solution —{" "}
                    </span>
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Impact">
            <div className="bg-muted/50 grid grid-cols-3 gap-4 rounded-xl p-5">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-accent-blue text-2xl font-semibold">
                    {metric.value}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Deployment">
            <p>{project.deployment}</p>
          </Section>

          <Section title="Future Improvements">
            <ul>
              {project.futureImprovements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="Lessons Learned">
            <ul>
              {project.lessonsLearned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>
        </div>
      </Container>
    </main>
  );
}
