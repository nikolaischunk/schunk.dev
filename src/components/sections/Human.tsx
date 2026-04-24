import me from "@/data/me.json";

export default function Human() {
  return (
    <section id="human" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-[#111111] rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#78c2ad]/5 blur-[100px] rounded-full" />

        <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">
              Beyond the screen.
            </h2>
            <p className="text-[#888888] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              When I&apos;m not writing code, I&apos;m usually on the volleyball
              court or the slopes. Teaching and coaching has shaped how I
              communicate and lead in tech.
            </p>
          </div>

          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {me.human.activities.map((activity, i) => (
              <div
                key={i}
                className="p-8 bg-[#0a0a0a] border border-[#222222] rounded-3xl hover:border-[#78c2ad]/30 transition-all"
              >
                <div className="text-3xl mb-4">{activity.icon}</div>
                <h4 className="text-white font-bold mb-1">{activity.title}</h4>
                <p className="text-[#666666] text-[10px] font-bold uppercase tracking-widest mb-4">
                  {activity.organization || "Personal"}
                </p>
                <p className="text-[#888888] text-xs leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
