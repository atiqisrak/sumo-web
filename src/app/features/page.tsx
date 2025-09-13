"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { motion } from "framer-motion";
import {
  Package,
  BarChart3,
  Smartphone,
  Bot,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: Package,
      title: "AI Inventory Tracking",
      description:
        "Intelligent barcode scanning, automated reorder points, and waste reduction analytics that save you money every day.",
      benefits: [
        "30% waste reduction",
        "Automated reorders",
        "Real-time alerts",
      ],
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center",
      ctaText: "Test Inventory",
      ctaLink: "/features/inventory",
      priority: "high",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: BarChart3,
      title: "AI Analytics & Insights",
      description:
        "Machine learning-powered sales forecasting, profit optimization, and custom reports that help you make smarter decisions.",
      benefits: [
        "40% efficiency boost",
        "Predictive analytics",
        "Custom reports",
      ],
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop&crop=center",
      ctaText: "Get Report",
      ctaLink: "/features/analytics",
      priority: "high",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Bot,
      title: "SumoBot AI Assistant",
      description:
        "Your intelligent restaurant assistant that handles customer queries, manages inventory questions, and provides instant insights.",
      benefits: ["24/7 support", "Instant answers", "Smart recommendations"],
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&crop=center",
      ctaText: "Chat Now",
      ctaLink: "/features/ai",
      priority: "high",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Manage everything on-the-go with our intuitive mobile app that works offline and syncs seamlessly across all devices.",
      benefits: ["Offline access", "Real-time sync", "Touch-optimized"],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center",
      ctaText: "Download Preview",
      ctaLink: "/features/mobile",
      priority: "medium",
      color: "bg-green-100 text-green-600",
    },
  ];

  const additionalFeatures = [
    { title: "Order Management", description: "From POS to delivery tracking" },
    { title: "Staff Scheduling", description: "AI-powered shift optimization" },
    { title: "Supplier Integration", description: "Automated purchase orders" },
    { title: "Compliance Tracking", description: "Health & safety monitoring" },
    { title: "Financial Reporting", description: "Real-time profit & loss" },
    {
      title: "Multi-location Support",
      description: "Manage all outlets centrally",
    },
    {
      title: "Third-party Integrations",
      description: "Connect with 200+ tools",
    },
    { title: "Custom Workflows", description: "Tailor to your processes" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-orange-50 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Powerful Features{" "}
                  <span className="text-orange-600">
                    Built for Modern Restaurants
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Everything you need to run a successful restaurant operation,
                  from intelligent inventory tracking to AI-powered analytics,
                  all in one unified platform designed for the digital age.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <PrimaryButton asChild>
                    <Link href="https://sumo.ethertech.ltd/login">
                      Start Free Trial
                    </Link>
                  </PrimaryButton>
                  <SecondaryButton asChild>
                    <Link href="/contact/demo">Book Demo</Link>
                  </SecondaryButton>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Features Grid */}
        <SectionContainer background="white">
          <SectionHeader
            title="Core Features"
            subtitle="Our most powerful tools that transform how you manage your restaurant"
          />
          <div className="grid lg:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card padding="lg" className="h-full">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.color}`}
                      >
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">
                            {feature.title}
                          </h3>
                          {feature.priority === "high" && (
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <span className="text-xs text-yellow-600 font-medium">
                                Priority
                              </span>
                            </div>
                          )}
                        </div>
                        <p className="text-gray-600 mb-4">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div
                          key={benefitIndex}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-700">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <SecondaryButton asChild className="w-full">
                        <Link
                          href={feature.ctaLink}
                          className="flex items-center justify-center space-x-2"
                        >
                          <span>{feature.ctaText}</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </SecondaryButton>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionContainer>

        {/* Feature Showcase */}
        <SectionContainer background="gray">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                See Sumo in Action
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Watch how restaurant owners like you are using Sumo to
                streamline operations, reduce waste, and boost profits with
                intelligent automation and real-time insights.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <span className="text-gray-700">30-second setup process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <span className="text-gray-700">
                    Works with your existing systems
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <span className="text-gray-700">
                    24/7 customer support included
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <PrimaryButton asChild>
                  <Link href="/contact/demo">Watch Live Demo</Link>
                </PrimaryButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="https://i.postimg.cc/hhW3tb2g/sumodash.png"
                alt="Sumo Dashboard Preview"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
              <motion.div
                className="absolute -bottom-6 -right-6 bg-orange-600 text-white rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">30%</div>
                  <div className="text-xs opacity-90">Waste Reduced</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </SectionContainer>

        {/* Additional Features */}
        <SectionContainer background="white">
          <SectionHeader
            title="Complete Restaurant Management Suite"
            subtitle="Everything you need, integrated seamlessly"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card padding="md" className="text-center">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionContainer>

        {/* CTA Section */}
        <SectionContainer background="gradient">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Ready to Transform Your{" "}
                <span className="text-orange-600">Restaurant Operations?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Join thousands of restaurants already using Sumo to streamline
                operations, reduce waste, and boost profits with intelligent
                automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <PrimaryButton asChild>
                  <Link href="https://sumo.ethertech.ltd/login">
                    Start Free Trial
                  </Link>
                </PrimaryButton>
                <SecondaryButton asChild>
                  <Link href="/contact/demo">Schedule Demo</Link>
                </SecondaryButton>
              </div>
            </motion.div>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
}
