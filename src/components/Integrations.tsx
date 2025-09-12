import { Button } from "@/components/ui/button";

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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Seamless Integrations with{" "}
            <span className="text-orange-600">Your Favorite Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect in minutes for automated workflows. No more data silos or
            manual data entry.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to text logo if image fails to load
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling.style.display = "flex";
                  }}
                />
                <div className="w-16 h-16 bg-gray-100 rounded-lg hidden items-center justify-center">
                  <span className="text-2xl font-bold text-gray-600">
                    {integration.name.charAt(0)}
                  </span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {integration.name}
              </h3>
              <p className="text-sm text-gray-500">{integration.category}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
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
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8"
              >
                View All Integrations
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8"
              >
                Request Integration
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
