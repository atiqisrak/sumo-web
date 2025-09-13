"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PrimaryButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  className?: string;
  asChild?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function PrimaryButton({
  children,
  href,
  onClick,
  size = "lg",
  showArrow = false,
  className,
  asChild = false,
  type = "button",
  disabled = false,
}: PrimaryButtonProps) {
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
        size={size as ButtonProps["size"]}
        className={cn(
          "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1 group",
          sizeClasses[size],
          className
        )}
        onClick={onClick}
        asChild={asChild}
        type={type}
        disabled={disabled}
      >
        {href ? (
          <a href={href} className="flex items-center gap-2">
            {children}
            {showArrow && (
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            )}
          </a>
        ) : (
          <span className="flex items-center gap-2">
            {children}
            {showArrow && (
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            )}
          </span>
        )}
      </Button>
    </motion.div>
  );
}
