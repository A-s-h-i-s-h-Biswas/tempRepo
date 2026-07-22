"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SpotlightProps {
  children: ReactNode;
  className?: string;
}

export function Spotlight({ children, className }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (coarsePointer || reducedMotion) return;

    let frame = 0;

    function handlePointerMove(event: PointerEvent) {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const rect = el!.getBoundingClientRect();
        el!.style.setProperty(
          "--spotlight-x",
          `${event.clientX - rect.left}px`,
        );
        el!.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
        frame = 0;
      });
    }

    el.addEventListener("pointermove", handlePointerMove);
    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "group/spotlight relative isolate overflow-hidden",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/spotlight:opacity-100"
        style={{
          background:
            "radial-gradient(500px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), oklch(0.65 0.19 255 / 12%), transparent 70%)",
        }}
      />
      {children}
    </div>
  );
}
