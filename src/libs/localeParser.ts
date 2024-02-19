import en from "@/locales/en.json";
import tr from "@/locales/tr.json";
import { useRouter } from "next/router";

const locales = { en, tr };

class LocaleParser {
  private locale: keyof typeof locales;

  constructor(locale: keyof typeof locales = "tr") {
    this.locale = locale;
  }

  public get(
    name: keyof typeof locales.tr,
    args?: { [param: string]: string },
  ): string {
    const locale = locales[this.locale] || locales.tr;
    let str = locale[name];

    if (!str)
      return `string not found for ${name} in ${
        this.locale || "tr"
      }, please contact the developer with contact@slipyme.com.`;

    // Args parametresi varsa, içindeki parametreleri string'e yerleştir.
    if (args) {
      for (const key in args) {
        str = str.replace(`{${key}}`, args[key]);
      }
    }

    return str;
  }
}

export function useLocaleParser() {
  const router = useRouter();
  const parser = new LocaleParser(router.locale as keyof typeof locales);
  return parser;
}
