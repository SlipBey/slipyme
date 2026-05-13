"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { IconType } from "react-icons";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  icon?: IconType;
  iconPosition?: "left" | "right";
  children?: ReactNode;
};

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-xl font-semibold " +
  "transition-all duration-200 outline-none " +
  "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 " +
  "focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950 " +
  "disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none " +
  "active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-sky-600 text-white hover:bg-sky-700 shadow-sm shadow-sky-900/10 " +
    "dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-white " +
    "dark:shadow-[0_0_24px_-4px_rgba(56,189,248,0.55)]",
  secondary:
    "bg-white text-sky-700 ring-1 ring-sky-500/40 hover:bg-sky-50 " +
    "dark:bg-white/5 dark:text-sky-300 dark:ring-white/10 dark:hover:bg-white/10",
  ghost:
    "bg-transparent text-sky-700 hover:bg-sky-50 " +
    "dark:text-sky-300 dark:hover:bg-white/5",
  outline:
    "bg-transparent text-zinc-800 ring-1 ring-zinc-300 hover:bg-zinc-50 " +
    "dark:text-zinc-100 dark:ring-white/15 dark:hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const iconSize: Record<Size, number> = {
  sm: 14,
  md: 16,
  lg: 18,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      variant = "primary",
      size = "md",
      loading,
      icon: Icon,
      iconPosition = "right",
      children,
      disabled,
      ...rest
    },
    ref,
  ) {
    const iconSizePx = iconSize[size];
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        {...rest}
      >
        {Icon && iconPosition === "left" ? (
          <Icon
            width={iconSizePx}
            height={iconSizePx}
            className="shrink-0"
            aria-hidden
          />
        ) : null}
        <span>{children}</span>
        {Icon && iconPosition === "right" ? (
          <Icon
            width={iconSizePx}
            height={iconSizePx}
            className="shrink-0 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        ) : null}
        {loading ? (
          <span
            aria-hidden
            className="absolute inset-0 grid place-items-center bg-inherit rounded-xl"
          >
            <span className="h-4 w-4 rounded-full border-2 border-current border-r-transparent animate-spin" />
          </span>
        ) : null}
      </button>
    );
  },
);
