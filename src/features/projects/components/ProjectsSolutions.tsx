"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { fadeIn, fadeInUp, stagger } from "@/lib/motion";
import { SOLUTIONS } from "../lib/solutions";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function ProjectsSolutions() {
  const { t } = useI18n();

  return (
    <Section id="solutions" className="py-8 md:py-12" variants={stagger}>
      <motion.h2
        variants={fadeInUp}
        className="typo-section-title text-center mb-2"
      >
        {t("projectsPage.solutions.title")}
      </motion.h2>
      <motion.p
        variants={fadeInUp}
        className="typo-body text-center max-w-2xl mx-auto mb-8"
      >
        {t("projectsPage.solutions.subtitle")}
      </motion.p>

      <motion.div
        variants={fadeIn}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
      >
        {SOLUTIONS.map(({ key, img }, i) => (
          <motion.div
            key={key}
            variants={fadeInUp}
            transition={{ delay: 0.03 * i }}
            className={cn(
              "group relative rounded-2xl p-5 glass",
              "ring-1 ring-black/5 dark:ring-white/10",
              "transition-all duration-200",
              "hover:-translate-y-1 hover:ring-sky-500/40 dark:hover:ring-sky-400/40",
              "dark:hover:shadow-[0_0_24px_-6px_rgba(56,189,248,0.4)]",
            )}
          >
            <div
              aria-hidden
              className="absolute inset-x-4 top-0 h-1 rounded-b-full
                         bg-linear-to-r from-sky-600 via-sky-500 to-cyan-500"
            />
            <div className="flex items-center gap-3">
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl
                           bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300
                           ring-1 ring-sky-500/20"
              >
                <Image
                  src={img}
                  alt=""
                  aria-hidden
                  width={28}
                  height={28}
                  loading="lazy"
                  sizes="28px"
                  className="w-7 h-7"
                />
              </div>
              <h3 className="text-[15px] md:text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {t(`solutionsPage.${key}.title`)}
              </h3>
            </div>
            <p className="mt-2 text-[13px] leading-6 text-zinc-600 dark:text-zinc-400">
              {t(`solutionsPage.${key}.desc`)}
            </p>
            <div
              aria-hidden
              className="mt-4 h-0.5 w-0 bg-linear-to-r from-sky-500 to-cyan-500
                         rounded-full transition-all duration-300 group-hover:w-full"
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
