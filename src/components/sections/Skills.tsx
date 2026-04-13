import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs, 
  SiExpress, SiPostgresql, SiMongodb, SiMysql, SiDocker, 
  SiGit, SiGithub, SiC, SiCplusplus, SiPython, SiHtml5, 
  SiCss, SiNumpy, SiPandas, SiJsonwebtokens
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Programming Languages",
    techs: [
      { name: "TypeScript", icon: SiTypescript, url: "https://www.typescriptlang.org/docs/" },
      { name: "C", icon: SiC, url: "https://en.cppreference.com/w/c" },
      { name: "C++", icon: SiCplusplus, url: "https://en.cppreference.com/w/cpp" },
      { name: "Python", icon: SiPython, url: "https://docs.python.org/3/" },
      { name: "SQL", icon: SiMysql, url: "https://www.mysql.com/" },
    ],
    desc: "Building foundations for logic and system design."
  },
  {
    title: "Frontend Development",
    techs: [
      { name: "Next.js", icon: SiNextdotjs, url: "https://nextjs.org/docs" },
      { name: "React.js", icon: SiReact, url: "https://react.dev/" },
      { name: "Tailwind CSS", icon: SiTailwindcss, url: "https://tailwindcss.com/docs" },
      { name: "HTML5", icon: SiHtml5, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS3", icon: SiCss, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    ],
    desc: "Crafting modern, responsive user interfaces."
  },
  {
    title: "Backend Development",
    techs: [
      { name: "Node.js", icon: SiNodedotjs, url: "https://nodejs.org/docs" },
      { name: "Express.js", icon: SiExpress, url: "https://expressjs.com/" },
      { name: "JWT Auth", icon: SiJsonwebtokens, url: "https://jwt.io/introduction/" },
      { name: "REST APIs", icon: SiNodedotjs, url: "https://restfulapi.net/" },
    ],
    desc: "Architecting scalable server-side systems."
  },
  {
    title: "Databases",
    techs: [
      { name: "PostgreSQL", icon: SiPostgresql, url: "https://www.postgresql.org/docs/" },
      { name: "MongoDB", icon: SiMongodb, url: "https://www.mongodb.com/docs/" },
      { name: "MySQL", icon: SiMysql, url: "https://dev.mysql.com/doc/" },
    ],
    desc: "Optimizing data storage and performance."
  },
  {
    title: "Tools & Libraries",
    techs: [
      { name: "Docker", icon: SiDocker, url: "https://docs.docker.com/" },
      { name: "Git", icon: SiGit, url: "https://git-scm.com/doc" },
      { name: "GitHub", icon: SiGithub, url: "https://docs.github.com/" },
      { name: "VS Code", icon: VscCode, url: "https://code.visualstudio.com/docs" },
      { name: "NumPy", icon: SiNumpy, url: "https://numpy.org/doc/" },
      { name: "Pandas", icon: SiPandas, url: "https://pandas.pydata.org/docs/" },
    ],
    desc: "Streamlining development and data analysis."
  }
];

export function Skills() {
  return (
    <Section id="skills" className="py-24 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between mb-20 gap-8">
        <div className="flex flex-col gap-6 h-fit shrink-0">
          <div className="inline-flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-widest h-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            My Skills
          </div>
          <Button className="w-fit text-black font-bold h-10 px-6 uppercase tracking-wider text-xs">
            Start a Project Now ↗
          </Button>
        </div>
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Experience the Impact of Full-Stack Expertise
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            I craft intuitive and engaging digital solutions leveraging a wide array of technologies across the entire stack, from deep core CS foundations to modern cloud tools.
          </p>
        </div>
      </div>

      <div className="flex flex-col border-t border-border">
        {skillCategories.map((category, index) => {
          return (
            <div key={index} className="group border-b border-border py-8 md:py-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 hover:bg-surface/30 transition-all px-4 md:px-8 -mx-4 md:-mx-8 rounded-2xl cursor-pointer">
              <div className="lg:w-1/3">
                <div className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-2">
                  CATEGORY
                </div>
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex-1 w-full lg:px-12">
                <div className="flex flex-wrap gap-4 md:gap-8 items-center">
                  {category.techs.map((tech, i) => {
                    const TechIcon = tech.icon;
                    return (
                      <a 
                        key={i} 
                        href={tech.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 group/icon cursor-pointer"
                      >
                        <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center group-hover/icon:border-accent/50 group-hover/icon:bg-accent/10 transition-all shadow-lg">
                          <TechIcon className="w-6 h-6 text-foreground/70 group-hover/icon:text-accent scale-110" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-tighter text-foreground/40 group-hover/icon:text-accent transition-colors">
                          {tech.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="hidden lg:flex w-12 h-12 rounded-full border border-border items-center justify-center group-hover:bg-foreground group-hover:border-foreground group-hover:text-background transition-colors shrink-0">
                <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  );
}
