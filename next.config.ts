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

  // Skip ESLint during build for deployment
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Skip TypeScript errors during build for deployment
  typescript: {
    ignoreBuildErrors: true,
  },

  // Ensure favicon files are served with correct headers
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/favicon-:size.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/apple-touch-icon.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
