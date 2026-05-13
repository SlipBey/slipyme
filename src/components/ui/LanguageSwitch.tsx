"use client";

import { useMemo } from "react";
import { useI18n } from "@/lib/i18n";
import { LANG_SHORT, SUPPORTED_LANGS, type Lang } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

type LanguageSwitchProps = { className?: string };

export function LanguageSwitch({ className }: LanguageSwitchProps) {
  const { lang, setLang, t } = useI18n();
  const activeIndex = useMemo(
    () => Math.max(0, SUPPORTED_LANGS.indexOf(lang)),
    [lang],
  );

  return (
    <div
      role="tablist"
      aria-label={t("navbar.switchLang")}
      className={cn(
        "language-switch relative inline-grid grid-cols-2 items-center",
        className,
      )}
    >
      <span
        aria-hidden
        className="language-switch-thumb"
        style={{ transform: `translate3d(${activeIndex * 100}%, 0, 0)` }}
      />

      {SUPPORTED_LANGS.map((code: Lang) => {
        const active = lang === code;

        return (
          <button
            key={code}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => setLang(code)}
            className={cn(
              "language-switch-button",
              active
                ? "text-white"
                : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white",
            )}
          >
            {LANG_SHORT[code]}
          </button>
        );
      })}
    </div>
  );
}
