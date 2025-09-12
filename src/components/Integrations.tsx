"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";

export default function Integrations() {
  const integrations = [
    {
      name: "QuickBooks",
      category: "Accounting",
      logo: "https://logos-world.net/wp-content/uploads/2021/03/QuickBooks-Logo.png",
    },
    {
      name: "Shopify",
      category: "E-commerce",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png",
    },
    {
      name: "DoorDash",
      category: "Delivery",
      logo: "https://logos-world.net/wp-content/uploads/2021/04/DoorDash-Logo.png",
    },
    {
      name: "Square",
      category: "POS",
      logo: "https://logos-world.net/wp-content/uploads/2021/04/Square-Logo.png",
    },
    {
      name: "Uber Eats",
      category: "Delivery",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Logo.png",
    },
    {
      name: "Google Workspace",
      category: "Productivity",
      logo: "https://logos-world.net/wp-content/uploads/2021/09/Google-Workspace-Logo.png",
    },
    {
      name: "Slack",
      category: "Communication",
      logo: "https://logos-world.net/wp-content/uploads/2020/12/Slack-Logo.png",
    },
    {
      name: "Stripe",
      category: "Payments",
      logo: "https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png",
    },
    {
      name: "Toast",
      category: "POS",
      logo: "https://cdn.worldvectorlogo.com/logos/toast-1.svg",
    },
    {
      name: "Grubhub",
      category: "Delivery",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Grubhub-Logo.png",
    },
  ];

  return (
    <SectionContainer background="gray">
      <SectionHeader
        title={
          <>
            Seamless Integrations with{" "}
            <span className="text-orange-600">Your Favorite Tools</span>
          </>
        }
        subtitle="Connect in minutes for automated workflows. No more data silos or manual data entry."
      />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        {integrations.map((integration, index) => (
          <Card key={index} className="text-center" padding="md">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <ImageWithFallback
                src={integration.logo}
                alt={integration.name}
                width={64}
                height={64}
                fallbackText={integration.name.charAt(0)}
                sizes="64px"
              />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">
              {integration.name}
            </h3>
            <p className="text-sm text-gray-500">{integration.category}</p>
          </Card>
        ))}
      </div>

      <Card padding="lg">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">
            200+ Integrations Available
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From accounting software to delivery platforms, Sumo connects with
            all the tools you already use. Set up automated workflows in
            minutes, not hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PrimaryButton>View All Integrations</PrimaryButton>
            <SecondaryButton>Request Integration</SecondaryButton>
          </div>
        </div>
      </Card>
    </SectionContainer>
  );
}
