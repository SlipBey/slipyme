"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Link } from "@/components/ui/Link";
import { useI18n } from "@/lib/i18n";
import { FiInstagram, FiPlayCircle, FiLayers } from "react-icons/fi";

type IgItem = {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  timestamp?: string;
};

export function InstagramFeed({
  items,
  loading = false,
}: {
  items: IgItem[];
  loading?: boolean;
}) {
  const { t } = useI18n();
  const isEmpty = !loading && items?.length === 0;

  return (
    <Section id="ig" className="py-8 md:py-12">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <FiInstagram size={18} aria-hidden />
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {t("social.instagramTitle")}
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {loading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden glass ring-1 ring-black/5 dark:ring-white/10"
              >
                <div className="w-full h-40 animate-pulse bg-zinc-200/60 dark:bg-white/10" />
              </div>
            ))
          ) : isEmpty ? (
            <div className="text-sm opacity-70 col-span-full">
              {t("social.loading.instagram")}
            </div>
          ) : (
            items.map((it) => {
              const raw = it.thumbnail_url ?? it.media_url;
              const isVideo = it.media_type === "VIDEO";
              const isAlbum = it.media_type === "CAROUSEL_ALBUM";
              return (
                <Link
                  key={it.id}
                  href={it.permalink}
                  blank
                  className="group relative block rounded-xl overflow-hidden
                             glass ring-1 ring-black/5 dark:ring-white/10
                             hover:ring-sky-500/40 transition-all"
                >
                  <Image
                    src={raw}
                    alt={it.caption ?? ""}
                    width={400}
                    height={160}
                    loading="lazy"
                    sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
                    className="w-full h-40 object-cover transition-transform group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-t from-black/40 via-black/0 to-transparent
                                  opacity-0 group-hover:opacity-100 transition"
                  />

                  {isVideo || isAlbum ? (
                    <span
                      className="absolute top-2 right-2 inline-flex items-center gap-1 text-[10px]
                                     px-1.5 py-0.5 rounded bg-black/70 text-white border border-white/20"
                    >
                      {isVideo ? (
                        <FiPlayCircle size={12} aria-hidden />
                      ) : (
                        <FiLayers size={12} aria-hidden />
                      )}
                      {isVideo
                        ? t("social.stats.badges.video")
                        : t("social.stats.badges.album")}
                    </span>
                  ) : null}
                </Link>
              );
            })
          )}
        </div>
      </div>
    </Section>
  );
}
