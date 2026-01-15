import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/oh-dohsh-landing',
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes are handled properly
  trailingSlash: true,
};

export default nextConfig;