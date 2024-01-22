/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ['aceternity.com']
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

export default nextConfig
