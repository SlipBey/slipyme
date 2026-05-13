"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { fadeIn, fadeInUp, stagger } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";
import { PILLARS } from "../lib/social-responsibility";

export function CsrPillars() {
  const { t } = useI18n();

  return (
    <Section id="csr-pillars" className="py-8 md:py-12" variants={stagger}>
      <motion.h2 variants={fadeInUp} className="typo-section-title mb-6">
        {t("csr.pillars.title")}
      </motion.h2>

      <motion.div
        variants={fadeIn}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
      >
        {PILLARS.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.key}
              variants={fadeInUp}
              transition={{ delay: 0.04 * i }}
              className="rounded-2xl glass p-5 ring-1 ring-black/5 dark:ring-white/10
                         transition-all hover:-translate-y-1 hover:ring-emerald-500/40
                         dark:hover:shadow-[0_0_24px_-6px_rgba(16,185,129,0.4)]"
            >
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl
                           bg-emerald-500/10 text-emerald-700 dark:text-emerald-300
                           ring-1 ring-emerald-500/30"
              >
                <Icon size={20} aria-hidden />
              </div>
              <h3 className="mt-3 font-semibold text-zinc-900 dark:text-zinc-50">
                {t(`csr.dict.pillars.${p.key}.title`)}
              </h3>
              <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                {t(`csr.dict.pillars.${p.key}.desc`)}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
