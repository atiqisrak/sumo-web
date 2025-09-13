// Common types for Sumo marketing website

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  benefit: string;
  color: string;
  category: "inventory" | "orders" | "staff" | "analytics" | "mobile" | "integrations";
  priority: "high" | "medium" | "low";
  videoUrl?: string;
  ctaLink: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
  avatar?: string;
  restaurant: string;
  location: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
  ctaUrl?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  restaurant: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  videoUrl?: string;
  pdfUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  readTime: number;
  featuredImage?: string;
  slug: string;
}

export interface Webinar {
  id: string;
  title: string;
  description: string;
  speaker: string;
  speakerTitle: string;
  speakerImage?: string;
  date: string;
  duration: string;
  registrationUrl: string;
  thumbnail?: string;
}

export interface Guide {
  id: string;
  title: string;
  description: string;
  category: string;
  downloadUrl: string;
  isGated: boolean;
  thumbnail?: string;
  pages: number;
}

export interface VideoContent {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
  duration: string;
  category: "demo" | "tutorial" | "testimonial" | "explainer";
}

export interface FormSubmission {
  email: string;
  name?: string;
  company?: string;
  phone?: string;
  message?: string;
  source: string;
  timestamp: string;
}

export interface AnalyticsEvent {
  event: string;
  properties: Record<string, unknown>;
  timestamp: string;
  userId?: string;
}

// SEO and Meta types
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

// Internationalization types
export interface Locale {
  code: string;
  name: string;
  flag: string;
}

export interface Translation {
  [key: string]: string | Translation;
}

// Component prop types
export interface ComponentVariant {
  variant?: "default" | "compact" | "large" | "outlined" | "gradient";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export interface AnimationProps {
  initial?: unknown;
  animate?: unknown;
  exit?: unknown;
  transition?: unknown;
  whileInView?: unknown;
  viewport?: unknown;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
