import me from "@/data/me.json";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

export default function Human() {
  return (
    <section className="py-24 md:py-32 px-5 md:px-12 max-w-7xl mx-auto">
      <RevealOnScroll>
        <h2 className="font-[family-name:var(--font-display)] font-bold text-3xl md:text-5xl tracking-tight text-foreground mb-16 md:mb-24">
          Beyond the screen
        </h2>
      </RevealOnScroll>

      <div className="space-y-0">
        {me.human.activities.map((activity, i) => (
          <RevealOnScroll key={i} delay={i * 0.08}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-8 items-baseline py-6 md:py-8 border-b border-border">
              <div className="md:col-span-3">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-xl md:text-2xl tracking-tight text-foreground">
                  {activity.title}
                </h3>
              </div>
              <div className="md:col-span-2">
                <span className="font-mono text-sm text-muted">
                  {activity.organization || "Personal"}
                </span>
              </div>
              <div className="md:col-span-7">
                <p className="text-sm text-muted leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
