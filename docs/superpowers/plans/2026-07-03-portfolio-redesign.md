# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign schunk.dev from a dark-mode template-style portfolio to a bold editorial light-mode site with Clash Display + Cabinet Grotesk, asymmetric layouts, and scroll-driven motion.

**Architecture:** Single-page portfolio built with Next.js 16 + Tailwind v4 + framer-motion. All data stays in `src/data/me.json`. Self-hosted fonts via `@font-face`. Motion isolated in `'use client'` leaf components. CSS tokens in `globals.css` via `:root` variables mapped through `@theme inline`.

**Tech Stack:** Next.js 16, React 19, Tailwind v4, framer-motion (import from `motion/react`), @phosphor-icons/react

## Global Constraints

- Branch: `redesign-proposal` (already created)
- Fonts: Clash Display + Cabinet Grotesk self-hosted from `public/fonts/`, loaded via `@font-face` in `globals.css`
- No `next/font/google` for these fonts (not on Google Fonts)
- Keep Geist Mono via `next/font/google` for mono usage
- All motion gated behind `useReducedMotion()` from `motion/react`
- All animated components must be `'use client'` leaf components
- `min-h-[100dvh]` never `h-screen`
- Container: `max-w-7xl mx-auto`
- Mobile: single-column below `md` (768px), `px-5` padding
- Desktop: `px-12` padding
- Zero em-dashes anywhere in copy
- No eyebrow pulsing dots
- One accent color (`#2A9D8F`) used consistently everywhere
- Corner radii: 0 default, 8px buttons, 12px cards
- Keep `me.json` data structure unchanged
- Commit after each task

---

## File Map

### Create
- `public/fonts/ClashDisplay-Bold.woff2`
- `public/fonts/ClashDisplay-Semibold.woff2`
- `public/fonts/CabinetGrotesk-Regular.woff2`
- `public/fonts/CabinetGrotesk-Medium.woff2`
- `public/fonts/CabinetGrotesk-Bold.woff2`
- `src/components/motion/RevealOnScroll.tsx` (client component, scroll-reveal wrapper)
- `src/components/motion/HeroReveal.tsx` (client component, hero entry animation)
- `src/components/motion/NavBlur.tsx` (client component, nav scroll behavior)

### Modify
- `src/app/globals.css` (new color tokens, font-face declarations, theme)
- `src/app/layout.tsx` (remove Geist sans, keep Geist Mono, add font classes)
- `src/app/page.tsx` (remove Iconify Script tag, remove iconify type)
- `src/components/ui/Nav.tsx` (full rewrite: kill bottom dock, light mode, Phosphor icons)
- `src/components/sections/Hero.tsx` (full rewrite: asymmetric left-aligned, light mode)
- `src/components/sections/Projects.tsx` (full rewrite: stacked horizontal cards, light mode)
- `src/components/sections/About.tsx` (full rewrite: vertical stack, plain text skills)
- `src/components/sections/Experience.tsx` (restyle: light mode, Clash Display roles)
- `src/components/sections/Human.tsx` (restyle: tinted surface, Phosphor icons)
- `src/components/sections/Contact.tsx` (full rewrite: clean contact, no giant text)

### Delete
- `src/types/iconify-icon.d.ts`

---

### Task 1: Fonts and Design Tokens

**Files:**
- Create: `public/fonts/` (font files)
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`
- Delete: `src/types/iconify-icon.d.ts`

**Interfaces:**
- Consumes: nothing
- Produces: CSS custom properties (`--background`, `--foreground`, `--accent`, `--accent-dim`, `--muted`, `--border`, `--card`, `--surface-tint`), font families (`--font-display`, `--font-body`, `--font-mono`), Tailwind theme tokens via `@theme inline`

- [ ] **Step 1: Download fonts**

Download Clash Display (Bold, Semibold) and Cabinet Grotesk (Regular, Medium, Bold) from Fontshare. Place `.woff2` files in `public/fonts/`.

Run:
```bash
mkdir -p public/fonts
# Download from https://www.fontshare.com/fonts/clash-display
# Download from https://www.fontshare.com/fonts/cabinet-grotesk
# Place woff2 files in public/fonts/
```

Verify files exist:
```bash
ls public/fonts/
```
Expected: `ClashDisplay-Bold.woff2`, `ClashDisplay-Semibold.woff2`, `CabinetGrotesk-Regular.woff2`, `CabinetGrotesk-Medium.woff2`, `CabinetGrotesk-Bold.woff2`

- [ ] **Step 2: Rewrite globals.css**

Replace the entire contents of `src/app/globals.css` with:

```css
@import "tailwindcss";

