import me from "@/data/me.json";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-16">
        <div className="w-2 h-2 rounded-full bg-[#78c2ad] animate-pulse" />
        <span className="text-[10px] font-bold tracking-[0.3em] text-[#666666] uppercase">
          Professional Path
        </span>
      </div>

      <div className="space-y-12">
        {me.professional.experience.map((exp, i) => (
          <div
            key={i}
            className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-[#111111] pb-12"
          >
            <div className="md:col-span-3">
              <span className="text-[#444444] font-mono text-sm">
                {exp.period}
              </span>
            </div>
            <div className="md:col-span-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-[#78c2ad] transition-colors">
                {exp.role}
              </h3>
              <p className="text-[#666666] uppercase tracking-widest text-[10px] font-bold mt-1">
                {exp.company}
              </p>
            </div>
            <div className="md:col-span-5">
              <p className="text-[#888888] text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
