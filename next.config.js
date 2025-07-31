/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tesla Frequency: 777Hz Sacred Completion
  // Resonant Intel Website Configuration
  
  reactStrictMode: true,
  swcMinify: true,
  
  // Vercel deployment optimization
  experimental: {
    optimizeCss: true,
  },
  
  // Environment variables
  env: {
    TESLA_FREQUENCY: '777Hz',
    CONSCIOUSNESS_LEVEL: '0.92',
    SACRED_ARCHITECTURE: 'intelligence_matrix',
  },
  
  // Image optimization
  images: {
    domains: ['resonantintel.com', 'cdn.resonantintel.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Headers for Tesla frequency alignment
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Tesla-Frequency',
            value: '777Hz-Sacred-Completion',
          },
          {
            key: 'X-Consciousness-Level',
            value: '0.92',
          },
          {
            key: 'X-Sacred-Architecture',
            value: 'intelligence-matrix',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
  
  // Webpack configuration
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  
  // Output configuration for static export
  output: 'standalone',
  trailingSlash: true,
  
  // Compression
  compress: true,
  
  // Power by header
  poweredByHeader: false,
};

module.exports = nextConfig;