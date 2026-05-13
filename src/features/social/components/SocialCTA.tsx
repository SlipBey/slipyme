"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { fadeInUp, stagger } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";

export function SocialCTA() {
  const { t } = useI18n();
  return (
    <Section id="social-cta" className="py-10 md:py-14" variants={stagger}>
      <div
        className="relative overflow-hidden rounded-3xl ring-1 ring-white/15 shadow-2xl
                   bg-linear-to-br from-violet-700 via-violet-600 to-fuchsia-500
                   dark:shadow-[0_0_40px_-8px_rgba(139,92,246,0.5)]
                   px-6 sm:px-10 py-12 text-center text-white"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 right-1/4 h-64 w-64 rounded-full
                     bg-white/15 blur-3xl"
        />

        <motion.h3
          variants={fadeInUp}
          className="text-2xl md:text-3xl font-extrabold relative"
        >
          {t("social.cta.title")}
        </motion.h3>
        <motion.p
          variants={fadeInUp}
          className="mt-3 text-white/85 max-w-2xl mx-auto relative"
        >
          {t("social.cta.subtitle")}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-6 flex flex-wrap items-center justify-center gap-3 relative"
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white! text-violet-700! hover:bg-white/95! ring-1! ring-white/70!"
            >
              {t("social.contactBtn")}
            </Button>
          </Link>
          <Link href="#social-accounts">
            <Button
              size="lg"
              variant="ghost"
              className="text-white! hover:bg-white/10!"
            >
              {t("social.cta.secondary")}
            </Button>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
