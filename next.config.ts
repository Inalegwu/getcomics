import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.comixnow.com',
      },
    ],
  },
};

export default nextConfig;