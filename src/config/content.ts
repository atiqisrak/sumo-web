// Content configuration for Sumo marketing website

export const contentConfig = {
  // SEO Keywords
  keywords: [
    "restaurant inventory management",
    "AI tracking",
    "purchase order software", 
    "franchise outlet management",
    "restaurant analytics",
    "food waste reduction",
    "restaurant POS integration",
    "supply chain management",
    "restaurant automation",
    "kitchen management software"
  ],

  // Brand messaging
  brand: {
    tagline: "Smart Restaurant Management That Tracks Everything, Effortlessly",
    valueProposition: "Sumo unifies inventory tracking, order management, staff scheduling, and real-time insights into one AI-powered SaaS platform.",
    targetAudience: "Restaurant owners, managers, and chain operators frustrated with outdated software",
    mainBenefits: [
      "Reduce waste by 30%",
      "Process 2x more orders", 
      "Save 20 hours/week",
      "Boost efficiency by 40%",
      "24/7 accessibility",
      "Eliminate data silos"
    ]
  },

  // Content themes
  themes: {
    ai: {
      title: "AI-Powered Intelligence",
      description: "Smart predictions and automation for restaurant operations",
      features: ["Predictive inventory", "Waste reduction", "Demand forecasting"]
    },
    inventory: {
      title: "Smart Inventory Tracking", 
      description: "Real-time stock levels and automated reordering",
      features: ["Barcode scanning", "Low-stock alerts", "Supplier integration"]
    },
    analytics: {
      title: "Advanced Analytics",
      description: "Data-driven insights for better decision making",
      features: ["Sales forecasting", "Profit margins", "Custom reports"]
    },
    mobile: {
      title: "Mobile-First Design",
      description: "Manage everything on-the-go with native apps",
      features: ["Offline access", "Real-time sync", "Cross-platform"]
    }
  },

  // Call-to-action variations
  ctas: {
    primary: [
      "Start 14-Day Free Trial",
      "Get Started Free", 
      "Try Sumo Today",
      "Start Free Trial"
    ],
    secondary: [
      "Book a Demo",
      "Schedule Demo",
      "Watch Demo Video", 
      "See It in Action"
    ],
    gated: [
      "Download Free Guide",
      "Get Free Report",
      "Access Resource",
      "Download Now"
    ]
  },

  // Social proof elements
  socialProof: {
    stats: {
      restaurants: "10,000+",
      rating: "4.9/5",
      wasteReduction: "30%",
      uptime: "99.9%"
    },
    testimonials: {
      count: "500+ reviews",
      platforms: ["Google", "Trustpilot", "Capterra", "G2"]
    }
  },

  // Content categories
  contentTypes: {
    blog: {
      categories: ["Inventory Management", "Restaurant Operations", "AI & Analytics", "Case Studies", "Industry News"],
      tags: ["tutorial", "guide", "best-practices", "case-study", "news"]
    },
    resources: {
      types: ["Guides", "Webinars", "Case Studies", "Templates", "Checklists"],
      gated: ["Advanced guides", "ROI calculators", "Implementation checklists"]
    }
  },

  // Localization
  locales: {
    supported: ["en", "es"],
    default: "en",
    translations: {
      en: {
        "Start Free Trial": "Start Free Trial",
        "Book a Demo": "Book a Demo"
      },
      es: {
        "Start Free Trial": "Comenzar Prueba Gratuita", 
        "Book a Demo": "Reservar Demo"
      }
    }
  }
};

// Generated case studies data
export const caseStudies = [
  {
    id: "cafe-bloom",
    title: "Cafe Bloom: 25% Waste Cut via AI",
    restaurant: "Cafe Bloom",
    industry: "Cafe",
    challenge: "High food waste and inconsistent inventory tracking",
    solution: "Implemented Sumo's AI-powered inventory management",
    results: [
      { metric: "Waste Reduction", value: "25%", description: "Reduced food waste by 25% in first month" },
      { metric: "Time Savings", value: "15 hrs/week", description: "Saved 15 hours per week on inventory management" },
      { metric: "Cost Savings", value: "$2,400/month", description: "Monthly cost savings from reduced waste" }
    ]
  },
  {
    id: "chainx-multi-outlet", 
    title: "ChainX: 40% Faster POs Across 12 Locations",
    restaurant: "ChainX Restaurant Group",
    industry: "Multi-location Chain",
    challenge: "Manual purchase orders across 12 locations causing delays",
    solution: "Deployed Sumo's automated PO system with AI forecasting",
    results: [
      { metric: "PO Speed", value: "40% faster", description: "Purchase orders processed 40% faster" },
      { metric: "Accuracy", value: "95%", description: "95% accuracy in demand forecasting" },
      { metric: "Staff Efficiency", value: "60%", description: "60% reduction in administrative time" }
    ]
  },
  {
    id: "bistro-central-compliance",
    title: "Bistro Central: Perfect Compliance Score",
    restaurant: "Bistro Central", 
    industry: "Fine Dining",
    challenge: "Complex compliance requirements and staff training",
    solution: "Used Sumo's built-in compliance tools and training modules",
    results: [
      { metric: "Compliance Score", value: "100%", description: "Perfect health inspection scores" },
      { metric: "Training Time", value: "50% less", description: "50% reduction in staff training time" },
      { metric: "Audit Prep", value: "2 hours", description: "Audit preparation time reduced to 2 hours" }
    ]
  }
];

// Sample blog posts
export const sampleBlogPosts = [
  {
    id: "franchise-inventory-tips",
    title: "5 Franchise Inventory Management Tips That Actually Work",
    excerpt: "Learn proven strategies for managing inventory across multiple franchise locations.",
    category: "Inventory Management",
    tags: ["franchise", "inventory", "best-practices"],
    readTime: 8,
    slug: "franchise-inventory-tips"
  },
  {
    id: "ai-waste-reduction",
    title: "How AI is Revolutionizing Restaurant Waste Reduction",
    excerpt: "Discover how artificial intelligence is helping restaurants cut waste by up to 40%.",
    category: "AI & Analytics", 
    tags: ["ai", "waste-reduction", "analytics"],
    readTime: 6,
    slug: "ai-waste-reduction"
  },
  {
    id: "pos-integration-guide",
    title: "Complete Guide to POS Integration for Restaurants",
    excerpt: "Everything you need to know about integrating your POS system with inventory management.",
    category: "Restaurant Operations",
    tags: ["pos", "integration", "tutorial"],
    readTime: 10,
    slug: "pos-integration-guide"
  }
];
