"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Calendar,
  Star,
  Play,
  ArrowRight,
  Clock,
  Users,
  TrendingUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PersonalizedCTAProps {
  userType?: "cafe" | "chain" | "franchise" | "unknown";
  userBehavior?: "first-visit" | "returning" | "engaged" | "ready-to-buy";
  pageContext?: "home" | "features" | "pricing" | "resources" | "case-studies";
  className?: string;
  onAction?: (action: string, context: string) => void;
}

interface CTAConfig {
  title: string;
  description: string;
  buttonText: string;
  buttonIcon: React.ComponentType<{ className?: string }>;
  incentive: string;
  urgency?: string;
  color: string;
  action: string;
}

const ctaConfigs: Record<string, CTAConfig> = {
  "cafe-first-visit": {
    title: "Perfect for Independent Cafes",
    description:
      "Join 500+ cafes already reducing waste and increasing profits with Sumo's AI-powered inventory management.",
    buttonText: "Start Free Trial",
    buttonIcon: Star,
    incentive: "14-day free trial",
    urgency: "Limited time offer",
    color: "bg-green-600",
    action: "trial",
  },
  "cafe-returning": {
    title: "Ready to Transform Your Cafe?",
    description:
      "See how similar cafes achieved 25% waste reduction and $2,400 monthly savings.",
    buttonText: "Watch Success Story",
    buttonIcon: Play,
    incentive: "3-minute video",
    color: "bg-blue-600",
    action: "video",
  },
  "cafe-engaged": {
    title: "Get Your Free Cafe Optimization Guide",
    description:
      "Download our comprehensive guide with templates, checklists, and proven strategies for cafe success.",
    buttonText: "Download Guide",
    buttonIcon: Download,
    incentive: "Free PDF guide",
    color: "bg-purple-600",
    action: "download",
  },
  "cafe-ready-to-buy": {
    title: "Book Your Free Consultation",
    description:
      "Get a personalized demo and see exactly how Sumo can transform your cafe operations.",
    buttonText: "Schedule Demo",
    buttonIcon: Calendar,
    incentive: "Free 30-minute consultation",
    urgency: "Only 3 spots left this week",
    color: "bg-orange-600",
    action: "demo",
  },
  "chain-first-visit": {
    title: "Built for Restaurant Chains",
    description:
      "Manage inventory across multiple locations with centralized control and real-time analytics.",
    buttonText: "See Chain Solutions",
    buttonIcon: Users,
    incentive: "Multi-location management",
    color: "bg-blue-600",
    action: "features",
  },
  "chain-returning": {
    title: "Scale Your Chain Operations",
    description:
      "Learn how ChainX achieved 40% faster purchase orders across 15 locations.",
    buttonText: "Read Case Study",
    buttonIcon: TrendingUp,
    incentive: "Real results from similar chains",
    color: "bg-green-600",
    action: "case-study",
  },
  "franchise-first-visit": {
    title: "Franchise Management Made Simple",
    description:
      "Maintain consistency and compliance across all franchise locations with centralized control.",
    buttonText: "Explore Franchise Tools",
    buttonIcon: Users,
    incentive: "Franchise-specific features",
    color: "bg-purple-600",
    action: "features",
  },
  "franchise-returning": {
    title: "Franchise Growth Success Stories",
    description:
      "See how FranchiseMax scaled to 50+ outlets while maintaining 100% compliance.",
    buttonText: "View Success Story",
    buttonIcon: Play,
    incentive: "Franchise case study",
    color: "bg-orange-600",
    action: "case-study",
  },
  default: {
    title: "Transform Your Restaurant Operations",
    description:
      "Join 1,000+ restaurants using AI-powered inventory management to reduce waste and increase profits.",
    buttonText: "Get Started",
    buttonIcon: ArrowRight,
    incentive: "Free trial available",
    color: "bg-blue-600",
    action: "trial",
  },
};

export function PersonalizedCTA({
  userType = "unknown",
  userBehavior = "first-visit",
  pageContext = "home",
  className = "",
  onAction,
}: PersonalizedCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [config, setConfig] = useState<CTAConfig>(ctaConfigs.default);

  useEffect(() => {
    // Determine the best CTA based on user context
    const key = `${userType}-${userBehavior}`;
    const selectedConfig = ctaConfigs[key] || ctaConfigs.default;
    setConfig(selectedConfig);

    // Show CTA after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [userType, userBehavior]);

  const handleAction = () => {
    if (onAction) {
      onAction(config.action, pageContext);
    }

    // Track the action
    if (typeof window !== "undefined" && (window as { gtag?: unknown }).gtag) {
      (
        window as {
          gtag: (
            command: string,
            event: string,
            params: Record<string, unknown>
          ) => void;
        }
      ).gtag("event", "cta_click", {
        event_category: "engagement",
        event_label: `${config.action}-${pageContext}`,
        value: 1,
      });
    }
  };

  const IconComponent = config.buttonIcon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
          className={`w-full ${className}`}
        >
          <Card className="relative overflow-hidden border-0 shadow-xl">
            {/* Background gradient */}
            <div className={`absolute inset-0 ${config.color} opacity-5`} />

            <CardContent className="relative p-6">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${config.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {config.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {config.description}
                      </p>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-green-100 text-green-800 font-medium">
                      {config.incentive}
                    </Badge>
                    {config.urgency && (
                      <Badge className="bg-red-100 text-red-800 font-medium">
                        {config.urgency}
                      </Badge>
                    )}
                  </div>

                  {/* Action Button */}
                  <Button
                    onClick={handleAction}
                    className={`${config.color} hover:opacity-90 text-white px-6 py-3 text-lg font-medium`}
                  >
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="w-5 h-5" />
                      {config.buttonText}
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Hook for user behavior tracking
export function useUserBehavior() {
  const [userBehavior, setUserBehavior] = useState<
    "first-visit" | "returning" | "engaged" | "ready-to-buy"
  >("first-visit");
  const [userType, setUserType] = useState<
    "cafe" | "chain" | "franchise" | "unknown"
  >("unknown");

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("sumo-visited");
    if (hasVisited) {
      setUserBehavior("returning");
    } else {
      localStorage.setItem("sumo-visited", "true");
    }

    // Track scroll depth for engagement
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      maxScroll = Math.max(maxScroll, scrollPercent);

      if (maxScroll > 75) {
        setUserBehavior("engaged");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { userBehavior, userType, setUserType };
}
