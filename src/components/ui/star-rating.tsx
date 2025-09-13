"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showRating?: boolean;
  className?: string;
}

export function StarRating({
  rating,
  size = "md",
  showRating = false,
  className,
}: StarRatingProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={cn(
            sizeClasses[size],
            index < fullStars
              ? "fill-yellow-400 text-yellow-400"
              : index === fullStars && hasHalfStar
              ? "fill-yellow-400/50 text-yellow-400"
              : "text-gray-300"
          )}
        />
      ))}
      {showRating && (
        <span className="ml-2 text-sm font-medium text-gray-700">{rating}</span>
      )}
    </div>
  );
}
