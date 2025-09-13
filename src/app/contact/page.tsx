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
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  CheckCircle,
  Send,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    interest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
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

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description:
        "Get instant help from our AI assistant or human support team",
      action: "Start Chat",
      link: "#",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our restaurant experts",
      action: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Mail,
      title: "Email Support",
      description:
        "Send us a detailed message and we'll respond within 24 hours",
      action: "support@sumo.com",
      link: "mailto:support@sumo.com",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      description: "Come see us in person at our headquarters",
      action: "San Francisco, CA",
      link: "#",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const faqs = [
    {
      question: "How quickly can I get started with Sumo?",
      answer:
        "You can start your free trial in under 5 minutes. Our onboarding process is designed to get you up and running quickly with minimal setup required.",
    },
    {
      question: "Do you offer training for my staff?",
      answer:
        "Yes! We provide comprehensive training sessions, video tutorials, and ongoing support to ensure your team can use Sumo effectively.",
    },
    {
      question: "Can Sumo integrate with my existing POS system?",
      answer:
        "Absolutely. Sumo integrates with over 200+ popular POS systems, payment processors, and restaurant management tools.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer 24/7 support via chat, email, and phone. All plans include access to our knowledge base and video tutorials.",
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
                  Get in Touch{" "}
                  <span className="text-orange-600">We're Here to Help</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Have questions about Sumo? Need help getting started? Want to
                  see how we can transform your restaurant operations? We'd love
                  to hear from you.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <SectionContainer background="white">
          <SectionHeader
            title="Multiple Ways to Connect"
            subtitle="Choose the communication method that works best for you"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card padding="lg" className="text-center h-full">
                  <div className="space-y-4">
                    <div
                      className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center ${method.color}`}
                    >
                      <method.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {method.description}
                    </p>
                    <div className="pt-2">
                      {method.link.startsWith("http") ||
                      method.link.startsWith("tel") ||
                      method.link.startsWith("mailto") ? (
                        <a
                          href={method.link}
                          className="text-orange-600 hover:text-orange-700 font-medium text-sm"
                        >
                          {method.action}
                        </a>
                      ) : (
                        <span className="text-orange-600 font-medium text-sm">
                          {method.action}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionContainer>

        {/* Contact Form & Map */}
        <SectionContainer background="gray">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card padding="lg">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for reaching out. We'll get back to you within
                      24 hours.
                    </p>
                    <SecondaryButton onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </SecondaryButton>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
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
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
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
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
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
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        I'm interested in
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select an option</option>
                        <option value="demo">Scheduling a Demo</option>
                        <option value="trial">Starting a Free Trial</option>
                        <option value="pricing">Pricing Information</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">
                          Partnership Opportunities
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your restaurant and how we can help..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <PrimaryButton
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </div>
                      )}
                    </PrimaryButton>
                  </form>
                )}
              </Card>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Map Placeholder */}
              <Card padding="lg">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Visit Our Office
                  </h3>
                  <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Interactive Map</p>
                      <p className="text-sm text-gray-500">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Business Hours */}
              <Card padding="lg">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-orange-600" />
                    <h3 className="text-lg font-bold text-gray-900">
                      Business Hours
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">
                        10:00 AM - 4:00 PM PST
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Actions */}
              <Card padding="lg">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <PrimaryButton asChild className="w-full">
                      <Link href="/contact/demo">Schedule a Demo</Link>
                    </PrimaryButton>
                    <SecondaryButton asChild className="w-full">
                      <Link href="https://sumo.ethertech.ltd/login">
                        Start Free Trial
                      </Link>
                    </SecondaryButton>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </SectionContainer>

        {/* FAQ Section */}
        <SectionContainer background="white">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about Sumo"
          />
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card padding="lg">
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
}
