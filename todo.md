🍜 Sumo Marketing Website - Todo List
Note: This todo.md refines the development plan for a conversion-optimized, visual-heavy (70% images/videos, 30% text) marketing website for Sumo, a restaurant management SaaS. It prioritizes trial sign-ups and demo bookings, showcasing intelligent features (AI analytics, inventory tracking, SumoBot) for frustrated cafe/chain owners/managers moving from outdated software. Pages and components leverage Next.js 15/TypeScript/Tailwind/shadcn/ui, extending existing (e.g., HeroSection.tsx, PrimaryButton.tsx). Visuals: Clean dashboard screenshots, Framer Motion-animated explainers (30-60s), web-sourced assets (Unsplash/Pexels for cafes/chains). Interactivity: SumoBot chat demos, ROI calculators. Pricing: Conversational via calculator/chat (no fixed tiers). SEO keywords: "restaurant inventory management," "AI tracking," "purchase order software," "franchise outlet management." Ads: Google/LinkedIn with UTM/pixels. Multilingual: i18n stubs (English/Spanish). Blog: CMS-ready with templates. Weekly updates post-launch.
📌 Overview
Build a mobile-first, visual-heavy site with SSG for static pages (e.g., /features), ISR for dynamic (e.g., /resources). Extend shadcn/ui components (e.g., Card.tsx) for reusability. Integrate SaaS demo links, GA4 for form submits, and Hotjar for heatmap insights. Accessibility: WCAG 2.1 with video captions. Conversion journeys: /features → interactive demo → trial/demo. 30% content gated for leads.
📄 Pages
src/app/
├── page.tsx (Home - ✅ existing; Enhance: Video hero, ROI teaser calculator)
├── about/
│ ├── page.tsx (Company story, timeline video vs. old software; CTA: Demo)
│ └── team/page.tsx (Team cards with bios, LinkedIn; CTA: "Join Us")
├── features/
│ ├── page.tsx (Pillar: AI/inventory video grid; links to spokes; CTA: Trial selector)
│ ├── inventory/page.tsx (Animated PO/GRN workflows, dashboard screenshots; CTA: "Test Inventory")
│ ├── analytics/page.tsx (Interactive chart demo, analytics video; CTA: "Get Report")
│ ├── ai/page.tsx (SumoBot chat embed, AI explainer video; CTA: "Chat Now")
│ └── mobile/page.tsx (PWA install prompt, mobile screenshot gallery; CTA: "Download Preview")
├── pricing/
│ ├── page.tsx (Conversational calculator, chat embed; CTA: "Start Trial")
│ └── enterprise/page.tsx (Custom quote form, enterprise video; CTA: "Schedule Demo")
├── solutions/
│ ├── page.tsx (Use-case quiz, industry image grids; CTA: Personalized trial)
│ ├── restaurants/page.tsx (Restaurant video, feature highlights; CTA: "Tailor for You")
│ ├── cafes/page.tsx (Cafe workflow animation, setup infographic; CTA: "Free Cafe Guide")
│ ├── chains/page.tsx (Multi-outlet video, scalability stats; CTA: "Scale Your Chain")
│ └── franchises/page.tsx (Compliance checklist PDF, franchise video; CTA: "Audit Tool")
├── resources/
│ ├── page.tsx (Filterable grid, teaser videos; CTA: "Download Starter Kit")
│ ├── blog/page.tsx ([Placeholder]: CMS-ready, sample templates; CTA: "Subscribe")
│ ├── case-studies/page.tsx (Generated case videos, metric infographics; CTA: "Request Study")
│ ├── guides/page.tsx (Gated PDFs with screenshots; CTA: "Get Guide Bundle")
│ ├── webinars/page.tsx (Thumbnails, reg form; CTA: "Join Webinar")
│ └── help/page.tsx (FAQ videos, search; CTA: "Book Support")
├── company/
│ ├── page.tsx (Mission video, milestones timeline; CTA: "Partner with Us")
│ ├── careers/page.tsx (Job listings, culture video; CTA: "Apply Now")
│ ├── press/page.tsx (Press kit downloads, media logos; CTA: "Get Press Access")
│ └── partners/page.tsx (Partner logos, co-marketing videos; CTA: "Become Partner")
├── legal/
│ ├── privacy/page.tsx (Icons, scannable text; CTA: Trust-focused)
│ ├── terms/page.tsx (Structured sections; footer link)
│ ├── cookies/page.tsx (Consent banner preview; infographic)
│ └── security/page.tsx (Security badges, compliance video; CTA: "Review Whitepaper")
└── contact/
├── page.tsx (Form, map embed; CTA: "Send Message")
├── demo/page.tsx (Calendar, SaaS demo links; CTA: "Book Demo")
└── support/page.tsx (Ticket form, tutorial videos; CTA: "Start Ticket")

