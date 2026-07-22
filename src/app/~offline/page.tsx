import { WifiOff } from "lucide-react";
import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "You're offline",
  noIndex: true,
  path: "/~offline",
});

export default function OfflinePage() {
  return (
    <main className="flex flex-1 items-center justify-center py-(--spacing-section)">
      <Container className="flex max-w-md flex-col items-center text-center">
        <span className="bg-accent-blue/10 text-accent-blue flex size-14 items-center justify-center rounded-2xl">
          <WifiOff className="size-6" />
        </span>
        <h1 className="mt-6 text-2xl font-semibold tracking-tight">
          You&apos;re offline
        </h1>
        <p className="text-muted-foreground mt-3">
          This page isn&apos;t cached yet. Reconnect to the internet and try
          again — previously visited pages will still work offline.
        </p>
      </Container>
    </main>
  );
}
