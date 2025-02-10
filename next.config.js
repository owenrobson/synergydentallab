/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/synergydentallab", // Required for GitLab Pages
  assetPrefix: "/synergydentallab", // Ensures assets load correctly
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Required for static exports
  },
};

module.exports = nextConfig;
