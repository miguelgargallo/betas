/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ['upload.wikimedia.org', 'github.com', 'raw.githubusercontent.com', 'images.unsplash.com'],
    formats: ['image/webp'],
  },
}