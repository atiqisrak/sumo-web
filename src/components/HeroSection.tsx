"use client";

import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { StarRating } from "@/components/ui/star-rating";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
  videoUrl?: string;
  showVideo?: boolean;
}

export default function HeroSection({
  videoUrl,
  showVideo = false,
}: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-orange-50 py-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8 lg:-mt-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Smart Restaurant Management That{" "}
                <motion.span
                  className="text-orange-600"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Tracks Everything
                </motion.span>
                , Effortlessly
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Sumo unifies inventory tracking, order management, staff
                scheduling, and real-time insights into one AI-powered SaaS
                platform. Scale your restaurant operations, reduce waste, and
                boost profits—trusted by 10,000+ eateries worldwide.
              </p>
            </motion.div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <StarRating rating={4.9} size="lg" showRating />
                <span className="text-sm font-medium text-gray-700">
                  from 500+ reviews
                </span>
              </div>
            </div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <PrimaryButton asChild>
                <Link href="https://sumo.ethertech.ltd/login">
                  Start 14-Day Free Trial – No Credit Card Needed
                </Link>
              </PrimaryButton>
              <SecondaryButton asChild>
                <Link href="https://sumo.ethertech.ltd">Book a Demo</Link>
              </SecondaryButton>
            </motion.div>

            {/* Customer Logos */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">
                Used by leading restaurants:
              </p>
              <div className="flex items-center space-x-8 text-gray-400">
                <span className="font-semibold">Taco Haven</span>
                <span className="font-semibold">Urban Eats</span>
                <span className="font-semibold">Bistro Central</span>
                <span className="font-semibold">Fresh Kitchen</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Dashboard Screenshot/Video */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {showVideo && videoUrl ? (
                <div className="relative w-full rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <video
                    className="w-full h-auto object-cover rounded-2xl"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={videoUrl} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <div className="relative w-full rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/hhW3tb2g/sumodash.png"
                    alt="Sumo Restaurant Dashboard"
                    width={700}
                    height={300}
                    className="w-full h-auto object-cover rounded-2xl"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}

              {/* Overlay Stats */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Live Dashboard
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 bg-orange-600 text-white rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">30%</div>
                  <div className="text-xs opacity-90">Waste Reduced</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
