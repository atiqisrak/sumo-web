import { Metadata } from "next";
import { WebinarCard } from "@/components/content/WebinarCard";
import { CategoryFilter } from "@/components/content/CategoryFilter";
import { SearchBar } from "@/components/content/SearchBar";
import { ContentNavigation } from "@/components/content/ContentNavigation";
import { NewsletterForm } from "@/components/leads/NewsletterForm";

export const metadata: Metadata = {
  title: "Restaurant Webinars | Sumo - Live & Recorded Sessions",
  description:
    "Join live webinars and watch recorded sessions on restaurant management, AI analytics, inventory optimization, and industry best practices.",
  keywords:
    "restaurant webinars, live sessions, recorded webinars, restaurant management training, AI analytics webinars",
};

const webinars = [
  {
    id: "1",
    title: "AI-Powered Purchase Orders: The Future of Restaurant Management",
    description:
      "Join our expert session on automating purchase orders with AI. Learn best practices for chain restaurants and franchises.",
    thumbnail: "/images/webinars/ai-purchase-orders.jpg",
    speaker: {
      name: "Sarah Chen",
      title: "AI Product Manager",
      company: "Sumo",
      avatar: "/images/speakers/sarah-chen.jpg",
    },
    eventDate: "2024-02-15T14:00:00Z",
    duration: "45 min",
    isLive: false,
    isRecorded: true,
    registrationUrl: "/webinars/ai-purchase-orders/register",
    videoUrl: "/videos/webinars/ai-purchase-orders.mp4",
    maxAttendees: 100,
    currentAttendees: 87,
    category: "ai",
    tags: ["AI", "purchase orders", "automation", "best practices"],
    featured: true,
  },
  {
    id: "2",
    title: "Inventory Management for Multi-Location Restaurants",
    description:
      "Learn how to effectively manage inventory across multiple locations with real-time tracking and automated reporting.",
    thumbnail: "/images/webinars/multi-location-inventory.jpg",
    speaker: {
      name: "Michael Rodriguez",
      title: "Operations Director",
      company: "ChainX Restaurant Group",
      avatar: "/images/speakers/michael-rodriguez.jpg",
    },
    eventDate: "2024-02-22T15:00:00Z",
    duration: "60 min",
    isLive: true,
    isRecorded: false,
    registrationUrl: "/webinars/multi-location-inventory/register",
    maxAttendees: 150,
    currentAttendees: 134,
    category: "inventory",
    tags: ["multi-location", "inventory", "chain restaurants", "reporting"],
    featured: true,
  },
  {
    id: "3",
    title: "Food Safety Compliance in the Digital Age",
    description:
      "Discover how digital tools can help maintain food safety standards and streamline compliance reporting.",
    thumbnail: "/images/webinars/food-safety-compliance.jpg",
    speaker: {
      name: "Dr. Lisa Wang",
      title: "Food Safety Consultant",
      company: "SafeFood Solutions",
      avatar: "/images/speakers/lisa-wang.jpg",
    },
    eventDate: "2024-02-28T13:00:00Z",
    duration: "50 min",
    isLive: false,
    isRecorded: true,
    videoUrl: "/videos/webinars/food-safety-compliance.mp4",
    category: "compliance",
    tags: ["food safety", "compliance", "digital tools", "HACCP"],
    featured: false,
  },
  {
    id: "4",
    title: "ROI Optimization for Restaurant Technology",
    description:
      "Learn how to calculate and maximize ROI from restaurant technology investments, with real case studies and examples.",
    thumbnail: "/images/webinars/roi-optimization.jpg",
    speaker: {
      name: "David Kim",
      title: "Financial Analyst",
      company: "Restaurant Finance Pro",
      avatar: "/images/speakers/david-kim.jpg",
    },
    eventDate: "2024-03-05T16:00:00Z",
    duration: "40 min",
    isLive: false,
    isRecorded: true,
    videoUrl: "/videos/webinars/roi-optimization.mp4",
    category: "finance",
    tags: ["ROI", "technology", "finance", "investment"],
    featured: false,
  },
  {
    id: "5",
    title: "Mobile-First Restaurant Management",
    description:
      "Explore how mobile apps are revolutionizing restaurant operations and learn best practices for mobile implementation.",
    thumbnail: "/images/webinars/mobile-restaurant-management.jpg",
    speaker: {
      name: "Alex Thompson",
      title: "Mobile Product Lead",
      company: "Sumo",
      avatar: "/images/speakers/alex-thompson.jpg",
    },
    eventDate: "2024-03-12T14:30:00Z",
    duration: "35 min",
    isLive: false,
    isRecorded: true,
    videoUrl: "/videos/webinars/mobile-restaurant-management.mp4",
    category: "mobile",
    tags: ["mobile", "apps", "restaurant operations", "implementation"],
    featured: false,
  },
  {
    id: "6",
    title: "Franchise Growth Strategies with Technology",
    description:
      "Learn how successful franchises use technology to scale operations and maintain consistency across locations.",
    thumbnail: "/images/webinars/franchise-growth.jpg",
    speaker: {
      name: "Jennifer Martinez",
      title: "Franchise Development Manager",
      company: "FranchiseMax",
      avatar: "/images/speakers/jennifer-martinez.jpg",
    },
    eventDate: "2024-03-19T15:30:00Z",
    duration: "55 min",
    isLive: false,
    isRecorded: true,
    videoUrl: "/videos/webinars/franchise-growth.mp4",
    category: "franchise",
    tags: ["franchise", "growth", "scaling", "technology"],
    featured: false,
  },
];

