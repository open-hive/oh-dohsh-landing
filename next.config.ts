import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // keep static export
  trailingSlash: true, // ✅ important: creates /services/index.html instead of /services.html
  basePath: '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
