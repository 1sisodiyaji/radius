import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      }, 
      { 
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "radius-ois.ai",
      }, 
      {
        protocol: "https",
        hostname: "flowbite.s3.amazonaws.com",
      }, 
    ],
  },
}; 

export default nextConfig;
