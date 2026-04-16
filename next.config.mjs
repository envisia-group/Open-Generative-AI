/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['studio'],
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: 'https://api.muapi.ai/api/v1/:path*',
      },
    ];
  },
};

export default nextConfig;