const categories = [
  { id: "all", name: "All Webinars", count: webinars.length },
  {
    id: "ai",
    name: "AI & Analytics",
    count: webinars.filter((w) => w.category === "ai").length,
  },
  {
    id: "inventory",
    name: "Inventory Management",
    count: webinars.filter((w) => w.category === "inventory").length,
  },
  {
    id: "compliance",
    name: "Compliance",
    count: webinars.filter((w) => w.category === "compliance").length,
  },
  {
    id: "finance",
    name: "Finance & ROI",
    count: webinars.filter((w) => w.category === "finance").length,
  },
  {
    id: "mobile",
    name: "Mobile Solutions",
    count: webinars.filter((w) => w.category === "mobile").length,
  },
  {
    id: "franchise",
    name: "Franchise Management",
    count: webinars.filter((w) => w.category === "franchise").length,
  },
];

export default function WebinarsPage() {
  const upcomingWebinars = webinars.filter(
    (w) => w.isLive || new Date(w.eventDate) > new Date()
  );
  const recordedWebinars = webinars.filter((w) => w.isRecorded && !w.isLive);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Live & <span className="text-purple-600">Recorded Webinars</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join live sessions with industry experts and access our library of
              recorded webinars. Learn from real-world case studies and proven
              strategies.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <SearchBar placeholder="Search webinars by topic, speaker, or date..." />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  15+
                </div>
                <div className="text-sm text-gray-600">Live Webinars</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  50+
                </div>
                <div className="text-sm text-gray-600">Recorded Sessions</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  2,500+
                </div>
                <div className="text-sm text-gray-600">Attendees</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  4.9★
                </div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContentNavigation />
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryFilter categories={categories} />
        </div>
      </section>

      {/* Live Webinars */}
      {upcomingWebinars.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Live & Upcoming Webinars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar) => (
                <WebinarCard
                  key={webinar.id}
                  webinar={webinar}
                  onRegister={() => console.log("Register for webinar")}
                  onWatch={() => console.log("Watch webinar")}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recorded Webinars */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Recorded Webinars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recordedWebinars.map((webinar) => (
              <WebinarCard
                key={webinar.id}
                webinar={webinar}
                onRegister={() => console.log("Register for webinar")}
                onWatch={() => console.log("Watch webinar")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Never Miss a Webinar
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Get notified about upcoming webinars, access to exclusive content,
            and industry insights delivered to your inbox.
          </p>

          <div className="max-w-2xl mx-auto">
            <NewsletterForm
              title="Stay Updated with Webinar Notifications"
              description="Get notified about upcoming webinars and exclusive content"
              incentive="Free webinar recordings and industry insights"
              buttonText="Subscribe"
              className="bg-white text-purple-600 hover:bg-purple-50"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
