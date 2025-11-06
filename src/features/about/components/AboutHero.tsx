"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/libs/animations";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function AboutHero() {
  const { t } = useI18n();
  const aboutText = t("about").split(/\n\s*\n/);

  return (
    <AnimatedSection id="about-hero" className="py-8 md:py-14">
      <motion.div
        variants={fadeIn}
        className="relative overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/10
                   bg-linear-to-r from-sky-900/80 via-sky-800/80 to-sky-700/80
                   dark:from-[#0c1824] dark:via-[#0e1d2c] dark:to-[#0f2133]
                   shadow-xl px-6 sm:px-8 lg:px-12 py-8 md:py-12
                   flex flex-col md:flex-row items-center justify-between gap-8 text-white"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-400 via-sky-300 to-sky-200/90" />

        <div className="flex-1">
          <motion.h1
            variants={fadeInUp}
            className="typo-page-title text-white!"
          >
            {t("general.about")}
          </motion.h1>
          {aboutText.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeInUp}
              className="mt-2 typo-body text-white/90! max-w-3xl"
            >
              {p.trim()}
            </motion.p>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          className="shrink-0 select-none"
          whileHover={{ rotate: 3, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
        >
          <Image
            src="/resimler/penguen.png"
            alt=""
            aria-hidden="true"
            width={288}
            height={288}
            priority
            sizes="(min-width:1280px) 288px, (min-width:1024px) 256px, (min-width:640px) 224px, 176px"
            className="w-44 sm:w-56 lg:w-64 xl:w-72"
          />
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
}
