import { IconType } from "react-icons";
import { FiBriefcase, FiLayers, FiMessageSquare } from "react-icons/fi";

export type NavItem = {
  text: string;
  href: string;
  icon?: IconType | undefined;
};

export const PRIMARY_NAV: NavItem[] = [
  { text: "general.about", href: "/about", icon: FiBriefcase },
  { text: "general.projects", href: "/projects", icon: FiLayers },
  { text: "general.contact", href: "/contact", icon: FiMessageSquare },
];

export const SECONDARY_NAV: NavItem[] = [
  { text: "footer.links.carrier", href: "/carrier" },
  { text: "footer.links.media", href: "/media" },
  { text: "footer.links.sr", href: "/social-responsibility" },
  { text: "general.social", href: "/social" },
  { text: "general.music", href: "/music" },
];

export type FooterGroup = {
  title: string;
  items: { label: string; href: string }[];
};

export const FOOTER_GROUPS: FooterGroup[] = [
  {
    title: "footer.legal.corporate",
    items: [
      { label: "footer.links.carrier", href: "/carrier" },
      { label: "footer.links.media", href: "/media" },
      { label: "footer.links.sr", href: "/social-responsibility" },
      { label: "general.social", href: "/social" },
      { label: "general.music", href: "/music" },
    ],
  },
  {
    title: "footer.legal.policies",
    items: [
      { label: "footer.links.kvkk", href: "/policies/kvkk" },
      { label: "footer.links.tos", href: "/policies/tos" },
      { label: "footer.links.privacy", href: "/policies/privacy" },
      { label: "footer.links.cookies", href: "/policies/cookies" },
    ],
  },
];
