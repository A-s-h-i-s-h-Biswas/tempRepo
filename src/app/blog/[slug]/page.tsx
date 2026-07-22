import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { MDXContent } from "@/features/mdx/mdx-content";
import { ReadingProgress } from "@/features/blog/reading-progress";
import { constructMetadata } from "@/lib/metadata";
import { posts } from "#site/content";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) return {};

  return constructMetadata({
    title: post.title,
    description: post.excerpt,
    image: `/blog/${post.slug}/opengraph-image`,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.published && item.slug === slug);

  if (!post) {
    notFound();
  }

  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="flex-1 pt-32 pb-(--spacing-section)">
      <ReadingProgress />
      <Container className="max-w-3xl">
        <Link
          href="/blog"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm"
        >
          <ArrowLeft className="size-3.5" />
          All posts
        </Link>

        <div className="mt-6">
          <p className="text-accent-blue mb-3 font-mono text-sm tracking-wide uppercase">
            {date}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {post.title}
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">{post.excerpt}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <Image
          src={`/blog/${post.slug}/opengraph-image`}
          alt={`${post.title} cover`}
          width={1200}
          height={630}
          priority
          className="border-border mt-10 aspect-[1200/630] w-full rounded-2xl border object-cover"
        />

        <div className="mt-10">
          <MDXContent code={post.content} />
        </div>
      </Container>
    </main>
  );
}
