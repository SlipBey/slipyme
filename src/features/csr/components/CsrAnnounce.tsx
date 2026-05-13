"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { fadeIn } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";

export function CsrAnnounce() {
  const { t } = useI18n();
  return (
    <Section id="csr-announce" className="py-8 md:py-12" variants={fadeIn}>
      <div
        className="relative overflow-hidden rounded-3xl text-white p-8 ring-1 ring-white/15 shadow-xl
                   bg-linear-to-br from-sky-700 via-sky-600 to-cyan-500
                   dark:shadow-[0_0_40px_-8px_rgba(56,189,248,0.5)]
                   grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full
                     bg-white/15 blur-3xl"
        />
        <div className="md:col-span-2 relative">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-white/80">
            {t("csr.announce.title")}
          </div>
          <h3 className="text-xl md:text-2xl font-extrabold mt-2 leading-snug">
            {t("csr.announce.note")}
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row md:justify-end gap-3 relative">
          <span
            className="inline-flex items-center justify-center gap-2 rounded-2xl
                           bg-white text-sky-700 px-5 py-3 font-semibold shadow-lg"
          >
            {t("csr.announce.donateText")}
          </span>
          <span
            className="inline-flex items-center justify-center gap-2 rounded-2xl
                           bg-white/10 ring-1 ring-white/30 text-white px-5 py-3 font-semibold"
          >
            {t("csr.announce.volunteerText")}
          </span>
        </div>
      </div>
    </Section>
  );
}
