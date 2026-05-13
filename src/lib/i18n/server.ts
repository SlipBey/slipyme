import { cookies } from "next/headers";
import { translate, getRaw } from "./dict";
import { DEFAULT_LANG, SUPPORTED_LANGS, type Lang } from "./types";

const COOKIE = "lang";

function isSupportedLang(value: string | undefined): value is Lang {
  return !!value && SUPPORTED_LANGS.includes(value as Lang);
}

export async function getServerLang(): Promise<Lang> {
  const cookieStore = await cookies();
  const lang = cookieStore.get(COOKIE)?.value;

  if (isSupportedLang(lang)) return lang;

  return DEFAULT_LANG;
}

export async function tServer(
  key: string,
  args?: Record<string, string | number>,
): Promise<string> {
  const lang = await getServerLang();
  return translate(lang, key, args);
}

export async function getRawServer<T = unknown>(
  key: string,
): Promise<T | undefined> {
  const lang = await getServerLang();
  return getRaw<T>(lang, key);
}
