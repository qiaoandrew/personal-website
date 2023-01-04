/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/pethsapp',
        destination: '/projects/pethsapp',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
