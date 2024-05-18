/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    // Will be available on both server and client
    baseUrl: process.env.NEXT_PUBLIC_APP_URL,
    backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    backendApiUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL,
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "localhost:8888",
        },
        {
          protocol: "http",
          hostname: "localhost:3001",
        },
        {
          protocol: "https",
          hostname: "*.gravatar.com",
        },
        {
          protocol: "https",
          hostname: "*.34news.com",
        },
        {
          protocol: "http",
          hostname: "*.cloudflare.com",
        },
      ],
    },
  },
};
module.exports = nextConfig;
