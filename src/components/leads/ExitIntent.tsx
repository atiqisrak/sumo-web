"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X, Calendar, Clock, Gift, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExitIntentProps {
  onClose?: () => void;
  onBookDemo?: (email: string, name: string) => void;
  className?: string;
}

export function ExitIntent({
  onClose,
  onBookDemo,
  className = "",
}: ExitIntentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving the top of the page
      if (e.clientY <= 0) {
        const hasSeenExitIntent = localStorage.getItem("sumo-exit-intent-seen");
        if (!hasSeenExitIntent) {
          setIsOpen(true);
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("sumo-exit-intent-seen", "true");
    if (onClose) {
      onClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (onBookDemo) {
        onBookDemo(email, name);
      }

      setIsBooked(true);
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isBooked) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
            >
              <Calendar className="w-12 h-12 text-green-600 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              Demo Booked Successfully!
            </h3>
            <p className="text-green-700 text-sm">
              We'll send you a calendar invite shortly. Looking forward to
              showing you how Sumo can transform your restaurant operations!
            </p>
          </motion.div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="absolute -top-2 -right-2 z-10 h-8 w-8 p-0 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <X className="h-4 w-4" />
            </Button>

            <Card className="border-0 shadow-none">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Wait! Don't Miss Out
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Get a <strong>free 30-minute consultation</strong> with our
                  restaurant experts
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-blue-900">
                      What you'll get:
                    </span>
                  </div>
                  <ul className="text-sm text-blue-800 space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      Personalized inventory analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      Custom ROI calculation for your restaurant
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      Live demo of Sumo's AI features
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      Free implementation roadmap
                    </li>
                  </ul>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full"
                  />

                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full"
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting || !email || !name.trim()}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Booking your consultation...
                        </motion.div>
                      ) : (
                        <motion.div
                          key="book"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <Calendar className="w-4 h-4" />
                          Book Free Consultation
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Button>

                  <AnimatePresence>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-sm text-red-600 text-center"
                      >
                        {error}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <div className="text-xs text-gray-500 text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Clock className="w-3 h-3" />
                      Usually responds within 2 hours
                    </div>
                    <p>No spam. Unsubscribe at any time.</p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
