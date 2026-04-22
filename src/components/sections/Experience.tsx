"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const t = useTranslations("experience");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const items = t.raw("items") as Array<{
    role: string;
    company: string;
    period: string;
    desc: string;
  }>;

  return (
    <section
      id="experience"
      className="py-28 px-6 border-t border-[var(--border)]"
    >
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-[var(--accent)] mb-2 uppercase tracking-widest"
        >
          05 — {t("title")}
        </motion.p>

        <div className="mt-10 space-y-0">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="relative pl-6 pb-12 border-l border-[var(--border)] last:pb-0"
            >
              {/* Timeline dot */}
              <span
                className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full border-2 border-[var(--accent)]"
                style={{ background: "var(--background)" }}
              />

              <p className="font-mono text-xs text-[var(--muted)] mb-1">
                {item.period}
              </p>
              <h3 className="font-semibold text-lg mb-0.5">{item.role}</h3>
              <p className="text-sm text-[var(--accent)] mb-3 font-mono">
                {item.company}
              </p>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
