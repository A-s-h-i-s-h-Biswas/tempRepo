"use client";

import dynamic from "next/dynamic";

const CommandPalette = dynamic(
  () =>
    import("@/features/command-palette/command-palette").then(
      (mod) => mod.CommandPalette,
    ),
  { ssr: false },
);

interface CommandPaletteLazyProps {
  projects: { name: string; slug: string }[];
  posts: { title: string; slug: string }[];
}

export function CommandPaletteLazy(props: CommandPaletteLazyProps) {
  return <CommandPalette {...props} />;
}
