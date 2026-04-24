import Image from "next/image";
import me from "@/data/me.json";

interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  tech: string[];
  url: string;
  image?: string | null;
}

export default function Projects() {
  const featuredProjects = (me.professional.projects as unknown as Project[]).slice(0, 2);
  const archiveProjects = (me.professional.projects as unknown as Project[]).slice(2);

  return (
    <>
      {/* Benefits Section - Project Highlight */}
      <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-2 h-2 rounded-full bg-[#78c2ad] animate-pulse" />
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#666666] uppercase">
            Built & Shipped
          </span>
        </div>

        <h2 className="text-4xl md:text-7xl font-medium leading-[1.05] tracking-tight text-white max-w-5xl mb-24">
          Practical engineering focused on building simple,{" "}
          <span className="text-[#666666]">structured</span> solutions that solve
          real-world problems.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`rounded-[2.5rem] p-10 md:p-12 min-h-[520px] flex flex-col justify-between relative overflow-hidden group transition-all duration-500 ${
                idx === 0
                  ? "bg-[#111111] hover:bg-[#161616]"
                  : "bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#222222] hover:border-[#78c2ad]/30"
              }`}
            >
              <div className="absolute top-10 right-10 bg-[#1a1a1a] text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest text-[#888888] border border-[#333333]">
                {project.type}
              </div>

              {/* Image Placeholder */}
              <div className="mb-12 relative aspect-video rounded-3xl overflow-hidden bg-[#0a0a0a]/50 border border-[#222222] group-hover:border-[#78c2ad]/30 transition-all duration-500">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2 opacity-20 group-hover:opacity-40 transition-opacity">
                      <iconify-icon icon="lucide:image" className="text-4xl" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        Image Placeholder
                      </span>
                    </div>
                    {/* Abstract subtle glows */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#78c2ad]/5 blur-[60px] rounded-full group-hover:bg-[#78c2ad]/10 transition-colors" />
                      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/5 blur-[60px] rounded-full group-hover:bg-purple-500/10 transition-colors" />
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-auto">
                <h3 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-2 text-white">
                  {project.name}.
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-bold text-[#444444] uppercase tracking-widest"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-8 text-sm leading-relaxed text-[#888888] max-w-md">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 text-[#78c2ad] font-bold text-xs uppercase tracking-[0.2em] group/link"
                >
                  Explore project
                  <iconify-icon
                    icon="lucide:arrow-right"
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Gallery */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20 border-b border-[#222222] pb-10">
          <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-[#78c2ad]">
            Project archive
          </h2>
          <span className="hidden md:block text-[#444444] text-xs font-medium uppercase tracking-widest">
            {me.professional.projects.length} Total — 2026
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
          {archiveProjects.map((project, idx) => (
            <article
              key={project.id}
              className={`group cursor-pointer ${idx % 2 !== 0 ? "md:mt-24" : ""}`}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <div className="aspect-[4/3] overflow-hidden bg-[#111111] rounded-sm relative group-hover:rounded-xl transition-all duration-500">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(120,194,173,0.15),_transparent_55%),radial-gradient(circle_at_70%_80%,_rgba(124,58,237,0.1),_transparent_55%)] opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
                    <span className="px-6 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-full">
                      View Site
                    </span>
                  </div>
                </div>
                <div className="mt-8 flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight mb-2 group-hover:text-[#78c2ad] transition-colors text-white">
                      {project.name.toUpperCase()}
                    </h3>
                    <p className="text-[#666666] text-[10px] font-bold uppercase tracking-[0.2em]">
                      {project.tech.join(" / ")}
                    </p>
                  </div>
                  <div className="p-3 rounded-full border border-[#333333] group-hover:bg-[#78c2ad] group-hover:text-black group-hover:border-transparent transition-all duration-300 text-white">
                    <iconify-icon
                      icon="lucide:arrow-up-right"
                      className="text-2xl"
                    />
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
