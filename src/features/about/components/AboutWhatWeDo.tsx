"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/libs/animations";
import { useI18n } from "@/lib/i18n";
import { PROJECTS } from "@/libs/config/projects";
import ProjectsGrid from "@/components/Projects/Grid";

export default function AboutWhatWeDo() {
  const { t } = useI18n();

  return (
    <AnimatedSection id="what-we-do" className="py-8 md:py-14">
      <motion.section
        variants={fadeIn}
        className="overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/10 bg-white dark:bg-zinc-900 shadow-lg"
      >
        <div className="h-1 w-full bg-linear-to-r from-sky-700 via-sky-600 to-sky-500" />
        <div className="px-5 sm:px-8 md:px-10 py-8 md:py-10">
          <motion.h2
            className="mb-2 text-center text-2xl font-bold"
            variants={fadeInUp}
          >
            {t("whatWeDoTitle")}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto max-w-3xl text-center text-sm md:text-base text-slate-700 dark:text-slate-300 mb-6"
          >
            {t("whatWeDoDesc")}
          </motion.p>
          <ProjectsGrid projects={PROJECTS} />
        </div>
      </motion.section>
    </AnimatedSection>
  );
}
