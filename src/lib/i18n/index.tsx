"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translate, getRaw } from "./dict";
import {
  DEFAULT_LANG,
  SUPPORTED_LANGS,
  type Lang,
  type Translator,
} from "./types";

type I18nValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translator;
  getRaw: <T = unknown>(key: string) => T | undefined;
};

const I18nCtx = createContext<I18nValue | null>(null);

const COOKIE = "lang";
const ONE_YEAR = 60 * 60 * 24 * 365;

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(
    value,
  )}; path=/; max-age=${ONE_YEAR}; samesite=lax`;
}

function detectInitial(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;

  const fromCookie = readCookie(COOKIE) as Lang | null;
  if (fromCookie && SUPPORTED_LANGS.includes(fromCookie)) return fromCookie;

  try {
    const fromStorage = localStorage.getItem(COOKIE) as Lang | null;
    if (fromStorage && SUPPORTED_LANGS.includes(fromStorage))
      return fromStorage;
  } catch {}

  try {
    const nav = (navigator?.language || "").toLowerCase();
    return nav.startsWith("tr") ? "tr" : "en";
  } catch {
    return DEFAULT_LANG;
  }
}

export function I18nProvider({
  initialLang,
  children,
}: {
  initialLang?: Lang;
  children: ReactNode;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang ?? DEFAULT_LANG);

  useEffect(() => {
    if (initialLang) return;
    const detected = detectInitial();
    if (detected !== lang) setLangState(detected);
  }, [initialLang]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", lang);
    }
    writeCookie(COOKIE, lang);
    try {
      localStorage.setItem(COOKIE, lang);
    } catch {}
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
  }, []);

  const t = useCallback<Translator>(
    (key, args) => translate(lang, key, args),
    [lang],
  );

  const getRawForLang = useCallback(
    <T,>(key: string) => getRaw<T>(lang, key),
    [lang],
  );

  const value = useMemo(
    () => ({ lang, setLang, t, getRaw: getRawForLang }),
    [lang, setLang, t, getRawForLang],
  );

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}

export type { Lang } from "./types";
