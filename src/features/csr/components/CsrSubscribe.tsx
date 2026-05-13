"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Link } from "@/components/ui/Link";
import { fadeIn } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";
import { FiMail } from "react-icons/fi";

export function CsrSubscribe() {
  const { t } = useI18n();

  return (
    <Section id="csr-subscribe" className="py-8 md:py-12" variants={fadeIn}>
      <Card
        variant="glass"
        cap
        className="p-6 flex flex-col md:flex-row gap-4 md:items-center"
      >
        <div className="flex-1">
          <div
            className="text-xs uppercase tracking-[0.18em] font-semibold
                          text-zinc-500 dark:text-zinc-400"
          >
            {t("csr.subscribe.title")}
          </div>
          <p className="mt-1 typo-body">{t("csr.subscribe.desc")}</p>
        </div>

        <Link
          href="#mail"
          className="inline-flex items-center gap-2 rounded-xl
                     bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 text-sm font-semibold
                     dark:bg-sky-500 dark:hover:bg-sky-400
                     dark:shadow-[0_0_18px_-4px_rgba(56,189,248,0.55)]
                     transition-all"
        >
          <FiMail size={16} aria-hidden />
          {t("csr.subscribe.button")}
        </Link>
      </Card>
    </Section>
  );
}
