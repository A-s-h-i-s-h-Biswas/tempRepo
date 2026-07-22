import {
  Bot,
  Braces,
  Cloud,
  Database,
  FlaskConical,
  Layers,
  Server,
  Wrench,
} from "lucide-react";

import type { CategoryIconMap, Skill } from "@/types/skill";

export const categoryIcons: CategoryIconMap = {
  Languages: Braces,
  Frontend: Layers,
  Backend: Server,
  Database: Database,
  "Cloud & DevOps": Cloud,
  AI: Bot,
  Testing: FlaskConical,
  Tools: Wrench,
};

export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "SQL", category: "Languages" },

  // Frontend
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Redux", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: "Microservices", category: "Backend" },

  // Database
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Prisma", category: "Database" },

  // Cloud & DevOps
  { name: "AWS", category: "Cloud & DevOps" },
  { name: "Docker", category: "Cloud & DevOps" },
  { name: "GitHub Actions", category: "Cloud & DevOps" },
  { name: "Vercel", category: "Cloud & DevOps" },
  { name: "Nginx", category: "Cloud & DevOps" },

  // AI
  { name: "LLM Integration", category: "AI" },
  { name: "Prompt Engineering", category: "AI" },
  { name: "RAG Pipelines", category: "AI" },
  { name: "OpenAI / Anthropic APIs", category: "AI" },

  // Testing
  { name: "Jest", category: "Testing" },
  { name: "Playwright", category: "Testing" },
  { name: "React Testing Library", category: "Testing" },

  // Tools
  { name: "Git", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "Linux", category: "Tools" },
];
