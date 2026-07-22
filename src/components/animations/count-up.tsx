"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function CountUp({
  value,
  prefix = "",
  suffix = "",
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, value, prefersReducedMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {prefersReducedMotion ? value : display}
      {suffix}
    </span>
  );
}
