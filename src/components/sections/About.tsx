import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Download, User2 } from "lucide-react";

export function About() {
  return (
    <Section id="about" className="py-24 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="order-2 md:order-1 relative">
          <div className="aspect-[4/5] max-w-sm mx-auto rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-border bg-surface">
            <div className="w-full h-full bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,#1A1A1A_10px,#1A1A1A_20px)] opacity-50 absolute inset-0 mix-blend-overlay"></div>
            <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
               <img 
                 src="/Firefly_20260414004058-removebg-preview.png" 
                 alt="Vivekanand Yadav" 
                 className="w-full h-full object-contain object-bottom scale-125 translate-y-8"
               />
            </div>
          </div>
          <div className="hidden md:flex absolute bottom-12 -right-8 bg-surface/80 backdrop-blur-md border border-border p-6 rounded-2xl shadow-xl items-center gap-4">
            <div className="text-4xl font-black text-accent">1+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-foreground/70 leading-snug">
              Years of <br/> Experience
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/5 border border-accent/20 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-8 shadow-[0_0_15px_rgba(253,224,71,0.1)]">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Background
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Software Engineer <br/> & CS Undergraduate
          </h2>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="px-4 py-2 bg-surface border border-border rounded-xl">
              <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-1">University</div>
              <div className="text-sm font-bold text-foreground/90 uppercase tracking-tight">SRM University AP</div>
            </div>
            <div className="px-4 py-2 bg-surface border border-border rounded-xl">
              <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-1">CGPA</div>
              <div className="text-sm font-bold text-accent">9.67 / 10.0</div>
            </div>
          </div>
          <p className="text-foreground/70 text-lg leading-relaxed mb-10">
            I am a Computer Science undergraduate with a strong foundation in Data Structures and Algorithms. Experienced in building scalable full-stack applications using TypeScript, Next.js, Node.js, and SQL/NoSQL databases. I specialize in designing RESTful APIs, implementing secure authentication, and writing clean, maintainable code that delivers exceptional user experiences.
          </p>
          <Button className="gap-2">
            Download Resume <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Section>
  );
}
