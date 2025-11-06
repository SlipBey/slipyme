"use client";

import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Carousel } from "@/components/Globals/Carousel";
import Image from "next/image";
import { Project, PROJECTS } from "@/libs/config/projects";
import ProjectModal from "@/components/Projects/Modal";
import { useI18n } from "@/lib/i18n";

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const { t } = useI18n();

  const closeDetails = useCallback(() => setSelected(null), []);

  const StatusChip = ({ active }: { active: boolean }) => (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-[11px] font-semibold rounded-full ${
        active
          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-200 ring-1 ring-green-200/60"
          : "bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-slate-200 ring-1 ring-white/20"
      }`}
    >
      {active
        ? t("projectsPage.badges.active")
        : t("projectsPage.badges.inactive")}
    </span>
  );

  return (
    <>
      <Carousel<Project>
        items={PROJECTS}
        onSelect={setSelected}
        autoSpeed={-120}
        inertiaDecay={0.965}
        renderCard={(p) => (
          <div
            className={`relative flex min-w-[260px] flex-col items-center rounded-2xl
            border border-gray-300 dark:border-zinc-700 p-6 text-center shadow-sm
            transition-transform hover:-translate-y-1 bg-white dark:bg-zinc-900
            text-black dark:text-gray-100 ${!p.active ? "opacity-60" : ""}`}
          >
            <div className="absolute right-3 top-3">
              <StatusChip active={!!p.active} />
            </div>

            <Image
              src={p.image}
              alt={t(`${p.langKey}.title`)}
              width={64}
              height={64}
              loading="lazy"
              sizes="64px"
              className="mb-4 h-16 w-16 rounded-full object-cover"
            />

            <h3 className="text-lg font-semibold">{t(`${p.langKey}.title`)}</h3>

            <p className="mb-4 mt-2 text-sm text-gray-600 dark:text-gray-300">
              {t(`${p.langKey}.excerpt`).slice(0, 30)}
            </p>

            <button className="rounded-md border border-blue-500 dark:border-blue-400 px-4 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 transition hover:bg-blue-50 dark:hover:bg-zinc-800 active:scale-95">
              {t("projects.explore")}
            </button>
          </div>
        )}
      />

      <AnimatePresence>
        <ProjectModal
          open={!!selected}
          project={selected}
          onClose={closeDetails}
        />
      </AnimatePresence>
    </>
  );
}
