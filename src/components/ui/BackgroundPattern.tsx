"use client";

import { motion } from "framer-motion";
import { useEffect, useId, useMemo, useState, type CSSProperties } from "react";

type BackgroundPatternVariant =
  | "grid"
  | "dots"
  | "diamonds"
  | "crosshatch"
  | "rings"
  | "waves"
  | "stripes";

type BackgroundPatternVariantProp = BackgroundPatternVariant | "random";
type BackgroundPatternFade = "none" | "bottom" | "top" | "both";

const variantStyles: Record<BackgroundPatternVariant, CSSProperties> = {
  grid: {
    backgroundImage:
      "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
  },
  dots: {
    backgroundImage:
      "radial-gradient(circle at 1px 1px, var(--grid-line) 1px, transparent 0)",
    backgroundSize: "22px 22px",
  },
  diamonds: {
    backgroundImage:
      "linear-gradient(135deg, transparent 75%, var(--grid-line) 75%, var(--grid-line) 76%, transparent 76%), linear-gradient(225deg, transparent 75%, var(--grid-line) 75%, var(--grid-line) 76%, transparent 76%), linear-gradient(45deg, transparent 75%, var(--grid-line) 75%, var(--grid-line) 76%, transparent 76%), linear-gradient(315deg, transparent 75%, var(--grid-line) 75%, var(--grid-line) 76%, transparent 76%)",
    backgroundSize: "44px 44px",
    backgroundPosition: "0 0, 0 0, 22px 22px, 22px 22px",
  },
  crosshatch: {
    backgroundImage:
      "linear-gradient(45deg, var(--grid-line) 1px, transparent 1px), linear-gradient(-45deg, var(--grid-line) 1px, transparent 1px)",
    backgroundSize: "34px 34px",
  },
  rings: {
    backgroundImage:
      "radial-gradient(circle, transparent 66%, var(--grid-line) 67%, transparent 69%)",
    backgroundSize: "80px 80px",
    backgroundPosition: "center",
  },
  waves: {
    backgroundImage:
      "radial-gradient(circle at 0 0, transparent 70%, var(--grid-line) 71%, transparent 72%), radial-gradient(circle at 100% 100%, transparent 70%, var(--grid-line) 71%, transparent 72%)",
    backgroundSize: "90px 90px",
  },
  stripes: {
    backgroundImage:
      "repeating-linear-gradient(90deg, var(--grid-line) 0 1px, transparent 1px 18px)",
    backgroundSize: "100% 100%",
  },
};

type PulseConfig = { keyframes: number[]; duration: number; delay: number };

function hashStringToU32(input: string): number {
  // FNV-1a 32-bit
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function u32ToUnitFloat(u32: number): number {
  // [0, 1)
  return (u32 >>> 0) / 2 ** 32;
}

export default function BackgroundPattern({
  variant = "grid",
  animated = true,
  fade = "bottom",
  className,
  style,
}: {
  variant?: BackgroundPatternVariantProp;
  animated?: boolean;
  fade?: BackgroundPatternFade;
  className?: string;
  style?: CSSProperties;
}) {
  const id = useId();
  const [clientSeed, setClientSeed] = useState<number | null>(null);

  useEffect(() => {
    // Important: do not call Math.random() during SSR/hydration render.
    // We "upgrade" to a client-only seed after mount to avoid hydration mismatch.
    setClientSeed(Math.random());
  }, []);

  const resolvedVariant = useMemo<BackgroundPatternVariant>(() => {
    if (variant !== "random") return variant;
    const variants = Object.keys(variantStyles) as BackgroundPatternVariant[];
    // Deterministic for SSR/hydration, then feels-random after mount.
    const seed = hashStringToU32(`${id}:${clientSeed ?? 0}`);
    const idx = seed % variants.length;
    return variants[idx] ?? "grid";
  }, [clientSeed, id, variant]);

  const pulse = useMemo<PulseConfig>(() => {
    if (!animated) return { keyframes: [1, 1, 1, 1], duration: 8, delay: 0 };

    const seed = hashStringToU32(`${id}:${resolvedVariant}:${clientSeed ?? 0}`);
    const r1 = u32ToUnitFloat(seed);
    const r2 = u32ToUnitFloat(seed ^ 0xa53c9e17);
    const r3 = u32ToUnitFloat(seed ^ 0x7f4a7c15);
    const r4 = u32ToUnitFloat(seed ^ 0x1c7b3a5d);
    const r5 = u32ToUnitFloat(seed ^ 0x9e3779b9);

    const min = 0.86;
    const max = 1.14;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const a = lerp(min, max, r1);
    const b = lerp(min, max, r2);
    const c = lerp(min, max, r3);
    const duration = lerp(6.5, 13.0, r4);
    const delay = lerp(0.0, 2.5, r5);

    return { keyframes: [a, b, c, a], duration, delay };
  }, [animated, clientSeed, id, resolvedVariant]);

  const motionStyle = useMemo(() => {
    const fadeMask =
      fade === "none"
        ? undefined
        : fade === "bottom"
          ? "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)"
          : fade === "top"
            ? "linear-gradient(to bottom, transparent 0%, black 28%, black 100%)"
            : "linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)";

    return {
      opacity: "calc(var(--pattern-opacity) * var(--pattern-pulse))",
      ...variantStyles[resolvedVariant],
      ...(fadeMask
        ? ({
            maskImage: fadeMask,
            WebkitMaskImage: fadeMask,
          } satisfies CSSProperties)
        : null),
      ...style,
      ["--pattern-pulse"]: pulse.keyframes[0] ?? 1,
    } satisfies CSSProperties & Record<"--pattern-pulse", number>;
  }, [fade, pulse.keyframes, resolvedVariant, style]);

  return (
    <motion.div
      aria-hidden
      className={["absolute inset-0 pointer-events-none", className]
        .filter(Boolean)
        .join(" ")}
      style={motionStyle}
      initial={false}
      animate={animated ? { ["--pattern-pulse"]: pulse.keyframes } : undefined}
      transition={
        animated
          ? {
              duration: pulse.duration,
              delay: pulse.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }
          : undefined
      }
    />
  );
}

