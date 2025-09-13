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
  CheckCircle,
  Calculator,
  MessageCircle,
  Star,
  Users,
  BarChart3,
  Bot,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [calculatorValues, setCalculatorValues] = useState({
    locations: 1,
    monthlyRevenue: 50000,
    currentWaste: 15,
    staffSize: 10,
  });

  const calculateSavings = () => {
    const wasteSavings =
      ((calculatorValues.monthlyRevenue * calculatorValues.currentWaste) /
        100) *
      0.3;
    const efficiencyGains = calculatorValues.monthlyRevenue * 0.15;
    const totalSavings = wasteSavings + efficiencyGains;
    return {
      wasteSavings,
      efficiencyGains,
      totalSavings,
      roi: (totalSavings / 299) * 100,
    };
  };

  const savings = calculateSavings();

  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small cafes and single-location restaurants",
      features: [
        "Up to 2 locations",
        "Basic inventory tracking",
        "POS integration",
        "Mobile app access",
        "Email support",
        "Basic analytics",
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "border-gray-200",
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Most popular for growing restaurants and small chains",
      features: [
        "Up to 10 locations",
        "AI inventory tracking",
        "Advanced analytics",
        "SumoBot AI assistant",
        "Priority support",
        "Custom integrations",
        "Staff scheduling",
        "Compliance tracking",
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "border-orange-500",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large chains and franchises with complex needs",
      features: [
        "Unlimited locations",
        "Custom AI models",
        "Dedicated account manager",
        "White-label options",
        "Custom integrations",
        "24/7 phone support",
        "Advanced security",
        "Custom training",
      ],
      cta: "Contact Sales",
      popular: false,
      color: "border-gray-200",
    },
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
                  Simple, Transparent{" "}
                  <span className="text-orange-600">Pricing That Scales</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  No hidden fees, no surprises. Choose the plan that fits your
                  restaurant, or let our AI calculator show you exactly how much
                  you'll save.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <PrimaryButton
                    onClick={() => setShowCalculator(!showCalculator)}
                  >
                    <Calculator className="h-5 w-5 mr-2" />
                    Calculate Your Savings
                  </PrimaryButton>
                  <SecondaryButton asChild>
                    <Link href="/contact/demo">Talk to Sales</Link>
                  </SecondaryButton>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        {showCalculator && (
          <SectionContainer background="white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card padding="lg" className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    ROI Calculator
                  </h2>
                  <p className="text-gray-600">
                    See how much Sumo can save your restaurant
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Locations
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="50"
                        value={calculatorValues.locations}
                        onChange={(e) =>
                          setCalculatorValues({
                            ...calculatorValues,
                            locations: parseInt(e.target.value),
                          })
                        }
                        className="w-full"
                      />
                      <div className="text-sm text-gray-600 mt-1">
                        {calculatorValues.locations} location
                        {calculatorValues.locations > 1 ? "s" : ""}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Revenue ($)
                      </label>
                      <input
                        type="range"
                        min="10000"
                        max="1000000"
                        step="10000"
                        value={calculatorValues.monthlyRevenue}
                        onChange={(e) =>
                          setCalculatorValues({
                            ...calculatorValues,
                            monthlyRevenue: parseInt(e.target.value),
                          })
                        }
                        className="w-full"
                      />
                      <div className="text-sm text-gray-600 mt-1">
                        ${calculatorValues.monthlyRevenue.toLocaleString()}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Food Waste (%)
                      </label>
                      <input
                        type="range"
                        min="5"
                        max="30"
                        value={calculatorValues.currentWaste}
                        onChange={(e) =>
                          setCalculatorValues({
                            ...calculatorValues,
                            currentWaste: parseInt(e.target.value),
                          })
                        }
                        className="w-full"
                      />
                      <div className="text-sm text-gray-600 mt-1">
                        {calculatorValues.currentWaste}%
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-orange-50 rounded-xl p-6">
                      <h3 className="font-bold text-gray-900 mb-4">
                        Your Potential Savings
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Waste Reduction:
                          </span>
                          <span className="font-semibold text-green-600">
                            +$
                            {Math.round(savings.wasteSavings).toLocaleString()}
                            /month
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Efficiency Gains:
                          </span>
                          <span className="font-semibold text-blue-600">
                            +$
                            {Math.round(
                              savings.efficiencyGains
                            ).toLocaleString()}
                            /month
                          </span>
                        </div>
                        <div className="border-t pt-3 flex justify-between">
                          <span className="font-bold text-gray-900">
                            Total Savings:
                          </span>
                          <span className="font-bold text-orange-600">
                            ${Math.round(savings.totalSavings).toLocaleString()}
                            /month
                          </span>
                        </div>
                        <div className="text-center pt-2">
                          <span className="text-sm text-gray-600">ROI: </span>
                          <span className="font-bold text-green-600">
                            {Math.round(savings.roi)}%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <PrimaryButton asChild>
                        <Link href="https://sumo.ethertech.ltd/login">
                          Start Your Free Trial
                        </Link>
                      </PrimaryButton>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </SectionContainer>
        )}

        {/* Pricing Plans */}
        <SectionContainer background="gray">
          <SectionHeader
            title="Choose Your Plan"
            subtitle="All plans include 14-day free trial, no credit card required"
          />
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  padding="lg"
                  className={`h-full relative ${
                    plan.popular ? "ring-2 ring-orange-500" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <PrimaryButton asChild className="w-full">
                      <Link
                        href={
                          plan.name === "Enterprise"
                            ? "/contact/demo"
                            : "https://sumo.ethertech.ltd/login"
                        }
                      >
                        {plan.cta}
                      </Link>
                    </PrimaryButton>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionContainer>

        {/* Chat Integration */}
        <SectionContainer background="white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Chat with our AI assistant or schedule a personalized demo with
                our team
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SecondaryButton>
                  <Bot className="h-5 w-5 mr-2" />
                  Chat with SumoBot
                </SecondaryButton>
                <PrimaryButton asChild>
                  <Link href="/contact/demo">Schedule Demo</Link>
                </PrimaryButton>
              </div>
            </motion.div>
          </div>
        </SectionContainer>

        {/* Trust Indicators */}
        <SectionContainer background="gray">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Trusted by 10,000+ Restaurants
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    4.9/5
                  </div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">Customer Rating</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    99.9%
                  </div>
                  <p className="text-gray-600">Uptime Guarantee</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    24/7
                  </div>
                  <p className="text-gray-600">Support Available</p>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
}
