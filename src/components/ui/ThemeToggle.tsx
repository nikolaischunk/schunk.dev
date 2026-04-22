"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored ? stored === "dark" : true;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDark(isDark);
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light",
    );
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute(
      "data-theme",
      next ? "dark" : "light",
    );
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
      className="w-8 h-8 flex items-center justify-center rounded-full text-sm transition-colors hover:bg-[var(--border)]"
    >
      {dark ? "☀️" : "🌙"}
    </motion.button>
  );
}
