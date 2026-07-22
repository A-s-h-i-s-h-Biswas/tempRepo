export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

/**
 * String key, not a component reference — ArchitectureNode data flows from
 * Server Components into the client-rendered ArchitectureDiagram, and React
 * component references aren't serializable across that boundary. The
 * client-only diagram resolves the icon from this key.
 */
export type ArchitectureIconKey =
  "frontend" | "gateway" | "auth" | "cache" | "queue" | "database" | "cloud";

export interface ArchitectureNode {
  id: string;
  label: string;
  description: string;
  icon: ArchitectureIconKey;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  featured: boolean;

  // Landing card + overview
  problem: string;
  solution: string;
  overview: string;
  features: string[];
  techStack: string[];
  metrics: ProjectMetric[];

  // Case study deep-dive
  architecture: ArchitectureNode[];
  database: string;
  apiDesign: string;
  authentication: string;
  performance: string;
  challenges: ProjectChallenge[];
  deployment: string;
  futureImprovements: string[];
  lessonsLearned: string[];

  links: {
    demo?: string;
    github?: string;
  };
}
