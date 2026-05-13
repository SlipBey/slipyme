"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ProjectsGrid } from "@/features/projects/components/ProjectsGrid";
import { PROJECTS } from "@/config/projects";
import { fadeIn, fadeInUp, stagger } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";

export function AboutWhatWeDo() {
  const { t } = useI18n();

  return (
    <Section id="what-we-do" className="py-8 md:py-14" variants={stagger}>
      <motion.section
        variants={fadeIn}
        className="overflow-hidden rounded-3xl ring-1 ring-black/5 dark:ring-white/10
                   glass-strong shadow-xl"
      >
        <div className="h-1 w-full bg-linear-to-r from-sky-700 via-sky-500 to-cyan-500" />
        <div className="px-5 sm:px-8 md:px-10 py-8 md:py-10">
          <motion.h2
            variants={fadeInUp}
            className="typo-section-title text-center mb-2"
          >
            {t("whatWeDoTitle")}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="typo-body text-center max-w-2xl mx-auto mb-8"
          >
            {t("whatWeDoDesc")}
          </motion.p>
          <ProjectsGrid projects={PROJECTS} />
        </div>
      </motion.section>
    </Section>
  );
}
