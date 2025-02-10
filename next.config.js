/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Static export
  basePath: "/synergydentallab", // Your GitHub repo name or subpath
  assetPrefix: "/synergydentallab", // Ensure assets load from the correct path
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
