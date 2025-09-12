import {
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Plug,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Features() {
  const features = [
    {
      icon: Package,
      title: "Inventory Tracking",
      description:
        "Scan barcodes/QR codes for real-time stock levels, low-stock alerts, and waste reduction.",
      benefit: "Reduce waste by 30%",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: ShoppingCart,
      title: "Order Management",
      description:
        "Seamless from POS to delivery—track orders, integrate with suppliers, and automate reorders.",
      benefit: "Process 2x more orders",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Users,
      title: "Staff & Compliance",
      description:
        "Schedule shifts, monitor safety protocols, and ensure regulatory compliance with built-in checklists.",
      benefit: "Save 20 hours/week",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: BarChart3,
      title: "Insights & Reporting",
      description:
        "AI-driven analytics for sales forecasting, profit margins, and custom reports—export to PDF/CSV.",
      benefit: "Boost efficiency by 40%",
      color: "bg-orange-50 text-orange-600",
    },
    {
      icon: Plug,
      title: "Integrations",
      description:
        "Connect with 200+ tools like QuickBooks, Shopify, and Uber Eats for seamless workflows.",
      benefit: "Eliminate data silos",
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      description:
        "Manage everything on-the-go with iOS/Android apps—works offline too for uninterrupted service.",
      benefit: "24/7 accessibility",
      color: "bg-pink-50 text-pink-600",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features{" "}
            <span className="text-orange-600">Built for Restaurants</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to run a successful restaurant operation, from
            inventory to insights, all in one platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="space-y-6">
                <div
                  className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center`}
                >
                  <feature.icon className="h-8 w-8" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
                    {feature.benefit}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3"
          >
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
}
