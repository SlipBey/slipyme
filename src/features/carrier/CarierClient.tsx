"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Link } from "@/components/ui/Link";
import { PenguMascot } from "@/components/ui/PenguMascot";
import { fadeInUp, stagger } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";
import { FiStar, FiShuffle, FiUsers, FiSend, FiMail } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";

const icons = [FiStar, FiShuffle, FiUsers, FiSend];

type CarierItem = { title: string; desc: string };

export default function CarierClient() {
  const { t, getRaw } = useI18n();
  const culture = getRaw<CarierItem[]>("carrierPage.culture.items") ?? [];
  const timeline = getRaw<CarierItem[]>("carrierPage.timeline.items") ?? [];

  return (
    <Section id="carrier" className="py-8 md:py-14" variants={stagger}>
      <Card
        variant="glass"
        cap
        className="carrier-hero px-6 py-12 text-center sm:px-10 md:py-16"
      >
        <motion.div variants={fadeInUp} className="mx-auto mb-6 w-fit">
          <PenguMascot size={140} animated />
        </motion.div>

        <motion.span variants={fadeInUp} className="typo-eyebrow">
          {t("carrierPage.eyebrow")}
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          className="typo-display mx-auto mt-3 max-w-3xl text-3xl md:text-5xl"
        >
          {t("carrierPage.title")}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="typo-body mx-auto mt-5 max-w-2xl"
        >
          {t("carrierPage.subtitle")}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-amber-700 ring-1 ring-amber-500/30 dark:text-amber-300"
        >
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-amber-500 opacity-60" />
            <span className="relative h-2 w-2 rounded-full bg-amber-500" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider">
            {t("carrierPage.badge")}
          </span>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Link href="#mail">
            <Button icon={FiMail} iconPosition="left">
              {t("carrierPage.cta.email")}
            </Button>
          </Link>
          <Link href="/discord" blank>
            <Button
              variant="secondary"
              icon={FaDiscord}
              iconPosition="left"
              className="flex items-center bg-indigo-600! text-white! ring-indigo-500/60! hover:bg-indigo-700! dark:bg-indigo-500! dark:hover:bg-indigo-400! dark:shadow-[0_0_18px_-4px_rgba(99,102,241,0.55)]!"
            >
              {t("carrierPage.cta.discord")}
            </Button>
          </Link>
        </motion.div>
      </Card>

      <motion.div
        variants={stagger}
        className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
      >
        {culture.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div key={item.title} variants={fadeInUp}>
              <Card variant="glass" className="h-full p-6">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-700 ring-1 ring-sky-400/20 dark:text-sky-300">
                  <Icon size={20} aria-hidden />
                </div>
                <h2 className="text-lg font-black text-zinc-900 dark:text-white">
                  {item.title}
                </h2>
                <p className="typo-body mt-3">{item.desc}</p>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-8">
        <Card variant="glass" className="p-6 sm:p-8">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="typo-eyebrow">
                {t("carrierPage.timeline.eyebrow")}
              </span>
              <h2 className="typo-section-title mt-2">
                {t("carrierPage.timeline.title")}
              </h2>
            </div>
            <p className="typo-muted max-w-md">
              {t("carrierPage.timeline.desc")}
            </p>
          </div>

          <div className="carrier-timeline grid gap-4 md:grid-cols-3">
            {timeline.map((item, index) => (
              <div key={item.title} className="carrier-timeline-item">
                <span className="carrier-timeline-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-black text-zinc-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="typo-body mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}
