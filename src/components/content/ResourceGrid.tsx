"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Clock,
  Download,
  Play,
  User,
  Calculator,
  FileText,
  Video,
  BookOpen,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Resource {
  id: string;
  title: string;
  description: string;
  type: "guide" | "case-study" | "webinar" | "tutorial" | "tool";
  category: string;
  isGated: boolean;
  thumbnail: string;
  readTime?: string;
  duration?: string;
  speaker?: string;
  eventDate?: string;
  publishedAt: string;
  featured: boolean;
  downloadUrl?: string;
  videoUrl?: string;
  toolUrl?: string;
}

interface ResourceGridProps {
  resources: Resource[];
  searchQuery?: string;
  selectedCategory?: string;
}

const typeIcons = {
  guide: FileText,
  "case-study": BookOpen,
  webinar: Video,
  tutorial: Play,
  tool: Calculator,
};

const typeColors = {
  guide: "bg-blue-100 text-blue-800",
  "case-study": "bg-green-100 text-green-800",
  webinar: "bg-purple-100 text-purple-800",
  tutorial: "bg-orange-100 text-orange-800",
  tool: "bg-pink-100 text-pink-800",
};

export function ResourceGrid({
  resources,
  searchQuery = "",
  selectedCategory = "all",
}: ResourceGridProps) {
  const [search, setSearch] = useState(searchQuery);
  const [category, setCategory] = useState(selectedCategory);

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch =
        search === "" ||
        resource.title.toLowerCase().includes(search.toLowerCase()) ||
        resource.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "all" || resource.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [resources, search, category]);

  const featuredResources = filteredResources.filter((r) => r.featured);
  const regularResources = filteredResources.filter((r) => !r.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getResourceIcon = (type: string) => {
    const IconComponent = typeIcons[type as keyof typeof typeIcons] || FileText;
    return IconComponent;
  };

  const getResourceColor = (type: string) => {
    return (
      typeColors[type as keyof typeof typeColors] || "bg-gray-100 text-gray-800"
    );
  };

  return (
    <div className="space-y-12">
      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex-1 max-w-md">
          <Input
            placeholder="Search resources..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {[
            "all",
            "inventory",
            "ai",
            "success-stories",
            "franchise",
            "mobile",
            "compliance",
            "calculators",
          ].map((cat) => (
            <Button
              key={cat}
              variant={category === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setCategory(cat)}
              className="capitalize"
            >
              {cat.replace("-", " ")}
            </Button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-600">
        Showing {filteredResources.length} of {resources.length} resources
      </div>

      {/* Featured Resources */}
      {featuredResources.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Featured Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources.map((resource, index) => {
              const IconComponent = getResourceIcon(resource.type);
              const colorClass = getResourceColor(resource.type);

              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
                    <div className="relative">
                      <Image
                        src={resource.thumbnail}
                        alt={resource.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={`${colorClass} font-medium`}>
                          <IconComponent className="w-3 h-3 mr-1" />
                          {resource.type.replace("-", " ")}
                        </Badge>
                      </div>
                      {resource.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-yellow-100 text-yellow-800 font-medium">
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>

                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        {resource.readTime && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {resource.readTime}
                          </div>
                        )}
                        {resource.duration && (
                          <div className="flex items-center gap-1">
                            <Play className="w-4 h-4" />
                            {resource.duration}
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(resource.publishedAt)}
                        </div>
                      </div>

                      {resource.speaker && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <User className="w-4 h-4" />
                          {resource.speaker}
                        </div>
                      )}
                    </CardContent>

                    <CardFooter>
                      <Button
                        className="w-full group-hover:bg-blue-600 transition-colors"
                        variant={resource.isGated ? "default" : "outline"}
                      >
                        {resource.type === "webinar" && (
                          <>
                            <Users className="w-4 h-4 mr-2" />
                            Register
                          </>
                        )}
                        {resource.type === "tool" && (
                          <>
                            <Calculator className="w-4 h-4 mr-2" />
                            Use Tool
                          </>
                        )}
                        {resource.type === "tutorial" && (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Watch
                          </>
                        )}
                        {resource.type === "case-study" && (
                          <>
                            <BookOpen className="w-4 h-4 mr-2" />
                            Read Story
                          </>
                        )}
                        {resource.type === "guide" && (
                          <>
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* Regular Resources */}
      {regularResources.length > 0 && (
        <div className="space-y-6">
          {featuredResources.length > 0 && (
            <h2 className="text-2xl font-bold text-gray-900">All Resources</h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularResources.map((resource, index) => {
              const IconComponent = getResourceIcon(resource.type);
              const colorClass = getResourceColor(resource.type);

              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: (featuredResources.length + index) * 0.1,
                  }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 border hover:border-blue-200">
                    <div className="relative">
                      <Image
                        src={resource.thumbnail}
                        alt={resource.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={`${colorClass} font-medium`}>
                          <IconComponent className="w-3 h-3 mr-1" />
                          {resource.type.replace("-", " ")}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        {resource.readTime && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {resource.readTime}
                          </div>
                        )}
                        {resource.duration && (
                          <div className="flex items-center gap-1">
                            <Play className="w-4 h-4" />
                            {resource.duration}
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(resource.publishedAt)}
                        </div>
                      </div>

                      {resource.speaker && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <User className="w-4 h-4" />
                          {resource.speaker}
                        </div>
                      )}
                    </CardContent>

                    <CardFooter>
                      <Button
                        className="w-full group-hover:bg-blue-600 transition-colors"
                        variant={resource.isGated ? "default" : "outline"}
                      >
                        {resource.type === "webinar" && (
                          <>
                            <Users className="w-4 h-4 mr-2" />
                            Register
                          </>
                        )}
                        {resource.type === "tool" && (
                          <>
                            <Calculator className="w-4 h-4 mr-2" />
                            Use Tool
                          </>
                        )}
                        {resource.type === "tutorial" && (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Watch
                          </>
                        )}
                        {resource.type === "case-study" && (
                          <>
                            <BookOpen className="w-4 h-4 mr-2" />
                            Read Story
                          </>
                        )}
                        {resource.type === "guide" && (
                          <>
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* No Results */}
      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <FileText className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No resources found
          </h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search or filter criteria
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearch("");
              setCategory("all");
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}
