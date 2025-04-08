import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // App Router uses a different i18n approach
  experimental: {
    // Enables the runtime internationalization API
    serverComponentsExternalPackages: ['react-i18next', 'i18next'],
  },
};

export default nextConfig;
