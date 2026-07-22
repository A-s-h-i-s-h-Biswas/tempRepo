import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import type { Post } from "#site/content";

interface BlogPostCardProps {
  post: Post;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group border-border bg-card hover:border-accent-blue/40 block rounded-2xl border p-6 transition-colors"
    >
      <p className="text-muted-foreground font-mono text-xs">{date}</p>
      <h3 className="font-heading group-hover:text-accent-blue mt-2 text-xl font-semibold transition-colors">
        {post.title}
      </h3>
      <p className="text-muted-foreground mt-2 line-clamp-2 text-sm">
        {post.excerpt}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
    </Link>
  );
}
