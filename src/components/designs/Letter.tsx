import Image from "next/image";
import { me, projects, socials } from "./data";

const link = "text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent";
const label = "font-sans text-xs uppercase tracking-widest text-[#6f8f86]";

// One column of prose on a dark green ground. The projects sit inside the
// sentences, each with a screenshot the height of a line.
export default function Letter() {
  return (
    <div className="min-h-svh bg-[#0d1f1b]">
      <main className="mx-auto max-w-[38rem] px-5 pb-32 pt-28 font-serif text-[1.25rem] leading-[1.65] text-[#cfdcd8] md:pt-36">
        <h1 className="font-sans text-sm font-semibold tracking-tight text-white">{me.personal.name}</h1>
        <p className="font-mono text-xs text-[#6f8f86]">
          {me.professional.role} · {me.personal.location.label}
        </p>

        <div className="mt-14 space-y-6">
          {me.personal.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <p className="italic text-white">{me.personal.philosophy}</p>
        </div>

        <h2 id="projects" className={`mt-20 ${label}`}>
          Things I&apos;ve built
        </h2>
        <div className="mt-6 space-y-6">
          {projects.map((p) => (
            <p key={p.id}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className={link}>
                {p.name}
              </a>
              {p.image && (
                <span className="relative mx-2 inline-block h-[1.1em] w-[1.76em] translate-y-[0.15em] overflow-hidden rounded-[3px] border border-white/15 align-baseline">
                  <Image src={p.image} alt="" fill sizes="40px" className="object-cover" />
                </span>
              )}{" "}
              {p.description} <span className="font-mono text-sm text-[#6f8f86]">{p.tech.join(", ")}</span>
            </p>
          ))}
        </div>

        <h2 id="experience" className={`mt-20 ${label}`}>
          Work
        </h2>
        <div className="mt-6 space-y-6">
          {me.professional.experience.map((e) => (
            <p key={e.role}>
              <span className="text-white">
                {e.role}, {e.company}
              </span>{" "}
              <span className="font-mono text-sm text-[#6f8f86]">{e.period}</span>. {e.description}
            </p>
          ))}
        </div>

        <h2 className={`mt-20 ${label}`}>Outside work</h2>
        <div className="mt-6 space-y-6">
          <p>
            When I&apos;m not writing code, I&apos;m usually on the volleyball court or the slopes. Teaching and
            coaching has shaped how I communicate and lead in tech.
          </p>
          {me.human.activities.map((a) => (
            <p key={a.title}>
              <span className="text-white">{a.title}</span>
              {a.organization && ` (${a.organization})`}. {a.description}
            </p>
          ))}
        </div>

        <p id="contact" className="mt-20 text-white">
          Write to{" "}
          <a href={`mailto:${me.contact.email}`} className={link}>
            {me.contact.email}
          </a>
          . I&apos;m also on{" "}
          {socials.map(([name, href], i) => (
            <span key={name}>
              <a href={href} target="_blank" rel="noopener noreferrer" className={link}>
                {name}
              </a>
              {i < socials.length - 2 ? ", " : i === socials.length - 2 ? " and " : "."}
            </span>
          ))}
        </p>
      </main>
    </div>
  );
}
