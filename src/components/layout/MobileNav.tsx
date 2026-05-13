"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/components/ui/Link";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { PRIMARY_NAV } from "@/config/navigation";

export function MobileNav() {
  const pathname = usePathname();
  const { t } = useI18n();

  return (
    <nav
      aria-label={t("navbar.mobileAria")}
      className="sm:hidden fixed bottom-3 inset-x-0 z-40 px-3"
    >
      <div
        className="mx-auto max-w-md rounded-2xl
                   glass-strong shadow-2xl
                   ring-1 ring-black/5 dark:ring-white/10"
      >
        <ul className="flex justify-around items-stretch">
          {PRIMARY_NAV.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <li key={item.href} className="flex-1">
                <Link
                  href={item.href}
                  className={cn(
                    "flex flex-col items-center justify-center gap-1 px-2 py-2.5 rounded-xl transition-colors",
                    active
                      ? "text-sky-600 dark:text-sky-400"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white",
                  )}
                >
                  {item.icon && <item.icon size={18} aria-hidden />}
                  <span
                    className={cn(
                      "text-[11px] font-medium",
                      active && "font-semibold",
                    )}
                  >
                    {t(item.text)}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
