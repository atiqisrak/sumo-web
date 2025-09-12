import { Quote } from "lucide-react";
import Image from "next/image";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { StarRating } from "@/components/ui/star-rating";
import { StatCard } from "@/components/ui/stat-card";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Sumo cut our inventory waste by 25%—game-changer for our chain!",
      author: "Alex R.",
      title: "Urban Bistro Owner",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      quote: "Easy staff tracking and compliance—saved us hours every week.",
      author: "Maria S.",
      title: "Cafe Manager",
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      quote:
        "Integrates perfectly with our POS; real-time insights boosted profits.",
      author: "Jordan T.",
      title: "Food Truck Operator",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      quote:
        "The AI forecasting is incredible—we never run out of ingredients anymore.",
      author: "Sarah L.",
      title: "Restaurant Chain Director",
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <SectionContainer background="white">
      <SectionHeader
        title={
          <>
            What Restaurant Owners Are{" "}
            <span className="text-orange-600">Saying About Sumo</span>
          </>
        }
        subtitle="Join thousands of restaurant professionals who trust Sumo to streamline their operations."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {testimonials.map((testimonial, index) => (
          <Card key={index} variant="outlined" padding="md">
            <div className="space-y-4">
              <Quote className="h-8 w-8 text-orange-600" />

              <p className="text-gray-700 font-medium leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <StarRating rating={testimonial.rating} showRating />

              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Trust Indicators */}
      <div className="text-center space-y-6">
        <Card
          className="bg-gradient-to-r from-orange-50 to-orange-100"
          padding="lg"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <StatCard
              value="10,000+"
              label="Restaurants Powered"
              className="text-orange-600"
            />
            <StatCard
              value="4.9/5"
              label="Average Rating"
              className="text-orange-600"
            />
            <StatCard
              value="99.9%"
              label="Uptime Guarantee"
              className="text-orange-600"
            />
          </div>
        </Card>

        <div className="flex justify-center items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">App</span>
            </div>
            <span className="text-sm text-gray-600">App Store</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">GP</span>
            </div>
            <span className="text-sm text-gray-600">Google Play</span>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
