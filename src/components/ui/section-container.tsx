import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "gradient";
}

export function SectionContainer({
  children,
  className,
  id,
  background = "white",
}: SectionContainerProps) {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-br from-gray-50 to-orange-50",
  };

  return (
    <section
      id={id}
      className={cn("py-20", backgroundClasses[background], className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
