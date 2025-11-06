"use client";

import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/libs/animations";
import Image from "next/image";
import { Link } from "@/components/Globals/Link";
import { Button } from "@/components/Globals/Button";
import { useI18n } from "@/lib/i18n";

export default function AboutSection() {
  const { t } = useI18n();

  return (
    <AnimatedSection id="about" className="py-8 md:py-14" mode="view">
      <motion.div
        variants={fadeIn}
        className="relative overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/10 bg-white dark:bg-zinc-900 shadow-lg"
      >
        <div className="h-1 w-full bg-linear-to-r from-sky-700 via-sky-600 to-sky-500" />
        <div className="px-6 sm:px-10 py-8 md:py-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          <motion.div
            variants={fadeInUp}
            className="text-black dark:text-gray-100"
          >
            <h2 className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight">
              {t("general.about")}
            </h2>

            <div className="mt-4 space-y-3 text-sm md:text-[15px] leading-7 text-slate-700 dark:text-slate-300">
              {t("about")
                .split(/\n\s*\n/)
                .slice(0, 1)
                .map((p, i) => (
                  <p key={i}>{p.trim()}</p>
                ))}
            </div>

            <div className="mt-6">
              <Link href="/about">
                <Button>{t("home.aboutMore")}</Button>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mx-auto">
            <Image
              src="/resimler/penguen.png"
              alt=""
              aria-hidden="true"
              width={288}
              height={288}
              loading="lazy"
              sizes="(min-width:1280px) 288px, (min-width:1024px) 256px, (min-width:640px) 224px, 176px"
              className="w-44 sm:w-56 lg:w-64 xl:w-72"
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}
