import { Metadata } from "next";
import { SearchBar } from "@/components/content/SearchBar";
import { ContentNavigation } from "@/components/content/ContentNavigation";
import { ContactForm } from "@/components/leads/ContactForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  HelpCircle,
  Search,
  MessageCircle,
  Video,
  FileText,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Help Center | Sumo - Support & Documentation",
  description:
    "Get help with Sumo's restaurant management software. Find answers, watch tutorials, and contact our support team for assistance.",
  keywords:
    "restaurant software help, Sumo support, inventory management help, customer support, documentation",
};

const faqCategories = [
  {
    id: "getting-started",
    name: "Getting Started",
    icon: CheckCircle,
    faqs: [
      {
        question: "How do I set up my first restaurant location?",
        answer:
          "To set up your first location, go to Settings > Locations and click 'Add New Location'. Enter your restaurant details, configure your inventory categories, and invite your team members.",
        videoUrl: "/videos/help/setup-location.mp4",
        readTime: "3 min",
      },
      {
        question: "How do I invite team members to my account?",
        answer:
          "Navigate to Team Management in your dashboard, click 'Invite Members', and enter their email addresses. You can assign different roles and permissions for each team member.",
        videoUrl: "/videos/help/invite-team.mp4",
        readTime: "2 min",
      },
      {
        question: "What's the difference between a manager and staff account?",
        answer:
          "Managers can access all features including reporting, settings, and user management. Staff accounts are limited to inventory tracking, order management, and basic reporting features.",
        readTime: "1 min",
      },
    ],
  },
  {
    id: "inventory",
    name: "Inventory Management",
    icon: FileText,
    faqs: [
      {
        question: "How do I add new inventory items?",
        answer:
          "Go to Inventory > Items and click 'Add New Item'. Enter the item details, set up pricing, supplier information, and configure reorder points for automatic notifications.",
        videoUrl: "/videos/help/add-inventory.mp4",
        readTime: "4 min",
      },
      {
        question: "How does automatic reordering work?",
        answer:
          "Sumo monitors your inventory levels and automatically generates purchase orders when items fall below their reorder points. You can review and approve these orders before sending them to suppliers.",
        videoUrl: "/videos/help/auto-reorder.mp4",
        readTime: "5 min",
      },
      {
        question: "Can I track inventory across multiple locations?",
        answer:
          "Yes! Sumo supports multi-location inventory management. You can view inventory levels across all locations, transfer items between locations, and generate consolidated reports.",
        readTime: "3 min",
      },
    ],
  },
  {
    id: "ai-features",
    name: "AI & Analytics",
    icon: Search,
    faqs: [
      {
        question: "How does AI demand forecasting work?",
        answer:
          "Our AI analyzes your historical sales data, seasonal patterns, and external factors to predict future demand. This helps you optimize inventory levels and reduce waste.",
        videoUrl: "/videos/help/ai-forecasting.mp4",
        readTime: "6 min",
      },
      {
        question: "What insights can I get from the analytics dashboard?",
        answer:
          "The analytics dashboard provides insights on sales trends, inventory turnover, waste analysis, supplier performance, and cost optimization opportunities.",
        readTime: "4 min",
      },
      {
        question: "How accurate are the AI predictions?",
        answer:
          "Our AI models typically achieve 85-90% accuracy in demand forecasting. Accuracy improves over time as the system learns from your specific business patterns.",
        readTime: "2 min",
      },
    ],
  },
  {
    id: "mobile-app",
    name: "Mobile App",
    icon: Video,
    faqs: [
      {
        question: "How do I download the mobile app?",
        answer:
          "Search for 'Sumo Restaurant' in the App Store (iOS) or Google Play Store (Android). Download and log in with your account credentials.",
        readTime: "1 min",
      },
      {
        question: "Can I use the app offline?",
        answer:
          "Yes, the app works offline for basic inventory tracking. Data syncs automatically when you're back online. Some features like AI analytics require an internet connection.",
        readTime: "2 min",
      },
      {
        question: "How do I scan barcodes for inventory?",
        answer:
          "Open the mobile app, go to Inventory, and tap the barcode scanner icon. Point your camera at the product barcode to automatically add or update inventory items.",
        videoUrl: "/videos/help/barcode-scan.mp4",
        readTime: "3 min",
      },
    ],
  },
];

