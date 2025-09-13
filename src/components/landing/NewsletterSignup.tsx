"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { CheckCircle, Mail, Gift } from "lucide-react";

interface NewsletterSignupProps {
  variant?: "inline" | "popup" | "modal";
  incentive?: string;
  className?: string;
}

export default function NewsletterSignup({
  variant = "inline",
  incentive = "Get our free AI Restaurant Guide + weekly tips",
  className = "",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsLoading(false);
    setEmail("");

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  if (variant === "popup") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className={`bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto ${className}`}
      >
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
            <Gift className="h-8 w-8 text-orange-600" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900">
            Get Your Free Guide
          </h3>
          <p className="text-gray-600">{incentive}</p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-4"
            >
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
              <h4 className="text-lg font-semibold text-gray-900">
                Welcome aboard!
              </h4>
              <p className="text-gray-600">
                Check your email for the free guide.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Get Free Guide"}
              </Button>
            </form>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <Card padding="lg" className={`${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-gray-900">Stay Updated</h3>
          <p className="text-gray-600">{incentive}</p>
        </div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4"
          >
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
            <h4 className="text-lg font-semibold text-gray-900">
              You're all set!
            </h4>
            <p className="text-gray-600">
              Check your inbox for our welcome email.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
              <Button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 whitespace-nowrap"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>

            <p className="text-xs text-gray-500">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </form>
        )}
      </motion.div>
    </Card>
  );
}
