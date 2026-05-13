import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { STATUS_STYLES, type ProjectStatus } from "@/config/projects";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  variant?: "neutral" | "brand" | "muted";
  size?: "sm" | "md";
};

const sizeMap = {
  sm: "h-5 px-2 text-[10px]",
  md: "h-6 px-2.5 text-xs",
} as const;

const variantMap = {
  neutral:
    "bg-zinc-100 text-zinc-700 ring-1 ring-zinc-200 dark:bg-white/5 dark:text-zinc-300 dark:ring-white/10",
  brand: "bg-sky-500/10 text-sky-700 ring-1 ring-sky-500/30 dark:text-sky-300",
  muted:
    "bg-transparent text-zinc-500 ring-1 ring-zinc-300 dark:text-zinc-400 dark:ring-white/10",
} as const;

export function Badge({
  children,
  className,
  variant = "neutral",
  size = "md",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-semibold uppercase tracking-wide",
        sizeMap[size],
        variantMap[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

type StatusBadgeProps = {
  status: ProjectStatus;
  label: string;
  className?: string;
};

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  const style = STATUS_STYLES[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider",
        style.pill,
        className,
      )}
    >
      <span aria-hidden className={cn("h-1.5 w-1.5 rounded-full", style.dot)} />
      {label}
    </span>
  );
}
