import me from "@/data/me.json";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

export default function About() {
  const { skills } = me.professional;

  return (
    <section id="about" className="py-24 md:py-32 px-5 md:px-12 max-w-7xl mx-auto">
      <RevealOnScroll>
        <h2 className="font-[family-name:var(--font-display)] font-bold text-3xl md:text-5xl tracking-tight text-foreground mb-8">
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
