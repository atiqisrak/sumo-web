/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
  images: {
    domains: [
      "i.postimg.cc",
      "images.unsplash.com",
      "logos-world.net",
      "cdn.worldvectorlogo.com",
    ],
  },
};

module.exports = nextConfig;
