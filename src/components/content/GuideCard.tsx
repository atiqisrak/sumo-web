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
  Download,
  Clock,
  FileText,
  Lock,
  Eye,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface GuideCardProps {
  guide: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    isGated: boolean;
    downloadUrl?: string;
    previewUrl?: string;
    readTime: string;
    publishedAt: string;
    category: string;
    pages?: number;
    fileSize?: string;
    tags?: string[];
    featured?: boolean;
  };
  onDownload?: (guideId: string) => void;
  onPreview?: (guideId: string) => void;
  className?: string;
}

export function GuideCard({
  guide,
  onDownload,
  onPreview,
  className = "",
}: GuideCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleDownload = () => {
    if (onDownload) {
      onDownload(guide.id);
    }
  };

  const handlePreview = () => {
    if (onPreview) {
      onPreview(guide.id);
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
      <Card className="group h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 overflow-hidden">
        <div className="relative">
          <Image
            src={guide.thumbnail}
            alt={guide.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Overlay badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <Badge className="bg-blue-600 text-white font-medium">
              <FileText className="w-3 h-3 mr-1" />
              Guide
            </Badge>
            {guide.featured && (
              <Badge className="bg-yellow-100 text-yellow-800 font-medium">
                Featured
              </Badge>
            )}
          </div>

          {/* Gated indicator */}
          {guide.isGated && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-orange-100 text-orange-800 font-medium">
                <Lock className="w-3 h-3 mr-1" />
                Gated
              </Badge>
            </div>
          )}

          {/* Preview overlay */}
          {guide.previewUrl && (
            <motion.div
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
            >
              <Button
                onClick={handlePreview}
                variant="secondary"
                size="sm"
                className="bg-white/90 hover:bg-white text-gray-900"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
            </motion.div>
          )}
        </div>

        <CardHeader className="pb-3">
          <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
            {guide.title}
          </CardTitle>
          <CardDescription className="text-sm line-clamp-3">
            {guide.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Tags */}
          {guide.tags && guide.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {guide.tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {guide.tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{guide.tags.length - 3} more
                </Badge>
              )}
            </div>
          )}

          {/* Metadata */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {guide.readTime}
            </div>
            {guide.pages && (
              <div className="flex items-center gap-1">
                <FileText className="w-4 h-4" />
                {guide.pages} pages
              </div>
            )}
            {guide.fileSize && (
              <div className="flex items-center gap-1">
                <Download className="w-4 h-4" />
                {guide.fileSize}
              </div>
            )}
          </div>

          <div className="text-xs text-gray-400">
            Published {formatDate(guide.publishedAt)}
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          <Button
            onClick={handleDownload}
            className="w-full group-hover:bg-blue-600 transition-colors"
            variant={guide.isGated ? "default" : "outline"}
          >
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ x: 2 }}
            >
              {guide.isGated ? (
                <>
                  <Lock className="w-4 h-4" />
                  Download (Email Required)
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  Download Free
                </>
              )}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
