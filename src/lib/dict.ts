import enJson from "@/locales/en.json";
import trJson from "@/locales/tr.json";

export type Lang = "tr" | "en";
type AnyRec = Record<string, any>;

function flatten(obj: AnyRec, prefix = ""): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object" && !Array.isArray(v)) {
      Object.assign(out, flatten(v, key));
    } else {
      out[key] = String(v);
    }
  }
  return out;
}

const enFlat = flatten(enJson as AnyRec);
const trFlat = flatten(trJson as AnyRec);

export const dict: Record<string, Record<Lang, string>> = {};
for (const key of new Set([...Object.keys(trFlat), ...Object.keys(enFlat)])) {
  dict[key] = { tr: trFlat[key] ?? key, en: enFlat[key] ?? key };
}
