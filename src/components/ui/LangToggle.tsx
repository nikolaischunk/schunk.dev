"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LangToggle({ locale }: { locale: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const toggle = () => {
    const next = locale === "en" ? "de" : "en";
    const newPath = pathname.replace(`/${locale}`, `/${next}`);
    router.push(newPath);
  };

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.9 }}
      className="text-xs font-mono font-semibold px-2 py-1 rounded border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)] transition-colors"
    >
      {locale === "en" ? "DE" : "EN"}
    </motion.button>
  );
}
