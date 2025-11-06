"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { Link } from "@/components/Globals/Link";
import { Button } from "@/components/Globals/Button";
import { FiMail } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import { useI18n } from "@/lib/i18n";

export default function CareerClient() {
  const { t } = useI18n();

  return (
    <>
      <AnimatedSection id="career-hero" className="py-8 sm:py-14" mode="view">
        <div
          className="relative overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/10
                     bg-white dark:bg-zinc-900 shadow-lg max-w-5xl mx-auto px-6 sm:px-10 py-10 text-center"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-700 via-sky-600 to-sky-500" />

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {t("careerPage.title")}
          </h1>

          <div
            className="mt-3 inline-flex items-center gap-2 rounded-full border
                       border-blue-500/30 bg-blue-50 text-blue-700 px-3 py-1
                       dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-700/40"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-sky-400" />
            <span className="text-sm font-semibold">
              {t("careerPage.badge")}
            </span>
          </div>

          <p className="mt-4 mx-auto max-w-3xl typo-body">
            {t("careerPage.subtitle")}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link href="#mail">
              <Button className="gap-2">
                <FiMail aria-hidden="true" focusable="false" />
                {t("careerPage.cta.email")}
              </Button>
            </Link>
            <Link href="/discord">
              <Button className="bg-indigo-600 hover:bg-indigo-700 ring-indigo-500/60 gap-2">
                <FaDiscord aria-hidden="true" focusable="false" />
                {t("careerPage.cta.discord")}
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
