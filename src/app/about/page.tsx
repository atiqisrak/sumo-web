"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { motion } from "framer-motion";
import { Users, Target, Zap, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: "Customer-Centric",
      description:
        "Every feature is built with restaurant owners and managers in mind, solving real problems they face daily.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "We measure success by your success—reduced waste, increased efficiency, and higher profits.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "Cutting-edge AI and automation to keep you ahead of the competition and industry trends.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Heart,
      title: "Passion for Food",
      description:
        "We love the restaurant industry and are committed to helping it thrive in the digital age.",
      color: "bg-pink-100 text-pink-600",
    },
  ];

  const timeline = [
    {
      year: "2020",
      title: "The Problem We Saw",
      description:
        "Restaurant owners were drowning in spreadsheets, manual processes, and outdated software that couldn't keep up with modern demands.",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop&crop=center",
    },
    {
      year: "2021",
      title: "Sumo Was Born",
      description:
        "Our team of restaurant veterans and tech experts came together to build something better—a unified platform that actually works.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center",
    },
    {
      year: "2022",
      title: "AI-Powered Innovation",
      description:
        "We integrated machine learning to predict demand, reduce waste, and provide insights that were impossible with traditional systems.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop&crop=center",
    },
    {
      year: "2023",
      title: "Global Expansion",
      description:
        "From local cafes to international chains, Sumo now serves over 10,000 restaurants worldwide, processing millions of orders daily.",
      image:
        "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&h=400&fit=crop&crop=center",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-orange-50 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  We're Restaurant People,{" "}
                  <span className="text-orange-600">
                    Building for Restaurant People
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Sumo was founded by restaurant veterans who experienced the
                  chaos of outdated systems firsthand. We built the platform we
                  wished we had—intelligent, unified, and actually designed for
                  modern restaurants.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <PrimaryButton asChild>
                    <Link href="/contact/demo">Book a Demo</Link>
                  </PrimaryButton>
                  <SecondaryButton asChild>
                    <Link href="/company/careers">Join Our Team</Link>
                  </SecondaryButton>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <Image
                  src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=600&fit=crop&crop=center"
                  alt="Restaurant team working together"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">
                      10,000+ Happy Customers
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <SectionContainer background="white">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide everything we do at Sumo"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card padding="lg" className="text-center">
                  <div className="space-y-4">
                    <div
                      className={`w-16 h-16 mx-auto rounded-xl flex items-center justify-center ${value.color}`}
                    >
                      <value.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionContainer>

        {/* Timeline */}
        <SectionContainer background="gray">
          <SectionHeader
            title="Our Journey"
            subtitle="From problem to solution—how Sumo evolved to become the restaurant management platform of choice"
          />
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <Card padding="lg">
                    <div className="space-y-4">
                      <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </div>
                <div className="flex-1">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </SectionContainer>

        {/* CTA Section */}
        <SectionContainer background="gradient">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Ready to Experience the{" "}
                <span className="text-orange-600">Sumo Difference?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Join thousands of restaurants that have transformed their
                operations with Sumo's intelligent management platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <PrimaryButton asChild>
                  <Link href="https://sumo.ethertech.ltd/login">
                    Start Free Trial
                  </Link>
                </PrimaryButton>
                <SecondaryButton asChild>
                  <Link href="/contact/demo">Schedule Demo</Link>
                </SecondaryButton>
              </div>
            </motion.div>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
}
