"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  background?: "white" | "gray" | "orange" | "gradient";
  className?: string;
}

export function SectionContainer({
  children,
  id,
  background = "white",
  className,
}: SectionContainerProps) {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    orange: "bg-orange-50",
    gradient: "bg-gradient-to-br from-orange-50 to-red-50",
  };

  return (
    <section
      id={id}
      className={cn("py-20 lg:py-32", backgroundClasses[background], className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
