import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  variant?: "default" | "gradient" | "outlined";
}

export function Card({
  children,
  className,
  hover = true,
  padding = "md",
  variant = "default",
}: CardProps) {
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const variantClasses = {
    default: "bg-white border border-gray-200",
    gradient:
      "bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 shadow-lg",
    outlined: "bg-gray-50 border border-gray-200",
  };

  const hoverClasses = hover
    ? "hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-500 hover:-translate-y-2"
    : "transition-shadow";

  return (
    <div
      className={cn(
        "rounded-2xl shadow-sm",
        paddingClasses[padding],
        variantClasses[variant],
        hoverClasses,
        className
      )}
    >
      {children}
    </div>
  );
}
