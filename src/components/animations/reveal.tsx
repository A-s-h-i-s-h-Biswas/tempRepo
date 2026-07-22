"use client";

import gsap from "gsap";
import { useEffect, useRef, type ReactNode } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before starting, for staggering sibling reveals. */
  delay?: number;
  /** Starting vertical offset in pixels. */
  y?: number;
}

/**
 * Fades an element up once it enters the viewport. Uses IntersectionObserver
 * rather than GSAP ScrollTrigger — this component is used ~80 times across
 * the homepage, and one ScrollTrigger instance per element measures layout
 * synchronously on mount, which showed up as real main-thread cost in
 * profiling. IntersectionObserver does the same "trigger once when visible"
 * job at a fraction of the cost; GSAP still drives the actual tween.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: "power3.out",
        });
        observer.disconnect();
      },
      { rootMargin: "0px 0px -15% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReducedMotion, delay]);

  return (
    <div
      ref={ref}
      style={
        prefersReducedMotion ? undefined : { transform: `translateY(${y}px)` }
      }
      className={cn(
        prefersReducedMotion ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
