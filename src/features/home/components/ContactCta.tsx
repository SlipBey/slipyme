"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/libs/animations";
import { Link } from "@/components/Globals/Link";
import { Button } from "@/components/Globals/Button";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";
import AnimatedSection from "@/components/Globals/AnimatedSection";

export default function ContactCta() {
  const { t } = useI18n();

  return (
    <AnimatedSection id="contact" className="py-5 sm:py-12" mode="view">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-5xl text-center rounded-3xl ring-1 ring-black/10 dark:ring-white/10 bg-white dark:bg-zinc-900 shadow-xl px-6 py-12 sm:px-10"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-sky-700 via-sky-600 to-sky-500 rounded-t-3xl" />

        <div className="flex flex-col items-center gap-6">
          <Image
            src="/resimler/cikartmalar/contact.png"
            alt=""
            aria-hidden="true"
            width={112}
            height={112}
            loading="lazy"
            sizes="(min-width:640px) 112px, 96px"
            className="w-24 sm:w-28"
          />

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            {t("home.contactCta.title")}
          </h2>

          <p className="text-zinc-600 dark:text-zinc-300 max-w-xl text-[15px]">
            {t("home.contactCta.subtitle")}
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              className="mt-2 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl"
            >
              {t("home.contactCta.button")}
            </Button>
          </Link>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}
