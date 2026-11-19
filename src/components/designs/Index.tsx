"use client";

import Image from "next/image";
import { useState } from "react";
import { me, projects, shortUrl, skillGroups, socials } from "./data";

// The project names are the hero. Hovering a row floods it with teal and
// shows its screenshot at the cursor.
export default function Index() {
  const [hover, setHover] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const active = projects.find((p) => p.id === hover && p.image);

  return (
    <div className="min-h-svh bg-[#eef1f0] px-5 text-[#0b0f0e] md:px-10">
      <header className="flex flex-wrap items-baseline gap-x-6 gap-y-1 pb-16 pt-20 md:pt-8">
        <h1 className="text-lg font-semibold">{me.personal.name}</h1>
        <p className="text-black/55">
          {me.professional.role}, {me.personal.location.city}. {me.personal.tagline}
        </p>
      </header>

      <ul
        id="projects"
        className="-mx-5 border-t border-black md:-mx-10"
        onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
        onMouseLeave={() => setHover(null)}
      >
        {projects.map((p) => (
          <li key={p.id} className="border-b border-black" onMouseEnter={() => setHover(p.id)}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-4 px-5 py-6 transition-colors hover:bg-accent md:grid-cols-[1fr_22rem] md:items-end md:px-10 md:py-8"
            >
              <span className="text-[13vw] font-bold leading-[0.9] tracking-[-0.05em] md:text-[8.5vw]">{p.name}</span>
              <span className="text-sm leading-relaxed text-black/65 group-hover:text-black">
                <span className="mb-2 block font-mono text-xs uppercase tracking-widest">
                  {p.type} · {p.tech.join(", ")}
                </span>
                {p.description}
                <span className="mt-2 block font-medium text-black underline underline-offset-4">
                  {shortUrl(p.url)} ↗
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      {active?.image && (
        <div
          aria-hidden
          className="pointer-events-none fixed z-50 hidden aspect-[16/10] w-[26vw] overflow-hidden rounded-md border-2 border-black shadow-[8px_8px_0_#0b0f0e] md:block"
          style={{ left: pos.x + 24, top: pos.y - 120 }}
        >
          <Image src={active.image} alt="" fill sizes="26vw" className="object-cover" />
        </div>
      )}

      <section id="about" className="grid gap-12 py-32 md:grid-cols-12">
        <h2 className="text-4xl font-medium leading-[1.05] tracking-tight md:col-span-6 md:text-6xl">
          {me.personal.motto}
        </h2>
        <div className="space-y-5 leading-relaxed text-black/65 md:col-span-5 md:col-start-8">
          {me.personal.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <p className="border-l-4 border-accent pl-4 text-black">{me.personal.philosophy}</p>
        </div>
      </section>

      <section className="grid gap-8 border-t border-black py-16 sm:grid-cols-2 md:grid-cols-4">
        {skillGroups.map(([label, items]) => (
          <div key={label}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-black/45">{label}</h3>
            <ul className="mt-4 space-y-1">
              {items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section id="experience" className="border-t border-black">
        {me.professional.experience.map((e) => (
          <div key={e.role} className="grid gap-3 border-b border-black/15 py-10 md:grid-cols-12 md:gap-8">
            <span className="font-mono text-sm text-black/45 md:col-span-2">{e.period}</span>
            <div className="md:col-span-4">
              <h3 className="text-2xl font-semibold">{e.role}</h3>
              <p className="mt-1 text-sm text-black/55">{e.company}</p>
            </div>
            <p className="leading-relaxed text-black/65 md:col-span-5 md:col-start-8">{e.description}</p>
          </div>
        ))}
        {me.human.activities.map((a) => (
          <div key={a.title} className="grid gap-3 border-b border-black/15 py-10 md:grid-cols-12 md:gap-8">
            <span className="font-mono text-sm text-black/45 md:col-span-2">Outside work</span>
            <div className="md:col-span-4">
              <h3 className="text-2xl font-semibold">{a.title}</h3>
              {a.organization && <p className="mt-1 text-sm text-black/55">{a.organization}</p>}
            </div>
            <p className="leading-relaxed text-black/65 md:col-span-5 md:col-start-8">{a.description}</p>
          </div>
        ))}
      </section>

      <footer id="contact" className="-mx-5 bg-accent px-5 py-24 md:-mx-10 md:px-10 md:py-32">
        <a
          href={`mailto:${me.contact.email}`}
          className="block w-fit text-[9vw] font-bold leading-none tracking-[-0.05em] hover:underline md:text-[7vw]"
        >
          {me.contact.email}
        </a>
        <div className="mt-10 flex flex-wrap justify-between gap-6 text-sm">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-medium">
            {socials.map(([label, href]) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="font-mono text-xs text-black/60">
            © {new Date().getFullYear()} · {me.personal.location.label}
          </p>
        </div>
      </footer>
    </div>
  );
}
