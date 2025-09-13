import { Metadata } from "next";
import { GuideCard } from "@/components/content/GuideCard";
import { CategoryFilter } from "@/components/content/CategoryFilter";
import { SearchBar } from "@/components/content/SearchBar";
import { ContentNavigation } from "@/components/content/ContentNavigation";
import { DownloadForm } from "@/components/leads/DownloadForm";

export const metadata: Metadata = {
  title: "Restaurant Guides | Sumo - Expert Resources & Tutorials",
  description:
    "Access comprehensive guides, tutorials, and resources to optimize your restaurant operations. Expert insights on inventory management, AI analytics, and more.",
  keywords:
    "restaurant guides, inventory management tutorials, restaurant optimization, AI analytics guides, compliance checklists",
};

const guides = [
  {
    id: "1",
    title: "Complete Inventory Management Guide",
    description:
      "Master inventory tracking with our comprehensive 50-page guide covering PO workflows, GRN processes, and waste reduction strategies.",
    thumbnail: "/images/guides/inventory-guide.jpg",
    isGated: true,
    downloadUrl: "/downloads/inventory-guide.pdf",
    readTime: "15 min read",
    publishedAt: "2024-01-15",
    category: "inventory",
    pages: 50,
    fileSize: "2.3 MB",
    tags: ["inventory", "purchase orders", "waste reduction", "best practices"],
    featured: true,
  },
  {
    id: "2",
    title: "Franchise Outlet Management Checklist",
    description:
      "Essential checklist for managing multiple franchise outlets. Includes compliance tracking, inventory synchronization, and reporting templates.",
    thumbnail: "/images/guides/franchise-checklist.jpg",
    isGated: true,
    downloadUrl: "/downloads/franchise-checklist.pdf",
    readTime: "12 min read",
    publishedAt: "2024-01-05",
    category: "franchise",
    pages: 25,
    fileSize: "1.8 MB",
    tags: ["franchise", "compliance", "multi-location", "checklist"],
    featured: true,
  },
  {
    id: "3",
    title: "Food Safety Compliance Guide",
    description:
      "Comprehensive guide to maintaining food safety standards with digital tracking. Includes HACCP templates and audit checklists.",
    thumbnail: "/images/guides/food-safety-guide.jpg",
    isGated: true,
    downloadUrl: "/downloads/food-safety-guide.pdf",
    readTime: "20 min read",
    publishedAt: "2023-12-28",
    category: "compliance",
    pages: 35,
    fileSize: "2.1 MB",
    tags: ["food safety", "compliance", "HACCP", "audit"],
    featured: false,
  },
  {
    id: "4",
    title: "AI Analytics for Restaurants",
    description:
      "Learn how to leverage AI analytics to optimize your restaurant operations. Includes demand forecasting, waste prediction, and ROI optimization.",
    thumbnail: "/images/guides/ai-analytics-guide.jpg",
    isGated: true,
    downloadUrl: "/downloads/ai-analytics-guide.pdf",
    readTime: "18 min read",
    publishedAt: "2023-12-20",
    category: "ai",
    pages: 30,
    fileSize: "1.9 MB",
    tags: ["AI", "analytics", "forecasting", "optimization"],
    featured: true,
  },
  {
    id: "5",
    title: "Mobile App Setup Tutorial",
    description:
      "Step-by-step tutorial for setting up Sumo mobile app. Perfect for managers and staff getting started with mobile inventory tracking.",
    thumbnail: "/images/guides/mobile-tutorial.jpg",
    isGated: false,
    previewUrl: "/preview/mobile-tutorial",
    readTime: "8 min read",
    publishedAt: "2024-01-01",
    category: "mobile",
    pages: 15,
    fileSize: "1.2 MB",
    tags: ["mobile", "tutorial", "setup", "getting started"],
    featured: false,
  },
  {
    id: "6",
    title: "Purchase Order Best Practices",
    description:
      "Optimize your purchase order process with proven strategies and templates. Reduce errors and improve supplier relationships.",
    thumbnail: "/images/guides/po-best-practices.jpg",
    isGated: true,
    downloadUrl: "/downloads/po-best-practices.pdf",
    readTime: "10 min read",
    publishedAt: "2023-12-15",
    category: "inventory",
    pages: 20,
    fileSize: "1.5 MB",
    tags: ["purchase orders", "suppliers", "best practices", "templates"],
    featured: false,
  },
  {
    id: "7",
    title: "Restaurant Cost Control Strategies",
    description:
      "Comprehensive strategies for controlling costs in your restaurant. Includes food cost analysis, labor optimization, and waste reduction.",
    thumbnail: "/images/guides/cost-control-guide.jpg",
    isGated: true,
    downloadUrl: "/downloads/cost-control-guide.pdf",
    readTime: "25 min read",
    publishedAt: "2023-12-10",
    category: "finance",
    pages: 40,
    fileSize: "2.8 MB",
    tags: ["cost control", "finance", "profitability", "analysis"],
    featured: false,
  },
  {
    id: "8",
    title: "Supplier Management Handbook",
    description:
      "Complete guide to managing restaurant suppliers effectively. Includes vendor evaluation, negotiation tips, and performance tracking.",
    thumbnail: "/images/guides/supplier-management.jpg",
    isGated: true,
    downloadUrl: "/downloads/supplier-management.pdf",
    readTime: "22 min read",
    publishedAt: "2023-12-05",
    category: "suppliers",
    pages: 45,
    fileSize: "3.1 MB",
    tags: ["suppliers", "vendor management", "negotiation", "performance"],
    featured: false,
  },
];

