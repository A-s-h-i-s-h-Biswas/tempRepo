import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { BlogPostCard } from "@/features/blog/blog-post-card";
import { constructMetadata } from "@/lib/metadata";
import { posts } from "#site/content";

export const metadata: Metadata = {
  ...constructMetadata({
    title: "Blog",
    description:
      "Engineering notes on backend architecture, performance, databases, and AI integration.",
    path: "/blog",
  }),
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/blog/rss.xml" },
  },
};

export default function BlogPage() {
  const publishedPosts = posts
    .filter((post) => post.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="flex-1 pt-32 pb-(--spacing-section)">
      <Container>
        <p className="text-accent-blue mb-3 font-mono text-sm tracking-wide uppercase">
          Writing
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Blog
        </h1>
        <p className="text-muted-foreground mt-4 max-w-xl">
          Notes on backend architecture, performance, databases, and building
          with LLMs — mostly things that broke first.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {publishedPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </main>
  );
}
