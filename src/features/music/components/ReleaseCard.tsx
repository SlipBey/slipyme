"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiDisc, FiMusic } from "react-icons/fi";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { fadeInUpSm } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";
import type { SpotifyRelease } from "../types";

function formatDate(value: string, locale: string) {
  if (!value) return "";
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return value;

  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function typeLabel(type: string, t: (key: string) => string) {
  const normalized = type?.toLowerCase?.() ?? "single";
  if (normalized === "album") return t("music.releaseTypes.album");
  if (normalized === "single") return t("music.releaseTypes.single");
  if (normalized === "compilation") return t("music.releaseTypes.compilation");
  return normalized;
}

type ReleaseCardProps = {
  item: SpotifyRelease;
};

export function ReleaseCard({ item }: ReleaseCardProps) {
  const { t, lang } = useI18n();
  const date = formatDate(item.releaseDate, lang === "tr" ? "tr-TR" : "en-US");

  return (
    <motion.article variants={fadeInUpSm}>
      <Card className="group h-full rounded-3xl p-4">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-sky-950/5 dark:bg-white/5">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="grid h-full place-items-center bg-linear-to-br from-sky-500/20 to-cyan-400/10">
              <FiDisc
                size={52}
                className="text-sky-600 dark:text-sky-300"
                aria-hidden
              />
            </div>
          )}

          <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-sky-700 shadow-sm backdrop-blur dark:bg-zinc-950/70 dark:text-sky-300">
              <FiMusic size={12} aria-hidden />
              {typeLabel(item.type, t)}
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/70 via-black/25 to-transparent" />
        </div>

        <div className="flex min-h-48 flex-col pt-4">
          <div className="flex-1">
            <h3 className="line-clamp-2 text-lg font-black tracking-tight text-zinc-900 dark:text-white">
              {item.name}
            </h3>

            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              {date ? <span>{date}</span> : null}
              {date ? <span aria-hidden>•</span> : null}
              <span>
                {t("music.trackCount", {
                  count: String(item.totalTracks ?? 0),
                })}
              </span>
            </div>
          </div>

          {item.spotifyUrl ? (
            <Link
              href={item.spotifyUrl}
              className="mt-5 block"
              aria-label={t("music.openSpotifyAria", { title: item.name })}
            >
              <Button
                size="md"
                className="group/btn w-full"
                icon={FiArrowUpRight}
              >
                {t("music.listenOnSpotify")}
              </Button>
            </Link>
          ) : null}
        </div>
      </Card>
    </motion.article>
  );
}
