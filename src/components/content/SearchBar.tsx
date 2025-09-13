"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { motion } from "framer-motion";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
  showClearButton?: boolean;
}

export function SearchBar({
  placeholder = "Search...",
  onSearch,
  className = "",
  showClearButton = true,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleClear = () => {
    setQuery("");
    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`
              pl-10 pr-12 py-3 text-lg
              border-2 transition-all duration-200
              ${
                isFocused
                  ? "border-blue-500 shadow-lg shadow-blue-100"
                  : "border-gray-200 hover:border-gray-300"
              }
              focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20
            `}
          />

          {showClearButton && query && (
            <motion.button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5" />
            </motion.button>
          )}
        </div>

        <Button
          type="submit"
          className={`
            absolute right-2 top-1/2 transform -translate-y-1/2
            px-4 py-1.5 text-sm font-medium
            transition-all duration-200
            ${
              isFocused || query
                ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                : "bg-gray-100 hover:bg-gray-200 text-gray-600"
            }
          `}
        >
          Search
        </Button>
      </form>

      {/* Search suggestions could be added here */}
      {isFocused && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
        >
          <div className="p-4 text-sm text-gray-500">
            <div className="font-medium mb-2">Popular searches:</div>
            <div className="space-y-1">
              <button
                className="block w-full text-left hover:text-blue-600 transition-colors"
                onClick={() => {
                  setQuery("inventory management");
                  handleSearch(
                    new Event("submit") as unknown as React.FormEvent
                  );
                }}
              >
                inventory management
              </button>
              <button
                className="block w-full text-left hover:text-blue-600 transition-colors"
                onClick={() => {
                  setQuery("AI analytics");
                  handleSearch(
                    new Event("submit") as unknown as React.FormEvent
                  );
                }}
              >
                AI analytics
              </button>
              <button
                className="block w-full text-left hover:text-blue-600 transition-colors"
                onClick={() => {
                  setQuery("case studies");
                  handleSearch(
                    new Event("submit") as unknown as React.FormEvent
                  );
                }}
              >
                case studies
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
