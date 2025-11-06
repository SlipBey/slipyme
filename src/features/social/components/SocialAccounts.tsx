"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/libs/animations";
import { Link } from "@/components/Globals/Link";
import { SOCIAL } from "@/libs/config/social";
import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { useI18n } from "@/lib/i18n";

export default function SocialAccounts() {
  const { t } = useI18n();

  return (
    <AnimatedSection mode="view" id="social-accounts" className="py-6 sm:py-12">
      <motion.h2 variants={fadeInUp} className="text-2xl font-bold mb-6">
        {t("social.accountsTitle")}
      </motion.h2>

      <div
        className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4
        "
      >
        {SOCIAL.map(({ href, icon: Icon, alt }) => (
          <Link
            key={href}
            href={href}
            className="
              group relative overflow-hidden rounded-2xl
              ring-1 ring-black/5 dark:ring-white/10
              bg-white/90 dark:bg-zinc-900/90
              backdrop-blur supports-backdrop-filter:backdrop-blur
              transition
              focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60
              hover:shadow-md
            "
            blank
          >
            <div
              className="
                absolute inset-x-0 top-0 h-1.5
                bg-linear-to-r from-sky-500 via-cyan-500 to-indigo-500
                opacity-90
              "
            />

            <div
              aria-hidden
              className="
                pointer-events-none absolute -right-10 -top-12 h-36 w-36
                rounded-full bg-sky-500/10 dark:bg-sky-400/10 blur-2xl
                transition-transform duration-300 group-hover:scale-110
              "
            />

            <div className="relative flex h-28 sm:h-32 items-center justify-center p-3 sm:p-4">
              <div className="flex flex-col items-center text-center">
                <div
                  className="
                    grid place-items-center
                    h-12 w-12 sm:h-14 sm:w-14 rounded-2xl
                    bg-linear-to-br from-sky-500 to-cyan-500
                    text-white shadow-sm
                    transition-transform duration-300
                    group-hover:scale-[1.06]
                  "
                >
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>

                <div
                  className="
                    mt-2.5 text-[13px] sm:text-sm font-semibold
                    text-zinc-800 dark:text-zinc-200
                    tracking-tight
                  "
                >
                  {alt}
                </div>
              </div>
            </div>
            <div
              aria-hidden
              className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                transition
                ring-1 ring-sky-500/30 rounded-2xl
              "
            />
          </Link>
        ))}
      </div>
    </AnimatedSection>
  );
}
