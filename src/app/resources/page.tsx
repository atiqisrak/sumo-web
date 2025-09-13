import { Metadata } from "next";
import { ResourceGrid } from "@/components/content/ResourceGrid";
import { CategoryFilter } from "@/components/content/CategoryFilter";
import { SearchBar } from "@/components/content/SearchBar";
import { ContentNavigation } from "@/components/content/ContentNavigation";
import { NewsletterForm } from "@/components/leads/NewsletterForm";
import { DownloadForm } from "@/components/leads/DownloadForm";

export const metadata: Metadata = {
  title: "Resources | Sumo - Restaurant Management Software",
  description:
    "Access guides, case studies, webinars, and tools to optimize your restaurant operations with Sumo's AI-powered inventory management.",
  keywords:
    "restaurant resources, inventory guides, case studies, webinars, restaurant management tools",
};

const resources = [
  {
    id: "1",
    title: "Complete Inventory Management Guide",
    description:
      "Master inventory tracking with our comprehensive 50-page guide covering PO workflows, GRN processes, and waste reduction strategies.",
    type: "guide" as const,
    category: "inventory",
    isGated: true,
    thumbnail: "/images/resources/inventory-guide.jpg",
    downloadUrl: "/downloads/inventory-guide.pdf",
    readTime: "15 min read",
    publishedAt: "2024-01-15",
    featured: true,
  },
  {
    id: "2",
    title: "Cafe Bloom: 25% Waste Reduction Case Study",
    description:
      "See how Cafe Bloom cut food waste by 25% and improved profit margins using Sumo's AI analytics in just 3 months.",
    type: "case-study" as const,
    category: "success-stories",
    isGated: false,
    thumbnail: "/images/resources/cafe-bloom-case.jpg",
    videoUrl: "/videos/case-studies/cafe-bloom.mp4",
    readTime: "8 min read",
    publishedAt: "2024-01-10",
    featured: true,
  },
  {
    id: "3",
    title: "AI-Powered Purchase Orders Webinar",
    description:
      "Join our expert session on automating purchase orders with AI. Learn best practices for chain restaurants and franchises.",
    type: "webinar" as const,
    category: "ai",
    isGated: true,
    thumbnail: "/images/resources/ai-webinar.jpg",
    eventDate: "2024-02-15",
    duration: "45 min",
    speaker: "Sarah Chen, AI Product Manager",
    publishedAt: "2024-01-08",
    featured: false,
  },
  {
    id: "4",
    title: "Franchise Outlet Management Checklist",
    description:
      "Essential checklist for managing multiple franchise outlets. Includes compliance tracking, inventory synchronization, and reporting templates.",
    type: "guide" as const,
    category: "franchise",
    isGated: true,
    thumbnail: "/images/resources/franchise-checklist.jpg",
    downloadUrl: "/downloads/franchise-checklist.pdf",
    readTime: "12 min read",
    publishedAt: "2024-01-05",
    featured: false,
  },
  {
    id: "5",
    title: "ChainX: 40% Faster Purchase Orders",
    description:
      "Discover how ChainX restaurant group streamlined their purchase order process and reduced manual work by 40% across 15 locations.",
    type: "case-study" as const,
    category: "success-stories",
    isGated: false,
    thumbnail: "/images/resources/chainx-case.jpg",
    videoUrl: "/videos/case-studies/chainx.mp4",
    readTime: "10 min read",
    publishedAt: "2024-01-03",
    featured: true,
  },
  {
    id: "6",
    title: "Mobile App Setup Tutorial",
    description:
      "Step-by-step video tutorial for setting up Sumo mobile app. Perfect for managers and staff getting started with mobile inventory tracking.",
    type: "tutorial" as const,
    category: "mobile",
    isGated: false,
    thumbnail: "/images/resources/mobile-tutorial.jpg",
    videoUrl: "/videos/tutorials/mobile-setup.mp4",
    duration: "12 min",
    publishedAt: "2024-01-01",
    featured: false,
  },
  {
    id: "7",
    title: "ROI Calculator for Restaurants",
    description:
      "Interactive tool to calculate potential savings and ROI from implementing Sumo's inventory management system in your restaurant.",
    type: "tool" as const,
    category: "calculators",
    isGated: false,
    thumbnail: "/images/resources/roi-calculator.jpg",
    toolUrl: "/tools/roi-calculator",
    readTime: "5 min",
    publishedAt: "2024-01-01",
    featured: false,
  },
  {
    id: "8",
    title: "Food Safety Compliance Guide",
    description:
      "Comprehensive guide to maintaining food safety standards with digital tracking. Includes HACCP templates and audit checklists.",
    type: "guide" as const,
    category: "compliance",
    isGated: true,
    thumbnail: "/images/resources/food-safety-guide.jpg",
    downloadUrl: "/downloads/food-safety-guide.pdf",
    readTime: "20 min read",
    publishedAt: "2023-12-28",
    featured: false,
  },
];

const categories = [
  { id: "all", name: "All Resources", count: resources.length },
  {
    id: "inventory",
    name: "Inventory Management",
    count: resources.filter((r) => r.category === "inventory").length,
  },
  {
    id: "ai",
    name: "AI & Analytics",
    count: resources.filter((r) => r.category === "ai").length,
  },
  {
    id: "success-stories",
    name: "Success Stories",
    count: resources.filter((r) => r.category === "success-stories").length,
  },
  {
    id: "franchise",
    name: "Franchise Management",
    count: resources.filter((r) => r.category === "franchise").length,
  },
  {
    id: "mobile",
    name: "Mobile Solutions",
    count: resources.filter((r) => r.category === "mobile").length,
  },
  {
    id: "compliance",
    name: "Compliance",
    count: resources.filter((r) => r.category === "compliance").length,
  },
  {
    id: "calculators",
    name: "Tools & Calculators",
    count: resources.filter((r) => r.category === "calculators").length,
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Resources to <span className="text-blue-600">Transform</span> Your
              Restaurant
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Access expert guides, real success stories, and powerful tools to
              optimize your restaurant operations with AI-powered inventory
              management.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <SearchBar placeholder="Search resources, guides, and case studies..." />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Expert Guides</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  25+
                </div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  15+
                </div>
                <div className="text-sm text-gray-600">Webinars</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  10+
                </div>
                <div className="text-sm text-gray-600">Tools & Calculators</div>
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

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResourceGrid resources={resources} />
        </div>
      </section>

      {/* Lead Generation Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Our Complete Restaurant Management Starter Kit
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Download our free starter kit including inventory templates,
            compliance checklists, and ROI calculator. Join 10,000+ restaurants
            already optimizing with Sumo.
          </p>

          <div className="max-w-2xl mx-auto">
            <DownloadForm
              title="Download Starter Kit"
              description="Get instant access to our complete resource bundle"
              incentive="Free AI Inventory Guide included"
              buttonText="Download Now"
              className="bg-white text-blue-600 hover:bg-blue-50"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Restaurant Industry Insights
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get weekly tips, case studies, and exclusive resources delivered to
            your inbox.
          </p>

          <NewsletterForm
            incentive="Get our weekly restaurant optimization newsletter"
            placeholder="Enter your email address"
            buttonText="Subscribe"
            className="max-w-md mx-auto"
          />
        </div>
      </section>
    </div>
  );
}
