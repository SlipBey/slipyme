"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/libs/animations";
import { useI18n } from "@/lib/i18n";
import trJson from "@/locales/tr.json";
import enJson from "@/locales/en.json";
import { FiCalendar } from "react-icons/fi";

type TimelineItem = { y: string; t: string; d: string };

export default function AboutTimeline() {
  const { t, lang } = useI18n();

  const localeData = lang === "tr" ? (trJson as any) : (enJson as any);
  const items: TimelineItem[] = Array.isArray(localeData?.timeline)
    ? localeData.timeline
    : [];

  return (
    <AnimatedSection id="timeline" className="py-8 md:py-14">
      <motion.h2
        className="mb-6 text-2xl font-bold text-center"
        variants={fadeInUp}
      >
        {t("timelineTitle")}
      </motion.h2>

      <motion.div
        variants={fadeIn}
        className="mx-auto max-w-7xl grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      >
        {items.map((it, i) => (
          <motion.article
            key={`${it.y}-${i}`}
            variants={fadeInUp}
            transition={{ delay: 0.03 * i }}
            className="group overflow-hidden rounded-2xl bg-white dark:bg-[#16181d]
                       ring-1 ring-black/10 dark:ring-white/10 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="h-1 w-full bg-linear-to-r from-sky-700 via-sky-600 to-sky-500" />
            <div className="p-5 flex-1 flex flex-col gap-3">
              <div
                className="inline-flex items-center gap-2 pr-2 py-0.5 text-xs font-semibold rounded-full
                              bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200 ring-1 ring-blue-900/50 w-fit"
              >
                <span className="inline-grid place-items-center w-6 h-6 rounded-full bg-blue-600/15 text-blue-600 dark:text-blue-300 shrink-0">
                  <FiCalendar aria-hidden="true" focusable="false" />
                </span>
                {it.y}
              </div>
              <h3 className="text-base font-semibold">{it.t}</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {it.d}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}
