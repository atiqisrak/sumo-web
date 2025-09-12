import { Star, Quote } from "lucide-react";
import Image from "next/image";

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Restaurant Owners Are{" "}
            <span className="text-orange-600">Saying About Sumo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of restaurant professionals who trust Sumo to
            streamline their operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="space-y-4">
                <Quote className="h-8 w-8 text-orange-600" />

                <p className="text-gray-700 font-medium leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(testimonial.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {testimonial.rating}
                  </span>
                </div>

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
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center space-y-6">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  10,000+
                </div>
                <p className="text-gray-700">Restaurants Powered</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  4.9/5
                </div>
                <p className="text-gray-700">Average Rating</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  99.9%
                </div>
                <p className="text-gray-700">Uptime Guarantee</p>
              </div>
            </div>
          </div>

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
      </div>
    </section>
  );
}
