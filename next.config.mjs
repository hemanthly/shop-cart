/** @type {import('next').NextConfig} */
const nextConfig = {
  //   images: {
  //     domains: ["assets-global.website-files.com"],
  //   },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
