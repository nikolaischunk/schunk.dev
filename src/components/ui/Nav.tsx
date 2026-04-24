"use client";

export default function Nav() {
  const base = "/";

  return (
    <>
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 flex items-center justify-between text-sm font-medium tracking-tight">
        <div className="flex items-center gap-10">
          <a href={base} className="flex items-center group" aria-label="Home">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-black font-extrabold text-xl transition-transform group-hover:rotate-12">
              S.
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8 text-[#888888]">
            <a href="#top" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Floating Bottom Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[110] hidden md:flex items-center gap-2 p-2 rounded-2xl shadow-2xl border border-white/10 bg-[#111111]/80 backdrop-blur-xl">
        <div className="flex items-center gap-1 pr-4 border-r border-[#333333]">
          <a
            href="#top"
            className="p-3 hover:bg-[#222222] rounded-xl transition-all"
            title="Home"
          >
            <iconify-icon icon="lucide:home" className="text-xl text-white" />
          </a>
          <a
            href="#projects"
            className="p-3 hover:bg-[#222222] rounded-xl transition-all"
            title="Projects"
          >
            <iconify-icon
              icon="lucide:layout-grid"
              className="text-xl text-white"
            />
          </a>
          <a
            href="#about"
            className="p-3 hover:bg-[#222222] rounded-xl transition-all"
            title="About"
          >
            <iconify-icon icon="lucide:user" className="text-xl text-white" />
          </a>
          <a
            href="#experience"
            className="p-3 hover:bg-[#222222] rounded-xl transition-all"
            title="Experience"
          >
            <iconify-icon
              icon="lucide:briefcase"
              className="text-xl text-white"
            />
          </a>
          <a
            href="#contact"
            className="p-3 hover:bg-[#222222] rounded-xl transition-all"
            title="Contact"
          >
            <iconify-icon icon="lucide:mail" className="text-xl text-white" />
          </a>
        </div>
        <a
          href="#contact"
          className="px-6 py-3 bg-[#78c2ad] hover:bg-[#5aab95] text-black font-bold text-sm tracking-wide uppercase rounded-xl transition-all"
        >
          Contact
        </a>
      </div>
    </>
  );
}
