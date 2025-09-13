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
  Shield,
  FileText,
  Lock,
  Cookie,
  CheckCircle,
  AlertTriangle,
  Download,
} from "lucide-react";
import Link from "next/link";

export default function LegalPage() {
  const legalPages = [
    {
      icon: Shield,
      title: "Privacy Policy",
      description: "How we collect, use, and protect your personal information",
      lastUpdated: "Last updated: December 2024",
      link: "/legal/privacy",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: FileText,
      title: "Terms of Service",
      description: "The terms and conditions for using Sumo's services",
      lastUpdated: "Last updated: December 2024",
      link: "/legal/terms",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Lock,
      title: "Security Policy",
      description:
        "Our commitment to protecting your data and maintaining security",
      lastUpdated: "Last updated: December 2024",
      link: "/legal/security",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Cookie,
      title: "Cookie Policy",
      description:
        "Information about how we use cookies and tracking technologies",
      lastUpdated: "Last updated: December 2024",
      link: "/legal/cookies",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const securityFeatures = [
    {
      title: "SOC 2 Type II Certified",
      description:
        "We maintain the highest standards of security and compliance",
      icon: CheckCircle,
    },
    {
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest",
      icon: Lock,
    },
    {
      title: "Regular Security Audits",
      description: "Third-party security assessments ensure ongoing protection",
      icon: Shield,
    },
    {
      title: "GDPR Compliant",
      description: "Full compliance with European data protection regulations",
      icon: CheckCircle,
    },
    {
      title: "99.9% Uptime SLA",
      description: "Guaranteed service availability with financial backing",
      icon: CheckCircle,
    },
    {
      title: "Data Backup & Recovery",
      description: "Comprehensive backup systems protect your business data",
      icon: CheckCircle,
    },
  ];

  const dataPractices = [
    {
      category: "Data Collection",
      practices: [
        "We only collect data necessary for providing our services",
        "Customer data is collected with explicit consent",
        "No data is sold to third parties",
        "Transparent data usage policies",
      ],
    },
    {
      category: "Data Protection",
      practices: [
        "Industry-standard encryption protocols",
        "Regular security vulnerability assessments",
        "Access controls and authentication systems",
        "Secure data centers with physical security",
      ],
    },
    {
      category: "Data Usage",
      practices: [
        "Data used solely for service improvement",
        "AI models trained on anonymized data only",
        "Customer data never shared without consent",
        "Regular compliance audits and reviews",
      ],
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
                  Legal &{" "}
                  <span className="text-orange-600">Security Information</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Transparency and security are at the core of everything we do.
                  Learn about our privacy practices, security measures, and
                  legal commitments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <PrimaryButton asChild>
                    <Link href="/legal/security">Security Overview</Link>
                  </PrimaryButton>
                  <SecondaryButton asChild>
                    <Link href="/contact">Contact Legal Team</Link>
                  </SecondaryButton>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Legal Documents */}
        <SectionContainer background="white">
          <SectionHeader
            title="Legal Documents"
            subtitle="All the legal information you need to know about using Sumo"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {legalPages.map((page, index) => (
              <motion.div
                key={page.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card padding="lg" className="h-full">
                  <div className="space-y-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${page.color}`}
                    >
                      <page.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {page.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {page.description}
                      </p>
                      <p className="text-xs text-gray-500 mb-4">
                        {page.lastUpdated}
                      </p>
                    </div>
                    <div className="pt-2">
                      <SecondaryButton asChild className="w-full">
                        <Link
                          href={page.link}
                          className="flex items-center justify-center space-x-2"
                        >
                          <span>Read More</span>
                          <Download className="h-4 w-4" />
                        </Link>
                      </SecondaryButton>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionContainer>

        {/* Security Overview */}
        <SectionContainer background="gray">
          <SectionHeader
            title="Security & Compliance"
            subtitle="Your data security is our top priority"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card padding="lg" className="h-full">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <feature.icon className="h-6 w-6 text-green-500 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <PrimaryButton asChild>
                <Link href="/legal/security">View Full Security Report</Link>
              </PrimaryButton>
            </motion.div>
          </div>
        </SectionContainer>

        {/* Data Practices */}
        <SectionContainer background="white">
          <SectionHeader
            title="Our Data Practices"
            subtitle="How we handle your information with care and transparency"
          />
          <div className="grid lg:grid-cols-3 gap-8">
            {dataPractices.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card padding="lg" className="h-full">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {section.category}
                    </h3>
                    <div className="space-y-3">
                      {section.practices.map((practice, practiceIndex) => (
                        <div
                          key={practiceIndex}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {practice}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionContainer>

        {/* Trust Indicators */}
        <SectionContainer background="gradient">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Trust & Transparency{" "}
                <span className="text-orange-600">You Can Count On</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                We're committed to maintaining the highest standards of
                security, privacy, and compliance. Your trust is earned through
                transparency and consistent protection of your data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <PrimaryButton asChild>
                  <Link href="/contact">Contact Our Legal Team</Link>
                </PrimaryButton>
                <SecondaryButton asChild>
                  <Link href="/legal/privacy">Read Privacy Policy</Link>
                </SecondaryButton>
              </div>
            </motion.div>
          </div>
        </SectionContainer>

        {/* Important Notice */}
        <SectionContainer background="gray">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card padding="lg" className="max-w-4xl mx-auto">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Important Notice
                  </h3>
                  <p className="text-gray-600 mb-4">
                    This page provides a summary of our legal policies and
                    security practices. For the complete and legally binding
                    terms, please refer to the full documents linked above.
                    These policies may be updated from time to time, and we will
                    notify users of any material changes.
                  </p>
                  <p className="text-sm text-gray-500">
                    Last updated: December 2024 | Effective immediately upon
                    posting
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
}
