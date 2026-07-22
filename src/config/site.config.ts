export const siteConfig = {
  name: "Ashish Biswas",
  title: "Ashish Biswas — Software Engineer",
  description:
    "Software engineer building scalable, high-performance applications with modern web technologies.",
  url: "https://ashishbiswas.dev",
  ogImage: "/og-default.png",
  author: {
    name: "Ashish Biswas",
    email: "ashishbiswasg@gmail.com",
  },
  links: {
    github: "https://github.com/A-s-h-i-s-h-Biswas",
    linkedin: "https://linkedin.com/in/ashish-biswas",
    twitter: "https://x.com/Ashish__Biswas",
    leetcode: "https://leetcode.com/u/Ashish_Biswas/",
  },
  nav: [
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
