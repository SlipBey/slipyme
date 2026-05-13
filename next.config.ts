import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: { bodySizeLimit: "2mb" },
  },
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "*.cdninstagram.com", pathname: "/**" },
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/**" },
      { protocol: "https", hostname: "i.scdn.co", pathname: "/**" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/Slipyme",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/slipymeyazilim",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://www.youtube.com/@SlipBeyYoutube/",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.com/invite/ttGpRCZZp6",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/company/slipyme/",
        permanent: true,
      },
      { source: "/basvuru", destination: "/carrier", permanent: true },
    ];
  },
};

export default nextConfig;
