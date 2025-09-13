"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionContainer } from "@/components/ui/section-container";
import {
  Shield,
  Lock,
  Award,
  Users,
  Clock,
  Star,
  CheckCircle,
  TrendingUp,
  Globe,
} from "lucide-react";

interface TrustIndicatorsProps {
  variant?: "default" | "minimal" | "extended";
  showLogos?: boolean;
  showStats?: boolean;
  showCertifications?: boolean;
  className?: string;
}

export default function TrustIndicators({
  variant = "default",
  showLogos = true,
  showStats = true,
  showCertifications = true,
  className = "",
}: TrustIndicatorsProps) {
  const certifications = [
    {
      icon: Shield,
      title: "SOC 2 Type II",
      description: "Certified security standards",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Lock,
      title: "GDPR Compliant",
      description: "European data protection",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Award,
      title: "ISO 27001",
      description: "Information security management",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Active Restaurants",
      description: "Trusted worldwide",
      color: "text-blue-600",
    },
    {
      icon: Clock,
      value: "99.9%",
      label: "Uptime SLA",
      description: "Guaranteed availability",
      color: "text-green-600",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Customer Rating",
      description: "Based on 500+ reviews",
      color: "text-yellow-600",
    },
    {
      icon: TrendingUp,
      value: "30%",
      label: "Average Savings",
      description: "Reduction in waste",
      color: "text-orange-600",
    },
  ];

  const customerLogos = [
    "Taco Haven",
    "Urban Eats",
    "Bistro Central",
    "Fresh Kitchen",
    "Golden Spoon",
    "Cafe Bloom",
  ];

  const securityFeatures = [
    "End-to-end encryption",
    "Regular security audits",
    "Secure data centers",
    "Access controls",
    "Backup & recovery",
    "Compliance monitoring",
  ];

  if (variant === "minimal") {
    return (
      <div className={`py-12 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-900">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <SectionContainer background="gray" className={className}>
      <div className="max-w-6xl mx-auto">
        {/* Main Stats */}
        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card padding="lg" className="text-center">
                  <div className="space-y-3">
                    <div
                      className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center ${stat.color
                        .replace("text-", "bg-")
                        .replace("-600", "-100")}`}
                    >
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div className={`text-3xl font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="font-semibold text-gray-900">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.description}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Certifications */}
        {showCertifications && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Security & Compliance
              </h3>
              <p className="text-gray-600">
                Your data security is our top priority
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card padding="lg" className="text-center">
                    <div className="space-y-4">
                      <div
                        className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${cert.color}`}
                      >
                        <cert.icon className="h-8 w-8" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {cert.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {cert.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card
              padding="lg"
              className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Enterprise-Grade Security
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {securityFeatures.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Shield className="h-12 w-12 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Trusted by restaurants worldwide
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Customer Logos */}
        {showLogos && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-8">
              Trusted by Leading Restaurants
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
              {customerLogos.map((logo, index) => (
                <motion.div
                  key={logo}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="font-semibold text-lg hover:text-gray-700 transition-colors duration-300"
                >
                  {logo}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </SectionContainer>
  );
}
