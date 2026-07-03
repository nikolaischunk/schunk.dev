"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function NavBlur({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.9]);
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]);

  if (reduce) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-12 h-16 flex items-center justify-between">
          {children}
        </div>
      </nav>
    );
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[100]"
      style={{
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
      }}
    >
      <motion.div
        className="absolute inset-0 bg-background border-b border-border"
        style={{ opacity: bgOpacity }}
      />
      <div className="relative max-w-7xl mx-auto px-5 md:px-12 h-16 flex items-center justify-between">
        {children}
      </div>
    </motion.nav>
  );
}
