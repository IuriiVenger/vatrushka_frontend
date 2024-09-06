/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '102922.selcdn.ru',
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
    ],
  },
};

export default nextConfig;
