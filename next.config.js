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
        destination: "https://www.youtube.com/AngelCraftNW",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/vvTZtRCK3X",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/slipbey/",
        permanent: true,
      },
      {
        source: "/npm",
        destination: "https://www.npmjs.com/~mynameisslik",
        permanent: true,
      },
      {
        source: "/spotify",
        destination: "https://open.spotify.com/user/g8l0pnh50bxsyb932y052ma4h",
        permanent: true,
      },
    ];
  },
};

module.exports = withPlugins([withImages], nextConfig);
