import me from "@/data/me.json";

const SkillBadge = ({ skill }: { skill: string }) => (
  <span className="px-3 py-1 bg-[#1a1a1a] border border-[#333333] rounded-full text-[10px] font-bold uppercase tracking-widest text-[#888888] transition-all duration-200 hover:border-[#78c2ad] hover:text-[#78c2ad] hover:bg-[#1a1a1a]/80 cursor-default">
    {skill}
  </span>
);

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#78c2ad] animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#666666] uppercase">
              About
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight text-white">
            {me.personal.motto}
          </h2>
          <div className="mt-12 space-y-6">
            {me.personal.bio.map((para, i) => (
              <p key={i} className="text-[#888888] leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-[#111111] border border-[#222222] rounded-[2rem] p-8 md:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#666666] mb-6">
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {me.professional.skills.languages.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#666666] mb-6">
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {me.professional.skills.frontend.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#666666] mb-6">
                  Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {me.professional.skills.backend.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#666666] mb-6">
                  Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {me.professional.skills.tools.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-[#222222]">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#666666] mb-6">
                Technical Focus
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {me.professional.focus.map((x) => (
                  <div
                    key={x}
                    className="flex items-center gap-3 rounded-xl border border-[#222222] bg-[#0f0f0f] px-4 py-3 transition-all duration-200 hover:border-[#78c2ad]/50 hover:bg-[#111111] group cursor-default"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#78c2ad] transition-transform duration-200 group-hover:scale-125" />
                    <span className="text-sm text-[#e8e8e6] transition-colors duration-200 group-hover:text-white">
                      {x}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
