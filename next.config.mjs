/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
    IMAGE_CDN: process.env.IMAGE_CDN,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.IMAGE_CDN,
        port: '',
        pathname: '/**',
      },
      // TODO: выпилить вместе с моками
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
        port: '',
        pathname: '/img/**',
      },
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '*/**',
      },
    ],
  },
};

export default nextConfig;
