"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { PenguMascot } from "@/components/ui/PenguMascot";
import { fadeInUp, stagger } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";
import { FiArrowRight } from "react-icons/fi";

export function AboutTeaser() {
  const { t } = useI18n();
  const firstParagraph =
    t("about")
      .split(/\n\s*\n/)[0]
      ?.trim() ?? "";

  return (
    <Section id="about" className="py-10 md:py-16" variants={stagger}>
      <Card variant="glass" cap className="p-8 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-center">
          <motion.div variants={fadeInUp}>
            <span className="typo-eyebrow">{t("home.eyebrow")}</span>
            <h2 className="typo-section-title mt-3">{t("general.about")}</h2>
            <p className="typo-body mt-4">{firstParagraph}</p>
            <Link href="/about" className="inline-block mt-6">
              <Button
                variant="secondary"
                icon={FiArrowRight}
                iconPosition="right"
              >
                {t("home.aboutMore")}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center lg:justify-end"
          >
            <PenguMascot size={220} animated />
          </motion.div>
        </div>
      </Card>
    </Section>
  );
}
