"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { fadeIn, fadeInUp, stagger } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";
import { INITIATIVES, type CsrStatus } from "../lib/social-responsibility";
import { cn } from "@/lib/cn";

const STATUS_PILL: Record<CsrStatus, string> = {
  live: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 ring-emerald-500/30",
  inProgress:
    "bg-amber-500/10 text-amber-700 dark:text-amber-300 ring-amber-500/30",
  soon: "bg-zinc-500/10 text-zinc-700 dark:text-zinc-300 ring-zinc-500/30",
};

const STATUS_LABEL: Record<CsrStatus, string> = {
  live: "csr.labels.live",
  inProgress: "csr.labels.inProgress",
  soon: "csr.labels.soon",
};

export function CsrInitiatives() {
  const { t } = useI18n();

  return (
    <Section id="csr-initiatives" className="py-8 md:py-12" variants={stagger}>
      <motion.h2 variants={fadeInUp} className="typo-section-title mb-6">
        {t("csr.initiatives.title")}
      </motion.h2>

      <motion.div
        variants={fadeIn}
        className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        {INITIATIVES.map((it, i) => (
          <motion.article
            key={it.key}
            variants={fadeInUp}
            transition={{ delay: 0.04 * i }}
            className="flex flex-col rounded-2xl glass overflow-hidden
                       ring-1 ring-black/5 dark:ring-white/10
                       hover:-translate-y-1 hover:ring-sky-500/40 transition-all
                       dark:hover:shadow-[0_0_24px_-6px_rgba(56,189,248,0.4)]"
          >
            <div className="h-48 sm:h-56 w-full overflow-hidden">
              <Image
                src={it.image}
                alt={t(`csr.dict.initiatives.${it.key}.title`)}
                width={800}
                height={240}
                loading="lazy"
                sizes="(min-width:1280px) 33vw, (min-width:640px) 50vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-start gap-2 flex-wrap">
                <h3 className="font-semibold text-base text-zinc-900 dark:text-zinc-50 flex-1">
                  {t(`csr.dict.initiatives.${it.key}.title`)}
                </h3>
                <span
                  className={cn(
                    "text-[11px] font-semibold rounded-full px-2 py-0.5 ring-1",
                    STATUS_PILL[it.status],
                  )}
                >
                  {t(STATUS_LABEL[it.status])}
                </span>
              </div>

              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 flex-1">
                {t(`csr.dict.initiatives.${it.key}.desc`)}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
