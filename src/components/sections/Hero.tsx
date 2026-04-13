import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, User } from "lucide-react";

export function Hero() {
  return (
    <Section id="home" className="pt-40 md:pt-48 pb-12">
      <div className="flex flex-col items-center justify-center text-center w-full mb-16">
        <h1 className="text-[12vw] md:text-[8vw] font-bold leading-none tracking-tighter uppercase whitespace-normal">
          Vivekanand Yadav
        </h1>
        <div className="flex gap-4 md:gap-12 justify-center mt-8 text-xs md:text-sm tracking-[0.2em] text-foreground/70 font-semibold uppercase flex-wrap items-center">
          <span>#Full-Stack</span>
          <span>#Frontend</span>
          <span>#Backend</span>
          <span>#Databases</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-accent/40" />
          <span className="text-accent underline underline-offset-8 decoration-accent/20">SRM University AP '28</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-16">
        <div className="aspect-square max-w-[320px] mx-auto w-full md:mr-auto rounded-3xl overflow-hidden bg-surface relative grayscale hover:grayscale-0 transition-all duration-500 border border-border">
           <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#1A1A1A_10px,#1A1A1A_20px)] opacity-50 absolute inset-0 mix-blend-overlay"></div>
           <div className="absolute inset-x-4 bottom-0 top-0 bg-background/50 backdrop-blur-sm border border-border/50 flex items-end justify-center rounded-t-full shadow-2xl overflow-hidden">
             <img 
               src="/Gemini_Generated_Image_510uon510uon510u-removebg-preview.png" 
               alt="Vivekanand Yadav" 
               className="w-full h-full object-contain object-bottom scale-110"
             />
           </div>
        </div>

        <div className="max-w-xl text-left">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
            Welcome to my portfolio! I'm Vivekanand Yadav, a Software Engineer with a strong foundation in Data Structures, Algorithms, and System Design, with hands-on experience building scalable full-stack applications. I work with TypeScript, Next.js, Node.js, and SQL/NoSQL databases.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects">
              <Button className="gap-2">
                View Projects <ArrowUpRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="gap-2">
                Contact Me <ArrowUpRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-24 border border-border bg-surface/30 rounded-xl overflow-hidden">
        {[
          "Navigating the portfolio feels natural. Everything aligned and easy to use.",
          "David captured our vision, turning it into a polished website.",
          "The experience feels smooth, fast, exactly how a portfolio should be.",
          "Portfolio navigation feels natural. Everything aligned and easy to use."
        ].map((text, i) => (
          <div key={i} className="p-6 md:p-8 border-b sm:border-b-0 lg:border-r border-border last:border-r-0">
            <div className="flex gap-1 text-accent mb-4">
              {[...Array(5)].map((_, j) => (
                <svg key={j} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-foreground/70 italic font-medium leading-relaxed">"{text}"</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
