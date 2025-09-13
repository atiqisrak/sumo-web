"use client";

import { motion } from "framer-motion";
import { StarRating } from "@/components/ui/star-rating";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Sumo cut our food waste by 40% in the first month. The AI predictions are incredibly accurate.",
    author: "Maria Rodriguez",
    role: "Owner, Taco Haven",
    rating: 5,
    avatar: "/images/testimonials/maria.jpg",
    restaurant: "Taco Haven",
    location: "Austin, TX",
  },
  {
    quote:
      "Finally, a system that actually works for busy kitchens. Setup took 15 minutes and we were tracking everything.",
    author: "James Chen",
    role: "Manager, Urban Eats",
    rating: 5,
    avatar: "/images/testimonials/james.jpg",
    restaurant: "Urban Eats",
    location: "Seattle, WA",
  },
  {
    quote:
      "The inventory alerts saved us from running out of ingredients during our busiest weekend. Game changer!",
    author: "Sarah Thompson",
    role: "Head Chef, Bistro Central",
    rating: 5,
    avatar: "/images/testimonials/sarah.jpg",
    restaurant: "Bistro Central",
    location: "Chicago, IL",
  },
  {
    quote:
      "ROI was visible within 2 weeks. Staff loves the mobile app, and I love the detailed reports.",
    author: "David Kim",
    role: "Operations Manager, Fresh Kitchen",
    rating: 5,
    avatar: "/images/testimonials/david.jpg",
    restaurant: "Fresh Kitchen",
    location: "Los Angeles, CA",
  },
];

const logos = [
  { name: "Taco Haven", src: "/images/logos/taco-haven.svg" },
  { name: "Urban Eats", src: "/images/logos/urban-eats.svg" },
  { name: "Bistro Central", src: "/images/logos/bistro-central.svg" },
  { name: "Fresh Kitchen", src: "/images/logos/fresh-kitchen.svg" },
  { name: "Pizza Palace", src: "/images/logos/pizza-palace.svg" },
  { name: "Burger Barn", src: "/images/logos/burger-barn.svg" },
];

interface SocialProofProps {
  variant?: "testimonials" | "logos" | "combined";
  className?: string;
}

export default function SocialProof({
  variant = "combined",
  className = "",
}: SocialProofProps) {
  const renderTestimonials = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.author}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card padding="lg" className="h-full">
            <div className="space-y-4">
              <Quote className="h-8 w-8 text-orange-600" />

              <p className="text-gray-700 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="space-y-2">
                <StarRating
                  rating={testimonial.rating}
                  size="sm"
                  showRating={false}
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.restaurant} • {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  const renderLogos = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center items-center gap-8 opacity-60"
    >
      {logos.map((logo, index) => (
        <motion.div
          key={logo.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center h-12 w-32 grayscale hover:grayscale-0 transition-all duration-300"
        >
          <span className="font-semibold text-gray-400 text-sm">
            {logo.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );

  const renderStats = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
    >
      <div>
        <div className="text-3xl font-bold text-orange-600">10K+</div>
        <div className="text-sm text-gray-600">Restaurants</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-orange-600">4.9/5</div>
        <div className="text-sm text-gray-600">Average Rating</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-orange-600">30%</div>
        <div className="text-sm text-gray-600">Waste Reduction</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-orange-600">99.9%</div>
        <div className="text-sm text-gray-600">Uptime</div>
      </div>
    </motion.div>
  );

  return (
    <div className={`space-y-16 ${className}`}>
      {variant === "testimonials" && (
        <>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Restaurant Owners Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real results from real restaurants using Sumo to transform their
              operations.
            </p>
          </div>
          {renderTestimonials()}
        </>
      )}

      {variant === "logos" && (
        <>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Leading Restaurants
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From local cafes to restaurant chains, Sumo powers operations
              across the country.
            </p>
          </div>
          {renderLogos()}
        </>
      )}

      {variant === "combined" && (
        <>
          {/* Stats */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join the restaurants already transforming their operations with
              Sumo.
            </p>
            {renderStats()}
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Our Customers Say
            </h3>
            {renderTestimonials()}
          </div>

          {/* Logos */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Trusted by Leading Restaurants
            </h3>
            {renderLogos()}
          </div>
        </>
      )}
    </div>
  );
}
