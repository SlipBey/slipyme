"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { PenguMascot } from "@/components/ui/PenguMascot";
import { fadeIn, fadeInUp, stagger } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";

export function AboutHero() {
  const { t } = useI18n();
  const paragraphs = t("about")
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <Section id="about-hero" className="py-8 md:py-14" variants={stagger}>
      <motion.div
        variants={fadeIn}
        className="relative overflow-hidden rounded-3xl ring-1 ring-white/15 shadow-2xl
                   bg-linear-to-br from-sky-700 via-sky-600 to-cyan-500
                   dark:from-[#0a1929] dark:via-[#0c2236] dark:to-[#0a2c44]
                   px-6 sm:px-10 lg:px-14 py-10 md:py-14
                   flex flex-col md:flex-row items-center justify-between gap-8 text-white"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-32 h-80 w-80 rounded-full
                     bg-white/15 blur-3xl"
        />

        <div className="flex-1 relative">
          <motion.span
            variants={fadeInUp}
            className="inline-block typo-eyebrow text-white/80!"
          >
            {t("home.eyebrow")}
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="typo-display text-3xl md:text-4xl lg:text-5xl text-white! mt-3"
          >
            {t("general.about")}
          </motion.h1>

          <div className="mt-4 space-y-3 max-w-3xl">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeInUp}
                className="text-white/85 text-sm md:text-base leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        <motion.div variants={fadeInUp} className="shrink-0 select-none">
          <PenguMascot size={240} animated priority />
        </motion.div>
      </motion.div>
    </Section>
  );
}
