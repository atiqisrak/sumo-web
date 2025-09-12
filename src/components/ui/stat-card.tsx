import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string | number;
  label: string;
  icon?: ReactNode;
  className?: string;
  hover?: boolean;
}

export function StatCard({
  value,
  label,
  icon,
  className,
  hover = true,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "group text-center",
        hover && "group-hover:scale-105 transition-transform duration-300",
        className
      )}
    >
      {icon && (
        <div className="flex items-center justify-center mb-3">
          <div className="p-3 bg-white/20 rounded-2xl group-hover:bg-white/30 transition-colors duration-300">
            {icon}
          </div>
        </div>
      )}
      <div
        className={cn(
          "text-4xl lg:text-5xl font-bold mb-2",
          hover && "group-hover:scale-105 transition-transform duration-300"
        )}
      >
        {value}
      </div>
      <p className="text-orange-100 text-lg font-medium">{label}</p>
    </div>
  );
}
