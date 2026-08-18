/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Emit route/index.html so /partners, /speakers, /terms resolve on any
  // static host (not just ones with clean-URL rewrites).
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
