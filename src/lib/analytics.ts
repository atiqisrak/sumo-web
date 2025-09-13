// Google Analytics 4 tracking utilities
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

// Initialize GA4
export const initGA = (measurementId: string) => {
  if (typeof window === "undefined") return;

  // Load GA4 script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.gtag = window.gtag || function(...args: unknown[]) {
    (window.gtag as { q: unknown[] }).q = (window.gtag as { q: unknown[] }).q || [];
    (window.gtag as { q: unknown[] }).q.push(args);
  };

  window.gtag("js", new Date().toISOString());
  window.gtag("config", measurementId, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
    page_title: title || document.title,
    page_location: url,
  });
};

// Track events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track form submissions
export const trackFormSubmission = (
  formName: string,
  formType: "newsletter" | "download" | "demo" | "contact" | "trial",
  success: boolean = true
) => {
  trackEvent(
    success ? "form_submit_success" : "form_submit_error",
    "form_interaction",
    `${formType}_${formName}`,
    success ? 1 : 0
  );
};

// Track downloads
export const trackDownload = (
  fileName: string,
  fileType: "pdf" | "video" | "image" | "other",
  isGated: boolean = false
) => {
  trackEvent(
    "file_download",
    "engagement",
    `${fileType}_${fileName}`,
    isGated ? 1 : 0
  );
};

// Track video interactions
export const trackVideoInteraction = (
  videoTitle: string,
  action: "play" | "pause" | "complete" | "seek",
  progress?: number
) => {
  trackEvent(
    `video_${action}`,
    "video_interaction",
    videoTitle,
    progress
  );
};

// Track CTA clicks
export const trackCTAClick = (
  ctaText: string,
  location: string,
  ctaType: "button" | "link" | "form" | "modal"
) => {
  trackEvent(
    "cta_click",
    "engagement",
    `${ctaType}_${ctaText}_${location}`,
    1
  );
};

// Track user engagement
export const trackEngagement = (
  action: "scroll" | "time_on_page" | "click" | "hover",
  value?: number,
  element?: string
) => {
  trackEvent(
    `user_${action}`,
    "engagement",
    element,
    value
  );
};

// Track conversion events
export const trackConversion = (
  conversionType: "trial_signup" | "demo_booking" | "download" | "newsletter_signup",
  value?: number,
  currency?: string
) => {
  trackEvent(
    "conversion",
    "conversion",
    conversionType,
    value
  );

  // Track as purchase event for GA4 ecommerce
  if (window.gtag) {
    window.gtag("event", "purchase", {
      transaction_id: `${conversionType}_${Date.now()}`,
      value: value || 0,
      currency: currency || "USD",
      items: [{
        item_id: conversionType,
        item_name: conversionType.replace("_", " "),
        category: "conversion",
        quantity: 1,
        price: value || 0,
      }],
    });
  }
};

// Track lead generation
export const trackLeadGeneration = (
  leadSource: string,
  leadType: "email" | "phone" | "demo" | "download",
  leadValue?: number
) => {
  trackEvent(
    "lead_generation",
    "lead_capture",
    `${leadSource}_${leadType}`,
    leadValue
  );
};

// Track A/B test events
export const trackABTest = (
  testName: string,
  variant: string,
  action: "view" | "click" | "convert"
) => {
  trackEvent(
    `ab_test_${action}`,
    "ab_testing",
    `${testName}_${variant}`,
    1
  );
};

// Track mobile-specific events
export const trackMobileEvent = (
  action: string,
  element: string,
  value?: number
) => {
  trackEvent(
    `mobile_${action}`,
    "mobile_interaction",
    element,
    value
  );
};

// Track exit intent
export const trackExitIntent = (
  page: string,
  timeOnPage: number,
  scrollDepth: number
) => {
  trackEvent(
    "exit_intent",
    "user_behavior",
    page,
    Math.round(timeOnPage)
  );

  trackEvent(
    "scroll_depth",
    "user_behavior",
    page,
    Math.round(scrollDepth)
  );
};

// Track search queries
export const trackSearch = (
  query: string,
  resultsCount: number
) => {
  trackEvent(
    "search",
    "search_interaction",
    query,
    resultsCount
  );
};

// Enhanced ecommerce tracking
export const trackEcommerce = (
  action: "view_item" | "add_to_cart" | "remove_from_cart" | "begin_checkout" | "purchase",
  itemId: string,
  itemName: string,
  category: string,
  value?: number,
  currency?: string
) => {
  if (!window.gtag) return;

  window.gtag("event", action, {
    currency: currency || "USD",
    value: value,
    items: [{
      item_id: itemId,
      item_name: itemName,
      category: category,
      quantity: 1,
      price: value || 0,
    }],
  });
};

// Custom dimensions tracking
export const trackCustomDimension = (
  dimensionName: string,
  value: string | number
) => {
  if (!window.gtag) return;

  window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
    custom_map: {
      [dimensionName]: value,
    },
  });
};

// User properties
export const setUserProperties = (properties: Record<string, unknown>) => {
  if (!window.gtag) return;

  window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
    user_properties: properties,
  });
};

// Track page performance
export const trackPagePerformance = () => {
  if (typeof window === "undefined" || !window.gtag) return;

  // Track Core Web Vitals
  if ("web-vital" in window) {
    // This would be implemented with web-vitals library
    // import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
  }

  // Track page load time
  window.addEventListener("load", () => {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    trackEvent("page_load_time", "performance", "load_time", loadTime);
  });
};

// Track errors
export const trackError = (
  errorMessage: string,
  errorLocation: string,
  errorType: "javascript" | "network" | "form" | "other"
) => {
  trackEvent(
    "error",
    "error_tracking",
    `${errorType}_${errorLocation}`,
    1
  );
};

// Utility function to check if GA is loaded
export const isGALoaded = (): boolean => {
  return typeof window !== "undefined" && !!window.gtag;
};