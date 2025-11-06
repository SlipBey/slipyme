"use client";

import { FC } from "react";
import classNames from "classnames";
import { usePathname } from "next/navigation";

import { Link } from "@/components/Globals/Link";
import { useI18n } from "@/lib/i18n";

type PageItem = { text: string; url: string };

const FootNavClient: FC<{ pages: PageItem[] }> = ({ pages }) => {
  const { t } = useI18n();
  const pathname = usePathname();
  return (
    <div className="sm:hidden fixed bottom-3 inset-x-0 z-30">
      <div className="mx-2 mb-2 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-lg border border-gray-300 dark:border-zinc-700">
        <div className="flex overflow-x-auto gap-5 px-4 py-3 justify-center text-sm">
          {pages.map((page) => {
            const active = pathname === page.url;
            return (
              <Link
                key={page.url}
                href={page.url}
                className={classNames(
                  "whitespace-nowrap hover:text-sky-600 dark:hover:text-sky-400",
                  { "text-sky-500": active },
                )}
              >
                {t(page.text)}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FootNavClient;
