/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
