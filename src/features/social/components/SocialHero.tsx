"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { fadeIn, fadeInUp, stagger } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";

export function SocialHero() {
  const { t } = useI18n();
  return (
    <Section id="social-hero" className="py-8 md:py-12" variants={stagger}>
      <motion.section
        variants={fadeIn}
        className="rounded-3xl glass-strong px-6 py-12 text-center
                   ring-1 ring-black/5 dark:ring-white/10 shadow-xl"
      >
        <motion.span variants={fadeInUp} className="typo-eyebrow">
          {t("home.eyebrow")}
        </motion.span>
        <motion.h1
          variants={fadeInUp}
          className="typo-display text-3xl md:text-4xl lg:text-5xl mt-3"
        >
          {t("social.title")}
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-4 typo-body max-w-2xl mx-auto"
        >
          {t("social.subtitle")}
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-6">
          <Link href="#social-accounts">
            <Button size="lg">{t("social.followUs")}</Button>
          </Link>
        </motion.div>
      </motion.section>
    </Section>
  );
}
