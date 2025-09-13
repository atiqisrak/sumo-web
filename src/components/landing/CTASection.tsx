"use client";

import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CTASectionProps {
  headline?: string;
  subtitle?: string;
  primaryCta?: string;
  secondaryCta?: string;
  primaryUrl?: string;
  secondaryUrl?: string;
  showVideo?: boolean;
  videoUrl?: string;
}

export default function CTASection({
  headline = "Ready to Transform Your Restaurant?",
  subtitle = "Join 10,000+ restaurants already using Sumo to streamline operations and boost profits.",
  primaryCta = "Start 14-Day Free Trial",
  secondaryCta = "Schedule a Demo",
  primaryUrl = "https://sumo.ethertech.ltd/login",
  secondaryUrl = "https://sumo.ethertech.ltd",
  showVideo = false,
  videoUrl,
}: CTASectionProps) {
  return (
    <GradientBackground className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Video Section */}
          {showVideo && videoUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="relative w-full max-w-3xl mx-auto rounded-2xl shadow-2xl overflow-hidden">
                <video
                  className="w-full h-auto"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/images/video-poster.jpg"
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-8 w-8 text-orange-600 ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Headline */}
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {headline}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-orange-100 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>

          {/* Trust Indicator */}
          <motion.div
            className="flex items-center justify-center space-x-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <span className="text-orange-200 text-sm ml-2">
              4.9/5 from 500+ restaurant owners
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href={primaryUrl}>{primaryCta}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 font-semibold rounded-2xl transition-all duration-300"
              asChild
            >
              <Link href={secondaryUrl}>{secondaryCta}</Link>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="text-sm text-orange-200 pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <p>
              No credit card required • Cancel anytime • Setup in under 30
              minutes
            </p>
          </motion.div>
        </motion.div>
      </div>
    </GradientBackground>
  );
}
