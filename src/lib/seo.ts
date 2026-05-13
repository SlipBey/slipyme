import type { Metadata } from "next";
import { SITE } from "@/config/site";

type Opts = {
  title?: string;
  description?: string;
  alternates?: { canonical?: string };
  images?: string[];
};

export function buildMetadata(opts: Opts = {}): Metadata {
  const pageTitle = opts.title ?? SITE.name;
  const description = opts.description ?? SITE.description;
  const canonical = opts.alternates?.canonical
    ? `${SITE.url}${opts.alternates.canonical}`
    : SITE.url;

  const images = (opts.images?.length ? opts.images : [SITE.ogImage]).map(
    (url) => ({ url }),
  );

  return {
    metadataBase: new URL(SITE.url),
    title: opts.title
      ? `${opts.title}`
      : { default: SITE.name, template: SITE.layoutTitle },
    description,
    keywords: [...SITE.keywords],
    icons: { icon: "/resimler/logo.png", apple: "/apple-touch-icon.png" },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: SITE.name,
      title: pageTitle,
      description,
      images,
      locale: "tr_TR",
      alternateLocale: ["en_GB", "en_US"],
    },
    twitter: {
      card: "summary",
      title: pageTitle,
      description,
      images: images.map((i) => i.url ?? SITE.ogImage),
    },
    alternates: {
      canonical,
      languages: {
        "tr-TR": canonical,
        "en-US": canonical,
      },
    },
  };
}
