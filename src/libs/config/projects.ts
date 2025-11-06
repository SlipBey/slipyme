export interface Project {
  langKey: string;
  image: string;
  banner?: string;
  liveUrl?: string;
  githubUrl?: string;
  types?: "software"[];
  sectors?: string[];
  platforms?: string[];
  active: boolean;
  detailsKey?: string;
  gallery?: string[];
}

export type ProjectFilterKind = "filter" | "link" | "action";

export type ProjectFilterItem = {
  kind: ProjectFilterKind;
  key: string;
  value?: "all" | "software" | "design";
  href?: string;
};

export type ProjectTag = "software" | "design" | "game" | "social";

export const TAG_STYLES: Record<
  ProjectTag,
  {
    cap: string;
    pill: string;
    badge: string;
    chip: string;
    bar?: string;
  }
> = {
  software: {
    cap: "bg-gradient-to-r from-sky-700 via-sky-600 to-sky-500",
    pill: "ring-sky-500/40 text-sky-700 dark:text-sky-300 bg-sky-500/10",
    badge:
      "bg-sky-600/15 text-sky-600 dark:text-sky-300 ring-1 ring-sky-600/30",
    chip: "bg-sky-600 text-white",
    bar: "bg-sky-500",
  },
  design: {
    cap: "bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300",
    pill: "ring-amber-500/40 text-amber-700 dark:text-amber-300 bg-amber-400/10",
    badge:
      "bg-amber-500/15 text-amber-600 dark:text-amber-300 ring-1 ring-amber-600/30",
    chip: "bg-amber-500 text-black",
    bar: "bg-amber-400",
  },
  game: {
    cap: "bg-gradient-to-r from-violet-600 via-violet-500 to-fuchsia-500",
    pill: "ring-violet-500/40 text-violet-200 bg-violet-500/15",
    badge: "bg-violet-500/15 text-violet-300 ring-1 ring-violet-600/30",
    chip: "bg-violet-600 text-white",
    bar: "bg-violet-500",
  },
  social: {
    cap: "bg-gradient-to-r from-indigo-800 via-indigo-700 to-purple-700",
    pill: "ring-indigo-600/40 text-indigo-200 bg-indigo-700/15",
    badge: "bg-indigo-700/15 text-indigo-200 ring-1 ring-indigo-700/40",
    chip: "bg-indigo-700 text-white",
    bar: "bg-indigo-600",
  },
};

export const PROJECTS: Project[] = [
  {
    langKey: "projects.items.design",
    image: "/resimler/logolar/design.png",
    liveUrl: "https://design.slipyme.com",
    githubUrl: "https://github.com/SlipBey/slipyme-design-webpage",
    sectors: ["Tasarım"],
    platforms: ["Web"],
    active: true,
    gallery: [
      "/resimler/projects/design1.png",
      "/resimler/projects/design2.png",
      "/resimler/projects/design3.png",
    ],
  },
  {
    langKey: "projects.items.music",
    image: "/resimler/logolar/music.png",
    liveUrl: "https://music.slipyme.com",
    sectors: ["Müzik"],
    platforms: ["Web"],
    active: true,
    gallery: ["/resimler/projects/music1.png", "/resimler/projects/music2.png"],
  },
  {
    langKey: "projects.items.game",
    image: "/resimler/logolar/game.png",
    liveUrl: "https://game.slipyme.com",
    sectors: ["Müzik"],
    platforms: ["Web"],
    active: true,
    gallery: ["/resimler/projects/game.png"],
  },
  {
    langKey: "projects.items.blog",
    image: "/resimler/logo.png",
    sectors: ["Verimlilik"],
    platforms: ["Web"],
    active: false,
    gallery: [
      "/resimler/projects/blog1.png",
      "/resimler/projects/blog2.png",
      "/resimler/projects/blog3.png",
      "/resimler/projects/blog4.png",
      "/resimler/projects/blog5.png",
      "/resimler/projects/blog6.png",
      "/resimler/projects/blog7.png",
      "/resimler/projects/blog8.png",
      "/resimler/projects/blog9.png",
      "/resimler/projects/blog10.png",
    ],
  },
  {
    langKey: "projects.items.todolist",
    image: "/resimler/logolar/todolist.png",
    sectors: ["Verimlilik"],
    platforms: ["Web"],
    active: false,
    gallery: [
      "/resimler/projects/todolist1.png",
      "/resimler/projects/todolist2.png",
      "/resimler/projects/todolist3.png",
      "/resimler/projects/todolist4.png",
    ],
  },
  {
    langKey: "projects.items.deprem",
    image: "/resimler/logolar/deprem.png",
    sectors: ["Sosyal Sorumluluk"],
    platforms: ["Web"],
    active: false,
    gallery: [
      "/resimler/projects/deprem1.png",
      "/resimler/projects/deprem2.png",
      "/resimler/projects/deprem3.png",
      "/resimler/projects/deprem4.png",
    ],
  },
  {
    langKey: "projects.items.code",
    image: "/resimler/logolar/code.png",
    platforms: ["Web"],
    active: false,
    gallery: ["/resimler/bannerlar/banner.png"],
  },
  {
    langKey: "projects.items.botlist",
    image: "/resimler/logolar/botlist.png",
    liveUrl: "https://botlist.slipyme.com",
    sectors: ["Topluluk"],
    platforms: ["Web"],
    active: false,
    gallery: [
      "/resimler/projects/botlist1.png",
      "/resimler/projects/botlist2.png",
      "/resimler/projects/botlist3.png",
      "/resimler/projects/botlist4.png",
    ],
  },
];

export const PROJECT_FILTERS: ProjectFilterItem[] = [
  { kind: "filter", key: "projectsPage.types.all", value: "all" },
  { kind: "filter", key: "projectsPage.types.software", value: "software" },
  { kind: "filter", key: "projectsPage.types.design", value: "design" },
  {
    kind: "link",
    key: "projectsPage.types.socialResponsibility",
    href: "/social-responsibility",
  },
  { kind: "action", key: "projectsPage.types.game" },
  { kind: "link", key: "projectsPage.types.socialMedia", href: "/social" },
];