/* — Clash Display — */
@font-face {
  font-family: "Clash Display";
  src: url("/fonts/ClashDisplay-Semibold.woff2") format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Clash Display";
  src: url("/fonts/ClashDisplay-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* — Cabinet Grotesk — */
@font-face {
  font-family: "Cabinet Grotesk";
  src: url("/fonts/CabinetGrotesk-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Cabinet Grotesk";
  src: url("/fonts/CabinetGrotesk-Medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Cabinet Grotesk";
  src: url("/fonts/CabinetGrotesk-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

:root {
  --background: #F5F2ED;
  --foreground: #1A1816;
  --accent: #2A9D8F;
  --accent-dim: #238578;
  --muted: #8C8578;
  --border: #E0DCD6;
  --card: #EDEAE4;
  --surface-tint: #EEF7F5;
  --font-display: "Clash Display", system-ui, sans-serif;
  --font-body: "Cabinet Grotesk", system-ui, sans-serif;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-accent: var(--accent);
  --color-accent-dim: var(--accent-dim);
  --color-muted: var(--muted);
  --color-card: var(--card);
  --color-border: var(--border);
  --color-surface-tint: var(--surface-tint);
  --font-display: var(--font-display);
  --font-body: var(--font-body);
  --font-mono: var(--font-geist-mono);
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-body);
}

::selection {
  background: var(--accent);
  color: #fff;
}
```

- [ ] **Step 3: Update layout.tsx**

Replace `src/app/layout.tsx` with:

```tsx
import { Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Nikolai Schunk - Software Engineer",
  description: "Enthusiastic about code. Good with people. Ships things. Frontend engineer based in Zurich.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Delete iconify type declaration**

```bash
rm src/types/iconify-icon.d.ts
```

- [ ] **Step 5: Install Phosphor Icons**

```bash
yarn add @phosphor-icons/react
```

- [ ] **Step 6: Verify build**

```bash
yarn build
```

Expected: build may fail due to iconify-icon references in components. That's expected - we'll fix those in subsequent tasks. The fonts and tokens are wired correctly if the CSS compiles.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: add Clash Display + Cabinet Grotesk fonts, new light-mode tokens, install Phosphor"
```

---

### Task 2: Navigation

**Files:**
- Modify: `src/components/ui/Nav.tsx` (full rewrite)
- Create: `src/components/motion/NavBlur.tsx`
- Modify: `src/app/page.tsx` (remove Iconify Script)

**Interfaces:**
- Consumes: CSS tokens from Task 1 (`--background`, `--foreground`, `--accent`, `--border`, `--font-body`)
- Produces: `<Nav />` component (no props), `<NavBlur />` client wrapper

- [ ] **Step 1: Create NavBlur client component**

Create `src/components/motion/NavBlur.tsx`:

```tsx
"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

export default function NavBlur({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.9]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 1]);

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
        backdropFilter: useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]),
        WebkitBackdropFilter: useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]),
      }}
    >
      <motion.div
        className="absolute inset-0 bg-background border-b border-border"
        style={{ opacity: bgOpacity, borderBottomColor: useTransform(borderOpacity, v => `rgba(224, 220, 214, ${v})`) }}
      />
      <div className="relative max-w-7xl mx-auto px-5 md:px-12 h-16 flex items-center justify-between">
        {children}
      </div>
    </motion.nav>
  );
}
```

- [ ] **Step 2: Rewrite Nav component**

Replace `src/components/ui/Nav.tsx` with:

```tsx
"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import NavBlur from "@/components/motion/NavBlur";

