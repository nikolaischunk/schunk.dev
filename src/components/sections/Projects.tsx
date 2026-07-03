import Image from "next/image";
import me from "@/data/me.json";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  tech: string[];
  url: string;
  image?: string | null;
}

const projects = me.professional.projects as unknown as Project[];
const featured = projects.slice(0, 2);
const archive = projects.slice(2);

function ProjectImage({ project }: { project: Project }) {
  const src = project.image || `https://picsum.photos/seed/${project.id}/800/600`;
  return (
    <div className="relative aspect-video overflow-hidden rounded-xl bg-card">
      <Image
        src={src}
        alt={project.name}
        fill
        className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
      />
    </div>
  );
}

export default function Projects() {
  return (
    <>
      <section id="projects" className="py-24 md:py-32 px-5 md:px-12 max-w-7xl mx-auto">
        <RevealOnScroll>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-6xl tracking-tighter text-foreground mb-16 md:mb-24">
            Selected work
          </h2>
        </RevealOnScroll>

        <div className="space-y-16 md:space-y-24">
          {featured.map((project, idx) => (
            <RevealOnScroll key={project.id} delay={idx * 0.1}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
              >
                <div className={`${idx % 2 === 0 ? "md:col-span-7" : "md:col-span-7 md:order-2"}`}>
                  <ProjectImage project={project} />
                </div>
                <div className={`${idx % 2 === 0 ? "md:col-span-5" : "md:col-span-5 md:order-1"}`}>
                  <span className="text-xs font-mono text-muted uppercase tracking-wider">
                    {project.type}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-3xl md:text-4xl tracking-tight text-foreground mt-2 mb-4">
                    {project.name}
                  </h3>
                  <p className="text-muted leading-relaxed text-sm max-w-md mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono text-muted/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                    View project <ArrowRight size={16} weight="bold" />
                  </span>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 px-5 md:px-12 max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="flex justify-between items-end mb-16 border-b border-border pb-6">
            <h2 className="text-sm font-medium text-foreground">
              Archive
            </h2>
            <span className="font-mono text-xs text-muted">
              {projects.length} projects
            </span>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {archive.map((project, idx) => (
            <RevealOnScroll
              key={project.id}
              delay={idx * 0.08}
              className={idx % 2 !== 0 ? "md:mt-24" : ""}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-card relative">
                  <ProjectImage project={project} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-foreground/10 backdrop-blur-[2px]">
                    <span className="px-5 py-2.5 bg-foreground text-background font-medium text-xs rounded-lg">
                      View project
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs font-mono text-muted mt-1">
                      {project.tech.join(" / ")}
                    </p>
                  </div>
                  <div className="p-2 rounded-lg border border-border group-hover:bg-accent group-hover:text-white group-hover:border-transparent transition-all text-muted">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
