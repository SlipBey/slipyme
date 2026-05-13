"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/components/ui/Link";
import { LanguageSwitch } from "@/components/ui/LanguageSwitch";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SOCIAL_LINKS } from "@/config/social";
import { SECONDARY_NAV } from "@/config/navigation";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function TopBar() {
  const { t } = useI18n();
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "border-b border-black/5 dark:border-white/10",
        "bg-white/70 dark:bg-zinc-950/70",
        "backdrop-blur-xl",
      )}
    >
      <div
        className="mx-auto max-w-4xl xl:max-w-7xl px-4 lg:px-0 py-2.5
                   flex flex-col-reverse md:flex-row items-center justify-between gap-3"
      >
        <nav
          className="flex items-center gap-5 text-sm"
          aria-label={t("navbar.secondaryAria")}
        >
          {SECONDARY_NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-sky-600 dark:hover:text-sky-400",
                  active
                    ? "text-sky-600 dark:text-sky-400 font-semibold"
                    : "text-zinc-600 dark:text-zinc-400",
                )}
              >
                {t(item.text)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            {SOCIAL_LINKS.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={t("footer.socialAria", { label: s.label })}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full
                             text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/70
                             dark:text-zinc-400 dark:hover:text-white dark:hover:bg-white/5
                             transition-colors"
                >
                  <Icon size={16} aria-hidden />
                </Link>
              );
            })}
          </div>
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
