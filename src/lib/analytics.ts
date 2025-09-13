// Analytics configuration and utilities for Sumo marketing website

export interface AnalyticsEvent {
  event: string;
  properties: Record<string, any>;
  timestamp: string;
  userId?: string;
  sessionId?: string;
}

export interface ConversionEvent extends AnalyticsEvent {
  event: 'conversion';
  properties: {
    type: 'trial_signup' | 'demo_request' | 'download' | 'newsletter_signup' | 'contact_form';
    value?: number;
    currency?: string;
    source?: string;
    campaign?: string;
  };
}

// Analytics configuration
export const analyticsConfig = {
  // Google Analytics 4
  ga4: {
    measurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || 'G-XXXXXXXXXX',
    enabled: process.env.NODE_ENV === 'production'
  },

  // Hotjar for heatmaps and user behavior
  hotjar: {
    siteId: process.env.NEXT_PUBLIC_HOTJAR_SITE_ID || 'XXXXXXX',
    enabled: process.env.NODE_ENV === 'production'
  },

  // Facebook Pixel
  facebookPixel: {
    pixelId: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || 'XXXXXXXXXXXXX',
    enabled: process.env.NODE_ENV === 'production'
  },

  // LinkedIn Insight Tag
  linkedin: {
    partnerId: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID || 'XXXXXX',
    enabled: process.env.NODE_ENV === 'production'
  }
};

// Event tracking functions
export const trackEvent = (event: AnalyticsEvent): void => {
  if (typeof window === 'undefined') return;

  // Google Analytics 4
  if (analyticsConfig.ga4.enabled && window.gtag) {
    window.gtag('event', event.event, event.properties);
  }

  // Facebook Pixel
  if (analyticsConfig.facebookPixel.enabled && window.fbq) {
    window.fbq('track', event.event, event.properties);
  }

  // LinkedIn Insight Tag
  if (analyticsConfig.linkedin.enabled && window.lintrk) {
    window.lintrk('track', { conversion_id: event.event });
  }

  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', event);
  }
};

// Conversion tracking
export const trackConversion = (conversion: ConversionEvent): void => {
  trackEvent(conversion);

  // Enhanced ecommerce for GA4
  if (analyticsConfig.ga4.enabled && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: conversion.timestamp,
      value: conversion.properties.value || 0,
      currency: conversion.properties.currency || 'USD',
      items: [{
        item_id: conversion.properties.type,
        item_name: conversion.properties.type,
        category: 'SaaS',
        quantity: 1,
        price: conversion.properties.value || 0
      }]
    });
  }
};

// Page view tracking
export const trackPageView = (url: string, title: string): void => {
  if (typeof window === 'undefined') return;

  // Google Analytics 4
  if (analyticsConfig.ga4.enabled && window.gtag) {
    window.gtag('config', analyticsConfig.ga4.measurementId, {
      page_title: title,
      page_location: url
    });
  }

  // Facebook Pixel
  if (analyticsConfig.facebookPixel.enabled && window.fbq) {
    window.fbq('track', 'PageView');
  }

  // LinkedIn Insight Tag
  if (analyticsConfig.linkedin.enabled && window.lintrk) {
    window.lintrk('track', { conversion_id: 'page_view' });
  }
};

// Form submission tracking
export const trackFormSubmission = (
  formName: string, 
  success: boolean, 
  additionalData?: Record<string, any>
): void => {
  trackEvent({
    event: 'form_submit',
    properties: {
      form_name: formName,
      success,
      ...additionalData
    },
    timestamp: new Date().toISOString()
  });
};

// Video engagement tracking
export const trackVideoEngagement = (
  videoId: string,
  action: 'play' | 'pause' | 'complete' | 'seek',
  progress?: number
): void => {
  trackEvent({
    event: 'video_engagement',
    properties: {
      video_id: videoId,
      action,
      progress
    },
    timestamp: new Date().toISOString()
  });
};

// Feature interaction tracking
export const trackFeatureInteraction = (
  featureName: string,
  action: 'view' | 'click' | 'hover' | 'filter',
  additionalData?: Record<string, any>
): void => {
  trackEvent({
    event: 'feature_interaction',
    properties: {
      feature_name: featureName,
      action,
      ...additionalData
    },
    timestamp: new Date().toISOString()
  });
};

// A/B testing tracking
export const trackExperiment = (
  experimentId: string,
  variant: string,
  action: 'view' | 'click' | 'convert'
): void => {
  trackEvent({
    event: 'experiment',
    properties: {
      experiment_id: experimentId,
      variant,
      action
    },
    timestamp: new Date().toISOString()
  });
};

// UTM parameter tracking
export const getUtmParams = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams: Record<string, string> = {};
  
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  
  utmKeys.forEach(key => {
    const value = urlParams.get(key);
    if (value) {
      utmParams[key] = value;
    }
  });
  
  return utmParams;
};

// User identification
export const identifyUser = (userId: string, traits?: Record<string, any>): void => {
  if (typeof window === 'undefined') return;

  // Google Analytics 4
  if (analyticsConfig.ga4.enabled && window.gtag) {
    window.gtag('config', analyticsConfig.ga4.measurementId, {
      user_id: userId,
      custom_map: traits
    });
  }

  // Facebook Pixel
  if (analyticsConfig.facebookPixel.enabled && window.fbq) {
    window.fbq('init', analyticsConfig.facebookPixel.pixelId, {
      external_id: userId
    });
  }
};

// Initialize analytics
export const initializeAnalytics = (): void => {
  if (typeof window === 'undefined') return;

  // Store UTM parameters in session storage
  const utmParams = getUtmParams();
  if (Object.keys(utmParams).length > 0) {
    sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
  }

  // Track initial page view
  trackPageView(window.location.href, document.title);
};

// Global type declarations for analytics libraries
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    lintrk?: (...args: any[]) => void;
    hj?: (...args: any[]) => void;
  }
}
