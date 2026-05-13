"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "./components/ContactForm";
import { ContactSidebar } from "./components/ContactSidebar";
import { useI18n } from "@/lib/i18n";
import { fadeInUp, stagger } from "@/lib/motion";

const EMAIL_KEYS = ["contact", "media", "jobs"] as const;
const SUBJECT_KEYS = ["general", "project", "collab", "support"] as const;

export default function ContactClient() {
  const { t } = useI18n();

  const companyEmails = useMemo(
    () =>
      EMAIL_KEYS.map((key) => ({
        label: t(`contact.emails.${key}`),
        email: `${key}@slipyme.com`,
      })),
    [t],
  );

  const subjectOptions = useMemo(
    () =>
      SUBJECT_KEYS.map((key) => ({
        value: key,
        label: t(`contact.subjects.${key}`),
      })),
    [t],
  );

  return (
    <Section id="contact" className="py-10 md:py-14" variants={stagger}>
      <div className="grid items-stretch gap-6 lg:grid-cols-[1.04fr_.96fr]">
        <motion.div variants={fadeInUp}>
          <Card
            variant="glass"
            cap
            className="h-full p-6 shadow-xl sm:p-8 lg:p-9"
          >
            <ContactForm subjectOptions={subjectOptions} />
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card
            variant="glass"
            cap
            className="h-full overflow-hidden p-6 shadow-xl sm:p-8 lg:p-9"
          >
            <ContactSidebar emails={companyEmails} />
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
