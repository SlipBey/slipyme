export type ProjectStatus = "production" | "beta" | "rd" | "archived";

export type ProjectType = "software" | "design" | "game" | "social";

export interface Project {
  langKey: string;
  image: string;
  banner?: string;
  liveUrl?: string;
  githubUrl?: string;
  type: ProjectType;
  sectors?: string[];
  platforms?: string[];
  status: ProjectStatus;
  gallery?: string[];
}

export type ProjectFilterKind = "filter" | "link" | "action";

export type ProjectFilterItem = {
  kind: ProjectFilterKind;
  key: string;
  value?: "all" | "software" | "design";
  href?: string;
};

export const TYPE_STYLES: Record<
  ProjectType,
  { cap: string; pill: string; badge: string; chip: string; bar: string }
> = {
  software: {
    cap: "bg-gradient-to-r from-sky-700 via-sky-600 to-sky-500",
    pill: "ring-sky-500/40 text-sky-700 dark:text-sky-300 bg-sky-500/10",
    badge:
      "bg-sky-600/15 text-sky-700 dark:text-sky-300 ring-1 ring-sky-600/30",
    chip: "bg-sky-600 text-white",
    bar: "bg-sky-500",
  },
  design: {
    cap: "bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300",
    pill: "ring-amber-500/40 text-amber-700 dark:text-amber-300 bg-amber-400/10",
    badge:
      "bg-amber-500/15 text-amber-700 dark:text-amber-300 ring-1 ring-amber-600/30",
    chip: "bg-amber-500 text-black",
    bar: "bg-amber-400",
  },
  game: {
    cap: "bg-gradient-to-r from-violet-600 via-violet-500 to-fuchsia-500",
    pill: "ring-violet-500/40 text-violet-700 dark:text-violet-300 bg-violet-500/10",
    badge:
      "bg-violet-500/15 text-violet-700 dark:text-violet-300 ring-1 ring-violet-600/30",
    chip: "bg-violet-600 text-white",
    bar: "bg-violet-500",
  },
  social: {
    cap: "bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-600",
    pill: "ring-indigo-500/40 text-indigo-700 dark:text-indigo-300 bg-indigo-500/10",
    badge:
      "bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 ring-1 ring-indigo-600/30",
    chip: "bg-indigo-600 text-white",
    bar: "bg-indigo-500",
  },
};

export const STATUS_STYLES: Record<
  ProjectStatus,
  { dot: string; pill: string; labelKey: string }
> = {
  production: {
    dot: "bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)]",
    pill: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-500/30",
    labelKey: "projects.status.production",
  },
  beta: {
    dot: "bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.5)]",
    pill: "bg-amber-500/10 text-amber-700 dark:text-amber-300 ring-1 ring-amber-500/30",
    labelKey: "projects.status.beta",
  },
  rd: {
    dot: "bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.5)]",
    pill: "bg-violet-500/10 text-violet-700 dark:text-violet-300 ring-1 ring-violet-500/30",
    labelKey: "projects.status.rd",
  },
  archived: {
    dot: "bg-zinc-400",
    pill: "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 ring-1 ring-zinc-500/30",
    labelKey: "projects.status.archived",
  },
};

export const PROJECTS: Project[] = [
  {
    langKey: "projects.items.design",
    image: "/resimler/logolar/design.png",
    liveUrl: "https://design.slipyme.com",
    githubUrl: "https://github.com/SlipBey/slipyme-design-webpage",
    sectors: ["Design"],
    platforms: ["Web"],
    type: "design",
    status: "production",
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
    sectors: ["Media"],
    platforms: ["Web"],
    type: "software",
    status: "beta",
    gallery: ["/resimler/projects/music1.png", "/resimler/projects/music2.png"],
  },
  {
    langKey: "projects.items.game",
    image: "/resimler/logolar/game.png",
    liveUrl: "https://game.slipyme.com",
    sectors: ["Gaming"],
    platforms: ["Web"],
    type: "game",
    status: "rd",
    gallery: ["/resimler/projects/game.png"],
  },
  {
    langKey: "projects.items.blog",
    image: "/resimler/logo.png",
    sectors: ["Productivity"],
    platforms: ["Web"],
    type: "software",
    status: "archived",
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
    sectors: ["Productivity"],
    platforms: ["Web"],
    type: "software",
    status: "archived",
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
    sectors: ["CSR"],
    platforms: ["Web"],
    type: "software",
    status: "archived",
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
    type: "software",
    status: "archived",
    gallery: ["/resimler/bannerlar/banner.png"],
  },
  {
    langKey: "projects.items.botlist",
    image: "/resimler/logolar/botlist.png",
    liveUrl: "https://botlist.slipyme.com",
    sectors: ["Community"],
    platforms: ["Web"],
    type: "software",
    status: "archived",
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
