// Internationalization setup for Sumo marketing website

export type Locale = 'en' | 'es';

export const defaultLocale: Locale = 'en';

export const locales: Locale[] = ['en', 'es'];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español'
};

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  es: '🇪🇸'
};

// Basic translations
export const translations = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.solutions': 'Solutions', 
    'nav.pricing': 'Pricing',
    'nav.resources': 'Resources',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.demo': 'Live Demo',

    // CTAs
    'cta.start-trial': 'Start 14-Day Free Trial',
    'cta.book-demo': 'Book a Demo',
    'cta.watch-demo': 'Watch Demo Video',
    'cta.get-started': 'Get Started Free',
    'cta.learn-more': 'Learn More',
    'cta.download-guide': 'Download Free Guide',

    // Hero Section
    'hero.title': 'Smart Restaurant Management That',
    'hero.title-highlight': 'Tracks Everything',
    'hero.subtitle': 'Sumo unifies inventory tracking, order management, staff scheduling, and real-time insights into one AI-powered SaaS platform. Scale your restaurant operations, reduce waste, and boost profits—trusted by 10,000+ eateries worldwide.',
    'hero.trust-indicator': 'from 500+ reviews',
    'hero.customer-logos': 'Used by leading restaurants:',

    // Features
    'features.title': 'Powerful Features',
    'features.title-highlight': 'Built for Restaurants',
    'features.subtitle': 'Everything you need to run a successful restaurant operation, from inventory to insights, all in one platform.',
    'features.filter.all': 'All Features',
    'features.filter.ai-inventory': 'AI & Inventory',
    'features.filter.analytics': 'Analytics',
    'features.filter.mobile': 'Mobile',
    'features.filter.integrations': 'Integrations',

    // Trust Indicators
    'trust.security': 'Enterprise Security',
    'trust.data-protection': 'Data Protection', 
    'trust.customers': 'Trusted by Thousands',
    'trust.awards': 'Industry Recognition',

    // Social Proof
    'social.stats.restaurants': 'Restaurants',
    'social.stats.rating': 'Average Rating',
    'social.stats.waste': 'Waste Reduction',
    'social.stats.uptime': 'Uptime',
    'social.testimonials.title': 'What Restaurant Owners Say',
    'social.testimonials.subtitle': 'Real results from real restaurants using Sumo to transform their operations.',

    // Footer
    'footer.newsletter.title': 'Stay Updated',
    'footer.newsletter.subtitle': 'Get our free AI Restaurant Guide + weekly tips',
    'footer.newsletter.placeholder': 'Enter your email address',
    'footer.newsletter.subscribe': 'Subscribe',
    'footer.newsletter.privacy': 'No spam, unsubscribe anytime. We respect your privacy.',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'Something went wrong',
    'common.success': 'Success!',
    'common.required': 'Required',
    'common.optional': 'Optional'
  },

  es: {
    // Navigation
    'nav.features': 'Características',
    'nav.solutions': 'Soluciones',
    'nav.pricing': 'Precios', 
    'nav.resources': 'Recursos',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    'nav.login': 'Iniciar Sesión',
    'nav.demo': 'Demo en Vivo',

    // CTAs
    'cta.start-trial': 'Comenzar Prueba Gratuita de 14 Días',
    'cta.book-demo': 'Reservar Demo',
    'cta.watch-demo': 'Ver Video Demo',
    'cta.get-started': 'Comenzar Gratis',
    'cta.learn-more': 'Saber Más',
    'cta.download-guide': 'Descargar Guía Gratuita',

    // Hero Section
    'hero.title': 'Gestión Inteligente de Restaurantes Que',
    'hero.title-highlight': 'Rastrea Todo',
    'hero.subtitle': 'Sumo unifica el seguimiento de inventario, gestión de pedidos, programación de personal e información en tiempo real en una plataforma SaaS impulsada por IA. Escala las operaciones de tu restaurante, reduce desperdicios y aumenta ganancias—confiado por más de 10,000 comedores en todo el mundo.',
    'hero.trust-indicator': 'de 500+ reseñas',
    'hero.customer-logos': 'Usado por restaurantes líderes:',

    // Features
    'features.title': 'Características Poderosas',
    'features.title-highlight': 'Construidas para Restaurantes',
    'features.subtitle': 'Todo lo que necesitas para ejecutar una operación exitosa de restaurante, desde inventario hasta insights, todo en una plataforma.',
    'features.filter.all': 'Todas las Características',
    'features.filter.ai-inventory': 'IA e Inventario',
    'features.filter.analytics': 'Analíticas',
    'features.filter.mobile': 'Móvil',
    'features.filter.integrations': 'Integraciones',

    // Trust Indicators
    'trust.security': 'Seguridad Empresarial',
    'trust.data-protection': 'Protección de Datos',
    'trust.customers': 'Confiado por Miles',
    'trust.awards': 'Reconocimiento de la Industria',

    // Social Proof
    'social.stats.restaurants': 'Restaurantes',
    'social.stats.rating': 'Calificación Promedio',
    'social.stats.waste': 'Reducción de Desperdicios',
    'social.stats.uptime': 'Tiempo de Actividad',

    // Footer
    'footer.newsletter.title': 'Mantente Actualizado',
    'footer.newsletter.subtitle': 'Obtén nuestra Guía Gratuita de IA para Restaurantes + consejos semanales',
    'footer.newsletter.placeholder': 'Ingresa tu dirección de email',
    'footer.newsletter.subscribe': 'Suscribirse',
    'footer.newsletter.privacy': 'Sin spam, cancela la suscripción en cualquier momento. Respetamos tu privacidad.',

    // Common
    'common.loading': 'Cargando...',
    'common.error': 'Algo salió mal',
    'common.success': '¡Éxito!',
    'common.required': 'Requerido',
    'common.optional': 'Opcional'
  }
};

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || translations[defaultLocale][key] || key;
}

export function formatNumber(locale: Locale, number: number): string {
  return new Intl.NumberFormat(locale).format(number);
}

export function formatCurrency(locale: Locale, amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  }).format(amount);
}

export function formatDate(locale: Locale, date: Date): string {
  return new Intl.DateTimeFormat(locale).format(date);
}
