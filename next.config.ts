/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true, // Only if you use styled-components
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
  output: 'export', // Add this line if automatic export doesn't work or if using the `pages` directory
  trailingSlash: true, // Uncomment this line if you are having routing issues with github pages
};

export default nextConfig;