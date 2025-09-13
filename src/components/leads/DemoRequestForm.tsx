"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  User,
  Building,
  Mail,
  Phone,
  CheckCircle,
  Send,
  Video,
  Users,
  BarChart3,
  Package,
} from "lucide-react";

interface DemoRequestFormProps {
  className?: string;
  variant?: "default" | "inline" | "modal";
  title?: string;
  subtitle?: string;
  ctaText?: string;
}

export function DemoRequestForm({
  className = "",
  variant = "default",
  title = "Schedule Your Free Demo",
  subtitle = "See how Sumo can transform your restaurant operations in just 30 minutes",
  ctaText = "Schedule Demo",
}: DemoRequestFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    restaurantType: "",
    locations: "",
    currentSystem: "",
    preferredTime: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Track conversion
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "demo_request", {
        event_category: "lead_generation",
        event_label: "demo_form",
        value: 1,
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const restaurantTypes = [
    "Cafe",
    "Quick Service Restaurant",
    "Full-Service Restaurant",
    "Fast Casual",
    "Fine Dining",
    "Chain/Franchise",
    "Food Truck",
    "Other",
  ];

  const currentSystems = [
    "Excel/Spreadsheets",
    "QuickBooks",
    "Square",
    "Toast",
    "Clover",
    "Revel",
    "Custom System",
    "No System",
    "Other",
  ];

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
  ];

  const demoFeatures = [
    {
      icon: Package,
      title: "AI Inventory Tracking",
      description: "See how our smart system reduces waste by 30%",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Discover insights that boost your profits",
    },
    {
      icon: Users,
      title: "Staff Management",
      description: "Streamline scheduling and compliance",
    },
    {
      icon: Video,
      title: "Live Demo",
      description: "Interactive walkthrough of your use case",
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
            Demo Scheduled!
          </h3>
          <p className="text-gray-600 mb-4">
            Thank you for your interest! We'll send you a calendar invite and
            preparation guide within the next hour.
          </p>
          <div className="space-y-3">
            <p className="text-sm text-gray-500">
              <strong>What's next:</strong>
            </p>
            <div className="text-left space-y-2 max-w-md mx-auto">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">
                  Calendar invite sent to your email
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">
                  Preparation guide with demo agenda
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">
                  Reminder 24 hours before your demo
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <SecondaryButton onClick={() => setIsSubmitted(false)}>
              Schedule Another Demo
            </SecondaryButton>
          </div>
        </motion.div>
      </Card>
    );
  }

  return (
    <Card padding="lg" className={className}>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        {/* Demo Features Preview */}
        <div className="grid grid-cols-2 gap-4">
          {demoFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl"
            >
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <feature.icon className="h-4 w-4 text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  {feature.title}
                </h4>
                <p className="text-xs text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                <User className="h-4 w-4 inline mr-1" />
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                <Mail className="h-4 w-4 inline mr-1" />
                Email Address *
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
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                <Building className="h-4 w-4 inline mr-1" />
                Restaurant Name *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="The Golden Spoon"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                <Phone className="h-4 w-4 inline mr-1" />
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="restaurantType"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Restaurant Type *
              </label>
              <select
                id="restaurantType"
                name="restaurantType"
                required
                value={formData.restaurantType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">Select restaurant type</option>
                {restaurantTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
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
                <option value="">Select number of locations</option>
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
              htmlFor="currentSystem"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Current Management System
            </label>
            <select
              id="currentSystem"
              name="currentSystem"
              value={formData.currentSystem}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">Select current system</option>
              {currentSystems.map((system) => (
                <option key={system} value={system}>
                  {system}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="preferredTime"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <Calendar className="h-4 w-4 inline mr-1" />
              Preferred Demo Time *
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              required
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">Select preferred time</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot} PST
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your current challenges or specific features you'd like to see..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div className="bg-orange-50 rounded-xl p-4">
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-orange-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  What to Expect
                </h4>
                <ul className="text-sm text-gray-600 mt-1 space-y-1">
                  <li>• 30-minute personalized demo</li>
                  <li>• Live walkthrough of your use case</li>
                  <li>• Q&A with our restaurant experts</li>
                  <li>• Custom recommendations for your business</li>
                </ul>
              </div>
            </div>
          </div>

          <PrimaryButton
            type="submit"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Scheduling Demo...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Calendar className="h-5 w-5 mr-2" />
                {ctaText}
              </div>
            )}
          </PrimaryButton>

          <p className="text-xs text-gray-500 text-center">
            By scheduling a demo, you agree to our{" "}
            <a
              href="/legal/privacy"
              className="text-orange-600 hover:underline"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/legal/terms" className="text-orange-600 hover:underline">
              Terms of Service
            </a>
            .
          </p>
        </form>
      </div>
    </Card>
  );
}
