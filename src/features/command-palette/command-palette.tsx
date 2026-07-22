"use client";

import {
  FileText,
  FolderKanban,
  Home,
  Mail,
  Moon,
  Sun,
  User,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { GithubIcon, LinkedinIcon } from "@/components/shared/social-icons";
import { siteConfig } from "@/config/site.config";
import { OPEN_COMMAND_PALETTE_EVENT } from "@/features/command-palette/events";

interface CommandPaletteProps {
  projects: { name: string; slug: string }[];
  posts: { title: string; slug: string }[];
}

export function CommandPalette({ projects, posts }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((current) => !current);
      }
    }
    function handleOpenEvent() {
      setOpen(true);
    }
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener(OPEN_COMMAND_PALETTE_EVENT, handleOpenEvent);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener(OPEN_COMMAND_PALETTE_EVENT, handleOpenEvent);
    };
  }, []);

  function runCommand(action: () => void) {
    setOpen(false);
    action();
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <Command>
        <CommandInput placeholder="Search pages, projects, posts…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Navigate">
            <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
              <Home />
              Home
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/#about"))}
            >
              <User />
              About
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/projects"))}
            >
              <FolderKanban />
              All projects
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/blog"))}
            >
              <FileText />
              Blog
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/#contact"))}
            >
              <Mail />
              Contact
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Projects">
            {projects.map((project) => (
              <CommandItem
                key={project.slug}
                value={`project ${project.name}`}
                onSelect={() =>
                  runCommand(() => router.push(`/projects/${project.slug}`))
                }
              >
                <FolderKanban />
                {project.name}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Blog posts">
            {posts.map((post) => (
              <CommandItem
                key={post.slug}
                value={`post ${post.title}`}
                onSelect={() =>
                  runCommand(() => router.push(`/blog/${post.slug}`))
                }
              >
                <FileText />
                {post.title}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={() =>
                runCommand(() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark"),
                )
              }
            >
              {resolvedTheme === "dark" ? <Sun /> : <Moon />}
              Toggle theme
            </CommandItem>
            <CommandItem
              onSelect={() =>
                runCommand(() =>
                  navigator.clipboard.writeText(siteConfig.author.email),
                )
              }
            >
              <Mail />
              Copy email address
            </CommandItem>
            <CommandItem
              onSelect={() =>
                runCommand(() => window.open("/resume.pdf", "_blank"))
              }
            >
              <FileText />
              Download resume
            </CommandItem>
            <CommandItem
              onSelect={() =>
                runCommand(() => window.open(siteConfig.links.github, "_blank"))
              }
            >
              <GithubIcon className="size-4" />
              Open GitHub
            </CommandItem>
            <CommandItem
              onSelect={() =>
                runCommand(() =>
                  window.open(siteConfig.links.linkedin, "_blank"),
                )
              }
            >
              <LinkedinIcon className="size-4" />
              Open LinkedIn
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
