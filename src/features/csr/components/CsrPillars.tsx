"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/libs/animations";
import { useI18n } from "@/lib/i18n";
import { PILLARS } from "../libs/social-responsibility";

export default function CsrPillars() {
  const { t } = useI18n();

  return (
    <AnimatedSection id="csr-pillars" className="py-5 sm:py-12" mode="view">
      <motion.div variants={fadeIn}>
        <motion.h2 className="mb-5 text-xl font-bold" variants={fadeInUp}>
          {t("csr.pillars.title")}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={fadeIn}
        >
          {PILLARS.map((p) => (
            <motion.div
              key={p.key}
              className="rounded-2xl bg-white dark:bg-[#16181d] p-5 ring-1 ring-black/10 dark:ring-white/10 transition hover:-translate-y-1 hover:ring-sky-400/60"
              variants={fadeInUp}
            >
              <div className="text-sky-600 dark:text-sky-300">
                <p.icon className="text-xl" />
              </div>
              <div className="mt-2 font-semibold">
                {t(`csr.dict.pillars.${p.key}.title`)}
              </div>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {t(`csr.dict.pillars.${p.key}.desc`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
}
