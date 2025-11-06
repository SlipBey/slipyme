"use client";

import { useEffect, useState } from "react";
import {
  FiYoutube,
  FiInstagram,
  FiRefreshCcw,
  FiArrowRight,
} from "react-icons/fi";
import { AnimatedSection } from "@/components/Globals/AnimatedSection";
import { Link } from "@/components/Globals/Link";
import api from "@/libs/api";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

type StatsResponse = {
  updatedAt: string;
  instagram: { followers: number; mediaCount: number };
  youtube: { subs: number; views: number };
};

export default function SocialStats() {
  const { t } = useI18n();
  const [stats, setStats] = useState<StatsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    setErr(null);
    try {
      const { data } = await api.get<StatsResponse>("/api/social/stats");
      setStats(data ?? null);
    } catch (e) {
      setErr(t("social.errors.stats"));
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatedSection id="stats" className="py-6 sm:py-12 pb-4!" mode="view">
      {err && !loading ? (
        <div className="rounded-2xl ring-1 ring-red-500/20 bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-200 p-4 flex items-center justify-between mb-12">
          <span className="text-sm">{err}</span>
          <button
            onClick={load}
            className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg.white/20 transition"
          >
            <FiRefreshCcw
              className="w-4 h-4"
              aria-hidden="true"
              focusable="false"
            />
            {t("social.common.retry")}
          </button>
        </div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <PlatformCard
          loading={loading}
          title="YouTube"
          href="/youtube"
          icon={
            <FiYoutube
              className="w-5 h-5"
              aria-hidden="true"
              focusable="false"
            />
          }
          rows={
            stats?.youtube
              ? [
                  [t("social.stats.badges.subs"), fmt(stats.youtube.subs)],
                  [t("social.stats.badges.views"), fmt(stats.youtube.views)],
                ]
              : []
          }
          accent="from-red-400 via-rose-600 to-red-700"
        />
        <PlatformCard
          loading={loading}
          title="Instagram"
          href="/instagram"
          icon={
            <FiInstagram
              className="w-5 h-5"
              aria-hidden="true"
              focusable="false"
            />
          }
          rows={
            stats?.instagram
              ? [
                  [
                    t("social.stats.badges.fallowers"),
                    fmt(stats.instagram.followers),
                  ],
                  [
                    t("social.stats.badges.media"),
                    fmt(stats.instagram.mediaCount),
                  ],
                ]
              : []
          }
          accent="from-pink-400 via-pink-600 to-pink-700"
        />
      </div>

      {stats?.updatedAt ? (
        <div className="mt-4 text-xs opacity-60 text-center md:text-left">
          {t("social.stats.updatedAt")}{" "}
          {new Date(stats.updatedAt).toLocaleString("tr-TR")}
        </div>
      ) : null}
    </AnimatedSection>
  );
}

function PlatformCard({
  title,
  icon,
  href,
  rows,
  loading,
  accent,
}: {
  title: string;
  icon: React.ReactNode;
  href: string;
  rows: [string, string][];
  loading: boolean;
  accent: string;
}) {
  const { t } = useI18n();
  return (
    <Link
      blank
      href={href}
      aria-label={`${title} ${t("social.viewMore")}`}
      className="group block relative rounded-2xl p-0 overflow-hidden bg-white ring-1 ring-black/5 shadow-sm hover:shadow-md dark:shadow-zinc-700 dark:bg-zinc-900 dark:ring-white/10 transition"
    >
      <div className={`h-1.5 w-full ${accent} bg-linear-to-r opacity-90`} />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center justify-center rounded-md px-2 py-1 text-xs font-medium bg-black/5 text-black/70 dark:bg-white/10 dark:text-white/80">
              {icon}
              <span className="ml-2">{title}</span>
            </span>
          </div>
          {loading ? (
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/40 dark:bg-white/50 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black/70 dark:bg-white/80" />
            </span>
          ) : null}
        </div>

        {loading ? (
          <SkeletonRows />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="space-y-3"
          >
            {rows.map(([l, v]) => (
              <div key={l} className="flex items-end justify-between">
                <span className="text-sm text-zinc-600 dark:text-zinc-300">
                  {l}
                </span>
                <span className="text-xl font-extrabold tracking-tight">
                  {v}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      <div className="px-5 pb-4">
        <div className="mt-3 h-px w-full bg-black/5 dark:bg-white/10" />
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs opacity-60">{title}</span>
          <span className="inline-flex items-center gap-1 text-sm font-medium opacity-80 group-hover:opacity-100">
            {`${title} ${t("social.viewMore")}`}
            <FiArrowRight
              className="w-4 h-4"
              aria-hidden="true"
              focusable="false"
            />
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 mask-[radial-gradient(60%_60%_at_80%_0%,black,transparent)]">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-black/5 dark:bg-white/5 blur-2xl transition-transform duration-300 group-hover:scale-110" />
      </div>
    </Link>
  );
}

function SkeletonRows() {
  return (
    <div className="space-y-3">
      {[0, 1].map((i) => (
        <div key={i} className="flex items-end justify-between">
          <span className="h-3 w-24 rounded animate-pulse bg-zinc-200/60 dark:bg-white/10" />
          <span className="h-4 w-16 rounded animate-pulse bg-zinc-200/60 dark:bg.white/15" />
        </div>
      ))}
    </div>
  );
}

const fmt = (n: number) =>
  Number.isFinite(n) ? new Intl.NumberFormat("tr-TR").format(n) : "0";
