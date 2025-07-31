/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Production-ready output
  output: 'standalone',
  trailingSlash: true,

  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  // Eslint and typescript configuration for build process
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },

  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/introduction',
        permanent: true,
      },
    ]
  },

  webpack: (config) => {
    config.resolve.fallback = { fs: false };  
    return config;
  },
  
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  experimental: {
    // appDir: true, // If using Next.js 13 App Router
  },
}

module.exports = nextConfig;