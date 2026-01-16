import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/oh-dohsh-landing',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