const links = [
  { href: "#top", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <NavBlur>
        <a href="/" className="flex items-center" aria-label="Home">
          <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center text-background font-bold text-lg font-[family-name:var(--font-display)] transition-transform hover:rotate-6">
            S.
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <List size={24} />
        </button>
      </NavBlur>

      {mobileOpen && (
        <div className="fixed inset-0 z-[200] bg-background flex flex-col">
          <div className="flex items-center justify-between px-5 h-16">
            <a href="/" aria-label="Home">
              <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center text-background font-bold text-lg font-[family-name:var(--font-display)]">
                S.
              </div>
            </a>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 text-foreground"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-start justify-center gap-8 px-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-4xl font-bold font-[family-name:var(--font-display)] text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
```

- [ ] **Step 3: Update page.tsx - remove Iconify Script**

Replace `src/app/page.tsx` with:

```tsx
import Nav from "@/components/ui/Nav";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Human from "@/components/sections/Human";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <div className="relative">
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Human />
        <Contact />
      </main>
    </div>
  );
}
```

- [ ] **Step 4: Verify and commit**

```bash
yarn build
```

Expected: may still fail on remaining iconify-icon references in section components. Nav and page.tsx should be clean.

```bash
git add -A
git commit -m "feat: rewrite nav with scroll blur, mobile menu, Phosphor icons"
```

---

### Task 3: Hero Section

**Files:**
- Modify: `src/components/sections/Hero.tsx` (full rewrite)
- Create: `src/components/motion/HeroReveal.tsx`

**Interfaces:**
- Consumes: CSS tokens from Task 1, `me.json` data
- Produces: `<Hero />` component (no props), `<HeroReveal />` client wrapper

- [ ] **Step 1: Create HeroReveal client component**

Create `src/components/motion/HeroReveal.tsx`:

```tsx
"use client";

import { motion, useReducedMotion } from "motion/react";

export default function HeroReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <>{children}</>;

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
```

- [ ] **Step 2: Rewrite Hero**

Replace `src/components/sections/Hero.tsx` with:

```tsx
import me from "@/data/me.json";
import HeroReveal from "@/components/motion/HeroReveal";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative min-h-[100dvh] w-full flex items-center"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-12 w-full py-32">
        <HeroReveal>
          <h1 className="font-[family-name:var(--font-display)] font-bold tracking-tighter leading-[0.9] text-5xl md:text-7xl lg:text-[8rem] text-foreground">
            {me.personal.name.split(" ")[0]}
            <br />
            {me.personal.name.split(" ")[1]}.
          </h1>
        </HeroReveal>

        <HeroReveal delay={0.15}>
          <p className="mt-6 md:mt-8 text-base md:text-lg text-muted max-w-md leading-relaxed">
            {me.personal.tagline} Based in {me.personal.location.city}.
          </p>
        </HeroReveal>

        <HeroReveal delay={0.3}>
          <div className="mt-10">
            <a
              href="#projects"
              className="inline-block px-6 py-3 bg-accent hover:bg-accent-dim text-white font-medium text-sm rounded-lg transition-colors active:scale-[0.98]"
            >
              View projects
            </a>
          </div>
        </HeroReveal>
      </div>
    </header>
  );
}
```

- [ ] **Step 3: Verify and commit**

```bash
yarn dev
```

Open `http://localhost:3000` in a browser. Verify:
- Name renders in Clash Display, two lines, left-aligned
- Tagline is muted, below the name
- Single accent-colored CTA
- Generous whitespace on the right
- Warm off-white background

```bash
git add -A
git commit -m "feat: asymmetric hero with Clash Display and reveal animation"
```

---

### Task 4: RevealOnScroll Utility + Projects Section

**Files:**
- Create: `src/components/motion/RevealOnScroll.tsx`
- Modify: `src/components/sections/Projects.tsx` (full rewrite)

**Interfaces:**
- Consumes: CSS tokens from Task 1, `me.json` data, `next/image`
- Produces: `<RevealOnScroll />` reusable client wrapper (used by Tasks 5-8), `<Projects />` component

- [ ] **Step 1: Create RevealOnScroll**

Create `src/components/motion/RevealOnScroll.tsx`:

```tsx
"use client";

import { motion, useReducedMotion } from "motion/react";

export default function RevealOnScroll({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Rewrite Projects section**

Replace `src/components/sections/Projects.tsx` with:

```tsx
import Image from "next/image";
import me from "@/data/me.json";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  tech: string[];
  url: string;
  image?: string | null;
}

