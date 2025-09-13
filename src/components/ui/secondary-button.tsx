"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SecondaryButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
  asChild?: boolean;
}

export function SecondaryButton({
  children,
  href,
  onClick,
  size = "lg",
  className,
  asChild = false,
}: SecondaryButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Button
        variant="outline"
        size={size as ButtonProps["size"]}
        className={cn(
          "border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
          sizeClasses[size],
          className
        )}
        onClick={onClick}
        asChild={asChild}
      >
        {href ? <a href={href}>{children}</a> : <span>{children}</span>}
      </Button>
    </motion.div>
  );
}
