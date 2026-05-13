"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Link } from "@/components/ui/Link";
import { PROJECT_FILTERS } from "@/config/projects";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { fadeIn } from "@/lib/motion";

export type ProjectsTypeFilter = "all" | "software" | "design";

type ProjectsFiltersProps = {
  active: ProjectsTypeFilter;
  setActive: (v: ProjectsTypeFilter) => void;
  onSoon: () => void;
};

const normalize = (v?: string): ProjectsTypeFilter | null => {
  if (!v) return null;
  if (v === "software" || v === "design" || v === "all") return v;
  return null;
};

export function ProjectsFiltersSection({
  active,
  setActive,
  onSoon,
}: ProjectsFiltersProps) {
  const { t } = useI18n();

  const baseClass =
    "project-filter-card inline-flex min-h-12 items-center justify-center rounded-2xl px-5 py-3 text-sm font-black ring-1";
  const inactiveClass =
    "text-zinc-700 dark:text-zinc-300 ring-sky-900/10 dark:ring-white/10";
  const activeClass = "project-filter-card-active text-white ring-sky-300/70";

  return (
    <Section id="projects-filters" className="py-2 md:py-5" variants={fadeIn}>
      <motion.div
        variants={fadeIn}
        className="flex max-w-5xl flex-wrap gap-3 sm:gap-4"
      >
        {PROJECT_FILTERS.map((item) => {
          const label = t(item.key);
          const key = `${item.kind}-${item.value ?? item.href ?? item.key}`;
          if (item.kind === "filter") {
            const mapped = normalize(item.value);
            if (!mapped) return null;
            const isActive = active === mapped;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActive(mapped)}
                data-active={isActive ? "true" : "false"}
                className={cn(
                  baseClass,
                  isActive ? activeClass : inactiveClass,
                )}
              >
                <span className="project-filter-card-dot" aria-hidden />
                {label}
              </button>
            );
          }
          if (item.kind === "link" && item.href) {
            return (
              <Link
                key={key}
                href={item.href}
                className={cn(baseClass, inactiveClass)}
              >
                <span className="project-filter-card-dot" aria-hidden />
                {label}
              </Link>
            );
          }
          return (
            <button
              key={key}
              type="button"
              onClick={onSoon}
              className={cn(baseClass, inactiveClass)}
            >
              <span className="project-filter-card-dot" aria-hidden />
              {label}
            </button>
          );
        })}
      </motion.div>
    </Section>
  );
}
