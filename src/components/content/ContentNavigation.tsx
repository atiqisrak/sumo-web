"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  FileText,
  Users,
  HelpCircle,
  Video,
  Home,
} from "lucide-react";
import { motion } from "framer-motion";

const navigationItems = [
  {
    href: "/resources",
    label: "All Resources",
    icon: Home,
    description: "Browse all content",
  },
  {
    href: "/resources/blog",
    label: "Blog",
    icon: FileText,
    description: "Latest insights & tips",
  },
  {
    href: "/resources/case-studies",
    label: "Case Studies",
    icon: BookOpen,
    description: "Success stories",
  },
  {
    href: "/resources/guides",
    label: "Guides",
    icon: FileText,
    description: "Expert guides & tutorials",
  },
  {
    href: "/resources/webinars",
    label: "Webinars",
    icon: Video,
    description: "Live & recorded sessions",
  },
  {
    href: "/resources/help",
    label: "Help Center",
    icon: HelpCircle,
    description: "Support & FAQs",
  },
];

interface ContentNavigationProps {
  className?: string;
}

export function ContentNavigation({ className = "" }: ContentNavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("w-full", className)}>
      <div className="flex flex-wrap gap-1">
        {navigationItems.map((item, index) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "group relative flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                  "hover:bg-blue-50 hover:text-blue-700",
                  isActive
                    ? "bg-blue-100 text-blue-700 border border-blue-200"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                <Icon
                  className={cn(
                    "w-4 h-4 transition-colors",
                    isActive
                      ? "text-blue-600"
                      : "text-gray-400 group-hover:text-blue-600"
                  )}
                />

                <div className="flex flex-col">
                  <span className="font-medium">{item.label}</span>
                  <span
                    className={cn(
                      "text-xs transition-colors",
                      isActive
                        ? "text-blue-600"
                        : "text-gray-400 group-hover:text-blue-500"
                    )}
                  >
                    {item.description}
                  </span>
                </div>

                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-blue-100 rounded-lg"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </nav>
  );
}
