import type { LucideIcon } from "lucide-react";

export const SKILL_CATEGORIES = [
  "Languages",
  "Frontend",
  "Backend",
  "Database",
  "Cloud & DevOps",
  "AI",
  "Testing",
  "Tools",
] as const;

export type SkillCategory = (typeof SKILL_CATEGORIES)[number];

export interface Skill {
  name: string;
  category: SkillCategory;
}

export type CategoryIconMap = Record<SkillCategory, LucideIcon>;
