"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  BarChart3,
  Smartphone,
  Play,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Quick Setup",
      description:
        "Get started in minutes with our guided onboarding process. Import your existing data or start fresh.",
      icon: Zap,
      color: "bg-orange-100 text-orange-600",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center",
      features: [
        "5-minute setup",
        "Data import wizard",
        "Staff training included",
      ],
      time: "5 minutes",
    },
    {
      number: "02",
      title: "Connect Everything",
      description:
        "Integrate with your POS, suppliers, and existing tools. Sumo works with 200+ popular platforms.",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop&crop=center",
      features: ["POS integration", "Supplier connections", "API access"],
      time: "1 day",
    },
    {
      number: "03",
      title: "Start Tracking",
      description:
        "Begin monitoring inventory, orders, and performance with AI-powered insights and automation.",
      icon: BarChart3,
      color: "bg-green-100 text-green-600",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&crop=center",
      features: ["Real-time tracking", "AI predictions", "Automated alerts"],
      time: "Immediate",
    },
    {
      number: "04",
      title: "Optimize & Scale",
      description:
        "Use insights to reduce waste, increase efficiency, and grow your restaurant business profitably.",
      icon: Smartphone,
      color: "bg-purple-100 text-purple-600",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center",
      features: [
        "Performance insights",
        "Waste reduction",
        "Profit optimization",
      ],
      time: "Ongoing",
    },
  ];

  const benefits = [
    {
      metric: "30%",
      label: "Reduction in Food Waste",
      description:
        "AI-powered inventory management prevents overstocking and spoilage",
    },
    {
      metric: "40%",
      label: "Increase in Efficiency",
      description: "Automated processes save time and reduce manual errors",
    },
    {
      metric: "25%",
      label: "Boost in Profits",
      description:
        "Better inventory control and operational insights drive revenue",
    },
  ];

  return (
    <SectionContainer id="how-it-works" background="white">
      <SectionHeader
        title="How Sumo Works"
        subtitle="Get up and running in minutes, not months. Our intuitive platform transforms your restaurant operations with minimal setup."
      />

      {/* Steps */}
      <div className="space-y-16">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex flex-col lg:flex-row gap-8 items-center ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1">
              <Card padding="lg">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${step.color}`}
                      >
                        <step.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl font-bold text-gray-400">
                          {step.number}
                        </span>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-500">
                            {step.time}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>

                      <div className="space-y-2">
                        {step.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex-1">
              <div className="relative">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
                <motion.div
                  className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-white/90 rounded-full p-4">
                    <Play className="h-8 w-8 text-orange-600" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Benefits Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-20"
      >
        <Card
          padding="lg"
          className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              See Results in Your First Week
            </h3>
            <p className="text-gray-600">
              Our customers typically see measurable improvements within days of
              implementation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.metric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  {benefit.metric}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {benefit.label}
                </h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="text-center mt-12"
      >
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">
            Ready to Transform Your Restaurant Operations?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
        </div>
      </motion.div>
    </SectionContainer>
  );
}
