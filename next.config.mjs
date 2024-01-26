import exporter from './lib/exporter.js'
const {__dirname , path} = exporter

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ['aceternity.com', 'images.unsplash.com']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, './components/mask-hovers')]

  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

export default nextConfig
