"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { PrimaryButton } from "@/components/ui/primary-button";
import {
  Mail,
  CheckCircle,
  Gift,
  Download,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

interface NewsletterSignupProps {
  variant?: "default" | "inline" | "modal" | "popup";
  title?: string;
  subtitle?: string;
  incentive?: string;
  incentiveDescription?: string;
  className?: string;
  showBenefits?: boolean;
  showIncentive?: boolean;
}

export function NewsletterSignup({
  variant = "default",
  title = "Stay Updated with Restaurant Industry Insights",
  subtitle = "Get weekly tips, case studies, and exclusive offers delivered to your inbox.",
  incentive = "Free AI Inventory Guide",
  incentiveDescription = "Download our comprehensive guide to AI-powered inventory management",
  className = "",
  showBenefits = true,
  showIncentive = true,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Track conversion
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "newsletter_signup", {
        event_category: "lead_generation",
        event_label: "newsletter_form",
        value: 1,
      });
    }
  };

  const handleInlineSubmit = () => {
    handleSubmit();
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Industry Insights",
      description: "Weekly trends and best practices",
    },
    {
      icon: Users,
      title: "Case Studies",
      description: "Real success stories from peers",
    },
    {
      icon: Gift,
      title: "Exclusive Offers",
      description: "Special discounts and early access",
    },
    {
      icon: Star,
      title: "Expert Tips",
      description: "Proven strategies from industry leaders",
    },
  ];

  if (isSubmitted) {
    return (
      <Card padding="lg" className={className}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center py-8"
        >
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome to the Community!
          </h3>
          <p className="text-gray-600 mb-6">
            Thank you for subscribing! Check your email for your free guide and
            confirmation.
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm text-gray-700">
                Free AI Inventory Guide sent
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm text-gray-700">
                Weekly insights starting next week
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm text-gray-700">
                Exclusive offers and early access
              </span>
            </div>
          </div>
        </motion.div>
      </Card>
    );
  }

  if (variant === "inline") {
    return (
      <div className={`flex flex-col sm:flex-row gap-4 items-end ${className}`}>
        <div className="flex-1">
          <label
            htmlFor="email-inline"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email-inline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
          />
        </div>
        <PrimaryButton
          onClick={handleInlineSubmit}
          disabled={isSubmitting || !email}
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </PrimaryButton>
      </div>
    );
  }

  if (variant === "modal") {
    return (
      <div
        className={`fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 ${className}`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl max-w-md w-full"
        >
          <Card padding="lg">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm">{subtitle}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <PrimaryButton
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="w-full"
                >
                  {isSubmitting
                    ? "Subscribing..."
                    : "Subscribe & Get Free Guide"}
                </PrimaryButton>
              </form>

              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <Card padding="lg" className={className}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-orange-600" />
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 mb-8">{subtitle}</p>

          {showIncentive && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 mb-8 border-2 border-orange-200"
            >
              <div className="flex items-center justify-center space-x-3 mb-3">
                <Gift className="h-6 w-6 text-orange-600" />
                <h3 className="text-lg font-bold text-gray-900">{incentive}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                {incentiveDescription}
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <Download className="h-4 w-4" />
                <span>PDF Download • 24 Pages • Free</span>
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 mb-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>

            <PrimaryButton
              type="submit"
              disabled={isSubmitting || !email}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Subscribing...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Subscribe & Get Free Guide
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              )}
            </PrimaryButton>
          </form>

          {showBenefits && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-center p-4 bg-gray-50 rounded-xl"
                >
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <benefit.icon className="h-5 w-5 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          <p className="text-xs text-gray-500 mt-6">
            We respect your privacy. Unsubscribe at any time. By subscribing,
            you agree to our{" "}
            <a
              href="/legal/privacy"
              className="text-orange-600 hover:underline"
            >
              Privacy Policy
            </a>
            .
          </p>
        </motion.div>
      </div>
    </Card>
  );
}
