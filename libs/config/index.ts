import { CONTACT } from "./account";

const domain = "slipyme.com";

const SEO = {
  layoutTitle: "%s - Slipyme Company",
  title: "Slipyme Company",
  domain,
  publishDomain: `https://wwww.${domain}`,
  themeColor: "#2563eb",
  keywords: [
    "berkant",
    "gunaydin",
    "slipy",
    "slipybey",
    "slipbey",
    "slipyme",
    "enderrise",
    "blog",
    "react",
    "next",
    "reactjs",
    "nextjs",
    "tailwind",
    "tailwindcss",
    "software",
    "yazilim",
    "web",
    "programming",
    "css",
    "js",
    "nodejs",
  ],
  description:
    "Slipyme çeşitli sektörlerde kaliteli bir hizmet verebilmek amacıyla kurulmuştur. Amacımız hizmet ettiğimiz sektörlerde faaliyetler gösterip bu sektörleri birbirleri ile harmanlamaktır. Slipyme, şuanda yazılım, tasarım ve oyun sektöründe faaliyet göstermektedir.",
};

export const CONFIG = {
  EMAIL: `contact@${SEO.domain}`,
  GA_TRACKING_ID: "G-14SS6XWKC1",
  DEV: process.env.NODE_ENV != "production",
  SEO,
  CONTACT,
};