const categories = [
  { id: "all", name: "All Guides", count: guides.length },
  {
    id: "inventory",
    name: "Inventory Management",
    count: guides.filter((g) => g.category === "inventory").length,
  },
  {
    id: "ai",
    name: "AI & Analytics",
    count: guides.filter((g) => g.category === "ai").length,
  },
  {
    id: "franchise",
    name: "Franchise Management",
    count: guides.filter((g) => g.category === "franchise").length,
  },
  {
    id: "compliance",
    name: "Compliance",
    count: guides.filter((g) => g.category === "compliance").length,
  },
  {
    id: "mobile",
    name: "Mobile Solutions",
    count: guides.filter((g) => g.category === "mobile").length,
  },
  {
    id: "finance",
    name: "Finance & Cost Control",
    count: guides.filter((g) => g.category === "finance").length,
  },
  {
    id: "suppliers",
    name: "Supplier Management",
    count: guides.filter((g) => g.category === "suppliers").length,
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Expert <span className="text-blue-600">Guides & Resources</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Access comprehensive guides, tutorials, and resources to optimize
              your restaurant operations. From inventory management to AI
              analytics, we've got you covered.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <SearchBar placeholder="Search guides, tutorials, and resources..." />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Expert Guides</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  1,200+
                </div>
                <div className="text-sm text-gray-600">Pages of Content</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  15+
                </div>
                <div className="text-sm text-gray-600">Categories</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  Free
                </div>
                <div className="text-sm text-gray-600">Premium Content</div>
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

      {/* Featured Guides */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides
              .filter((guide) => guide.featured)
              .map((guide) => (
                <GuideCard
                  key={guide.id}
                  guide={guide}
                  onDownload={() => console.log("Download guide")}
                  onPreview={() => console.log("Preview guide")}
                />
              ))}
          </div>
        </div>
      </section>

      {/* All Guides */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            All Guides & Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <GuideCard
                key={guide.id}
                guide={guide}
                onDownload={() => console.log("Download guide")}
                onPreview={() => console.log("Preview guide")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Our Complete Restaurant Management Guide Bundle
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Download our comprehensive bundle including inventory templates,
            compliance checklists, cost control strategies, and AI optimization
            guides. Everything you need to transform your restaurant operations.
          </p>

          <div className="max-w-2xl mx-auto">
            <DownloadForm
              title="Download Complete Guide Bundle"
              description="Get instant access to all our premium guides and resources"
              incentive="Free consultation call included with download"
              buttonText="Download Bundle"
              className="bg-white text-blue-600 hover:bg-blue-50"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
