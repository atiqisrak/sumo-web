// Accessibility utilities and configuration for Sumo marketing website

export const accessibilityConfig = {
  // ARIA labels for common actions
  ariaLabels: {
    menu: 'Main navigation menu',
    search: 'Search website',
    login: 'Sign in to your account',
    signup: 'Create new account',
    demo: 'Watch product demo',
    trial: 'Start free trial',
    download: 'Download resource',
    video: 'Play video',
    close: 'Close dialog',
    next: 'Next item',
    previous: 'Previous item',
    expand: 'Expand section',
    collapse: 'Collapse section'
  },

  // Focus management
  focus: {
    trap: true,
    restore: true,
    visible: true,
    skipLinks: true
  },

  // Color contrast ratios (WCAG 2.1 AA compliance)
  contrast: {
    normal: 4.5, // Minimum for normal text
    large: 3.0,  // Minimum for large text (18pt+ or 14pt+ bold)
    ui: 3.0      // Minimum for UI components
  },

  // Keyboard navigation
  keyboard: {
    escape: 'Escape',
    enter: 'Enter',
    space: 'Space',
    tab: 'Tab',
    arrowKeys: ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'],
    home: 'Home',
    end: 'End'
  },

  // Screen reader support
  screenReader: {
    announcements: true,
    liveRegions: true,
    landmarks: true,
    headings: true
  }
};

// Utility functions for accessibility

export function generateId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

export function getAriaLabel(key: keyof typeof accessibilityConfig.ariaLabels): string {
  return accessibilityConfig.ariaLabels[key];
}

export function announceToScreenReader(message: string): void {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

export function trapFocus(element: HTMLElement): () => void {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  };

  element.addEventListener('keydown', handleKeyDown);
  
  // Focus first element
  firstElement?.focus();

  // Return cleanup function
  return () => {
    element.removeEventListener('keydown', handleKeyDown);
  };
}

export function validateColorContrast(foreground: string, background: string): boolean {
  // Simplified contrast validation - in production, use a proper color contrast library
  // This is a placeholder implementation
  return true;
}

// Accessibility hooks for React components
export const useAccessibility = () => {
  const announce = (message: string) => announceToScreenReader(message);
  
  const generateAriaId = (prefix: string) => generateId(prefix);
  
  const getAriaLabel = (key: keyof typeof accessibilityConfig.ariaLabels) => 
    accessibilityConfig.ariaLabels[key];

  return {
    announce,
    generateAriaId,
    getAriaLabel
  };
};

// Video accessibility utilities
export const videoAccessibility = {
  // Generate captions URL (placeholder - would be real in production)
  getCaptionsUrl: (videoId: string, language = 'en'): string => {
    return `/captions/${videoId}.${language}.vtt`;
  },

  // Generate audio description URL
  getAudioDescriptionUrl: (videoId: string, language = 'en'): string => {
    return `/audio-descriptions/${videoId}.${language}.mp3`;
  },

  // Check if video has captions
  hasCaptions: (videoId: string): boolean => {
    // In production, this would check against a database or API
    return true;
  }
};

// Form accessibility utilities
export const formAccessibility = {
  // Generate error message ID
  getErrorId: (fieldName: string): string => generateId(`error-${fieldName}`),
  
  // Generate description ID
  getDescriptionId: (fieldName: string): string => generateId(`desc-${fieldName}`),
  
  // Generate field ID
  getFieldId: (fieldName: string): string => generateId(`field-${fieldName}`)
};
