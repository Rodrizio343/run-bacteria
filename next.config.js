/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'run-bacteria-test.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'run-bacteria.s3.amazonaws.com',
      }
    ],
  },
}

module.exports = nextConfig
