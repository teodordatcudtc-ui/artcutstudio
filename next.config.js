/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Fără remotePatterns permissive – reducere risc DoS la Image Optimizer.
  // Pentru imagini remote cu next/image, adaugă doar domenii specifice, ex.:
  // images: { remotePatterns: [{ protocol: 'https', hostname: 'exemplu.ro' }] },
};

module.exports = nextConfig;
