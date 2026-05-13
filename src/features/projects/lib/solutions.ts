export type SolutionKey =
  | "mobile"
  | "web"
  | "discord"
  | "erp"
  | "ecom"
  | "ai"
  | "cms"
  | "corp"
  | "seo";

export interface SolutionItem {
  key: SolutionKey;
  img: string;
}

export const SOLUTIONS: SolutionItem[] = [
  { key: "mobile", img: "/resimler/solutions/mobile.png" },
  { key: "web", img: "/resimler/solutions/web.png" },
  { key: "discord", img: "/resimler/solutions/discord.png" },
  { key: "erp", img: "/resimler/solutions/erp.png" },
  { key: "ecom", img: "/resimler/solutions/ecom.png" },
  { key: "ai", img: "/resimler/solutions/ai.png" },
  { key: "cms", img: "/resimler/solutions/cms.png" },
  { key: "corp", img: "/resimler/solutions/corp.png" },
  { key: "seo", img: "/resimler/solutions/seo.png" },
];
