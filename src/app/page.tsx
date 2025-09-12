import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Integrations from "@/components/Integrations";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSolution />
        <Features />

        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                How Sumo{" "}
                <span className="text-orange-600">
                  Transforms Your Restaurant
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From single cafes to multi-unit chains, Sumo grows with
                you—saving time, money, and headaches.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Sign Up & Onboard",
                  description: "Quick setup with expert guidance—no IT needed.",
                },
                {
                  step: "2",
                  title: "Track & Automate",
                  description:
                    "Input data once, let AI handle forecasts and alerts.",
                },
                {
                  step: "3",
                  title: "Analyze & Optimize",
                  description: "Get actionable insights to cut costs and grow.",
                },
                {
                  step: "4",
                  title: "Scale Seamlessly",
                  description:
                    "Add locations or users as your business expands.",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-orange-50 rounded-2xl p-8 inline-block">
                <p className="text-2xl font-bold text-orange-600 mb-2">
                  Process 50% more orders
                </p>
                <p className="text-gray-600">without adding extra staff</p>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        <Integrations />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
