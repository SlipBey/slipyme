"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/animations";
import { useI18n } from "@/lib/i18n";
import { Link } from "@/components/Globals/Link";

export default function AboutContactCta() {
  const { t } = useI18n();
  return (
    <AnimatedSection id="contact-cta" className="py-5 sm:py-12">
      <motion.div
        className="mx-auto rounded-2xl ring-1 ring-black/5 dark:ring-white/10
                   bg-linear-to-r from-blue-600 to-sky-600 px-6 sm:px-8 lg:px-12 py-8
                   flex flex-col sm:flex-row items-center justify-between gap-6"
        variants={fadeIn}
      >
        <div>
          <h3 className="text-2xl font-bold text-white">{t("cta.title")}</h3>
          <p className="text-white/90 mt-1 text-sm md:text-base">
            {t("cta.subtitle")}
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-xl bg-white text-blue-700 px-4 py-2 font-semibold ring-1 ring-white/50 hover:bg-blue-50"
        >
          {t("general.contact")}
        </Link>
      </motion.div>
    </AnimatedSection>
  );
}
