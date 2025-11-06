"use client";

import { PROJECT_FILTERS } from "@/libs/config/projects";
import { useI18n } from "@/lib/i18n";
import { Link } from "@/components/Globals/Link";

export type TypeFilter = "all" | "software" | "design";

type Props = {
  active: TypeFilter;
  setActive: (v: TypeFilter) => void;
  onSoon: () => void;
  className?: string;
};

export default function ProjectsFilters({
  active,
  setActive,
  onSoon,
  className = "",
}: Props) {
  const { t } = useI18n();

  const base =
    "inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium ring-1 transition";
  const normal =
    "bg-white dark:bg-[#16181d] text-slate-800 dark:text-slate-200 ring-black/10 dark:ring-white/10 hover:ring-blue-400/60";
  const activeCls = "bg-blue-600 text-white ring-blue-500/60";

  const normalize = (v?: string): TypeFilter | null => {
    if (!v) return null;
    if (v === "solution") return "software";
    if (v === "all" || v === "software" || v === "design") return v;
    return null;
  };

  return (
    <div
      className={`flex flex-wrap gap-2 justify-center md:justify-start ${className}`}
    >
      {PROJECT_FILTERS.map((item: any, i: number) => {
        const label = t(item.key);

        if (item.kind === "filter") {
          const mapped = normalize(item.value);
          if (!mapped) return null;
          const isActive = active === mapped;

          return (
            <button
              key={i}
              onClick={() => setActive(mapped)}
              className={`${base} ${isActive ? activeCls : normal}`}
            >
              {label}
            </button>
          );
        }

        if (item.kind === "link") {
          return (
            <Link key={i} href={item.href!} className={`${base} ${normal}`}>
              {label}
            </Link>
          );
        }

        return (
          <button key={i} onClick={onSoon} className={`${base} ${normal}`}>
            {label}
          </button>
        );
      })}
    </div>
  );
}
