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
