/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/wedding-main',
  assetPrefix: '/wedding-main/',
};

module.exports = nextConfig;