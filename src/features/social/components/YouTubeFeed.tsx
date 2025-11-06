"use client";

import { FiYoutube, FiEye, FiPlay } from "react-icons/fi";
import Image from "next/image";
import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { Link } from "@/components/Globals/Link";
import { useI18n } from "@/lib/i18n";

type YtItem = {
  id: string;
  title: string;
  publishedAt: string;
  thumbnail: string;
  views: number;
};

export default function YouTubeFeed({
  items,
  loading = false,
}: {
  items: YtItem[];
  loading?: boolean;
}) {
  const { t } = useI18n();
  const isEmpty = !loading && items?.length === 0;
  const nf = new Intl.NumberFormat("tr-TR");

  return (
    <AnimatedSection id="yt" className="pt-2 sm:pt-4 pb-6 sm:pb-10" mode="view">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <FiYoutube className="w-5 h-5" aria-hidden="true" focusable="false" />
          <h3 className="text-lg font-semibold">{t("social.youtubeTitle")}</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {loading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl bg-white/90 dark:bg-zinc-900/90 ring-1 ring-black/5 dark:ring-white/10"
              >
                <div className="h-1.5 bg-linear-to-r from-sky-500 via-cyan-500 to-indigo-500 opacity-90" />
                <div className="w-full aspect-video animate-pulse bg-zinc-200/60 dark:bg-white/10" />
                <div className="p-3 space-y-2">
                  <div className="h-3 w-5/6 rounded animate-pulse bg-zinc-200/60 dark:bg-white/10" />
                  <div className="h-3 w-1/3 rounded animate-pulse bg-zinc-200/60 dark:bg-white/10" />
                </div>
              </div>
            ))
          ) : isEmpty ? (
            <div className="text-sm opacity-70 col-span-full">
              {t("social.loading.youtube")}
            </div>
          ) : (
            items.map((v) => {
              const dateStr = new Date(v.publishedAt).toLocaleDateString(
                "tr-TR",
              );
              return (
                <Link
                  key={v.id}
                  href={`https://www.youtube.com/watch?v=${v.id}`}
                  className="
                    group relative block overflow-hidden rounded-2xl
                    bg-white/90 dark:bg-zinc-900/90
                    ring-1 ring-black/5 dark:ring-white/10
                    hover:shadow-md transition focus:outline-none
                    focus-visible:ring-2 focus-visible:ring-sky-400/60
                  "
                >
                  <div className="relative">
                    <Image
                      src={
                        v.thumbnail ||
                        `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`
                      }
                      alt={v.title}
                      width={1280}
                      height={720}
                      loading="lazy"
                      sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                      className="
                        w-full aspect-video object-cover
                        transition-transform duration-300 group-hover:scale-[1.03]
                      "
                    />

                    <div
                      aria-hidden
                      className="
                        pointer-events-none absolute inset-0
                        bg-linear-to-t from-black/35 via-black/10 to-transparent
                      "
                    />
                    <div
                      aria-hidden
                      className="
                        absolute inset-0 grid place-items-center
                        opacity-0 group-hover:opacity-100 transition
                      "
                    >
                      <div
                        className="
                          flex items-center gap-2 rounded-full px-3 py-1.5
                          bg-black/60 text-white text-xs
                          ring-1 ring-white/20
                        "
                      >
                        <FiPlay
                          className="w-4 h-4"
                          aria-hidden="true"
                          focusable="false"
                        />
                        {t("social.stats.badges.watch")}
                      </div>
                    </div>

                    {typeof v.views === "number" && (
                      <span
                        className="
                          absolute bottom-2 left-2 inline-flex items-center gap-1.5
                          text-[11px] px-2 py-1 rounded-md
                          bg-black/70 text-white ring-1 ring-white/20
                        "
                      >
                        <FiEye
                          className="w-3.5 h-3.5"
                          aria-hidden="true"
                          focusable="false"
                        />
                        {nf.format(v.views)}
                      </span>
                    )}
                    <span
                      className="
                        absolute bottom-2 right-2 text-[11px]
                        px-2 py-1 rounded-md
                        bg-black/60 text-white ring-1 ring-white/20
                      "
                    >
                      {dateStr}
                    </span>
                  </div>

                  <div className="p-3">
                    <div className="text-sm font-semibold leading-snug line-clamp-2 text-zinc-900 dark:text-zinc-100">
                      {v.title}
                    </div>
                  </div>

                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-2xl ring-1 ring-sky-500/30 opacity-0 group-hover:opacity-100 transition"
                  />
                </Link>
              );
            })
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}
