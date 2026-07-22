"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import {
  useRef,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

const MAGNETIC_RADIUS = 80;
const MAGNETIC_STRENGTH = 0.35;
const SPRING_CONFIG = { stiffness: 150, damping: 15, mass: 0.1 };

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
}

export function MagneticButton({ children, className }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING_CONFIG);
  const springY = useSpring(y, SPRING_CONFIG);

  function handleMouseMove(event: ReactMouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = event.clientX - centerX;
    const distanceY = event.clientY - centerY;
    const distance = Math.hypot(distanceX, distanceY);

    if (distance < MAGNETIC_RADIUS) {
      x.set(distanceX * MAGNETIC_STRENGTH);
      y.set(distanceY * MAGNETIC_STRENGTH);
    } else {
      x.set(0);
      y.set(0);
    }
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={prefersReducedMotion ? undefined : { x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
