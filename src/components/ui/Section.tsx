import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-20 md:py-32 w-full", className)} {...props}>
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
        {children}
      </div>
    </section>
  );
}
