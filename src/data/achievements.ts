import {
  Award,
  Briefcase,
  GitFork,
  Rocket,
  Sparkles,
  Trophy,
} from "lucide-react";

import type { Achievement } from "@/types/achievement";

export const achievements: Achievement[] = [
  {
    title: "Problem Solver",
    description:
      "500+ DSA problems solved across LeetCode and Codeforces, with a focus on patterns that show up in real distributed systems.",
    icon: Trophy,
  },
  {
    title: "Production Engineer",
    description:
      "2+ years shipping code that serves real users in production — not just side projects and demos.",
    icon: Briefcase,
  },
  {
    title: "Full-Stack Delivery",
    description:
      "20+ end-to-end projects shipped, from database schema design through deployed, monitored UI.",
    icon: Rocket,
  },
  {
    title: "Certified",
    description:
      "Professional certifications across cloud infrastructure and backend engineering fundamentals.",
    icon: Award,
  },
  // {
  //   title: "Open Source",
  //   description:
  //     "Active contributor to open source tooling, with pull requests merged into projects other teams depend on.",
  //   icon: GitFork,
  // },
  {
    title: "Always Learning",
    description:
      "Currently deep in LLM-integrated application architecture — the same curiosity that started with core Java.",
    icon: Sparkles,
  },
];
