import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: [
    "@repo/components",
    "@repo/tailwind-config",
    "@repo/eslint-config",
    "@repo/typescript-config",
  ],
};

export default nextConfig;
