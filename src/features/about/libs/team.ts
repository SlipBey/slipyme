import { IconType } from "react-icons";
import { FaPinterest } from "react-icons/fa";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiYoutube,
} from "react-icons/fi";

export type RoleTag = "software" | "design" | "social" | "other";

export type SocialKey =
  | "github"
  | "linkedin"
  | "pinterest"
  | "youtube"
  | "instagram"
  | "mail";

export const ICONS: Record<SocialKey, IconType> = {
  github: FiGithub,
  linkedin: FiLinkedin,
  pinterest: FaPinterest,
  youtube: FiYoutube,
  instagram: FiInstagram,
  mail: FiMail,
};

export const ROLE_CAPS: Record<RoleTag, number> = {
  software: 10,
  design: 2,
  social: 5,
  other: 10,
};

export const ROLE_STYLES: Record<
  RoleTag,
  {
    cap: string;
    bar: string;
    pill: string;
  }
> = {
  software: {
    cap: "bg-gradient-to-r from-sky-700 via-sky-600 to-sky-500",
    bar: "bg-sky-500",
    pill: "bg-sky-500/10 text-sky-500 ring-sky-500/30",
  },
  design: {
    cap: "bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-500",
    bar: "bg-pink-500",
    pill: "bg-pink-500/10 text-pink-500 ring-pink-500/30",
  },
  social: {
    cap: "bg-gradient-to-r from-emerald-600 via-green-600 to-teal-500",
    bar: "bg-emerald-500",
    pill: "bg-emerald-500/10 text-emerald-500 ring-emerald-500/30",
  },
  other: {
    cap: "bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500",
    bar: "bg-indigo-500",
    pill: "bg-indigo-500/10 text-indigo-500 ring-indigo-500/30",
  },
};

export type Member = {
  name: string;
  nick: string;
  roleTag: RoleTag;
  img: string;
  bio?: string;
  links?: Partial<Record<SocialKey, string>>;
};

