import { IconType } from "react-icons";
import { FaDiscord } from "react-icons/fa";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiYoutube,
} from "react-icons/fi";

export type SocialLink = {
  href: string;
  icon: IconType;
  label: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { href: "/discord", icon: FaDiscord, label: "Discord" },
  { href: "/github", icon: FiGithub, label: "GitHub" },
  { href: "/linkedin", icon: FiLinkedin, label: "LinkedIn" },
  { href: "/youtube", icon: FiYoutube, label: "YouTube" },
  { href: "/instagram", icon: FiInstagram, label: "Instagram" },
  { href: "mailto:contact@slipyme.com", icon: FiMail, label: "E-mail" },
];