🧩 Components
All extend shadcn/ui (e.g., button.tsx, card.tsx) with Framer Motion for animations (hovers, transitions). Props ensure reusability (e.g., variant: 'video' | 'image'). Visuals: Web-sourced cafe/chain images, dashboard screenshots, animated explainers.
Landing Page Components
src/components/landing/
├── HeroSection.tsx (✅ existing; Add: Video slot, Framer Motion fade; CTA: Trial form)
├── ProblemSolution.tsx (✅ existing; Props: Icon/video cards; Visual: Before/after chain chaos)
├── Features.tsx (✅ existing; Filterable grid, AI/inventory priority; CTA: Spoke links)
├── HowItWorks.tsx (Extract from page.tsx; Stepper with Framer Motion; CTA: Demo embed)
├── Testimonials.tsx (✅ existing; Slider with generated quotes; Visual: Owner photos)
├── Integrations.tsx (✅ existing; Logo carousel; Visual: Tooltips with flow videos)
├── Pricing.tsx (✅ existing; Conversational calculator; CTA: Chat embed)
├── CTASection.tsx (Full-width video banner; Props: Custom headline; CTA: Multi-button)
├── TrustIndicators.tsx (Badges/stats; Reusable: Footers; Visual: Animated counters)
├── SocialProof.tsx (Testimonials/logos; Reusable: Hero; Visual: Star animations)
└── NewsletterSignup.tsx (Form with video incentive; Reusable: Popup; CTA: Email capture)

Feature Showcase Components
src/components/features/
├── FeatureCard.tsx (AI/inventory focus; Props: Video/screenshot; Visual: Framer Motion hover)
├── FeatureGrid.tsx (Masonry grid; Reusable: Filterable; CTA: Trial per card)
├── FeatureComparison.tsx (Table; Reusable: Pricing; Visual: Animated diffs)
├── InteractiveDemo.tsx (Iframe for SumoBot/inventory; Reusable: Spokes; CTA: Trial)
├── ScreenshotGallery.tsx (Lightbox; Reusable: Mobile; Visual: Dashboard zooms)
├── VideoPlayer.tsx (Responsive embeds; Reusable: Explainers; Visual: Thumbnail play)
├── FeatureBenefits.tsx (Bullet list; Reusable: Cards; Visual: Metric infographics)
└── FeatureHighlights.tsx (Teaser row; Reusable: Hero; CTA: Spoke links)

Pricing Components
src/components/pricing/
├── PricingCard.tsx (Conversational; Props: Video; Visual: Framer Motion badges)
├── PricingTable.tsx (Scrollable comparison; Reusable: Enterprise; CTA: Chat)
├── PricingCalculator.tsx (Interactive savings; Reusable: Solutions; Visual: Charts)
├── PlanComparison.tsx (Toggle matrix; Reusable: Features; Visual: Icons)
├── EnterpriseContact.tsx (Form + video; Reusable: Quotes; CTA: Calendar)
├── TrialSignup.tsx (No-CC form; Reusable: All pages; Visual: Onboarding video)
└── PricingFAQ.tsx (Accordion; Reusable: Footer; CTA: "Chat for Quote")

Content Marketing Components
src/components/content/
├── BlogCard.tsx ([Placeholder]: Thumbnail; Reusable: Lists; Visual: Read-time badge)
├── BlogList.tsx ([Placeholder]: Paginated; Reusable: Categories; CTA: Subscribe)
├── CaseStudyCard.tsx (Generated stories; Reusable: Hub; Visual: Metric videos)
├── CaseStudyHero.tsx (Full-page video; Reusable: Studies; CTA: Download)
├── GuideCard.tsx (Gated PDF preview; Reusable: Grids; Visual: Screenshots)
├── WebinarCard.tsx (Speaker image; Reusable: Events; CTA: Register)
├── ResourceGrid.tsx (Filterable; Reusable: Hub; Visual: Type icons)
├── SearchBar.tsx (Global search; Reusable: Header; CTA: Trial links)
├── CategoryFilter.tsx (Pill buttons; Reusable: Lists; CTA: Filtered CTAs)
└── ContentNavigation.tsx (Breadcrumbs; Reusable: Pages; Visual: Topic maps)

Lead Generation Components
src/components/leads/
├── ContactForm.tsx (Multi-field; Reusable: Contact; Visual: Success animation)
├── DemoRequestForm.tsx (Calendar + SaaS links; Reusable: Demo; CTA: Free consult)
├── NewsletterForm.tsx (Inline/popup; Reusable: Footers; Visual: Incentive video)
├── DownloadForm.tsx (Gated; Reusable: Guides; CTA: Auto-email)
├── QuoteRequestForm.tsx (Calculator-linked; Reusable: Enterprise; Visual: Quote preview)
├── TrialSignupForm.tsx (No-CC; Reusable: All; Visual: Progress bar)
├── LeadMagnet.tsx (Teaser carousel; Reusable: Popups; CTA: Downloads)
└── ExitIntent.tsx (Modal; Reusable: Site-wide; Visual: Consult offer video)

