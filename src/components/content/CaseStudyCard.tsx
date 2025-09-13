"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Clock,
  Calendar,
  Download,
  Play,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Users,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface CaseStudyCardProps {
  caseStudy: {
    id: string;
    title: string;
    company: string;
    industry: string;
    description: string;
    thumbnail: string;
    videoUrl?: string;
    readTime: string;
    publishedAt: string;
    featured?: boolean;
    metrics?: {
      label: string;
      value: string;
      icon: "trending" | "dollar" | "users" | "target";
    }[];
  };
  onReadMore?: (caseStudyId: string) => void;
  onDownload?: (caseStudyId: string) => void;
  onWatchVideo?: (caseStudyId: string) => void;
  className?: string;
}

const metricIcons = {
  trending: TrendingUp,
  dollar: DollarSign,
  users: Users,
  target: Target,
};

export function CaseStudyCard({
  caseStudy,
  onReadMore,
  onDownload,
  onWatchVideo,
  className = "",
}: CaseStudyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleReadMore = () => {
    if (onReadMore) {
      onReadMore(caseStudy.id);
    }
  };

  const handleDownload = () => {
    if (onDownload) {
      onDownload(caseStudy.id);
    }
  };

  const handleWatchVideo = () => {
    if (onWatchVideo) {
      onWatchVideo(caseStudy.id);
    }
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="group h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200 overflow-hidden">
        <div className="relative">
          <Image
            src={caseStudy.thumbnail}
            alt={caseStudy.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Overlay badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <Badge className="bg-green-600 text-white font-medium">
              <BookOpen className="w-3 h-3 mr-1" />
              Case Study
            </Badge>
            {caseStudy.featured && (
              <Badge className="bg-yellow-100 text-yellow-800 font-medium">
                Featured
              </Badge>
            )}
          </div>

          {/* Video play button */}
          {caseStudy.videoUrl && (
            <motion.div
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
            >
              <Button
                onClick={handleWatchVideo}
                variant="secondary"
                size="lg"
                className="bg-white/90 hover:bg-white text-gray-900"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Video
              </Button>
            </motion.div>
          )}
        </div>

        <CardHeader className="pb-3">
          <CardTitle className="text-lg group-hover:text-green-600 transition-colors line-clamp-2">
            {caseStudy.title}
          </CardTitle>
          <CardDescription className="text-sm line-clamp-3">
            {caseStudy.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Company info */}
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {caseStudy.industry}
            </Badge>
            <span className="text-sm font-medium text-gray-600">
              {caseStudy.company}
            </span>
          </div>

          {/* Key metrics */}
          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {caseStudy.metrics.slice(0, 4).map((metric, index) => {
                const IconComponent = metricIcons[metric.icon];
                return (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="text-center p-2 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center justify-center mb-1">
                      <IconComponent className="w-3 h-3 text-green-600 mr-1" />
                      <span className="text-xs font-medium text-gray-600">
                        {metric.label}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-gray-900">
                      {metric.value}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Metadata */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {caseStudy.readTime}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(caseStudy.publishedAt)}
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          <div className="flex gap-2 w-full">
            <Button
              onClick={handleReadMore}
              variant="outline"
              className="flex-1 group-hover:border-green-600 group-hover:text-green-600 transition-colors"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Read Story
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              onClick={handleDownload}
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
