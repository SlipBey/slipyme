"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Link } from "@/components/ui/Link";
import { useI18n } from "@/lib/i18n";
import { POLICIES, POLICIES_EN } from "./lib/policies";

type Props = { slug: string };

export default function PoliciesClient({ slug }: Props) {
  const { lang, t } = useI18n();
  const list = lang === "en" ? POLICIES_EN : POLICIES;
  const policy = list.find((p) => p.slug === slug);

  if (!policy) {
    return (
      <Section className="py-16">
        <Card variant="glass" className="p-10 text-center">
          <p className="typo-body">
            {lang === "en" ? "Policy not found." : "Politika bulunamadı."}
          </p>
        </Card>
      </Section>
    );
  }

  return (
    <Section className="py-12 md:py-16">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Card variant="glass" cap className="p-8 md:p-10 space-y-10">
          <div className="text-center">
            <h1 className="typo-page-title">{policy.title}</h1>
            <p className="typo-muted mt-2">
              {t("policies.lastUpdated")}: {policy.updatedAt}
            </p>
          </div>

          <div className="space-y-8">
            {policy.content.map((section, idx) => (
              <div
                key={idx}
                className="border-l-2 border-sky-500/60 dark:border-sky-400/60 pl-5"
              >
                <h2 className="text-lg md:text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-50">
                  {section.heading}
                </h2>
                <div className="space-y-2">
                  {section.body.map((p, i) => (
                    <p key={i} className="typo-body">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            className="border-t border-black/10 dark:border-white/10 pt-6
                          text-center text-sm text-zinc-500 dark:text-zinc-400 space-y-2"
          >
            <p>{t("policies.dataController")}: Slipyme Company</p>
            <p>
              {t("policies.contactEmail")}:{" "}
              <Link
                href="mailto:contact@slipyme.com"
                className="text-sky-700 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
              >
                contact@slipyme.com
              </Link>
            </p>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}
