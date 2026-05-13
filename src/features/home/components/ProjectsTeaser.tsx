"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Carousel } from "@/components/ui/Carousel";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Badge";
import { ProjectModal } from "@/features/projects/components/ProjectModal";
import { PROJECTS, type Project } from "@/config/projects";
import { fadeInUp, stagger } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { FiArrowRight } from "react-icons/fi";

export function ProjectsTeaser() {
  const { t } = useI18n();
  const [selected, setSelected] = useState<Project | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <Section id="projects" className="py-10 md:py-16" variants={stagger}>
      <motion.h2
        variants={fadeInUp}
        className="typo-section-title text-center mb-2"
      >
        {t("general.projects")}
      </motion.h2>
      <motion.p
        variants={fadeInUp}
        className="typo-body text-center max-w-2xl mx-auto mb-8"
      >
        {t("projectsPage.subtitle")}
      </motion.p>

      <motion.div variants={fadeInUp}>
        <Carousel<Project>
          items={PROJECTS}
          onSelect={setSelected}
          autoSpeed={-48}
          renderCard={(p) => (
            <div
              className={cn(
                "group project-card-accent relative flex flex-col items-start gap-3 rounded-2xl p-5 min-w-65",
                "glass ring-1 ring-black/5 dark:ring-white/10",
                "soft-hover hover:ring-sky-500/40 dark:hover:ring-sky-400/40",
                "hover:shadow-lg dark:hover:shadow-[0_0_30px_-8px_rgba(56,189,248,0.4)]",
                p.status === "archived" && "opacity-75",
              )}
            >
              <div className="flex items-center justify-between w-full">
                <Image
                  src={p.image}
                  alt=""
                  width={56}
                  height={56}
                  loading="lazy"
                  sizes="56px"
                  className="h-14 w-14 rounded-xl object-cover ring-1 ring-black/5 dark:ring-white/10"
                />
                <StatusBadge
                  status={p.status}
                  label={t(`projects.status.${p.status}`)}
                />
              </div>

              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50">
                {t(`${p.langKey}.title`)}
              </h3>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                {t(`${p.langKey}.excerpt`)}
              </p>

              <span
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold
                           text-sky-700 dark:text-sky-400
                           transition-transform group-hover:translate-x-0.5"
              >
                {t("projects.explore")}
                <FiArrowRight size={14} aria-hidden />
              </span>
            </div>
          )}
        />
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-8 text-center">
        <Link href="/projects">
          <Button variant="secondary" icon={FiArrowRight} iconPosition="right">
            {t("home.projectMore")}
          </Button>
        </Link>
      </motion.div>

      <AnimatePresence>
        {selected ? (
          <ProjectModal open project={selected} onClose={close} />
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
