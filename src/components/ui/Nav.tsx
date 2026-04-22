"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";

const sections = [
  "about",
  "human",
  "stack",
  "projects",
  "experience",
  "contact",
] as const;

export default function Nav({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setHidden(y > lastY && y > 80);
    setLastY(y);
  });

  return (
    <motion.nav
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md"
    >
      <span className="font-mono text-sm font-semibold text-[var(--accent)]">
        schunk<span className="text-[var(--muted)]">.dev</span>
      </span>

      <div className="hidden md:flex items-center gap-6">
        {sections.map((s) => (
          <a
            key={s}
            href={`#${s}`}
            className="text-xs font-mono text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            {t(s)}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <LangToggle locale={locale} />
      </div>
    </motion.nav>
  );
}
