"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Link } from "@/components/ui/Link";
import { fadeInUp, stagger } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";
import { FiArrowRight } from "react-icons/fi";

export function ProjectsCTA() {
  const { t } = useI18n();

  return (
    <Section id="projects-cta" className="py-10 md:py-14" variants={stagger}>
      <Card variant="glass" cap className="px-6 py-10 sm:px-10 text-center">
        <motion.h3 variants={fadeInUp} className="typo-section-title">
          {t("projectsPage.cta.title")}
        </motion.h3>
        <motion.p
          variants={fadeInUp}
          className="typo-body mt-2 max-w-2xl mx-auto"
        >
          {t("projectsPage.cta.subtitle")}
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-6 flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl
                       bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 text-sm font-semibold
                       dark:bg-sky-500 dark:hover:bg-sky-400
                       dark:shadow-[0_0_24px_-6px_rgba(56,189,248,0.6)]
                       transition-all"
          >
            {t("projectsPage.cta.button")}
            <FiArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </motion.div>
      </Card>
    </Section>
  );
}
