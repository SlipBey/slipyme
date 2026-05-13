"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { fadeIn, fadeInUp, stagger } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";
import { FAQ_KEYS } from "../lib/social-responsibility";
import { FiChevronRight } from "react-icons/fi";

export function CsrTransparencyFaq() {
  const { t } = useI18n();

  return (
    <Section id="csr-transparency" className="py-8 md:py-12" variants={stagger}>
      <motion.div variants={fadeInUp}>
        <Card variant="glass" className="p-6">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            {t("csr.transparency.title")}
          </h2>
          <p className="mt-2 typo-body">{t("csr.transparency.desc")}</p>
        </Card>
      </motion.div>

      <div className="mt-8">
        <motion.h2
          variants={fadeInUp}
          className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-50"
        >
          {t("csr.faqs.title")}
        </motion.h2>

        <motion.div variants={fadeIn} className="space-y-3">
          {FAQ_KEYS.map((k, i) => (
            <motion.details
              key={k}
              variants={fadeInUp}
              transition={{ delay: 0.04 * i }}
              className="group rounded-2xl glass p-5 ring-1 ring-black/5 dark:ring-white/10"
            >
              <summary
                className="cursor-pointer list-none font-semibold flex items-center justify-between gap-3
                                  text-zinc-900 dark:text-zinc-50"
              >
                <span>{t(`csr.dict.faqs.${k}.q`)}</span>
                <FiChevronRight
                  size={16}
                  className="transition-transform group-open:rotate-90 shrink-0
                             text-zinc-500 dark:text-zinc-400"
                  aria-hidden
                />
              </summary>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                {t(`csr.dict.faqs.${k}.a`)}
              </p>
            </motion.details>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
