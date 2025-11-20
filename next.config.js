/** @type {import('next').NextConfig} */

const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1338',
      },
      {
        protocol: 'https',
        hostname: 'pegadaneutra.com.br',
        port: '',
      },
    ],
  },

  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@ui-icons": path.resolve(__dirname, 'public/images/icons'),
      "@brand-icons": path.resolve(__dirname, 'public/images/icons/brand'),
    }
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { svgo: false } }],
    })

    return config
  },
})

module.exports = nextConfig
