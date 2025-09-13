"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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

  const hoverClasses = hover ? "transition-shadow" : "transition-shadow";

  if (hover) {
    return (
      <motion.div
        className={cn(
          "rounded-2xl shadow-sm",
          paddingClasses[padding],
          variantClasses[variant],
          hoverClasses,
          className
        )}
        whileHover={{
          y: -8,
          scale: 1.02,
          boxShadow: "0 25px 50px -12px rgba(251, 146, 60, 0.25)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.div>
    );
  }

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
