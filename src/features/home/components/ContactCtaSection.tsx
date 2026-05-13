"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Link } from "@/components/ui/Link";
import { fadeInUp } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";
import { FiMail } from "react-icons/fi";

export function ContactCtaSection() {
  const { t } = useI18n();

  return (
    <Section id="contact" className="py-10 md:py-16" variants={fadeInUp}>
      <Card variant="glass" cap className="px-6 py-12 sm:px-10 text-center">
        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center gap-5 mx-auto max-w-2xl"
        >
          <Image
            src="/resimler/cikartmalar/contact.png"
            alt=""
            aria-hidden
            width={112}
            height={112}
            loading="lazy"
            sizes="112px"
            className="w-24 sm:w-28 drop-shadow-lg"
          />

          <h2 className="typo-section-title">{t("home.contactCta.title")}</h2>
          <p className="typo-body max-w-xl">{t("home.contactCta.subtitle")}</p>

          <Link href="/contact" className="mt-2">
            <Button size="lg" icon={FiMail} iconPosition="left">
              {t("home.contactCta.button")}
            </Button>
          </Link>
        </motion.div>
      </Card>
    </Section>
  );
}
