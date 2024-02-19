import { PROJECTS } from "./projects";

export const PAGES = [
  {
    text: "about",
    url: "/#about",
  },
  {
    text: "projects",
    url: "/#projects",
  },
  // {
  //   text: "products",
  //   url: "/#products",
  // },
  {
    text: "contact",
    url: "/#contact",
  },
];

export const FOOTER = [
  [
    {
      href: "/mail",
      text: "contact@slipyme.com",
    },
  ],
  PROJECTS.slice(0, 3).map((project) => ({
    href: project.url.link ? project.url.link : project.url.github || "#",
    text: project.title,
  })),
  [
    {
      text: "Privacy Policy",
      href: "/privacy",
    },
    {
      text: "Yetkili Başvuru",
      href: "/carrier",
    },
    {
      text: "Tester Ol",
      href: "/carrier#tester",
    },
  ],
];
