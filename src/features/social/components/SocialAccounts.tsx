"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Link } from "@/components/ui/Link";
import { fadeInUp, stagger } from "@/lib/motion";
import { SOCIAL_LINKS } from "@/config/social";
import { useI18n } from "@/lib/i18n";

export function SocialAccounts() {
  const { t } = useI18n();

  return (
    <Section id="social-accounts" className="py-8 md:py-12" variants={stagger}>
      <motion.h2 variants={fadeInUp} className="typo-section-title mb-6">
        {t("social.accountsTitle")}
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
        {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
          <motion.div key={label} variants={fadeInUp}>
            <Link
              href={href}
              blank
              className="group relative block overflow-hidden rounded-2xl
                         glass ring-1 ring-black/5 dark:ring-white/10
                         hover:ring-sky-500/40 transition-all
                         dark:hover:shadow-[0_0_24px_-6px_rgba(56,189,248,0.4)]"
            >
              <div
                className="absolute inset-x-0 top-0 h-1.5
                           bg-linear-to-r from-sky-500 via-cyan-500 to-indigo-500
                           opacity-90"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-12 h-36 w-36
                           rounded-full bg-sky-500/10 dark:bg-sky-400/15 blur-2xl
                           transition-transform duration-300 group-hover:scale-110"
              />
              <div className="relative flex h-28 sm:h-32 items-center justify-center p-3 sm:p-4">
                <div className="flex flex-col items-center text-center">
                  <div
                    className="grid place-items-center h-12 w-12 sm:h-14 sm:w-14 rounded-2xl
                               bg-linear-to-br from-sky-500 to-cyan-500
                               text-white shadow-md
                               transition-transform duration-300 group-hover:scale-[1.06]
                               dark:shadow-[0_0_18px_-4px_rgba(56,189,248,0.55)]"
                  >
                    <Icon size={22} aria-hidden />
                  </div>
                  <div
                    className="mt-2.5 text-sm font-semibold tracking-tight
                                  text-zinc-800 dark:text-zinc-100"
                  >
                    {label}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
