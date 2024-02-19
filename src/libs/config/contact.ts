import { FaLocationDot } from "react-icons/fa6";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiYoutube,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";

export const CONTACT = [
  {
    icon: FiPhone,
    title: "phone",
    text: "-",
  },
  {
    icon: FiMail,
    title: "mail",
    text: "contact@slipyme.com",
  },
  {
    icon: FaLocationDot,
    title: "adress",
    text: "Türkiye",
  },
];

export const SOCIAL = [
  {
    href: "/discord",
    icon: FaDiscord,
    alt: "Discord",
  },
  {
    href: "/github",
    icon: FiGithub,
    alt: "Github",
  },
  {
    href: "/linkedin",
    icon: FiLinkedin,
    alt: "LinkedIn",
  },
  {
    href: "/youtube",
    icon: FiYoutube,
    alt: "YouTube",
  },
  {
    href: "/instagram",
    icon: FiInstagram,
    alt: "Instagram",
  },
];
