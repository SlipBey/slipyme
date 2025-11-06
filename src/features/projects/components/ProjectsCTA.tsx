"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/libs/animations";
import { Link } from "@/components/Globals/Link";
import { useI18n } from "@/lib/i18n";

export default function ProjectsCTA() {
  const { t } = useI18n();

  return (
    <AnimatedSection id="projects-cta" className="py-8 sm:py-12">
      <motion.div
        variants={fadeIn}
        className="max-w-5xl mx-auto rounded-2xl
                   bg-linear-to-br from-sky-50 via-white to-blue-50
                   dark:from-[#0e1216] dark:via-[#0f1318] dark:to-[#0e1216]
                   ring-1 ring-black/10 dark:ring-white/10 p-6 sm:p-8 text-center shadow-lg"
      >
        <motion.h3
          variants={fadeInUp}
          className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100"
        >
          {t("projectsPage.cta.title")}
        </motion.h3>

        <motion.p
          variants={fadeInUp}
          className="mt-1 text-sm md:text-base text-slate-700 dark:text-slate-300"
        >
          {t("projectsPage.cta.subtitle")}
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-5 flex justify-center">
          <Link href="/contact" className="group">
            <span
              className="inline-flex items-center gap-2 rounded-xl
                              bg-blue-600 text-white px-5 py-2.5 text-sm font-semibold
                              ring-1 ring-blue-500/60 shadow-md
                              transition-transform group-hover:-translate-y-0.5 hover:bg-blue-700"
            >
              {t("projectsPage.cta.button")}
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.293 3.293a1 1 0 011.414 0L18 9.586l-6.293 6.293a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
}
