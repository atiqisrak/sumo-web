"use client";

import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { SectionContainer } from "@/components/ui/section-container";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CTASectionProps {
  variant?: "default" | "video" | "gradient" | "minimal";
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  primaryCtaLink?: string;
  secondaryCta?: string;
  secondaryCtaLink?: string;
  videoUrl?: string;
  backgroundImage?: string;
  features?: string[];
  stats?: Array<{
    value: string;
    label: string;
  }>;
  testimonials?: boolean;
}

export default function CTASection({
  variant = "default",
  title = "Ready to Transform Your Restaurant Operations?",
  subtitle = "Join thousands of restaurants already using Sumo to streamline operations, reduce waste, and boost profits with intelligent automation.",
  primaryCta = "Start Free Trial",
  primaryCtaLink = "https://sumo.ethertech.ltd/login",
  secondaryCta = "Schedule Demo",
  secondaryCtaLink = "/contact/demo",
  videoUrl,
  backgroundImage,
  features = [
    "14-day free trial",
    "No credit card required",
    "Setup in under 5 minutes",
    "24/7 support included",
  ],
  stats = [
    { value: "10,000+", label: "Happy Customers" },
    { value: "30%", label: "Average Waste Reduction" },
    { value: "4.9/5", label: "Customer Rating" },
    { value: "99.9%", label: "Uptime Guarantee" },
  ],
  testimonials = true,
}: CTASectionProps) {
  const testimonial = {
    quote:
      "Sumo transformed our operations completely. We reduced waste by 35% and increased profits by 28% in just 3 months.",
    author: "Maria Rodriguez",
    role: "Owner, The Golden Spoon",
    rating: 5,
  };

  if (variant === "minimal") {
    return (
      <SectionContainer background="white">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-xl text-gray-600 mb-8">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PrimaryButton asChild>
                <Link href={primaryCtaLink}>{primaryCta}</Link>
              </PrimaryButton>
              <SecondaryButton asChild>
                <Link href={secondaryCtaLink}>{secondaryCta}</Link>
              </SecondaryButton>
            </div>
          </motion.div>
        </div>
      </SectionContainer>
    );
  }

  if (variant === "video") {
    return (
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {backgroundImage && (
          <div className="absolute inset-0">
            <Image
              src={backgroundImage}
              alt="Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        )}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                {title}
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                {subtitle}
              </p>

              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-200">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <PrimaryButton asChild>
                  <Link href={primaryCtaLink}>{primaryCta}</Link>
                </PrimaryButton>
                <SecondaryButton asChild>
                  <Link href={secondaryCtaLink}>{secondaryCta}</Link>
                </SecondaryButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {videoUrl ? (
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <video
                    className="w-full h-auto"
                    controls
                    poster="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center"
                  >
                    <source src={videoUrl} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              ) : (
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://i.postimg.cc/hhW3tb2g/sumodash.png"
                    alt="Sumo Dashboard"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <SectionContainer background="gradient">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {subtitle}
            </p>

            {features && (
              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <PrimaryButton asChild>
                <Link href={primaryCtaLink}>{primaryCta}</Link>
              </PrimaryButton>
              <SecondaryButton asChild>
                <Link href={secondaryCtaLink}>{secondaryCta}</Link>
              </SecondaryButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Stats */}
            {stats && (
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20"
                  >
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-700">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Testimonial */}
            {testimonials && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
