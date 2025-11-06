"use client";

import { Link } from "@/components/Globals/Link";
import { useI18n } from "@/lib/i18n";

export default function ContactButton() {
  const { t } = useI18n();

  return (
    <Link
      href="/contact"
      prefetch={false}
      className="shrink-0 group h-10 w-48 relative rounded-xl overflow-hidden
             bg-sky-700 hover:bg-sky-800 text-white font-semibold
             focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
             focus-visible:ring-sky-300 focus-visible:ring-offset-white
             dark:focus-visible:ring-offset-zinc-900 grid place-items-center"
      aria-label={t("navbar.button.contact")}
    >
      <span className="pointer-events-none absolute inset-0 grid place-items-center translate-y-0 group-hover:-translate-y-full transition-transform duration-300">
        {t("navbar.button.project")}
      </span>
      <span className="pointer-events-none absolute inset-0 grid place-items-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        {t("navbar.button.contact")}
      </span>
    </Link>
  );
}
