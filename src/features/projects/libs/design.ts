export type DesignSolution = {
  key: "ps" | "ai" | "ae";
  titleKey: string;
  descKey: string;
  badge: string;
  gradient: string;
};

export const DESIGN_SOLUTION_ITEMS: DesignSolution[] = [
  {
    key: "ps",
    titleKey: "design.solutions.ps.title",
    descKey: "design.solutions.ps.desc",
    badge: "Ps",
    gradient: "from-blue-500 to-sky-500 text-sky-500",
  },
  {
    key: "ai",
    titleKey: "design.solutions.ai.title",
    descKey: "design.solutions.ai.desc",
    badge: "Ai",
    gradient: "from-orange-500 to-amber-500 text-amber-500",
  },
  {
    key: "ae",
    titleKey: "design.solutions.ae.title",
    descKey: "design.solutions.ae.desc",
    badge: "Ae",
    gradient: "from-fuchsia-500 to-purple-500 text-fuchsia-500",
  },
];

export const DESIGN_SHOWCASE_IMAGES: string[] = [
  "/resimler/ornek/slipyme-bina.png",
  "/resimler/ornek/slipyme-afis.png",
  "/resimler/logolar/testlogo.png",
  "/resimler/ornek/slipyme-talep.png",
  "/resimler/ornek/orneklogo.png",
  "/resimler/ornek/bayram-slipyme.png",
  "/resimler/ornek/slipyme-kandil.png",
  "/resimler/ornek/slipyme-ramazan.png",
  "/resimler/ornek/sutgunu.png",
  "/resimler/mockups/pano2.png",
  "/resimler/mockups/kariyer.png",
  "/resimler/mockups/slipyme_tisort_2.png",
];
