"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { fadeIn, fadeInUp, stagger } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";
import { DESIGN_SOLUTION_ITEMS } from "../lib/design";
import { cn } from "@/lib/cn";

function AdobeBadge({ text, gradient }: { text: string; gradient: string }) {
  return (
    <div
      className={cn(
        "w-24 h-24 mx-auto rounded-2xl p-3 shadow-lg bg-linear-to-br",
        gradient,
      )}
    >
      <div className="w-full h-full rounded-xl bg-white/95 flex items-center justify-center">
        <span className="text-3xl font-extrabold tracking-tight text-zinc-900">
          {text}
        </span>
      </div>
    </div>
  );
}

export function DesignSolutions() {
  const { t } = useI18n();

  return (
    <Section id="design-solutions" className="py-8 md:py-12" variants={stagger}>
      <motion.h2
        variants={fadeInUp}
        className="typo-section-title text-center mb-2"
      >
        {t("design.solutions.title")}
      </motion.h2>
      <motion.p
        variants={fadeInUp}
        className="typo-body text-center max-w-2xl mx-auto mb-8"
      >
        {t("design.solutions.subtitle")}
      </motion.p>

      <motion.div
        variants={fadeIn}
        className="grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 md:grid-cols-3"
      >
        {DESIGN_SOLUTION_ITEMS.map((item) => (
          <motion.div
            key={item.key}
            variants={fadeInUp}
            className={cn(
              "rounded-2xl p-6 text-center glass",
              "ring-1 ring-black/5 dark:ring-white/10",
              "transition hover:-translate-y-1 hover:ring-sky-500/40",
              "dark:hover:shadow-[0_0_24px_-6px_rgba(56,189,248,0.4)]",
            )}
          >
            <AdobeBadge text={item.badge} gradient={item.gradient} />
            <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {t(item.titleKey)}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {t(item.descKey)}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
