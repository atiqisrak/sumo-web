import {
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Plug,
  Smartphone,
} from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { SecondaryButton } from "@/components/ui/secondary-button";

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
    <SectionContainer id="features" background="gray">
      <SectionHeader
        title={
          <>
            Powerful Features{" "}
            <span className="text-orange-600">Built for Restaurants</span>
          </>
        }
        subtitle="Everything you need to run a successful restaurant operation, from inventory to insights, all in one platform."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {features.map((feature, index) => (
          <Card key={index} padding="lg">
            <div className="space-y-6">
              <IconContainer
                color={
                  feature.color.split("-")[0] as
                    | "orange"
                    | "blue"
                    | "green"
                    | "purple"
                }
                size="lg"
              >
                <feature.icon className="h-8 w-8" />
              </IconContainer>

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
          </Card>
        ))}
      </div>

      <div className="text-center">
        <SecondaryButton>Explore All Features</SecondaryButton>
      </div>
    </SectionContainer>
  );
}
