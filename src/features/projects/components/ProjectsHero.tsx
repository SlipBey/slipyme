"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/libs/animations";
import Image from "next/image";
import { Link } from "@/components/Globals/Link";
import { useI18n } from "@/lib/i18n";

export default function ProjectsHero() {
  const { t } = useI18n();

  return (
    <AnimatedSection id="hero" className="py-8 md:py-12">
      <motion.div
        variants={fadeIn}
        className="relative overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/10
                   bg-linear-to-r from-sky-900/80 via-sky-800/80 to-sky-700/80
                   dark:from-[#0c1824] dark:via-[#0e1d2c] dark:to-[#0f2133]
                   shadow-xl px-6 sm:px-8 lg:px-12 py-8 md:py-12
                   flex flex-col md:flex-row items-center justify-between gap-8 text-white"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-400 via-sky-300 to-sky-200/90" />

        <div className="flex-1">
          <motion.h1
            variants={fadeInUp}
            className="typo-page-title text-white!"
          >
            {t("projectsPage.title")}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-2 typo-body text-white/90! max-w-3xl"
          >
            {t("projectsPage.subtitle")}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-6">
            <Link href="/contact">
              <span
                className="inline-flex items-center rounded-xl bg-white/95 text-sky-700 px-4 py-2 font-semibold
                               ring-1 ring-white/70 hover:bg-white transition"
              >
                {t("navbar.button.project")}
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          className="shrink-0 select-none"
          whileHover={{ rotate: 3, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
        >
          <Image
            src="/resimler/cikartmalar/telefon.png"
            alt=""
            aria-hidden="true"
            width={192}
            height={192}
            priority
            sizes="(min-width:1024px) 192px, (min-width:768px) 144px, (min-width:640px) 96px, 48px"
            className="w-12 sm:w-24 md:w-36 lg:w-48 object-contain drop-shadow-lg"
          />
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
}
