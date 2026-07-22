import { run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

import { Callout } from "@/features/mdx/callout";
import { Pre } from "@/features/mdx/pre";

const components = {
  Callout,
  pre: Pre,
};

interface MDXContentProps {
  code: string;
}

export async function MDXContent({ code }: MDXContentProps) {
  const { default: Component } = await run(code, {
    ...runtime,
    baseUrl: import.meta.url,
  });

  return (
    <div className="prose prose-neutral dark:prose-invert prose-pre:m-0 prose-pre:border-0 prose-pre:bg-transparent prose-pre:p-0 prose-headings:scroll-mt-28 prose-a:text-accent-blue prose-a:no-underline hover:prose-a:underline max-w-none">
      <Component components={components} />
    </div>
  );
}
