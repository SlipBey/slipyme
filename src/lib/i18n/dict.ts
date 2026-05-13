import enJson from "@/locales/en.json";
import trJson from "@/locales/tr.json";
import type { Lang, RawTranslations } from "./types";

const SOURCES: Record<Lang, RawTranslations> = {
  tr: trJson as RawTranslations,
  en: enJson as RawTranslations,
};

function resolve(tree: unknown, key: string): unknown {
  if (!key) return undefined;
  const parts = key.split(".");
  let node: unknown = tree;
  for (const p of parts) {
    if (node && typeof node === "object" && p in (node as object)) {
      node = (node as Record<string, unknown>)[p];
    } else {
      return undefined;
    }
  }
  return node;
}

function interpolate(s: string, args?: Record<string, string | number>) {
  if (!args) return s;
  let out = s;
  for (const [k, v] of Object.entries(args)) {
    out = out.replaceAll(`{${k}}`, String(v));
  }
  return out;
}

export function translate(
  lang: Lang,
  key: string,
  args?: Record<string, string | number>,
): string {
  const primary = resolve(SOURCES[lang], key);
  if (typeof primary === "string") return interpolate(primary, args);

  if (lang !== "tr") {
    const fallback = resolve(SOURCES.tr, key);
    if (typeof fallback === "string") return interpolate(fallback, args);
  }
  return key;
}

export function getRaw<T = unknown>(lang: Lang, key: string): T | undefined {
  const primary = resolve(SOURCES[lang], key);
  if (primary !== undefined) return primary as T;
  if (lang !== "tr") {
    const fb = resolve(SOURCES.tr, key);
    if (fb !== undefined) return fb as T;
  }
  return undefined;
}
