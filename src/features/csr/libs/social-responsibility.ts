import { FaLeaf } from "react-icons/fa";
import { FiHeart, FiShield, FiSun } from "react-icons/fi";

export const PILLARS = [
  { key: "carbon", icon: FaLeaf },
  { key: "animals", icon: FiHeart },
  { key: "climate", icon: FiSun },
  { key: "safety", icon: FiShield },
];

export const INITIATIVES = [
  {
    key: "ofisKarbonOlcum",
    status: "yakinda",
    image: "/resimler/csr/carbon.png",
    tags: ["karbon", "rapor"],
  },
  {
    key: "afetYonetim",
    status: "yakinda",
    image: "/resimler/csr/disaster.png",
    tags: ["afet", "hazırlık"],
  },
  {
    key: "hayvanBakimSim",
    status: "yakinda",
    image: "/resimler/csr/animals.png",
    tags: ["hayvan", "eğitim"],
  },
  {
    key: "yesilLojistik",
    status: "yakinda",
    image: "/resimler/csr/greenlog.png",
    tags: ["karbon", "lojistik"],
  },
  {
    key: "sogukZincirMama",
    status: "yakinda",
    image: "/resimler/csr/foodchain.png",
    tags: ["hayvan", "tedarik"],
  },
];

export const FAQ_KEYS = ["bagis", "rapor", "gonullu"];
