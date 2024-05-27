/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["13.233.60.96:3001", "myhealthstop.s3.ap-south-1.amazonaws.com"],
  },
  publicRuntimeConfig: {
    API_HOST: process.env.API_HOST || "http://localhost:3004/",
    BASE_URL: process.env.BASE_URL || "http://localhost:3006/",
  },
  basePath: "/welcome",
  assetPrefix: "/welcome",
};

module.exports = nextConfig;
