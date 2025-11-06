"use client";

import { useState, useMemo, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectModal from "./Modal";
import { fadeIn } from "@/libs/animations";
import type { Project } from "@/libs/config/projects";
import ProjectCard from "./Card";
import { useI18n } from "@/lib/i18n";

type Props = {
  projects: Project[];
  className?: string;
  emptyFallback?: React.ReactNode;
};

export default function ProjectsGrid({
  projects,
  className = "",
  emptyFallback,
}: Props) {
  const { t } = useI18n();
  const [selected, setSelected] = useState<Project | null>(null);

  const hasItems = useMemo(() => projects.length > 0, [projects]);
  const openDetails = useCallback((p: Project) => setSelected(p), []);
  const closeDetails = useCallback(() => setSelected(null), []);

  return (
    <>
      <motion.div
        className={`grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${className}`}
        variants={fadeIn}
      >
        {hasItems &&
          projects.map((p, idx) => (
            <ProjectCard key={idx} project={p} onOpen={openDetails} />
          ))}
      </motion.div>

      {!hasItems &&
        (emptyFallback ?? (
          <div className="mt-8 rounded-2xl bg-white dark:bg-[#16181d] ring-1 ring-black/10 dark:ring-white/10 p-8 text-center">
            <p className="text-slate-700 dark:text-slate-300">
              {t("projectsPage.empty")}
            </p>
          </div>
        ))}

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
