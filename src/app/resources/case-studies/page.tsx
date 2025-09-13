import { Metadata } from "next";
import { CaseStudyCard } from "@/components/content/CaseStudyCard";
import { CaseStudyHero } from "@/components/content/CaseStudyHero";
import { CategoryFilter } from "@/components/content/CategoryFilter";
import { SearchBar } from "@/components/content/SearchBar";
import { ContentNavigation } from "@/components/content/ContentNavigation";
import { DownloadForm } from "@/components/leads/DownloadForm";

export const metadata: Metadata = {
  title: "Case Studies | Sumo - Restaurant Success Stories",
  description:
    "Discover how restaurants are transforming their operations with Sumo's AI-powered inventory management. Real success stories from cafes, chains, and franchises.",
  keywords:
    "restaurant case studies, success stories, inventory management results, cafe transformation, chain restaurant optimization",
};

const caseStudies = [
  {
    id: "1",
    title: "Cafe Bloom: 25% Waste Reduction in 3 Months",
    company: "Cafe Bloom",
    industry: "Independent Cafe",
    description:
      "See how Cafe Bloom cut food waste by 25% and improved profit margins using Sumo's AI analytics in just 3 months.",
    thumbnail: "/images/case-studies/cafe-bloom-hero.jpg",
    videoUrl: "/videos/case-studies/cafe-bloom.mp4",
    readTime: "8 min read",
    publishedAt: "2024-01-10",
    featured: true,
    metrics: [
      { label: "Waste Reduction", value: "25%", icon: "trending" as const },
      { label: "Cost Savings", value: "$2,400/mo", icon: "dollar" as const },
      { label: "Time Saved", value: "15 hrs/week", icon: "target" as const },
      { label: "ROI", value: "340%", icon: "trending" as const },
    ],
    challenges: [
      "Manual inventory tracking leading to over-ordering",
      "High food waste due to poor demand forecasting",
      "Time-consuming stock management processes",
      "Difficulty tracking supplier performance",
    ],
    solutions: [
      "Implemented AI-powered demand forecasting",
      "Automated purchase order generation",
      "Real-time inventory tracking with mobile app",
      "Supplier performance analytics dashboard",
    ],
    results: [
      "25% reduction in food waste within 3 months",
      "15 hours saved per week on inventory management",
      "$2,400 monthly cost savings",
      "340% ROI in first year",
    ],
    testimonial: {
      quote:
        "Sumo transformed our operations. We went from chaotic inventory management to a streamlined system that practically runs itself.",
      author: "Maria Rodriguez",
      position: "Owner",
      company: "Cafe Bloom",
      avatar: "/images/testimonials/maria-rodriguez.jpg",
    },
  },
  {
    id: "2",
    title: "ChainX: 40% Faster Purchase Orders Across 15 Locations",
    company: "ChainX Restaurant Group",
    industry: "Restaurant Chain",
    description:
      "Discover how ChainX restaurant group streamlined their purchase order process and reduced manual work by 40% across 15 locations.",
    thumbnail: "/images/case-studies/chainx-hero.jpg",
    videoUrl: "/videos/case-studies/chainx.mp4",
    readTime: "10 min read",
    publishedAt: "2024-01-03",
    featured: true,
    metrics: [
      { label: "Time Reduction", value: "40%", icon: "trending" as const },
      { label: "Locations", value: "15", icon: "users" as const },
      { label: "Cost Savings", value: "$8,500/mo", icon: "dollar" as const },
      { label: "Accuracy", value: "98%", icon: "target" as const },
    ],
    challenges: [
      "Inconsistent ordering processes across locations",
      "Manual data entry causing errors and delays",
      "Lack of centralized inventory visibility",
      "Difficulty managing supplier relationships",
    ],
    solutions: [
      "Centralized inventory management system",
      "Automated purchase order workflows",
      "Standardized processes across all locations",
      "Real-time reporting and analytics",
    ],
    results: [
      "40% faster purchase order processing",
      "98% accuracy in inventory tracking",
      "$8,500 monthly savings in labor costs",
      "Standardized processes across 15 locations",
    ],
    testimonial: {
      quote:
        "The efficiency gains have been incredible. What used to take hours now takes minutes, and our accuracy has never been better.",
      author: "David Chen",
      position: "Operations Director",
      company: "ChainX Restaurant Group",
      avatar: "/images/testimonials/david-chen.jpg",
    },
  },
  {
    id: "3",
    title: "FranchiseMax: Scaling to 50+ Outlets with Confidence",
    company: "FranchiseMax",
    industry: "Franchise",
    description:
      "Learn how FranchiseMax scaled their operations to 50+ outlets while maintaining quality and compliance standards.",
    thumbnail: "/images/case-studies/franchisemax-hero.jpg",
    readTime: "12 min read",
    publishedAt: "2023-12-28",
    featured: false,
    metrics: [
      { label: "Outlets", value: "50+", icon: "users" as const },
      { label: "Compliance", value: "100%", icon: "target" as const },
      { label: "Growth", value: "200%", icon: "trending" as const },
      { label: "Efficiency", value: "60%", icon: "trending" as const },
    ],
    challenges: [
      "Maintaining consistency across growing franchise network",
      "Ensuring compliance with food safety standards",
      "Managing inventory across multiple time zones",
      "Training new franchisees on systems",
    ],
    solutions: [
      "Standardized inventory management across all outlets",
      "Automated compliance reporting and alerts",
      "Centralized training and support system",
      "Real-time monitoring and analytics",
    ],
    results: [
      "Successfully scaled to 50+ outlets",
      "100% compliance rate maintained",
      "200% growth in franchise network",
      "60% improvement in operational efficiency",
    ],
  },
];

const categories = [
  { id: "all", name: "All Industries", count: caseStudies.length },
  {
    id: "cafe",
    name: "Independent Cafes",
    count: caseStudies.filter((c) => c.industry.toLowerCase().includes("cafe"))
      .length,
  },
  {
    id: "chain",
    name: "Restaurant Chains",
    count: caseStudies.filter((c) => c.industry.toLowerCase().includes("chain"))
      .length,
  },
  {
    id: "franchise",
    name: "Franchises",
    count: caseStudies.filter((c) =>
      c.industry.toLowerCase().includes("franchise")
    ).length,
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Real <span className="text-blue-600">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how restaurants like yours are transforming their
              operations with Sumo's AI-powered inventory management. Learn from
              real results and proven strategies.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <SearchBar placeholder="Search case studies by industry, results, or company..." />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  $2.4M
                </div>
                <div className="text-sm text-gray-600">Total Savings</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  150+
                </div>
                <div className="text-sm text-gray-600">Restaurants</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  340%
                </div>
                <div className="text-sm text-gray-600">Average ROI</div>
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

      {/* Featured Case Study */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Success Story
          </h2>
          <CaseStudyHero
            caseStudy={caseStudies[0]}
            onDownload={() => console.log("Download case study")}
            onWatchVideo={() => console.log("Watch video")}
          />
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            All Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.id}
                caseStudy={caseStudy}
                onReadMore={() => console.log("Read more")}
                onDownload={() => console.log("Download")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of restaurants already transforming their operations
            with Sumo. Get a free consultation and see how we can help you
            achieve similar results.
          </p>

          <div className="max-w-2xl mx-auto">
            <DownloadForm
              title="Get Your Free Success Roadmap"
              description="Download our comprehensive guide to restaurant transformation"
              incentive="Free consultation call included"
              buttonText="Get Started"
              className="bg-white text-blue-600 hover:bg-blue-50"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
