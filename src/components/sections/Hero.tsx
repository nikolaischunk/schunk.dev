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
