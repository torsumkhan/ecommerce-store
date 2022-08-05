/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async redirects() {
    return [{ source: "/canceled", destination: "/", permanent: true }];
  },
};

module.exports = nextConfig;
