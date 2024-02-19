/* eslint-disable @typescript-eslint/no-explicit-any */

import { FC, useEffect, useState } from "react";
import { Link } from "@/components/Globals/Link";
import classNames from "classnames";
import { useRouter } from "next/router";
import icon from "@/assets/icon.svg";
import { CustomImage } from "@/components/Globals/CustomImage";
import { PAGES } from "@/libs/config/pages";
import { LanguageDropdown } from "./language";
import { useLocaleParser } from "@/libs/localeParser";

export const Navbar: FC = () => {
  const parser = useLocaleParser();
  const router = useRouter();

  const [top, setTop] = useState<boolean>(false);

  useEffect(() => {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      )
        setTop(true);
      else setTop(false);
    };
  }, []);

  return (
    <header className="py-2 sticky top-0 w-full z-10">
      <nav
        className={classNames(
          "px-8 py-2 flex items-center justify-between rounded-full duration-500",
          { "backdrop-blur-6xl bg-gray-700/90": top },
        )}
      >
        <div>
          <CustomImage className="w-16 rounded-full" src={icon} alt="" />
        </div>
        <div className="hidden md:flex flex-col md:flex-row gap-5">
          {PAGES.map((page, idx) => (
            <Link
              className={classNames(
                "text-lg font-lg hover:text-blue-600 duration-200",
                {
                  "text-blue-600 underline underline-offset-8":
                    page.url == router.asPath,
                },
              )}
              key={idx}
              href={page.url}
            >
              {parser.get(page.text as any)}
            </Link>
          ))}
        </div>
        <LanguageDropdown />
      </nav>
    </header>
  );
};
