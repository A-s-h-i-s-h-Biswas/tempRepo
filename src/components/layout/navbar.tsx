"use client";

import { Menu, Search } from "lucide-react";
import { useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/layout/container";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site.config";
import { OPEN_COMMAND_PALETTE_EVENT } from "@/features/command-palette/events";
import { cn } from "@/lib/utils";

function SearchTrigger() {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new Event(OPEN_COMMAND_PALETTE_EVENT))
      }
      aria-label="Open search"
      className="border-border bg-card text-muted-foreground hover:border-accent-blue/40 hover:text-foreground flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-sm transition-colors"
    >
      <Search className="size-3.5" />
      <span className="hidden font-mono text-xs sm:inline">⌘K</span>
    </button>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <Container>
        <div
          className={cn(
            "mt-4 flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 transition-all duration-300",
            scrolled && "glass mt-3 shadow-sm",
          )}
        >
          <Logo />

          <nav className="hidden items-center gap-1 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:bg-accent hover:text-foreground rounded-lg px-3 py-2 text-sm transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <SearchTrigger />
            <ThemeToggle />
            <Button
              size="sm"
              nativeButton={false}
              render={
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Resume
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <SearchTrigger />
            <ThemeToggle />
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Open menu"
                  />
                }
              >
                <Menu />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Navigate</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1 px-4">
                  {siteConfig.nav.map((item) => (
                    <SheetClose
                      key={item.href}
                      render={<Link href={item.href} />}
                      className="text-muted-foreground hover:bg-accent hover:text-foreground rounded-lg px-3 py-2 text-sm transition-colors"
                    >
                      {item.label}
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
