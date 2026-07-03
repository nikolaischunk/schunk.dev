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
      <div className="max-w-7xl mx-auto bg-surface-tint rounded-xl p-8 md:p-16">
        <RevealOnScroll>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-6xl tracking-tighter text-foreground mb-4">
            Beyond the screen
          </h2>
          <p className="text-muted max-w-xl leading-relaxed mb-12">
            When I&apos;m not writing code, I&apos;m usually on the volleyball court or the slopes. Teaching and coaching has shaped how I communicate and lead in tech.
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
