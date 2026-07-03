# Portfolio Redesign - Design Spec

## Design Read

Developer portfolio (schunk.dev) for recruiters, potential clients, and collaborators. Bold editorial-agency aesthetic on warm light mode. Generous whitespace, asymmetric layouts, scroll-driven motion.

**Dials:** `VARIANCE 8 / MOTION 7 / DENSITY 3`

## Typography

- **Display:** Clash Display (Black/Bold) - headlines only, `tracking-tighter`, large scale
- **Body:** Cabinet Grotesk - all UI, body text, nav, labels
- **Mono:** Geist Mono (existing) - dates, tech labels, small metadata
- Both Clash Display and Cabinet Grotesk are available from Fontshare. Self-host via `@font-face` with `font-display: swap` since they are not on Google Fonts / `next/font/google`.

## Color Palette

Light mode only. Tokens structured for future dark mode.

| Token           | Value     | Usage                          |
|-----------------|-----------|--------------------------------|
| `--background`  | `#F5F2ED` | Page background (warm off-white) |
| `--foreground`  | `#1A1816` | Primary text (warm near-black)  |
| `--accent`      | `#2A9D8F` | Links, CTAs, active states      |
| `--accent-dim`  | `#238578` | Hover/pressed accent            |
| `--muted`       | `#8C8578` | Secondary text                  |
| `--border`      | `#E0DCD6` | Dividers, borders               |
| `--card`        | `#EDEAE4` | Subtle card/section backgrounds |
| `--surface-tint`| `#EEF7F5` | Light accent-tinted sections    |

## Corner Radius Scale

- Default: 0 (sharp edges)
- Interactive elements (buttons): 8px
- Cards/containers: 12px
- No pills except for small tags

## Icons

Replace Iconify CDN script with `@phosphor-icons/react` (npm package). Regular weight, `strokeWidth` 1.5 standardized.

## Navigation

- **Top nav only.** Kill the floating bottom dock.
- Logo "S." left, nav links right. Height: 64px.
- Links: Cabinet Grotesk medium, sentence case.
- Transparent on hero. On scroll: warm off-white background with `backdrop-blur`.
- Active section indicated by accent color on the link text.
- Mobile: hamburger menu (simple slide-in or full-screen overlay).

## Sections

### Hero

- Asymmetric left-aligned layout.
- Full name stacked: "Nikolai" / "Schunk" in Clash Display Black, `text-7xl md:text-[8rem]`, `tracking-tighter`, `leading-[0.9]`.
- Tagline below in Cabinet Grotesk, muted color, max 20 words.
- Single CTA: "View projects" - solid accent background, dark text, 8px radius.
- Right side: empty space. The whitespace is the design.
- No email in hero, no second CTA.
- `min-h-[100dvh]`, name vertically centered or slightly above center.
- Entry animation: name reveals upward with opacity, tagline and CTA stagger in after.

### Projects (Featured)

- No eyebrow label.
- Section headline in Clash Display Bold, left-aligned: something like "Selected work" (short, confident).
- Two featured projects stacked vertically, each spanning full width.
- Each card: image takes ~60% width, text block on the other side.
- Card 1: image left, text right. Card 2: image right, text left.
- Project title in Clash Display Bold (~3xl-4xl).
- Description in Cabinet Grotesk, muted text.
- Tech tags in Geist Mono, small, subtle.
- Link: "View project" with arrow, accent color.
- Hover: subtle image scale (1.02) + slight card lift.
- Images: use real images where available. For missing images, use `https://picsum.photos/seed/{project-id}/800/600`.
- Cards have warm-gray border, 12px radius, no shadow.

### Projects (Archive)

- Small section header: "Archive" in Cabinet Grotesk, plus total count in Geist Mono.
- 2-column offset grid (second column offset down by ~6rem).
- Image-dominant cards, aspect-ratio 4:3.
- On hover: arrow icon overlay, subtle image zoom.
- Project name below image in Cabinet Grotesk Bold, tech in Geist Mono.

