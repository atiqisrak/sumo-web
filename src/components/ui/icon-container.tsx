import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IconContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "blue" | "green" | "purple" | "orange" | "indigo" | "pink" | "red";
  hover?: boolean;
}

export function IconContainer({
  children,
  className,
  size = "md",
  color = "orange",
  hover = true,
}: IconContainerProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  const colorClasses = {
    blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-100",
    green: "bg-green-50 text-green-600 group-hover:bg-green-100",
    purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-100",
    orange: "bg-orange-50 text-orange-600 group-hover:bg-orange-100",
    indigo: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100",
    pink: "bg-pink-50 text-pink-600 group-hover:bg-pink-100",
    red: "bg-red-50 text-red-600 group-hover:bg-red-100",
  };

  const hoverClasses = hover
    ? "group-hover:scale-110 transition-all duration-300"
    : "";

  return (
    <div
      className={cn(
        "rounded-2xl flex items-center justify-center transition-colors duration-300",
        sizeClasses[size],
        colorClasses[color],
        hoverClasses,
        className
      )}
    >
      {children}
    </div>
  );
}
