import { Button, ButtonProps } from "@/components/ui/button";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
    <Button
      size={size as ButtonProps["size"]}
      variant="outline"
      className={cn(
        "border-orange-600 text-orange-600 hover:bg-orange-50 font-semibold rounded-2xl transition-all duration-300",
        sizeClasses[size],
        className
      )}
      onClick={onClick}
      asChild={asChild}
    >
      {href ? <a href={href}>{children}</a> : children}
    </Button>
  );
}
