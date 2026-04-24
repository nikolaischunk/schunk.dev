import me from "@/data/me.json";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative h-screen w-full flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#050505_70%)] opacity-60" />
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-white font-bold tracking-[-0.05em] leading-[0.9] text-[13vw]">
          {me.personal.name.split(" ")[0]}
        </h1>
        <p className="mt-6 text-sm md:text-base text-[#888888] tracking-tight max-w-xl mx-auto px-6">
          {me.personal.tagline} Based in {me.personal.location.city}.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#78c2ad] hover:bg-[#5aab95] text-black font-bold text-sm tracking-wide uppercase rounded-xl transition-all"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-[#111111] hover:bg-white hover:text-black text-white font-bold text-sm tracking-wide uppercase rounded-xl transition-all border border-[#333333]"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 right-8 md:right-12 text-right">
        <a
          href={`mailto:${me.contact.email}`}
          className="text-white font-medium hover:text-[#78c2ad] transition-colors border-b-2 border-white hover:border-[#78c2ad] pb-1"
        >
          {me.contact.email}
        </a>
      </div>
    </header>
  );
}
