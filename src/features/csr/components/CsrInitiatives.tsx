"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/libs/animations";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { INITIATIVES } from "../libs/social-responsibility";

export default function CsrInitiatives() {
  const { t } = useI18n();

  return (
    <AnimatedSection id="csr-initiatives" className="py-5 sm:py-12" mode="view">
      <motion.div variants={fadeIn}>
        <div className="flex items-center justify-between mb-6">
          <motion.h2 className="text-2xl font-bold" variants={fadeInUp}>
            {t("csr.initiatives.title")}
          </motion.h2>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
          variants={fadeIn}
        >
          {INITIATIVES.map((it) => (
            <motion.div
              key={it.key}
              className="flex flex-col rounded-2xl bg-white dark:bg-[#16181d] overflow-hidden ring-1 ring-black/10 dark:ring-white/10 hover:-translate-y-1 hover:ring-sky-400/60 transition"
              variants={fadeInUp}
            >
              <div className="h-44 sm:h-52 md:h-56 lg:h-60 w-full overflow-hidden">
                <Image
                  src={it.image}
                  alt={String(t(`csr.dict.initiatives.${it.key}.title`))}
                  width={800}
                  height={240}
                  loading="lazy"
                  sizes="(min-width:1280px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="h-full w-full object-center object-cover"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-base">
                    {t(`csr.dict.initiatives.${it.key}.title`)}
                  </h3>

                  <span
                    className={`text-[11px] font-semibold rounded-full px-2 py-0.5 ring-1
                    ${
                      it.status === "yayinda"
                        ? "bg-emerald-100 text-emerald-700 ring-emerald-200/60 dark:bg-emerald-900/30 dark:text-emerald-200"
                        : it.status === "devam"
                          ? "bg-amber-100 text-amber-700 ring-amber-200/60 dark:bg-amber-900/30 dark:text-amber-200"
                          : "bg-slate-100 text-slate-700 ring-slate-200/60 dark:bg-slate-900/30 dark:text-slate-200"
                    }`}
                  >
                    {it.status === "yayinda"
                      ? t("csr.labels.live")
                      : it.status === "devam"
                        ? t("csr.labels.inProgress")
                        : t("csr.labels.soon")}
                  </span>
                </div>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 flex-1">
                  {t(`csr.dict.initiatives.${it.key}.desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
}
