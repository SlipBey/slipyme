"use client";

import { useState, useCallback, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import type { Project } from "@/config/projects";
import { fadeIn, stagger } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";

type ProjectsGridProps = {
  projects: Project[];
  className?: string;
  emptyFallback?: ReactNode;
};

export function ProjectsGrid({
  projects,
  className,
  emptyFallback,
}: ProjectsGridProps) {
  const { t } = useI18n();
  const [selected, setSelected] = useState<Project | null>(null);

  const open = useCallback((p: Project) => setSelected(p), []);
  const close = useCallback(() => setSelected(null), []);
  const has = projects.length > 0;

  return (
    <>
      {has ? (
        <motion.div
          className={cn(
            "grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
            className,
          )}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((p, i) => (
            <motion.div key={`${p.langKey}-${i}`} variants={fadeIn}>
              <ProjectCard project={p} onOpen={open} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        (emptyFallback ?? (
          <div
            className="mt-8 rounded-2xl p-8 text-center
                       glass ring-1 ring-black/5 dark:ring-white/10"
          >
            <p className="typo-body">{t("projectsPage.empty")}</p>
          </div>
        ))
      )}

      <AnimatePresence>
        {selected ? (
          <ProjectModal open project={selected} onClose={close} />
        ) : null}
      </AnimatePresence>
    </>
  );
}
