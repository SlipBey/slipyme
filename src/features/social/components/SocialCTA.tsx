"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/libs/animations";
import { Button } from "@/components/Globals/Button";
import { Link } from "@/components/Globals/Link";
import { useI18n } from "@/lib/i18n";

export default function SocialCTA() {
  const { t } = useI18n();
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="py-10 sm:py-14"
    >
      <div
        className="relative overflow-hidden rounded-3xl
                   bg-linear-to-b from-sky-100 to-white
                   dark:from-[#14181f] dark:to-zinc-900
                   ring-1 ring-black/5 dark:ring-white/10
                   px-6 sm:px-10 py-10 text-center"
      >
        <div className="pointer-events-none absolute inset-0 mask-[radial-gradient(60%_60%_at_80%_0%,black,transparent)]">
          <div className="absolute -right-10 -top-12 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
        </div>

        <h3 className="text-2xl md:text-3xl font-extrabold">
          {t("social.cta.title")}
        </h3>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t("social.cta.subtitle")}
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/contact">
            <Button size="lg">{t("social.contactBtn")}</Button>
          </Link>
          <Link href="#social-accounts" className="inline-flex">
            <Button size="lg" variant="ghost">
              {t("social.cta.secondary")}
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
