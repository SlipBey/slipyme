"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/libs/animations";
import { useI18n } from "@/lib/i18n";
import { DESIGN_SOLUTION_ITEMS } from "../libs/design";

function Badge({ text, gradient }: { text: string; gradient: string }) {
  return (
    <div
      className={`w-24 h-24 mx-auto rounded-2xl bg-linear-to-br ${gradient} p-3 shadow-lg`}
    >
      <div className="w-full h-full rounded-xl bg-white/95 flex items-center justify-center">
        <span className="text-3xl font-extrabold tracking-tight">{text}</span>
      </div>
    </div>
  );
}

export default function DesignSolutions() {
  const { t } = useI18n();

  return (
    <AnimatedSection id="design-solutions" className="py-6 sm:py-12">
      <motion.div className="max-w-7xl mx-auto" variants={fadeIn}>
        <motion.h2
          className="text-center typo-section-title"
          variants={fadeInUp}
        >
          {t("design.solutions.title")}
        </motion.h2>
        <motion.p
          className="text-center mx-auto max-w-3xl typo-body mt-1 mb-6"
          variants={fadeInUp}
        >
          {t("design.solutions.subtitle")}
        </motion.p>

        <motion.div
          className="grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 md:grid-cols-3"
          variants={fadeIn}
        >
          {DESIGN_SOLUTION_ITEMS.map((item) => (
            <div
              key={item.key}
              className="rounded-2xl bg-white/90 dark:bg-[#16181d] ring-1 ring-black/10 dark:ring-white/10 p-6 text-center
                         shadow-sm transition hover:-translate-y-1 hover:ring-sky-500/40"
            >
              <Badge text={item.badge} gradient={item.gradient} />
              <div className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
                {t(item.titleKey)}
              </div>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {t(item.descKey)}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
}
