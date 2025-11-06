"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { POLICIES, POLICIES_EN } from "./libs/policies";
import { Link } from "@/components/Globals/Link";

type Props = { slug: string };

export default function PoliciesClient({ slug }: Props) {
  const { lang, t } = useI18n();
  const list = lang === "en" ? POLICIES_EN : POLICIES;
  const policy = list.find((p) => p.slug === slug);

  if (!policy) {
    return (
      <div className="bg-app min-h-[40vh] grid place-items-center p-10">
        <div className="text-center text-sm opacity-70">
          {lang === "en" ? "Policy not found." : "Politika bulunamadı."}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-app min-h-screen py-16 px-5 sm:px-10">
      <motion.div
        className="max-w-3xl mx-auto bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-lg p-10 space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-center">
          <h1 className="typo-page-title">{policy.title}</h1>
          <p className="typo-muted mt-2">
            {t("policies.lastUpdated")}: {policy.updatedAt}
          </p>
        </div>

        <div className="space-y-8">
          {policy.content.map((section, idx) => (
            <div key={idx} className="border-l-4 border-sky-500 pl-4">
              <h2 className="typo-section-title mb-2">{section.heading}</h2>
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

        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <p>{t("policies.dataController")}: Slipyme Company</p>
          <p>
            {t("policies.contactEmail")}:{" "}
            <Link
              href="mailto:contact@slipyme.com"
              className="text-sky-600 dark:text-sky-400 underline"
            >
              contact@slipyme.com
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
