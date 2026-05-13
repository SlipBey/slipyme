"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Link } from "@/components/ui/Link";
import { fadeIn, fadeInUp, stagger } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";
import { FiArrowRight } from "react-icons/fi";

export function ProjectsHero() {
  const { t } = useI18n();

  return (
    <Section id="projects-hero" className="py-8 md:py-12" variants={stagger}>
      <motion.div
        variants={fadeIn}
        className="relative overflow-hidden rounded-3xl ring-1 ring-white/15 shadow-2xl
                   bg-linear-to-br from-sky-700 via-sky-600 to-cyan-500
                   dark:from-[#0a1929] dark:via-[#0c2236] dark:to-[#0a2c44]
                   px-6 sm:px-10 lg:px-14 py-10 md:py-14
                   flex flex-col md:flex-row items-center justify-between gap-8 text-white"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full
                     bg-white/15 blur-3xl"
        />

        <div className="flex-1 relative">
          <motion.span
            variants={fadeInUp}
            className="inline-block typo-eyebrow text-white/80!"
          >
            {t("home.eyebrow")}
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="typo-display text-3xl md:text-4xl lg:text-5xl text-white! mt-3"
          >
            {t("projectsPage.title")}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-3 text-white/85 max-w-2xl text-sm md:text-base"
          >
            {t("projectsPage.subtitle")}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-6">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl
                         bg-white text-sky-700 px-5 py-2.5 font-semibold
                         ring-1 ring-white/70 hover:bg-white/95 transition"
            >
              {t("navbar.button.project")}
              <FiArrowRight
                size={16}
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          className="shrink-0 select-none relative"
          whileHover={{ rotate: 3, scale: 1.04 }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
        >
          <Image
            src="/resimler/cikartmalar/telefon.png"
            alt=""
            aria-hidden
            width={224}
            height={224}
            priority
            sizes="(min-width:1024px) 224px, (min-width:768px) 160px, 96px"
            className="w-24 sm:w-32 md:w-40 lg:w-56 object-contain drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </Section>
  );
}
