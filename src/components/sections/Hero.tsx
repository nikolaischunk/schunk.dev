"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import BackgroundPattern from "@/components/ui/BackgroundPattern";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <BackgroundPattern variant="random" />

      <div className="relative z-10 max-w-3xl w-full">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="font-mono text-sm text-[var(--accent)] mb-3"
        >
          {t("greeting")}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6"
        >
          {t("name")}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="text-xl md:text-2xl text-[var(--muted)] leading-relaxed mb-8 max-w-xl"
        >
          {t("tagline")}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="flex items-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            {t("cta")}
            <span>↓</span>
          </a>

          <span className="flex items-center gap-1.5 text-xs font-mono text-[var(--muted)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            {t("location")}
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[var(--accent)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
