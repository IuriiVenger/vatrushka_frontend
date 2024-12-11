/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GRAPHQL_API_URL: process.env.GRAPHQL_API_URL,
    REST_API_URL: process.env.REST_API_URL,
    API_KEY: process.env.API_KEY,
    IMAGE_CDN: process.env.IMAGE_CDN,
    EMAIL_TO: process.env.EMAIL_TO,
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
