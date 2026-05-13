"use client";

import { Section } from "@/components/ui/Section";
import { Link } from "@/components/ui/Link";
import { fadeIn } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";
import { FiArrowRight } from "react-icons/fi";

export function AboutContactCta() {
  const { t } = useI18n();
  return (
    <Section id="about-contact-cta" className="py-8 md:py-12" variants={fadeIn}>
      <div
        className="relative overflow-hidden rounded-3xl ring-1 ring-white/15 shadow-xl
                   bg-linear-to-br from-sky-700 via-sky-600 to-cyan-500
                   dark:shadow-[0_0_40px_-8px_rgba(56,189,248,0.5)]
                   px-6 sm:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full
                     bg-white/15 blur-3xl"
        />
        <div className="relative">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            {t("cta.title")}
          </h3>
          <p className="text-white/85 mt-1 text-sm md:text-base">
            {t("cta.subtitle")}
          </p>
        </div>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-xl
                     bg-white text-sky-700 px-5 py-2.5 font-semibold
                     ring-1 ring-white/70 hover:bg-white/95 transition"
        >
          {t("general.contact")}
          <FiArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </Link>
      </div>
    </Section>
  );
}
