"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/libs/animations";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";

const ITEMS = [
  {
    titleKey: "slides.software.title",
    textKey: "slides.software.text",
    image: "/resimler/cikartmalar/kod.png",
  },
  {
    titleKey: "slides.design.title",
    textKey: "slides.design.text",
    image: "/resimler/cikartmalar/tasarim.png",
  },
  {
    titleKey: "slides.game.title",
    textKey: "slides.game.text",
    image: "/resimler/cikartmalar/oyun.png",
  },
  {
    titleKey: "slides.social.title",
    textKey: "slides.social.text",
    image: "/resimler/cikartmalar/medya.png",
  },
] as const;

export default function AboutExpertise() {
  const { t } = useI18n();

  return (
    <AnimatedSection id="expertise" className="py-8 md:py-14">
      <motion.h2
        className="mb-2 text-center text-2xl md:text-3xl font-bold tracking-tight"
        variants={fadeInUp}
      >
        {t("expertiseTitle")}
      </motion.h2>

      <motion.p
        variants={fadeInUp}
        className="mx-auto max-w-3xl text-center text-sm md:text-base text-slate-700 dark:text-slate-300 mb-8"
      >
        {t("expertiseDesc")}
      </motion.p>

      <motion.div
        variants={fadeIn}
        role="list"
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {ITEMS.map((it, i) => (
          <motion.div
            key={it.titleKey}
            role="listitem"
            variants={fadeInUp}
            transition={{ delay: 0.04 * i }}
            className="group relative rounded-2xl bg-white dark:bg-zinc-900 ring-1 ring-black/5 dark:ring-white/10
                       p-5 flex flex-col gap-3 min-h-[142px] shadow-sm hover:shadow-md hover:-translate-y-0.5
                       transition-[box-shadow,transform] duration-200"
          >
            <div className="absolute left-4 right-4 top-0 h-1 rounded-b-full bg-linear-to-r from-sky-600 via-sky-500 to-blue-500" />
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300 ring-1 ring-sky-500/20">
              <Image
                src={it.image}
                alt={t(it.titleKey)}
                width={32}
                height={32}
                loading="lazy"
                sizes="32px"
                className="w-8 h-8"
              />
            </div>
            <div className="space-y-1">
              <div className="text-[15px] md:text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {t(it.titleKey)}
              </div>
              <p className="text-xs md:text-[13px] leading-6 text-slate-600 dark:text-slate-400 line-clamp-2">
                {t(it.textKey)}
              </p>
            </div>
            <div className="mt-auto h-0.5 w-0 bg-linear-to-r from-sky-500 to-blue-600 rounded-full transition-all duration-300 group-hover:w-full" />
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}
