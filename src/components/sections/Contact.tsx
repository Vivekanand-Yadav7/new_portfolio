"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, ArrowUpRight, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <Section id="contact" className="py-24 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
           <div className="inline-flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Contact
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
            Let's build something extraordinary together.
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed mb-12 max-w-md">
            I'm currently available for freelance work or full-time opportunities. Let's get in touch and discuss your next big idea!
          </p>

          <div className="flex flex-col gap-6">
            <a href="tel:+918177036112" className="flex items-center gap-4 text-xl font-medium hover:text-accent transition-colors group cursor-pointer">
              <div className="w-14 h-14 bg-surface border border-border rounded-full flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all">
                <Phone className="w-6 h-6" />
              </div>
              +91 8177036112
            </a>
            <a href="mailto:vivekanand_yadav@srmap.edu.in" className="flex items-center gap-4 text-xl font-medium hover:text-accent transition-colors group cursor-pointer">
              <div className="w-14 h-14 bg-surface border border-border rounded-full flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all">
                <Mail className="w-6 h-6" />
              </div>
              vivekanand_yadav@srmap.edu.in
            </a>
            <a href="https://www.linkedin.com/in/vivekanand-yadav7/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl font-medium hover:text-accent transition-colors group cursor-pointer">
              <div className="w-14 h-14 bg-surface border border-border rounded-full flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all">
                <FaLinkedin className="w-6 h-6" />
              </div>
              LinkedIn
            </a>
            <a href="https://github.com/Vivekanand-Yadav7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl font-medium hover:text-accent transition-colors group cursor-pointer">
              <div className="w-14 h-14 bg-surface border border-border rounded-full flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all">
                <FaGithub className="w-6 h-6" />
              </div>
              GitHub
            </a>
          </div>
        </div>

        <div className="bg-surface/50 p-8 md:p-12 rounded-3xl border border-border shadow-2xl">
          <h3 className="text-3xl font-bold mb-8">Send me a message</h3>
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col md:flex-row gap-6">
              <label className="flex-1 flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-foreground/50">Name</span>
                <input type="text" placeholder="John Doe" className="bg-background border border-border px-4 py-4 rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all w-full" />
              </label>
              <label className="flex-1 flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-foreground/50">Email</span>
                <input type="email" placeholder="john@example.com" className="bg-background border border-border px-4 py-4 rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all w-full" />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-foreground/50">Subject</span>
              <input type="text" placeholder="Project Inquiry" className="bg-background border border-border px-4 py-4 rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all w-full" />
            </label>
            <label className="flex flex-col gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-foreground/50">Message</span>
              <textarea placeholder="Tell me about your project..." rows={5} className="bg-background border border-border px-4 py-4 rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all w-full resize-none"></textarea>
            </label>
            
            <Button className="w-full gap-2 text-lg h-14 font-bold">
              Send Message <ArrowUpRight className="w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}
