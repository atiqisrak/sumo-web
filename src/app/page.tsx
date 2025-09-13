import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Integrations from "@/components/Integrations";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/landing/HowItWorks";
import SocialProof from "@/components/landing/SocialProof";
import CTASection from "@/components/landing/CTASection";
import TrustIndicators from "@/components/landing/TrustIndicators";
import NewsletterSignup from "@/components/landing/NewsletterSignup";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSolution />
        <Features />

        <HowItWorks />

        <SocialProof variant="combined" />

        <TrustIndicators />

        <Testimonials />
        <Integrations />
        <Pricing />

        <CTASection />

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <NewsletterSignup />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
