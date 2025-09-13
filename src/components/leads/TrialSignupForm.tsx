"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { CheckCircle, User, Mail, Building, ArrowRight } from "lucide-react";

interface TrialSignupFormProps {
  variant?: "inline" | "modal" | "sidebar";
  className?: string;
  onSuccess?: () => void;
}

export function TrialSignupForm({
  variant = "inline",
  className = "",
  onSuccess,
}: TrialSignupFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    restaurantType: "",
    locations: "1",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission with GA4 tracking
    try {
      // In a real implementation, you would:
      // 1. Send data to your backend
      // 2. Track with GA4
      // 3. Send welcome email
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Track conversion event
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "trial_signup", {
          event_category: "engagement",
          event_label: "trial_signup_form",
          value: 1,
        });
      }

      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const benefits = [
    "14-day free trial",
    "No credit card required",
    "Full access to all features",
    "Personal onboarding call",
    "Cancel anytime",
  ];

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className={className}
      >
        <Card padding="lg" className="text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome to Sumo!
          </h3>
          <p className="text-gray-600 mb-6">
            Your trial account has been created. Check your email for login
            instructions and next steps.
          </p>
          <div className="space-y-3">
            <PrimaryButton asChild>
              <a
                href="https://sumo.ethertech.ltd/login"
                className="flex items-center justify-center space-x-2"
              >
                <span>Access Your Dashboard</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </PrimaryButton>
            <SecondaryButton asChild>
              <a
                href="/contact/demo"
                className="flex items-center justify-center space-x-2"
              >
                <span>Schedule Onboarding Call</span>
              </a>
            </SecondaryButton>
          </div>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <Card padding="lg">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Start Your Free Trial
          </h2>
          <p className="text-gray-600">
            No credit card required • 14-day free trial • Full access
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-gray-700 text-sm">{benefit}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="John"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Business Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="john@restaurant.com"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Restaurant/Company Name *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="The Golden Fork"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div>
              <label
                htmlFor="locations"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Number of Locations
              </label>
              <select
                id="locations"
                name="locations"
                value={formData.locations}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="1">1 Location</option>
                <option value="2-5">2-5 Locations</option>
                <option value="6-10">6-10 Locations</option>
                <option value="11-25">11-25 Locations</option>
                <option value="25+">25+ Locations</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="restaurantType"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Restaurant Type
            </label>
            <select
              id="restaurantType"
              name="restaurantType"
              value={formData.restaurantType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">Select restaurant type</option>
              <option value="restaurant">Restaurant</option>
              <option value="cafe">Cafe</option>
              <option value="fast-food">Fast Food</option>
              <option value="fine-dining">Fine Dining</option>
              <option value="chain">Chain Restaurant</option>
              <option value="franchise">Franchise</option>
              <option value="food-truck">Food Truck</option>
              <option value="other">Other</option>
            </select>
          </div>

          <PrimaryButton
            type="submit"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Creating Account...
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <User className="h-5 w-5" />
                <span>Start Free Trial</span>
                <ArrowRight className="h-5 w-5" />
              </div>
            )}
          </PrimaryButton>

          <p className="text-xs text-gray-500 text-center">
            By signing up, you agree to our{" "}
            <a href="/legal/terms" className="text-orange-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="/legal/privacy"
              className="text-orange-600 hover:underline"
            >
              Privacy Policy
            </a>
          </p>
        </form>
      </Card>
    </motion.div>
  );
}
