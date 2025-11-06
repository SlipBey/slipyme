"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/animations";
import { FiMail } from "react-icons/fi";
import { Link } from "@/components/Globals/Link";
import { useI18n } from "@/lib/i18n";

export default function CsrSubscribe() {
  const { t } = useI18n();

  return (
    <AnimatedSection id="csr-subscribe" className="py-5 sm:py-12" mode="view">
      <motion.div
        className="mx-auto rounded-xl shadow-2xl ring-black/10 dark:ring-white/10 bg-white dark:bg-[#16181d] p-6 flex flex-col md:flex-row gap-3 md:items-center"
        variants={fadeIn}
      >
        <div className="flex-1">
          <div className="text-sm/5 uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
            {t("csr.subscribe.title")}
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {t("csr.subscribe.desc")}
          </p>
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          <Link href="#mail">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 text-sm font-semibold"
            >
              <FiMail aria-hidden="true" focusable="false" />{" "}
              {t("csr.subscribe.button")}
            </button>
          </Link>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}
