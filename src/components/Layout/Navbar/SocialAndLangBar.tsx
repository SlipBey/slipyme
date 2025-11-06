"use client";

import { FC, useMemo } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { Link } from "@/components/Globals/Link";
import { SOCIAL } from "@/libs/config/social";
import { SHORT_LINKS } from "@/libs/config/pages";
import { useI18n } from "@/lib/i18n";
import { FaEarthAmericas } from "react-icons/fa6";

const SocialAndLangBar: FC = () => {
  const { lang, setLang, t } = useI18n();
  const pathname = usePathname();

  const nextLang = lang === "tr" ? "en" : "tr";
  const nextLangLabel = lang === "tr" ? "English" : "Türkçe";

  return (
    <nav className="bg-white/75 dark:bg-zinc-900/75 backdrop-blur-xl border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-4xl xl:max-w-7xl px-4 lg:px-0 py-3 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-sm">
          {SHORT_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={classNames(
                "hover:text-sky-600 dark:hover:text-sky-400 transition-colors",
                pathname == l.href
                  ? "text-sky-600 dark:text-sky-400"
                  : "text-zinc-700 dark:text-zinc-300",
              )}
            >
              {t(l.name)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {SOCIAL.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              aria-label={`Slipyme ${s.alt}`}
              className="text-[18px] text-zinc-500 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-100 transition-colors"
            >
              <s.icon aria-hidden="true" focusable="false" />
            </Link>
          ))}
          <button
            onClick={() => setLang(nextLang)}
            className="ml-3 inline-flex items-center gap-2 h-8 px-3 rounded-full text-sm font-semibold
                       bg-zinc-100/70 dark:bg-white/5 text-zinc-800 dark:text-zinc-200
                       ring-1 ring-black/5 dark:ring-white/10 hover:bg-zinc-200/70 dark:hover:bg-white/10"
          >
            <FaEarthAmericas
              className="text-[14px]"
              aria-hidden="true"
              focusable="false"
            />
            {nextLangLabel}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SocialAndLangBar;
