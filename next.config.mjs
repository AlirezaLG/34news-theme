 /** @type {import('next').NextConfig} */
 import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    // Will be available on both server and client
    baseUrl: process.env.NEXT_PUBLIC_APP_URL,
    backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    apiUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "*.gravatar.com",
      },
      {
        protocol: "https",
        hostname: "*.34news.com",
      },
      {
        protocol: "https",
        hostname: "**.gravatar.com",
      },
    ],
    },
    
};

export default withNextIntl(nextConfig);
