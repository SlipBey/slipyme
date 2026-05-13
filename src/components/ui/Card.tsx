import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  as?: ElementType;
  variant?: "solid" | "glass" | "outline";
  className?: string;
  children: ReactNode;
  cap?: boolean;
  capClassName?: string;
};

const variantStyles = {
  solid:
    "bg-white dark:bg-zinc-900 ring-1 ring-black/5 dark:ring-white/10 shadow-sm",
  glass:
    "liquid-glass rounded-2xl ring-1 ring-black/5 dark:ring-white/10 shadow-sm",
  outline: "bg-transparent ring-1 ring-zinc-300 dark:ring-white/10",
} as const;

export function Card({
  as: Tag = "div",
  variant = "glass",
  className,
  children,
  cap = true,
  capClassName,
}: CardProps) {
  return (
    <Tag
      className={cn(
        "relative overflow-hidden rounded-2xl soft-hover",
        cap && "card-accent pt-0.5",
        variantStyles[variant],
        className,
      )}
    >
      {capClassName ? (
        <span aria-hidden className={cn("hidden", capClassName)} />
      ) : null}
      {children}
    </Tag>
  );
}
