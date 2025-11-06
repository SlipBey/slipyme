"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/libs/animations";
import { FiArrowRight } from "react-icons/fi";
import { useI18n } from "@/lib/i18n";
import { FAQ_KEYS } from "../libs/social-responsibility";

export default function CsrTransparencyFaq() {
  const { t } = useI18n();

  return (
    <AnimatedSection
      id="csr-transparency"
      className="py-5 sm:py-12"
      mode="view"
    >
      <motion.div variants={fadeIn}>
        <motion.div
          className="rounded-2xl bg-white dark:bg-[#16181d] ring-1 ring-black/10 dark:ring-white/10 p-6"
          variants={fadeInUp}
        >
          <h2 className="text-xl font-bold">{t("csr.transparency.title")}</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            {t("csr.transparency.desc")}
          </p>
        </motion.div>

        <motion.div className="mt-8" variants={fadeIn}>
          <h2 className="text-xl font-bold mb-4">{t("csr.faqs.title")}</h2>
          <div className="space-y-3">
            {FAQ_KEYS.map((k) => (
              <motion.details
                key={k}
                className="group rounded-2xl bg-white dark:bg-[#16181d] ring-1 ring-black/10 dark:ring-white/10 p-5"
                variants={fadeInUp}
              >
                <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
                  <span>{t(`csr.dict.faqs.${k}.q`)}</span>
                  <FiArrowRight
                    className="transition-transform group-open:rotate-90"
                    aria-hidden="true"
                    focusable="false"
                  />
                </summary>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {t(`csr.dict.faqs.${k}.a`)}
                </p>
              </motion.details>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
}
