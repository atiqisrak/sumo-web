"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Lock,
  Download,
  Mail,
  User,
  CheckCircle,
  Clock,
  FileText,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  trackFormSubmission,
  trackDownload,
  trackLeadGeneration,
} from "@/lib/analytics";

interface GatedContentProps {
  content: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    type: "guide" | "case-study" | "webinar" | "tool" | "template";
    fileSize?: string;
    pages?: number;
    readTime?: string;
    downloadUrl: string;
    previewUrl?: string;
  };
  onDownload?: (email: string, name: string) => void;
  onPreview?: () => void;
  className?: string;
  incentive?: string;
  requireName?: boolean;
}

const typeIcons = {
  guide: FileText,
  "case-study": Star,
  webinar: Clock,
  tool: Download,
  template: FileText,
};

const typeColors = {
  guide: "bg-blue-100 text-blue-800",
  "case-study": "bg-green-100 text-green-800",
  webinar: "bg-purple-100 text-purple-800",
  tool: "bg-orange-100 text-orange-800",
  template: "bg-pink-100 text-pink-800",
};

export function GatedContent({
  content,
  onDownload,
  onPreview,
  className = "",
  incentive = "Free download - No credit card required",
  requireName = true,
}: GatedContentProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleDownload = async (e: React.FormEvent) => {
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

      // Track the download
      trackDownload(content.title, "pdf", true);
      trackFormSubmission(content.id, "download", true);
      trackLeadGeneration("gated_content", "email", 1);

      if (onDownload) {
        onDownload(email, name);
      }

      setIsDownloaded(true);
      setEmail("");
      setName("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      trackFormSubmission(content.id, "download", false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePreview = () => {
    if (onPreview) {
      onPreview();
    }
    // Track preview event
    trackDownload(content.title, "other", false);
  };

  const IconComponent = typeIcons[content.type];
  const colorClass = typeColors[content.type];

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
      <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3 mb-3">
            <div
              className={`w-12 h-12 ${colorClass} rounded-lg flex items-center justify-center`}
            >
              <IconComponent className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Badge className={`${colorClass} font-medium`}>
                  {content.type.replace("-", " ")}
                </Badge>
                <Badge className="bg-orange-100 text-orange-800 font-medium">
                  <Lock className="w-3 h-3 mr-1" />
                  Gated
                </Badge>
              </div>
              <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                {content.title}
              </CardTitle>
            </div>
          </div>
          <CardDescription className="text-sm">
            {content.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Content metadata */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            {content.readTime && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {content.readTime}
              </div>
            )}
            {content.pages && (
              <div className="flex items-center gap-1">
                <FileText className="w-4 h-4" />
                {content.pages} pages
              </div>
            )}
            {content.fileSize && (
              <div className="flex items-center gap-1">
                <Download className="w-4 h-4" />
                {content.fileSize}
              </div>
            )}
          </div>

          {/* Incentive */}
          {incentive && (
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="flex items-center gap-2 text-sm text-blue-800">
                <Star className="w-4 h-4" />
                <span className="font-medium">{incentive}</span>
              </div>
            </div>
          )}

          {/* Form or CTA */}
          <AnimatePresence mode="wait">
            {!showForm ? (
              <motion.div
                key="cta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-3"
              >
                <Button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Download Free
                </Button>
                {content.previewUrl && (
                  <Button
                    onClick={handlePreview}
                    variant="outline"
                    className="w-full"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                )}
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                onSubmit={handleDownload}
                className="space-y-4"
              >
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
                  disabled={
                    isSubmitting || !email || (requireName && !name.trim())
                  }
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
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
                        Download Now
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
              </motion.form>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}
