import Script from "next/script";
import Nav from "@/components/ui/Nav";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Human from "@/components/sections/Human";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <div className="relative">
      <Script
        src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
        strategy="beforeInteractive"
      />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Human />
        <Contact />
      </main>
    </div>
  );
}
