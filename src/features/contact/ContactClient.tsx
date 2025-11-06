"use client";

import ContactForm from "./components/ContactForm";
import ContactSocial from "./components/ContactSocial";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { fadeInUp } from "@/libs/animations";
import { useEffect, useMemo, useState } from "react";

function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const t =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 0));
    setIsTouch(Boolean(t));
  }, []);
  return isTouch;
}

export default function ContactClient() {
  const { t } = useI18n();
  const isTouch = useIsTouchDevice();

  const emailKeys = ["contact", "media", "jobs"] as const;
  const subjectKeys = ["general", "project", "collab", "support"] as const;

  const companyEmails = useMemo(
    () =>
      emailKeys.map((key) => ({
        key,
        label: t(`contact.emails.${key}`),
        email: `${key}@slipyme.com`,
      })),
    [t],
  );

  const subjectOptions = useMemo(
    () =>
      subjectKeys.map((key) => ({
        value: key,
        label: t(`contact.subjects.${key}`),
      })),
    [t],
  );

  return (
    <div id="contact" className="py-5 sm:py-12">
      <motion.section
        initial="hidden"
        animate={isTouch ? "show" : undefined}
        whileInView={isTouch ? undefined : "show"}
        viewport={isTouch ? undefined : { once: true, amount: 0.2 }}
        className="mx-auto mt-6 grid gap-6 lg:grid-cols-2"
      >
        <motion.div
          variants={fadeInUp}
          className="rounded-2xl ring-1 ring-black/10 dark:ring-white/10 bg-white dark:bg-zinc-900 shadow-lg overflow-hidden"
        >
          <div className="h-1 w-full bg-linear-to-r from-sky-700 via-sky-600 to-sky-500" />
          <div className="p-6 sm:p-8">
            <ContactForm subjectOptions={subjectOptions} />
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          transition={{ delay: 0.08 }}
          className="rounded-2xl ring-1 ring-black/10 dark:ring-white/10 bg-white dark:bg-zinc-900 shadow-lg overflow-hidden"
        >
          <div className="h-1 w-full bg-linear-to-r from-sky-700 via-sky-600 to-sky-500" />
          <div className="p-6 sm:p-8">
            <ContactSocial emails={companyEmails} />
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
