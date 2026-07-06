/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  webpack: (config) => {
    config.resolve.symlinks = false
    config.cache = false
    return config
  },
}
module.exports = nextConfig
