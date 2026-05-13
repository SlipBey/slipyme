"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Link } from "@/components/ui/Link";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/config/navigation";

export function MainNavClient({ pages }: { pages: NavItem[] }) {
  const { t } = useI18n();
  const pathname = usePathname();

  return (
    <div className="hidden sm:flex items-center gap-2">
      {pages.map((p) => {
        const active = pathname === p.href || pathname.startsWith(`${p.href}/`);
        return (
          <Link
            key={p.href}
            href={p.href}
            className={cn(
              "relative px-4 py-2 rounded-lg text-[15px] font-medium transition-colors",
              active
                ? "text-zinc-900 dark:text-white"
                : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",
            )}
          >
            <span className="relative z-10">{t(p.text)}</span>
            {active ? (
              <motion.span
                layoutId="primary-nav-active"
                className="absolute inset-0 rounded-lg
                           bg-zinc-100/80 dark:bg-white/5
                           ring-1 ring-black/5 dark:ring-white/10"
                transition={{ type: "spring", stiffness: 500, damping: 38 }}
              />
            ) : null}
          </Link>
        );
      })}
    </div>
  );
}
