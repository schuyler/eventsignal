/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '../../public',
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
