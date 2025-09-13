"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IconContainerProps {
  children: ReactNode;
  color?: "orange" | "blue" | "green" | "purple" | "indigo" | "pink" | "red";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function IconContainer({
  children,
  color = "orange",
  size = "md",
  className,
}: IconContainerProps) {
  const colorClasses = {
    orange: "bg-orange-100 text-orange-600",
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    indigo: "bg-indigo-100 text-indigo-600",
    pink: "bg-pink-100 text-pink-600",
    red: "bg-red-100 text-red-600",
  };

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div
      className={cn(
        "rounded-xl flex items-center justify-center",
        colorClasses[color],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}
