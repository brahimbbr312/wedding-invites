/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/wedding-invites',
  assetPrefix: '/wedding-invites/',
};

module.exports = nextConfig;