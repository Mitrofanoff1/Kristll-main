/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Игнорировать ошибки TypeScript при сборке
    ignoreBuildErrors: true,
  },
  eslint: {
    // Игнорировать ошибки ESLint при сборке
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
