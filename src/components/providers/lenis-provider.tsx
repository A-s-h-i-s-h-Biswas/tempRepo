"use client";

import gsap from "gsap";
import { ReactLenis, type LenisRef } from "lenis/react";
import { useEffect, useRef, type ReactNode } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    function onTick(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{ autoRaf: false, lerp: 0.1, duration: 1.2, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
}
