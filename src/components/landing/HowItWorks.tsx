"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { PrimaryButton } from "@/components/ui/primary-button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Quick Setup",
    description:
      "Import your existing inventory data or start fresh. Our AI learns your patterns in minutes.",
    icon: CheckCircle,
    duration: "5 minutes",
  },
  {
    number: "02",
    title: "Smart Tracking",
    description:
      "Scan barcodes, track waste, and get real-time alerts. Sumo predicts what you need before you run out.",
    icon: CheckCircle,
    duration: "24/7",
  },
  {
    number: "03",
    title: "Boost Profits",
    description:
      "See results immediately: 30% less waste, 40% better efficiency, happier staff, more profit.",
    icon: CheckCircle,
    duration: "Week 1",
  },
];

export default function HowItWorks() {
  return (
    <SectionContainer background="white">
      <SectionHeader
        title={
          <>
            How Sumo{" "}
            <span className="text-orange-600">Transforms Your Restaurant</span>
          </>
        }
        subtitle="From chaos to control in three simple steps. Most restaurants see results within the first week."
      />

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card padding="lg" className="text-center relative">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <step.icon className="h-12 w-12 text-orange-600 mx-auto" />

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
                  {step.duration}
                </div>
              </div>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-orange-300" />
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Demo CTA */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to See It in Action?
          </h3>
          <p className="text-gray-600 mb-6">
            Watch a 2-minute demo of Sumo managing a busy restaurant kitchen
          </p>
          <PrimaryButton asChild>
            <Link href="https://sumo.ethertech.ltd">Watch Demo Video</Link>
          </PrimaryButton>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
