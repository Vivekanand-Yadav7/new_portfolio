import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        
        <Section className="py-20 md:py-32 bg-accent shadow-[0_0_100px_rgba(253,224,71,0.2)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <h2 className="text-4xl md:text-7xl font-black text-black leading-none tracking-tighter uppercase max-w-2xl">
              Surround yourself with an expert
            </h2>
            <Button className="bg-black text-accent hover:bg-zinc-900 px-10 h-16 text-xl font-bold rounded-2xl shrink-0">
              Get a Free Call ↗
            </Button>
          </div>
        </Section>

        <Contact />
      </main>
      <footer className="w-full text-center py-8 text-foreground/50 text-sm border-t border-border">
        © {new Date().getFullYear()} Vivekanand Yadav. All rights reserved.
      </footer>
    </>
  );
}
