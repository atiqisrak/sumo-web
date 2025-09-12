import {
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingDown,
  Users,
  BarChart3,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { StatCard } from "@/components/ui/stat-card";
import { GradientBackground } from "@/components/ui/gradient-background";
import { PrimaryButton } from "@/components/ui/primary-button";

export default function ProblemSolution() {
  const problems = [
    {
      icon: AlertTriangle,
      problem: "Manual inventory leads to waste and overstock",
      solution: "AI forecasting predicts needs accurately",
      color: "text-red-600",
    },
    {
      icon: Clock,
      problem: "Disorganized orders slow down service",
      solution: "Real-time order tracking from kitchen to table",
      color: "text-orange-600",
    },
    {
      icon: Users,
      problem: "Staff scheduling eats up time",
      solution: "Automated shifts and compliance checks in one app",
      color: "text-blue-600",
    },
  ];

  return (
    <SectionContainer
      id="solutions"
      background="gradient"
      className="relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-50">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative">
        <SectionHeader
          badge={{
            text: "Restaurant Management Revolution",
            icon: <Sparkles className="h-4 w-4" />,
          }}
          title={
            <>
              Tired of Restaurant Chaos?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Sumo Has Your Back
              </span>
            </>
          }
          subtitle="From inventory shortages to compliance headaches, running a restaurant is tough. Sumo streamlines it all with smart tracking and automation."
          className="mb-20"
          titleClassName="text-4xl lg:text-6xl leading-tight"
          subtitleClassName="text-xl lg:text-2xl max-w-4xl leading-relaxed"
        />

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {problems.map((item, index) => (
            <Card
              key={index}
              className="group rounded-3xl hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-500 border-gray-100 hover:border-orange-200 hover:-translate-y-2"
              padding="lg"
            >
              <div className="space-y-8">
                {/* Problem */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <IconContainer color="red" size="sm">
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </IconContainer>
                    <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
                      Problem
                    </span>
                  </div>
                  <p className="text-gray-800 font-semibold text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {item.problem}
                  </p>
                </div>

                {/* Arrow with animation */}
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300 group-hover:scale-110">
                    <ArrowRight className="w-5 h-5 text-orange-600 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Solution */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <IconContainer color="green" size="sm">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </IconContainer>
                    <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                      Solution
                    </span>
                  </div>
                  <p className="text-gray-800 font-semibold text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {item.solution}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <GradientBackground className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-2">
              Proven Results
            </h3>
            <p className="text-orange-100 text-lg">
              Real impact from real restaurants
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <StatCard
              value="30%"
              label="Average waste reduction"
              icon={<TrendingDown className="h-8 w-8" />}
            />
            <StatCard
              value="20hrs"
              label="Saved per week on admin"
              icon={<Clock className="h-8 w-8" />}
            />
            <StatCard
              value="40%"
              label="Efficiency improvement"
              icon={<BarChart3 className="h-8 w-8" />}
            />
          </div>
        </GradientBackground>

        <div className="text-center">
          <PrimaryButton showArrow>See How Sumo Solves It</PrimaryButton>
        </div>
      </div>
    </SectionContainer>
  );
}
