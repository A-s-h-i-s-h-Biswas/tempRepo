"use client";

import { motion, useScroll } from "motion/react";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="bg-accent-blue fixed inset-x-0 top-0 z-50 h-0.5 origin-left"
    />
  );
}
