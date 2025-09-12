import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
  children: ReactNode;
  className?: string;
  variant?: "orange" | "blue" | "green" | "purple";
  pattern?: boolean;
}

export function GradientBackground({
  children,
  className,
  variant = "orange",
  pattern = true,
}: GradientBackgroundProps) {
  const variantClasses = {
    orange: "bg-gradient-to-r from-orange-600 via-orange-500 to-red-600",
    blue: "bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600",
    green: "bg-gradient-to-r from-green-600 via-green-500 to-emerald-600",
    purple: "bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600",
  };

  const patternSvg =
    variant === "orange"
      ? `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
      : `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

  return (
    <div
      className={cn(
        "relative rounded-3xl p-10 text-white overflow-hidden",
        variantClasses[variant],
        className
      )}
    >
      {pattern && (
        <div className="absolute inset-0 opacity-30">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: patternSvg,
            }}
          />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
