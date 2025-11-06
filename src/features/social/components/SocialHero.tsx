"use client";

import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/libs/animations";
import { Button } from "@/components/Globals/Button";
import { Link } from "@/components/Globals/Link";
import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { useI18n } from "@/lib/i18n";

export default function SocialHero() {
  const { t } = useI18n();
  return (
    <AnimatedSection id="hero" className="py-6 sm:py-10" mode="both">
      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="rounded-3xl bg-linear-to-b from-sky-200 to-white dark:from-sky-950 dark:to-zinc-900 px-6 py-10 text-center
                   ring-1 ring-black/5 dark:ring-white/10"
      >
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold"
          variants={fadeInUp}
        >
          {t("social.title")}
        </motion.h1>
        <motion.p
          className="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          {t("social.subtitle")}
        </motion.p>
        <motion.div className="mt-6" variants={fadeInUp}>
          <Link href="#social-accounts">
            <Button>{t("social.followUs")}</Button>
          </Link>
        </motion.div>
      </motion.section>
    </AnimatedSection>
  );
}
