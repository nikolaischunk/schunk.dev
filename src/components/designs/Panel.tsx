import Image from "next/image";
import { me, projects, shortUrl, skillGroups, socials } from "./data";

// Name and contact live on a teal panel that never scrolls away;
// the work scrolls past it on the dark side.
export default function Panel() {
  return (
    <div className="bg-[#0a0c0c] text-white md:grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <aside className="flex flex-col justify-between gap-12 bg-accent px-5 pb-10 pt-20 text-black md:sticky md:top-0 md:h-svh md:px-10 md:pt-10">
        <div>
          <h1 className="text-[19vw] font-extrabold leading-[0.82] tracking-[-0.04em] md:text-[7.5vw]">
            Nikolai
            <br />
            Schunk
          </h1>
          <p className="mt-8 max-w-sm text-lg leading-snug">{me.personal.tagline}</p>
        </div>

        <div className="space-y-6">
          <a
            href={`mailto:${me.contact.email}`}
            className="hidden w-fit text-2xl font-bold underline md:block decoration-2 underline-offset-4 hover:decoration-4 md:text-3xl"
          >
            {me.contact.email}
          </a>
          <p className="font-mono text-sm text-black/70">
            {me.professional.role} · {me.personal.location.label} · {me.personal.availability}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            {socials.map(([label, href]) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main className="px-5 pb-16 md:px-16 md:pb-0">
        <section id="projects" className="space-y-24 py-24">
          {projects.map((p) => (
            <article key={p.id}>
              {p.image && (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-white/5">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(min-width: 768px) 55vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </a>
              )}
              <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{p.name}</h2>
                <span className="font-mono text-xs uppercase tracking-widest text-white/50">{p.type}</span>
              </div>
              <p className="mt-3 max-w-xl leading-relaxed text-white/65">{p.description}</p>
              <p className="mt-3 font-mono text-xs text-white/40">{p.tech.join(" / ")}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
              >
                {shortUrl(p.url)} ↗
              </a>
            </article>
          ))}
        </section>

        <section id="about" className="border-t border-white/10 py-24">
          <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-5xl">{me.personal.motto}</h2>
          <div className="mt-10 max-w-2xl space-y-5 leading-relaxed text-white/65">
            {me.personal.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <dl className="mt-14 grid gap-6 sm:grid-cols-2">
            {skillGroups.map(([label, items]) => (
              <div key={label}>
                <dt className="font-mono text-xs uppercase tracking-widest text-white/40">{label}</dt>
                <dd className="mt-2 text-sm leading-relaxed">{items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="experience" className="border-t border-white/10 py-24">
          <ol className="space-y-12">
            {me.professional.experience.map((e) => (
              <li key={e.role} className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-8">
                <span className="font-mono text-sm text-white/40">{e.period}</span>
                <div>
                  <h3 className="text-xl font-semibold">{e.role}</h3>
                  <p className="text-sm text-accent">{e.company}</p>
                  <p className="mt-3 max-w-xl leading-relaxed text-white/65">{e.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="human" className="border-t border-white/10 py-24">
          <p className="max-w-xl text-xl leading-relaxed">
            When I&apos;m not writing code, I&apos;m usually on the volleyball court or the slopes. Teaching and
            coaching has shaped how I communicate and lead in tech.
          </p>
          <ul className="mt-10 space-y-6">
            {me.human.activities.map((a) => (
              <li key={a.title}>
                <h3 className="font-semibold">
                  {a.title}
                  {a.organization && <span className="font-normal text-white/50"> · {a.organization}</span>}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-white/65">{a.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <footer className="border-t border-white/10 py-10 font-mono text-xs text-white/40">
          © {new Date().getFullYear()} Nikolai Schunk ·{" "}
          <a href={`mailto:${me.contact.secondary_email}`} className="hover:text-white/70">
            {me.contact.secondary_email}
          </a>
        </footer>
      </main>

      {/* on phones the panel scrolls away, so the email stays one tap away down here */}
      <a
        href={`mailto:${me.contact.email}`}
        className="fixed inset-x-0 bottom-0 z-[150] flex items-center justify-between border-t-2 border-accent bg-black/90 px-5 py-3 backdrop-blur md:hidden"
      >
        <span className="font-mono text-xs text-white/60">{me.personal.availability}</span>
        <span className="font-bold text-accent">{me.contact.email}</span>
      </a>
    </div>
  );
}
