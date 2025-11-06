"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/animations";
import { useI18n } from "@/lib/i18n";

export default function CsrAnnounce() {
  const { t } = useI18n();

  return (
    <AnimatedSection id="csr-announce" className="py-5 sm:py-12" mode="view">
      <motion.div variants={fadeIn}>
        <div className="rounded-2xl bg-linear-to-br from-sky-600 to-sky-500 text-white p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <div className="text-sm/5 uppercase tracking-wider font-semibold text-white/80">
              {t("csr.announce.title")}
            </div>
            <h3 className="text-2xl font-extrabold mt-1">
              {t("csr.announce.note")}
            </h3>
          </div>

          <div className="flex md:justify-end gap-3">
            <span className="inline-flex items-center gap-2 rounded-2xl bg-white text-sky-700 px-6 py-4 font-semibold shadow-lg">
              {t("csr.announce.donateText")}
            </span>
            <span className="inline-flex items-center gap-2 rounded-2xl bg-white/10 ring-1 ring-white/30 text-white px-6 py-4 font-semibold">
              {t("csr.announce.volunteerText")}
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}
