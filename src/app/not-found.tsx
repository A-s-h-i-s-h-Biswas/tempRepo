import { Compass } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center py-(--spacing-section)">
      <Container className="flex max-w-md flex-col items-center text-center">
        <span className="bg-accent-blue/10 text-accent-blue flex size-14 items-center justify-center rounded-2xl">
          <Compass className="size-6" />
        </span>
        <p className="text-accent-blue mt-6 font-mono text-sm tracking-wide uppercase">
          404
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          This page took a wrong turn
        </h1>
        <p className="text-muted-foreground mt-3">
          The page you&apos;re looking for doesn&apos;t exist, or has moved
          somewhere else.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button render={<Link href="/" />} nativeButton={false}>
            Back home
          </Button>
          <Button
            variant="outline"
            render={<Link href="/projects" />}
            nativeButton={false}
          >
            View projects
          </Button>
        </div>
      </Container>
    </main>
  );
}
