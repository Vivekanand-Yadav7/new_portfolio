import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Soul Mate",
    desc: "A personality-based matchmaking platform focused on behavioral compatibility. Designed secure authentication and relational database schemas.",
    tech: "Next.js, TypeScript, PostgreSQL",
    github: "https://github.com/Vivekanand-Yadav7/soule_mate",
    live: "https://love-mate-ltlj.vercel.app/",
    image: "/soul-mate.png"
  },
  {
    title: "College Connect",
    desc: "Gamified learning platform featuring XP-based progression, streak tracking, and collaborative features for students.",
    tech: "React, Node.js, PostgreSQL",
    github: "https://github.com/Vivekanand-Yadav7/college_connect",
    live: "https://college-connect-12v7.vercel.app/",
    image: "/college-connect.png"
  },
  {
    title: "Privy",
    desc: "Privacy-aware API gateway using FastAPI that enforces real-time data access control through policy validation and risk scoring.",
    tech: "FastAPI, PostgreSQL, Docker",
    github: "https://github.com/Vivekanand-Yadav7/privy-hack",
    live: "https://github.com/Vivekanand-Yadav7/privy-hack",
    image: "/privy.png"
  }
];

export function Projects() {
  return (
    <Section id="projects" className="py-24 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between mb-16 gap-8">
        <div className="inline-flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-widest h-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Featured Work
        </div>
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Showcasing My Work for Your Inspiration
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed mb-8">
            Discover a showcase of digital creativity—innovative full-stack projects crafted to demonstrate technical depth and user-centered design.
          </p>
          <Button className="gap-2 bg-accent text-black hover:bg-accent-hover font-semibold">
            Explore all Projects <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className={`group flex flex-col bg-surface border border-border rounded-3xl overflow-hidden hover:border-accent/50 transition-colors cursor-pointer ${idx === 2 ? 'md:col-span-2 md:flex-row' : ''}`}>
            <div className={`relative bg-background p-8 flex items-center justify-center ${idx === 2 ? 'md:w-1/2' : 'aspect-video'}`}>
              <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#1A1A1A_10px,#1A1A1A_20px)] opacity-30 absolute inset-0 mix-blend-overlay"></div>
              <div className="relative z-10 w-full max-w-[80%] aspect-video bg-surface border border-border rounded-xl shadow-2xl flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0 bg-background/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                  <Button className="bg-accent text-black font-bold px-6 py-2 rounded-lg gap-2 scale-90 group-hover:scale-100 transition-transform">
                    View Project <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-foreground/30 font-bold tracking-widest uppercase text-lg text-center px-4">
                    {project.title} Preview
                  </div>
                )}
              </div>
            </div>
            <div className={`p-8 md:p-10 flex flex-col justify-center ${idx === 2 ? 'md:w-1/2' : ''}`}>
               <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
               <p className="text-foreground/70 mb-6 leading-relaxed flex-grow">{project.desc}</p>
               
               <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.split(", ").map(t => (
                  <span key={t} className="px-3 py-1 bg-background border border-border rounded-full text-xs font-semibold text-foreground/80 tracking-wide uppercase">
                    {t}
                  </span>
                ))}
               </div>

               <div className="flex items-center gap-4 mt-auto">
                 <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                   <Button variant="outline" className="w-full gap-2">
                     <FaGithub className="w-4 h-4" /> Code
                   </Button>
                 </a>
                 <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                   <Button className="w-full gap-2">
                     <Globe className="w-4 h-4" /> Live
                   </Button>
                 </a>
               </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
