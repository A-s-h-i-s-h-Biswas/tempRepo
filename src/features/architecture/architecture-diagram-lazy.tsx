"use client";

import dynamic from "next/dynamic";

import type { ArchitectureNode } from "@/types/project";

const ArchitectureDiagram = dynamic(
  () =>
    import("@/features/architecture/architecture-diagram").then(
      (mod) => mod.ArchitectureDiagram,
    ),
  {
    ssr: false,
    loading: () => <div className="bg-muted h-40 animate-pulse rounded-xl" />,
  },
);

interface ArchitectureDiagramLazyProps {
  nodes: ArchitectureNode[];
}

export function ArchitectureDiagramLazy({
  nodes,
}: ArchitectureDiagramLazyProps) {
  return <ArchitectureDiagram nodes={nodes} />;
}
