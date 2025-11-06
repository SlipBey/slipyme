"use client";

import { FC } from "react";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { Link } from "@/components/Globals/Link";
import { useI18n } from "@/lib/i18n";

type PageItem = { text: string; url: string };

const MainNavClient: FC<{ pages: PageItem[] }> = ({ pages }) => {
  const { t } = useI18n();
  const pathname = usePathname();

  return (
    <div className="hidden sm:flex items-center gap-6">
      {pages.map((p) => {
        const active = pathname === p.url;

        return (
          <Link
            key={p.url}
            href={p.url}
            className={classNames(
              "relative text-[15px] font-medium transition-colors group",
              active
                ? "text-zinc-900 dark:text-white"
                : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white",
            )}
          >
            <span className="px-1">{t(p.text)}</span>
            <span
              aria-hidden
              className={classNames(
                "absolute left-0 -bottom-2 h-0.5 rounded-full bg-linear-to-r from-sky-500 via-sky-600 to-blue-600 transition-all duration-300",
                active
                  ? "w-full opacity-100"
                  : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100",
              )}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default MainNavClient;
