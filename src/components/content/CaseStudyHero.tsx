"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Download,
  Calendar,
  Clock,
  TrendingUp,
  Users,
  DollarSign,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface CaseStudyHeroProps {
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
    metrics: {
      label: string;
      value: string;
      icon: "trending" | "dollar" | "users" | "target";
    }[];
    challenges: string[];
    solutions: string[];
    results: string[];
    testimonial?: {
      quote: string;
      author: string;
      position: string;
      company: string;
      avatar: string;
    };
  };
  onDownload?: () => void;
  onWatchVideo?: () => void;
  className?: string;
}

const metricIcons = {
  trending: TrendingUp,
  dollar: DollarSign,
  users: Users,
  target: Target,
};

export function CaseStudyHero({
  caseStudy,
  onDownload,
  onWatchVideo,
  className = "",
}: CaseStudyHeroProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    if (onWatchVideo) {
      onWatchVideo();
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className={`relative ${className}`}>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={caseStudy.thumbnail}
            alt={caseStudy.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-blue-600 text-white">
                {caseStudy.industry} Case Study
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {caseStudy.title}
              </h1>

              <p className="text-xl text-gray-200 mb-8 max-w-3xl">
                {caseStudy.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="w-4 h-4" />
                  {caseStudy.readTime}
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-4 h-4" />
                  {formatDate(caseStudy.publishedAt)}
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30"
                >
                  {caseStudy.company}
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {caseStudy.videoUrl && (
                  <Button
                    onClick={handlePlayVideo}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Video
                  </Button>
                )}

                <Button
                  onClick={onDownload}
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {caseStudy.metrics.map((metric, index) => {
              const IconComponent = metricIcons[metric.icon];
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoPlaying && caseStudy.videoUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
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
                src={caseStudy.videoUrl}
                controls
                autoPlay
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Content Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Challenges
              </h3>
              <ul className="space-y-4">
                {caseStudy.challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{challenge}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Solutions
              </h3>
              <ul className="space-y-4">
                {caseStudy.solutions.map((solution, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{solution}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Results</h3>
              <ul className="space-y-4">
                {caseStudy.results.map((result, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{result}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
                "{caseStudy.testimonial.quote}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <Image
                  src={caseStudy.testimonial.avatar}
                  alt={caseStudy.testimonial.author}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="text-left">
                  <div className="text-white font-semibold text-lg">
                    {caseStudy.testimonial.author}
                  </div>
                  <div className="text-blue-200">
                    {caseStudy.testimonial.position},{" "}
                    {caseStudy.testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
