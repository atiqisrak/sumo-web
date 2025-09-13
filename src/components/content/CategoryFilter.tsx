"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface Category {
  id: string;
  name: string;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory?: string;
  onCategoryChange?: (categoryId: string) => void;
  className?: string;
}

export function CategoryFilter({
  categories,
  selectedCategory = "all",
  onCategoryChange,
  className = "",
}: CategoryFilterProps) {
  const handleCategoryClick = (categoryId: string) => {
    if (onCategoryChange) {
      onCategoryChange(categoryId);
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          Filter by Category
        </h3>
        <div className="text-sm text-gray-500">
          {categories.find((c) => c.id === selectedCategory)?.count || 0}{" "}
          resources
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <Button
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryClick(category.id)}
              className={`
                relative overflow-hidden group
                ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
                }
                transition-all duration-200
              `}
            >
              <span className="relative z-10 flex items-center gap-2">
                {category.name}
                <Badge
                  variant="secondary"
                  className={`
                    text-xs px-1.5 py-0.5
                    ${
                      selectedCategory === category.id
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-600"
                    }
                  `}
                >
                  {category.count}
                </Badge>
              </span>

              {selectedCategory === category.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
