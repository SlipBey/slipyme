import { useRouter } from "next/router";
import { FC } from "react";
import { AiOutlineGlobal } from "react-icons/ai";

export const LanguageDropdown: FC = () => {
  const router = useRouter();

  const changeLanguage = () => {
    const currentIndex = (router.locales || []).indexOf(router.locale || "");
    const nextIndex = (currentIndex + 1) % (router.locales || []).length;
    const nextLocale = (router.locales || [])[nextIndex];

    router.push(router.pathname, router.asPath, { locale: nextLocale });
  };

  return (
    <div>
      <button
        className="inline-flex items-center gap-1"
        onClick={changeLanguage}
      >
        <AiOutlineGlobal className="text-2xl" />
        <span className="uppercase">{router.locale}</span>
      </button>
    </div>
  );
};
