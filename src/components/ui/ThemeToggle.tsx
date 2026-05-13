"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { FiMoon, FiSun } from "react-icons/fi";

type ThemeToggleProps = {
  className?: string;
  size?: "sm" | "md";
};

export function ThemeToggle({ className, size = "md" }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  const sizeMap = {
    sm: "h-8 w-8",
    md: "h-9 w-9",
  } as const;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={t("navbar.switchTheme")}
      title={t("navbar.switchTheme")}
      className={cn(
        "relative inline-flex items-center justify-center rounded-full",
        "bg-zinc-100/70 hover:bg-zinc-200/70",
        "dark:bg-white/5 dark:hover:bg-white/10",
        "ring-1 ring-black/5 dark:ring-white/10",
        "text-zinc-700 dark:text-zinc-200",
        "transition-colors",
        sizeMap[size],
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted ? (
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ y: -8, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 8, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-0 grid place-items-center"
          >
            {isDark ? (
              <FiMoon size={16} aria-hidden />
            ) : (
              <FiSun size={16} aria-hidden />
            )}
          </motion.span>
        ) : null}
      </AnimatePresence>
    </button>
  );
}
