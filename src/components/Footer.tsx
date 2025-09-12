import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { NavLink } from "@/components/ui/nav-link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div className="space-y-4">
            <Image
              src={"https://i.postimg.cc/v8xxnkmB/logo-horizontal.png"}
              alt="Sumo"
              width={220}
              height={80}
              className="h-8 w-auto"
            />
            <p className="text-gray-400">
              Smart restaurant management software that helps you track
              everything, effortlessly.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <NavLink href="#features" className="hover:text-white">
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="https://sumo.ethertech.ltd"
                  external
                  className="hover:text-white"
                >
                  Live Demo
                </NavLink>
              </li>
              <li>
                <NavLink href="#pricing" className="hover:text-white">
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className="hover:text-white">
                  API
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <NavLink href="#" className="hover:text-white">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className="hover:text-white">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className="hover:text-white">
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className="hover:text-white">
                  Press
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <NavLink href="#" className="hover:text-white">
                  Help Center
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className="hover:text-white">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className="hover:text-white">
                  Privacy
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className="hover:text-white">
                  Terms
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Sumo . All rights reserved{" "}
                <span className="text-orange-400 font-medium">EtherTech</span>.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Need help?</span>
              <div className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 px-3 py-2 rounded-lg cursor-pointer transition-colors">
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm font-medium">Live Chat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
