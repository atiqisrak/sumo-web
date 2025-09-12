import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://i.postimg.cc/v8xxnkmB/logo-horizontal.png"
              alt="Sumo"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#solutions"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Solutions
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Pricing
            </a>
            <a
              href="https://sumo.ethertech.ltd"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Live Demo
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-orange-600"
              asChild
            >
              <a href="https://sumo.ethertech.ltd/login">Login</a>
            </Button>
            <Button
              className="bg-orange-600 hover:bg-orange-700 text-white"
              asChild
            >
              <a href="https://sumo.ethertech.ltd/login">Start Free Trial</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a
                href="#features"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              >
                Features
              </a>
              <a
                href="#solutions"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              >
                Solutions
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              >
                Pricing
              </a>
              <a
                href="https://sumo.ethertech.ltd"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              >
                Live Demo
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-700"
                  asChild
                >
                  <a href="https://sumo.ethertech.ltd/login">Login</a>
                </Button>
                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                  asChild
                >
                  <a href="https://sumo.ethertech.ltd/login">
                    Start Free Trial
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
