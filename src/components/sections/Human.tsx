"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Human() {
  const t = useTranslations("human");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const items = t.raw("items") as Array<{
    icon: string;
    title: string;
    desc: string;
  }>;

  return (
    <section id="human" className="py-28 px-6 border-t border-[var(--border)]">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-[var(--accent)] mb-2 uppercase tracking-widest"
        >
          02 — {t("title")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-bold mb-12"
        >
          {t("subtitle")}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] transition-colors group"
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="font-semibold text-sm mb-2 group-hover:text-[var(--accent)] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
