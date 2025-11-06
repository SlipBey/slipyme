"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/libs/animations";
import { Link } from "@/components/Globals/Link";
import { Button } from "@/components/Globals/Button";
import ProjectsSection from "./ProjectsSection";
import { useI18n } from "@/lib/i18n";

export default function ProjectsBlock() {
  const { t } = useI18n();

  return (
    <AnimatedSection id="projects" className="py-5 sm:py-12" mode="view">
      <motion.h2
        variants={fadeInUp}
        className="mb-4 text-center typo-section-title"
      >
        {t("general.projects")}
      </motion.h2>

      <motion.div variants={fadeIn} className="max-w-7xl mx-auto">
        <ProjectsSection />
      </motion.div>

      <div className="mt-6 text-center">
        <Link href="/projects">
          <Button>{t("home.projectMore")}</Button>
        </Link>
      </div>
    </AnimatedSection>
  );
}
