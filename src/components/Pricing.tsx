import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Basic tracking for small spots",
      features: [
        "Up to 2 users",
        "1 location",
        "Basic inventory tracking",
        "Order management",
        "Email support",
        "Mobile app access",
      ],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "Pro",
      price: "$249",
      period: "/month",
      description: "Full features for growing chains",
      features: [
        "Unlimited users",
        "Up to 5 locations",
        "AI insights & forecasting",
        "Staff scheduling",
        "Advanced reporting",
        "Priority support",
        "All integrations",
        "Compliance tools",
      ],
      popular: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large operations",
      features: [
        "Unlimited everything",
        "Advanced integrations",
        "Dedicated support",
        "Custom training",
        "API access",
        "White-label options",
        "SLA guarantee",
        "Custom features",
      ],
      popular: false,
      cta: "Contact Sales",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple Pricing for{" "}
            <span className="text-orange-600">Every Restaurant</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            All plans include 24/7 support, unlimited training, and easy
            cancellation. No hidden fees, ever.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            <Star className="h-4 w-4 mr-2" />
            ROI typically achieved within weeks
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 shadow-lg"
                  : "bg-gray-50 border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className={`w-full ${
                    plan.popular
                      ? "bg-orange-600 hover:bg-orange-700 text-white"
                      : "bg-white border border-orange-600 text-orange-600 hover:bg-orange-50"
                  }`}
                  asChild
                >
                  <Link href="https://sumo.ethertech.ltd/login">
                    {plan.cta}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-12 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl font-bold">
              Ready to Transform Your Restaurant?
            </h3>
            <p className="text-xl text-orange-100">
              Join 10,000+ restaurants already using Sumo to streamline
              operations and boost profits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3"
                asChild
              >
                <Link href="https://sumo.ethertech.ltd/login">
                  Start 14-Day Free Trial
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-orange-600 px-8 py-3"
                asChild
              >
                <Link href="https://sumo.ethertech.ltd">Schedule a Demo</Link>
              </Button>
            </div>
            <p className="text-sm text-orange-200">
              No credit card required • Cancel anytime • Setup in under 30
              minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
