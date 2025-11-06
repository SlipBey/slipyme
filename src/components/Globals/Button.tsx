"use client";
import * as React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all";
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.99] shadow ring-1 ring-blue-500/60",
    secondary:
      "bg-white text-blue-700 ring-1 ring-blue-500/60 hover:bg-blue-50 dark:bg-zinc-900 dark:text-blue-400 dark:hover:bg-zinc-800",
    ghost:
      "bg-transparent text-blue-700 hover:bg-blue-50 dark:text-blue-300 dark:hover:bg-zinc-800",
  } as const;
  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-5 text-base",
  } as const;
  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