const supportOptions = [
  {
    title: "Live Chat",
    description: "Get instant help from our support team",
    icon: MessageCircle,
    availability: "24/7",
    responseTime: "< 2 min",
    action: "Start Chat",
    color: "bg-blue-600",
  },
  {
    title: "Video Call",
    description: "Schedule a screen sharing session",
    icon: Video,
    availability: "Mon-Fri 9AM-6PM",
    responseTime: "Same day",
    action: "Book Call",
    color: "bg-green-600",
  },
  {
    title: "Email Support",
    description: "Send us a detailed message",
    icon: Mail,
    availability: "24/7",
    responseTime: "< 4 hours",
    action: "Send Email",
    color: "bg-purple-600",
  },
  {
    title: "Phone Support",
    description: "Speak directly with our team",
    icon: Phone,
    availability: "Mon-Fri 9AM-6PM",
    responseTime: "Immediate",
    action: "Call Now",
    color: "bg-orange-600",
  },
];

const popularArticles = [
  {
    title: "Complete Setup Guide for New Restaurants",
    description:
      "Step-by-step guide to get your restaurant up and running with Sumo",
    category: "Getting Started",
    readTime: "15 min",
    views: "2.3k",
    featured: true,
  },
  {
    title: "Understanding AI Analytics Dashboard",
    description:
      "Learn how to interpret and use AI-powered insights effectively",
    category: "AI & Analytics",
    readTime: "12 min",
    views: "1.8k",
    featured: true,
  },
  {
    title: "Mobile App Troubleshooting",
    description: "Common issues and solutions for the Sumo mobile app",
    category: "Mobile App",
    readTime: "8 min",
    views: "1.5k",
    featured: false,
  },
  {
    title: "Multi-Location Inventory Management",
    description:
      "Best practices for managing inventory across multiple locations",
    category: "Inventory Management",
    readTime: "20 min",
    views: "1.2k",
    featured: false,
  },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              How can we <span className="text-blue-600">help you?</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers, watch tutorials, and get support for Sumo's
              restaurant management software. We're here to help you succeed.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <SearchBar placeholder="Search help articles, tutorials, and FAQs..." />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  500+
                </div>
                <div className="text-sm text-gray-600">Help Articles</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  50+
                </div>
                <div className="text-sm text-gray-600">Video Tutorials</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  98%
                </div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
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

      {/* Support Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Get Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{option.title}</CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <div className="text-sm text-gray-600">
                      <div className="font-medium">
                        Available: {option.availability}
                      </div>
                      <div>Response: {option.responseTime}</div>
                    </div>
                    <Button
                      className={`w-full ${option.color} hover:opacity-90`}
                    >
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Popular Help Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{article.category}</Badge>
                    {article.featured && (
                      <Badge className="bg-yellow-100 text-yellow-800">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Search className="w-4 h-4" />
                        {article.views} views
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group-hover:text-blue-600"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={category.id} className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.name}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <Card
                        key={faqIndex}
                        className="hover:shadow-md transition-shadow"
                      >
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">
                            {faq.question}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <CardDescription className="text-sm">
                            {faq.answer}
                          </CardDescription>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Clock className="w-3 h-3" />
                              {faq.readTime}
                            </div>
                            <div className="flex gap-2">
                              {faq.videoUrl && (
                                <Button variant="outline" size="sm">
                                  <Video className="w-3 h-3 mr-1" />
                                  Watch
                                </Button>
                              )}
                              <Button variant="ghost" size="sm">
                                Read More
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Can't find what you're looking for? Our support team is here to help
            you succeed with Sumo.
          </p>

          <div className="max-w-2xl mx-auto">
            <ContactForm
              title="Send us a message"
              description="We'll get back to you within 4 hours"
              buttonText="Send Message"
              className="bg-white text-blue-600 hover:bg-blue-50"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
