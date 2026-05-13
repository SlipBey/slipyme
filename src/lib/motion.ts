import type { Variants, Transition } from "framer-motion";

export const smoothEase: Transition["ease"] = [0.22, 1, 0.36, 1];
export const softEase: Transition["ease"] = [0.16, 1, 0.3, 1];

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.82, ease: smoothEase } },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.82, ease: smoothEase } },
};

export const fadeInUpSm: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.62, ease: smoothEase } },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.74, ease: smoothEase } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.955 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.68, ease: softEase },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

export const staggerLoose: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

export const float: Variants = {
  hidden: { y: 0 },
  show: {
    y: [0, -8, 0],
    transition: { duration: 5.8, repeat: Infinity, ease: "easeInOut" },
  },
};

export const defaultViewport = {
  once: true,
  amount: 0.12,
  margin: "-12% 0px",
} as const;
