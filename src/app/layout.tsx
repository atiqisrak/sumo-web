import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sumo - Restaurant Management Platform",
    template: "%s | Sumo",
  },
  description:
    "Comprehensive restaurant inventory and asset management platform with AI-powered features. Real-time stock tracking, purchase orders, requisitions, analytics, and SumoBot AI assistant. Built with Next.js 15, TypeScript, and PostgreSQL for modern restaurants.",
  keywords: [
    "restaurant management",
    "inventory management",
    "restaurant inventory",
    "AI forecasting",
    "restaurant automation",
    "purchase orders",
    "stock management",
    "restaurant analytics",
    "SumoBot AI",
    "restaurant software",
    "multi-location restaurants",
    "restaurant procurement",
    "GRN management",
    "restaurant requisitions",
    "restaurant dashboard",
    "restaurant reporting",
    "restaurant POS integration",
    "restaurant asset management",
    "restaurant supply chain",
    "restaurant cost control",
    "restaurant profitability",
    "restaurant operations",
    "restaurant technology",
    "restaurant ERP",
    "restaurant business intelligence",
  ],
  authors: [{ name: "Sumo Team" }],
  creator: "Sumo",
  publisher: "Sumo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sumo-restaurant.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sumo-restaurant.com",
    title: "Sumo - Restaurant Management Platform",
    description:
      "Comprehensive restaurant inventory and asset management platform with AI-powered features. Real-time stock tracking, purchase orders, requisitions, analytics, and SumoBot AI assistant for modern restaurants.",
    siteName: "Sumo",
    images: [
      {
        url: "/images/logo-square.svg",
        width: 1200,
        height: 630,
        alt: "Sumo Restaurant Management Platform - AI-Powered Inventory & Asset Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumo - Restaurant Management Platform",
    description:
      "AI-powered restaurant inventory & asset management with real-time tracking, purchase orders, analytics, and SumoBot AI assistant.",
    images: ["/images/logo-square.svg"],
    creator: "@sumo_restaurant",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/images/icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/images/icon.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/manifest.json",
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <TooltipProvider>
            <Toaster />
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
