/**
 * @type {import("next").NextConfig}
 */

const { withPlugins } = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  swcMinify: true,
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "tr",
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/SlipBey",
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
        destination: "https://discord.gg/vvTZtRCK3X",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/company/slipyme/",
        permanent: true,
      },
      {
        source: "/npm",
        destination: "https://www.npmjs.com/~mynameisslik",
        permanent: true,
      },
      {
        source: "/basvuru",
        destination: "/carrier",
        permanent: true,
      },
    ];
  },
};

module.exports = withPlugins([withImages], nextConfig);
