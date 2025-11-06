import { Variants } from "framer-motion";

const easeOut: [number, number, number, number] = [0, 0, 0.58, 1];

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, ease: easeOut } },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};

export const bgFade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.2, ease: easeOut } },
};

export const floatZoom: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 1.6, ease: easeOut } },
};

export const softDropText: Variants = {
  hidden: { opacity: 0, y: -24 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: easeOut } },
};

export const waterlineAnim: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: easeOut, delay: 0.5 },
  },
};

export const groupStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

export const fadeInUpSm: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: easeOut } },
};

export const staggerTight: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};
