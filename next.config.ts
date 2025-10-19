import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Basic configuration for Vercel deployment
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  images: {
    formats: ['image/webp', 'image/avif'],
  },

  compress: true,
  
  // Fix workspace root warning
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
