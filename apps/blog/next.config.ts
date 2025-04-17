import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['@repo/core'],
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack(config) {
    // svg를 컴포넌트로 사용하기 위한 rule 추가
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push({
      test: /\.(md|mdx)$/,
      use: [
        {
          loader: '@mdx-js/loader',
        },
      ],
    });

    return config;
  },
  sassOptions: {
    additionalData: `@import "./src/assets/styles/util.scss";`,
  },
};

export default nextConfig;