export const MEMBERS: Member[] = [
  {
    name: "Berkant",
    nick: "@SlipBey",
    roleTag: "software",
    img: "/resimler/team/male.png",
    bio: "Founder of Slipyme Company & Full-Stack Developer",
    links: {
      github: "https://slip.slipyme.com/github",
      linkedin: "https://slip.slipyme.com/linkedin",
      youtube: "https://slip.slipyme.com/youtube",
      instagram: "https://slip.slipyme.com/instagram",
      mail: "mailto:berkant@slipyme.com",
    },
  },
  {
    name: "Ahmet Eren",
    nick: "@ahmeterenn",
    roleTag: "design",
    img: "/resimler/team/male.png",
    bio: "Designer of Slipyme Company & General Manage",
    links: { mail: "mailto:ahmeteren@slipyme.com" },
  },
  {
    name: "Berkay",
    nick: "@ber.kay",
    roleTag: "software",
    img: "/resimler/team/male.png",
    bio: "Frontend Developer & General Manager",
    links: {
      github: "https://github.com/berkfelix",
      linkedin: "https://www.linkedin.com/in/berkay-çay/",
      instagram: "https://www.instagram.com/berkaycay0/",
      mail: "mailto:berkay@slipyme.com",
    },
  },
  {
    name: "Burhan",
    nick: "@burhwn.",
    roleTag: "other",
    img: "/resimler/team/male.png",
    bio: "Electronics Expert & Team Manager",
    links: {
      instagram: "https://www.instagram.com/burhnn20/",
      mail: "mailto:burhan@slipyme.com",
    },
  },
  {
    name: "Berkcan",
    nick: "@berkchwn",
    roleTag: "other",
    img: "/resimler/team/male.png",
    bio: "Electronics Expert & Support Team",
    links: {
      linkedin:
        "https://www.linkedin.com/in/berkcan-eren-%C3%B6zerg%C3%BCn-a6b865257/",
      instagram: "https://www.instagram.com/berkcanozergun/",
      mail: "mailto:berkcan@slipyme.com",
    },
  },
  {
    name: "Yiğit",
    nick: "@fenix1508",
    roleTag: "social",
    img: "/resimler/team/male.png",
    bio: "Social Media Manager & General Manager",
    links: {
      github: "https://github.com/yigitgencer",
      youtube: "https://youtube.com/@yigitgencertech",
      instagram: "https://www.instagram.com/yigitgencertech/",
      mail: "mailto:yigit@slipyme.com",
    },
  },
  {
    name: "Muhammet",
    nick: "@muhammetsoil",
    roleTag: "social",
    img: "/resimler/team/male.png",
    bio: "Social Media Consultant",
    links: {
      instagram: "https://www.instagram.com/muhammetsoil/",
      mail: "mailto:muhammet@slipyme.com",
    },
  },
  {
    name: "Hira",
    nick: "@davsik",
    roleTag: "design",
    img: "/resimler/team/female.png",
    bio: "AI/UI Designer & Team Manager",
    links: {
      instagram: "https://www.instagram.com/davsik_09",
      pinterest: "https://tr.pinterest.com/gulsumkara895",
      mail: "mailto:hira@slipyme.com",
    },
  },
  {
    name: "Aylin",
    nick: "@cokelek",
    roleTag: "social",
    img: "/resimler/team/female.png",
    bio: "Content Creator for Slipyme Company",
  },
  {
    name: "Zeki",
    nick: "@mohikan",
    roleTag: "software",
    img: "/resimler/team/male.png",
    bio: "Full-Stack Software Developer",
    links: {
      linkedin: "https://www.linkedin.com/in/zeki-efe-ipekli-212abb329/",
      instagram: "https://www.instagram.com/zeki.ipekli/",
      mail: "mailto:zeki@slipyme.com",
    },
  },
  {
    name: "Ülkü",
    nick: "@papatya",
    roleTag: "other",
    img: "/resimler/team/female.png",
    bio: "Office Manager",
    links: {
      linkedin:
        "https://www.linkedin.com/in/%C3%BClk%C3%BC-%C5%9Fevval-598149395/",
      instagram: "https://www.instagram.com/ulkuzcn_/",
      mail: "mailto:ulku@slipyme.com",
    },
  },
  {
    name: "Gözde",
    nick: "@lucrectiaa",
    roleTag: "other",
    img: "/resimler/team/female.png",
    bio: "Legal Advisor",
    links: {
      instagram: "https://www.instagram.com/gozde_zng61/",
      mail: "mailto:gozde@slipyme.com",
    },
  },
  {
    name: "Göktuğ Melih",
    nick: "@goktugmelih",
    roleTag: "other",
    img: "/resimler/team/male.png",
    bio: "Support Team",
    links: {
      instagram: "https://www.instagram.com/goktgmelih/",
      mail: "mailto:goktug@slipyme.com",
    },
  },
  {
    name: "Selman",
    nick: "@selman3455",
    roleTag: "software",
    img: "/resimler/team/male.png",
    bio: "Manager of Slipygame & Frontend Developer",
    links: {
      github: "https://github.com/dursunselman",
      linkedin: "https://www.linkedin.com/in/selman-dursun-039628352/",
      instagram: "https://www.instagram.com/selman_dursun/",
      mail: "mailto:selman@slipyme.com",
    },
  },
  {
    name: "Utku",
    nick: "@utku_a",
    roleTag: "software",
    img: "/resimler/team/male.png",
    bio: "Backend Developer",
    links: {
      github: "https://github.com/utku10a",
      instagram: "https://www.instagram.com/utku.aydd",
      mail: "mailto:utku@slipyme.com",
    },
  },
  {
    name: "Alper",
    nick: "@.kwa",
    roleTag: "software",
    img: "/resimler/team/male.png",
    bio: "Backend Developer & Team Manager",
    links: {
      github: "https://github.com/kwa0x2",
      linkedin: "https://www.linkedin.com/in/alper-karakoyun-8b195921a/",
      instagram: "https://www.instagram.com/alper0x6/",
    },
  },
  {
    name: "Çağatay",
    nick: "@cagatayd",
    roleTag: "software",
    img: "/resimler/team/male.png",
    bio: "Full-Stack Developer",
    links: {
      github: "https://github.com/cagdu",
      linkedin: "https://www.linkedin.com/in/cagd/",
      instagram: "https://www.instagram.com/cagd0/",
    },
  },
];
