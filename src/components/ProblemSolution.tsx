import {
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingDown,
  Users,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tired of Restaurant Chaos?{" "}
            <span className="text-orange-600">Sumo Has Your Back</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From inventory shortages to compliance headaches, running a
            restaurant is tough. Sumo streamlines it all with smart tracking and
            automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="space-y-6">
                {/* Problem */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                    <span className="text-sm font-medium text-red-600 uppercase tracking-wide">
                      Problem
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium">{item.problem}</p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </div>

                {/* Solution */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-sm font-medium text-green-600 uppercase tracking-wide">
                      Solution
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white mb-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <TrendingDown className="h-8 w-8 mr-2" />
                <span className="text-3xl font-bold">30%</span>
              </div>
              <p className="text-orange-100">Average waste reduction</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-8 w-8 mr-2" />
                <span className="text-3xl font-bold">20hrs</span>
              </div>
              <p className="text-orange-100">Saved per week on admin</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <BarChart3 className="h-8 w-8 mr-2" />
                <span className="text-3xl font-bold">40%</span>
              </div>
              <p className="text-orange-100">Efficiency improvement</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
          >
            See How Sumo Solves It
          </Button>
        </div>
      </div>
    </section>
  );
}
