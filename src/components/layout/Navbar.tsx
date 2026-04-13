import Link from "next/link";
import React from "react";
import { UserCircle } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <UserCircle className="w-8 h-8 text-accent transition-transform group-hover:scale-110" />
          <span className="font-bold text-xl tracking-tight">Vivekanand Yadav</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase">
          <Link href="#home" className="text-foreground/80 hover:text-accent transition-colors cursor-pointer">Home</Link>
          <Link href="#about" className="text-foreground/80 hover:text-accent transition-colors cursor-pointer">About</Link>
          <Link href="#skills" className="text-foreground/80 hover:text-accent transition-colors cursor-pointer">Skills</Link>
          <Link href="#projects" className="text-foreground/80 hover:text-accent transition-colors cursor-pointer">Projects</Link>
          <Link href="#contact" className="text-foreground/80 hover:text-accent transition-colors cursor-pointer">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
