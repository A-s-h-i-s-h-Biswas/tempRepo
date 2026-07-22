import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { GithubIcon } from "@/components/shared/social-icons";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group border-border bg-card hover:border-accent-blue/40 overflow-hidden rounded-2xl border transition-colors">
      <Link
        href={`/projects/${project.slug}`}
        className="block overflow-hidden"
      >
        <Image
          src={`/projects/${project.slug}/opengraph-image`}
          alt={`${project.name} cover`}
          width={1200}
          height={630}
          className="aspect-[1200/630] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="p-6">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="font-heading group-hover:text-accent-blue text-xl font-semibold transition-colors">
            {project.name}
          </h3>
        </Link>
        <p className="text-muted-foreground mt-2 text-sm">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 text-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="text-accent-blue inline-flex items-center gap-1 font-medium hover:underline"
          >
            Read case study
            <ArrowUpRight className="size-3.5" />
          </Link>
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
            >
              Live demo
              <ArrowUpRight className="size-3.5" />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="text-muted-foreground hover:text-foreground"
            >
              <GithubIcon className="size-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
