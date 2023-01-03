/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@ui-icons": path.resolve(__dirname, 'public/images/icons'),
      "@band-icons": path.resolve(__dirname, 'public/images/icons/brand'),
    }
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { svgo: false } }],
    })

    return config
  },
}

module.exports = nextConfig
