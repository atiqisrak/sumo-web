"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Download, FileText, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DownloadFormProps {
  title: string;
  description?: string;
  incentive?: string;
  buttonText?: string;
  className?: string;
  onDownload?: (email: string, name: string) => void;
  requireName?: boolean;
}

export function DownloadForm({
  title,
  description = "Get instant access to this valuable resource.",
  incentive = "Free download - No credit card required",
  buttonText = "Download Now",
  className = "",
  onDownload,
  requireName = true,
}: DownloadFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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

    if (requireName && !name.trim()) {
      setError("Please enter your name");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (onDownload) {
        onDownload(email, name);
      }

      setIsDownloaded(true);
      setEmail("");
      setName("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isDownloaded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={className}
      >
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
            >
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              Download Started!
            </h3>
            <p className="text-green-700 text-sm mb-4">
              Your download should begin automatically. We've also sent a copy
              to your email address.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-green-600">
              <Mail className="w-4 h-4" />
              Check your email for the download link
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={className}
    >
      <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardHeader className="text-center pb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-6 h-6 text-blue-600" />
          </div>
          <CardTitle className="text-xl font-bold text-gray-900">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600">
            {description}
          </CardDescription>
          {incentive && (
            <p className="text-sm text-blue-600 font-medium mt-2">
              {incentive}
            </p>
          )}
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {requireName && (
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSubmitting}
                className="w-full"
              />
            )}

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
              disabled={isSubmitting || !email || (requireName && !name.trim())}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
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
                    Preparing download...
                  </motion.div>
                ) : (
                  <motion.div
                    key="download"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    {buttonText}
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

            <div className="text-xs text-gray-500 text-center space-y-1">
              <p>By downloading, you agree to receive our newsletter</p>
              <p>We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
