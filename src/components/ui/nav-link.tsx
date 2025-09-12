import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export function NavLink({
  href,
  children,
  className,
  external = false,
}: NavLinkProps) {
  const baseClasses = "text-gray-700 hover:text-orange-600 transition-colors";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseClasses, className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(baseClasses, className)}>
      {children}
    </Link>
  );
}
