"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { fadeIn, fadeInUp, stagger } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";
import { IconType } from "react-icons";
import { FiAward, FiEye, FiHeart, FiShield } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";

type ValueItem = { title: string; desc: string };

const ICONS: IconType[] = [FiShield, FiAward, FiEye, FaLeaf, FiHeart];

export function AboutValues() {
  const { t, getRaw } = useI18n();
  const items = getRaw<ValueItem[]>("values") ?? [];

  return (
    <Section id="values" className="py-8 md:py-14" variants={stagger}>
      <motion.h2
        variants={fadeInUp}
        className="typo-section-title text-center mb-8"
      >
        {t("valuesTitle")}
      </motion.h2>

      <motion.div
        variants={fadeIn}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
      >
        {items.map((v, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <motion.div
              key={v.title}
              variants={fadeInUp}
              transition={{ delay: 0.04 * i }}
              className="rounded-2xl p-5 glass ring-1 ring-black/5 dark:ring-white/10
                         transition-all hover:-translate-y-1
                         hover:ring-sky-500/40 dark:hover:ring-sky-400/40
                         dark:hover:shadow-[0_0_24px_-6px_rgba(56,189,248,0.4)]"
            >
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl
                           bg-sky-100 text-sky-700
                           dark:bg-sky-500/15 dark:text-sky-300
                           ring-1 ring-sky-500/20 mb-3"
              >
                <Icon size={20} aria-hidden />
              </div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                {v.title}
              </h3>
              <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
