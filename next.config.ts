import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/oh-dohsh-landing',
  assetPrefix: '/oh-dohsh-landing',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;