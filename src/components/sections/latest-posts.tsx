import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/layout/container";
import { BlogPostCard } from "@/features/blog/blog-post-card";
import { posts } from "#site/content";

export function LatestPosts() {
  const latest = posts
    .filter((post) => post.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);

  if (latest.length === 0) return null;

  return (
    <section id="blog" className="py-(--spacing-section)">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal>
              <p className="text-accent-blue mb-3 font-mono text-sm tracking-wide uppercase">
                Writing
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                From the blog
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/blog"
              className="text-accent-blue inline-flex items-center gap-1 text-sm font-medium hover:underline"
            >
              View all posts
              <ArrowUpRight className="size-3.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.08}>
              <BlogPostCard post={post} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
