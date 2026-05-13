"use client";

import { Link } from "@/components/ui/Link";
import { useI18n } from "@/lib/i18n";

export function ContactCTA() {
  const { t } = useI18n();
  return (
    <Link
      href="/contact"
      aria-label={t("navbar.button.contact")}
      className="group relative inline-flex shrink-0 h-10 w-52 overflow-hidden
                 rounded-xl text-white font-semibold text-sm
                 bg-linear-to-br from-sky-600 to-cyan-500
                 hover:from-sky-700 hover:to-cyan-600
                 dark:shadow-[0_0_24px_-6px_rgba(56,189,248,0.6)]
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300
                 focus-visible:ring-offset-2 focus-visible:ring-offset-white
                 dark:focus-visible:ring-offset-zinc-950
                 transition-all"
    >
      <span
        className="pointer-events-none absolute inset-0 grid place-items-center
                   transition-transform duration-300 group-hover:-translate-y-full"
      >
        {t("navbar.button.project")}
      </span>
      <span
        className="pointer-events-none absolute inset-0 grid place-items-center
                   translate-y-full transition-transform duration-300 group-hover:translate-y-0"
      >
        {t("navbar.button.contact")}
      </span>
    </Link>
  );
}
