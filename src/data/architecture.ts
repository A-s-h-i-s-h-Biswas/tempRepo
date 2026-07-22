import type { ArchitectureNode } from "@/types/project";

export const genericArchitecture: ArchitectureNode[] = [
  {
    id: "frontend",
    label: "Frontend",
    description:
      "Server-rendered client — the static shell loads instantly while dynamic content streams in.",
    icon: "frontend",
  },
  {
    id: "gateway",
    label: "API Gateway",
    description:
      "Single entry point for routing, rate limiting, and request validation before anything hits internal services.",
    icon: "gateway",
  },
  {
    id: "auth",
    label: "Authentication",
    description:
      "Token-based auth verified at the edge of the system, before a request ever reaches business logic.",
    icon: "auth",
  },
  {
    id: "cache",
    label: "Redis",
    description:
      "Hot-path caching for session data and expensive reads, keeping the database off the critical path.",
    icon: "cache",
  },
  {
    id: "queue",
    label: "Queue",
    description:
      "Background jobs and async side effects run off the request path, so user-facing latency stays predictable.",
    icon: "queue",
  },
  {
    id: "database",
    label: "Database",
    description:
      "The source of truth — normalized where consistency matters, denormalized read models where speed does.",
    icon: "database",
  },
  {
    id: "cloud",
    label: "Cloud",
    description:
      "Containerized services behind a load balancer, scaled independently based on where the actual load lands.",
    icon: "cloud",
  },
];
