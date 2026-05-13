"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { fadeIn, fadeInUp, stagger } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";

export function CsrHero() {
  const { t } = useI18n();

  return (
    <Section id="csr-hero" className="py-8 md:py-12" variants={stagger}>
      <motion.div
        variants={fadeIn}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <motion.div variants={fadeInUp}>
          <span className="typo-eyebrow">{t("home.eyebrow")}</span>
          <h1 className="typo-page-title mt-2">{t("csr.hero.title")}</h1>
          <p className="typo-body mt-4 max-w-xl">{t("csr.hero.subtitle")}</p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <div
            className="aspect-4/3 rounded-2xl overflow-hidden shadow-xl
                          ring-1 ring-black/5 dark:ring-white/10"
          >
            <Image
              src="/resimler/csr.png"
              alt=""
              aria-hidden
              width={1200}
              height={900}
              priority
              sizes="(min-width:768px) 50vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
