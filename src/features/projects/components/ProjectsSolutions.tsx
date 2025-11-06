"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/libs/animations";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { SOLUTIONS } from "../libs/solutions";

export default function ProjectsSolutions() {
  const { t } = useI18n();

  return (
    <AnimatedSection id="solutions" className="py-6 sm:py-10">
      <motion.div variants={fadeIn}>
        <motion.h2
          className="text-center typo-section-title mb-2"
          variants={fadeInUp}
        >
          {t("projectsPage.solutions.title")}
        </motion.h2>

        <motion.p
          className="mx-auto max-w-3xl text-center typo-body mb-6"
          variants={fadeInUp}
        >
          {t("projectsPage.solutions.subtitle")}
        </motion.p>

        <motion.div
          variants={fadeIn}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
        >
          {SOLUTIONS.map(({ key, img }, i) => (
            <motion.div
              key={key}
              variants={fadeInUp}
              transition={{ delay: 0.03 * i }}
              className="group relative rounded-2xl bg-white dark:bg-[#16181d]
                         ring-1 ring-black/10 dark:ring-white/10 p-5
                         shadow-sm hover:shadow-md hover:-translate-y-0.5
                         transition-[box-shadow,transform] duration-200"
            >
              <div className="absolute left-4 right-4 top-0 h-1 rounded-b-full bg-linear-to-r from-sky-600 via-sky-500 to-blue-500" />

              <div className="flex items-center gap-3">
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl
                             bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300
                             ring-1 ring-sky-500/20"
                >
                  <Image
                    src={img}
                    alt=""
                    aria-hidden="true"
                    width={28}
                    height={28}
                    loading="lazy"
                    sizes="28px"
                    className="w-7 h-7"
                  />
                </div>

                <div className="text-[15px] md:text-base font-semibold text-slate-900 dark:text-slate-100">
                  {t(`solutionsPage.${key}.title`)}
                </div>
              </div>

              <p className="mt-2 text-xs md:text-[13px] leading-6 text-slate-600 dark:text-slate-300">
                {t(`solutionsPage.${key}.desc`)}
              </p>

              <div className="mt-4 h-0.5 w-0 bg-linear-to-r from-sky-500 to-blue-600 rounded-full transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
}
