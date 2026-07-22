import type { MetadataRoute } from "next";

import { posts } from "#site/content";
import { siteConfig } from "@/config/site.config";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, changeFrequency: "monthly", priority: 1 },
    {
      url: `${siteConfig.url}/projects`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${siteConfig.url}/blog`, changeFrequency: "weekly", priority: 0.8 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const postRoutes: MetadataRoute.Sitemap = posts
    .filter((post) => post.published)
    .map((post) => ({
      url: `${siteConfig.url}${post.permalink}`,
      lastModified: post.date,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [...staticRoutes, ...projectRoutes, ...postRoutes];
}