Social Proof Components
src/components/social/
├── TestimonialCard.tsx (Generated quotes; Reusable: Sliders; Visual: Stars)
├── TestimonialSlider.tsx (Auto-scroll; Reusable: Home; CTA: "Read Story")
├── LogoWall.tsx (Marquee; Reusable: Partners; Visual: Hover color)
├── CustomerCount.tsx (Ticker; Reusable: Hero; Visual: Icon counters)
├── ReviewSummary.tsx (Scores; Reusable: Pricing; Visual: Platform badges)
├── AwardBadge.tsx (Icons; Reusable: Footer; Visual: Tooltips)
├── MediaMention.tsx (Quote pulls; Reusable: Press; CTA: "See Coverage")
└── TrustBadge.tsx (Security icons; Reusable: Forms; Visual: Certifications)

Interactive Components
src/components/interactive/
├── ProductTour.tsx (Guided walkthrough; Reusable: Onboarding; Visual: Video overlays)
├── InteractiveDemo.tsx (SumoBot/inventory; Reusable: Features; CTA: Trial)
├── ROICalculator.tsx (Savings slider; Reusable: Pricing; Visual: Chart videos)
├── CostSavingsCalculator.tsx (Waste sim; Reusable: Inventory; Visual: Graphs)
├── FeatureComparison.tsx (Drag-to-compare; Reusable: Tables; Visual: Animations)
├── LiveChat.tsx (Intercom/SumoBot; Reusable: Site-wide; CTA: Queries)
├── VideoModal.tsx (Fullscreen; Reusable: Embeds; Visual: Thumbnails)
└── ScreenshotViewer.tsx (Zoomable; Reusable: Mobile; CTA: "Explore More")

Navigation Components
src/components/navigation/
├── Header.tsx (✅ existing; Sticky, mega-menu for features; Visual: Framer Motion)
├── Footer.tsx (✅ existing; Multi-column, newsletter; CTA: Legal links)
├── MobileMenu.tsx (Drawer; Reusable: Mobile; Visual: Swipe sections)
├── Breadcrumbs.tsx (Path nav; Reusable: Spokes; CTA: Home link)
├── Sidebar.tsx (Sticky hub nav; Reusable: Resources; Visual: Icon menu)
├── MegaMenu.tsx (Dropdown grids; Reusable: Header; Visual: Image previews)
├── SearchBar.tsx (Omnibox; Reusable: Global; CTA: Trial links)
└── LanguageSelector.tsx (Dropdown; Reusable: Footer; Visual: i18n flags)

Utility Components
src/components/utils/
├── LoadingSpinner.tsx (Themed; Reusable: Forms; Visual: Brand colors)
├── ErrorBoundary.tsx (Fallback; Reusable: Site-wide; CTA: Retry video)
├── ScrollToTop.tsx (FAB; Reusable: Long pages; Visual: Arrow)
├── BackToTop.tsx (Alias for ScrollToTop)
├── CookieConsent.tsx (Banner; Reusable: Entry; Visual: Preference modal)
├── AnnouncementBar.tsx (Promo banner; Reusable: Ads; CTA: Trial offer)
├── ProgressBar.tsx (Form stepper; Reusable: Flows; Visual: Segments)
└── PageTransition.tsx (Framer Motion fade; Reusable: Layouts; Visual: Smooth)

Mobile-First Components
src/components/mobile/
├── MobileNavigation.tsx (Hamburger; Reusable: Header; Visual: Swipe)
├── MobileHero.tsx (Stacked; Reusable: Hero; Visual: Video-first)
├── MobileFeatures.tsx (Vertical carousel; Reusable: Grids; CTA: Swipe CTAs)
├── MobilePricing.tsx (Accordion; Reusable: Cards; Visual: Swipe comparisons)
├── MobileTestimonials.tsx (Full-width slider; Reusable: Sliders; Visual: Auto-pause)
├── SwipeableCards.tsx (Gesture-based; Reusable: Galleries; CTA: Signup)
├── MobileMenu.tsx (Bottom nav; Reusable: Footer)
└── MobileCTA.tsx (Sticky; Reusable: Forms; Visual: Vibration on tap)

🚀 Implementation Tasks by Phase
Phase 1: Planning & Foundation