const projects = me.professional.projects as unknown as Project[];
const featured = projects.slice(0, 2);
const archive = projects.slice(2);

function ProjectImage({ project }: { project: Project }) {
  const src = project.image || `https://picsum.photos/seed/${project.id}/800/600`;
  return (
    <div className="relative aspect-video overflow-hidden rounded-xl bg-card">
      <Image
        src={src}
        alt={project.name}
        fill
        className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
      />
    </div>
  );
}

export default function Projects() {
  return (
    <>
      <section id="projects" className="py-24 md:py-32 px-5 md:px-12 max-w-7xl mx-auto">
        <RevealOnScroll>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-6xl tracking-tighter text-foreground mb-16 md:mb-24">
            Selected work
          </h2>
        </RevealOnScroll>

        <div className="space-y-16 md:space-y-24">
          {featured.map((project, idx) => (
            <RevealOnScroll key={project.id} delay={idx * 0.1}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center ${
                  idx % 2 !== 0 ? "md:direction-rtl" : ""
                }`}
              >
                <div className={`${idx % 2 === 0 ? "md:col-span-7" : "md:col-span-7 md:order-2"}`}>
                  <ProjectImage project={project} />
                </div>
                <div className={`${idx % 2 === 0 ? "md:col-span-5" : "md:col-span-5 md:order-1"}`}>
                  <span className="text-xs font-mono text-muted uppercase tracking-wider">
                    {project.type}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-3xl md:text-4xl tracking-tight text-foreground mt-2 mb-4">
                    {project.name}
                  </h3>
                  <p className="text-muted leading-relaxed text-sm max-w-md mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono text-muted/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                    View project <ArrowRight size={16} weight="bold" />
                  </span>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 px-5 md:px-12 max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="flex justify-between items-end mb-16 border-b border-border pb-6">
            <h2 className="text-sm font-medium text-foreground">
              Archive
            </h2>
            <span className="font-mono text-xs text-muted">
              {projects.length} projects
            </span>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {archive.map((project, idx) => (
            <RevealOnScroll
              key={project.id}
              delay={idx * 0.08}
              className={idx % 2 !== 0 ? "md:mt-24" : ""}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-card relative">
                  <ProjectImage project={project} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-foreground/10 backdrop-blur-[2px]">
                    <span className="px-5 py-2.5 bg-foreground text-background font-medium text-xs rounded-lg">
                      View project
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs font-mono text-muted mt-1">
                      {project.tech.join(" / ")}
                    </p>
                  </div>
                  <div className="p-2 rounded-lg border border-border group-hover:bg-accent group-hover:text-white group-hover:border-transparent transition-all text-muted">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Verify and commit**

```bash
yarn dev
```

Open browser, scroll to Projects. Verify:
- "Selected work" headline in Clash Display
- Two featured projects with image + text side by side, alternating
- Archive grid with offset second column
- All on warm light background, accent teal for links
- Scroll reveal animations fire

```bash
git add -A
git commit -m "feat: projects section with featured cards and archive grid"
```

---

### Task 5: About Section

**Files:**
- Modify: `src/components/sections/About.tsx` (full rewrite)

**Interfaces:**
- Consumes: CSS tokens from Task 1, `me.json` data, `RevealOnScroll` from Task 4
- Produces: `<About />` component

- [ ] **Step 1: Rewrite About**

Replace `src/components/sections/About.tsx` with:

```tsx
import me from "@/data/me.json";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

export default function About() {
  const { skills } = me.professional;

  return (
    <section id="about" className="py-24 md:py-32 px-5 md:px-12 max-w-7xl mx-auto">
      <RevealOnScroll>
        <h2 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-6xl tracking-tighter text-foreground mb-8">
          {me.personal.motto}
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div className="space-y-5 max-w-[65ch] mb-16 md:mb-24">
          {me.personal.bio.map((para, i) => (
            <p key={i} className="text-muted leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.15}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-mono text-muted uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {(items as string[]).map((skill) => (
                  <li key={skill} className="text-sm text-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <div className="mt-16 pt-12 border-t border-border">
          <h4 className="text-xs font-mono text-muted uppercase tracking-wider mb-6">
            Focus areas
          </h4>
          <div className="flex flex-wrap gap-3">
            {me.professional.focus.map((x) => (
              <span
                key={x}
                className="text-sm text-foreground border border-border rounded-lg px-4 py-2"
              >
                {x}
              </span>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
```

- [ ] **Step 2: Verify and commit**

```bash
yarn dev
```

Verify: vertical layout, headline top, bio below, skills as plain text lists in 4 columns, focus areas as subtle bordered tags. No card containers, no pulsing dots.

```bash
git add -A
git commit -m "feat: about section with vertical stack and plain text skills"
```

---

### Task 6: Experience Section

**Files:**
- Modify: `src/components/sections/Experience.tsx` (restyle)

**Interfaces:**
- Consumes: CSS tokens from Task 1, `me.json` data, `RevealOnScroll` from Task 4
- Produces: `<Experience />` component

- [ ] **Step 1: Rewrite Experience**

Replace `src/components/sections/Experience.tsx` with:

```tsx
import me from "@/data/me.json";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-5 md:px-12 max-w-7xl mx-auto">
      <RevealOnScroll>
        <h2 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-6xl tracking-tighter text-foreground mb-16 md:mb-24">
          Experience
        </h2>
      </RevealOnScroll>

      <div className="space-y-0">
        {me.professional.experience.map((exp, i) => (
          <RevealOnScroll key={i} delay={i * 0.08}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-8 border-b border-border">
              <div className="md:col-span-3">
                <span className="font-mono text-sm text-muted">
                  {exp.period}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-xl md:text-2xl tracking-tight text-foreground">
                  {exp.role}
                </h3>
                <p className="text-sm text-muted mt-1">
                  {exp.company}
                </p>
              </div>
              <div className="md:col-span-5">
                <p className="text-sm text-muted leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify and commit**

```bash
yarn dev
```

Verify: 3-column grid, Clash Display for role titles, Geist Mono for dates, warm borders.

```bash
git add -A
git commit -m "feat: restyle experience section for light mode"
```

---

### Task 7: Human Section

**Files:**
- Modify: `src/components/sections/Human.tsx` (restyle)

**Interfaces:**
- Consumes: CSS tokens from Task 1, `me.json` data, `RevealOnScroll` from Task 4, Phosphor icons
- Produces: `<Human />` component

- [ ] **Step 1: Rewrite Human**

Replace `src/components/sections/Human.tsx` with:

```tsx
import me from "@/data/me.json";
import { Volleyball, Mountains, Users } from "@phosphor-icons/react/dist/ssr";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

const iconMap: Record<string, React.ReactNode> = {
  "Volleyball Training Lead": <Users size={28} weight="regular" className="text-accent" />,
  "Volleyball Coach": <Volleyball size={28} weight="regular" className="text-accent" />,
  "Ski Instructor": <Mountains size={28} weight="regular" className="text-accent" />,
};

export default function Human() {
  return (
    <section className="py-24 md:py-32 px-5 md:px-12">
      <div className="max-w-7xl mx-auto bg-surface-tint rounded-2xl p-8 md:p-16">
        <RevealOnScroll>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-6xl tracking-tighter text-foreground mb-4">
            Beyond the screen
          </h2>
          <p className="text-muted max-w-xl leading-relaxed mb-12">
            When I'm not writing code, I'm usually on the volleyball court or the slopes. Teaching and coaching has shaped how I communicate and lead in tech.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {me.human.activities.map((activity, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <div className="p-6 bg-background border border-border rounded-xl">
                <div className="mb-4">
                  {iconMap[activity.title] || <Users size={28} weight="regular" className="text-accent" />}
                </div>
                <h4 className="font-bold text-foreground mb-1">
                  {activity.title}
                </h4>
                <p className="text-xs font-mono text-muted mb-3">
                  {activity.organization || "Personal"}
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify and commit**

```bash
yarn dev
```

Verify: light teal-tinted background, Phosphor icons instead of emoji, cards with white bg and warm borders, 3-column grid.

```bash
git add -A
git commit -m "feat: restyle human section with tinted surface and Phosphor icons"
```

---

### Task 8: Contact and Footer

**Files:**
- Modify: `src/components/sections/Contact.tsx` (full rewrite)

**Interfaces:**
- Consumes: CSS tokens from Task 1, `me.json` data, `RevealOnScroll` from Task 4, Phosphor icons
- Produces: `<Contact />` component

- [ ] **Step 1: Rewrite Contact**

Replace `src/components/sections/Contact.tsx` with:

```tsx
import me from "@/data/me.json";
import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  XLogo,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

const socials = [
  { href: me.contact.socials.github, icon: GithubLogo, label: "GitHub" },
  { href: me.contact.socials.linkedin, icon: LinkedinLogo, label: "LinkedIn" },
  { href: me.contact.socials.instagram, icon: InstagramLogo, label: "Instagram" },
  { href: me.contact.socials.twitter, icon: XLogo, label: "X" },
];

export default function Contact() {
  return (
    <footer id="contact" className="pt-24 md:pt-32 pb-12 px-5 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-6xl tracking-tighter text-foreground mb-8">
            Get in touch
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <a
            href={`mailto:${me.contact.email}`}
            className="text-2xl md:text-3xl font-semibold text-foreground hover:text-accent transition-colors"
          >
            {me.contact.email}
          </a>
          <p className="text-muted mt-4 flex items-center gap-2">
            <MapPin size={18} weight="regular" />
            {me.personal.location.label}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="flex gap-3 mt-10">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 border border-border rounded-lg flex items-center justify-center text-muted hover:bg-accent hover:text-white hover:border-transparent transition-all"
                aria-label={label}
              >
                <Icon size={20} weight="regular" />
              </a>
            ))}
          </div>
        </RevealOnScroll>

        <div className="mt-24 pt-6 border-t border-border flex flex-col md:flex-row justify-between text-xs font-mono text-muted">
          <p>
            {new Date().getFullYear()} Nikolai Schunk
          </p>
          <div className="flex gap-8 mt-3 md:mt-0">
            <a
              href={`mailto:${me.contact.secondary_email}`}
              className="hover:text-foreground transition-colors"
            >
              {me.contact.secondary_email}
            </a>
            <a
              href={me.contact.website}
              className="hover:text-foreground transition-colors"
            >
              schunk.dev
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Verify full page and commit**

```bash
yarn dev
```

Open browser. Scroll through the entire page top to bottom. Verify:
- Warm off-white background throughout, no dark sections
- Clash Display headlines on every section
- Cabinet Grotesk body text
- Geist Mono for dates, tech labels, metadata
- Teal accent used consistently for CTAs, links, hover states
- Scroll-reveal animations on all sections
- Nav blurs on scroll
- Mobile responsive (resize browser to < 768px)
- No iconify-icon references remaining (check console for errors)
- No pulsing dots, no giant "LET'S TALK", no bottom dock

```bash
yarn build
```

Expected: clean build, no errors.

```bash
git add -A
git commit -m "feat: contact/footer section, complete light-mode redesign"
```

---

### Task 9: Final Cleanup and Polish

**Files:**
- Potentially modify: any file from Tasks 1-8
- Delete: unused assets from `public/` if any

**Interfaces:**
- Consumes: all previous tasks
- Produces: ship-ready page

- [ ] **Step 1: Remove unused assets**

Check if the old dark-mode SVGs (vercel.svg, next.svg, etc.) are still referenced. If not:

```bash
rm public/vercel.svg public/next.svg public/file.svg public/globe.svg public/window.svg
```

- [ ] **Step 2: Run full build**

```bash
yarn build
```

Expected: clean build, zero warnings.

- [ ] **Step 3: Visual audit in browser**

```bash
yarn dev
```

Walk through the full page in browser at desktop (1440px), tablet (768px), and mobile (375px). Check:
- All fonts loading correctly
- No layout overflow or horizontal scroll
- All links work (anchor links and external)
- Hover/active states on all interactive elements
- Scroll animations fire once, don't re-trigger
- Mobile menu opens/closes correctly
- No console errors

- [ ] **Step 4: Commit final polish**

If any fixes were needed:

```bash
git add -A
git commit -m "fix: final polish and cleanup"
```
