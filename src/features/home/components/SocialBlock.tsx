"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/animations";
import { CtaPanel } from "./CTAPanel";
import { useI18n } from "@/lib/i18n";

export default function SocialBlock() {
  const { t } = useI18n();

  return (
    <AnimatedSection id="social" className="py-5 sm:py-12" mode="view">
      <div className="relative mx-auto">
        <motion.div variants={fadeIn}>
          <CtaPanel
            title={t("general.social")}
            body={t("social.text")}
            href="/social"
            imgSrc="/resimler/cikartmalar/medya.png"
            imgAlt="Sosyal Medya"
          />
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