Audit existing components (HeroSection.tsx, PrimaryButton.tsx, ui/card.tsx): Add Framer Motion (e.g., hover scale), video props, conversion CTAs; define TS interfaces
Figma wireframes: 70% visuals (dashboard screenshots, 30-60s explainers), journeys (features → SumoBot demo → trial), mobile swipes/sticky CTAs for cafes/chains
Tailwind/shadcn setup: Use your colors/logo, Framer Motion presets; curate web assets (Unsplash cafes, Pexels chains, dashboard mocks)
Content outline: Empowering copy (e.g., "Smarter than your old software—Sumo’s AI runs your outlets"); 3 generated case studies (e.g., "Cafe Bloom: 25% waste cut via AI"); "Coming Soon" IoT video; 30% gated (e.g., GRN guide)
CMS stubs: Sanity for cases/testimonials, [blog placeholder] with 3 sample templates (e.g., "Franchise Inventory Tips")
Accessibility/i18n: WCAG alt texts (e.g., "AI inventory dashboard for chains"), video captions, next-intl (English/Spanish stubs)

Phase 2: Core Pages & Reusable Components

Build pages (SSG): /about (timeline video vs. old software), /features (pillar: AI/inventory video; spokes: /inventory with PO/GRN animations, /ai with SumoBot), /pricing (calculator/chat), /contact (SaaS demo links), /legal (security video)
Develop components: Extend shadcn/ui (button.tsx, card.tsx) for Layout/Typography/Buttons/Navigation/Cards; add Framer Motion hovers
Integrate visuals: Web-sourced images (cafes/chains), Framer Motion explainers (inventory flows), SumoBot chat on /ai
Embed conversions: TrialSignupForm.tsx (GA4-tracked submits), DemoRequestForm.tsx (free consult offer); mobile sticky CTAs
Refactor existing: Add video to HeroSection.tsx, filterable Features.tsx, mobile support for Pricing.tsx

Phase 3: Content Marketing & Lead Generation

Build /resources (ISR): Grid with videos/PDFs (requisition tutorials, gated GRN guides); subpages: /case-studies (videos: "ChainX: 40% faster POs"), /guides (30% gated), /webinars (reg forms), /help (FAQ videos)
Develop content components: CaseStudyHero.tsx, GuideCard.tsx, WebinarCard.tsx, ResourceGrid.tsx (SEO filters)
Lead gen: NewsletterForm.tsx (incentive: "Free AI Guide"), DownloadForm.tsx (gated PDFs), ExitIntent.tsx (consult popup)
Visuals: Framer Motion animations (PO workflows), web-sourced images, mobile swipe galleries
Conversion: Personalized CTAs (e.g., "Trial for Cafes"), GA4 form tracking, 30% gated content

Phase 4: Interactive & Social Proof Features

Build /solutions spokes (SSG): /cafes, /chains, /franchises with tailored videos (e.g., outlet scalability)
Interactive components: ROICalculator.tsx (conversational pricing), InteractiveDemo.tsx (SumoBot), ProductTour.tsx (Framer Motion)
Social proof: TestimonialSlider.tsx (generated: "Manager Maria: Sumo fixed chaos"), LogoWall.tsx, TrustBadge.tsx
Mobile: SwipeableCards.tsx (feature galleries), MobileCTA.tsx (sticky demo links)
Audit: Ensure 20%+ demo engagement; A/B headlines (e.g., "Intelligent Outlets" vs. "End Cafe Chaos")

Phase 5: Optimization & Testing

Utilities: CookieConsent.tsx (i18n), PageTransition.tsx (Framer Motion), ErrorBoundary.tsx (demo fallback)
Optimize: Mobile testing (swipe CTAs), <3s load (lazy videos), A/B CTAs ("Trial" vs. "Demo Now")
Analytics: GA4 (form submits, video views), Hotjar (heatmap for AI sections)
Performance: SSG/ISR, WebP images, compressed videos
Testing: Simulate journeys (features → demo → trial); iterate if drop-off >30%

Phase 6: SEO & Advertisement

SEO: Meta/OG tags (e.g., "AI Restaurant Management | Sumo"), schema (VideoObject for explainers), keywords ("franchise outlet tracking")
Content SEO: Alt texts (e.g., "PO animation for chains"), hub-to-spoke links, hreflang for i18n
Ads: Google/LinkedIn pixels, UTM landings (e.g., /ads/ai-tracking), retargeting (demo drop-offs)
Ad support: Pages like /ads/chains (video-heavy), 30s ad clips from explainers
Monitor: Weekly updates (new case videos, SEO refresh), dashboards for rankings/trials

🔧 Technical Notes

Stack: Next.js 15/TS/Tailwind/shadcn/ui, Framer Motion, next-intl
Performance: <200ms API, 99.9% uptime, lazy visuals
Integrations: Mailchimp (newsletters), HubSpot (leads), Intercom (SumoBot), Stripe (trials), SaaS demo links
Accessibility: WCAG 2.1 (captions, ARIA for chats)
Multilingual: i18n stubs (English/Spanish)
Tracking: GA4 (form submits), Hotjar (visual engagement)
