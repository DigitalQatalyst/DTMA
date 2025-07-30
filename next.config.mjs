/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: [
    //   "images.pexels.com",
    //   "dtma.blob.core.windows.net",
    //   "8840-54-37-203-255.ngrok-free.app",
    // ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "8840-54-37-203-255.ngrok-free.app",
        pathname: "/assets/preview/**", // Use ** to match any subpath
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
