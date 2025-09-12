"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackText?: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function ImageWithFallback({
  src,
  alt,
  fallbackText,
  width,
  height,
  className,
  sizes,
  priority = false,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={cn(
          "bg-gray-100 rounded-lg flex items-center justify-center",
          width && height ? `w-${width} h-${height}` : "w-16 h-16",
          className
        )}
      >
        <span className="text-2xl font-bold text-gray-600">
          {fallbackText || alt.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative",
        width && height ? `w-${width} h-${height}` : "w-16 h-16"
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill={!width || !height}
        width={width}
        height={height}
        className={cn("object-contain", className)}
        onError={() => setHasError(true)}
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
