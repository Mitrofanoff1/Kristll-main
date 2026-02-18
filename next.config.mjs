/** @type {import('next').NextConfig} */
const nextConfig = {
  // В новых версиях эти параметры могут не требоваться или писаться иначе,
  // поэтому для стабильности на Cloudflare оставляем только необходимое.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;