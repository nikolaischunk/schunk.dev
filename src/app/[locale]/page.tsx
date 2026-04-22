import Nav from "@/components/ui/Nav";
import MouseGlow from "@/components/ui/MouseGlow";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Human from "@/components/sections/Human";
import Stack from "@/components/sections/Stack";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="relative">
      <MouseGlow />
      <div className="relative z-10">
        <Nav locale={locale} />
        <Hero />
        <About />
        <Human />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
