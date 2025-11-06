"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/libs/animations";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function CsrHero() {
  const { t } = useI18n();

  return (
    <AnimatedSection id="csr-hero" className="py-5 sm:py-12" mode="view">
      <motion.div
        className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        variants={fadeIn}
      >
        <motion.div variants={fadeInUp}>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50">
            {t("csr.hero.title")}
          </h1>
          <p className="mt-3 text-slate-700 dark:text-slate-300">
            {t("csr.hero.subtitle")}
          </p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/10 dark:ring-white/10">
            <Image
              src="/resimler/csr.png"
              alt=""
              aria-hidden="true"
              width={1200}
              height={900}
              priority
              sizes="(min-width:768px) 50vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
}
