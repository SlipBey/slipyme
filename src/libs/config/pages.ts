export const PAGES = [
  {
    text: "general.about",
    url: "/about",
  },
  {
    text: "general.projects",
    url: "/projects",
  },
  {
    text: "general.contact",
    url: "/contact",
  },
];

export const SHORT_LINKS = [
  { name: "footer.links.career", href: "/career" },
  { name: "footer.links.media", href: "/media" },
  { name: "footer.links.sr", href: "/social-responsibility" },
  { name: "general.social", href: "/social" },
];

export const FOOTER_PAGES = [
  {
    title: "footer.legal.corporate",
    pages: SHORT_LINKS,
  },
  {
    title: "footer.legal.policies",
    pages: [
      { name: "footer.links.kvkk", href: "/policies/kvkk" },
      { name: "footer.links.tos", href: "/policies/tos" },
      { name: "footer.links.privacy", href: "/policies/privacy" },
      { name: "footer.links.cookies", href: "/policies/privacy" },
    ],
  },
];
