"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dict, type Lang } from "./dict";

function translate(key: string, lang: Lang, args?: Record<string, string>) {
  let s = dict[key]?.[lang] ?? key;
  if (args)
    for (const [k, v] of Object.entries(args))
      s = s.replaceAll(`{${k}}`, String(v));
  return s;
}

type I18nValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string, args?: Record<string, string>) => string;
};

const I18nCtx = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");

  useEffect(() => {
    const saved =
      (typeof window !== "undefined" &&
        (localStorage.getItem("lang") as Lang | null)) ||
      null;
    let initial: Lang = saved ?? "tr";
    if (!saved) {
      try {
        const nav = (navigator?.language || "").toLowerCase();
        initial = nav.startsWith("tr") ? "tr" : "en";
      } catch {}
    }
    setLangState(initial);
    document.documentElement.setAttribute("lang", initial);
    try {
      document.cookie = `lang=${initial}; path=/; max-age=31536000; samesite=lax`;
    } catch {}
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
    document.documentElement.setAttribute("lang", l);
    try {
      document.cookie = `lang=${l}; path=/; max-age=31536000; samesite=lax`;
    } catch {}
  }, []);

  const t = useCallback(
    (key: string, args?: Record<string, string>) => translate(key, lang, args),
    [lang],
  );
  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
