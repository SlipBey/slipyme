"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { useI18n } from "@/lib/i18n";
import { fadeIn, fadeInUp, stagger } from "@/lib/motion";
import { FiCalendar } from "react-icons/fi";

type TimelineItem = { y: string; t: string; d: string };

export function AboutTimeline() {
  const { t, getRaw } = useI18n();
  const items = getRaw<TimelineItem[]>("timeline") ?? [];

  return (
    <Section id="timeline" className="py-8 md:py-14" variants={stagger}>
      <motion.h2
        variants={fadeInUp}
        className="typo-section-title text-center mb-8"
      >
        {t("timelineTitle")}
      </motion.h2>

      <motion.div
        variants={fadeIn}
        className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      >
        {items.map((it, i) => (
          <motion.article
            key={`${it.y}-${i}`}
            variants={fadeInUp}
            transition={{ delay: 0.04 * i }}
            className="group overflow-hidden rounded-2xl glass
                       ring-1 ring-black/5 dark:ring-white/10 shadow-sm
                       hover:shadow-lg dark:hover:shadow-[0_0_24px_-6px_rgba(56,189,248,0.4)]
                       transition-all flex flex-col"
          >
            <div className="h-1 w-full bg-linear-to-r from-sky-700 via-sky-500 to-cyan-500" />
            <div className="p-5 flex-1 flex flex-col gap-3">
              <span
                className="inline-flex items-center gap-2 pr-3 py-1 text-xs font-semibold rounded-full
                           bg-sky-500/10 text-sky-700 dark:text-sky-300
                           ring-1 ring-sky-500/30 w-fit"
              >
                <span
                  className="inline-grid place-items-center w-6 h-6 rounded-full
                             bg-sky-600/20 text-sky-700 dark:text-sky-200"
                >
                  <FiCalendar size={12} aria-hidden />
                </span>
                {it.y}
              </span>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                {it.t}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {it.d}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