### About

- Vertically stacked (no side-by-side split header).
- Headline top: Clash Display Bold, full width.
- Bio paragraphs below, `max-w-[65ch]`, Cabinet Grotesk, muted text.
- Skills grid below bio, spanning full width.
- Skills organized as simple text lists grouped by category (Languages, Frontend, Backend, Tools).
- Category labels in Geist Mono, small, uppercase.
- Skill items as plain text, not pill badges.
- Technical Focus items listed simply, no card containers, no pulsing dots.

### Experience

- 3-column grid: period (Geist Mono) / role + company / description.
- Role in Clash Display Bold (~2xl).
- Company in Cabinet Grotesk, muted, normal case.
- Description in Cabinet Grotesk, muted.
- Subtle bottom border between entries (`--border` color).
- No eyebrow.

### Human ("Beyond the screen")

- Full-width section with `--surface-tint` background.
- Headline in Clash Display Bold, left-aligned.
- Body text below headline.
- Activity cards in a 2-column grid below.
- Cards: warm-gray border, 12px radius, white background.
- Phosphor icons instead of emoji.
- Organization in Geist Mono, small.

### Contact / Footer

- No giant "LET'S TALK" display text.
- Section heading in Clash Display Bold: "Get in touch".
- Email rendered large and linked (~2xl-3xl), Cabinet Grotesk semibold.
- Location below, muted text.
- Social icons: simple bordered circles, warm gray border, hover fill to accent.
- Footer bottom: copyright + links in Geist Mono, very small, muted.

## Motion

Using `framer-motion` (already installed, import from `motion/react`).

- **Scroll-reveal stagger:** sections fade in with `opacity: 0 -> 1` and `y: 24 -> 0`, 0.6s duration, spring ease `[0.16, 1, 0.3, 1]`. Using Motion's `whileInView` with `viewport: { once: true }`.
- **Hero name:** clip/mask reveal upward on mount, staggered lines.
- **Project cards:** fade + Y offset on scroll entry.
- **Nav blur transition:** opacity/backdrop-filter driven by scroll position via `useScroll` + `useTransform`.
- **Hover states:** subtle scale on buttons (`scale(1.02)`), image zoom on cards.
- **Active/pressed:** `scale(0.98)` on button press.
- All motion wrapped with `useReducedMotion()` - degrade to instant/static.
- All animated components are `'use client'` leaf components.

## Mobile Behavior

- All asymmetric layouts collapse to single-column below `md` (768px).
- Hero name scales down: `text-5xl` on mobile.
- Featured project cards: image on top, text below (stacked).
- Nav: hamburger on mobile, slides in from right.
- `px-5` horizontal padding on mobile, `px-12` on desktop.
- `max-w-7xl mx-auto` container on all sections.

## Technical Notes

- Branch: `newb`
- Keep existing `me.json` data structure, no content changes.
- Self-host Clash Display and Cabinet Grotesk (download from Fontshare, place in `public/fonts/`).
- Remove Iconify CDN `<Script>` tag and `iconify-icon.d.ts` type declaration.
- Install `@phosphor-icons/react`.
- CSS tokens in `globals.css` using `:root` variables, mapped to Tailwind via `@theme inline`.
- Dark mode: tokens structured with `[data-theme="dark"]` or `@media (prefers-color-scheme: dark)` ready, but not populated in this phase.

## Out of Scope

- Dark mode implementation (tokens wired, visuals deferred).
- Blog / writing section.
- Internationalization (next-intl is installed but not used in redesign scope).
- Contact form (email link is sufficient).
- Analytics / tracking.

## Follow-ups

- Add dark mode as a future iteration once light mode is solid.
- Replace Picsum placeholder images with real project screenshots.
- Consider adding a subtle grain/noise texture overlay on the background for extra depth.
