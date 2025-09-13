"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Download, Calendar, Play, ArrowRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileCTAProps {
  type: "download" | "demo" | "trial" | "video";
  title: string;
  description: string;
  buttonText: string;
  onAction: () => void;
  onClose?: () => void;
  incentive?: string;
  urgency?: string;
  className?: string;
  showAfterScroll?: number; // Show after scrolling this many pixels
  showAfterDelay?: number; // Show after this many seconds
}

export function MobileCTA({
  type,
  title,
  description,
  buttonText,
  onAction,
  onClose,
  incentive,
  urgency,
  className = "",
  showAfterScroll = 500,
  showAfterDelay = 3000,
}: MobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Check if already dismissed
    const dismissed = localStorage.getItem(`mobile-cta-${type}-dismissed`);
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show after delay
    const delayTimer = setTimeout(() => {
      setIsVisible(true);
    }, showAfterDelay);

    // Show after scroll
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > showAfterScroll) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(delayTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showAfterDelay, showAfterScroll, type]);

  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem(`mobile-cta-${type}-dismissed`, "true");
    if (onClose) {
      onClose();
    }
  };

  const handleAction = () => {
    onAction();
    // Add haptic feedback if available
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const getTypeIcon = () => {
    switch (type) {
      case "download":
        return Download;
      case "demo":
        return Calendar;
      case "trial":
        return Star;
      case "video":
        return Play;
      default:
        return ArrowRight;
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case "download":
        return "bg-blue-600";
      case "demo":
        return "bg-green-600";
      case "trial":
        return "bg-purple-600";
      case "video":
        return "bg-orange-600";
      default:
        return "bg-gray-600";
    }
  };

  if (isDismissed || !isVisible) {
    return null;
  }

  const IconComponent = getTypeIcon();
  const colorClass = getTypeColor();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
        className={`fixed bottom-4 left-4 right-4 z-50 ${className}`}
      >
        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div
                className={`w-12 h-12 ${colorClass} rounded-full flex items-center justify-center flex-shrink-0`}
              >
                <IconComponent className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-sm leading-tight">
                      {title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={handleClose}
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  >
                    <X className="w-3 h-3 text-gray-600" />
                  </button>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-2 mt-2">
                  {incentive && (
                    <Badge
                      variant="secondary"
                      className="text-xs bg-green-100 text-green-800"
                    >
                      {incentive}
                    </Badge>
                  )}
                  {urgency && (
                    <Badge
                      variant="secondary"
                      className="text-xs bg-red-100 text-red-800"
                    >
                      {urgency}
                    </Badge>
                  )}
                </div>

                {/* Action Button */}
                <Button
                  onClick={handleAction}
                  className={`w-full mt-3 ${colorClass} hover:opacity-90 text-white text-sm font-medium py-2.5`}
                >
                  <motion.div
                    className="flex items-center justify-center gap-2"
                    whileTap={{ scale: 0.95 }}
                  >
                    {buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}

// Preset configurations for common CTAs
export const MobileCTAPresets = {
  download: {
    type: "download" as const,
    title: "Download Our Free Guide",
    description:
      "Get the complete restaurant optimization guide with templates and checklists.",
    buttonText: "Download Free",
    incentive: "No credit card required",
  },
  demo: {
    type: "demo" as const,
    title: "Book a Free Demo",
    description:
      "See how Sumo can transform your restaurant operations in just 30 minutes.",
    buttonText: "Schedule Demo",
    incentive: "Free consultation included",
  },
  trial: {
    type: "trial" as const,
    title: "Start Your Free Trial",
    description:
      "Try Sumo risk-free for 14 days. No setup fees, no long-term contracts.",
    buttonText: "Start Free Trial",
    incentive: "14-day free trial",
  },
  video: {
    type: "video" as const,
    title: "Watch Success Story",
    description:
      "See how Cafe Bloom reduced waste by 25% with Sumo's AI analytics.",
    buttonText: "Watch Video",
    incentive: "3-minute video",
  },
};
