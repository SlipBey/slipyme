"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { fadeIn, fadeInUp, stagger } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";

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

export function AboutExpertise() {
  const { t } = useI18n();

  return (
    <Section id="expertise" className="py-8 md:py-14" variants={stagger}>
      <motion.h2
        variants={fadeInUp}
        className="typo-section-title text-center mb-2"
      >
        {t("expertiseTitle")}
      </motion.h2>
      <motion.p
        variants={fadeInUp}
        className="typo-body text-center max-w-2xl mx-auto mb-8"
      >
        {t("expertiseDesc")}
      </motion.p>

      <motion.div
        variants={fadeIn}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
      >
        {ITEMS.map((it, i) => (
          <motion.div
            key={it.titleKey}
            variants={fadeInUp}
            transition={{ delay: 0.04 * i }}
            className="group relative rounded-2xl glass p-5 flex flex-col gap-3
                       ring-1 ring-black/5 dark:ring-white/10
                       transition-all duration-200
                       hover:-translate-y-1 hover:ring-sky-500/40 dark:hover:ring-sky-400/40
                       dark:hover:shadow-[0_0_24px_-6px_rgba(56,189,248,0.4)]"
          >
            <div
              aria-hidden
              className="absolute inset-x-4 top-0 h-1 rounded-b-full
                         bg-linear-to-r from-sky-600 via-sky-500 to-cyan-500"
            />
            <div
              className="inline-flex items-center justify-center w-11 h-11 rounded-xl
                         bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300
                         ring-1 ring-sky-500/20"
            >
              <Image
                src={it.image}
                alt=""
                width={32}
                height={32}
                loading="lazy"
                sizes="32px"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-[15px] md:text-base font-semibold text-zinc-900 dark:text-zinc-50">
              {t(it.titleKey)}
            </h3>
            <p className="text-[13px] leading-6 text-zinc-600 dark:text-zinc-400 line-clamp-3">
              {t(it.textKey)}
            </p>
            <div
              aria-hidden
              className="mt-auto h-0.5 w-0 bg-linear-to-r from-sky-500 to-cyan-500
                         rounded-full transition-all duration-300 group-hover:w-full"
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
