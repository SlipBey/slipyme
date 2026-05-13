export type Lang = "tr" | "en";

export const SUPPORTED_LANGS: readonly Lang[] = ["tr", "en"] as const;
export const DEFAULT_LANG: Lang = "tr";

export const LANG_LABELS: Record<Lang, string> = {
  tr: "Türkçe",
  en: "English",
};

export const LANG_SHORT: Record<Lang, string> = {
  tr: "TR",
  en: "EN",
};

export type Translator = (
  key: string,
  args?: Record<string, string | number>,
) => string;

export type RawTranslations = Record<string, unknown>;
