import { ImageResponse } from "next/og";

import { CoverTemplate } from "@/lib/cover-template";
import { posts } from "#site/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  return new ImageResponse(
    <CoverTemplate
      kicker="Blog Post"
      name={post?.title ?? "Blog"}
      tagline={post?.excerpt ?? ""}
    />,
    size,
  );
}
