import { Button } from "@/components/ui/button";
import { Star, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-orange-50 py-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8 lg:-mt-10">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Smart Restaurant Management That{" "}
                <span className="text-orange-600">Tracks Everything</span>,
                Effortlessly
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Sumo unifies inventory tracking, order management, staff
                scheduling, and real-time insights into one AI-powered SaaS
                platform. Scale your restaurant operations, reduce waste, and
                boost profits—trusted by 10,000+ eateries worldwide.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">
                  4.9/5 from 500+ reviews
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg"
                asChild
              >
                <Link href="https://sumo.ethertech.ltd/login">
                  Start 14-Day Free Trial – No Credit Card Needed
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg"
                asChild
              >
                <Link href="https://sumo.ethertech.ltd">Book a Demo</Link>
              </Button>
            </div>

            {/* Customer Logos */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">
                Used by leading restaurants:
              </p>
              <div className="flex items-center space-x-8 text-gray-400">
                <span className="font-semibold">Taco Haven</span>
                <span className="font-semibold">Urban Eats</span>
                <span className="font-semibold">Bistro Central</span>
                <span className="font-semibold">Fresh Kitchen</span>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Screenshot */}
          <div className="relative">
            <div className="relative">
              <div className="relative w-full rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                <Image
                  src="https://i.postimg.cc/hhW3tb2g/sumodash.png"
                  alt="Sumo Restaurant Dashboard"
                  width={700}
                  height={300}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Overlay Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Live Dashboard
                  </span>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-orange-600 text-white rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">30%</div>
                  <div className="text-xs opacity-90">Waste Reduced</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
