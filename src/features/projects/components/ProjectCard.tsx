"use client";

import Image from "next/image";
import type { Project } from "@/config/projects";
import { StatusBadge } from "@/components/ui/Badge";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { FiArrowRight } from "react-icons/fi";

type ProjectCardProps = {
  project: Project;
  onOpen: (p: Project) => void;
  className?: string;
};

export function ProjectCard({ project, onOpen, className }: ProjectCardProps) {
  const { t } = useI18n();

  return (
    <article
      className={cn(
        "group project-card-accent relative flex flex-col gap-3 rounded-2xl p-5",
        "glass ring-1 ring-black/5 dark:ring-white/10",
        "soft-hover",
        "hover:ring-sky-500/40 dark:hover:ring-sky-400/40",
        "hover:shadow-lg dark:hover:shadow-[0_0_30px_-8px_rgba(56,189,248,0.4)]",
        project.status === "archived" && "opacity-75",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <Image
          src={project.image}
          alt=""
          width={48}
          height={48}
          loading="lazy"
          sizes="48px"
          className="h-12 w-12 rounded-xl object-cover ring-1 ring-black/5 dark:ring-white/10"
        />
        <StatusBadge
          status={project.status}
          label={t(`projects.status.${project.status}`)}
        />
      </div>

      <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50">
        {t(`${project.langKey}.title`)}
      </h3>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
        {t(`${project.langKey}.excerpt`)}
      </p>

      <div className="mt-auto pt-2">
        <button
          onClick={() => onOpen(project)}
          className="group/btn inline-flex items-center gap-1.5 text-sm font-semibold
                     text-sky-700 dark:text-sky-400
                     hover:text-sky-800 dark:hover:text-sky-300 transition-colors"
          aria-label={`${t(`${project.langKey}.title`)} — ${t("projects.details.open")}`}
        >
          {t("projects.details.open")}
          <FiArrowRight
            size={14}
            className="transition-transform group-hover/btn:translate-x-0.5"
            aria-hidden
          />
        </button>
      </div>
    </article>
  );
}
