/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ['upload.wikimedia.org', 'raw.githubusercontent.com'],
    formats: ['image/webp'],
  },
}