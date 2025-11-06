"use client";

import { useMemo } from "react";
import Image from "next/image";
import type { Project } from "@/libs/config/projects";
import { useI18n } from "@/lib/i18n";

type Props = {
  project: Project;
  onOpen: (p: Project) => void;
  className?: string;
};

export default function ProjectCard({
  project,
  onOpen,
  className = "",
}: Props) {
  const { t } = useI18n();

  const badge = useMemo(
    () => (
      <span
        className={`ml-auto inline-flex items-center px-2 py-0.5 text-[11px] font-semibold rounded-full
      ${
        project.active
          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-200 ring-1 ring-green-200/60"
          : "bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-slate-200 ring-1 ring-white/20"
      }`}
      >
        {project.active
          ? t("projectsPage.badges.active")
          : t("projectsPage.badges.inactive")}
      </span>
    ),
    [t, project.active],
  );

  return (
    <article
      className={`group rounded-2xl bg-white dark:bg-[#16181d]
                  ring-1 ring-black/10 dark:ring-white/10 p-5 flex flex-col
                  transition hover:-translate-y-0.5 hover:ring-blue-400/60
                  ${!project.active ? "opacity-60" : ""} ${className}`}
    >
      <div className="flex items-center gap-3">
        <Image
          src={project.image}
          alt=""
          width={40}
          height={40}
          loading="lazy"
          sizes="40px"
          className="h-10 w-10 object-contain rounded"
        />
        <div className="text-base font-semibold text-slate-900 dark:text-slate-100">
          {t(`${project.langKey}.title`)}
        </div>
        {badge}
      </div>

      <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
        {t(`${project.langKey}.excerpt`)}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => onOpen(project)}
          className="inline-flex items-center rounded-md px-3 py-1.5 text-sm font-semibold ring-1
                     bg-white dark:bg-[#0f1216] text-slate-800 dark:text-slate-200
                     ring-black/10 dark:ring-white/10 hover:ring-blue-400/60"
          aria-label={`${t(`${project.langKey}.title`)} - ${t("projects.details.open")}`}
        >
          {t("projects.details.open")}
        </button>
      </div>
    </article>
  );
}
