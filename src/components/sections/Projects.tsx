"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const t = useTranslations("projects");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const items = t.raw("items") as Array<{
    name: string;
    desc: string;
    tags: string[];
    url: string;
  }>;

  return (
    <section
      id="projects"
      className="py-28 px-6 border-t border-[var(--border)]"
    >
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-[var(--accent)] mb-2 uppercase tracking-widest"
        >
          04 — {t("title")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-bold mb-12"
        >
          {t("subtitle")}
        </motion.p>

        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ x: 4 }}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] transition-colors group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold group-hover:text-[var(--accent)] transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-[var(--muted)] text-xs">↗</span>
                </div>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 md:justify-end md:max-w-[200px]">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-mono rounded border border-[var(--border)] text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
