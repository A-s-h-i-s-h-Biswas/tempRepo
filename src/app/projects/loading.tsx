import { Container } from "@/components/layout/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectsLoading() {
  return (
    <main className="flex-1 pt-32 pb-(--spacing-section)">
      <Container>
        <Skeleton className="h-4 w-20" />
        <Skeleton className="mt-3 h-10 w-48" />
        <Skeleton className="mt-4 h-5 w-full max-w-xl" />

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="border-border bg-card overflow-hidden rounded-2xl border"
            >
              <Skeleton className="aspect-[1200/630] w-full rounded-none" />
              <div className="p-6">
                <Skeleton className="h-6 w-2/3" />
                <Skeleton className="mt-3 h-4 w-full" />
                <Skeleton className="mt-2 h-4 w-4/5" />
                <div className="mt-4 flex gap-2">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-5 w-16" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
