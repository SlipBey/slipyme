import { FiShield, FiHeart, FiSun } from "react-icons/fi";

import { PiLeaf } from "react-icons/pi";

export const PILLARS = [
  { key: "carbon", icon: PiLeaf },
  { key: "animals", icon: FiHeart },
  { key: "climate", icon: FiSun },
  { key: "safety", icon: FiShield },
];

export type CsrStatus = "live" | "inProgress" | "soon";

export const INITIATIVES: {
  key: string;
  status: CsrStatus;
  image: string;
  tags: string[];
}[] = [
  {
    key: "ofisKarbonOlcum",
    status: "soon",
    image: "/resimler/csr/carbon.png",
    tags: ["carbon", "report"],
  },
  {
    key: "afetYonetim",
    status: "soon",
    image: "/resimler/csr/disaster.png",
    tags: ["disaster", "preparedness"],
  },
  {
    key: "hayvanBakimSim",
    status: "soon",
    image: "/resimler/csr/animals.png",
    tags: ["animals", "education"],
  },
  {
    key: "yesilLojistik",
    status: "soon",
    image: "/resimler/csr/greenlog.png",
    tags: ["carbon", "logistics"],
  },
  {
    key: "sogukZincirMama",
    status: "soon",
    image: "/resimler/csr/foodchain.png",
    tags: ["animals", "supply"],
  },
];

export const FAQ_KEYS = ["bagis", "rapor", "gonullu"] as const;
