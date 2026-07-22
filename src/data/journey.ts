import {
  Binary,
  Bot,
  Boxes,
  Cloud,
  Coffee,
  Layers,
  Rocket,
  Workflow,
} from "lucide-react";

import type { JourneyMilestone } from "@/types/journey";

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: "2019",
    title: "Java & Programming Fundamentals",
    description:
      "Started with core Java and object-oriented programming — the foundation everything else builds on.",
    icon: Coffee,
  },
  {
    year: "2020",
    title: "Data Structures & Algorithms",
    description:
      "Deliberate practice on DSA — arrays to graphs — building the problem-solving muscle used every day since.",
    icon: Binary,
  },
  {
    year: "2021",
    title: "MERN Stack",
    description:
      "MongoDB, Express, React, and Node — went from solving problems to shipping full applications end to end.",
    icon: Layers,
  },
  {
    year: "2022",
    title: "Professional Experience",
    description:
      "First production engineering role — trading tutorials for real users, real incidents, and real code review.",
    icon: Boxes,
  },
  {
    year: "2023",
    title: "System Design",
    description:
      "Moved from making features work to making systems scale — caching, queues, load balancing, and trade-offs.",
    icon: Workflow,
  },
  {
    year: "2024",
    title: "Cloud & Infrastructure",
    description:
      "Took ownership of deployment and infrastructure — containers, CI/CD, and cloud-native architecture.",
    icon: Cloud,
  },
  {
    year: "2025",
    title: "AI-Powered Applications",
    description:
      "Started building LLM-integrated products — from prompt engineering to production-grade AI features.",
    icon: Bot,
  },
  {
    year: "2026",
    title: "Scalable Applications",
    description:
      "Focused on building software that holds up under real load, with the craft of a product engineer.",
    icon: Rocket,
  },
];
