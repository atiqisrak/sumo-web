"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Users, Award } from "lucide-react";

const indicators = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption",
    metric: "99.9%",
    metricLabel: "Uptime",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "Your data is safe with bank-level security",
    metric: "256-bit",
    metricLabel: "Encryption",
  },
  {
    icon: Users,
    title: "Trusted by Thousands",
    description: "Restaurants worldwide choose Sumo daily",
    metric: "10K+",
    metricLabel: "Restaurants",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Winner of Restaurant Technology Awards 2024",
    metric: "4.9/5",
    metricLabel: "Rating",
  },
];

interface TrustIndicatorsProps {
  variant?: "default" | "compact" | "footer";
  className?: string;
}

export default function TrustIndicators({
  variant = "default",
  className = "",
}: TrustIndicatorsProps) {
  if (variant === "compact") {
    return (
      <div className={`flex flex-wrap justify-center gap-6 ${className}`}>
        {indicators.map((indicator, index) => (
          <motion.div
            key={indicator.title}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 text-gray-600"
          >
            <indicator.icon className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">
              {indicator.metric} {indicator.metricLabel}
            </span>
          </motion.div>
        ))}
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
        {indicators.map((indicator, index) => (
          <motion.div
            key={indicator.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-2xl font-bold text-orange-600">
              {indicator.metric}
            </div>
            <div className="text-sm text-gray-600">{indicator.metricLabel}</div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {indicators.map((indicator, index) => (
        <motion.div
          key={indicator.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card
            padding="lg"
            className="text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <indicator.icon className="h-6 w-6 text-orange-600" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {indicator.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {indicator.description}
                </p>
              </div>

              <div className="pt-2">
                <div className="text-2xl font-bold text-orange-600">
                  {indicator.metric}
                </div>
                <div className="text-sm text-gray-500">
                  {indicator.metricLabel}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
