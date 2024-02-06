/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // other properties...
  images: {
    domains: ["cdn.dummyjson.com"],
  },
};

module.exports = nextConfig;
