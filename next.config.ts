import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  eslint: {
    // ⚠️ Warning: this ignores ESLint errors during builds
    // Your code will still run, but bad imports/unused vars won't block deploy
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
