/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'https://ghar-ka-swad.vercel.app/'],
  },
  async headers() {
    return [
      {
        source: '/assets/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;