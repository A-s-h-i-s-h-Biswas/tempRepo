import { ImageResponse } from "next/og";

import { projects } from "@/data/projects";
import { CoverTemplate } from "@/lib/cover-template";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return new ImageResponse(
    <CoverTemplate
      kicker="Case Study"
      name={project?.name ?? "Project"}
      tagline={project?.tagline ?? ""}
    />,
    size,
  );
}
