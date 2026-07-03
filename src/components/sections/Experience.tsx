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
