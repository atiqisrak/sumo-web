"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Wifi,
  WifiOff,
  Camera,
  BarChart3,
  Clock,
  Shield,
  Download,
  Play,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface MobileFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  benefits: string[];
  isOffline?: boolean;
  isNew?: boolean;
  videoUrl?: string;
  demoUrl?: string;
}

interface MobileFeaturesProps {
  features: MobileFeature[];
  title?: string;
  description?: string;
  className?: string;
  onFeatureClick?: (featureId: string) => void;
  onVideoPlay?: (videoUrl: string) => void;
  onDemoStart?: (demoUrl: string) => void;
}

const featureIcons = {
  Smartphone,
  Wifi,
  WifiOff,
  Camera,
  BarChart3,
  Clock,
  Shield,
  Download,
  Play,
};

export function MobileFeatures({
  features,
  title = "Mobile-First Restaurant Management",
  description = "Manage your restaurant operations from anywhere with our powerful mobile app",
  className = "",
  onFeatureClick,
  onVideoPlay,
  onDemoStart,
}: MobileFeaturesProps) {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const handleFeatureClick = (feature: MobileFeature) => {
    setActiveFeature(activeFeature === feature.id ? null : feature.id);
    if (onFeatureClick) {
      onFeatureClick(feature.id);
    }
  };

  const handleVideoPlay = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setIsVideoPlaying(true);
    if (onVideoPlay) {
      onVideoPlay(videoUrl);
    }
  };

  const handleDemoStart = (demoUrl: string) => {
    if (onDemoStart) {
      onDemoStart(demoUrl);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          const isActive = activeFeature === feature.id;

          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              <Card
                className={`group cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  isActive ? "ring-2 ring-blue-500 shadow-lg" : ""
                }`}
                onClick={() => handleFeatureClick(feature)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex gap-2">
                      {feature.isNew && (
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          New
                        </Badge>
                      )}
                      {feature.isOffline && (
                        <Badge variant="outline" className="text-xs">
                          <WifiOff className="w-3 h-3 mr-1" />
                          Offline
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Feature Image */}
                  <div className="relative h-32 rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-2">
                    {feature.benefits
                      .slice(0, 3)
                      .map((benefit, benefitIndex) => (
                        <motion.div
                          key={benefitIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: benefitIndex * 0.1 }}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </motion.div>
                      ))}
                    {feature.benefits.length > 3 && (
                      <div className="text-xs text-gray-500">
                        +{feature.benefits.length - 3} more benefits
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    {feature.videoUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleVideoPlay(feature.videoUrl!);
                        }}
                        className="flex-1"
                      >
                        <Play className="w-4 h-4 mr-1" />
                        Watch
                      </Button>
                    )}
                    {feature.demoUrl && (
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDemoStart(feature.demoUrl!);
                        }}
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Try Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Expanded Details */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200"
                  >
                    <h4 className="font-semibold text-gray-900 mb-3">
                      All Benefits
                    </h4>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div
                          key={benefitIndex}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && currentVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute -top-12 right-0 bg-white/20 hover:bg-white/30 text-white"
              >
                Close
              </Button>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  src={currentVideo}
                  controls
                  autoPlay
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
        >
          Download Mobile App
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
        <p className="text-sm text-gray-500 mt-3">
          Available on iOS and Android
        </p>
      </div>
    </div>
  );
}
